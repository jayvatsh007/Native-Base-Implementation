import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// the device Width, Heigh for which the UX is designed

const guidelineBaseWidth = 360;

const guidelineBaseHeight = 783;

const widthBaseScale = SCREEN_WIDTH / guidelineBaseWidth;

const heightBaseScale = SCREEN_HEIGHT / guidelineBaseHeight;

function normalize(size, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel

const widthPixel = size => {
  return normalize(size, 'width');
};

//for height  pixel

const heightPixel = size => {
  return normalize(size, 'height');
};

//for font  pixel

const fontPixel = size => {
  return heightPixel(size);
};

//for Margin and Padding vertical pixel

const pixelSizeVertical = size => {
  return heightPixel(size);
};

//for Margin and Padding horizontal pixel

const pixelSizeHorizontal = size => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
