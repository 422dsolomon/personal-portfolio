import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

export const MobileSkills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
  return (
    <section className="mobileskill" id ="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="mobileskill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Gained a wide variety of differnt skills from doing diverse projects</p>
                            <Carousel responsive={responsive} infinite = {true} className="mobileskill-slider">
                                <div className="item">
                                    <h3>Fullstack Development</h3>
                                </div>
                                <div className="item">
                                    <h3>Digital Fabrication</h3>
                                </div>
                                <div className="item">
                                    <h3>Experimental Design</h3>
                                </div>
                                <div className="item">
                                    <h3>Cell Culturing</h3>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="mobilebackground-image-left" src = {colorSharp} alt="colorSharp"/>
        </section>
  )
}
