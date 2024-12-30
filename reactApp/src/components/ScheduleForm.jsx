import styles from "./ScheduleForm.module.css"
import SubmitButton from "./SubmitButton"


export default function ScheduleForm() {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.subcontainer2}>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Caretaker Email:</label>
                <input type="email"/>
              </div>
              <div className={styles.subcontainer4}>
                <label>Caretaker Name:</label>
                <input type="text"/>
              </div>
            </div>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Pet Name:</label>
                <input type="text"/>
              </div>
              <div className={styles.subcontainer4}>
                <label>Pet Breed:</label>
                <input type="text"/>
              </div>
            </div>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Pet Type:</label>
                <input type="text"/>
              </div>
              <div className={styles.subcontainer4}>
                <label>Appointment Date:</label>
                <input type="date"/>
              </div>
            </div>
            <div className={styles.time_subcontainer}>
              <div className={styles.separate_area1}>
                <label>Appointment Time:</label>
                <input type="time"/>
              </div>
            </div>
            <div className={styles.subcontainer3}>
              <div className={styles.separate_area2}>
                <SubmitButton color="red" text="Submit Appointment Schedule"/>
              </div>
            </div>
          
             
           
            
          </div>
        </div>
      </div>
        
     
  
    </form>
  )
}
