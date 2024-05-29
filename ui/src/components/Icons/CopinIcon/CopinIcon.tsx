import { CSSProperties } from 'react';
import CopinUrl from './Copin.png';

export const CopinIcon = ({ width = '25px', height = '25px', ...props }: CSSProperties = {}) => {
  return <img style={{ width, height, ...props }} src={CopinUrl} alt="app.copin.io" />;
};
