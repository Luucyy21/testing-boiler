import {CustomText} from 'commons';
import {Types} from 'generated/types';
import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HPADDING} from 'styles/Scales';
import MainBackButtonHeader from './MainBackButtonHeader';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(10),
    paddingHorizontal: scale(6),
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: HPADDING,
  },
});

const HeaderContent = (props: Types.IHeaderContentProps) => {
  const {
    title,
    headerLeft,
    headerRight,
    automaticallyApplyLeading = true,
    textProps,
    backIconStyle,
    headerTitleContainerStyles,
    headerRightContainerStyles,
  } = props;

  return (
    <View style={styles.container}>
      <Animated.View style={[headerTitleContainerStyles]}>
        {typeof title === typeof '' ? (
          <CustomText bold style={[textProps, {fontSize: scale(14)}]}>
            {title}
          </CustomText>
        ) : (
          title
        )}
      </Animated.View>
      <View style={styles.buttonContainer}>
        {headerLeft ? (
          <View style={props.headerLeftContainerStyles}>{headerLeft}</View>
        ) : automaticallyApplyLeading ? (
          <MainBackButtonHeader iconStyle={backIconStyle} />
        ) : null}

        {headerRight && (
          <View style={[headerRightContainerStyles]}>{headerRight}</View>
        )}
      </View>
    </View>
  );
};

export default HeaderContent;
