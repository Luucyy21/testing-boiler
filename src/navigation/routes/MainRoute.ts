import BottomTabNavigation from 'navigation/BottomTabNavigation';
import DefaultHeader from 'navigation/components/headers/DefaultHeader';
import {WelcomeScreen} from '../../screens';
import {RouteType} from '../type';

const MainRoute: RouteType[] = [
  {
    name: 'Home',
    component: BottomTabNavigation,
    options: {headerShown: false},
  },
  {
    name: 'Welcome',
    component: WelcomeScreen,
    options: DefaultHeader({title: 'HOME'}),
  },
];
export default MainRoute;
