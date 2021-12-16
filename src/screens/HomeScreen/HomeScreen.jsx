import React from "react";
import { FlatList, View} from 'react-native';
import DATA from "../../../data/dummy-data";
import ProductItem from '../../components/shop/ProductItem'
import { useDispatch } from "react-redux";
import * as cartActions from '../../../store/actions/cart';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>    
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
    </View>
  );
}

export default HomeScreen;

