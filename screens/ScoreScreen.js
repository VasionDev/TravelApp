import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native'
import AppHeader from '../components/AppHeader'
import { useSelector } from 'react-redux'
import CategoryItem from './../components/CategoryItem';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getDigitBanglaFromEnglish } from './../lib/common';


const ScoreScreen = ({navigation}) => {

    const categoryData = useSelector(state=> state.data.categories)
    const completedData = useSelector(state=> state.data.completed)
    const totalCompleted = useSelector(state=> state.data.totalCompleted)
    const allQuestion = useSelector(state=> state.data.questions)
    const [totalQuestion, setTotalQuestion] = useState(0)
    
    useEffect(()=> {
        let totalNumber = 0
        categoryData.forEach(element => {
            totalNumber += allQuestion.filter(question=> question.catIds.indexOf(element.id) >= 0).length
        });
        setTotalQuestion(totalNumber)
    })

    return (
        <View style={styles.container}>
            <AppHeader/>
            <View style={styles.progressContainer}>
                <AnimatedCircularProgress
                    size={200}
                    width={10}
                    fill={totalCompleted ? (totalCompleted/totalQuestion)*100 : 0}
                    tintColor="#007A53"
                    // onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#ddd"
                    rotation={0}>
                        {
                            () => (
                                <View style={styles.scoreContainer}>
                                    <Text style={styles.score}>{getDigitBanglaFromEnglish(totalCompleted * 10)}</Text>
                                    <Text style={styles.scoreText}>আপনার সর্বমোট স্কোর</Text>
                                </View>
                            )
                        }
                </AnimatedCircularProgress>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={categoryData}
                    keyExtractor={item=> item.id}
                    renderItem={(itemData)=> <CategoryItem  category={itemData.item} completed={completedData[itemData.item.id] ? completedData[itemData.item.id].length : 0} navigation={navigation}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    content: {
        flex:1,
        marginHorizontal: 30,
        marginVertical: 15,
    },
    progressContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    score: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#007A53',
        textAlign: 'center'
    },
    scoreText: {
        color: '#007A53',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ScoreScreen
