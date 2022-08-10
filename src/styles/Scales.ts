import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');
const WIDTH = width;
const HEIGHT = height;

const BOTTOM = moderateScale(20);
const PADDING = moderateScale(10);
const HPADDING = PADDING / 2;

const Scales = {
  BOTTOM,
  PADDING,
  HPADDING,
  WIDTH,
  HEIGHT,
};

export {BOTTOM, PADDING, HPADDING, WIDTH, HEIGHT};

export default Scales;
