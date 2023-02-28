import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store;


//
/* create store
    - configureStore (import RTK);

Provide my Store to app
     //Provider import react-redux  in app.js 
    <Provider store={store}></Provider> //   

Slice
    createSlice  (import from RTK) 
    createSlice({
        name: ''
        initialState : ,
        reducers: { //what reducer contains
            //Actions (addItems) and Reducer function (() => {})
            addItems: (state, action) => {
                state = action.payload
                //this reducer function take state and directly modify it
                //not return anything
            }
        }
    })  
    
        how to export reducer
        export const {addItem, removeItem, clearCart} = cartSlice.actions; //actions are exported by name
        export default cartSlice.reducer; //reducer are exported by default  

Put that slice into reducer 

    reducer {
        cart: cartSLice,
        user: userSlice
    }
*/ 
