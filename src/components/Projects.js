import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from '../assets/img/WNoseSmaller.jpeg'
import projImg2 from "../assets/img/GPTLogo.jpeg"
import projImg3 from "../assets/img/acousticbiosenor.jpeg"
import projImg4 from "../assets/img/homealone.jpeg"
import projImg5 from "../assets/img/HTMAA.jpeg"


export const Projects = () => {

    const projects1 = [
        {
            title: "Biosensing Nose",
            description: " Using sensor fusion with gas sensors to calculate the concentration of a molecule in biological liquids",
            imgURL: projImg1,
            projURL: "https://github.com/422dsolomon/Artificial_Nose_For_Biochemical_Applications",
        },
        {
            title: "AcousticBiosensingGPT",
            description: " Fine-tuned a ChatGPT with acoustic biosensor information to make the model more useful for acoustic biosensing projects",
            imgURL: projImg2,
            projURL: "https://github.com/422dsolomon/AcousticBiosensingGPT",
        },
        {
            title: "Cortisol Biosensor",
            description: " Developing device to dyanamically record level of cortisol within the body non-invasively",
            imgURL: projImg3,
            projURL: "https://docs.google.com/presentation/d/1mbTiDenAVt0Em48ywY0W6dbDfVX2X0h6iMoeN43k9wU/edit?usp=sharing"
        },
    ];
    const projects2 = [
        {
            title: "Home Alone Style Toilet Paper Turret",
            description: " Integrated software for TP shooter that allows for manual control with buttons, face tracking, and remote control using a webpage",
            imgURL: projImg4,
            projURL: "https://fab.cba.mit.edu/classes/863.22/Harvard/week13.html",
        },
        {
            title: "HTM(A)A Website",
            description: " Website with 14 weeks worth of projects, all teaching principles of digital fabrication",
            imgURL: projImg5,
            projURL: "https://fab.cba.mit.edu/classes/863.22/Harvard/people/Daniel/index.html",
        },
    ];
    return (
        <section className="project" id= "project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Developing complex projects to progress my skills and explore areas that I am passionate about</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey = "first">
                        <Nav variant = "pills" className="nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
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