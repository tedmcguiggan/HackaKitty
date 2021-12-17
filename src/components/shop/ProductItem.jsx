import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';


const ProductItem = props => {
  return (
    <View style={styles.product}>
      <View style={styles.actions}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <Button
          title="Add To Cart"
          onPress={props.onAddToCart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 80,
    margin: 20
  },
  title: {
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontSize: 14,
    color: 'black'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 20
  }
});

export default ProductItem;