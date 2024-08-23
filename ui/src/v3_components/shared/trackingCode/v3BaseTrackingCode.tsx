import { Td, Fade, Text } from '@chakra-ui/react';
import { KwentaIcon, PolynomialIcon, InfinexIcon, CyberdexIcon } from '../icons';

// Extend this map as needed
const iconMap: Record<string, (props: any) => JSX.Element> = {
  KWENTA: KwentaIcon,
  INFINEX: InfinexIcon,
  CYBERDEX: CyberdexIcon,
  POLYNOMIAL: PolynomialIcon,
};

interface TrackingCodeIconProps {
  trackingCode: string;
}

export const TrackingCodeIcon = ({ trackingCode }: TrackingCodeIconProps) => {
  const IconComponent = iconMap[trackingCode.toUpperCase()] || null;

  return (
    <Td border="none">
      <Fade in>
        {IconComponent ? (
          <IconComponent width="25px" height="25px" />
        ) : (
          <Text fontFamily="heading" fontSize="14px" lineHeight="20px" color="gray.500">
            {trackingCode}
          </Text>
        )}
      </Fade>
    </Td>
  );
};
