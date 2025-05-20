import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (element) => element.card.info.id == action.payload.card.info.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].noOfItems++;
      } else {
        action.payload.noOfItems++;
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      if (action.payload.noOfItems == 1) {
        let newItemList = state.items.filter(
          (item) => item.card.info.id !== action.payload.card.info.id
        );
        // newItemList = newItemList.map((element) => ({
        //   ...element,
        //   noOfItems: (element.noOfItems = 0), // or any default value
        // }));
        
        state.items = [...newItemList];
      } else {
        const itemIndex = state.items.findIndex(
          (element) => element.card.info.id == action.payload.card.info.id
        );
        state.items[itemIndex].noOfItems--;
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
