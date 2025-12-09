// src/utils/getImage.js
import { USE_DUMMY_IMAGES } from '../config/imageMode';

export const getImage = (originalSrc, width = 600, height = 400) => {
  return USE_DUMMY_IMAGES
    ? `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 100000)}`
    : originalSrc;
};
