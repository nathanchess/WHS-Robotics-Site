import React from 'react'
import FooterStyle from './FooterStyle.scss'

import InstagramLogo from "../../Assets/Misc/Instagram.png"
import FacebookLogo from "../../Assets/Misc/FacebookLogo.png"
import Discord from "../../Assets/Misc/Discord.png"

const Footer = ({color}) => {
  return (
    <div className={"Footer"}>
      <div className='column'>
        <h1>WHS Robotics Landing Page</h1>
        <h2>Created by: Nathan Che</h2>
      </div>
      <div className='row'>
        <h1>Follow us:</h1>
        <a href="https://www.instagram.com/whitneyrobotics/" target="_blank"><img src={InstagramLogo} alt="insta"/></a>
        <a href=""><img src={FacebookLogo} alt="FB" /></a>
        <a href="https://discord.gg/mqYrSNAx2U" target="_blank"><img src={Discord} alt="Disc" /></a>
      </div>
    </div>
  )
}

export default Footer