import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Setting Scrren</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SettingScreen
