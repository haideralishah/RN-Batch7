import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import Logo from '../../assets/favicon.png'

const fruits = ['apple', 'banana', 'oranges']

export default function Counter() {
    const [userName, setUserName] = useState('');
    return (
        // <View>
        <ScrollView>
            <Text style={style.text}>Hello World</Text>
            <FlatList
                data={fruits}
                renderItem={(fruit) => {
                    console.log(fruit)
                    return <Text>{fruit.item}</Text>
                }}
            />
            <TextInput
                value={userName}
                placeholder='Please let us know your name.'
                onChangeText={(userInput) => { setUserName(userInput) }}
            />
            <Image source={Logo} style={style.logo} />
            <Image source={require("../../assets/shaheen.jpg")} style={style.cricketerImg} />
            <Image source={{ uri: 'https://c.cricketpakistan.com.pk/images/posts/cover_1606217716asif-ali-cover-afp.jpg' }} style={style.cricketerImg} />
            <Image source={Logo} style={style.logo} />
            <Image source={require("../../assets/shaheen.jpg")} style={style.cricketerImg} />
            <Image source={{ uri: 'https://c.cricketpakistan.com.pk/images/posts/cover_1606217716asif-ali-cover-afp.jpg' }} style={style.cricketerImg} />
            <Image source={Logo} style={style.logo} />
            <Image source={require("../../assets/shaheen.jpg")} style={style.cricketerImg} />
            <Image source={{ uri: 'https://c.cricketpakistan.com.pk/images/posts/cover_1606217716asif-ali-cover-afp.jpg' }} style={style.cricketerImg} />
            <Image source={Logo} style={style.logo} />
            <Image source={require("../../assets/shaheen.jpg")} style={style.cricketerImg} />
            <Image source={{ uri: 'https://c.cricketpakistan.com.pk/images/posts/cover_1606217716asif-ali-cover-afp.jpg' }} style={style.cricketerImg} />
            <Image source={Logo} style={style.logo} />
            <Image source={require("../../assets/shaheen.jpg")} style={style.cricketerImg} />
            <Image source={{ uri: 'https://c.cricketpakistan.com.pk/images/posts/cover_1606217716asif-ali-cover-afp.jpg' }} style={style.cricketerImg} />
            {/* </View> */}
        </ScrollView>

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