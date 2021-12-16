import React, { useState } from "react";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}

        />
        <Stack.Screen
          name="ShopNavigator"
          component={ShopNavigator}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}
