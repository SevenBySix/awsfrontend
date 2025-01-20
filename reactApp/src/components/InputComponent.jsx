import styles from "InputComponent.module.css"

export default function InputComponent(dataType, labelText,executionFunction) {
  return (
    <div className={styles.container_component}>
      <label>{labelText}</label>
      <div>
        <input type={dataType} className="input" onChange={executionFunction} required/>
      </div>
    </div>
    
  )
}
