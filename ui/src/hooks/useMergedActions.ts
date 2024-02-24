import { usePolynomialAccount } from './usePolynomialAccount';
import { useKwentaAccount } from './useKwentaAccount';
import { useActions } from './useActions';
import type Wei from '@synthetixio/wei';
import { useMemo } from 'react';
import { usePageChangeWithLimit } from './helpers/usePageChange';
import { pageToOffset, PaginationConfigProps, totalToPages } from '../components/Pagination';

interface MergedAction {
  address: string;
  asset: string;
  fees: Wei | null;
  id: string;
  label: string;
  leverage: Wei | null;
  price: Wei | null;
  size: Wei;
  timestamp: Wei;
  txHash: string;
  protocol?: string;
}

export const useMergedActions = (account?: string) => {
  const { data: kwentaAccount } = useKwentaAccount(account);
  const { data: polynomialAccount } = usePolynomialAccount(account);

  const ITEMS_PER_PAGE = 5;
  const { currentPage, changeCurrentPage, currentLimit, changeCurrentLimit } =
    usePageChangeWithLimit({
      pageName: 'actionPg',
      limitName: 'actionLimit',
      defaultLimit: ITEMS_PER_PAGE,
    });

  const ITEMS = 1000;
  const { data, loading, error } = useActions(account, ITEMS);
  const {
    data: dataKwenta,
    loading: loadingKwenta,
    error: errorKwenta,
  } = useActions(kwentaAccount?.account ?? '', ITEMS);
  const {
    data: dataPolynomial,
    loading: loadingPolynomial,
    error: errorPolynomial,
  } = useActions(polynomialAccount?.account ?? '', ITEMS);

  const isDataLoading = loading || loadingKwenta || loadingPolynomial;

  let mergedArray: MergedAction[] = [];

  if (!isDataLoading) {
    mergedArray = [...(Array.isArray(data) ? data : [])];

    if (Array.isArray(dataKwenta)) {
      const dataKwentaWithProp = dataKwenta.map((obj) => ({
        ...obj,
        protocol: 'kwenta',
      }));
      mergedArray = [...mergedArray, ...dataKwentaWithProp];
    }

    if (Array.isArray(dataPolynomial)) {
      const dataPolynomialWithProp = dataPolynomial.map((obj) => ({
        ...obj,
        protocol: 'polynomial',
      }));
      mergedArray = [...mergedArray, ...dataPolynomialWithProp];
    }
  }

  const uniqueAssets: string[] = Array.from(new Set(mergedArray.map((item) => item.asset)));

  const paginationConfig = useMemo(() => {
    return {
      limit: currentLimit,
      offset: pageToOffset(currentPage, currentLimit),
      total: mergedArray.length,
      totalPages: totalToPages(mergedArray.length, currentLimit),
    } satisfies PaginationConfigProps;
  }, [currentLimit, currentPage, mergedArray.length]);

  const errors = [error, errorKwenta, errorPolynomial].filter((e) => e !== undefined);
  const parsedData = useMemo(
    () =>
      mergedArray
        .sort((a, b) => b.timestamp.toNumber() - a.timestamp.toNumber())
        .slice(
          paginationConfig.offset,
          paginationConfig.offset + currentLimit > mergedArray.length
            ? undefined
            : paginationConfig.offset + currentLimit
        ),
    [mergedArray, paginationConfig.offset, currentLimit]
  );

  return {
    loading: isDataLoading,
    data: parsedData,
    error: errors.length > 0 ? errors : null,
    uniqueAssets,
    currentPage,
    currentLimit,
    changeCurrentPage,
    changeCurrentLimit,
    paginationConfig,
  };
};
