import React from 'react'
import './Styles/SIAB.scss'
import QRCode from '../Assets/SIAB/QRCode.png'

import ImageSlider from '../Components/ImageSlider/ImageSlider.js'
import {HashLink} from 'react-router-hash-link'

import Image1 from "../Assets/SIAB/Image1.png"
import Image2 from "../Assets/SIAB/Image2.png"
import Image3 from "../Assets/SIAB/Image3.png"

const images = [
  {image: Image1}, {image: Image2}, {image: Image3}
]

const SIAB = () => {
  return (
    <>
      <div className='SIAB-header'>
        <h1>Science In a Box</h1>
        <h2>Our elementary school STEM outreach program dedicated to giving free acceessible learning opportunities!</h2>
      </div>
      <div className='SIAB-about'>
          <h1 className='header'>What is Science In A Box?</h1>
          <h2>Science in a Box is a program we started in 2018 in order to spread STEM and engineering ideals to areas that are not as STEM-influenced as ours. The boxes that we send out have science experiments in them that can assist them with learning various science and engineering principles. Since our program started we have provided kits to 4 locations including Baja, Mexico, Haskett Library, Cerritos Library, and Wittmann Elementary. We have made 250+ kits and connected to 200+ kids all around the community and we are still striving for more!</h2>
          <iframe width="885" height="500" src="https://www.youtube.com/embed/_Vx4cOS3fC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h2 className='underline'>Watch this video to understand the importance of learning science at a young age!</h2>
          <HashLink smooth to="#SIAB-participate">Interested in hosting SIAB?</HashLink>
      </div>
      <div className='SIAB-participate' id="SIAB-participate">
        <h1>Bringing Science In A Box to you!</h1>
        <h2>Are you a organizer or a member of a current school that is intrested in bringing SIAB to your school? Well then please fill out the form below by proceeding to this <a src="https://docs.google.com/forms/d/e/1FAIpQLSf-EuL9WO4ZyBxr7ApsImEwVoD_QVbZXxAmbwk08Ra6PESUpA/viewform?usp=send_form">link</a> or scan the QR code below to signup!</h2> 
        <div className='row web'>
          <ImageSlider slides={images} fadeType="fade-right"/>
          <img data-aos="fade-left" className='QRCode' src={QRCode} alt="QRCode"/>
        </div>
        <div className='column mobile'>
        <img data-aos="fade-up" className='QRCode' src={QRCode} alt="QRCode"/>
          <ImageSlider slides={images} fadeType="fade-up"/>
        </div>
      </div>
    </>
  )
}

export default SIAB