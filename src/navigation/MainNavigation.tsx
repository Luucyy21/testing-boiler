import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainRoute from './routes/MainRoute';
import {MainScreen} from './type';

const Stack = createStackNavigator<MainScreen>();

export default function MainNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      mode="card"
      headerMode="screen"
      initialRouteName={'Home'}
      keyboardHandlingEnabled={false}
      screenOptions={{
        animationEnabled: true,
        cardShadowEnabled: false,
        cardOverlayEnabled: true,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}>
      {MainRoute.map(routeProps => (
        <Stack.Screen key={routeProps.name} {...routeProps} />
      ))}
    </Stack.Navigator>
  );
}
