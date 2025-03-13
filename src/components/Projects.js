import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ei from "../assets/img/EI.jpg";
import swissre from "../assets/img/swiss-re.png";
import fnp from "../assets/img/fnp.png";
import wm from "../assets/img/wm.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SwissRe Costing Work Bench",
      description: `Writing Test Cases, Cypress with JavaScripts and RestAssured with Java, Code Review, Azure Devops`,
      imgUrl: swissre,
    },
    {
      title: "Educational Initiative - Mobile and MicroServices",
      description: "RestAssured and Appium with Java, Code Review, Jenkins Pipeline",
      imgUrl: ei,
    },
    {
      title: "Educational Initiative - Vernacular",
      description: "Cypress with Javascripts, Code Review, Jenkins Pipeline",
      imgUrl: ei,
    },
    {
      title: "Ferns N Petals - Moody ( Review and Rating application",
      description: "Selenium, Code Review, Jenkins Pipeline",
      imgUrl: fnp,
    },
    {
      title: "Ferns N Petals - Vendor Portal",
      description: "Selenium, RestAssured, Appium with Java, Code Review, Jenkins Pipeline",
      imgUrl: fnp,
    },
    {
      title: "Waste Management",
      description: "Selenium, RestAssured, Appium with Java, Code Review, Jenkins Pipeline",
      imgUrl: wm,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
