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
      // className='sm:rounded-[1.571px] lg:rounded-[0.1039021164vw]'
    />
  );
};

export default ImageWithToggle;
