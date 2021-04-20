import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import QuestionScreen from '../screens/QuestionScreen'
import ScoreScreen from '../screens/ScoreScreen'

const Stack = createStackNavigator()

const MainNavigator = () => {
    // const headerHeight = useHeaderHeight(200);
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detail" component={QuestionScreen}/>
        </Stack.Navigator>
    )
}

export const ScoreNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Score" component={ScoreScreen}/>
            <Stack.Screen name="Detail" component={QuestionScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigator
