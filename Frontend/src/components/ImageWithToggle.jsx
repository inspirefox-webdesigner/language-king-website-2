// components/ImageWithToggle.jsx
import React from 'react';
import { getImage } from '../utils/getImage';

const ImageWithToggle = ({ src, width = 600, height = 400, alt = '', ...props }) => {
  return (
    <img
      src={getImage(src, width, height)}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
  );
};

export default ImageWithToggle;
