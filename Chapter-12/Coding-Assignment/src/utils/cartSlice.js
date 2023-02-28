import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState : { //initial value of the cart when u initialise
        items: []
    },
   reducers: { //reduce call when discpatch an action
        //what action inside my cart? addItem
        //this is the place where i tell, what action will call what reducer function
        //reducer contains mapping between action and reducer function

        // () => {} : this is reducer function
        //addItem : is the action, when that reducer function is called 
       
        //how to modify store ...modify state
        //reducer function takes 2 arg state and action
        //state is current value
        //action.payload, this is the place where will get the items to add in cart ..data which is comming in
        addItem : (state, action) => {
            state.items.push(action.payload);
            //don't return anything 
            //this reducer function take state and directly modify it
        },
        removeItem: (state, action) => {
            console.log(state.items, 'state.items')
            console.log(action.payload, 'action.payload')
            const index =  state.items.indexOf(action.payload);
            if (index) {
                state.items.splice(index, 1);
            }       
        },
        clearCart: (state) => {
            state.items = [];
        }
   }
    
});

export const {addItem, removeItem, clearCart} = cartSlice.actions; //actions are exported by name

export default cartSlice.reducer; //reducer are exported by default