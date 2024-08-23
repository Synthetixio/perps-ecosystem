import { CSSProperties } from 'react';
import CyberdexIconUrl from './Cyberdex.png';

export const CyberdexIcon = ({ width = '25px', height = '25px', ...props }: CSSProperties = {}) => {
  return <img style={{ width, height, ...props }} src={CyberdexIconUrl} alt="cyberdex.xyz" />;
};
