import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import Logo from '../../assets/favicon.png'

const fruits = ['apple', 'banana', 'oranges']

export default function HelloWorld({ navigation }) {
    const [userName, setUserName] = useState('');
    return (

        <View>
            <Text>Hello Stack Navigation</Text>
        </View>



    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 40,
        color: 'green',
        fontWeight: 'bold'
    },
    logo: {
        width: 20,
        height: 20
    },
    cricketerImg: {
        width: 100,
        height: 100
    }
});