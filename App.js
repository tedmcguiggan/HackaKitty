import React, { useState } from "react";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );

}
