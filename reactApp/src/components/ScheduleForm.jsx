import styles from "./ScheduleForm.module.css"
import ButtonNavLink from "./ButtonNavLink"
import SubmitButton from "./SubmitButton"
import ScheduleAppointment from "./ScheduleAppointment";



import { useState } from "react";

export default function ScheduleForm() {

  const[email, setEmail] = useState("");
  // variable to keep track of the email so it can be exported.
 

  const[clientName, setClientName] = useState("");
  const[petName, setPetName] = useState("");
  const[petBreed, setPetBreed] = useState("");
  const[petType, setPetType] = useState("Dog");
  const[date, setDate] = useState("");
  const[time, setTime] = useState("");
  
    // This function is for the dropdown menu list of pet types.
    
  // This function submits the data to the EC2 server and waits for a response that the data is validated and accepted.
  const handleSubmit = async(e) => {
    e.preventDefault();
    await ScheduleAppointment(email, petName,petBreed, petType, clientName, date, time);
    console.log(email, petName, petName, petBreed,  petType, clientName, date, time);
  }

  // This function is to validate the timestamp that the user sends
  /*
  const checkTime = async() => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const day = new Date().getDay();

      const selectedDay = date.split("/")[1];

    

  }
    */


  return (
    <form onSubmit={handleSubmit}>
        <div className={styles.container}>
            <div className={styles.subcontainer2}> 
                <div className={styles.subcontainer3}>
                  <label>Caretaker Email:</label>
                  <input type="email" maxLength="30" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className={styles.subcontainer3}>
                  <label>Caretaker Name:</label>
                  <input type="text" maxLength="30" onChange={(e) => setClientName(e.target.value)} required/>
                </div>
            </div>
            <div className={styles.subcontainer2}>
                  <div className={styles.subcontainer3}>
                    <label>Pet Name:</label>
                    <input type="text" maxLength="40" onChange={(e) => setPetName(e.target.value)} required/>
                  </div>
                  <div className={styles.subcontainer3}>
                    <label>Pet Breed:</label>
                    <input type="text" maxLength="40" onChange={(e) => setPetBreed(e.target.value)} required/>
                </div>
            </div>
            <div className={styles.subcontainer2}>
              <div className={styles.subcontainer3}>
                <label>Pet Type:</label>
                <div>
                  <select id={styles.selectionBox}  onChange={(e) => setPetType(e.target.value)} required>
                    <option key="1" value="Dog">Dog</option>
                    <option key="2" value="Cat">Cat</option>
                    <option key="3" value="Bird">Bird</option>
                    <option key="4" value="Lizard">Lizard</option>
                    <option key="5" value="Snake">Snake</option>
                    <option key="6" value="Mouse">Mouse</option>
                  </select>
                </div>
              </div>
              <div className={styles.subcontainer3}>
                  <label>Appointment Date:</label>
                  <input id={styles.dateBox} type="date" onChange={(e) => setDate(e.target.value)} required/>
              </div>
            </div>
            <div className={styles.subcontainer3}>
                <label>Appointment Time:</label>
              
                  <input id={styles.timeBox} type="time" onChange={(e) => setTime(e.target.value)} required/>
               
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
