import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import DetailScreen from '../screens/DetailScreen'
import MainNavigator from './MainNavigator'
import Svg, { Path, G, Circle } from 'react-native-svg';

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
                inactiveTintColor: 'gray',
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 10,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "#FFF",
                    elevation: 0,
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
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
                name="Detail" 
                component={DetailScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/images/Score-icon-select.png')}/>
                    ),
                    title: 'স্কোর'
                }}
            />
            <Tab.Screen 
                name="Float" 
                component={DetailScreen}
                options={{
                    tabBarIcon: () => (
                        <Svg style={{marginBottom: -16}}
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
                name="Option" 
                component={DetailScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/images/list-icon-select.png')}/>
                    ),
                    title: 'লিস্ট'
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={DetailScreen}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/images/Setting-icon-select.png')}/>
                    ),
                    title: 'সেটিং',
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
