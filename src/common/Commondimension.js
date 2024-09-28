import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const deviceWidth = number => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const deviceHeight = number => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export {
  deviceWidth,
  deviceHeight,
};