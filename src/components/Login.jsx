import React from 'react'
import { useFormik} from 'formik';
import validationSchema from './validation';
function Login  () {
    const {handleSubmit, handleChange, handleBlur , values, errors, touched} = useFormik({
        initialValues: {
            firstName: 'Emily Jean',
            lastName: 'Stone',
            password: '',
            passwordConfirm: '',
            email: 'emmastone@gmail.com',
            gender: 'female',
            hobbies: [],
            country: "Turkiye"
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema,
    })
return(
    <div> 
         <h1>Sign Up</h1>
    
            <form onSubmit={handleSubmit}>
              
            <label htmlFor="firstName">First Name </label>
           <input 
            name='firstName'
            value={values.firstName}
            onChange={handleChange} />

           <br />
           <br />

            <label htmlFor="lastName">Last Name </label>
             <input 
             name='lastName' 
             onChange={handleChange}
             value={values.lastName} />

             <br />
             <br />

            <label htmlFor="email">Email </label>
            <input 
            name='email' 
            onChange={handleChange}
            value={values.email} 
            onBlur={handleBlur}
            />
            {errors.email && touched.email && <div className='error'>{errors.email}</div>}
            
            <br />
                <br />
           <label>Password </label>
           <input 
           name='password' 
           placeholder='password' 
           value={values.password}
           onChange={handleChange}
           onBlur={handleBlur}
           />
           {errors.password && touched.password && <div className='error'>{errors.password}</div>}
           <br />
           <br />

           <label >Password Confirm </label>
           <input 
           name='passwordConfirm' 
           value={values.passwordConfirm} 
           onChange={handleChange} 
           onBlur={handleBlur}
           />
           {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
           <br />
           <br />
            <label htmlFor="gender">Gender </label>

            <input 
            name='gender' 
            type='radio' 
            value="male"
            onChange={handleChange}
            checked={values.gender === 'male'}
            />
            <span>Male </span>
            
            <input  
            name='gender' 
            type='radio' 
            value="female"
            onChange={handleChange}
            checked={values.gender === 'female'}
            />
            
            <span>Female </span>
            <br />
                <br />
            <input 
            type="checkbox"
             name='hobbies' 
             value={"Photography"}
             onChange={handleChange}/>
             Photography
            <input 
            type="checkbox" 
            name='hobbies' 
            value={"Cinema"}
            onChange={handleChange}/>
            Cinema
             <input 
             type="checkbox" 
             name='hobbies' 
             value={"Football"}
             onChange={handleChange}/>
             Football
                <br />
                <br />
                <br />

              <select name="country" value={values.country} onChange={handleChange}>
                <option value="Turkiye">Turkiye</option>
                <option value="England">England</option>
                <option value="USA">USA</option>
              </select>
                <br />
                <br />
                <br />
            <button type="submit">Submit</button>

            <br />
                <br />
           <code> {JSON.stringify(values)}</code>
          </form>
        
    
  
    </div>
  )
}

export default Login
