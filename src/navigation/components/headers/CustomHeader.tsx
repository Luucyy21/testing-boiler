import {Types} from 'generated/types';
import React, {FC} from 'react';
import {Animated, SafeAreaView as IosSafeArea, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import {isAndroid} from 'utils';
import HeaderContent from './HeaderContent';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingBottom: scale(10),
  },
});

const AnimatedSafeArea = Animated.createAnimatedComponent(
  isAndroid ? SafeAreaView : IosSafeArea,
);

const CustomHeader: FC<Types.ICustomHeader> = ({
  children,
  mainContainerStyles,
  bottomContent,
  ...rest
}) => {
  return (
    <AnimatedSafeArea style={[{backgroundColor: '#FFF'}, mainContainerStyles]}>
      <Animated.View style={[styles.container, mainContainerStyles]}>
        <HeaderContent {...rest} />
        {children}
      </Animated.View>
      {bottomContent}
    </AnimatedSafeArea>
  );
};

export default CustomHeader;
