import React from 'react'

const Contact = () => {
  return (
    <div>
        <section id="contact">
            <h1 class="section-heading mb50px">
                <span>
                    <i class="far fa-address-card"></i>
                </span>
                <span> Contact </span>
            </h1>
            <div id="contact-container">

                <div id="contact-form-container">
                    <form id="contact-form"  action="/php1/28_form.php" method= "post">
                        <input id="input-name" name="name" type="text" required placeholder="Your Name" />
                        <input id="input-email" name="email" type="text" required placeholder="Your Email"/>
                        <textarea id="input-messege" name="messege" rows="2" cols={40} placeholder="Message"></textarea>
                        <button class="sub-btn" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div id="my-details-container">

                    <h3> Get In touch </h3>
                    <p> This is contact form to contact me. please feel free to contact me. I am full-stack website developer in python. I have also familiar with Flask and Chatbot-development. </p>

                    <h3> My Address </h3>
                    <div class="my-details-info-container">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Bilimora, Gujarat, India</span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="fas fa-mobile-alt"></i>
                        <span>9662998555</span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="far fa-envelope"></i>
                        <span>admin@prashantghadiali.com</span>
                    </div>
                </div>
            </div>

            <div class="text-center social-icons">

                <ul class="no-list-style horizontal-list">

                    <li>
                        <a href="https://www.linkedin.com/in/manisha-khattar-b5663641/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://stackoverflow.com/users/5608414/manisha?tab=profile" target="_blank">
                            <i class="fab fa-stack-overflow"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://plus.google.com/u/0/103030702784925512939" target="_blank">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/manishakhattar54">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.quora.com/profile/Manisha-Khattar" target="_blank">
                            <i class="fab fa-quora"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
      
    </div>
  )
}

export default Contact
