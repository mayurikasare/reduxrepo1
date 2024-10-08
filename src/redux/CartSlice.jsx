import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      productData: [] // Initialize productData as an empty array
    },
    reducers: {
      addToCart(state, action) {
        let userData = action.payload;
        state.productData.push(userData);
      },
  
      // Remove a single product by id
      removeSingleProduct(state, action) {
        state.productData = state.productData.filter(product => product.id !== action.payload);
      }
    }
  });
  
  // Exporting actions
  export const { addToCart, removeSingleProduct } = cartSlice.actions;
  
  // Exporting reducers
  export default cartSlice.reducer;
  