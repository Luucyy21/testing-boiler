import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText} from 'commons';
import {PADDING} from 'styles/Scales';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDING,
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CustomText>HomeScreen</CustomText>
    </View>
  );
}
