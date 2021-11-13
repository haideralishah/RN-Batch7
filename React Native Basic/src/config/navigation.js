import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HelloWorld from '../screens/helloworld';
import Counter from '../screens/counter';
import Home from '../screens/home';
import About from '../screens/about';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RouteNavigation() {
    return (
        <NavigationContainer>
            {
                false ? (
                    <Stack.Navigator>
                        <Stack.Screen name="helloworld" component={HelloWorld} />
                        <Stack.Screen name="Counter" component={Counter} />
                    </Stack.Navigator>
                ) : (
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'home') {
                                    iconName = focused
                                        ? "glasses-outline"
                                        : 'ios-information-circle-outline';
                                } else if (route.name === 'about') {
                                    iconName = focused ? 'ios-list-box' : 'ios-list';
                                }

                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: 'green',
                            tabBarInactiveTintColor: 'blue',
                        })}

                    >
                        <Tab.Screen name="home" component={Home} />
                        <Tab.Screen name="about" component={About} />
                    </Tab.Navigator>
                )
            }
        </NavigationContainer >

    )
}