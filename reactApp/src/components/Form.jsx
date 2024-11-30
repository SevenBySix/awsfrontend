import "./Form.css"
import FormComponent from "./FormComponent";
import ButtonNavLink from "./ButtonNavLink";
import SubmitButton from "./SubmitButton";
import {NavLink} from "react-router-dom"

export default function Form() {
  return (
    <form>
      <div id="notification"></div>
      <div>
        <FormComponent labeltext="Email:" typeOfInput = "email" name="youremail"/>
      </div>
      <div>
        <FormComponent labeltext="Password:" typeOfInput="password" name="yourpassword"/>
      </div>
      <div className="form-buttons">
        <ButtonNavLink to="/" text="<= Back" id="goBackToHomePageButton"/>
        <SubmitButton id="submitButton1" text="submit"/>
        <ButtonNavLink to="/login" text="Next =>" id="goToLoginPageButton"/>
      </div>

      <div>
        <p>Already have an account? Click here to <NavLink to="/login">Login</NavLink></p> 
      </div>
      
    </form>
  );
}
