import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../../styles';
import {HPADDING, PADDING} from '../../styles/Scales';
import {Types} from '../../generated/types';
import {CustomText, CustomIcon} from 'commons';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: PADDING,
    paddingVertical: HPADDING,
  },
  text: {
    color: '#000000',
    fontSize: Fonts.medium,
  },
  icon: {
    color: '#FFF',
    textAlign: 'center',
    width: 'auto',
    fontSize: Fonts.small,
  },
  right: {
    marginRight: PADDING,
  },
  left: {
    marginLeft: PADDING,
  },
  img: {
    width: moderateScale(16),
    height: moderateScale(16),
    resizeMode: 'contain',
  },
  loading: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CustomButton = (props: Types.IButtonProps) => {
  const opacity = props?.loading ? 0 : 1;
  const hasBackgroundStyleProps =
    !!props?.style && StyleSheet?.flatten(props?.style).backgroundColor;
  const hasColorTextStyleProps =
    props?.textStyle && StyleSheet?.flatten(props?.textStyle).color;

  const backgroundColor = props.disabled
    ? `${Colors.PRIMARY}3f`
    : hasBackgroundStyleProps
    ? hasBackgroundStyleProps
    : Colors.PRIMARY;

  const color = props.disabled
    ? '#888888'
    : hasColorTextStyleProps
    ? hasColorTextStyleProps
    : '#FFF';

  const renderContent = () => {
    return (
      <CustomText
        language={props.language}
        bold={props.bold}
        style={[styles.text, props.textStyle, {opacity, color}]}>
        {props.title}
      </CustomText>
    );
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      {...props.buttonProps}
      style={[styles.container, props.style, {backgroundColor}]}
      disabled={props.disabled || props.loading}>
      {!!props.leftSource && (
        <Image
          source={props.leftSource}
          style={[
            styles.img,
            styles.right,
            props.imageStyle,
            props.leftImageStyle,
            {opacity},
          ]}
        />
      )}
      {!!props.leftIcon && (
        <CustomIcon
          font={props.font}
          icon={props.leftIcon}
          style={[
            styles.right,
            styles.icon,
            props.iconStyle,
            props.leftIconStyle,
            {opacity},
          ]}
        />
      )}
      {renderContent()}
      {!!props.rightIcon && (
        <CustomIcon
          font={props.font}
          icon={props.rightIcon}
          style={[
            styles.left,
            styles.icon,
            props.iconStyle,
            props.rightIconStyle,
            {opacity},
          ]}
        />
      )}
      {!!props.rightSource && (
        <Image
          source={props.rightSource}
          style={[
            styles.img,
            styles.left,
            props.imageStyle,
            props.rightImageStyle,
            {opacity},
          ]}
        />
      )}
      {props.loading && (
        <View style={styles.loading}>
          {/* <Spinner
            count={props.count}
            color={props.color || '#FFF'}
            size={Fonts[5]}
          /> */}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
