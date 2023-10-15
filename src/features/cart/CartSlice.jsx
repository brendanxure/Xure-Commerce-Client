import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0

}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addProduct: (state, action) => {
          state.quantity += 1
          state.products.push(action.payload)
          state.total += action.payload.price * action.payload.quantity
      }
  }
});

export const allProduct = state => state.cart

export const {addProduct} = CartSlice.actions

export default CartSlice.reducer