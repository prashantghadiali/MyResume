import React from 'react'
import robologo from "../images/robologo.png"

const Experience = () => {
  return (
    <div>
        <section id="experience">

            <h1 className="section-heading mb75px">
                <span>
                    <i className="fas fa-briefcase"></i>
                </span>
                <span> Work Experience </span>
            </h1>

            <div className="timeline">

                <div className="timeline-box ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="280" height="79" viewBox="0 0 300 79">
                                <text id="Gopanear." transform="translate(0 64)" fill="#4f8df5" fontSize="59" fontFamily="'Nunito', sans-serif" fontWeight="700"><tspan x="0" y="0">Gopanear.<tspan fontSize="19" y="-25" x="270" transform="translate(0 20)" fontFamily="'Nunito', sans-serif" fontWeight="800">®</tspan></tspan></text>
                            </svg>
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Jr. Software Engineer</h3>
                        <h4 className="experience-company-name"> Gopanear </h4>
                        <h5 className="experience-duration m0"> 06 March, 2023 - 31 August, 2023 </h5>

                        <p className="experience-description text-justify">My Duty is to Work as a Full Stack Developer. I learnt Django and React. I also make one Online Video Streaming Website Like Youtube in Django. But I am More Interested about React Library because of it's component Based Architecture and good flexibilty for UI Contents. This website is created in React.</p>
                    </div>
                </div>
                
                <div className="timeline-box right ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src={robologo} />
                        </div>
                        <h3 className="experience-designation  m0 m-blue"> Head R & D department of Drone</h3>
                        <h4 className="experience-company-name"> Robodronics </h4>
                        <h5 className="experience-duration m0"> Oct 2021 - Oct 2022 </h5>

                        <p className="experience-description text-justify"> My duty is to hire technical employee. Reserch on drone technology. Distribute Task to the junior employee. Arrange meeting for issues. Reserch on best suitable battry and other components. Solving issues in weight-distribution of drone design. Handle design related and battry related issues.</p>
                    </div>
                </div>

                {/* <div className="timeline-box left ">
                    <div className="timeline-container">
                        <div className="timeline-logo">
                            <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
                        </div>
                        <h3 className="experience-designation m0 m-blue"> Designation </h3>
                        <h4 className="experience-company-name"> Company Name </h4>
                        <h5 className="experience-duration m0"> Month YYYY - Month YYYY </h5>

                        <p className="experience-description text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div> */}

                <div id="timeline-divider">
                    <div className="timeline-traveller">
                        <div>
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </div>
  )
}

export default Experience
