import React from 'react'
import { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import SliderStyle from './SliderStyle.scss'

const ImageSlider = ({ slides, fadeType }) => {
  
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className='ImageSlider' data-aos={fadeType}>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      {slides.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<img src={slide.image} alt="image" className='image'/>)}
          </div> 
        )
      })}
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </section>
  )
}

export default ImageSlider