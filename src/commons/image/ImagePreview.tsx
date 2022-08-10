import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import ImageViewer, {
  ImageViewerPropsDefine,
} from 'react-native-image-zoom-viewer';
import MaterialIcons from 'commons/texts/MaterialIcons';
import {scale, verticalScale} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/native';
import ButtonIcon from 'commons/buttons/ButtonIcon';

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: verticalScale(25),
    right: scale(15),
    zIndex: 100,
  },
  button: {
    padding: scale(5),
    backgroundColor: '#fff',
  },
  icon: {color: '#000'},
});

interface IImagePreview extends ImageViewerPropsDefine {
  isVisible: boolean;
  onClose(): void;
  index?: number | undefined;
}

const ImagePreview = (props: IImagePreview) => {
  const isFocused = useIsFocused();

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <ButtonIcon
          icon={MaterialIcons.close}
          iconType={'material'}
          onPress={props?.onClose}
          style={styles.button}
          iconStyle={styles.icon}
        />
      </View>
    );
  };

  return (
    <Modal
      isVisible={props?.isVisible}
      backdropOpacity={0}
      onBackButtonPress={props?.onClose}
      style={{margin: 0}}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        {isFocused && <StatusBar barStyle={'light-content'} />}
        <ImageViewer
          {...props}
          index={props?.index}
          onSwipeDown={props?.onClose}
          enableSwipeDown={true}
          renderHeader={renderHeader}
          onLongPress={() => {}}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default ImagePreview;
