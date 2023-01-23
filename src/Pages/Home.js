import React from 'react'
import "./Styles/Home.scss"
import TypeWriter from 'typewriter-effect'

import ImageSlider from '../Components/ImageSlider/ImageSlider'
import { SliderData } from '../Components/ImageSlider/SliderData'
import { HashLink } from 'react-router-hash-link'
import SponsorCard from '../Components/SponsorCard'
import PFP from '../Assets/FTC/tempPFP.png'

import Robot1 from "../Assets/Home/Robot1.png"

const Home = () => {
  return (
    <>
      <div className='home-one'>
        <h1>Whitney High School Robotics</h1>
        <TypeWriter 
          options={{
            strings: ["Welcome to WHS Robotics!", "We are the engineers of the future...", "Building a community that will last a lifetime..."],
            autoStart: true,
            loop: true
          }}
        />
        <HashLink smooth to="#mission" data-aos="fade-up">Learn more about our mission</HashLink>
      </div>
      <div className='home-two' id="mission">
        <h1>Our Mission</h1>
        <hr />
        <div className='row computer'>
          <div className='column'>
            <p>WHS Robotics originated in 2002 as an official club of Whitney High School in Cerritos, California. Whitney High School is home to academically gifted students throughout the ABC Unified School District, serving students from grades 7 to 12 and has gained a reputation as the top school in California and one of the finest in the nation. Currently our club administers multiple competition teams including FIRST Tech Challenge (FTC) Team #542, and FIRST LEGO League (FLL) team 3204. We also perform outreach events at a variety of locations in our community, including local libraries and elementary schools, with the goal of promoting STEM and robotics.</p>
            <p><b>You can get more details on each specific part of our club by exploring our site through the navigation bar above!</b></p>
          </div>
          <ImageSlider slides={SliderData} fadeType="fade-left"/>
        </div>
        <div className='mobile'>
          <p>WHS Robotics originated in 2002 as an official club of Whitney High School in Cerritos, California. Whitney High School is home to academically gifted students throughout the ABC Unified School District, serving students from grades 7 to 12 and has gained a reputation as the top school in California and one of the finest in the nation. Currently our club administers multiple competition teams including FIRST Tech Challenge (FTC) Team #542, and FIRST LEGO League (FLL) team 3204. We also perform outreach events at a variety of locations in our community, including local libraries and elementary schools, with the goal of promoting STEM and robotics.</p>
          <p><b>You can get more details on each specific part of our club by exploring our site through the navigation bar above!</b></p>
          <ImageSlider slides={SliderData} fadeType="fade-up"/>
        </div>
        <HashLink smooth to="#team" data-aos="fade-up">Meet the team and our advisors!</HashLink>
      </div>
      <div className='home-three' id="team">
        <h1>Meet the team</h1>
        <hr />
        <h2>Advisors - Teachers | Faculty of WHS</h2>
        <div className='flex-grid web' data-aos="fade-up">
            <div className='row'>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Builder Head"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Captain"/>
              <SponsorCard logo={PFP} title="Member Name" desc="Loves cooking and making new friends!" role="Programmer Head"/>
            </div>
            <h2>Club Leadership Team</h2>
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
            <h2>Club Leadership Team</h2>
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
            <h2>Club Leadership Team</h2>
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
            <h2>Club Leadership Team</h2>
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
    </>
  )
}

export default Home