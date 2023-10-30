import React from 'react';
import './App.css';
import '../src/components/script'
import Chatbot from './components/Chatbot';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const progressBars = useRef([]);

  const navMenuClickHandler = (event) => {
    event.preventDefault();

    const targetSectionID = event.target.textContent.trim().toLowerCase();
    const targetSection = document.getElementById(targetSectionID);

    let interval = setInterval(() => {
      scrollVertically(targetSection, interval);
    }, 50);
  };

  const scrollVertically = (targetSection, interval) => {
    const targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
      clearInterval(interval);
      return;
    }
    window.scrollBy(0, 70);
  };

  const initialiseBar = (bar) => {
    bar.setAttribute('data-visited', false);
    bar.style.width = 0 + '%';
  };

  const fillBar = (bar) => {
    let currentWidth = 0;
    const targetWidth = bar.getAttribute('data-bar-width');
    const interval = setInterval(() => {
      if (currentWidth >= targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 5);
  };

  const checkScroll = () => {
    progressBars.current.forEach((bar) => {
      const barCoordinates = bar.getBoundingClientRect();
      if (
        bar.getAttribute('data-visited') === 'false' &&
        barCoordinates.top <= window.innerHeight - barCoordinates.height
      ) {
        bar.setAttribute('data-visited', true);
        fillBar(bar);
      } else if (barCoordinates.top > window.innerHeight) {
        bar.setAttribute('data-visited', false);
        initialiseBar(bar);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    progressBars.current = document.querySelectorAll('.skill-progress > div');
    progressBars.current.forEach((bar) => {
      initialiseBar(bar);
    });
  }, []);
    return (
      <>
       <div id="particles-js"></div> <div className="count-particles"> <span className="js-count-particles"></span></div>
        <Header />
        <main>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Portfolio />
          <Contact/>
        </main>
        <Chatbot />
        <ToastContainer />
      </>
    );
}

export default App;
