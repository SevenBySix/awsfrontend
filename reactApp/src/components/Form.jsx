import styles from "./Form.module.css"
import ButtonNavLink from "./ButtonNavLink";
import SubmitButton from "./SubmitButton";
import LoginNavLink from "./LoginNavLink";

import { useState } from "react";
import axios from "axios";




// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Form({forwardButtonPath, backButtonPath}) {

  // useState hook in practice.  youremail and yourpassword are variables, 
  // and setYourEmail and setYourPassword are functions.  The useState for each of them is blank in the input fields.
  const [youremail, setYourEmail] = useState("");
  const [yourpassword, setYourPassword] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  
  // button colors
  const backButtonColor = "red";
  const nextButtonColor = "green";
  const submitButtonColor = "orange";
 


  // function that handles the submission of the user's account data (email and password)
  const handleSubmit = async (event) => {
    event.preventDefault();
    //alert(`The name you entered was: ${youremail}`);

    try {
      // Clear any previous error
      setError(null);
      setResult(null);

      // json data

      const registration_info = JSON.stringify({"email": youremail, "password": yourpassword});

     

      console.log(registration_info);

      // Send the query to the backend
      const response = await axios.post("https://54.158.247.54:5000/clientAuth/register", registration_info);

      // Set the result in the state to display it
      setResult(response.data);
    } catch (err) {
      // Handle error responses from the server
      if (err.response) {
        // Server responded with a status code out of the 2xx range
        setError(`Error: ${err.response.data.message || 'Something went wrong with the query'}`);
      } else if (err.request) {
        // Request was made, but no response was received
        setError('No response received from the server.');
      } else {
        // Something happened in setting up the request
        setError(`Error: ${err.message}`);
      }
    }
    

    
    
  }

  return (
    <form onSubmit={handleSubmit} >
        <div className={styles.myform_container}>
          <div className={styles.container2}>
            <div className={styles.container_component}>
              <label>Email:</label>
              <input type="email" value={youremail} onChange={(e) => setYourEmail(e.target.value)}/>
            </div>
            <div className={styles.container_component}>
              <label>Password:</label>
              <input type="password" value={yourpassword} maxLength="12" onChange={(e) => setYourPassword(e.target.value)}/>
            </div>
          </div>

          <div className={styles.formButtons}>
            <ButtonNavLink to={backButtonPath} id={styles.goBackToHomePageButton} color={backButtonColor}>⬅ Back</ButtonNavLink>
            <SubmitButton text="submit" id={styles.submitButton1} color={submitButtonColor} />
            <ButtonNavLink to={forwardButtonPath} id={styles.goToLoginPageButton} color={nextButtonColor}>Next ➡ </ButtonNavLink>
          </div>
        
        </div>

       
        
        <LoginNavLink/>

      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ color: 'red', textAlign: "center" }}>
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}
      
    </form>
  );
}
