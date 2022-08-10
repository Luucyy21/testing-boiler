import React, {forwardRef} from 'react';
import {Text, StyleSheet, View, TextStyle} from 'react-native';
import {Colors, Fonts} from '../../styles';
import {PADDING} from '../../styles/Scales';
import {Types} from '../../generated/types';
import CustomIcon from './CustomIcon';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0000',
  },
  text: {
    color: '#000',
    fontSize: Fonts[13],
  },
  icon: {
    textAlign: 'center',
    width: Fonts[16],
    fontSize: Fonts[13],
    color: Colors.BORDER,
  },
  right: {
    marginRight: PADDING,
  },
  left: {
    marginLeft: PADDING,
  },
});

export const TextBase = forwardRef(
  (props: Types.ITextBase, ref?: React.LegacyRef<Text>) => {
    let style: TextStyle = {fontWeight: props.bold ? '700' : '400'};
    return (
      <Text ref={ref} {...props} style={[styles.text, style, props.style]}>
        {props.children}
      </Text>
    );
  },
);

export default forwardRef((props: Types.IText, ref?: React.Ref<Text>) => {
  if (props.children) {
    return (
      <TextBase ref={ref} {...props} style={[props.textStyle, props.style]}>
        {props.children}
      </TextBase>
    );
  }
  return (
    <View style={[styles.container, props.style]}>
      {!!props.leftIcon && (
        <CustomIcon
          font={props.font}
          icon={props.leftIcon}
          style={[
            styles.right,
            styles.icon,
            props.iconStyle,
            props.leftIconStyle,
          ]}
        />
      )}
      <TextBase
        bold={props.titleBold}
        language={props.language}
        numberOfLines={props.numberOfLines}
        style={[props.textStyle, props.titleStyle]}>
        {props.title}
        {!!props.value && (
          <TextBase
            bold={props.valueBold}
            language={props.language}
            style={[props.textStyle, props.valueStyle]}>
            {props.value}
          </TextBase>
        )}
      </TextBase>
      {!!props.rightIcon && (
        <CustomIcon
          font={props.font}
          icon={props.rightIcon}
          style={[
            styles.left,
            styles.icon,
            props.iconStyle,
            props.rightIconStyle,
          ]}
        />
      )}
    </View>
  );
});
