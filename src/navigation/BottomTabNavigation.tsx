import React from 'react';
import {Home} from 'screens';
import {TabScreen} from './type';
import MaterialIcons from 'commons/texts/MaterialIcons';
import {CustomIcon, CustomText} from 'commons';
import {hasNotch, isAndroid} from 'utils';
import {View} from 'react-native';
import {Colors, Fonts} from 'styles';
import {moderateScale} from 'react-native-size-matters';
import {RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<TabScreen>();
interface Icons {
  [key: string]: {
    icon: string;
    label: string;
  };
}

const screenOptions = ({
  route,
}: {
  route: RouteProp<TabScreen, keyof TabScreen>;
  navigation: any;
}) => {
  const icons: Icons = {
    Home: {
      icon: MaterialIcons.home,
      label: 'Home',
    },
  };
  const icon = icons[route.name];
  const paddingBottom = isAndroid || !hasNotch ? 5 : 0;

  return {
    tabBarLabel: ({focused}: {focused: boolean}) => {
      return (
        <CustomText
          style={{
            paddingBottom,
            fontSize: Fonts.x_small,
            fontWeight: focused ? 'bold' : undefined,
            color: focused ? Colors.PRIMARY : Colors.GRAY_DARK,
          }}>
          {icon.label}
        </CustomText>
      );
    },
    tabBarIcon: ({focused}: {focused: boolean}) => (
      <View style={{alignItems: 'center'}}>
        <CustomIcon
          icon={icon.icon}
          iconType={'material'}
          font={focused ? 'regular' : 'outline'}
          style={{
            fontSize: moderateScale(28),
            color: focused ? Colors.PRIMARY : Colors.GRAY_DARK,
          }}
        />
      </View>
    ),
  };
};

const TABS = [{name: 'Home', component: Home}];

export default function BottomTabNavigation(): JSX.Element {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name as keyof TabScreen}
          component={tab.component}
        />
      ))}
    </Tab.Navigator>
  );
}
