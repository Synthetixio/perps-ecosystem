import { CSSProperties } from 'react';

export const PolynomialIcon = ({
  width = '25px',
  height = '25px',
  ...props
}: CSSProperties = {}) => {
  return (
    <img
      style={{ width, height, borderRadius: '50px', border: '1px solid #9999AC', ...props }}
      src="https://mirror-media.imgix.net/publication-images/_1kn4Bb7Me4kZMfVY1lqn.png?h=1000&w=1001"
      alt=""
    />
  );
};
