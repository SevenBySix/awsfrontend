import React from 'react';
import './App.css';



function App() {
  return (

   <body>
      <Navbar/>
      <div id='section1'>
        <Button/>
      </div>

      <Footer/>
   </body>
  );
  
}

function Button() {
  return (
    <button id='appointmentButton'>Schedule an appointment</button>
  );
}

function Navbar() {
  return (
    <nav id='navbar'>
      <p>Navbar</p>
    </nav>
  )
}

function Footer() {
  return (
    <nav id='footer'>
      <p>Footer</p>
    </nav>
  )
}




export default App;
