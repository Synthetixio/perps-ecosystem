import { CSSProperties } from 'react';
import TlxIconUrl from './TLX.png';

export const TlxIcon = ({ width = '25px', height = '25px', ...props }: CSSProperties = {}) => {
  return <img style={{ width, height, ...props }} src={TlxIconUrl} alt="tlx.fi" />;
};
