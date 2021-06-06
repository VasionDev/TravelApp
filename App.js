import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { mianReducer } from './store/reducer/mainReducer';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';

const rootReducer = combineReducers({
  data: mianReducer
})

const store = createStore(rootReducer)

export default function App() {
  const [isLoader, setIsLoader] = useState(true)

  useEffect(()=> {
    setTimeout(()=>{
      setIsLoader(false)
    }, 8000)
  })

  return (
    <Provider store={store}>
      {isLoader ? <LoadingScreen/> :  <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>}
    </Provider>
  );
}

