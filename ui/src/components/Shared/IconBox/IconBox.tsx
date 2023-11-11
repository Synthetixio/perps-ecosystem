import { Box } from '@chakra-ui/react';
import { type IconProps } from '../../../types';

export const IconBox = ({ sx, icon, ...props }: IconProps) => (
  <Box
    sx={{
      lineHeight: 0,
      verticalAlign: 'middle',
      display: 'inline-block',
      ...sx,
    }}
    {...props}
  >
    {icon}
  </Box>
);
