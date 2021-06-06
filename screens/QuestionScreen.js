import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native'
import Svg, { G } from "react-native-svg"
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
import ZoomIcon from '../components/svg/ZoomIcon'

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
                            <ZoomIcon/>
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