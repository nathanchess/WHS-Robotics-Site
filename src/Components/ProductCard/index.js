import React from 'react'
import '../../Assets/Styles/shapes.scss'
import './ProductCard.scss'

import {FiClipboard} from 'react-icons/fi'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='circle'>
        <img src={props.circleImg} alt="robot" />
      </div>
      <div className='image-gradient'>
        <img src={props.bannerImg} alt="banner"/>
      </div>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <button className='learn-more' onClick={props.clickHandler}>Learn More</button>
      <a href="/robocamp-enrollment" className='enroll'>Signup Now</a>
    </div>
  )
}

export default ProductCard