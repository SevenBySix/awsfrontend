import axios from "axios";

// This function allows the pet owner to register/signup for an appointment.
// The sign-up data is sent to a backend api. Frontend error handling is used for when the server responds with an error
const RegisterOwner = async (email, password) => {


    try {

      //const apiUrl = 'https://54.158.247.54:5000/clientAuth/register';
      const apiUrl2 = 'https://api.vpbackendapi.com:5000/clientAuth/register';

      const response = await axios.post(
        apiUrl2,
        { email, password }, // Request body
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 201) {
        console.log('Registration successful:', response.data);
        alert('User registered successfully!');
        
      }
   
    } catch (error) {
      if (error.response) {
        // Server responded with an error status
        console.error('Registration failed:', error.response.data);
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

export default RegisterOwner