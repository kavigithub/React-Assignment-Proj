# What is the difference between Named export, Default Export and * Export?
ANS : 
Named Export when you export your React “function components” with its names. 
eg export const Title = (props) => { }; and when you export like this 
   import {Title} from './component/Title'  you have to import like this 

Default export
const Title = (props) => { }; //React “function components” call without its names
export default Title; //Call by defult you can call defaylt only one Conponrnt
 import Title from './component/Title' you have to import like this in case of default

* as export...
i guess this should be import... 
* as import (will call all your export named react component)
eg
export const Title = (props) => { };  // react “function components” 
export const Search = (props) => { }; //  react “function components”
import * as Obj from  './component/Title' you have to import like

# What is the importance of Config.js file?
ANS:
Will configure your static variable at the same file so you won't keep searching the var which you need to use so many places in component.

# What are React Hooks?
ANS:
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components.

# Why do we need useState Hook?
ANS:
The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

Let's take an example, suppose we want to create a counter button that increments itself by one.

Without useState

In the below code if one tries to increment the counter by clicking on the button the count will not change because the react rendered the component only once and since there is no state change it won't get re-rendered, the count will remain at 0 on-screen.
By console.log one can see that the count is incrementing on click.
```python
import React from "react";

export default function MyComponent() {
  let count = 0;
  const setCount = () => {
  count++;
  console.log(count);
   }
  return (
    <div>
      <label>{count}</label>
      <hr/>
      <label>Counter</label>
      <button onClick = {setCount}>{count}</button>
    </div>
  );
}
```

With useState

In the below code if one tries to increment the counter by clicking on the button the count will change because the react rendered the component once when it got mounted and since there is state change it will get re-rendered, the count will get incremented on-screen.
```python
import React, { useState } from "react";

export default function MyComponent() {
const[count, setCount] = useState(0);

return (
    <div>
      <label>{count}</label>
      <hr/>
      <label>Counter</label>
      <button onClick = {() => {
        setCount(count + 1);
      }}>{count}</button>
    </div>
  );
}
```

One can always directly manipulate the DOM and increment the counter on-screen as well, but then there is no point in using react.

# Stateful vs. Stateless Components
Components in React can be stateful or stateless.

A stateful component declares and manages local state in it.
A stateless component is a pure function that doesn't have a local state and side-effects to manage.
A pure function is a function without any side-effects. This means that a function always returns the same output for the same input.

If we take out the stateful and side-effects logic from a functional component, we have a stateless component. Also, the stateful and side-effects logic can be reusable elsewhere in the app. So it makes sense to isolate them from a component as much as possible.

what is this stateful logic? It can be anything that needs to declare and manage a state variable locally.

For example, the logic to fetch data and manage the data in a local variable is stateful. We may also want to reuse the fetching logic in multiple components.

React provides a bunch of standard in-built hooks:

useState: To manage states. Returns a stateful value and an updater function to update it.
useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
useContext: To return the current value for a context.
useReducer: A useState alternative to help with complex state management.
useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
useMemo: It returns a memoized value that helps in performance optimizations.
useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
useDebugValue: Helps to display a label in React DevTools for custom hooks.

# RefLinks
<ul>
<li>https://reactjs.org/docs/hooks-state.html</li>
<li>https://www.w3schools.com/react/react_usestate.asp#:~:text=The%20useState%20Hook%20can%20be,Hooks%20to%20track%20individual%20values.</li>
<li>Code Link - https://bitbucket.org/namastedev/namaste-react-live/src/master/</li>
<li>https://www.freecodecamp.org/news/react-hooks-fundamentals/#:~:text=React%20Hooks%20are%20simple%20JavaScript,updater%20function%20to%20update%20it.</li>
</ul>