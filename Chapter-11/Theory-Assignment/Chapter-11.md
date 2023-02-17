# What is Props Drilling?
Ans: Prop drilling is the act of passing props through multiple layers of components.
 If you have data in Parent compoent and you want to access it into your child component or in your grand child component, then you need to pass it as props to your child component and that will pass to its child comp (passing data frim 5 to 10 comp below layer is not good way to handle data) and so on...the chaining of passing props from parent to child, from child to its child is called Props Drilling. To Handle this you can create custome hook or u can create context and useContext hook. Please check  Header.js
Ref Link: https://www.educative.io/answers/what-is-prop-drilling-in-react

# What is Lifting the State Up?
Ans. Insted of child comp. control all the state by itself, let parent will control all state.
eg. Child component has its own state, they can control their own state, not control their sibling state. sometime single component state needs to be shared with its siblings comp. So we need to give control ot child's parent. So parent will handle all child state. This concept is called lifting state up. It is of great use to maintain data consistency in our react applications.

Many times, multiple components must reflect the same changing data. And if the data is not in sync between the "parent and children components" or "cousin components", it is recommended to lift the shared state up to the closest common ancestor. If we want to perform some type of task that requires a state management between multiple children , we can do so by sate lifting to their parent.

# What is Context Provider and Context Consument?
Ans. First understand what is context, when u need data accross all you app, you have to store it in central space, for that react gave us the central place is known as Context.
With the help of CreateContext() we create context and to use this context in respective comp by using useContext(yourContext name pass in it), with the help of useContext we can stop props drilling.

**State and Props** --> are tide to component
**Context** --> r maintain seperate from comp. It is not specific to any comp. Assume context is 'useState' for your whole app

**Context Provider** will overwrite the value with dynamic data, provider is used to provide access to a context between multiple components of the application. We can provide the access to the context or the data layer to the whole application to the and its subcomponents.

For example: plz check UserContext.js in utils folder to check how to createContext , and SearchFood RestaurentCard ...to consume or use context in functional comp

```python
import UserContext from "./utils/UserContext";
 const [user, setUser] = useState({
    name: 'Kavita Ghatge',
    email: 'support@namastedev.com'
   });

   useEffect(() => {
      //authenticate user

      //set the above mentioned user
   }, [])

    return (
        //react.fregment...
      <UserContext.Provider value={{
        newUser: user,
        setUser: setUser
      }}>  
        <Header/>
        <Outlet />
        <Footer />
      </UserContext.Provider>   
    )
```
In the code above , we are providing the access of UserContext to <Head /> <Outlet /> and <Footer /> component

**Context Consumer** is used to consume the context data , provided by react context. We can do this using useContext hook for functional components and Context.Consumer in clasees based components.

For example:

In Class based components, we can use the Context and use the consumer.
```python
<UserContext.Consumer>
  {({ userNew }) => <h1>{userNew.name}</h1>}
</UserContext.Consumer>
```
In Functional components we can use useContext hook to consume the context.
```python

import UserContext from "../utils/UserContext";
import { useContext } from "react";

const { userNew } = useContext(UserContext); //you need to extract user so we used {}

//jsx
 <li className="p-2 text-white">{isOnline ? (`Welcome, ${newUser.name}`) : 'Sleepy User'}</li>

```
# If you don't pass a value to the provider does it take the default value?
Yes, Whatever you mentioned the default value while creating context, will apply as default value.

If we do not override the values of context it takes the default values form the context , when we initialise the context.



**One line about this chapter : If you want to : 1) pass props from parent to child, grandchild(2 levels), use Props Drilling, 2) pass props from child to parent or its siblings use Lifting State Up and 3) make data available throughout the app, then use Context Provider**

# Ref LInk:
https://felixgerschau.com/react-component-composition/#:~:text=Conclusion-,What%20is%20component%20composition%20in%20React%3F,new%20components%20with%20other%20components.