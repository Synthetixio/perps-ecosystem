import { CSSProperties } from 'react';

export const PolynomialIcon = ({
  width = '100%',
  height = '100%',
  ...props
}: CSSProperties = {}) => {
  return (
    <img
      style={{ width, height, borderRadius: '25px', objectFit: 'contain', ...props }}
      src="https://mirror-media.imgix.net/publication-images/_1kn4Bb7Me4kZMfVY1lqn.png?h=1000&w=1001"
      alt=""
    />
  );
};
