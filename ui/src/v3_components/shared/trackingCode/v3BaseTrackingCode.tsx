import { Td, Fade, Text } from '@chakra-ui/react';
import { KwentaIcon, PolynomialIcon, InfinexIcon, CyberdexIcon, DhedgeIcon } from '../icons';

// Extend this map as needed
const iconMap: Record<string, (props: any) => JSX.Element> = {
  KWENTA: KwentaIcon,
  INFINEX: InfinexIcon,
  CYBERDEX: CyberdexIcon,
  POLYNOMIAL: PolynomialIcon,
  DHEDGE: DhedgeIcon,
};

interface TrackingCodeIconProps {
  trackingCode: string;
}

export const TrackingCodeIcon = ({ trackingCode }: TrackingCodeIconProps) => {
  const IconComponent = iconMap[trackingCode.toUpperCase()] || null;
  console.log(trackingCode)
  return (
    <Td border="none" maxWidth="80px" whiteSpace="normal" overflow="hidden" textOverflow="ellipsis">
      <Fade in>
        {IconComponent ? (
          <IconComponent width="25px" height="25px" />
        ) : (
          <Text fontFamily="heading" fontSize="11px" lineHeight="14px" color="gray.500">
            {trackingCode}
          </Text>
        )}
      </Fade>
    </Td>
  );
};
