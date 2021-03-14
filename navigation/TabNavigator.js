import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import DetailScreen from '../screens/DetailScreen'
import MainNavigator from './MainNavigator'
import Svg, { Path, G, Circle } from 'react-native-svg';
import ScoreScreen from '../screens/ScoreScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                <View style={{ flex: 1, backgroundColor: '#FFF' }}></View>
                <Svg
                    width={75}
                    height={61}
                    viewBox="0 0 75 61"
                >
                    <Path
                        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                        fill='#FFF'
                    />
                </Svg>
                <View style={{ flex: 1, backgroundColor: '#FFF' }}></View>
            </View>

            <TouchableOpacity
                style={{
                    top: -22.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: '#FFF',
                    elevation: 5
                }}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        </View>
    )
}

const CustomTabBar = (props) => {
    return (
        <View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                    backgroundColor: '#FFF'
                }}
            ></View>
            <BottomTabBar
                {...props.props}
            />
        </View>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#007A53',
                inactiveTintColor: '#8A9CB7',
                style: {
                    // position: 'absolute',
                    left: 0,
                    bottom: 10,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "#FFF",
                    elevation: 0,
                }
            }}
            // tabBar={(props) => (
            //     <CustomTabBar
            //         props={props}
            //     />
            // )}
        >
            <Tab.Screen 
                name="TabHome" 
                component={MainNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                         <Svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13.078}
                            height={13.768}
                            viewBox="0 0 13.078 13.768"
                            >
                            <Path
                                fill={focused ? '#007A53' :  'gray'}
                                d="M4.573 12.929v-2.11a.98.98 0 01.974-.974h1.979a.976.976 0 01.977.974v2.1a.847.847 0 00.846.844h1.35a2.368 2.368 0 001.683-.689 2.344 2.344 0 00.7-1.667v-6a1.7 1.7 0 00-.616-1.309L7.88.457a2.142 2.142 0 00-2.725.048L.664 4.107a1.69 1.69 0 00-.667 1.309v5.99a2.369 2.369 0 002.379 2.362h1.318a.843.843 0 00.852-.839zm0 0"
                                data-name="Home-icon"
                            />
                        </Svg>
                    ),
                    title: 'হোম'
                }}
            />
            <Tab.Screen 
                name="Score" 
                component={ScoreScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        return focused ? <Image source={require('../assets/images/Score-icon-select.png')}/> : <Image source={require('../assets/images/Score-icon.png')}/>
                    },
                    title: 'স্কোর'
                }}
            />
            <Tab.Screen 
                name="Float" 
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Svg style={{marginBottom: -20}}
                            xmlns="http://www.w3.org/2000/svg"
                            width={64.128}
                            height={64.129}
                            viewBox="0 0 64.128 64.129"
                            >
                            <G data-name="Group 33">
                                <Circle
                                cx={22.673}
                                cy={22.673}
                                r={22.673}
                                fill="#007a53"
                                data-name="Ellipse 1"
                                transform="rotate(-45 38.705 16.032)"
                                />
                                <Path
                                fill="#fff"
                                d="M29.658 34.47l2.4 7.806 7.606-17.8.007-.007-.007.007-17.8 7.606z"
                                data-name="Path 20"
                                />
                            </G>
                        </Svg>
                    ),
                    tabBarLabel: ()=><Text></Text>,
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="List" 
                component={DetailScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13.676}
                            height={12.581}
                            viewBox="0 0 13.676 12.581"
                            >
                            <G data-name="Group 28">
                                <Path
                                fill={focused ? '#007A53' :  'gray'}
                                d="M2.734 1.363A1.367 1.367 0 111.367-.004a1.368 1.368 0 011.367 1.367zm0 0"
                                data-name="Path 14"
                                />
                                <G data-name="Group 25">
                                <Path
                                    fill={focused ? '#007A53' :  'gray'}
                                    d="M13.128 2.188H5.469a.547.547 0 110-1.094h7.659a.547.547 0 110 1.094z"
                                    data-name="Path 15"
                                />
                                </G>
                                <Path
                                fill={focused ? '#007A53' :  'gray'}
                                d="M2.734 6.291a1.367 1.367 0 11-1.367-1.367 1.368 1.368 0 011.367 1.367zm0 0"
                                data-name="Path 16"
                                />
                                <G data-name="Group 26">
                                <Path
                                    fill={focused ? '#007A53' :  'gray'}
                                    d="M13.128 7.112H5.469a.547.547 0 110-1.094h7.659a.547.547 0 110 1.094z"
                                    data-name="Path 17"
                                />
                                </G>
                                <Path
                                fill={focused ? '#007A53' :  'gray'}
                                d="M2.734 11.214a1.367 1.367 0 11-1.367-1.368 1.367 1.367 0 011.367 1.368zm0 0"
                                data-name="Path 18"
                                />
                                <G data-name="Group 27">
                                <Path
                                    fill={focused ? '#007A53' :  'gray'}
                                    d="M13.128 12.034H5.469a.547.547 0 110-1.094h7.659a.547.547 0 110 1.094z"
                                    data-name="Path 19"
                                />
                                </G>
                            </G>
                        </Svg>
                    ),
                    title: 'লিস্ট'
                }}
            />
            <Tab.Screen 
                name="Setting" 
                component={SettingScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13.526}
                            height={13.904}
                            viewBox="0 0 13.526 13.904"
                            >
                            <Path
                                fill={focused ? '#007A53' :  'gray'}
                                d="M11.925 7.629a4.695 4.695 0 000-1.354l1.471-1.152a.344.344 0 00.082-.443l-1.39-2.409a.342.342 0 00-.423-.149l-1.731.7a5.233 5.233 0 00-1.175-.684L8.499.296a.36.36 0 00-.348-.293h-2.78a.349.349 0 00-.344.293l-.261 1.842a5.075 5.075 0 00-1.175.684l-1.732-.7a.345.345 0 00-.423.149L.046 4.68a.346.346 0 00.084.443l1.467 1.152a4.7 4.7 0 000 1.354L.13 8.781a.344.344 0 00-.084.443l1.39 2.409a.342.342 0 00.423.149l1.732-.7a5.236 5.236 0 001.175.684l.261 1.842a.349.349 0 00.344.293h2.78a.352.352 0 00.344-.293l.26-1.842a5.054 5.054 0 001.176-.684l1.731.7a.345.345 0 00.423-.149l1.39-2.409a.344.344 0 00-.084-.443zM6.762 9.384a2.432 2.432 0 112.432-2.432 2.431 2.431 0 01-2.432 2.432zm0 0"
                            />
                        </Svg>
                    ),
                    title: 'সেটিং',
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
