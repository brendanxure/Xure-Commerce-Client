import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/CartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
