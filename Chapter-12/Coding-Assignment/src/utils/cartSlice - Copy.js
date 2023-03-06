import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState : { //initial value of the cart when u initialise
        items: [],
        cartTotalAmount: 0,
        cartTotalQuantity: 0,
        cartItemCount: 0
    },
   reducers: { //reducer call when discpatch an action
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
           /*  console.log(state.items, 'state');
            console.log(action.payload, 'action');
            state.items.push(action.payload);
 */


                const doesItemExist = state.items.find((item) => item.id === action.payload.id);
                if(doesItemExist){
                    state.items.forEach(item => {
                        if (item.id === action.payload.id) {
                            item = { ...item, count: item.count++ }
                        }
                    })
                } else {
                    state.items.push({ ...action.payload, count: 1})
                }

            /* /* console.log(action.payload.id);
            console.log(state.items[action.payload.id]); */
            //don't return anything 
            //this reducer function take state and directly modify it
            //console.log(action.payload.id === state.items[action.payload.id]);

           // const item = state.items[action.payload.id]; //this is undefined
           // console.log(item, 'item') 

            /* if(action.payload.id === state.items[action.payload.id]) {
                action.payload.quantity += 1; 
            } else {
                action.payload.quantity = 1;
            } */
            


            /*  const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
              );

              if(itemIndex >= 0){
                state.items[itemIndex].quantity += 1;
                console.log(state.items[itemIndex].quantity, 'quantity');
              } else {
                const tempProduct = {
                    ...action.payload,
                    quantity: 1 
                   };
                state.items.push(tempProduct);
                console.log(tempProduct, 'tempProduct');   
              }

              console.log(itemIndex, 'itemIndex'); */

              /* const item = state.items[action.payload.id];
      const quantity =
        item && item.hasOwnProperty("quantity")
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, quantity };

              state.cartTotalQuantity = state.cartTotalQuantity + 1; */

             /*  if (state.items[action.payload.id]) {
                  state.items[action.payload.id].itemsQuantityInCart =
                  state.items[action.payload.id].itemsQuantityInCart + 1;
              } else {
                action.payload.itemsQuantityInCart = 1;
                state.items[action.payload.id] = action.payload;
              } */
        },
        removeItem: (state, action) => {
            console.log(state.items, 'state.items')
            console.log(action.payload, 'action.payload')
           /*  const index =  state.items.indexOf(action.payload);
            if (index) {
                state.items.splice(index, 1);
            }  */    
            
            /* const itemIndex = state.items.findIndex((element) => element.id === action.payload.id);

            if(state.items[itemIndex].quantity > 0){
                state.items[itemIndex].quantity -= 1;
                state.cartTotalQuantity -= 1;
            } else {
                return false;
            } */

            let getDeleteItem =  state.items.find(action.payload);
            if (!getDeleteItem) return;
            if(getDeleteItem.quantity > 1){
                getDeleteItem.quantity -= 1;   
                state.cartTotalQuantity--;  
            } else {
                state.cartTotalQuantity--;  
                delete state.items[action.payload];
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.cartTotalQuantity = 0;
        }
   }
    
});

export const {addItem, removeItem, clearCart} = cartSlice.actions; //actions are exported by name

export default cartSlice.reducer; //reducer are exported by default