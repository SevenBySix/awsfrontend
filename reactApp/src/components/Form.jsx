import "./Form.css"
import FormComponent from "./FormComponent";
import ButtonNavLink from "./ButtonNavLink";
import SubmitButton from "./SubmitButton";
import {NavLink} from "react-router-dom"

export default function Form() {
  return (
    <form>
      <div id="notification"></div>
        <FormComponent labeltext="Email:" typeOfInput = "email" name="youremail"/>
        <FormComponent labeltext="Password (at least 6 characters long):" typeOfInput="password" name="yourpassword"/>
        <div className="form-buttons">
          <ButtonNavLink to="/" text="<= Back" id="goToLoginPageButton"/>
            <SubmitButton id="submitButton1" text="submit"/>
          <ButtonNavLink to="/login" text="Next =>" id="goToLoginPageButton"/>
        </div>
      <div>
        <p>Already have an account? Click here to <NavLink to="/login">Login</NavLink></p> 
      </div>
      
    </form>
  );
}
