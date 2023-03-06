Ref Link: ![https://learn.namastedev.com/s/articles/63e3cd07e4b0694fa487a0e1/images/63dlb7zi0.png](https://learn.namastedev.com/s/articles/63e3cd07e4b0694fa487a0e1/images/63dlb7zi0.png)

# useContext v/s Redux

ANS: Both usecontext and redux are used to solve props drilling, a problem faced while passing props between components.

# Advantage of using Redux Toolkit over Redux.

**Abstraction and Convenience**: Redux Toolkit provides a set of abstractions and conveniences on top of regular Redux, which make it easier to work with and manage the state of your application. This includes features such as the createSlice function for creating slices of state and its associated actions and reducer, and the createStore function for creating a Redux store with pre-configured middleware and enhancers.

**Immutable updates**: Regular Redux requires you to create a new state object every time you make an update, which can become repetitive and error-prone. Redux Toolkit provides a way to update the state immutably, using its built-in createSlice function.

**Simplified Reducers:** In regular Redux, you write your own reducers, which can become complex and difficult to manage as your application grows. With Redux Toolkit, you can use the createSlice function to generate reducers for you, based on the state updates you define.

**Improved Performance:** Redux Toolkit uses advanced performance optimizations, such as memoization, lazy evaluation, and selective updates, to make your application faster and more efficient.

**Better Debugging:** Redux Toolkit provides better debugging tools, such as the ability to log and replay actions, inspect the current state of your application, and easily track the changes made to your state over time.

# Explain Dispatcher.

ANS: A dispatcher is a function that dispatches actions to the store. In Redux, actions are used to describe changes to the state, and dispatching an action is the way to trigger those changes.

```python
import { useDispatch } from "react-redux"; //how  u import useDispatch

const dispatch = useDispatch(); // How to create & use dispatcher function

//This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
const addFoodItem = (item) => {
        dispatch(addItem(item)) // returns an action payload object
    }

//This is how u call the function on UI layer
<button className="text-2xl hover:text-yellow-400" onClick={() => addFoodItem(item)}> &#8853;</button>
```

When you dispatch an action creator, it returns an action object that the reducer function uses to update the state. The dispatcher function is used to dispatch the action creator and which in turns calls the reducer function to trigger the update.

# Explain Reducer

A reducer is a pure function in Redux that takes the current state of your application and an action, and returns a new state based on that action.

```python
import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState : { //initial value of the cart when u initialise
    items: []
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
            state.items.push(action.payload);

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

}

});

export const {addItem, removeItem, clearCart} = cartSlice.actions; //actions are exported by name

export default cartSlice.reducer; //reducer are exported by default
```

# Explain slice.
In Redux Toolkit, slice is a small portion of store...eg.. user slice, cart slice, theme slice etc. It is managed by a single set of actions and reducer.

# Explain selector.
A selector is a pure function. useSelector is a hook from the react-redux library that allows you to subscribe to the state of your Redux store from a React component. The useSelector hook takes a selector function as its argument, which is used to extract data from the state tree. The component will re-render whenever the state of your Redux store changes and the derived value returned by the selector function changes.

```python
import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);
```
selector is used to read the store. whenever my store is modified  cart will automatically modify on UI level. and it will update the cart in cart component...plz check Cart.js

# Explain createSlice and the configuration it takes.
The createSlice function is used to create a store slice, a piece of the store. eg.. user slice, cart slice, theme slice etc. 

The createSlice function takes an object as an argument, which contains the following properties:

```python

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
```











