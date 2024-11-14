import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div id="section1">
        <Button />
      </div>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav id="navbar">
      <p>Navbar</p>
    </nav>
  );
}

function Footer() {
  return (
    <nav id="footer">
      <p>Footer</p>
    </nav>
  );
}

function Button() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    closeForm();
  };

  return (
    <>
      <button id="appointmentButton" onClick={handleButtonClick}>
        Schedule an appointment
      </button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Schedule Appointment</h2>
            <Form handleSubmit={handleSubmit} closeForm={closeForm} />
          </div>
        </div>
      )}
    </>
  );
}

function Form({ handleSubmit, closeForm }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Pet Name:</label>
        <input type="text" name="petName" />
      </div>
      <div className="form-group">
        <label>Pet Breed:</label>
        <input type="text" name="petBreed" />
      </div>
      <div className="form-group">
        <label>Pet Type:</label>
        <input type="text" name="petType" />
      </div>
      <div className="form-group">
        <label>Caretaker Name:</label>
        <input type="text" name="caretakerName" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email"/>
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" name="date" />
      </div>
      <div className="form-group">
        <label>Time:</label>
        <input type="time" name="time" />
      </div>
      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default App;
