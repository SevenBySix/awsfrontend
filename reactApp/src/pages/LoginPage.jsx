import Form from "../components/Form"
import styles from "./LoginPage.module.css"

export default function LoginPage() {

  return(
    <div className={styles.mycontainer}>
      <div id={styles.header}><h1>Login Page</h1></div>
      <Form backButtonPath="/signup" forwardButtonPath="/scheduling"/>
    </div>

  )
   
}
