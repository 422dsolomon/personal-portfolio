import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"

export const Projects = () => {

    const projects = [
        {
            title: "business startup",
            description: " Design & Development",
            imgURL: projImg1,
        },
    ];
    return (
        <section className="project" id= "project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Need to fill in</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey = "first">
                        <Nav variant = "pills" defaultActiveKey= "/home">
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
                                        projects.map((project,index) => {
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
                            <Tab.Pane eventKey = 'second'>filler</Tab.Pane>
                            <Tab.Pane eventKey = 'third'>filler</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp2" ></img>
        </section>
    )
}