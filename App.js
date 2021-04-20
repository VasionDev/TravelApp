import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { mianReducer } from './store/reducer/mainReducer';

const rootReducer = combineReducers({
  data: mianReducer
})

const store = createStore(rootReducer)


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

