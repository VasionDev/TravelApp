import React, { useState } from 'react'
import { Text, View, StyleSheet, Animated, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const ListScreen = () => {
    
    const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0]

    const moveCircle = () => {
        Animated.timing(value, {
            toValue: {x: 100, y: 100},
            delay: 3000,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
            <Animated.View style={value.getLayout()}>
                <View style={styles.circle}></View>
            </Animated.View>
            <Pressable onPress={moveCircle}><Text>Move</Text></Pressable>
        </View>
        // <LinearGradient style={styles.container} colors={['#007A53', '#056257', '#0A4D5B']} start={[0,1]} end={[1,0]}>

        // </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle:{
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: 'red'
    }
})

export default ListScreen
