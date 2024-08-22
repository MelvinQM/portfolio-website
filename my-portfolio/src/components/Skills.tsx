import '../css/Skills.css'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { CircularSliderWithChildren } from 'react-circular-slider-svg';

interface Skills {
  name: string,
  percentage: number,
  relatedSkills?: string[]
}

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills : Skills[] = [
    {
      name: "Web Development",
      percentage: 75,
      relatedSkills: [".NET", "Vue", "React"]
    },
    {
      name: "Embedded Programming",
      percentage: 85,
      relatedSkills: ["C/C++", "PlatformIO", "Arduino"]
    },
    {
      name: "Teamwork",
      percentage: 90,
    },
    {
      name: "Software Development",
      percentage: 80,
      relatedSkills: ["Java", "Python"]
    },
    {
      name: "Game Development",
      percentage: 65,
      relatedSkills: ["C#", "Unity"]
    },
  ]

  return (
    <section className="skill skills-section" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Some of the skills I'm most proud of.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
    	                      {skills.map((skill) => (
                              <div className='item'>
                                <div className="circular-slider-wrapper">
                                  <CircularSliderWithChildren
                                    handle1={{ value: skill.percentage }}
                                    arcColor={getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim()}
                                    arcBackgroundColor="transparent"
                                  />
                                  <div className='skill-percentage-container'>
                                    <h5>{skill.percentage}%</h5>
                                  </div>
                                </div>

                                <h5>{skill.name}</h5>
                                <h6>{skill.relatedSkills?.map((skill) => (
                                  <>&nbsp;{skill}&nbsp;</>
                                ))}</h6>
                              </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
