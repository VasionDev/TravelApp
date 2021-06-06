import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { G, Path } from "react-native-svg"

const AppHeader = () => {
    return (
        <LinearGradient style={styles.header} colors={['#007A53', '#056257', '#0A4D5B']} start={[0,1]} end={[1,0]}>
            <View style={styles.headerLeft}>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 76.652 79.5"
                    >
                    <G fill="#fff">
                        <Path
                        d="M66.108 74.814l-31.332-16.59a2.513 2.513 0 00-2.584.149L8.234 74.963a2.487 2.487 0 00-.956 2.793 2.486 2.486 0 002.37 1.743h55.291a2.486 2.486 0 002.415-1.892 2.477 2.477 0 00-1.246-2.793z"
                        data-name="Path 1162"
                        />
                        <Path
                        d="M58.291 34.246L3.906 71.902a2.465 2.465 0 01-1.419.443 2.483 2.483 0 01-1.389-.423 2.5 2.5 0 01-1.039-2.6l7.313-32.9a132.429 132.429 0 0010.426 13.37 2.813 2.813 0 002.086.919 2.814 2.814 0 002.085-.929c1.288-1.438 9.777-11.05 14.448-20.076h20.464a2.5 2.5 0 012.38 1.747 2.492 2.492 0 01-.97 2.793z"
                        data-name="Path 1163"
                        />
                        <Path
                        d="M69.225 36.91a2.488 2.488 0 00-1.524-1.777 2.493 2.493 0 00-2.325.269l-23.963 16.59a2.479 2.479 0 00-1.066 2.191 2.476 2.476 0 001.32 2.051l31.327 16.59a2.5 2.5 0 001.165.294 2.456 2.456 0 001.509-.513 2.492 2.492 0 00.926-2.519z"
                        data-name="Path 1164"
                        />
                        <Path
                        d="M19.88 0A17.445 17.445 0 002.454 17.426c0 8.942 13.982 24.779 15.575 26.558a2.5 2.5 0 001.852.826 2.5 2.5 0 001.853-.826c1.593-1.778 15.573-17.616 15.573-26.558A17.445 17.445 0 0019.88 0zm0 24.895a7.468 7.468 0 01-7.468-7.468 7.468 7.468 0 017.468-7.468 7.468 7.468 0 017.468 7.468 7.468 7.468 0 01-7.468 7.468z"
                        data-name="Path 1165"
                        />
                    </G>
                </Svg>
                <Text style={styles.headerTitle}>জানো বাংলাদেশ </Text>
            </View>
            <View>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 28 28"
                    >
                    <Path
                        fill="#fff"
                        d="M28 13.997a14 14 0 11-14-14 14 14 0 0114 14z"
                        data-name="Path 1"
                    />
                    <Path
                        fill="#0a4d5b"
                        d="M12.208 16.749a19.346 19.346 0 013.115 0 12.757 12.757 0 011.68.211 3.137 3.137 0 012.321 1.279 1.785 1.785 0 010 1.6 3 3 0 01-2.336 1.279 11.943 11.943 0 01-1.68.219 14.642 14.642 0 01-1.573.056h-.953a4.8 4.8 0 00-.58-.039 11.328 11.328 0 01-1.68-.211 3.111 3.111 0 01-2.323-1.285 1.77 1.77 0 01-.2-.807 1.738 1.738 0 01.195-.816 3.059 3.059 0 012.327-1.279 12.285 12.285 0 011.686-.211zM13.76 7a3.887 3.887 0 11-3.781 3.883A3.832 3.832 0 0113.76 7zm0 0"
                        data-name="Path 7"
                    />
                </Svg>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 30,
        width: '100%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 5
    }
})

export default AppHeader
