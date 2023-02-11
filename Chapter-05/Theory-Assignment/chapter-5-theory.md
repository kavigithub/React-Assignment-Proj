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

# RefLinks
<ul>
<li>https://reactjs.org/docs/hooks-state.html</li>
<li>https://www.w3schools.com/react/react_usestate.asp#:~:text=The%20useState%20Hook%20can%20be,Hooks%20to%20track%20individual%20values.</li>
<li>Code Link - https://bitbucket.org/namastedev/namaste-react-live/src/master/</li>
</ul>