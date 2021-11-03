import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';


export default function HelloWorld({ navigation }) {

    const changePage = () => {
        navigation.navigate("Counter");
    }

    return (

        <View>
            <Text>Hello Stack Navigation</Text>
            <TouchableOpacity onPress={changePage}>
                <Text>Counte Here</Text>
            </TouchableOpacity>
        </View>



    )
}
