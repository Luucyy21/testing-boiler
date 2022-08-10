import {CustomIcon} from 'commons';
import MaterialIcons from 'commons/texts/MaterialIcons';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {Colors} from 'styles';

const styles = StyleSheet.create({
  icon: {fontSize: moderateScale(25)},
  container: {
    paddingTop: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    backgroundColor: '#fff',
    marginBottom: moderateVerticalScale(-10),
  },
});

interface Icon {
  icon: string;
  iconType: 'material' | 'fontAweasome';
}

const ICONS: Icon[] = [{icon: MaterialIcons.home, iconType: 'material'}];

export default function DashboardTabBottom({state, descriptors, navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {state.routes.map(
          (route: {key: string | number; name: any}, index: number) => {
            const {options} = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({name: route.name, merge: true});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{alignItems: 'center', marginHorizontal: scale(20)}}>
                <CustomIcon
                  icon={ICONS[index].icon}
                  iconType={ICONS[index].iconType}
                  style={[
                    {color: isFocused ? Colors.PRIMARY : '#222'},
                    styles.icon,
                  ]}
                />
                <Text style={{color: isFocused ? Colors.PRIMARY : '#222'}}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </SafeAreaView>
  );
}
