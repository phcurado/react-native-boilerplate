import { createStackNavigator } from 'react-navigation';
import { CustomHeader } from './CustomHeader';
import * as Screens from '../screens';

const RootStack = createStackNavigator({ ...Screens }, { initialRouteName: 'HomeScreen' });

export default RootStack;
