import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Text, IconButton, Center, Stack } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

interface PageFilterProps {
  pageParam: string;
  hasNextPage?: boolean;
}

export const ClosedPositionsPagination = ({ pageParam, hasNextPage }: PageFilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get(pageParam)) || 1;

  const updatePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(pageParam, newPage.toString());
    setSearchParams(newParams);
  };

  return (
    <>
      <Stack direction="row" spacing="4" p="1">
        <IconButton
          variant="outline"
          aria-label="minus page"
          colorScheme="gray"
          size="xs"
          icon={<ArrowBackIcon />}
          onClick={() => updatePage(page - 1)}
          isDisabled={page <= 1}
        />
        <Center>
          <Text fontSize="lg">{page}</Text>
        </Center>
        <IconButton
          variant="outline"
          aria-label="add page"
          colorScheme="gray"
          size="xs"
          onClick={() => updatePage(page + 1)}
          icon={<ArrowForwardIcon />}
          isDisabled={!hasNextPage}
        />
      </Stack>
    </>
  );
};
