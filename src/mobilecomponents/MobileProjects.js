import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png"
import blackbackground from '../assets/img/color-sharp.png'

export const MobileProjects = () => {
    const projects1 = [
        {
            title: "Biosensing Nose",
            description: " Using sensor fusion with gas sensors to calculate the concentration of a molecule in biological liquids",
            imgURL: blackbackground,
            projURL: "https://github.com/422dsolomon/Artificial_Nose_For_Biochemical_Applications",
        },
        {
            title: "Acoustic Biosensing GPT",
            description: " Fine-tuned a ChatGPT with acoustic biosensor information to make the model more useful for acoustic biosensing projects",
            imgURL: blackbackground,
            projURL: "https://github.com/422dsolomon/AcousticBiosensingGPT",
        },
        {
            title: "Cortisol Biosensor",
            description: " Developing device to dyanamically record level of cortisol within the body non-invasively",
            imgURL: blackbackground,
            projURL: "https://docs.google.com/presentation/d/1mbTiDenAVt0Em48ywY0W6dbDfVX2X0h6iMoeN43k9wU/edit?usp=sharing"
        },
    ];
    const projects2 = [
        {
            title: "Home Alone Style Toilet Paper Turret",
            description: " Integrated software for TP shooter that allows for manual control with buttons, face tracking, and remote control using a webpage",
            imgURL: blackbackground,
            projURL: "https://fab.cba.mit.edu/classes/863.22/Harvard/week13.html",
        },
        {
            title: "HTM(A)A Website",
            description: " Website with 14 weeks worth of projects, all teaching principles of digital fabrication",
            imgURL: blackbackground,
            projURL: "https://fab.cba.mit.edu/classes/863.22/Harvard/people/Daniel/index.html",
        },
    ];
  return (
    <section className="mobile-project" id= "project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Developing complex projects to progress my skills and explore areas that I am passionate about</p>
                    <Tab.Container id="mobile-projects-tabs" defaultActiveKey = "first">
                        <Nav variant = "pills" className="mobile-nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey ="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey ="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey ="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                    {
                                        projects1.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                key = {index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey = 'second'>
                                <Row>
                                    {
                                        projects2.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                key = {index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey = 'third'></Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp2" ></img>
        </section>
  )
}
