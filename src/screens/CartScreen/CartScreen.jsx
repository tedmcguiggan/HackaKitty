import React from "react";
import { View, FlatList, StyleSheet, Text, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../../store/actions/cart';
import * as ordersActions from '../../../store/actions/orders'

const CartScreen = ({navigation}) => {
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
      return transformedCartItems.sort((a, b) =>
        a.productId > b.productId ? 1 : -1
      );
    });

    const dispatch = useDispatch();
  
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
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => {
            dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
          }}
          // onPress={() => 
          //   navigation.navigate('Payment')
          // }
          disabled={cartItems.length === 0}
        />
      </View>
    </View>
    );
  };

  export default CartScreen;

  const styles = StyleSheet.create({
    screen: {
      margin: 20
    },
    summary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
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
  