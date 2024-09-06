import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuList, Flex } from '@chakra-ui/react';
import { MarketCheckbox } from './V3BaseMarketCheckbox';
import { CurrencyIcon } from '../../../components/CurrencyIcon';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Market } from '../../../v3_types';

interface V3BaseMarketSelectProps {
  markets?: Market[];
  route: string;
}

export const V3BaseMarketSelect = ({ markets, route }: V3BaseMarketSelectProps) => {
  const [searchParams] = useSearchParams();
  const initialState = searchParams.get('markets')?.split(',') ?? [];

  const [activeAssets, setActiveAssets] = useState<string[]>(initialState);

  const navigate = useNavigate();

  const onClick = (selectedMarkets: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    const selectedIds = markets
      ?.filter((market) => selectedMarkets.includes(market.marketSymbol))
      .map((market) => market.id) // Extract market.id to be used in the URL
      .join(',');

    if (selectedIds && selectedIds.length !== 0) {
      newParams.set('markets', selectedIds);
    } else {
      newParams.delete('markets');
    }

    newParams.delete('page');

    navigate({
      pathname: `/${route}`,
      search: `?${newParams.toString()}`,
    });
  };

  return (
    <Menu>
      <MenuButton
        color="gray.500"
        fontSize="16px"
        lineHeight="24px"
        fontWeight={400}
        width={{ base: '225px', md: '25%' }}
        minWidth="225px"
        _hover={{
          background: 'none',
        }}
        _active={{
          background: 'none',
        }}
        textAlign="start"
        bg="none"
        borderWidth="1px"
        borderColor="gray.900"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {activeAssets.length === 0 ? 'All Markets' : activeAssets.join(', ')}
      </MenuButton>
      <MenuList>
        <Flex
          bg="navy.900"
          p={1}
          borderColor="gray.900"
          borderWidth="1px"
          borderRadius="md"
          flexDirection="column"
        >
          <MarketCheckbox
            label="ALL"
            isChecked={activeAssets.length === 0}
            onChange={() => {
              setActiveAssets([]);
              onClick('');
            }}
          />
          {markets?.map((market) => (
            <MarketCheckbox
              key={market.id}
              icon={<CurrencyIcon width={20} height={20} currencyKey={market.marketSymbol} />}
              label={market.marketName}
              onChange={(e) => {
                if (activeAssets.includes(market.marketSymbol) && !e.target.checked) {
                  const newState = activeAssets.filter((asset) => asset !== market.marketSymbol);
                  setActiveAssets(newState);
                  onClick(newState.join(','));
                } else {
                  const newState = [...activeAssets, market.marketSymbol];
                  setActiveAssets(newState);
                  onClick(newState.join(','));
                }
              }}
              isChecked={activeAssets.includes(market.marketSymbol)}
            />
          ))}
        </Flex>
      </MenuList>
    </Menu>
  );
};
