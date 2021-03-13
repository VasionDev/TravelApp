import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
  );
}

