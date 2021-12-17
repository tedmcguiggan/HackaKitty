import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';

const OrderHistoryScreen = ()=> {
    const orders = useSelector(state => state.order.orders);

    return (
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
          />
        )}
      />
    );
}

export default OrderHistoryScreen;