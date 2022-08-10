import MaterialIcons from 'commons/texts/MaterialIcons';
import CustomIcon from 'commons/texts/CustomIcon';
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import {Colors, Themes} from 'styles';
import {Types} from 'generated/types';

const HEIGHT = moderateScale(45);
const WRAPPER_SIZE = moderateScale(25);

const styles = StyleSheet.create({
  modal: {margin: moderateScale(20)},
  content: {
    height: HEIGHT,
    borderRadius: moderateScale(6),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  msg: {
    fontWeight: '400',
    color: '#fff',
    marginLeft: moderateScale(10),
    flex: 1,
  },
  iconWrapper: {
    width: WRAPPER_SIZE,
    height: WRAPPER_SIZE,
    borderRadius: WRAPPER_SIZE,
    ...Themes.CENTER,
  },
});

export type SnackBarType = 'SUCCESS' | 'ERROR' | 'WARNING';

const COLORS = {
  SUCCESS: Colors.GREEN,
  ERROR: Colors.RED,
  WARNING: Colors.ORANGE,
};

const ICONS = {
  SUCCESS: MaterialIcons.check,
  ERROR: MaterialIcons.close,
  WARNING: MaterialIcons.priority_high,
};

let timeout: any;

export default class Toast extends Component<{}, Types.IToats> {
  state: Types.IToats = {
    type: undefined,
    message: null,
    visible: false,
    backgroundColor: undefined,
    icon: undefined,
    duration: 5000,
    position: undefined,
  };

  onShow = (state: Types.IToats) => {
    const type = state.type || 'SUCCESS';
    this.setState({
      visible: true,
      backgroundColor: COLORS[type],
      message: state.message,
      icon: ICONS[type],
      type: state.type,
      duration: 5000,
      position: state?.position,
    });

    timeout = setTimeout(() => {
      this.setState({
        visible: false,
      });
    }, this.state.duration);
  };

  onClose = () => {
    this.setState({
      visible: false,
      duration: 5000,
    });
    clearTimeout(timeout);
  };

  render() {
    const amount = this.state.type === 'WARNING' ? 20 : 40;
    const backgroundColor = Colors.colorAdjust(
      this.state.backgroundColor,
      amount,
    );
    const positionTop = this.state?.position === 'top';

    const justifyContent = positionTop ? 'flex-start' : 'flex-end';

    const animationIn = positionTop ? 'slideInDown' : 'slideInUp';
    const animationOut = positionTop ? 'slideOutUp' : 'slideOutDown';
    return (
      <Modal
        isVisible={this.state.visible}
        onBackdropPress={this.onClose}
        backdropOpacity={0}
        animationIn={animationIn}
        animationOut={animationOut}
        animationInTiming={350}
        animationOutTiming={350}
        style={[styles.modal, {justifyContent}]}>
        <SafeAreaView>
          <View
            style={[
              styles.content,
              {
                backgroundColor: this.state.backgroundColor,
              },
            ]}>
            <View style={[styles.iconWrapper, {backgroundColor}]}>
              <CustomIcon
                iconType="material"
                font="regular"
                style={{fontSize: moderateScale(20)}}
                icon={this.state.icon || ''}
              />
            </View>

            <Text style={styles.msg} numberOfLines={2}>
              {this.state.message}
            </Text>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}
