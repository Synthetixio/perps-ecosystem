import { SkeletonCircle, Skeleton, Td, Tr, Box, Flex } from '@chakra-ui/react';

export const ClosedPositionsLoading = () => {
  const createSkeletonRow = () => (
    <Tr borderTopWidth="1px">
      <Flex as={Td} border="none" alignItems="center">
        <SkeletonCircle mr={2} startColor="gray.700" endColor="gray.900" />
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Flex>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>

      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>

      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>

      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>

      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>

      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
    </Tr>
  );

  return (
    <>
      {createSkeletonRow()}
      {createSkeletonRow()}
      {createSkeletonRow()}
    </>
  );
};

/*
<Tr borderTopWidth="1px">
      <Flex as={Td} border="none" alignItems="center">
        <Box as={Td} border="none">
          <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
            Lorem Ipsum
          </Skeleton>
      </Box>
        <SkeletonCircle mr={4} startColor="gray.700" endColor="gray.900" />
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Flex>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
      <Box as={Td} border="none">
        <Skeleton startColor="gray.700" endColor="gray.900" my={2}>
          Lorem Ipsum
        </Skeleton>
      </Box>
    </Tr>
    */
