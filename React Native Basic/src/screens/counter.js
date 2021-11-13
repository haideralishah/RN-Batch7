import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Counter({ navigation }) {
    return (
        <View>
            <Text>Hello Counter</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("helloworld");
            }}>
                <Text>
                    Come back to Hello World
                </Text>
            </TouchableOpacity>
        </View>
    )
}