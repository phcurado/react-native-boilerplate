import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import * as HomeTab from '../screens/HomeTab';
import * as DetailsTab from '../screens/DetailsTab';

const HomeStack = createStackNavigator({ Home: HomeTab.HomeScreen });

const DetailsStack = createStackNavigator({ Details: DetailsTab.DetailsScreen });

const RootStack = createBottomTabNavigator(
    { Home: HomeStack, Details: DetailsStack },
    {
        initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = 'home';
            } else {
                iconName = 'refresh';
            }
            return {
                tabBarIcon: ({ focused, tintColor }) => {
                    return (
                        <Icon style={{ color: focused ? '#6200EE' : '#555555' }} name={iconName} />
                    );
                }
            };
        },
        tabBarOptions: {
            activeTintColor: '#6200EE',
            inactiveTintColor: '#555555',
            style: {
                height: 60,
                paddingVertical: 5,
                backgroundColor: '#fff'
            },
            labelStyle: {
                fontSize: 12,
                lineHeight: 20,
                fontFamily: 'CircularStd-Book'
            }
        }
    }
);

export default RootStack;
