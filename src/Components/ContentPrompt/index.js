import React from 'react'

import {AiOutlineClose} from 'react-icons/ai'

import './ContentPrompt.scss'

class ContentPrompt extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: props.name, closeCallback: props.callback}
  }

  render() {

    const promptName = this.state.name

    let content=(null);
    if (promptName === "CampA") {
      content = <>
        <button className='close' onClick={this.state.closeCallback}><AiOutlineClose size="1.5em"/></button>
        <h1 className='title'>LEGO RoboCamp Information</h1>
        <hr />
        <p className='description'>As the introductory camp for our RoboCamp summer program, kids will learn a variety of fundamental building and programming concepts. The first two days of the camp will be dedicated for learning the fundamentals, as kids will follow neatly organized follow along projects. We believe that these two days are vital, as they provide a chance for us to teach them the fundamentals of robotics, while allowing them to meet new people at the camp as well. We also highly stress teamwork within our RoboCamp program. Which is why the last 3 days are what we wall "competition" days. During these competition days, students will form teams of 3-6 people and compete in a variety of robotics challenges to earn tickets that can be exchanged for cool prizes! </p>
        <hr />
        <h2 className='header'>Camp Schedule</h2>
        <table>
          <tr className='table-header'>
            <th>Day</th>
            <th>Concepts Learned</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Monday (Day 1)</td>
            <td>
              <ul>
                <li>EV3 Parts Lesson</li>
                <li>Bracing</li>
                <li>Basic EV3 Assembly (Team Based)</li>
                <li>Intro to programming and motor usages</li>
              </ul>
            </td>
            <td>Before getting into any learning activities, we like to spend a bit of time on introductions and emphasizing the importance of teamwork. This is maninly a day for students to get know thier classmates, while learning the fundamentals of robotics.</td>
          </tr>
          <tr>
            <td>Tuesday (Day 2)</td>
            <td>
              <ul>
                <li>Programming Lesson (Iteration, Robot Movement, Switches)</li>
                <li>Robot Mini Challenge - Moving robots in shapes</li>
                <li>Programming color sensors and touch sensors</li>
                <li>Basic Line Follow Activity </li>
              </ul>
            </td>
            <td>On the second day of RoboCamp we tend to focus more on the programming aspect of robotics. Since on Day 1 students have already officially finished building their first robot with their fellow classmates, it's important for students to understand the logic and programming that goes on behind the scene to make things work. By having these programming activities and lessons in place, students will be prepared to participate in our 3 day competition!</td>
          </tr>
          <tr>
            <td>Wednesday - Thursday (Day 3-4)</td>
            <td>
              <ul>
                <li>Competition Work Day</li>
              </ul>
            </td>
            <td>During these two days students will work with their team of 3-6 other students in order to prepare the best robot! These robots will be tested on a previous FLL (First LEGO League) field and required to complete certain objectives in order to earn points. By introducing a sense of competition and teamwork to the camp, students will bee able to experience what it's like building and programming a robot from start to finish.</td>
          </tr>
          <tr>
            <td>Friday (Day 5)</td>
            <td>
              <ul>
                <li>Competition Day</li>
              </ul>
            </td>
            <td>For the last day of camp, students will have the opportunity to put their robots to the test and see how well executed and engineered their robot is compared to others. We will have a set of announcers, a livestream, and even an auction at the end of the day for prizes! <span className='bold>'>Parents are invited to attend!</span></td>
          </tr>
        </table>
      </>
    } else if (promptName === "CampB") {
      content = <>
        <button className='close' onClick={this.state.closeCallback}><AiOutlineClose size="1.5em"/></button>
        <h1 className='title'>Advanced LEGO RoboCamp Information</h1>
        <hr />
        <p className='description'>This camp is a continuation of our beginner camp "LEGO RoboCamp". Rather than focusing on the competition aspect and establishing the fundamentals to students, this camp focuses on more advanced programming techniques, sensors, and building designs. The structure of the actual camp is fairly similar to that of our beginner RoboCamp, and their will also be an end of camp competition as well. </p>
        <hr />
        <h2 className='header'>Camp Schedule</h2>
        <table>
          <tr className='table-header'>
            <th>Day</th>
            <th>Concepts Learned</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Monday (Day 1)</td>
            <td>
              <ul>
                <li>Attachments and Gears</li>
                <li>Lifts and Mainpulators</li>
                <li>Programming Review (Basics)</li>  
                <li>Brainstorm mission activity</li>  
              </ul>
            </td>
            <td>Before getting into any learning activities, we like to spend a bit of time on introductions and emphasizing the importance of teamwork. This is maninly a day for students to get know thier classmates, while learning the fundamentals of robotics.</td>
          </tr>
          <tr>
            <td>Tuesday (Day 2)</td>
            <td>
              <ul>
                <li>Modular Building (Base+Attachments)</li>
                <li>Ultrasonic Sensor</li>
                <li>Gyro Sensors and Proportional Control</li>
                <li>Ultrasonic Wall Follower Activity</li>
              </ul>
            </td>
            <td>On the second day of RoboCamp we tend to focus more on the programming aspect of robotics. Since on Day 1 students have already officially finished building their first robot with their fellow classmates, it's important for students to understand the logic and programming that goes on behind the scene to make things work. By having these programming activities and lessons in place, students will be prepared to participate in our 3 day competition!</td>
          </tr>
          <tr>
            <td>Wednesday - Thursday (Day 3-4)</td>
            <td>
              <ul>
                <li>Competition Work Day</li>
              </ul>
            </td>
            <td>During these two days students will work with their team of 3-6 other students in order to prepare the best robot! These robots will be tested on a previous FLL (First LEGO League) field and required to complete certain objectives in order to earn points. By introducing a sense of competition and teamwork to the camp, students will bee able to experience what it's like building and programming a robot from start to finish.</td>
          </tr>
          <tr>
            <td>Friday (Day 5)</td>
            <td>
              <ul>
                <li>Competition Day</li>
              </ul>
            </td>
            <td>For the last day of camp, students will have the opportunity to put their robots to the test and see how well executed and engineered their robot is compared to others. We will have a set of announcers, a livestream, and even an auction at the end of the day for prizes! <span className='bold>'>Parents are invited to attend!</span></td>
          </tr>
        </table>
      </>
    } else if (promptName === "Email") {

    }

    return (
      <div className={'contentPrompt'} id={this.state.name}>
        <div className='content'>
            {content}
        </div>
      </div>
    )
  }

}

export default ContentPrompt