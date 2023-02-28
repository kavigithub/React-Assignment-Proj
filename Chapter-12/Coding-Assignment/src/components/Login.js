// Render Prop
import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Login = () => {
    const {newUser, setUser} = useContext(UserContext);

    function getVal(param) {
      console.log(param, '-----' ,newUser);
      setUser({
         ...newUser,  
         name: param
        });
   }

  /*  useEffect(() => {
    checkUerLogin()
   }, [newUser])

   async function checkUerLogin(param){
    const isLogged = await setUser({
      ...newUser,  
      isAuthenticated: param
     });
   } */

  return (
    <>
   {/*  {console.log(newUser.name)}
<input type="text" className='p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm mx-2' value={newUser.name} onChange={(e) => getVal(e.target.value)}></input> */}

        <div className='w-3/6 flex flex-col justify-center items-center p-3 border-2 border-gray-100 mx-auto my-20'>
    <Formik
      initialValues={{userName: '', email: '', password: '' }}
      validate = { values => {
        const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if(!values.userName){
              errors.userName = 'Required';
          } else if(values.userName.length > 10 && values.userName.length < 2 )
          {
            errors.userName = 'Please Enter Valid Name';
          }
          return errors;
      }}
     
      onSubmit={ (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
           //getVal(values.userName); 
           setSubmitting(true);
           setUser({
            //...newUser,
            name: values.userName,
            isAuthenticated: true
           });
           console.log(values.userName, 'form value');
           //setUser(values.userName)
           //window.location.href = '/';
           setSubmitting(false);
           resetForm({
            values: ''
           })
          }, 1000)  

          //clearTimeout(myTimeout);

      }}
    >

{/* setTimeout(() => {
           setUser({
            ...newUser,
            name: 'abvc'
           });
           console.log(values.userName, 'form value');
           //setUser(values.userName)
           setSubmitting(false);
           resetForm({
              values: ''
           })
       }, 1000) */}
    
      {({ isSubmitting }) => (
        <Form className='flex flex-col w-3/6'>
        {/* //Field as Input..name should be same with the initial val eg  name="email" look initialValues */}
          <Field className="p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2 placeholder-black::placeholder" name='userName' type='text' placeholder='UserName'/>
          <ErrorMessage  className=' text-red-700 text-xs' name='userName' component='div'></ErrorMessage>

          <Field className="p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2" type="email" name="email" placeholder='Email'/>
          <ErrorMessage  className=' text-red-700 text-xs' name="email" component="div" />

          <Field className="p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2" type="password" name="password" placeholder='Password'/>
          <ErrorMessage  className=' text-red-700 text-xs' name="password" component="div" />
          <button className="inline-flex justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 my-2" type="submit" disabled={isSubmitting}>
            Submit
          </button>         
        </Form>
      )}
    </Formik>
     {/*     {console.log(newUser.isAuthenticated , 'newUser.isAuthenticated')}
        { newUser.isAuthenticated === true ? <Navigate to="/" replace={true} /> : newUser.isAuthenticated = false} */}

        <p className='flex justify-center'>OR</p>

       <button className="justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 my-2">
       <Link  to='/signup'>Go to Sign Up</Link> 
        </button>
    </div>
    </>
  )
  
};

export default Login;