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



function App() {
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
        
      </>
    );
}

export default App;
