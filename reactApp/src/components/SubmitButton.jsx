import styles from "./SubmitButton.module.css"

/* eslint-disable react/prop-types */
export default function SubmitButton({color, text}) {
  return (
    <input type="submit" id={styles.submitButton} style={{backgroundColor: color}} value={text.toString()}/>
  )
}
