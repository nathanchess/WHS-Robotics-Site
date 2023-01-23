import React from 'react'
import "./SponsorCard.scss"

import {FaPaperPlane} from 'react-icons/fa'

const SponsorCard = (props) => {
  return (
    <>
      <div className='sponsor-card'>
        <div className='content'>
          <div className='front'>
            <img src={props.logo} alt="sponsor-logo"/>
          </div>
          <div className='back'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            {props.role ? <p className='role'>Role: {props.role}</p> : null}
            {props.site ? <a href={props.site} target="_blank" rel="noreferrer"><FaPaperPlane class='redirect-icon'/>Visit their website!</a> : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default SponsorCard