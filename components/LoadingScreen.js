import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import BottomArt from './svg/BottomArt';
import AppMainLogo from './svg/AppMainLogo';

const LoadingScreen = () => {

    const bottomOpacity = useState(new Animated.Value(0))[0]
    const logoOpacity = useState(new Animated.Value(0))[0]

    useEffect(()=> {
        Animated.timing(bottomOpacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start()
        Animated.timing(logoOpacity, {
            toValue: 1,
            delay: 3000,
            duration: 3000,
            useNativeDriver: true
        }).start()
    }, [])

    return (
        <LinearGradient style={styles.screen} colors={['#007A53', '#056257', '#0A4D5B']} start={[0,0]} end={[1,1]}>
            <Animated.View style={[styles.logo, {opacity: logoOpacity}]}>
                <AppMainLogo/>
               <Text style={styles.logoTitle}>জানো বাংলাদেশ</Text>
            </Animated.View>
            <Animated.View style={[styles.bottomArt, {opacity: bottomOpacity}]}>
                <BottomArt/>
            </Animated.View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomArt: {
        transform:[{scale: 1.35}],
        position: 'absolute',
        bottom: 20
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoTitle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default LoadingScreen
