import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouteNavigation from './src/config/navigation';



export default function App() {
  return (
    <View >
      <RouteNavigation />
      <StatusBar style="auto" />
    </View>
  );
}












