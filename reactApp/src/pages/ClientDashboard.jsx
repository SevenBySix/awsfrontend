import styles from "./ClientDashboard.module.css"
import { useState,useEffect } from "react";
//import {Loading} from "../components/Loading"

// Client Dashboard component that allows the user to view newly created appointments and past visits.
export default function ClientDashboard() {

  //const[appointments, setAppointments] = useState([]);
  //const[pastAppointments, setPastAppointments] = useState([]);
  //const [isDataLoading, setIsDateLoading] = useState(false);

  
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchAppointments = async() => {
      try {
        const response = await fetch('https://api.vpbackendapi.com:5000/api/schedule/auth');
        const jsonAppointmentData = await response.json();
        setData(jsonAppointmentData);
        console.log(data);
      } catch(error) {
        console.log("Error loading appointment data:", error);
      }
    }

    fetchAppointments();

  }, []);
   

 
  return (
    <div className={styles.container}>
      <h1>Client Dashboard</h1>

      <div className={styles.inner_container}>

          <div className={styles.schedule_appointments_container}>
            <div><h2>Your Scheduled Appointments</h2></div>
            <div>
             
              <ul>

              
              </ul>
            
            </div>
        </div>

        <div className={styles.past_appointments_container}>
        <div><h2>Your Past Appointments</h2></div>
        <div></div>
    </div>
      
      </div>
      
    
    </div>
  )
}


