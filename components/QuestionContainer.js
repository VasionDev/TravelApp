import React from 'react'
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Svg, { G, Rect, Path } from "react-native-svg"

const QuestionContainer = ({navigation, question}) => {
    return (
        <View style={styles.header}>
            <ImageBackground style={styles.headerBG} source={{uri: question.imageUrl}}>
                <View style={styles.overlay}>
                    <View style={styles.headerIcon}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.goBack()}>
                            <Svg
                                style={{marginTop: 50}}
                                xmlns="http://www.w3.org/2000/svg"
                                width={16.401}
                                height={12.026}
                                viewBox="0 0 16.401 12.026"
                            >
                                <Path
                                    fill="#fff"
                                    d="M1.831 5.411l4.583-4.375a.6.6 0 00-.829-.87l-5.234 5a1.2 1.2 0 00.011 1.71l5.225 4.987a.6.6 0 00.827-.871l-4.6-4.374h13.988a.6.6 0 000-1.2zm13.969 0"
                                    data-name="Path 24"
                                />
                            </Svg>
                        </TouchableOpacity>
                        <Text style={{marginTop: 50}}></Text>
                    </View>
                    <View style={styles.questionContent}>
                        <Text style={styles.questionTitle}>{question.title}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 350,
    },
    headerBG: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 122, 83, .5)',
        justifyContent: 'space-between'
    },
    headerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    questionContent: {
        marginBottom: 100,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    questionTitle: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default QuestionContainer
