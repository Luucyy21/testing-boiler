import React from 'react';
import {View, StyleSheet, StyleProp, TextStyle, ImageStyle} from 'react-native';
import CustomIcon from '../texts/CustomIcon';
import {Colors, Fonts} from '../../styles';
import {BOTTOM, HPADDING, WIDTH} from '../../styles/Scales';
import CustomText from 'commons/texts/CustomText';
import CustomImage from 'commons/image/CustomImage';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH / 1.4,
    paddingHorizontal: BOTTOM,
    paddingVertical: BOTTOM * 2,
    marginTop: BOTTOM,
  },
  icon: {
    fontSize: moderateScale(120),
  },
  message: {
    textAlign: 'center',
    fontSize: Fonts.medium,
    marginTop: HPADDING,
  },
  image: {
    width: moderateScale(150),
    height: moderateScale(150),
    resizeMode: 'contain',
  },
});

interface IProps {
  icon?: string;
  message: string;
  color?: string;
  image?: string;
  iconStyle?: StyleProp<TextStyle>;
  rightIconType?: 'material' | 'fontAweasome';
  imagStyle?: StyleProp<ImageStyle>;
}

export default (props: IProps) => {
  const color = props.color || Colors.GRAY_MEDIUM;

  const content = () => {
    if (props?.image) {
      return (
        <CustomImage
          source={{uri: props?.image || ''}}
          containerStyle={styles.image}
        />
      );
    }

    return <CustomIcon icon={props.icon} style={[styles.icon, {color}]} />;
  };

  return (
    <View style={styles.container}>
      {content()}
      <CustomText style={styles.message}>{props?.message}</CustomText>
    </View>
  );
};
