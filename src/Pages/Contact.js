import React from 'react'
import './Styles/Contact.scss'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='content'>
        <h2 className='colored'>Got a question?</h2>
        <h1>Contact Us!</h1>
        <h2>We'd love to hear from you. Send us a message and we'll get back to you as soon as possible!</h2>
        <div className='form-container'>
          <label for="name">Full Name:</label><br />
          <input type='text' name='name' /><br />
          <label for="email">Email:</label><br />
          <input type='email' name='email' /><br />
        </div>
      </div>
    </div>
  )
}

export default Contact