import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Types} from 'generated/types';
import CustomText from 'commons/texts/CustomText';
import {moderateScale} from 'react-native-size-matters';
import {hasNotch} from 'utils';
import {BOTTOM, PADDING} from 'styles/Scales';
import {Fonts, Themes} from 'styles';
import MaterialIcons from 'commons/texts/MaterialIcons';
import ButtonIcon from 'commons/buttons/ButtonIcon';

const CustomModal = (props: Types.ICustomModal) => {
  const paddingBottom = !hasNotch ? PADDING : 0;

  const header = () => {
    if (props?.showHeader) {
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{paddingVertical: 0}}>
          <View
            style={{
              paddingHorizontal: PADDING,
              paddingVertical: moderateScale(2),
            }}>
            <View style={styles.headerTitle}>
              <CustomText
                style={{
                  fontSize: Fonts.medium,
                }}>
                {props?.headerTitle}
              </CustomText>
            </View>
            <View style={styles.headerButton}>
              <ButtonIcon
                onPress={props?.onClose}
                icon={MaterialIcons.close}
                iconStyle={styles.icon}
                iconType={'material'}
              />
            </View>
          </View>
          {divider()}
        </View>
      );
    }

    return null;
  };

  const divider = () => {
    return <View style={styles.divider} />;
  };

  return (
    <Modal
      isVisible={props?.isVisible}
      style={styles.modal}
      onBackdropPress={props?.onClose}
      backdropOpacity={0}
      swipeDirection="down"
      swipeThreshold={100}
      onSwipeComplete={() => props?.onClose()}>
      <View style={[styles.content]}>
        {header()}
        <SafeAreaView>
          <View
            style={{
              paddingHorizontal: BOTTOM,
              paddingTop: PADDING,
              paddingBottom,
            }}>
            {props?.children}
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {
    ...Themes.SHADOW,
    backgroundColor: '#fff',
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15),
  },
  divider: {
    height: moderateScale(1),
    backgroundColor: '#8080801F',
  },
  headerTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    width: '100%',
    alignItems: 'flex-end',
    zIndex: 10,
  },
  icon: {color: '#000', fontSize: moderateScale(28)},
});

export default CustomModal;
