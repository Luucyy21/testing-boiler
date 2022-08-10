import {useNavigation} from '@react-navigation/core';
import MaterialIcons from 'commons/texts/MaterialIcons';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CustomIcon} from '../../../commons';

const styles = StyleSheet.create({
  btn: {
    height: '100%',
    borderRadius: 0,
    paddingVertical: 0,
    backgroundColor: '#0000',
  },
  icon: {
    color: '#000',
    fontSize: scale(25),
  },
});

interface IProps {
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  onPress?(): void;
}

export default (props: IProps) => {
  const navigation = useNavigation();

  function onPress() {
    if (props?.onPress) {
      props?.onPress();
    } else {
      navigation.canGoBack() && navigation.goBack();
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={props?.style}>
      <CustomIcon
        iosIcon={MaterialIcons.arrow_back_ios}
        androidIcon={MaterialIcons.arrow_back}
        iconType={'material'}
        style={[styles.icon, props?.iconStyle]}
        font={'round'}
      />
    </TouchableOpacity>
  );
};
