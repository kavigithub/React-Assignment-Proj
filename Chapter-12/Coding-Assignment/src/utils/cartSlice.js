import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { //initial value of the cart when u initialise
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            /*  console.log(state.items, 'state');
             console.log(action.payload, 'action');
             state.items.push(action.payload);
            */

            const doesItemExist = state.items.find((item) => item.id === action.payload.id);
            if (doesItemExist) {
                state.items.forEach(item => {
                    if (item.id === action.payload.id) {
                        item = { ...item, count: item.count++ }
                    }
                })
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }
        },
        removeItem: (state, action) => {
            console.log(state.items, 'state.items')
            console.log(action.payload, 'action.payload')
            const doesItemExist = state.items.find((item) => item.id === action.payload);
            if(doesItemExist && doesItemExist.count > 1) {
                state.items.forEach(item => {
                    if (item.id === action.payload) {
                        item = { ...item, count: item.count-- }
                    }
                })
            } else {
                const filteredItems = state.items.filter(item => item.id !== action.payload);
                return {...state, items: filteredItems}; 
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.cartTotalQuantity = 0;
        }
    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //actions are exported by name

export default cartSlice.reducer; //reducer are exported by default