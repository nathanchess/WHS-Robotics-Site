import React from 'react'
import './Styles/RoboCamp.scss'

import {HashLink} from 'react-router-hash-link'

import ProductCard from '../Components/ProductCard/index.js'
import ContentPrompt from '../Components/ContentPrompt/index.js'
import ImageSlider from '../Components/ImageSlider/ImageSlider.js'

import ManTappingScreen from '../Assets/RoboCamp/ManTappingScreen.png'
import SimpleRobot from '../Assets/RoboCamp/SimpleRobot.png'
import AdvancedRobot from '../Assets/RoboCamp/AdvancedRobot.png'
import CampABanner from '../Assets/RoboCamp/CampABanner.JPG'
import CampBBanner from '../Assets/RoboCamp/CampBBanner.JPG'

import { AiOutlinePlus } from 'react-icons/ai'
import { SliderData } from '../Components/ImageSlider/SliderData'

import AOS from 'aos';
import 'aos/dist/aos.css';

class RoboCamp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {promptEnabled: false, promptName: null, faqEnabled: false}
    this.campAClick = this.campAClick.bind(this)
    this.campBClick = this.campBClick.bind(this)
    this.handleFAQ = this.handleFAQ.bind(this)
  }

  campAClick() {
    const promptEnabled = this.state.promptEnabled
    if (!promptEnabled) {
      this.setState({promptEnabled: true, promptName: "CampA"})
    }
  }

  campBClick() {
    const promptEnabled = this.state.promptEnabled
    if (!promptEnabled) {
      this.setState({promptEnabled: true, promptName: "CampB"})
    }
  }

  contentCallback = () => { console.log("callback called"); this.setState({promptEnabled: false}) }

  handleFAQ = (e) => {
    e.target.classList.toggle('active')
    var panel = e.target.nextElementSibling 
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  }

  render() {

    let promptObject = (null);
    if (this.state.promptEnabled) {
      promptObject = <ContentPrompt name={this.state.promptName} callback={this.contentCallback}/>
    }

    AOS.init();

    return (
      <>

        <div className='robocamp-header'>
          <h1>RoboCamp</h1>
          <h2>Our annual robotics summer education program hosted by our very own team members!</h2>
        </div>

        <div className='robocamp-about'>
            <h1 className='header'>What is RoboCamp?</h1>
            <div className='horizontal'>
              <h2 data-aos="fade-right">RoboCamp is a summer program designed for mature elementary, middle, and high school students. Each camp offers 35 hours of intense study (8:00 AM - 3:00 PM) mixed with interactive activities. Summer RoboCamp participants will discover the concepts of science, technology, engineering and mathematics, through the medium of robotics competitions. Participants will learn the fundamentals of Lego Robotics using Lego EV3 from from concepts as simple as structural integrity and basic sensors to mastering the engineering design process and its nuances, gear ratios, modular programming, and so much more! Then, students will have opportunities to test out their new skills through a mission-based competition where they will be able to put their robots to the test! The program encourages cooperative participation, hands-on robotics, basic teamwork and leadership skills that can be directly applied to the real world.</h2>
              <ImageSlider slides={SliderData} fadeType="fade-left"/>
            </div>
            <div className='mobile'>
              <h2>RoboCamp is a summer program designed for mature elementary, middle, and high school students. Each camp offers 35 hours of intense study (8:00 AM - 3:00 PM) mixed with interactive activities. Summer RoboCamp participants will discover the concepts of science, technology, engineering and mathematics, through the medium of robotics competitions. Participants will learn the fundamentals of Lego Robotics using Lego EV3 from from concepts as simple as structural integrity and basic sensors to mastering the engineering design process and its nuances, gear ratios, modular programming, and so much more! Then, students will have opportunities to test out their new skills through a mission-based competition where they will be able to put their robots to the test! The program encourages cooperative participation, hands-on robotics, basic teamwork and leadership skills that can be directly applied to the real world.</h2>
              <ImageSlider slides={SliderData}/>
            </div>
            <HashLink smooth to="#robocamp-info" data-aos="fade-up">Enroll your student now!</HashLink>
        </div>

        <div className='robocamp-info' id="robocamp-info">
          <h1 className='header'>Camps and Curriculum Information</h1>
          <div className='horizontal'>
            <ProductCard clickHandler={this.campAClick} circleImg={SimpleRobot} bannerImg={CampABanner} name="LEGO RoboCamp" desc="This is the beginners robotics camp that we offer. It spans a total of one week (but students tend to continue to the Advanced LEGO RoboCamp as well) and students will learn the basics of building and programming an EV3 Robot from scratch. They will form teams of 3-4 other students and use problem-solving skills to work their way through the lessons and competition!"/>
            <ProductCard clickHandler={this.campBClick} circleImg={AdvancedRobot} bannerImg={CampBBanner} name="Advanced LEGO RoboCamp" desc="This is the more advanced version of our normal RoboCamp. Students will learn about more complex topics such as gyro sensors, touch sensors, and intermediate programming algorithms. Similar to our beginners RoboCamp, their will be a last day competition where students will form teams and go head-to-head in winning cool prizes!" />
          </div>
        </div>
        
        <div className='robocamp-FAQ' data-aos="fade-down">
          <h1 className='header'>FAQ</h1>
          <h2 className='desc'>Questions? Concerns? We're here to help! Below are a few of the most asked questions. If you need any additional help, feel free to visit our contacts page!</h2>
          <button className='accordion' onClick={this.handleFAQ} >Where will these camps be taking place? <AiOutlinePlus size="1.25em" /></button>
          <div className='panel'>
            <p>All RoboCamp programs and sessions will be held on Whitney High School inside the Mac A building. If you don't know where that is, feel free to head to the main office for help.</p>
          </div>
          <button className='accordion' onClick={this.handleFAQ} >Do you guy's offer any other programs besides RoboCamp? <AiOutlinePlus size="1.25em" /></button>
          <div className='panel'>
            <p>RoboCamp is our only dedicated summer program that we offer at the moment. However we have other community service events such as Science In a Box (SIAB) and robotics demo's at local elementary schools, so be sure to look out for those!</p>
          </div>
        </div>

        {promptObject}

      </>
    )
  }

}

export default RoboCamp