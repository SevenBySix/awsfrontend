import styles from "./ClientDashboard.module.css"
import {useEffect, useState } from "react";
import axios from "axios";
//import {Loading} from "../components/Loading"
//import { getCookie } from "../functions/GetCookie";
import ListItem from "../components/ListItem";



function getCookie(name) {
  const cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // trims the whitespace in the array of characters
    
    // picks which substring starts with the token name plus the equal sign
    if (cookie.startsWith(name + '=')) { 
      return cookie.substring(name.length + 1); // returns the token not counting "name="
    }
  }
  return null;
}



const token = getCookie("token");

/*
const items = [
  {name: "walter", petName: "charles", time: "3:23", date: "1/23/24"  },
  {name: "Humphrey", petName: "willy", time: "12:14", date: "3/23/24"  },
  {name: "Thumper", petName: "Gullible", time: "5:50", date: "5/30/24"  },
  {name: "Thumper", petName: "Gullible", time: "5:50", date: "5/30/24"  }
];
*/

// Client Dashboard component that allows the user to view newly created appointments and past visits.
export default function ClientDashboard() {

  //const[appointments, setAppointments] = useState([]);
  //const[pastAppointments, setPastAppointments] = useState([]);
  //const [isDataLoading, setIsDateLoading] = useState(false);

  
  const [data, setData] = useState([]);

  // The data is fetched on the client dashboard pages initial render (when the page shows up)
  // This is because of the useEffect hook which allows for these actions to ocurr.
  useEffect(() => {
    const fetchAppointments = async() => {

      const apiURL = 'https://api.vpbackendapi.com:5000/api/appointments/';
      try {

        const response = await axios.get(apiURL,{
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }
        );

        console.log(response.data);

        setData(response.data.appointments);


      } catch(error) {
        console.log("Error loading appointment data:", error);
      }
    }

    fetchAppointments();

  },[]); //where dependency array goes.
   
//   {data.map((item) => (<ListItem key={item.id} item={item}/>))}
 
  return (
    <div className={styles.container}>
      <h1>Client Dashboard</h1>

      <div className={styles.inner_container}>

          <div className={styles.schedule_appointments_container}>
            <div><h2>Your Scheduled Appointments ({data.length})</h2></div>
            <div className={styles.appointment_list_container}>
              <ul>
                {data.map((item) => (<ListItem key={item.id} item={item}/>))}
              
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


