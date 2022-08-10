import {Platform, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
export {default as Utils} from './Utils';
export {default as Validator} from './Validator';

const {width, height} = Dimensions.get('window');
export const COORD = {lat: 11.576038, lng: 104.923042};
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const IOS_MAX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 780 ||
    width === 780 ||
    height === 812 ||
    width === 812 ||
    height === 844 ||
    width === 844 ||
    height === 896 ||
    width === 896 ||
    height === 926 ||
    width === 926);

export const hasNotch = Platform.OS === 'ios' && DeviceInfo.hasNotch();
