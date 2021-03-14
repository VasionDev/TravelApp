import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScoreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Score Scrren</Text>
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

export default ScoreScreen
