import { CSSProperties } from 'react';
import CyberdexIconUrl from './Cyberdex.png';

export const CyberdexIcon = ({ width = '100%', height = '100%', ...props }: CSSProperties = {}) => {
  return <img style={{ width, height, ...props }} src={CyberdexIconUrl} alt="cyberdex.xyz" />;
};
