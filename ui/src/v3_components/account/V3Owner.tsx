import { Flex, Heading, Button, Box, Link, IconButton, Text, Select } from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { basescanLink } from '../../utils';
import useAccountFavorites from '../../hooks/store/useAccountFavorites';
import CopyButton from '../../components/Shared/CopyButton/CopyButton';
import { StarOutlinedIcon } from '../../components/Icons/StarOutlinedIcon';
import V3BaseStats from './Trader/V3BaseStats';
import { V3BaseAccountName } from './accountComponents/V3BaseAccountName';
import { useV3BaseAccounts } from '../../v3_hooks/useV3BaseAccounts';
import { V3BaseOwnerAccountStats } from './Trader/V3BaseOwnerAccountStats';
import { utils } from 'ethers';
import { useV3BaseEnsName } from '../../v3_hooks/useV3BaseEnsName';


export const V3Owner = () => {

    const navigate = useNavigate();
    const { owner } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const accountId = searchParams.get('accountId');
    const isValidOwner = utils.isAddress(owner ?? '');

    if (!isValidOwner || !owner) {
        return (
            <Box px={{ base: '16px', md: '40px' }}>
                <Text>Invalid owner address</Text>
            </Box>
        );
    }

    // Get the ENS name using the useEnsName hook
    const { addressEnsName } = useV3BaseEnsName(owner);
    
    const accountFilter = {
        owner
    }

    const { data, loading, error } = useV3BaseAccounts({
        first: 100,
        accountFilter
    })

    const account = data?.find((account) => account.id === accountId) ?? data[0];
   
    const handleAccountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newAccountId = event.target.value;
        setSearchParams({ accountId: newAccountId }, { replace: true });
    };

    const { isFavorite, saveAccountFavorite, removeAccountFavorite } = useAccountFavorites(
        owner
    );


    if (loading) {
        return (
            <Box px={{ base: '16px', md: '40px' }}>
                <Text>Loading data...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box px={{ base: '16px', md: '40px' }}>
                <Text>Error loading data: {error.message}</Text>
            </Box>
        );
    }



    return (
        <Flex flexDir="column" px={{ base: '16px', md: '40px' }} py={2}>
            <Box mt={12}>
                <Button
                    variant="ghost"
                    fontWeight="700"
                    onClick={() => {
                        if (window.history.state && window.history.state.idx > 0) {
                            navigate(-1);
                        } else {
                            navigate('/', { replace: true });
                        }
                    }}
                    leftIcon={<ArrowBackIcon />}
                >
                    Back
                </Button>
            </Box>
            <Flex mt={8} justifyContent="space-between" flexWrap="wrap">
                <Flex flexDirection="column">
                    <Flex alignItems="center" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                        <Heading fontSize={{ base: '14px', md: '24px' }} p={0} mr={2}>
                            Owner:{' '}
                            <V3BaseAccountName
                                address={owner}
                                ensName={addressEnsName}
                                accountId={account.id}
                                display="inline-block"
                            />
                        </Heading>
                        <CopyButton
                            variant="ghost"
                            size="sm"
                            color="white"
                            iconSize="16px"
                            value={owner}
                        />
                        <Link
                            alignItems="center"
                            href={basescanLink(owner)}
                            target="_blank"
                        >
                            <IconButton
                                aria-label="external-link"
                                variant="ghost"
                                icon={<ExternalLinkIcon fontSize="16px" />}
                                color="white"
                                size="sm"
                            />
                        </Link>
                        <IconButton
                            aria-label="favorites"
                            variant="ghost"
                            icon={
                                isFavorite ? <StarIcon fontSize="16px" /> : <StarOutlinedIcon fontSize="16px" />
                            }
                            color="white"
                            size="sm"
                            onClick={() => {
                                if (isFavorite) {
                                    removeAccountFavorite(owner);
                                } else {
                                    saveAccountFavorite(owner);
                                }
                            }}
                        />
                      
                    </Flex>

                    <Select
                        mt={4}
                        value={account?.id}
                        onChange={handleAccountChange}
                    >
                        {data?.map((account) => (
                            <option key={account.id} value={account.id}>
                                Account ID: {`${account.id.slice(0,4)}...${account.id.slice(-4)}`}
                            </option>
                        ))}
                    </Select>
                 
                </Flex>
             
              
            </Flex>
            <V3BaseStats account={account} />
            <V3BaseOwnerAccountStats account={account} />
        </Flex>
    );
};

export default V3Owner;
