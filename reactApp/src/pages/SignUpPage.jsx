import Form from "../components/Form"
import styles from "./SignUpPage.module.css"

export default function SignUpPage() {

  return(
    
    <div className={styles.signupcontainer}>
      <div id={styles.header}><h1>Sign Up</h1></div>
      <Form backButtonPath="/" forwardButtonPath="/login"/>
    </div>

  )
   
}
