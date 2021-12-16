import { Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const PaymentScreen = ()=> {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <View>  
            <Text>{cartTotalAmount}</Text>
        </View>
      );
}

export default PaymentScreen;