import styles from "./InputField.module.css"

export default function InputField(dataType,  labelText) {
  return (
    <div className={styles.container}>
      <label>{labelText}</label>
      <input type={dataType} />
    </div>
  )
}
