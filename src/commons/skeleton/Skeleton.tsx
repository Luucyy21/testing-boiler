import {Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors} from 'styles';
import {Types} from 'generated/types';

const Skeleton = ({
  duration,
  backgroundColor,
  containerStyle,
}: Types.ISkeleton) => {
  const oValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(Animated.parallel([fadeInAndOut])).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let fadeInAndOut = Animated.sequence([
    Animated.timing(oValue, {
      toValue: 0,
      duration: duration || 1300,
      useNativeDriver: false,
    }),
    Animated.timing(oValue, {
      toValue: 1,
      duration: duration || 1300,
      useNativeDriver: false,
    }),
  ]);

  const background = oValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      backgroundColor || Colors.GRAY_MEDIUM,
      `${backgroundColor || Colors.GRAY_MEDIUM}5F`,
    ],
  });

  const animatedStyle = {
    backgroundColor: background,
  };

  return <Animated.View style={[containerStyle, animatedStyle]} />;
};

export default Skeleton;
