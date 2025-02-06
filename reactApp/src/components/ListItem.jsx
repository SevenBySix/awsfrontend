/* eslint-disable react/prop-types */
import styles from "./ListItem.module.css"

export default function ListItem({item}) {
  return (
    <li className={styles.listItem}>
      <div> 
        <span className={styles.petName}>Pet Name:</span> {item.patientName} 
      </div>
      <div>
        <span className={styles.time}>Time:</span> {item.time}   
      </div>

      <div> 
        <span className={styles.date}> Date: </span>{item.date} ❌ 
      </div>
    
    </li>
  )
}
