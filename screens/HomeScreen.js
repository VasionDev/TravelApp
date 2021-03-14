import React, {useRef} from 'react'
import { View, StyleSheet, TextInput, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { G, Path } from "react-native-svg"

const HomeScreen = ({navigation}) => {

    const searchInputRef = useRef()

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.header} colors={['#007A53', '#056257', '#0A4D5B']} start={[0,1]} end={[1,0]}>
                <View>
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
            <View>
                <View style={styles.searchContainer}>
                    <TextInput ref={searchInputRef} style={styles.searchInput} placeholder="লেখা অন্তর্ভুক্ত করুন" />
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>searchInputRef.current.focus()}>
                        <Svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={15.999}
                            viewBox="0 0 16 15.999"
                            >
                            <Path
                                fill="#007a53"
                                d="M15.766 14.2l-4.074-4.072a6.452 6.452 0 10-1.564 1.564l4.072 4.074a.794.794 0 001.123 0l.442-.442a.792.792 0 00.001-1.124zm-5.115-7.768a4.218 4.218 0 11-4.219-4.219 4.224 4.224 0 014.219 4.22z"
                                data-name="Search-icon"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.headerTitle}>প্রশ্নের বিভাগ</Text>
                <ScrollView>
                    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.7} onPress={()=> navigation.navigate('Detail')}>
                        <View>
                            <Image style={styles.categoryImage} source={require('../assets/images/question-img.png')}/>
                            <Text style={styles.title}>ঐতিহাসিক স্থান</Text>
                            <Progress.Bar progress={0.6} color="#007A53" borderColor="#056257" width={null} borderWidth={.1} unfilledColor="#F0F0F0" borderColor="#F0F0F0" />
                            <View style={styles.progressInfo}>
                                <Text style={styles.textGray}>উত্তর দেওয়া হয়েছে</Text>
                                <Text style={styles.textGray}>৯/১০</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.7}>
                        <View>
                            <Image style={styles.categoryImage} source={require('../assets/images/question-img1.png')}/>
                            <Text style={styles.title}>ঐতিহাসিক স্থান </Text>
                            <Progress.Bar progress={0} color="#007A53" borderColor="#056257" width={null} borderWidth={.1} unfilledColor="#F0F0F0" borderColor="#F0F0F0" />
                            <View style={styles.progressInfo}>
                                <Text style={styles.textGray}>উত্তর দেওয়া হয়েছে</Text>
                                <Text style={styles.textGray}>০/১০</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.7}>
                        <View>
                            <Image style={styles.categoryImage} source={require('../assets/images/question-img.png')}/>
                            <Text style={styles.title}>ঐতিহাসিক স্থান </Text>
                            <Progress.Bar progress={0.4} color="#007A53" borderColor="#056257" width={null} borderWidth={.1} unfilledColor="#F0F0F0" borderColor="#F0F0F0" />
                            <View style={styles.progressInfo}>
                                <Text style={styles.textGray}>উত্তর দেওয়া হয়েছে</Text>
                                <Text style={styles.textGray}>৪/১০</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F8F9FB',
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
    searchContainer: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 30,
        marginTop: -25,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchInput: {
        flex: 1
    },
    content: {
        marginHorizontal: 30,
        marginVertical: 15,
        height: '75%'
    },
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
    headerTitle: {
        color: '#007A53',
        paddingVertical: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
    title: {
        paddingVertical: 15,
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

export default HomeScreen
