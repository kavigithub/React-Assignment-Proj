import React from "react";
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

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'; //library for Router

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
       

const AppLayout = () => {
    return (
        //react.fregment...
      <>  
        <> 
            <Header/>
            {/* <Body /> */}
            <Outlet />
            <Footer />
        </>
      </>   
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
        element: <Body />
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
        path: '/restaurant/:id', //for dynamic id
        element: <RestaurantDetails />
      }
    ]
  },
])

 
///////////////////////PROPS EG////////////////////////////
function formatDate(date) {
  return date.toLocaleDateString();
}


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const Avatar = (props) => {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

const UserInfo = (props) => {
  return (
    <div className="UserInfo">
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
          {props.user.name}
        </div> 
      </div> 
  )
}

function Comment(props) {
  return (
    <div className="Comment">
     {/*  <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <Avatar user={props.avatarUrl}/>
        {/* <div className="UserInfo-name">
          {props.author.name}
        </div> 
        />
      </div>  */}
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

///////////////////Key example
const numbers = [
  {
    id: 1,
    name: 'XYZ'
  },
  {
    id: 2,
    name: 'uiop'
  },
  {
    id: 3,
    name: 'ABC'
  }
];
const ListItems = numbers.map((item) =>
  <li key={item.id}>
    {item.name}
  </li>
);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
/* root.render(<AppLayout />); */
/* root.render(
  <Comment date={comment.date} text={comment.text} author={comment.author}/>
) */
//root.render(ListItems);