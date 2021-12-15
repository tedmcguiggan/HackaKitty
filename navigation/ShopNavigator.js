import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, } from 'react-native';
import DATA from "../data/dummy-data";
import ProductItem from "../components/shop/ProductItem";
import { useDispatch } from "react-redux";
import * as cartActions from '../store/actions/cart';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import CartItem from '../components/shop/CartItem';

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <FlatList
    data={DATA}
    keyExtractor={item => item.id}
    renderItem={itemData => (
      <ProductItem
        title={itemData.item.title}
        price={itemData.item.price}
        onAddToCart={() => {
          dispatch(cartActions.addToCart(itemData.item));
        }}
      />
    )}
  />
  );
}

const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems;
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {}}
          />
        )}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const ProductsNavigator = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ProductsNavigator;

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  summaryText: {
    fontSize: 18
  },
  amount: {
    color: 'black'
  }
});