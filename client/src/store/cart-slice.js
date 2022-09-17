import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalQantity: 0,
  totalPrice: 0
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const newProduct = {
        _id: action.payload.product._id,
        title: action.payload.product.title,
        description: action.payload.product.description,
        image: action.payload.product.image,
        price: action.payload.product.price,
        quantity: action.payload.quantity,
        size: action.payload.size
      };
      let added = false;

      for (let oldProduct of state.products) {
        // Check if the product already added before
        if (oldProduct._id === newProduct._id) {
          // If added before check if the same size 
          if (oldProduct.size === newProduct.size) {
            // If the same size increase the quantity
            oldProduct.quantity += newProduct.quantity;
            added = true;
            break;
          }
        }
      }
      // If not added before or not the same size push it as a new product 
      if (!added) {
        state.products.push(newProduct);
      }
      state.totalQantity += newProduct.quantity;
      state.totalPrice += newProduct.price * newProduct.quantity;
    },
  }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice;