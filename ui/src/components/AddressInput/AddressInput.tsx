import { ethers } from 'ethers';
import { SearchIcon } from '@chakra-ui/icons';
import { Button, Flex, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';
import { useState } from 'react';

interface SearchFormData {
  address: string;
}

export const AddressInput = () => {
  const { globalProviders } = useGlobalProvidersWithFallback();
  const L1DefaultProvider = globalProviders.mainnet;

  const [inputError, setInputError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { register, getValues, handleSubmit } = useForm<SearchFormData>({
    defaultValues: { address: '' },
  });

  const onSubmit: SubmitHandler<SearchFormData> = async (data) => {
    setInputError(null);
    const address = data.address.trim();

    if (address) {
      if (address.endsWith('.ens') || !ethers.utils.isAddress(address)) {
        try {
          const ens: string | null = await L1DefaultProvider.resolveName(address);

          if (ens) {
            navigate(`/${ens}`);
            return;
          } else {
            setInputError(`Failed to resolve ENS name: ${address}`);
            return;
          }
        } catch (e) {
          setInputError('Error resolving ENS name');
          return;
        }
      }

      navigate(`/${address}`);
    } else {
      setInputError('Please enter an address or ENS name');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex alignSelf="end" justifyContent="flex-end" alignItems="center" mb="3px">
        <Input
          placeholder="Search by ENS / address"
          w="50%"
          minW={{ base: 'auto', md: '250px' }}
          {...register('address', {
            onChange: (e) => {
              if (!e.target.value.trim()) setInputError(null);
            },
          })}
          alignSelf="end"
          borderColor={inputError ? 'red.500' : 'gray.900'}
          isInvalid={!!inputError}
          onKeyDown={({ key }) => {
            if (key === 'Enter') {
              onSubmit(getValues());
            }
          }}
        />
        <Button
          variant="unstyled"
          type="submit"
          ml={3}
          borderWidth="1px"
          borderColor="gray.900"
          py="7px"
          px="12px"
          borderRadius="7px"
        >
          <SearchIcon color="gray.100" />
        </Button>
      </Flex>
    </form>
  );
};
