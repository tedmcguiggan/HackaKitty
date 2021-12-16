import React from "react";
import { FlatList, } from 'react-native';
import DATA from "../../../data/dummy-data";
import ProductItem from "../shop/ProductItem";
import { useDispatch } from "react-redux";
import * as cartActions from '../../../store/actions/cart';

function MenuList() {
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
  };

  export default MenuList;