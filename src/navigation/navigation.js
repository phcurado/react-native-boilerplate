import { createStackNavigator } from 'react-navigation';

import * as Screens from '../screens';

const RootStack = createStackNavigator({ ...Screens }, { initialRouteName: 'HomeScreen' });

export default RootStack;
