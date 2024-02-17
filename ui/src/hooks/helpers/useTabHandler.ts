import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const getTab = (searchParams: URLSearchParams, defaultTab: string, tabKey?: string) =>
  (searchParams.get(tabKey ?? 'tab') as string) || defaultTab;

const useTabHandler = (defaultTab: string, shouldChangeUrl = true, tabKey?: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState<string>(
    shouldChangeUrl ? getTab(searchParams, defaultTab, tabKey) : defaultTab
  );

  const handleTab = useCallback(
    (currentTab: string) => {
      setTab(currentTab);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(tabKey ?? 'tab', currentTab.toString());
      setTimeout(() => {
        shouldChangeUrl && setSearchParams(newParams);
      }, 100);
    },
    [searchParams, tabKey, shouldChangeUrl]
  );
  return { tab, handleTab };
};

export default useTabHandler;
