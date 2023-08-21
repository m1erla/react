import { useFormik,Formik } from "formik"

function Signup() {
   const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: ''
    },
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
    }
   })

  return (
    <form onSubmit={formik.handleSubmit}>
                <h1>Sign Up</h1>
                <br />
                <br />
            <label htmlFor="firstName">First Name</label>
            <input 
            id= "firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input 
            id="lastName"
            name="lastName"    
            type="text" 
            onChange={formik.handleChange}
            value={formik.values.lastName}
            />
            <br />
            <br />
            <label htmlFor="email">Email Address</label>
            <input 
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            <br />
            <br />
            <button typeof="submit" >Submit </button>
    </form>
  
     
    )
}

export default Signup