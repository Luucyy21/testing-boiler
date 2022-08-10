/* eslint-disable react-hooks/rules-of-hooks */
import {StackNavigationOptions} from '@react-navigation/stack';
import {Types} from 'generated/types';
import React from 'react';
import {ViewStyle, StyleProp} from 'react-native';
import {HPADDING} from 'styles/Scales';
import CustomHeader from './CustomHeader';

interface Props extends Types.ICustomHeader {
  title: string;
  mainContainerStyles?: StyleProp<ViewStyle>;
}

const DefaultHeader = ({
  title = '',
  mainContainerStyles,
}: Props): StackNavigationOptions => {
  return {
    header: () => {
      return (
        <CustomHeader
          automaticallyApplyLeading
          textProps={{color: 'black'}}
          mainContainerStyles={mainContainerStyles || {paddingTop: HPADDING}}
          title={title}
        />
      );
    },
  };
};

export default DefaultHeader;
