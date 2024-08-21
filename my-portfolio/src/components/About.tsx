import React from 'react'
import '../css/About.css'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  const workExperience =
    [
      {
          order: 2,
          date: "02/24 - 06/24",
          jobTitle: "Research & Development",
          company: "Van Berge Henegouwen",
          description: "During my internship, I worked on creating a product from start to finish. I worked on 3D graphics with Three.js, web development with Typescript, and embedded programming through the Arduino library and C++."
      },
      {
          order: 1,
          date: ["08/23 - 01/24", "08/24 - Present"],
          jobTitle: "Research & Development",
          company: "Chipsoft",
          description: "Worked on web development projects together with a team of students. I used programming languages: C# & Typescript, and also worked with frameworks: Next.js & Blazor."
      },
      {
          order: 3,
          date: "01/20 - Present",
          jobTitle: "Helpdesk / Administration",
          company: "Compuclub",
          description: "My activities at Compuclub include managing company's email correspondence, invoicing payments, and various tasks such as creating logos/posters and more in Photoshop."
      }
  ]


  return (
    <section className="box about-section" id="about">
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} xl={7}>
          <div className='experience-content'>
            <h1>Work Experience</h1>
            <p>My previous relevant work experience</p>
            <div className="experiences-container">
              {workExperience.slice().sort((x, y) => x.order - y.order).map(x => (
                <Container className='experience' key={x.order}>
                  <div className='w-25'>
                    {Array.isArray(x.date) ? (
                      <div className='d-flex flex-column'>
                        {x.date.map((date, index) => (
                          <div className='me-4 fw-bold' key={index}>{date}</div>
                        ))}
                      </div>
                    ) : ( <div className='me-4 fw-bold'>{x.date}</div>)}
                  </div>
                  <div className='d-flex flex-column w-100'>
                    <div className='d-flex fw-bold'>
                      <div className='text-start'>{x.jobTitle}</div>
                      <div className=''>&nbsp;-&nbsp;</div>
                      <div className=''>{x.company}</div>
                    </div>
                    <div className='text-start '>{x.description}</div>
                  </div>
                </Container>
              ))}
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
