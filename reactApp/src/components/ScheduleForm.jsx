import styles from "./ScheduleForm.module.css"
import ButtonNavLink from "./ButtonNavLink"
import SubmitButton from "./SubmitButton"
import ScheduleAppointment from "./ScheduleAppointment";

import { useState } from "react";


export default function ScheduleForm() {

  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[petName, setPetName] = useState("");
  const[petBreed, setPetBreed] = useState("");
  const[petType, setPetType] = useState("");
  const[date, setDate] = useState(new Date(""));
  const[time, setTime] = useState("");
  


  const handleSubmit = async(e) => {
    e.preventDefault();
    await ScheduleAppointment(email, name, petName,petBreed, petType, date, time);
  }
  


  
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.subcontainer2}>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Caretaker Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className={styles.subcontainer4}>
                <label>Caretaker Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Pet Name:</label>
                <input type="text" onChange={(e) => setPetName(e.target.value)}/>
              </div>
              <div className={styles.subcontainer4}>
                <label>Pet Breed:</label>
                <input type="text" onChange={(e) => setPetBreed(e.target.value)}/>
              </div>
            </div>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Pet Type:</label>
                <input type="text" onChange={(e) => setPetType(e.target.value)}/>
              </div>
              <div className={styles.subcontainer4}>
                <label>Appointment Date:</label>
                <input type="date" onChange={(e) => setDate(e.target.value)}/>
              </div>
            </div>
            <div className={styles.time_subcontainer}>
              <div className={styles.separate_area1}>
                <label>Appointment Time:</label>
                <input type="time" onChange={(e) => setTime(e.target.value)}/>
              </div>
            </div>
                   
          </div>
        </div>
      </div>

      <div className={styles.separate_area2}>
        <SubmitButton color="orange" text="Submit Schedule"/>
      </div>  
      <div className={styles.separate_area3}>
        <input type="button" value="Create New Schedule➕"  id={styles.new_appointment_button}/>
      </div>
      <div className={styles.separate_area4}>
        <ButtonNavLink to="/clientDashboard" id="client_dashboard_button" color="#34d1c9">View Appointments➡ </ButtonNavLink>
      </div>    
    

    </form>
  )
}
