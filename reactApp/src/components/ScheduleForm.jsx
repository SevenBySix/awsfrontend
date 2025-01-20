import styles from "./ScheduleForm.module.css"
import ButtonNavLink from "./ButtonNavLink"
import SubmitButton from "./SubmitButton"
import ScheduleAppointment from "./ScheduleAppointment";


import { useState } from "react";


export default function ScheduleForm() {

  const[email, setEmail] = useState("");
  const[clientName, setClientName] = useState("");
  const[petName, setPetName] = useState("");
  const[petBreed, setPetBreed] = useState("");
  const[petType, setPetType] = useState("Dog");
  const[date, setDate] = useState("");
  const[time, setTime] = useState("");
  
    // This function is for the dropdown menu list of pet types.
    

  const handleSubmit = async(e) => {
    e.preventDefault();
    await ScheduleAppointment(email, petName,petBreed, petType, clientName, date, time);
    console.log(email, petName, petName, petBreed,  petType, clientName, date, time);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.subcontainer2}>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Caretaker Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className={styles.subcontainer4}>
                <label>Caretaker Name:</label>
                <input type="text" onChange={(e) => setClientName(e.target.value)} />
              </div>
            </div>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Pet Name:</label>
                <input type="text" onChange={(e) => setPetName(e.target.value)} />
              </div>
              <div className={styles.subcontainer4}>
                <label>Pet Type:</label>
                <div>
                  <select id="selectionBox" onChange={(e) => setPetType(e.target.value)} >
                    <option key="1" value="Dog">Dog</option>
                    <option key="2" value="Cat">Cat</option>
                    <option key="3" value="Bird">Bird</option>
                    <option key="4" value="Lizard">Lizard</option>
                    <option key="5" value="Snake">Snake</option>
                    <option key="6" value="Mouse">Mouse</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.subcontainer3}>
              <div className={styles.subcontainer4}>
                <label>Pet Breed:</label>
                <input type="text" onChange={(e) => setPetBreed(e.target.value)} />
              </div>
              <div className={styles.subcontainer4}>
                <label>Appointment Date:</label>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
            <div className={styles.time_subcontainer}>
              <div className={styles.separate_area1}>
                <label>Appointment Time:</label>
                <input type="time" onChange={(e) => setTime(e.target.value)}required/>
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
