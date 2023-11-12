import { ethers } from 'ethers';
import { SearchIcon } from '@chakra-ui/icons';
import { Button, Flex, Input } from '@chakra-ui/react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGlobalProvidersWithFallback } from '@synthetixio/use-global-providers';
import { KeyboardEvent, useState } from 'react';

interface SearchFormData {
  address: string;
}

export const AddressInput = (): JSX.Element => {
  const { globalProviders } = useGlobalProvidersWithFallback();

  const L1DefaultProvider = globalProviders.mainnet;

  const [inputError, setInputError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { register, getValues, resetField } = useForm<SearchFormData>({
    defaultValues: { address: '' },
  });

  const onSubmit: SubmitHandler<SearchFormData> = async (data) => {
    setInputError(null);
    console.log('data', data);
    const address = data.address.trim();

    if (address.length > 0) {
      if (address.endsWith('.eth')) {
        try {
          const ens: string | null = await L1DefaultProvider.resolveName(address);

          if (ens != null) {
            resetField('address');
            navigate(`/${ens}`);
          } else {
            setInputError(`Failed to resolve ENS name: ${address}`);
          }
        } catch (e) {
          setInputError('Error resolving ENS name');
        }
      } else if (ethers.utils.isAddress(address)) {
        resetField('address');
        navigate(`/${address}`);
      } else {
        setInputError('Invalid address or ENS name');
      }
    } else {
      setInputError('Please enter an address or ENS name');
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
          borderColor={inputError ? 'red.500 !important' : 'gray.900'}
          isInvalid={!!inputError}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              onSubmit(getValues());
              e.currentTarget.blur();
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
          onClick={() => onSubmit(getValues())}
        >
          <SearchIcon color="gray.100" />
        </Button>
      </Flex>
    </form>
  );
};
