import React from 'react'
import { View, StyleSheet, TextInput, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.header} colors={['#007A53', '#056257', '#0A4D5B']} start={[0,1]} end={[1,0]}>
                <View>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
                </View>
                <View>
                    <Image source={require('../assets/images/profile-icon.png')}/>
                </View>
            </LinearGradient>
            <View style={styles.body}>
                <View style={styles.searchContainer}>
                    <TextInput placeholder="লেখা অন্তর্ভুক্ত করুন"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between'
    },
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
    logo : {
        width: 35,
        height: 35
    },
    body: {
        flex: 1,
        backgroundColor: '#F8F9FB'
    },
    searchContainer: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 30,
        marginTop: -25,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 6,
    },
    footer: {
        backgroundColor: '#FFF',
        padding: 20,
        width: '100%',
        elevation: 5,
        borderColor: '#ddd',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footerList: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen
