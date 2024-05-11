import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Redux uses immer library to allow us to directly mutate the state BTS
      //mutating the state
      state.cartItems.push(action.payload);
    },
    removeItem: (state) => {
      state.cartItems = state.cartItems.pop();
    },
    clearCart: (state) => {
      // RTK (redux toolkit) says either Mutate the exisiting state or return a new state
      // return {items:[]} this new [] will be replaced with originalState={cartItems:[]}

      
      // state.cartItems=[];
      // or state.cartItems.length=0 //this will empty the array state=[]
      return { cartItems: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
