import React from 'react'
import './Styles/Sponsor.scss'
import SponsorCard from '../Components/SponsorCard/index.js'

import Raytheon from '../Assets/Sponsors/Raytheon.png'
import Boeing from '../Assets/Sponsors/Boeing.png'
import Disney from '../Assets/Sponsors/Disney.png'
import HFT from '../Assets/Sponsors/Harbor-Freight-Tools.png'
import Rev from '../Assets/Sponsors/Rev.png'
import RobotZone from '../Assets/Sponsors/RobotZone.png'
import SolidWorks from '../Assets/Sponsors/Solidworks.png'
import VMWare from '../Assets/Sponsors/VMWare.png'
import Accompli from '../Assets/Sponsors/Accompli.png'

import JoinGraphic from '../Assets/Sponsors/PageContent/JoinGraphic.png'

import { Link } from 'react-router-dom'

const Sponsors = () => {
  return (
    <>
      <div className='sponsor-header'>
        <h1>Our Supporters</h1>
        <h2>Huge thank you to all of our corporate sponsors!</h2>
      </div>
      <h1 className='sponsor-instructions'>Hover over each sponsor card to learn more!</h1>
      <div className='sponsor-container web'>
        <div className='row'>
        <SponsorCard logo={Raytheon} site="https://www.rtx.com/" title="Raytheon Technologies" desc="Raytheon Technologies Corporation is an aerospace and defense company that provides advanced systems and services for commercial, military and government customers worldwide." />
        <SponsorCard logo={Boeing} site="https://www.boeing.com/" title="Boeing" desc="As a leading global aerospace company, Boeing develops, manufactures and services commercial airplanes, defense products and space systems for customers in more than 150 countries." />
        <SponsorCard logo={Disney} site="https://www.disney.com/" title="Disney" desc="The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling reflecting the iconic brands, creative minds and innovative technologies." />
        <SponsorCard logo={Rev} site="https://www.revrobotics.com/" title="REV Robotics" desc="Founded in 2014 by Greg Needel and David Yanoshak, two friends with a passion for robots – together they created REV, helping students around the world realize their full robotic design potential." />
        </div>
        <div className='row'>
        <SponsorCard logo={Accompli} site="https://accomplicenter.com/" title="Accompli Center" desc="AccompliCenter offers a place for your business to call home. We have HR services, mailbox rental, packing and shipping, and a conference center. Best of all, we offer the experience and guidance you'll need to accomplish your business." />
        <SponsorCard logo={SolidWorks} site="https://www.solidworks.com/" title="SOLIDWORKS" desc="Dassault Systèmes provides business and people with virtual universes to imagine sustainable innovations capable of harmonizing product, nature and life." />
        <SponsorCard logo={VMWare} site="https://www.vmware.com/" title="VMWare" desc="VMware vSphere, also referred to as a cloud operating system or a virtualized data center platform, enables IT departments to place application workloads on the most cost-effective compute resource available" />
        <SponsorCard logo={RobotZone} site="https://www.solidworks.com/" title="RobotZone" desc="We are a team of people who are passionate about making awesome things, and dedicated to creating precision mechanical components that help you turn your ideas into a reality." />
        </div>
        <div className='row'>
        <SponsorCard logo={HFT} site="https://www.harborfreight.com/" title="Harbor Freight Tools" desc="A privately held tool and equipment retailer, headquartered in Calabasas, California, which operates a chain of retail stores, as well as a mail-order and e-commerce business." />
        </div>
      </div>
      <div className='sponsor-container mobile1'>
        <div className='row'>
        <SponsorCard logo={Raytheon} site="https://www.rtx.com/" title="Raytheon Technologies" desc="Raytheon Technologies Corporation is an aerospace and defense company that provides advanced systems and services for commercial, military and government customers worldwide." />
        <SponsorCard logo={Disney} site="https://www.disney.com/" title="Disney" desc="The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling reflecting the iconic brands, creative minds and innovative technologies." />
        <SponsorCard logo={Boeing} site="https://www.boeing.com/" title="Boeing" desc="As a leading global aerospace company, Boeing develops, manufactures and services commercial airplanes, defense products and space systems for customers in more than 150 countries." />
        </div>
        <div className='row'>
        <SponsorCard logo={Rev} site="https://www.revrobotics.com/" title="REV Robotics" desc="Founded in 2014 by Greg Needel and David Yanoshak, two friends with a passion for robots – together they created REV, helping students around the world realize their full robotic design potential." />
        <SponsorCard logo={Accompli} site="https://accomplicenter.com/" title="Accompli Center" desc="AccompliCenter offers a place for your business to call home. We have HR services, mailbox rental, packing and shipping, and a conference center. Best of all, we offer the experience and guidance you'll need to accomplish your business." />
        <SponsorCard logo={HFT} site="https://www.harborfreight.com/" title="Harbor Freight Tools" desc="A privately held tool and equipment retailer, headquartered in Calabasas, California, which operates a chain of retail stores, as well as a mail-order and e-commerce business." />
        </div>
        <div className='row'>
        <SponsorCard logo={SolidWorks} site="https://www.solidworks.com/" title="SOLIDWORKS" desc="Dassault Systèmes provides business and people with virtual universes to imagine sustainable innovations capable of harmonizing product, nature and life." />
        <SponsorCard logo={VMWare} site="https://www.vmware.com/" title="VMWare" desc="VMware vSphere, also referred to as a cloud operating system or a virtualized data center platform, enables IT departments to place application workloads on the most cost-effective compute resource available" />
        </div>
      </div>
      <div className="sponsor-container mobile2">
        <div className='row'>
        <SponsorCard logo={Raytheon} site="https://www.rtx.com/" title="Raytheon Technologies" desc="Raytheon Technologies Corporation is an aerospace and defense company that provides advanced systems and services for commercial, military and government customers worldwide." />
        <SponsorCard logo={Boeing} site="https://www.boeing.com/" title="Boeing" desc="As a leading global aerospace company, Boeing develops, manufactures and services commercial airplanes, defense products and space systems for customers in more than 150 countries." />
        </div>
        <div className='row'>
        <SponsorCard logo={Disney} site="https://www.disney.com/" title="Disney" desc="The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling reflecting the iconic brands, creative minds and innovative technologies." />
        <SponsorCard logo={HFT} site="https://www.harborfreight.com/" title="Harbor Freight Tools" desc="A privately held tool and equipment retailer, headquartered in Calabasas, California, which operates a chain of retail stores, as well as a mail-order and e-commerce business." />
        </div>
        <div className='row'>
        <SponsorCard logo={Rev} site="https://www.revrobotics.com/" title="REV Robotics" desc="Founded in 2014 by Greg Needel and David Yanoshak, two friends with a passion for robots – together they created REV, helping students around the world realize their full robotic design potential." />
        <SponsorCard logo={Accompli} site="https://accomplicenter.com/" title="Accompli Center" desc="AccompliCenter offers a place for your business to call home. We have HR services, mailbox rental, packing and shipping, and a conference center. Best of all, we offer the experience and guidance you'll need to accomplish your business." />
        </div>
        <div className='row'>
        <SponsorCard logo={SolidWorks} site="https://www.solidworks.com/" title="SOLIDWORKS" desc="Dassault Systèmes provides business and people with virtual universes to imagine sustainable innovations capable of harmonizing product, nature and life." />
        <SponsorCard logo={VMWare} site="https://www.vmware.com/" title="VMWare" desc="VMware vSphere, also referred to as a cloud operating system or a virtualized data center platform, enables IT departments to place application workloads on the most cost-effective compute resource available" />
        </div>
      </div>
      <div className="sponsor-container mobile3">
        <SponsorCard logo={Raytheon} site="https://www.rtx.com/" title="Raytheon Technologies" desc="Raytheon Technologies Corporation is an aerospace and defense company that provides advanced systems and services for commercial, military and government customers worldwide." />
        <SponsorCard logo={Boeing} site="https://www.boeing.com/" title="Boeing" desc="As a leading global aerospace company, Boeing develops, manufactures and services commercial airplanes, defense products and space systems for customers in more than 150 countries." />
        <SponsorCard logo={Disney} site="https://www.disney.com/" title="Disney" desc="The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling reflecting the iconic brands, creative minds and innovative technologies." />
        <SponsorCard logo={HFT} site="https://www.harborfreight.com/" title="Harbor Freight Tools" desc="A privately held tool and equipment retailer, headquartered in Calabasas, California, which operates a chain of retail stores, as well as a mail-order and e-commerce business." />
        <SponsorCard logo={Rev} site="https://www.revrobotics.com/" title="REV Robotics" desc="Founded in 2014 by Greg Needel and David Yanoshak, two friends with a passion for robots – together they created REV, helping students around the world realize their full robotic design potential." />
        <SponsorCard logo={Accompli} site="https://accomplicenter.com/" title="Accompli Center" desc="AccompliCenter offers a place for your business to call home. We have HR services, mailbox rental, packing and shipping, and a conference center. Best of all, we offer the experience and guidance you'll need to accomplish your business." />
        <SponsorCard logo={SolidWorks} site="https://www.solidworks.com/" title="SOLIDWORKS" desc="Dassault Systèmes provides business and people with virtual universes to imagine sustainable innovations capable of harmonizing product, nature and life." />
        <SponsorCard logo={VMWare} site="https://www.vmware.com/" title="VMWare" desc="VMware vSphere, also referred to as a cloud operating system or a virtualized data center platform, enables IT departments to place application workloads on the most cost-effective compute resource available" />
      </div>
      <div className='sponsor-footer'>
        <div className='column'>
          <h1>Want to join the club?</h1>
          <p>Thanks to our supporters, we are able to host community service activities and participate in a variety of robotics competitions throughout the year! At WHS Robotics we strive to be a source of knowledge and inspiration towards students all around our local community. If this is something that interests you or your company feel free to contact us for more information!</p>
          <Link to="/contact">Join Us</Link>
        </div>
        <img src={JoinGraphic} alt="JoinGraphic" className='graphic'/>
      </div>
    </>
  )
}

export default Sponsors