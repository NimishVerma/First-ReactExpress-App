import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Appointments from './components/appointments/appointments';
import AppointmentInput from './components/appointmentinput/appointmentinput';

function App() {
  return (
    <div className="App">
   
       <Appointments />
        <AppointmentInput />
    </div>
  );
}

export default App;
