import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Types} from '../../generated/types';
import {Fonts} from '../../styles';
import {PADDING} from '../../styles/Scales';
import CustomIcon from '../texts/CustomIcon';

interface IButtonIcon {
  icon: string;
  onPress?: () => void;
  font?: Types.IFont;
  iconStyle?: StyleProp<TextStyle>;
  onLongPress?: () => void;
  onPressOut?: () => void;
  style?: StyleProp<ViewStyle>;
  iconType?: 'material' | 'fontAweasome';
}

const HEIGHT = moderateScale(35);
const WIDTH = moderateScale(35);
const ICON = '#858585';

const styles = StyleSheet.create({
  btn: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: PADDING,
  },
  icon: {
    width: 'auto',
    fontSize: Fonts.xx_large,
    color: ICON,
  },
});

export default function ButtonIcon(props: IButtonIcon) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.btn, props.style]}
      onLongPress={props.onLongPress}
      onPressOut={props.onPressOut}>
      <CustomIcon
        font={props?.font}
        icon={props.icon}
        style={[styles.icon, props.iconStyle]}
        iconType={props?.iconType}
      />
    </TouchableOpacity>
  );
}
