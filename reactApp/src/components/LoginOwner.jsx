import axios from "axios";

export let loginKey = "Bearer ";
let token = "";
const LoginOwner = async (email, password) => {



    try {

      //const apiUrl = 'https://54.158.247.54:5000/clientAuth/register';
      const apiUrl2 = "https://api.vpbackendapi.com:5000/clientAuth/login";

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
        console.log('Login successful:', response.data);
        alert('User logged in successfully!');
        token = response.data["token"];
        loginKey += token;
        console.log(loginKey);
      
        

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

export default LoginOwner;