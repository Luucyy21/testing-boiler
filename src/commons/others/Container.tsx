import React from 'react';
import {View, SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import {Themes} from '../../styles';

interface IProps {
  safeArea?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
}

export default (props: IProps) => {
  const renderScreen = () => {
    if (props.safeArea) {
      return (
        <SafeAreaView style={[{flex: 1}, props.safeAreaStyle]}>
          {props.children}
        </SafeAreaView>
      );
    }
    return props.children;
  };
  return <View style={[Themes.CONTAINER, props.style]}>{renderScreen()}</View>;
};
