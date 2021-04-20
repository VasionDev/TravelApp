import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress';
import { QUESTION_LIST } from '../data/dummy-data';
import { getDigitBanglaFromEnglish } from './../lib/common';

const CategoryItem = ({category, navigation, completed, showImage}) => {

    const totalQuestion = QUESTION_LIST.filter(question=> question.catIds.indexOf(category.id) >= 0).length
    const onDetailView = () => {
        if(completed !== totalQuestion) {
            navigation.navigate('Detail', {categoryID: category.id})
        }
    }
    return (
        <TouchableOpacity style={styles.categoryCard} activeOpacity={0.7} onPress={onDetailView}>
            <View style={{opacity: completed === totalQuestion ? .4: 1}}>
                {showImage ? <Image style={styles.categoryImage} source={{uri: category.imageUrl}}/> : <View></View>}
                <Text style={styles.title}>{category.name}</Text>
                <Progress.Bar progress={completed ? (completed/totalQuestion) : completed} color="#007A53" borderColor="#056257" width={null} borderWidth={.1} unfilledColor="#F0F0F0" borderColor="#F0F0F0" />
                <View style={styles.progressInfo}>
                    <Text style={styles.textGray}>উত্তর দেওয়া হয়েছে</Text>
                    <Text style={styles.textGray}>{getDigitBanglaFromEnglish(completed)}/{getDigitBanglaFromEnglish(totalQuestion)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryCard: {
        backgroundColor: '#FFF',
        elevation: 5,
        borderRadius: 10,
        padding: 20,
        borderColor: '#EEE',
        borderWidth: 1,
        marginVertical: 20,
        overflow: 'hidden'
    },
    categoryImage: {
        width: '100%',
        height: 180,
        borderRadius: 10
    },
    title: {
        paddingVertical: 10,
        color: '#007A53',
        fontSize: 16,
        fontWeight: 'bold'
    },
    progressInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    textGray: {
        color: '#8A9CB7'
    }
})

export default CategoryItem
