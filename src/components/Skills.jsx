import React from 'react'

const Skills = () => {

  return (
    <div>
      <section id="skills">
            <h1 className="section-heading mb25px ">
                <span>
                    <i className="fas fa-chalkboard-teacher"></i>
                </span>
                <span> SKILLS </span>
            </h1>

            <div id = "skills-container" className="skills-display">

                <div className="skill-progress">
                    <div className="fifty-percent mb-blue" data-bar-width = "65">
                        <div className="skill-name">
                            <span> React </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-five-percent mb-orange" data-bar-width = "85">
                        <div className="skill-name">
                            <span> HTML </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-percent mb-light-purple" data-bar-width = "80">
                        <div className="skill-name">
                            <span> CSS </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="fifty-percent mb-teal" data-bar-width = "65">
                        <div className="skill-name">
                            <span> Javascript </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="fifty-percent mb-blue" data-bar-width = "65">
                        <div className="skill-name">
                            <span> Wordpress </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-percent mb-light-purple" data-bar-width = "80">
                        <div className="skill-name">
                            <span> Python </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="fifty-percent mb-light-purple" data-bar-width = "65">
                        <div className="skill-name">
                            <span> Node </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="fifty-percent mb-teal" data-bar-width = "65">
                        <div className="skill-name">
                            <span> Next.js </span>
                        </div>
                    </div>
                </div>
                <div className="skill-progress">
                    <div className="eighty-five-percent mb-orange" data-bar-width = "85">
                        <div className="skill-name">
                            <span> Django </span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </div>
  )
}

export default Skills
