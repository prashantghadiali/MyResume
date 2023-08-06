import React from 'react'
import cal from '../images/Calculator.png'
import AI from '../images/GenerativeAI.png'
import FetchAPIImage from '../images/API Fetch.png'
import MusicPlayerUI from '../images/MusicPlayerUI.png'

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
            <h1 class="section-heading mb75px">
                <span>
                    <i class="fas fa-th-list"></i>
                </span>
                <span> Portfolio </span>
            </h1>

            <div id="portfolio-container">
                <div class="portfolio-image-container">
                    <a href="https://github.com/prashantghadiali/CashHubUI" target="_blank" rel="noopener noreferrer">
                    <img src="https://user-images.githubusercontent.com/120317562/258452360-f5038593-a49b-465e-b416-9afabb459f8e.png" width={70} />
                    <div class="portfolio-details">
                        <p>
                            Cash App UI (Hackathon Challenge)
                        </p>
                    </div></a>
                </div>
                <div class="portfolio-image-container">
                    <a href="https://github.com/prashantghadiali/ChatbotOpenSource" target="_blank" rel="noopener noreferrer">
                    <img src={AI} />
                    <div class="portfolio-details">
                        <p>
                            LLMs Chatbot Hackathon - Generative AI (Large Language Models- Langchain and Flowise AI used)
                        </p>
                    </div></a>
                </div>
                <div class="portfolio-image-container">
                    <a  href="https://codesandbox.io/s/calculator-project-forked-ftod7c?file=/src/index.js" target="_blank" rel="noopener noreferrer" >
                    <img src={cal} />
                    <div class="portfolio-details">
                        <p>
                            Calculator Mini Project Javascript
                        </p>
                    </div></a>
                </div>
                <div class="portfolio-image-container">
                    <a href="https://github.com/prashantghadiali/AI_Jarvis_project" target="_blank" rel="noopener noreferrer">
                    <img src="https://git-scm.com/images/logos/2color-lightbg@2x.png" width={80} />
                    <div class="portfolio-details">
                        <p>
                            AI voice chatbot project
                        </p>
                    </div></a>
                </div>
                
                <div class="portfolio-image-container">
                    <a href="https://github.com/prashantghadiali/movies_API_project" target="_blank" rel="noopener noreferrer">
                    <img src={FetchAPIImage} width={50} />
                    <div class="portfolio-details">
                        <p>
                            API Fetch and Search (Like Google Search)
                        </p>
                    </div></a>
                </div>
                <div class="portfolio-image-container">
                    <a href="https://codesandbox.io/s/music-player-1-forked-b4v1ho" target="_blank" rel="noopener noreferrer">
                    <img src={MusicPlayerUI} />
                    <div class="portfolio-details">
                        <p>
                            MusicPlayerUI Frontend HTML/CSS 
                        </p>
                    </div></a>
                </div>
                <div class="portfolio-image-container">
                    <a href="https://github.com/prashantghadiali/Python-Practice-codes" target="_blank" rel="noopener noreferrer">
                    <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" href="https://github.com/prashantghadiali/Python-Practice-codes" />
                    <div class="portfolio-details">
                        <p>
                            Python Practice Codes
                        </p>
                    </div></a>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Portfolio
