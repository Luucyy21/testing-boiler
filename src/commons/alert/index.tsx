import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Colors, Fonts, Themes} from '../../styles';
import {Types} from 'generated/types';
import {CustomButton, CustomIcon, CustomText} from 'commons';
import {BOTTOM, HPADDING, PADDING} from 'styles/Scales';
import {moderateScale, scale} from 'react-native-size-matters';
import {BlurView} from '@react-native-community/blur';
import MaterialIcons from 'commons/texts/MaterialIcons';

const COLORS = {
  SUCCESS: Colors.GREEN,
  ERROR: Colors.RED,
  NETWORK: Colors.PURPLE,
  WARNING: Colors.ORANGE,
};

const ICONS = {
  SUCCESS: MaterialIcons.check,
  ERROR: MaterialIcons.close,
  NETWORK: MaterialIcons.wifi_off,
  WARNING: MaterialIcons.priority_high,
};

const HEADER = scale(75);

export default class Alert extends Component<{}, Types.ISnackBar> {
  onPressRef?: (response?: string) => void;

  state: Types.ISnackBar = {
    type: undefined,
    delay: 1500,
    message: null,
    visible: false,
    backgroundColor: undefined,
    buttons: [],
    icon: undefined,
  };

  onShow = (state: Types.ISnackBar) => {
    const type = state.type || 'SUCCESS';
    this.setState({
      visible: true,
      backgroundColor: COLORS[type],
      icon: ICONS[type],
      message: state.message,
      delay: state.delay || this.state.delay,
      buttons: state.buttons || this.state.buttons,
    });
  };

  onClose = () => {
    this.setState({visible: false});
  };

  renderHeader = () => {
    return (
      <View
        style={{
          height: HEADER + moderateScale(15),
          width: HEADER + moderateScale(15),
          backgroundColor: `${this.state.backgroundColor}5f`,
          borderRadius: scale(100),
          ...Themes.CENTER,
        }}>
        <View
          style={{
            height: HEADER,
            width: HEADER,
            backgroundColor: this.state.backgroundColor,
            borderRadius: scale(100),
            ...Themes.CENTER,
          }}>
          <CustomIcon
            iconType="material"
            font="regular"
            style={{fontSize: scale(35)}}
            icon={this.state.icon || ''}
          />
        </View>
      </View>
    );
  };

  onButtonPress = (press?: (response?: string) => void) => {
    if (press) {
      this.onPressRef = press;
    }
    this.setState({visible: false});
  };

  renderButton = () => {
    const {buttons, visible, backgroundColor} = this.state;

    if (visible) {
      return (
        <View style={styles.wrapBtn}>
          {buttons && buttons.length > 0 ? (
            buttons?.map((button, i) => (
              <CustomButton
                bold
                key={i}
                title={button.title}
                textStyle={[styles.message, styles.textStyle]}
                style={[styles.btn, button.style]}
                onPress={() => this.onButtonPress(button.onPress)}
              />
            ))
          ) : (
            <CustomButton
              bold
              title={'OK'}
              onPress={() => this.onButtonPress()}
              textStyle={[styles.message, styles.textStyle]}
              style={[styles.btn, {backgroundColor}]}
            />
          )}
        </View>
      );
    }
    return null;
  };

  render() {
    return (
      <Modal
        style={{margin: 0}}
        backdropOpacity={0}
        animationOut="fadeOut"
        isVisible={this.state.visible}
        animationIn={'slideInUp'}
        backdropColor={'#808080'}>
        <BlurView
          style={styles.blurView}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />

        <View style={styles.container}>
          {this.renderHeader()}
          <CustomText style={styles.message}>{this.state.message}</CustomText>
          {this.renderButton()}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: BOTTOM,
    margin: BOTTOM,
    borderRadius: scale(10),
    alignItems: 'center',
    ...Themes.SHADOW,
  },
  wrapBtn: {
    ...Themes.ROW,
  },
  btn: {
    ...Themes.SHADOW,
    flex: 1,
    marginHorizontal: HPADDING,
  },
  message: {
    fontSize: Fonts.medium,
    textAlign: 'center',
    color: '#000',
    marginVertical: PADDING,
  },
  blurView: {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0},
  textStyle: {color: '#FFF', fontWeight: 'normal'},
});
