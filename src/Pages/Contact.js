import React from 'react'
import './Styles/Contact.scss'

import { useNavigate } from 'react-router-dom'

const ContactForm = () => {

  const formData = {
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    msg: ''
  }
  const navigator = useNavigate();


  function handleChange(event) {
    const target = event.target;
    formData[target.id] = target.value
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigator('/')
  }

 
  return (
    <>
      <div className='contact-container'>
        <div className='content'>
          <h1 className='title'>Contact our team</h1>
          <h2>Our team is happy to answer any questions or concerns you have! Fill out the form and we'll be in touch as soon as possible.</h2>
          <form id='contact-form' className='form' action="https://sheetdb.io/api/v1/bn05y55kfxtl1" onSubmit={handleSubmit} method='POST'>
            <h3>Please be sure to respond to all fields fully</h3>
            <label for='firstName' className='required'>First name</label>
            <input type='text' id='firstName' required onChange={handleChange} name="data[firstName]"/> 
            <hr />
            <label for='lastName' className='required'>Last name</label> 
            <input type='text' id='lastName' required onChange={handleChange} name="data[lastName]"/> 
            <hr />
            <label for='email' className='required'>Email</label> 
            <input type='email' id='email' required onChange={handleChange} name="data[email]"/> 
            <hr />
            <label for='ftype' className='required'>Message Type:</label> 
            <select id="type" onChange={handleChange} name="data[type]">
              <option value="ftc">FTC 542 Team</option>
              <option value="sponsorship">Sponsorship</option>
              <option value="robocamp">RoboCamp</option>
              <option value="outreach">Outreach</option>
              <option value="other">Other</option>
            </select>
            <hr />
            <label for='fmsg' className='required'>Message:</label>
            <hr style={{height: '1em'}}/>
            <textarea id='msg' onChange={handleChange} required name="data[msg]"></textarea>
            <input type='submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm