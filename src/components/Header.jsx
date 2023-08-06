import React from 'react'
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import  { useCallback } from "react";

const Header = () => {
  const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
    }, []);
  
  return (
    <div>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      <header id="body-header">
        <nav>
            
            <div class = "dropdown-menu text-right">
                <div className="bars">
                    <i className="fas fa-bars"></i>
                </div>
                <div class ="dropdown-list nav-menu">
                    <ul class = "no-list-style">
                        <li >
                            <a href="#"> Home </a>
                        </li>
                        <li>
                            <a href="#about"> About </a>
                        </li>
                        <li>
                            <a href="#skills"> Skills </a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#education">Education</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>

             </div>   

            <ul className="no-list-style horizontal-list text-center nav-menu">
                <li>
                    <a href="#"> Home </a>
                </li>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#skills"> Skills </a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </nav>

        <div id="name-social-container">
            <div className="text-center">
                <h1 id="my-name">Prashant Ghadiali</h1>
            </div>
            <div>
                <ul className="no-list-style horizontal-list text-center social-icons">
                    <li>
                        <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-quora"></i>
                        </a>
                    </li>
                </ul>

            </div>

        </div>

    </header>
    </div>
  )
}

export default Header
