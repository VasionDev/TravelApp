import React, { useState, useRef } from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, FlatList, Keyboard, Pressable } from 'react-native'
import CategoryItem from '../components/CategoryItem';
import { useSelector } from 'react-redux'
import AppHeader from '../components/AppHeader';
import SearchIcon from '../components/svg/SearchIcon';

const HomeScreen = ({navigation}) => {

    const categoryData = useSelector(state=> state.data.categories)
    const completedData = useSelector(state=> state.data.completed)
    const [filteredCategory, setFilteredCategory] = useState(categoryData)
    const searchInputRef = useRef()

    const onSearchCategory = (text) => {
        let filterCat
        if(text !== '') {
           filterCat = categoryData.filter(cat=> cat.name.indexOf(text) >= 0 )
        }else {
            filterCat = categoryData;
        }
        setFilteredCategory(filterCat)
    }


    return (
        <Pressable style={styles.container} onPress={()=>Keyboard.dismiss()}>
            <AppHeader/>
            <View>
                <View style={styles.searchContainer}>
                    <TextInput ref={searchInputRef} style={styles.searchInput} placeholder="লেখা অন্তর্ভুক্ত করুন" onChangeText={onSearchCategory}/>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>searchInputRef.current.focus()}>
                        <SearchIcon/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.headerTitle}>প্রশ্নের বিভাগ</Text>
                <FlatList
                    data={filteredCategory}
                    keyExtractor={item=> item.id}
                    renderItem={(itemData)=> <CategoryItem showImage category={itemData.item} completed={completedData[itemData.item.id] ? completedData[itemData.item.id].length : 0} navigation={navigation}/>}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F8F9FB',
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
    headerTitle: {
        color: '#007A53',
        paddingVertical: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
})

export default HomeScreen
