import styles from "./Form.module.css"
import ButtonNavLink from "./ButtonNavLink";
import SubmitButton from "./SubmitButton";
import LoginNavLink from "./LoginNavLink";
import LoginOwner from "./LoginOwner";
import registerOwner from "./RegisterOwner";

import { useState } from "react";
import { useLocation } from "react-router-dom";




// This is the form component that is reusable by other web page components in this web application
// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Form({forwardButtonPath, backButtonPath}) {

  // useState hook in practice.  youremail and yourpassword are variables, 
  // and setYourEmail and setYourPassword are functions.  The useState for each of them is blank in the input fields.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  // button colors
  const backButtonColor = "red";
  const nextButtonColor = "green";
  const submitButtonColor = "orange";

  // page location
  const pageLocation = useLocation();

  // conditions for the navigation links that will allow the user to go from one page to another based on the location
  // of the page in this web application's file directory
  const condition =  pageLocation.pathname == "/signup";
  const condition2 =  pageLocation.pathname == "/login";
 


  // function that handles the submission of the user's account data (email and password)
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerOwner(email, password);
  };
  
  
  const handleSubmit2 = async(e) => {
    e.preventDefault();
    await LoginOwner(email, password);
  }
  
  

  return (
    <form onSubmit={condition ? handleSubmit : handleSubmit2} >
        <div className={styles.myform_container}>
          <div className={styles.container2}>
            <div className={styles.container_component}>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className={styles.container_component}>
              <label>Password:</label>
              <input type="password" value={password} maxLength="12" onChange={(e) => setPassword(e.target.value)} required/>
            </div>
          </div>

          <div className={styles.formButtons}>
            <ButtonNavLink to={backButtonPath} id={styles.goBackToHomePageButton} color={backButtonColor}>⬅ Back</ButtonNavLink>
            <SubmitButton text="submit" id={styles.submitButton1} color={submitButtonColor} />
            {condition2 && <ButtonNavLink to={forwardButtonPath} id={styles.goToLoginPageButton} color={nextButtonColor}>Next ➡ </ButtonNavLink>}
          </div>
        
        </div>

       
        
        <LoginNavLink/>

 
    </form>
  );
}
