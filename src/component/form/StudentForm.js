import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function StudentForm(props) {
  const [actions,setActions] = useState('');
  const [status,setStatus] = useState('');
   const [service,setService] = useState('');
   const [serviceCategory,setServiceCategory] = useState('');
   const [location,setLocation] = useState('');
   const [date,setDate] = useState('');

  const changeName = (event) => {
    setActions(event.target.value);
  };
  

  const changeCity = (event) => {
    setStatus(event.target.value);
  };
  const servise = (event) =>{
    setService(event.target.value);
  }
  const serviscat = (event) =>{
    setServiceCategory(event.target.value);
  }
  const locat = (event) =>{
    setLocation(event.target.value);
  }
  const craatedon = (event) =>{
   setDate(event.target.value);
  }

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      actions,
      status,
      service,
      serviceCategory,
      location,
      date
    };
    props.func(val);
    clearState();
   
  };

  const clearState = () => {
    setActions('');
    setStatus('');
    setService(' ');
    setServiceCategory('');
    setLocation(' ');
    setDate(' ');
    
  };
   
    
 
   return (
    
    <div className='student-form'>
      
    <div className="student-form-container">
      <label>Actions</label>
      <input type="text" value={actions} onChange={changeName} />
      <label>status</label>
      <input type="text" value={status} onChange={changeCity} />
      <label>service</label>
      <input type="text" value={service} onChange={servise} />
      <label>service Category</label>
      <input type="text" value={serviceCategory} onChange={serviscat} />
      <label>Location</label>
      <input type="text" value={location} onChange={locat} />
      <label>Date</label>
      <input type="date" value={date} onChange={craatedon} />
      <button onClick={transferValue}>Rise It Ticket</button>
    </div>
    </div>
    
  );
}

export default StudentForm;
