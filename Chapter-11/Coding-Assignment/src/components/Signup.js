import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

const Signup = () => {
  return (
    <div className='md:w-3/6 lg:w-3/6  w-4/5 flex flex-col justify-center items-center p-3 border-2 border-gray-100 mx-auto my-20'>
    <h1 className='font-bold text-lg'>Sign Up</h1>
    <Formik
      initialValues={{fullName: '', email: '', password: '', gender: '', date: '', profession: '', socialNetworkLinks: '' }}
      validate = { values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if(!values.fullName){
            errors.fullName = 'Required';
        } else if(values.fullName.length > 10 && values.fullName.length < 2 )
        {
          errors.fullName = 'Please Enter Valid Name';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values, 'form value')
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className='flex flex-col md:w-3/6 lg:w-3/6  w-4/5'>
        {/* //Field as Input..name should be same with the initial val eg  name="email" look initialValues */}
          <Field className="p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2 placeholder-black::placeholder" name='fullName' type='text' placeholder='Fullname'/>
          <ErrorMessage className=' text-red-700 text-xs' name="fullName" component="div" />

          <Field className="p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2" type="email" name="email" placeholder='Email'/>
          <ErrorMessage className=' text-red-700 text-xs'  name="email" component="div" />

          <Field className="p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2" type="password" name="password" placeholder='Password'/>
          <ErrorMessage className=' text-red-700 text-xs'  name="password" component="div" />

          <div className='flex flex-row'>
          <Field name='gender' type='radio' value='Male'/><label for='gender' className='p-2'>Male</label>
          <Field name='gender' type='radio' value='Female'/><label for='gender' className='p-2'>Female</label>
          </div>

          <Field className="p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2" name="date" type="date"></Field>

          <Field name='profession' as='select' className='p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2'>
            <option value='IT'>IT</option>
            <option value='Backend Developer'>Backend Developer</option>
            <option value='Could Engineer'>Could Engineer</option>
            <option value='Full Stack Developer'>Full Stack Developer</option>
            <option value='Business'>Business</option>
          </Field>

          <FieldArray
             name="socialNetworkLinks"
             render={arrayHelpers => (
               <div className='w-full'>
                 {values.socialNetworkLinks.length > 0 && <h5> Add Your Social Network Links</h5>}
                 {values.socialNetworkLinks && values.socialNetworkLinks.length > 0 ? (
                   values.socialNetworkLinks.map((social, index) => (
                     <div className='w-full' key={index}>
                       <Field className="p-1 w-3/4 md:w-4/6 lg:w-4/6 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm my-2" name={`socialNetworkLinks.${index}`} />
                       <button
                         type="button" className='inline-flex justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 my-2'
                         onClick={() => arrayHelpers.remove(index)} // remove a social from the list
                       >
                         -
                       </button>
                       <button 
                         className='inline-flex justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 my-2'   
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         +
                       </button>
                     </div>
                   ))
                 ) : (
                   <button className="inline-flex justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 my-2" type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all socialNetworkLinks from the list */}
                     Add a Socail Network Links
                   </button>
                 )}
               </div>
             )}
           />
         
          <button className="inline-flex justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 my-2" type="submit" disabled={isSubmitting}>
            Submit
          </button>         
        </Form>
      )}
    </Formik>
    
  </div>
  )
}

export default Signup