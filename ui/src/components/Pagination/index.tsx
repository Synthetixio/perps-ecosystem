import { useEffect, useRef } from 'react';
import { BoxProps, Center, Flex, IconButton, Select, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { formatNumber } from '@synthetixio/formatters';

export interface PaginationConfigProps {
  limit: number;
  offset: number;
  total: number;
  totalPages: number;
}

export const DEFAULT_LIMIT_VALUES = [5, 10, 50];

export const pageToOffset = (page: number, limit: number) => (page - 1) * limit;
export const offsetToPage = (offset: number, limit: number) => offset / limit + 1;
export const totalToPages = (total: number, limit: number) => Math.ceil(total / limit);

export const lengthOfPage = (total: number, page: number, limit: number) =>
  Math.min(total - (page - 1) * limit, limit);

export function PaginationWithLimit({
  currentPage,
  currentLimit,
  onPageChange,
  onLimitChange,
  defaultLimit,
  config,
  ...props
}: {
  currentPage: number;
  currentLimit: number;
  defaultLimit?: number | number[];
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  config?: PaginationConfigProps;
} & BoxProps) {
  const { totalPages = 0 } = config ?? {};
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.value = currentPage.toString();
  }, [currentPage]);

  if (totalPages === 0) return <></>;
  const { sx = {}, ...rest } = props ?? {};

  const limitValues =
    defaultLimit != null
      ? typeof defaultLimit === 'number'
        ? Array.from({ length: 3 }, (_, v) => Math.pow(2, v) * defaultLimit)
        : defaultLimit
      : DEFAULT_LIMIT_VALUES;

  return (
    <Flex
      sx={{
        columnGap: [1, 1, 2],
        rowGap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...sx,
      }}
      {...rest}
    >
      <Flex sx={{ gap: [1, 1, 2], alignItems: 'center' }}>
        <Center>
          <Text fontSize="sm" color="gray.500">
            Show
          </Text>
        </Center>
        <Select
          size="sm"
          borderRadius="6px"
          value={currentLimit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
        >
          {limitValues.map((limitValue) => {
            return (
              <option key={limitValue} value={limitValue} selected={limitValue === currentLimit}>
                {limitValue}
              </option>
            );
          })}
        </Select>
      </Flex>
      <PaginationWithSelect currentPage={currentPage} config={config} onPageChange={onPageChange} />
    </Flex>
  );
}

export function PaginationWithSelect({
  currentPage,
  onPageChange,
  config,
  sx = {},
}: {
  currentPage: number;
  onPageChange: (page: number) => void;
  config?: PaginationConfigProps;
  sx?: any;
}) {
  const { offset = 0, limit = 0, total = 0, totalPages = 0 } = config ?? {};
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.value = currentPage.toString();
  }, [currentPage]);

  if (totalPages === 0) return <></>;

  return (
    <Flex sx={{ gap: [1, 1, 2, 2, 2], alignItems: 'center', ...sx }}>
      <Center>
        <Text fontSize="sm" color="gray.500">
          {formatNumber(offset + 1, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} -{' '}
          {formatNumber(offset + lengthOfPage(total, currentPage, limit), {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}{' '}
          of {formatNumber(total, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        </Text>
      </Center>
      <Flex
        sx={{
          height: '32px',
          alignItems: 'center',
          gap: [1, 2],
          bg: 'neutral6',
          border: 'small',
          borderColor: 'transparent',
          borderRadius: 'sm',
          '&:hover': {
            borderColor: 'neutral3',
          },
        }}
      >
        <IconButton
          variant="outline"
          aria-label="minus page"
          colorScheme="gray"
          size="xs"
          icon={<ArrowBackIcon />}
          isDisabled={!totalPages || currentPage === 1 || offset === 0}
          onClick={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}
        />
        <IconButton
          variant="outline"
          aria-label="add page"
          colorScheme="gray"
          size="xs"
          icon={<ArrowForwardIcon />}
          isDisabled={!totalPages || currentPage === totalPages}
          onClick={() => onPageChange(currentPage === totalPages ? totalPages : currentPage + 1)}
        />
      </Flex>
    </Flex>
  );
}
