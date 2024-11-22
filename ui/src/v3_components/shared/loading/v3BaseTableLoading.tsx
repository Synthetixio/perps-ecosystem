import { SkeletonCircle, Skeleton, Td, Tr, Box, Flex } from '@chakra-ui/react';

interface V3BaseLoadingProps {
  columns: number;
  rows: number;
}

export const V3BaseTableLoading = ({ rows, columns }: V3BaseLoadingProps) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <Tr borderTopWidth="1px" key={rowIndex}>
          <Flex as={Td} border="none" alignItems="center">
            <SkeletonCircle mr={4} startColor="gray.700" endColor="gray.900" />
            <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
              Lorem Ipsum
            </Skeleton>
          </Flex>
          {Array.from({ length: columns }).map((_, columnIndex) => (
            <Box as={Td} border="none" key={columnIndex}>
              <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
                Lorem Ipsum
              </Skeleton>
            </Box>
          ))}
        </Tr>
      ))}
    </>
  );
};
