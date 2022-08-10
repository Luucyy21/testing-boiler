import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';

import Skeleton from 'commons/skeleton/Skeleton';
import CustomIcon from 'commons/texts/CustomIcon';
import MaterialIcons from 'commons/texts/MaterialIcons';
import {Colors} from 'styles';
import {moderateScale} from 'react-native-size-matters';
import {sleep} from 'libs/Utils';

interface ICustomImage extends Omit<FastImageProps, 'source'> {
  containerStyle?: StyleProp<ViewStyle>;
  source?: Source;
}

const CustomImage = (props: ICustomImage) => {
  const [loading, setLoading] = useState(true);

  const imageHeight =
    (StyleSheet?.flatten(props?.containerStyle)?.height as number) ||
    moderateScale(50);

  function onLoad() {
    sleep(100).then(() => {
      loading && setLoading(false);
    });
  }

  const renderImage = () => {
    if (props?.source?.uri) {
      return (
        <FastImage
          {...props}
          onLoad={onLoad}
          style={styles.img}
          source={props?.source}
        />
      );
    }

    return (
      <View style={[props?.containerStyle, styles.noImageContainer]}>
        <CustomIcon
          icon={MaterialIcons.broken_image}
          iconType="material"
          style={{
            fontSize: imageHeight / 1.5,
            color: Colors.GRAY_LIGHT,
          }}
        />
      </View>
    );
  };

  const renderLoading = () => {
    return (
      <View style={props?.containerStyle}>
        <Skeleton containerStyle={styles.img} />
      </View>
    );
  };

  return (
    <View style={[props?.containerStyle, styles.container]}>
      {loading && renderLoading()}
      {renderImage()}
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  noImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: '100%', height: '100%'},
  container: {overflow: 'hidden'},
});
