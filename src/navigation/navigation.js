import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import CustomFooter from '../Components/navigation/CustomFooter';
import * as LoginPages from '../screens/LoginPages';
import * as HomeTab from '../screens/HomeTab';
import * as DetailsTab from '../screens/DetailsTab';

const LoginStack = createStackNavigator({ Login: LoginPages.LoginScreen });
const HomeStack = createStackNavigator({ Home: HomeTab.HomeScreen });
const DetailsStack = createStackNavigator({ Details: DetailsTab.DetailsScreen });

const BottomNavigatorStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Details: DetailsStack
    },
    {
        initialRouteName: 'Home',
        tabBarComponent: props => <CustomFooter {...props} />
    }
);

const RootStack = createSwitchNavigator({
    LoginStack,
    BottomNavigatorStack
});

export default RootStack;
