import "./Form.css"
import ButtonNavLink from "./ButtonNavLink";
import SubmitButton from "./SubmitButton";
import {NavLink} from "react-router-dom"
import { useState } from "react";

export default function Form() {

  const [youremail, setYourEmail] = useState("");
  const [yourpassword, setYourPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${youremail}`)
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="container2">
            <div className="container_component">
              <label>Email:</label>
              <input type="email" value={youremail} onChange={(e) => setYourEmail(e.target.value)}/>
            </div>
            <div className="container_component">
              <label>Password:</label>
              <input type="password" value={yourpassword} maxLength="8" onChange={(e) => setYourPassword(e.target.value)}/>
            </div>
          </div>

          <div className="form-buttons">
            <ButtonNavLink to="/" text="<= Back" id="goBackToHomePageButton"/>
            <SubmitButton id="submitButton1" text="submit"/>
            <ButtonNavLink to="/login" text="Next =>" id="goToLoginPageButton"/>
          </div>
        
        </div>
  
      <div id="bottomArea">
        <p>Already have an account? Click here to <NavLink to="/login" id="navlink">Login</NavLink></p> 
      </div>
      
    </form>
  );
}
