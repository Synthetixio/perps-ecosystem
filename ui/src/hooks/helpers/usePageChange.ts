import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function usePageChange({
  pageName,
  callback,
}: {
  pageName: string;
  callback?: () => void;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(getInitValue(searchParams, pageName, 1));

  const changeCurrentPage = (page: number) => {
    if (page === currentPage) return;
    callback && callback();
    setTimeout(() => setSearchParams({ [pageName]: page.toString() }), 0);
    setCurrentPage(page);
  };
  return { currentPage, setCurrentPage, changeCurrentPage };
}
export function usePageChangeWithLimit({
  pageName,
  limitName,
  defaultLimit,
  callbackFunc,
}: {
  pageName: string;
  limitName: string;
  defaultLimit: number;
  callbackFunc?: (args?: { page?: number; limit?: number }) => void;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(getInitValue(searchParams, pageName, 1));
  const [currentLimit, setCurrentLimit] = useState(
    getInitValue(searchParams, limitName, defaultLimit)
  );

  // useEffect(() => {
  //   callback && callback({ page: currentPage, limit: currentLimit })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const changeCurrentPage = (page: number, shouldExecuteCallback = true) => {
    if (page === currentPage) return;
    shouldExecuteCallback && callbackFunc && callbackFunc({ page, limit: currentLimit });
    setCurrentPage(page);
    setTimeout(() => setSearchParams({ [pageName]: page.toString() }), 100);
  };
  const changeCurrentLimit = (limit: number) => {
    if (limit === currentLimit) return;
    callbackFunc && callbackFunc({ limit, page: 1 });
    setCurrentLimit(limit);
    setCurrentPage(1);
    setTimeout(() => {
      setSearchParams({ [limitName]: limit.toString(), [pageName]: '1' });
    }, 100);
  };
  return { currentPage, setCurrentPage, changeCurrentPage, currentLimit, changeCurrentLimit };
}

export const getInitValue = (searchParams: URLSearchParams, key: string, defaultValue?: number) => {
  const value = searchParams.get(key) as string;
  if (!value) return defaultValue ?? 0;
  const parsedNumber = Number(value);
  if (isNaN(parsedNumber)) return defaultValue ?? 0;
  return parsedNumber;
};
