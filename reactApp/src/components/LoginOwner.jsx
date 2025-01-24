

const LoginOwner = async(email, password) => {
  const response = await fetch("https://api.vpbackendapi.com:5000/clientAuth/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({email,password})
  });

  const data = await response.json();

  if(response.ok) {
    document.cookie = `token=${data.token}; path=/; Secure`;
    console.log("Login successful, token saved as a cookie");
    alert("Login Successful");

  } else {
    console.error("Login failed", data.error);
  }
};



export default LoginOwner;
