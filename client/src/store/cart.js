import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {

    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;