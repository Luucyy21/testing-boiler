import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {Types} from '../../generated/types';

const FONTAWESOM_FONT_FAMILY = {
  solid: 'FontAwesome5Pro-Solid',
  light: 'FontAwesome5Pro-Light',
  regular: 'FontAwesome5Pro-Regular',
  brand: 'FontAwesome5Brands-Regular',
};

const MATERIAL_FONT_FAMILY = {
  outline: 'MaterialIconsOutlined-Regular',
  round: 'MaterialIconsRound-Regular',
  regular: 'MaterialIcons-Regular',
  sharp: 'MaterialIconsSharp-Regular',
};

export default (props: Types.IRNIcon) => {
  const color = props.color || '#FFF';
  const fontFamily =
    props?.iconType === 'fontAweasome'
      ? FONTAWESOM_FONT_FAMILY[props.font || 'solid']
      : MATERIAL_FONT_FAMILY[props.font || 'regular'];

  const textStyle = {...styles.text, color, fontFamily};

  const icon =
    !!props?.androidIcon || !!props?.iosIcon
      ? Platform.select({ios: props?.iosIcon, android: props?.androidIcon})
      : props?.icon;

  return <Text style={[textStyle, props.style]}>{icon}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    width: 'auto',
    backgroundColor: '#0000',
  },
});
