import React from 'react'
import './Styles/FTC.scss'

import VideoController from '../Components/VideoController/index.js'
import SponsorCard from '../Components/SponsorCard/index.js'

import PFP from '../Assets/FTC/tempPFP.png'
import IntroVideo from '../Assets/FTC/IntroVideo.mp4'

const FTC = () => {



  return (
    <>
      <div className='FTC-header'>
        <h1>First Tech Challenge</h1>
        <h2>Our high school competition team (Team 542)!</h2>
      </div>

      <div className='FTC-content'>
        <div className='section1' data-aos="fade-up">
          <h1>Mission Statement</h1> <hr />
          <p className='mission'>Our team's mission is to compete and collaborate with other FIRST Tech Challenge teams to grow and learn together and to use our outreach to to provide STEM and Robotics opportunities to students who are economically, socially, and/or physically disadvantaged!</p>
          <VideoController src={IntroVideo} />
        </div>
        <div className='section2'>
          <h1 data-aos="fade-up">Team Members</h1> 
          <p data-aos="fade-up" className='underhead'>Our current FTC team members for the 23' competition season!</p>
          <hr data-aos="fade-up" />
          <div className='flex-grid web' data-aos="fade-up">
            <div className='row'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder Head"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Captain"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer Head"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            </div>
          </div>
          <div className='flex-grid mobile1' data-aos="fade-up">
            <div className='row'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder Head"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Captain"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer Head"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            </div>
          </div>
          <div className='flex-grid mobile2' data-aos="fade-up">
            <div className='row'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Captain"/>
            </div>
            <div className='row'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder Head"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer Head"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            </div>
            <div className='col'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            </div>
          </div>
          <div className='flex-grid mobile3' data-aos="fade-up">
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Captain"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder Head"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer Head"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
            <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer"/>
          </div>
        </div>
        <div className='section3'>
          <h3>A list of our past awards from FTC and external robotics competitions!</h3>
          <button className='awards-button'>View past awards!</button>
        </div>
      </div>

    </>
  )
}

export default FTC