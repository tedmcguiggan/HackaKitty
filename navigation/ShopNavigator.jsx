import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../src/screens/HomeScreen/HomeScreen";
import CartScreen from "../src/screens/CartScreen/CartScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from "../src/screens/PaymentScreen/PaymentScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();

const CartStackScreen = props => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Check Out" component={CartScreen} />
      <CartStack.Screen name="Payment" component={PaymentScreen} />
    </CartStack.Navigator>
  );
}

const HomeStackScreen = props => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const ShopNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = 'restaurant'
          } else if (route.name === 'Cart') {
            iconName = 'cart'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Menu" component={HomeStackScreen}/>
        <Tab.Screen name="Cart" component={CartStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ShopNavigator;