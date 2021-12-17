import React from "react";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar} from 'react-native';
import ordersReducer from './store/reducers/orders';

const rootReducer = combineReducers({
  cart: cartReducer,
  order: ordersReducer
});

const store = createStore(rootReducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#472fa1' barStyle="dark-content" hidden-={false}/>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShopNavigator"
          component={ShopNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}
