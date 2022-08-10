import {StackNavigationOptions} from '@react-navigation/stack';

export type MainScreen = {
  Home: undefined;
  Welcome: undefined;
};

export type TabScreen = {
  Home: undefined;
  Hello: undefined;
};

export interface RouteType {
  name: keyof MainScreen;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
  initialParams?: MainScreen[keyof MainScreen];
}
