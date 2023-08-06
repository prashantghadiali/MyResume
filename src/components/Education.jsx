import React from 'react'
import utulogo from '../images/utulogo.png';
import './script.js';

const Education = () => {
  return (
    <div>
        <section id="education">

        <h1 className="section-heading mb75px">
            <span>
                <i className="fas fa-graduation-cap"></i>
            </span>
            <span> Education </span>
        </h1>

        <div className="timeline">

            <div className="timeline-box left ">
                <div className="timeline-container">
                    <div className="timeline-logo">
                        <img src={utulogo} />
                    </div>
                    <h3 className="Education-designation  m0 m-blue"> M.Tech Auto.Technology </h3>
                    <h4 className="experience-company-name "> Uka Tarsadia University </h4>
                    <h5 className="experience-duration m0"> (2017 - 2019) </h5>

                    <p className="experience-description text-justify"> I completed my thesis in 3-D Laser welding analysis on residuel stress. We done this project in IIT Bombay. This project is PhD level and it was assigned by my director. I complted this 5 year project in 1 year with help of my respected and helpful teachers. </p>
                </div>
            </div>
            
            <div className="timeline-box right ">
                <div className="timeline-container">
                    <div className="timeline-logo">
                        <img src={utulogo} />
                    </div>
                    <h3 className="experience-designation  m0 m-blue"> B.Tech Auto. Engineering </h3>
                    <h4 className="experience-company-name "> Uka Tarsadia University </h4>
                    <h5 className="experience-duration m0"> (2013 - 2017) </h5>
                    <p className="experience-description text-justify"> I completed my thesis in materials. I create a ploymer with using aggriculture waste. this waste is from rice husk. it has fiber which provided good strength. it is burnt during making so we internally stable the material and make lighter, cheaper and strong material at affordable price. </p>
                </div>
            </div>

            {/* <div className="timeline-box left ">
                <div className="timeline-container">
                    <div className="timeline-logo">
                        <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000032_1550746413_iiitd_logo.png" />
                    </div>
                    <h3 className="experience-designation  m0 m-blue"> Degree </h3>
                    <h4 className="experience-company-name "> Institute Name </h4>
                    <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>

                    <p className="experience-description text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
            </div> */}
            
            <div id="timeline-divider">
                <div className="timeline-traveller">
                    <div>
                        <i className="fas fa-car-side"></i>
                    </div>
                </div>
            </div>

        </div>

        </section>
      
    </div>
  )
}

export default Education
