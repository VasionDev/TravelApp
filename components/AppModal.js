import React, {useState, useEffect, useCallback} from 'react'
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native'
import Svg, { G, Circle, Path, Rect, Ellipse } from "react-native-svg"
import * as Progress from 'react-native-progress';

const AppModal = (props) => {
    
    const [modalContent, setModalContent] = useState()
    const [isProgress, setIsProgress] = useState(false)

    useEffect(()=> {
        setModalContent(getModalContent())
    },[props, setIsProgress, isProgress])

    const onProgressSave = () => {
        setIsProgress(true)
        const timeOut = setTimeout(()=>{
            setIsProgress(false)
            props.onSave()
        }, 2000)
    }

    const getModalContent = useCallback(() => {
        let content
        if(props.answerType === true) {
            content =
            <View style={{alignItems: 'center'}}>
                <View style={styles.centeredView}>
                    <Svg width={68.331} height={60.067} viewBox="0 0 68.331 60.067">
                        <Path
                            data-name="Path 1168"
                            d="M69.166 62.154l-6.212 2.067a25.284 25.284 0 01-8.018 1.3H31.2a4.572 4.572 0 110-9.144h-4.628a4.578 4.578 0 110-9.155h-1.564a4.554 4.554 0 01-3.237-1.345 4.6 4.6 0 01-1.258-4.167 4.7 4.7 0 014.659-3.642H31.2a4.578 4.578 0 110-9.155h18.617c-2.275-2.913-5.23-9.873-5.249-13.808-.015-3.144.952-6.146 4.069-6.573a5.123 5.123 0 01.7-.055 5.052 5.052 0 014.9 3.982c.076.339.164.678.262 1.006 1.925 6.694 7.808 14.706 14.666 15.363z"
                            transform="translate(-19.921 -7.866)"
                            fill="#fdce46"
                        />
                        <Path
                            data-name="Path 1169"
                            d="M20.63 62.23a3.948 3.948 0 01-.21-1.28 4.569 4.569 0 014.571-4.57h3.5c-2.52 0-4.62 1.776-4.57 3.707v.007a2.3 2.3 0 002.291 2.256H48.73a25.463 25.463 0 008.02-1.3l6.21-2.07v3.17l-6.21 2.07a25.18 25.18 0 01-8.02 1.3H24.99a6.254 6.254 0 01-1.889-.406 4.476 4.476 0 01-2.471-2.884c.73.01-.57-.01 0 0z"
                            transform="translate(-13.714 -7.866)"
                            fill="#f7ab1c"
                        />
                        <Path
                            data-name="Path 1170"
                            d="M36.27 15.11c.02 3.93 2.97 10.88 5.25 13.81h3.5c-2.28-2.93-5.23-9.88-5.25-13.81-.01-2.77.73-5.42 3.03-6.31a4.948 4.948 0 00-1.76-.32 5.625 5.625 0 00-.7.05c-3.12.43-4.08 3.43-4.07 6.58z"
                            transform="translate(-11.624 -7.866)"
                            fill="#f7ab1c"
                        />
                        <Path
                            data-name="Path 1171"
                            d="M59.72 36.74a4.625 4.625 0 01-1.33-3.24 4.571 4.571 0 014.57-4.58h-3.5a4.575 4.575 0 100 9.15h3.5a4.607 4.607 0 01-3.24-1.33z"
                            transform="translate(-48.184 -7.866)"
                            fill="#f7ab1c"
                        />
                        <Path
                            data-name="Path 1172"
                            d="M64.095 47.22h1.57a4.58 4.58 0 100 9.16h3.5a4.58 4.58 0 110-9.16h-1.57a4.583 4.583 0 01-4.49-5.51 4.7 4.7 0 014.66-3.64h-3.5a4.7 4.7 0 00-4.66 3.64 4.583 4.583 0 004.49 5.51z"
                            transform="translate(-59.008 -7.866)"
                            fill="#f7ab1c"
                        />
                        <G data-name="Group 319" fill="#03161a">
                            <Path
                                data-name="Path 1173"
                                d="M51.749 38.57h6.639a.5.5 0 000-1h-6.639a.5.5 0 100 1z"
                                transform="translate(-40.47 -7.866)"
                            />
                            <Path
                                data-name="Path 1174"
                                d="M53.522 47.684h9.46a.5.5 0 000-1h-9.46a.5.5 0 000 1z"
                                transform="translate(-46.837 -7.866)"
                            />
                            <Path
                                data-name="Path 1175"
                                d="M53.688 56.879h4.7a.5.5 0 000-1h-4.7a.5.5 0 000 1z"
                                transform="translate(-42.409 -7.866)"
                            />
                        </G>
                        <Rect
                            data-name="Rectangle 3311"
                            width={15.586}
                            height={37.386}
                            rx={2.25}
                            transform="translate(49.245 19.18)"
                            fill="#04845b"
                        />
                        <Path
                            data-name="Path 1176"
                            d="M4.84 58.63v3.55a2.247 2.247 0 002.25 2.25h11.08a2.241 2.241 0 002.25-2.25v-3.55a2.247 2.247 0 01-2.25 2.25H7.09a2.253 2.253 0 01-2.25-2.25z"
                            transform="translate(44.406 -7.866)"
                            fill="#056257"
                        />
                        <G data-name="Group 318" fill="#03161a">
                            <Path
                                data-name="Path 1177"
                                d="M12.629 61.252a3.11 3.11 0 10-3.11-3.11 3.11 3.11 0 003.11 3.11zm0-5.22a2.11 2.11 0 11-2.11 2.11 2.11 2.11 0 012.11-2.11z"
                                transform="translate(44.409 -7.866)"
                            />
                            <Path
                                data-name="Path 1178"
                                d="M46.407 18a.507.507 0 00.086-.007.5.5 0 00.408-.578 14.131 14.131 0 01-.228-2.3 10.77 10.77 0 011.752-6.44.5.5 0 10-.806-.591 11.742 11.742 0 00-1.946 7.035 15.025 15.025 0 00.242 2.462.5.5 0 00.492.419z"
                                transform="translate(-24.525 -7.866)"
                            />
                            <Path
                                data-name="Path 1179"
                                d="M47.354 20.583a.506.506 0 00.148-.022.5.5 0 00.33-.625 25.79 25.79 0 01-.164-.547.5.5 0 10-.961.275q.081.282.17.567a.5.5 0 00.477.352z"
                                transform="translate(-24.872 -7.866)"
                            />
                            <Path
                                data-name="Path 1180"
                                d="M10.219 67.933h.687a.5.5 0 100-1h-.687a.5.5 0 100 1z"
                                transform="translate(48.542 -7.866)"
                            />
                            <Path
                                data-name="Path 1181"
                                d="M1.836 67.933h.622a5.757 5.757 0 005.75-5.75V61.5a.5.5 0 00-1 0v.683a4.756 4.756 0 01-4.75 4.75h-.622a.5.5 0 100 1z"
                                transform="translate(60.123 -7.866)"
                            />
                            <Path
                                data-name="Path 1182"
                                d="M31.2 66.022h23.738a25.687 25.687 0 008.174-1.327l6.213-2.067a.5.5 0 00.342-.474V28.828a.5.5 0 00-.452-.5c-6.385-.611-12.251-8.108-14.233-15a13.55 13.55 0 01-.256-.979 5.465 5.465 0 00-6.156-4.311c-2.921.4-4.52 2.911-4.5 7.071.017 3.611 2.51 9.928 4.774 13.307H31.2a5.075 5.075 0 00-3.03 9.155h-3a5.191 5.191 0 00-5.149 4.042 5.124 5.124 0 001.394 4.62 5.052 5.052 0 002.347 1.339 5.079 5.079 0 002.808 9.308h1.61a5.066 5.066 0 003.02 9.143zm37.466-4.229L62.8 63.747a24.723 24.723 0 01-7.858 1.275H31.2a4.072 4.072 0 110-8.143.5.5 0 000-1h-4.627a4.077 4.077 0 110-8.154.5.5 0 100-1h-1.564a4.052 4.052 0 01-2.884-1.2A4.124 4.124 0 0121 41.808a4.19 4.19 0 014.169-3.238H31.2a.5.5 0 000-1 4.078 4.078 0 110-8.155h18.617a.5.5 0 00.4-.807c-2.3-2.953-5.125-9.765-5.143-13.5-.012-2.543.609-5.661 3.636-6.075a4.47 4.47 0 015.044 3.54c.08.352.17.7.273 1.041 2.027 7.051 8.014 14.716 14.644 15.662z"
                                transform="translate(-19.922 -7.866)"
                            />
                            <Path
                                data-name="Path 1183"
                                d="M7.086 64.933h11.086a2.753 2.753 0 002.75-2.75V29.3a2.753 2.753 0 00-2.75-2.75H7.086a2.754 2.754 0 00-2.75 2.75v32.883a2.754 2.754 0 002.75 2.75zm11.086-37.387a1.752 1.752 0 011.75 1.75v32.887a1.753 1.753 0 01-1.75 1.75H7.086a1.753 1.753 0 01-1.75-1.75V29.3a1.752 1.752 0 011.75-1.75z"
                                transform="translate(44.409 -7.866)"
                            />
                        </G>
                        <Path
                            data-name="Path 1184"
                            d="M8.206 46.4a.736.736 0 00-.7.764v.38a.72.72 0 00.743.736 1.1 1.1 0 00.18-.021.825.825 0 00.609-.744v-.38a.807.807 0 00-.832-.735z"
                            transform="translate(53.124 -7.866)"
                            fill="#fff"
                        />
                        <Path
                            data-name="Path 1185"
                            d="M8.263 35.819a.771.771 0 00-.758.775l-.013 7.934a.757.757 0 00.776.725.857.857 0 00.17-.031.78.78 0 00.585-.753l.014-7.934a.742.742 0 00-.774-.716z"
                            transform="translate(53.138 -7.866)"
                            fill="#fff"
                        />
                        <Ellipse
                            data-name="Ellipse 6"
                            cx={2.61}
                            cy={2.61}
                            rx={2.61}
                            ry={2.61}
                            transform="translate(54.427 47.666)"
                            fill="#eeefee"
                        />
                    </Svg>
                    <Text style={styles.content}>আপনার উত্তরটি সঠিক হয়েছে।</Text>
                </View>
                <Pressable onPress={props.onNext} style={styles.button} android_ripple={{color: '#056257', borderless: false, radius: 77}}>
                    <Text style={styles.buttonText}>পরবর্তী প্রশ্নে যান</Text>
                </Pressable>
            </View>
        }else if(props.answerType === false) {
            content =
            <View style={{alignItems: 'center'}}>
                <View style={styles.centeredView}>
                    <Svg width={68.331} height={60.067} viewBox="0 0 68.331 60.067" {...props}>
                        <Path
                            data-name="Path 1168"
                            d="M69.166 11.844l-6.212-2.067a25.284 25.284 0 00-8.018-1.3H31.2a4.572 4.572 0 100 9.144h-4.628a4.578 4.578 0 100 9.155h-1.564a4.554 4.554 0 00-3.237 1.345 4.6 4.6 0 00-1.258 4.167 4.7 4.7 0 004.659 3.642H31.2a4.578 4.578 0 100 9.155h18.617c-2.275 2.913-5.23 9.873-5.249 13.808-.015 3.144.952 6.146 4.069 6.573a5.123 5.123 0 00.7.055 5.052 5.052 0 004.9-3.982c.076-.339.164-.678.262-1.006 1.925-6.694 7.808-14.706 14.666-15.363z"
                            transform="translate(-19.921 -6.065)"
                            fill="#ff8d2c"
                        />
                        <Path
                            data-name="Path 1169"
                            d="M20.63 59.67a3.948 3.948 0 00-.21 1.28 4.569 4.569 0 004.571 4.57h3.5c-2.52 0-4.62-1.776-4.57-3.707v-.007a2.3 2.3 0 012.291-2.256H48.73a25.463 25.463 0 018.02 1.3l6.21 2.07v-3.17l-6.21-2.07a25.18 25.18 0 00-8.02-1.3H24.99a6.254 6.254 0 00-1.889.406 4.476 4.476 0 00-2.471 2.884c.73-.01-.57.01 0 0z"
                            transform="translate(-13.714 -53.967)"
                            fill="#e66a07"
                        />
                        <Path
                            data-name="Path 1170"
                            d="M36.27 22.29c.02-3.93 2.97-10.88 5.25-13.81h3.5c-2.28 2.93-5.23 9.88-5.25 13.81-.01 2.77.73 5.42 3.03 6.31a4.948 4.948 0 01-1.76.32 5.625 5.625 0 01-.7-.05c-3.12-.43-4.08-3.43-4.07-6.58z"
                            transform="translate(-11.624 30.533)"
                            fill="#e66a07"
                        />
                        <Path
                            data-name="Path 1171"
                            d="M59.72 30.25a4.625 4.625 0 00-1.33 3.24 4.571 4.571 0 004.57 4.58h-3.5a4.575 4.575 0 110-9.15h3.5a4.607 4.607 0 00-3.24 1.33z"
                            transform="translate(-48.184 .943)"
                            fill="#e66a07"
                        />
                        <Path
                            data-name="Path 1172"
                            d="M64.095 47.229h1.57a4.58 4.58 0 110-9.16h3.5a4.58 4.58 0 100 9.16h-1.57a4.583 4.583 0 00-4.49 5.51 4.7 4.7 0 004.66 3.64h-3.5a4.7 4.7 0 01-4.66-3.64 4.583 4.583 0 014.49-5.51z"
                            transform="translate(-59.008 -26.516)"
                            fill="#e66a00"
                        />
                        <G data-name="Group 319" fill="#03161a">
                            <Path
                                data-name="Path 1173"
                                d="M51.749 37.57h6.639a.5.5 0 010 1h-6.639a.5.5 0 110-1z"
                                transform="translate(6.185 11.054) translate(-46.655 -19.261)"
                            />
                            <Path
                                data-name="Path 1174"
                                d="M53.522 46.684h9.46a.5.5 0 010 1h-9.46a.5.5 0 010-1z"
                                transform="translate(6.185 11.054) translate(-53.022 -37.489)"
                            />
                            <Path
                                data-name="Path 1175"
                                d="M53.688 55.879h4.7a.5.5 0 010 1h-4.7a.5.5 0 010-1z"
                                transform="translate(6.185 11.054) translate(-48.594 -55.879)"
                            />
                        </G>
                        <Rect
                            data-name="Rectangle 3311"
                            width={15.586}
                            height={37.386}
                            rx={2.25}
                            transform="translate(49.245 3.501)"
                            fill="#ef0c2f"
                        />
                        <Path
                            data-name="Path 1176"
                            d="M4.84 64.43v-3.55a2.247 2.247 0 012.25-2.25h11.08a2.241 2.241 0 012.25 2.25v3.55a2.247 2.247 0 00-2.25-2.25H7.09a2.253 2.253 0 00-2.25 2.25z"
                            transform="translate(44.406 -55.127)"
                            fill="#b70520"
                        />
                        <G data-name="Group 318" fill="#03161a">
                            <Path
                                data-name="Path 1177"
                                d="M12.629 55.032a3.11 3.11 0 11-3.11 3.11 3.11 3.11 0 013.11-3.11zm0 5.22a2.11 2.11 0 10-2.11-2.11 2.11 2.11 0 002.11 2.11z"
                                transform="translate(44.409 -48.351)"
                            />
                            <Path
                                data-name="Path 1178"
                                d="M46.407 7.866a.507.507 0 01.086.007.5.5 0 01.408.578 14.131 14.131 0 00-.228 2.3 10.77 10.77 0 001.752 6.44.5.5 0 11-.806.591 11.742 11.742 0 01-1.946-7.035 15.025 15.025 0 01.242-2.462.5.5 0 01.492-.419z"
                                transform="translate(-24.525 42.067)"
                            />
                            <Path
                                data-name="Path 1179"
                                d="M47.354 19.012a.506.506 0 01.148.022.5.5 0 01.33.625 25.79 25.79 0 00-.164.547.5.5 0 11-.961-.275q.081-.282.17-.567a.5.5 0 01.477-.352z"
                                transform="translate(-24.872 28.338)"
                            />
                            <Path
                                data-name="Path 1180"
                                d="M10.219 66.933h.687a.5.5 0 110 1h-.687a.5.5 0 110-1z"
                                transform="translate(48.542 -66.933)"
                            />
                            <Path
                                data-name="Path 1181"
                                d="M1.836 61h.622a5.757 5.757 0 015.75 5.75v.683a.5.5 0 01-1 0v-.683A4.756 4.756 0 002.458 62h-.622a.5.5 0 110-1z"
                                transform="translate(60.123 -61)"
                            />
                            <Path
                                data-name="Path 1182"
                                d="M31.2 7.979h23.738a25.687 25.687 0 018.174 1.327l6.213 2.067a.5.5 0 01.342.474v33.326a.5.5 0 01-.452.5c-6.385.611-12.251 8.108-14.233 15-.1.324-.181.651-.256.979a5.465 5.465 0 01-6.156 4.311c-2.921-.4-4.52-2.911-4.5-7.071.017-3.611 2.51-9.928 4.774-13.307H31.2a5.075 5.075 0 01-3.03-9.155h-3a5.191 5.191 0 01-5.149-4.042 5.124 5.124 0 011.394-4.62 5.052 5.052 0 012.347-1.339 5.079 5.079 0 012.808-9.308h1.61a5.066 5.066 0 013.02-9.143zm37.466 4.229L62.8 10.254a24.723 24.723 0 00-7.858-1.275H31.2a4.072 4.072 0 100 8.143.5.5 0 010 1h-4.627a4.077 4.077 0 100 8.154.5.5 0 110 1h-1.564a4.052 4.052 0 00-2.884 1.2A4.124 4.124 0 0021 32.193a4.19 4.19 0 004.169 3.238H31.2a.5.5 0 010 1 4.078 4.078 0 100 8.155h18.617a.5.5 0 01.4.807c-2.3 2.953-5.125 9.765-5.143 13.5-.012 2.543.609 5.661 3.636 6.075a4.47 4.47 0 005.044-3.54c.08-.352.17-.7.273-1.041 2.027-7.051 8.014-14.716 14.644-15.662z"
                                transform="translate(-19.922 -6.068)"
                            />
                            <Path
                                data-name="Path 1183"
                                d="M7.086 26.55h11.086a2.753 2.753 0 012.75 2.75v32.883a2.753 2.753 0 01-2.75 2.75H7.086a2.754 2.754 0 01-2.75-2.75V29.3a2.754 2.754 0 012.75-2.75zm11.086 37.387a1.752 1.752 0 001.75-1.75V29.3a1.753 1.753 0 00-1.75-1.75H7.086a1.753 1.753 0 00-1.75 1.75v32.883a1.752 1.752 0 001.75 1.75z"
                                transform="translate(44.409 -23.55)"
                            />
                        </G>
                        <Path
                            data-name="Path 1184"
                            d="M8.206 48.28a.736.736 0 01-.7-.764v-.38a.72.72 0 01.743-.736 1.1 1.1 0 01.18.021.825.825 0 01.609.744v.38a.807.807 0 01-.832.735z"
                            transform="translate(53.124 -26.747)"
                            fill="#fff"
                        />
                        <Path
                            data-name="Path 1185"
                            d="M8.263 45.253a.771.771 0 01-.758-.775l-.013-7.934a.757.757 0 01.776-.725.857.857 0 01.17.031.78.78 0 01.585.753l.014 7.934a.742.742 0 01-.774.716z"
                            transform="translate(53.137 -13.139)"
                            fill="#fff"
                        />
                        <Ellipse
                            data-name="Ellipse 6"
                            cx={2.61}
                            cy={2.61}
                            rx={2.61}
                            ry={2.61}
                            transform="translate(54.427 7.181)"
                            fill="#eeefee"
                        />
                    </Svg>
                    <Text style={styles.content}>আপনার উত্তরটি সঠিক হয়নি।</Text>
                </View>
                
                <Pressable onPress={props.onClose} style={[styles.button, {backgroundColor: '#f6646a'}]} android_ripple={{color: '#DC143C', borderless: false, radius: 78}}>
                    <Text style={styles.buttonText}>পুনরায় উত্তর দিন</Text>
                </Pressable>
            </View>
        }else {
            content =  
            <View style={{alignItems: 'center'}}>
                <View style={styles.centeredView}>
                    <Text style={styles.title}>উত্তর নির্বাচন করা হয়েছে</Text>
                    <Text style={styles.content}>{props.selectedDistrict} জেলা</Text>
                    {isProgress && <Progress.Bar progress={0.3} width={200} indeterminate={true} color="#007A53" />}
                </View>
                <Pressable onPress={onProgressSave} style={styles.button} android_ripple={{color: '#056257', borderless: false, radius: 60}}>
                    <Text style={styles.buttonText}>জমা দিন</Text>
                </Pressable>
            </View>
        }
        return content
    }, [props, setIsProgress, isProgress])

    return (
        <Modal animationType="slide" transparent={true} visible= {props.modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable style={styles.modalClose} onPress={props.onClose}>
                        <Svg width={38} height={38} viewBox="0 0 38 32">
                            <G transform="translate(9 6) translate(-9 -6)" filter="url(#a)">
                                <Circle
                                    data-name="Ellipse 5"
                                    cx={10}
                                    cy={10}
                                    r={10}
                                    transform="translate(9 6)"
                                    fill="#fff"
                                />
                            </G>
                            <G
                                data-name="Group 313"
                                transform="translate(9 6) translate(-163.069 -123.069)"
                                fill="none"
                                stroke="#007A53"
                                strokeLinecap="round"
                                strokeWidth={2.1}
                            >
                                <Path
                                    data-name="Line 12"
                                    transform="rotate(45 -71.266 268.619)"
                                    d="M0 0L11.314 0"
                                />
                                <Path
                                    data-name="Line 13"
                                    transform="rotate(-45 249.991 -135.55)"
                                    d="M0 0L11.314 0"
                                />
                            </G>
                        </Svg>
                    </Pressable>
                    <View>
                        {modalContent}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '70%',
        height: '45%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        borderTopRightRadius: 0,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'space-around'
    },
    button: {
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 40,
        elevation: 3,
        backgroundColor: '#007A53',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff'
    },
    title: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: {
        textAlign: "center",
        fontSize: 25,
        color: '#056257',
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalClose: {
        position: 'absolute',
        right: -10, 
        top: -10,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 50,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AppModal
