import React from 'react'
import PrashantPasspotsizephoto from '../images/PrashantPasspotsizephoto.jpg';

const About = () => {
  return (
    <div>
      <section id="about">
            <div id="my-image">
                <img src={PrashantPasspotsizephoto} />
            </div>

            <div id="about-para">
                <p>
                I'm Prashant Ghadiali. I hold a Master's degree in Automobile Technology, where I secured the first rank with distinction. My professional journey includes serving as the Head of the Research and Development Department at Drone Robotics, where I not only led projects but also played a pivotal role in recruiting technical talent for the IT sector.
                <br /><br />
                One of my passions lies in education, and I've had the privilege of training students in the field of Robotics. Additionally, I bring with me six months of hands-on experience in Full-Stack Development at Gopanear.
                <br /><br />
                I am an immediate joiner, and my first choices for professional endeavors are Pune and Bengaluru. I look forward to bringing my expertise and enthusiasm to a dynamic team.
                </p>
            </div>
        </section>
    </div>
  )
}

export default About
