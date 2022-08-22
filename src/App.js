import React from 'react'
import { useFormik } from 'formik';
import './App.css';

const App = () =>{
  const [bool,setBool] = useState(0);
  const formik = useFormik({
    initialValues : {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
    },

    validate,


    onSubmit : (values , {resetForm}) =>{
      if(bool){
        setBool(0);
        resetForm({values : ''});
      }
      else{
        setBool(1);
        console.log(values);
      }
    }
  
});

return(
<div className="main">
      <div className="SignUp-form">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="First Name..." name="firstname" autoComplete="off"/>
          


          <input type="text" placeholder="Last Name..." name="lastname" autoComplete="off"  />
         



          <input type="text" placeholder="Email..." name="email" autoComplete="off"  />
         



          <input type="password" placeholder="Password..." name="password" autoComplete="off" />
         


          <input type="password" placeholder="Confirm Password..." name="confirmpassword" autoComplete='off'/>
         



          <input type="submit" value="Submit" />
        </form>
      </div>
    
    </div>
  );
}



export default App;