import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native'
import Svg, { G, Rect, Path } from "react-native-svg"
import { PanGestureHandler } from 'react-native-gesture-handler'
import QuestionContainer from '../components/QuestionContainer'
import BarisalDivision from '../components/map/BarisalDivision'
import RangpurDivision from '../components/map/RangpurDivision'
import ChittagongDivision from '../components/map/ChittagongDivision'
import KhulnaDivision from '../components/map/KhulnaDivision'
import SylhetDivision from '../components/map/SylhetDivision'
import DhakaDivision from '../components/map/DhakaDivision'
import MymensinghDivision from '../components/map/MymensinghDivision'
import RajshahiDivision from '../components/map/RajshahiDivision'
import AppModal from '../components/AppModal'
import { useSelector, useDispatch } from 'react-redux'
import { onCorrectAnswer } from './../store/action/mainAction';

const QuestionScreen = ({navigation, route}) => {
    const [excludedItem, setExcludedItem] = useState([])
    const {categoryID} = route.params
    const completedData = useSelector(state=> state.data.completed)
    const selectedQuestion = useSelector(state=> state.data.questions.filter(question=> question.catIds.indexOf(categoryID) >= 0).filter(item=> !excludedItem.includes(item.id)))

    const dispatch = useDispatch()
    const [questionNo, setQuestionNo] = useState(0)
    const [zoom, setZoom] = useState(1.25)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDistrict, setSelectedDistrict] =  useState('')
    const [overlay, setOverlay] =  useState({})
    const [isCorrect, setIsCorrect] = useState()

    const xScale = new Animated.Value(0);
    const yScale = new Animated.Value(0);

    useEffect(()=> {
        if(completedData[categoryID]){
            setExcludedItem(completedData[categoryID])
        }
    }, [])

    useEffect(()=> {
        if(modalVisible) {
            setOverlay({opacity: .3, backgroundColor: 'rgb(0, 0, 0)'})
        }else {
            setOverlay({})
        }
    }, [modalVisible])

    const onPanGestureEvent = Animated.event(
        [{nativeEvent: {translationY: yScale, translationX: xScale}}],
        { useNativeDriver: true }
    )

    const onMapSelect = district => {
        setSelectedDistrict(district)
        setModalVisible(true)
    }

    const onMapZoomIn = () => {
        if(zoom > 2) {
            setZoom(1.25)
            return
        }
        setZoom(prevState=> prevState + .20)
    }

    const onModalClosed = () => {
        setModalVisible(false)
        setIsCorrect()
    }

    const onResultProcess = () => {
        if(selectedQuestion[questionNo].location === selectedDistrict) {
            setIsCorrect(true)
            dispatch(onCorrectAnswer(categoryID, selectedQuestion[questionNo].id))
        }else {
            setIsCorrect(false)
        }
    }

    const questionOnNext = () => {
        onModalClosed()
        if(questionNo < selectedQuestion.length - 1) {
            setQuestionNo(prevState=> prevState + 1)
        }else {
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <AppModal 
                modalVisible={modalVisible} 
                selectedDistrict={selectedDistrict} 
                onClose={onModalClosed}
                answerType={isCorrect}
                onSave={onResultProcess}
                onNext={questionOnNext}
            />
            <View style={{flex:1, ...overlay}}>
                <QuestionContainer question={selectedQuestion[questionNo]} navigation={navigation}/>
                <View style={styles.map}>
                    <View style={styles.mapTopContent}>
                        <Pressable onPress={onMapZoomIn}>
                            <Svg style={{padding: 18, marginLeft: 20}} width={24} height={24} viewBox="0 0 24 24">
                                <G transform="translate(-1164.559 -374.089)">
                                    <Rect
                                        data-name="Rectangle 3307"
                                        width={24}
                                        height={24}
                                        rx={4}
                                        transform="translate(1164.559 374.089)"
                                        fill="#056257"
                                    />
                                    <G data-name="Group 2649">
                                        <Path
                                        data-name="Path 2646"
                                        d="M1183.567 386.481a.423.423 0 01-.128.313l-2.256 2.255c-.085.086-.157.116-.216.088s-.088-.1-.088-.215V386.6h-2.592a1.632 1.632 0 01-.5 1.1 1.71 1.71 0 01-1.12.511v2.577h2.32c.118 0 .189.032.216.1s0 .134-.088.208l-2.256 2.273a.472.472 0 01-.608 0L1174 391.1c-.085-.074-.118-.143-.1-.208s.091-.1.208-.1h2.336v-2.577a1.713 1.713 0 01-1.12-.511 1.636 1.636 0 01-.5-1.1h-2.592v2.321c0 .117-.029.189-.088.215s-.13 0-.216-.088l-2.256-2.271a.419.419 0 01-.128-.305.414.414 0 01.128-.3l2.256-2.256c.086-.086.157-.115.216-.088s.088.1.088.216v2.32h2.592a1.636 1.636 0 01.5-1.105 1.713 1.713 0 011.12-.511v-2.561h-2.32c-.117 0-.189-.031-.216-.1s0-.132.088-.208l2.256-2.272a.425.425 0 01.312-.128.374.374 0 01.3.128l2.256 2.272c.085.076.117.144.1.208s-.09.1-.208.1h-2.336v2.561a1.727 1.727 0 011.12.5 1.614 1.614 0 01.5 1.112h2.592v-2.32c0-.118.029-.19.088-.216s.131 0 .216.088l2.256 2.256a.42.42 0 01.119.309z"
                                        fill="#fff"
                                        />
                                    </G>
                                </G>
                            </Svg>
                        </Pressable>
                        <View>
                            <Text style={styles.mapTitle}>নিচের ম্যাপ এ আপনার উত্তর নির্বাচন করুন।</Text>
                        </View>
                    </View>
                    <PanGestureHandler onGestureEvent={onPanGestureEvent}>
                        <Animated.View style={[{overflow: 'hidden', marginTop: 30}, {transform: [{ scale: zoom}, {translateY: yScale}, {translateX: xScale}]}]}>
                            <Svg
                                width={225.634}
                                height={307.268}
                                viewBox="0 0 225.634 307.268"
                            >
                                <G data-name="Group 2635">
                                    <RajshahiDivision onMapSelect={onMapSelect}/>
                                    <MymensinghDivision onMapSelect={onMapSelect}/>
                                    <DhakaDivision onMapSelect={onMapSelect}/>
                                    <SylhetDivision onMapSelect={onMapSelect}/>
                                    <KhulnaDivision onMapSelect={onMapSelect}/>
                                    <ChittagongDivision onMapSelect={onMapSelect}/>
                                    <RangpurDivision onMapSelect={onMapSelect}/>
                                    <BarisalDivision onMapSelect={onMapSelect}/>
                                </G>
                            </Svg>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F8F9FB',
    },
    map:{
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#F8F9FB',
        top: 280,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        height: '100%',
        paddingTop: 25,
        overflow: 'hidden',

    },
    mapTopContent: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:'center', 
        width: '100%', 
        zIndex: 999
    },
    mapTitle: {
        color: '#007A53',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#FFF',
        elevation: 6,
        fontSize: 12,
        fontWeight: 'bold',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
})

export default QuestionScreen