import { formatNumber } from '@synthetixio/formatters';
import { ReactNode } from 'react';
import { Card, CardProps, Flex, Skeleton, Text, Tooltip } from '@chakra-ui/react';
import ExplorerIcon from '../ExplorerIcon/ExplorerIcon';
import { InfoIcon } from '@chakra-ui/icons';

const CardStats = ({
  value,
  label,
  minDigit = 2,
  maxDigit = 2,
  prefix = '',
  postfix = '',
  tooltip,
  isLoading,
  hasOptimism,
  hasMainnet,
  ...props
}: {
  value?: number;
  label: string;
  color?: string;
  minDigit?: number;
  maxDigit?: number;
  fontWeight?: string;
  prefix?: string;
  postfix?: string;
  tooltip?: ReactNode;
  isLoading?: boolean;
  hasOptimism?: boolean;
  hasMainnet?: boolean;
} & CardProps) => {
  return (
    <Card
      px="24px"
      py="14px"
      backgroundColor="navy.700"
      borderRadius="5px"
      border="1px solid"
      borderColor="gray.900"
      height="80px"
      justifyContent="center"
      {...props}
    >
      <Flex alignItems="center" gap={1}>
        <Text color="gray.500" fontSize="14px" fontWeight="400">
          {label}
        </Text>
        {hasMainnet && <ExplorerIcon currencyKey="ETH" />}
        {hasOptimism && <ExplorerIcon currencyKey="OP" />}
        {tooltip && (
          <Tooltip
            placement="top"
            maxWidth="450px"
            py={2}
            px={4}
            bg="gray.900"
            color="white"
            fontSize="14px"
            fontFamily="heading"
            borderRadius="4px"
            label={tooltip}
            hasArrow
          >
            <InfoIcon width="12px" height="12px" color="gray.500" />
          </Tooltip>
        )}
      </Flex>
      {value !== undefined ? (
        <Text color="gray.50" fontSize="24px" fontWeight="800">
          {prefix}
          {formatNumber(value, {
            minimumFractionDigits: minDigit,
            maximumFractionDigits: maxDigit,
          })}
          {postfix}
        </Text>
      ) : (
        <Skeleton my={1} width={8} height={4} />
      )}
    </Card>
  );
};

export default CardStats;
