import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header"; // this is know as default import
 /* import {Title} from "./components/Title"  // this is know as Name import as u import function name */
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import Login from './components/Login';
import { FoodItemSkeleton } from "./components/FoodItemSkeleton";
import UserContext from "./utils/UserContext";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'; //library for Router
import Signup from "./components/Signup";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// comment 
// Ctrl + K, then press Ctrl + C if you’re using Windows || Ctrl + / 
// uncomment 
// Ctrl + K then Ctrl + U if you’re on Windows

// Headers
            //    -Logo
            //    -NavBar
            //    -Cart
            // Body
            //    -Search Bar
            //    -RestaurentList
            //     -RestaurentCard (many card)
            //      -Image
            //      -Rating
            //      -Name
            //      -Cusine  
            // Footer  
            //    -Links
            //    -Copyright

//Lazy Load 
const InstaMart = lazy(() => import("./components/InstaMart"));
//upon on Demand loading => upon render => suspense loading

const AppLayout = () => {
   const [user, setUser] = useState({
    name: '',
    email: '',
    isAuthenticated: false
   });

   useEffect(() => {
      //authenticate user

      //set the above mentioned user
   }, [])

    return (
      <Provider store={store}>
          <UserContext.Provider value={{
            newUser: user,
            setUser: setUser
          }}>  
            <Header/>
            {/* <Body /> */}
            <div className="overflow-auto mb-20">
              <Outlet/>
            </div>
            <Footer />
          </UserContext.Provider>  
      </Provider>

    )
}

/////////////////////////Configration of App Router//////////////////////////////
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body user={{
          name: 'Kavitas Kitchen',
          site: 'Namaste React'
        }}/>
      },
      {
        path: '/about', // '/' means from the root
        element: <About />,
        children: [
          {
            path: 'profile', //if you add '/' in front of profile will consider localhost:1234/profile
            element: <Profile />
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<FoodItemSkeleton />}>
            <InstaMart />
          </Suspense>
        )
      },
      {
        path : '/login',
        element: <Login />
      },
      {
        path: '/restaurant/:id', //for dynamic id
        element: <RestaurantDetails />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
