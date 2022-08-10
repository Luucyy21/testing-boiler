import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BOTTOM, PADDING} from '../../styles/Scales';
import {Fonts} from '../../styles';
import {hasNotch} from 'utils';

const styles = StyleSheet.create({
  container: {
    zIndex: 5000,
    top: PADDING,
    right: -BOTTOM,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    transform: [{rotate: '40deg'}],
    width: hasNotch ? '25%' : '20%',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Fonts[12],
  },
});

export default function DevMode() {
  // const {dev_mode} = useDevModeContext();
  if (__DEV__) {
    return (
      <View pointerEvents="none" style={styles.container}>
        <Text style={styles.title}>develop</Text>
      </View>
    );
  }
  return null;
}
