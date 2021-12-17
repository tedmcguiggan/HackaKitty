import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useSelector} from 'react-redux';
import * as ordersActions from '../../../store/actions/orders';
import React from 'react';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';

const PaymentScreen = ({navigation}) => {
    const [number, onChangeNumber] = React.useState(null);
    const dispatch = useDispatch();
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

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.screen}>
            <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
            <Text style={styles.textHeaderStyle}>Choose Payment Method</Text>
            <View style={styles.buttonContainer}>
              <Button title='Cash'></Button>
              <Button title='Card Swipe'></Button>
              <Button title='Card Swipe'></Button>
              <TextInput
                style= {styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Manual Card Entry"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.charge}>
              <Button 
                disabled={cartTotalAmount === 0.00}
                onPress={()=>dispatch(ordersActions.addOrder(cartItems, cartTotalAmount)) && navigation.navigate('Check Out')} title='Charge'>
              </Button>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

export default PaymentScreen;

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 350,
      borderWidth: 1,
      padding: 10,
    },
    screen: {
      margin: 20,
      marginTop: 80
    },
    amount: {
      marginTop: 50,
      color: 'gray',
      fontSize: 56,
      textAlign: 'center'
    },
    buttonContainer: {
      alignItems: 'flex-start',
      marginTop: 30,
      paddingLeft: 20
    },
    textHeaderStyle: {
      fontSize: 18,
      marginTop: 20,
      textAlign: 'center'
    },
    charge: {
      alignItems: 'center',
      marginTop: 180,
      padding: 10,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    }
  });