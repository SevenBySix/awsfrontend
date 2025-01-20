import axios from "axios";
//import { loginKey } from "./LoginOwner";


const ScheduleAppointment= async (email, Pname, Pbreed, Ptype, Cname, date, time) => {

   

    try {

      const apiUrl = 'https://api.vpbackendapi.com:5000/api/schedule/auth';

      const response = await axios.post(
        apiUrl,
        { email: email, patientName: Pname, patientBreed: Pbreed, patientType: Ptype, clientName: Cname, date: date, time: time }, // Request body
        {
          headers: {
            'Content-Type': 'application/json',
            
          },
        }
      );
  
      if (response.status === 201) {
        console.log('Schedule successful:', response.data);
        alert('User scheduled appointment successfully!');
       

        return response.data; // You can return the response for further use
      }
   
    } catch (error) {
      if (!email || !name || !Pname || !Pbreed || !Ptype || !date || !time) {
        // Server responded with an error status
        console.error('Scheduling failed:', error.response.data);
        alert(error.response.data.error || 'Registration failed.');
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
        alert('Error: No response from the server.');
      } else {
        // Other errors
        console.error('Error setting up request:', error.message);
        alert(error.message);
      }
    }
}

export default ScheduleAppointment