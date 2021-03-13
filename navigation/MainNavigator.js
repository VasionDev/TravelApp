import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigator
