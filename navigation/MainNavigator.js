import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator()

const MainNavigator = () => {
    // const headerHeight = useHeaderHeight(200);
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigator
