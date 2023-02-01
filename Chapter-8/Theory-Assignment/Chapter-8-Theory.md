# 1. How do you create Nested Routes react-router-dom cofiguration
Ans.
You have to import
```python
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'; //library for Router

createBrowserRouter([{in Obj define path & childern} in array list of path])
const appRouter = createBrowserRouter([ //will help you to create browser route configration...[] in it
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />, //this will tell us what are the error type
    children: [
      {
        path: '/about', // '/' means from the root
        element: <About />,
        children: [ //this is the nested child of about component
          {
            path: 'profile', //if you add '/' in front of profile will consider localhost:1234/profile
            element: <Profile />
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact />
      }
     
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
```

RouterProvider: is named component. Whenver root is render it iwll render according to this COnfig

In JSX you have to call like this
```python
const AppLayout = () => {
    return (
        //react.fregment...
      <>  
        <Header/>
        {/* <Body /> */}
        <Outlet /> //Outlet Comp is keep change the middle portion according to Configration of all child Route
        <Footer />
      </>   
    )
}
```

# 2. Read abt createHashRouter, createMemoryRouter from React Router docs.
ANS. Reading Pending.....

# 3. What is the order of life cycle method calls in Class Based Components
ANS. 
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.The three phases are: Mounting, Updating, and Unmounting.

A component "mounts" when it renders for the first time. Mounting means putting elements into the DOM.
This is when mounting lifecycle methods get called. When a component mounts, it automatically calls these three methods, in the order of:
1) constructor()
2) render()
3) componentDidUpdate()

1)The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values. The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

2) The render() method is required and will always be called, the others are optional and will be called if you define them. The render() method is required, and is the method that actually outputs the HTML to the DOM.

3)componentDidMount() method is called after the component first render. Especially for API call

4) componentDidUpdate() method is called with the second render...there is a change in the component's state or props... every time this method is called..a component updates every time that it renders.

5) componentWillUnmount() method is called when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser or change the page or link. componentWillUnmount() is used to do any necessary cleanup (canceling any timers or intervals, for example) before the component disappears.

# 4. Why do we use componentDidMount?
ANS.
To avoid unnecessary re-rendering and code complexity, the API should be called after render(), i.e. in componentDidMount(). All the AJAX requests and the DOM or state updation should be coded in the componentDidMount() method block. We can also set up all the major subscriptions here but to avoid any performance issues, always remember to unsubscribe them in the componentWillUnmount() method.

# 5. Why do we use componentWillUnmount? Show with example
ANS.
componentWillUnmount() method is called when the component is removed from the DOM. If the user navigates to a different website or closes their web browser or change the page or go to another link. componentWillUnmount() is used to do any necessary cleanup (canceling any timers or intervals, for example) before the component disappears.

For example, in Repo class, during componentDidMount() a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realise and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting Repo component.

# 6. (Research) Why do we use super(props) in constructor?
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.

A component that extends React.Component must call the super() constructor in the derived class since it’s required to access this context inside the derived class constructor.

When you try to use props passed on parent to child component in child component using this.props.name, it will still work without super(props). Only super() is also enought for accessing props in render method.

The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

# 7. (Research) Why can't we have the callback function of useEffect async?
useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as async, it will return a promise which is not expected. Using an async function here will cause a bug as the cleanup function will never get called.

Solution to this is not making the callback function async but created another async function inside callback function of useEffect()











