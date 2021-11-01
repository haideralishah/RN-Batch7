import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from '../screens/helloworld';

const Stack = createNativeStackNavigator();

export default function RouteNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Fruits Name" component={HelloWorld} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}