import axios from "axios";


const registerOwner = async (email, password) => {
    //alert(`The name you entered was: ${youremail}`);


    try {

      const apiUrl = 'https://54.158.247.54:5000/clientAuth/register';

      const response = await axios.post(
        apiUrl,
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
        return response.data; // You can return the response for further use
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

export default registerOwner