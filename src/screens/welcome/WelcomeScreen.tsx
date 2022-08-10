import CustomImage from 'commons/image/CustomImage';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CustomText} from '../../commons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <CustomText>Welcome Screen</CustomText>
    </View>
  );
}
