import React from 'react'
import { Button } from 'semantic-ui-react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const Contact = () => {
    const sendEmail = (e) =>{
        e.preventDefault();
        toast.success("Your Response is Sent")
        // console.log(process.env.REACT_APP_API_KEY)
        // console.log(process.env.REACT_APP_SERVICE_ID)
        emailjs.sendForm('service_jg2t5ba','template_s8tuupo', e.target, 'r9JUSpE2a_MadvM1k')
        // emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target, 'process.env.REACT_APP_API_KEY')
    }

  return (
    <div>
        <section id="contact">
            <h1 className="section-heading mb50px">
                <span>
                    <i className="far fa-address-card"></i>
                </span>
                <span> Contact </span>
            </h1>
            <div id="contact-container">

                <div id="contact-form-container">
                    <form id="contact-form" onSubmit={sendEmail}>
                        <input id="input-name" name="user_name" type="text" required placeholder="Your Name" />
                        <input id="input-email" name="user_email" type="email" required placeholder="Your Email"/>
                        <textarea id="input-messege" name="message" rows="2" cols={40} placeholder="Message"></textarea>
                        <Button className="sub-btn" type="submit">SEND MESSAGE</Button>
                    </form>
                </div>
                <div id="my-details-container">

                    <h3> Get In touch </h3>
                    <p> This is contact form to contact me. please feel free to contact me. I am full-stack website developer in Django and MERN. I have also familiar with Laravel </p>

                    <h3> My Address </h3>
                    <div className="my-details-info-container">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Bilimora, Gujarat, India</span>
                    </div>
                    <div className="my-details-info-container">
                        <i className="fas fa-mobile-alt"></i>
                        <span>7567978505</span>
                    </div>
                    <div className="my-details-info-container">
                        <i className="far fa-envelope"></i>
                        <span>admin@prashantghadiali.com</span>
                    </div>
                    <div className="my-details-info-container">
                        <i className="far fa-envelope"></i>
                        <span>er.prashantghadiali@gmail.com (for fast response)</span>
                    </div>
                </div>
            </div>

            <div className="text-center social-icons">

                <ul className="no-list-style horizontal-list">

                    <li>
                        <a href="https://www.linkedin.com/in/manisha-khattar-b5663641/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://stackoverflow.com/users/5608414/manisha?tab=profile" target="_blank">
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://plus.google.com/u/0/103030702784925512939" target="_blank">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/manishakhattar54">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.quora.com/profile/Manisha-Khattar" target="_blank">
                            <i className="fab fa-quora"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
      
    </div>
  )
}

export default Contact
