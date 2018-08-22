import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import CustomHeader from '../Components/navigation/CustomHeader';
import CustomFooter from '../Components/navigation/CustomFooter';
import * as LoginPages from '../screens/LoginPages';
import * as HomeTab from '../screens/HomeTab';
import * as DetailsTab from '../screens/DetailsTab';

const LoginStack = createStackNavigator(
    { Login: LoginPages.LoginScreen },
    {
        navigationOptions: {
            title: 'Login',
            header: props => <CustomHeader {...props} />
        }
    }
);
const HomeStack = createStackNavigator(
    { Home: HomeTab.HomeScreen },
    {
        navigationOptions: {
            title: 'Home',
            header: props => <CustomHeader {...props} />
        }
    }
);
const DetailsStack = createStackNavigator(
    { Details: DetailsTab.DetailsScreen },
    {
        navigationOptions: {
            title: 'Details',
            header: props => <CustomHeader {...props} />
        }
    }
);

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
