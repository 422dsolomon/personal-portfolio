import { Container, Row, Col } from "react-bootstrap";
import email from "../assets/img/email.png"
import mobile from "../assets/img/mobile.png"

export const MobileContact = () => {
  return (
    <section className="mobilecontact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md = {6}>
                        <h2>Get In Touch</h2>
                        <div className="mobil__footer-cards">
                            <div className="mobile__footer-card ">
                                <img src={email} alt="email" className="moile__footer-img"/>
                                <a href="mailto:422dsolomon@gmail.com" className="p-text">422dsolomon@gmail.com</a>
                            </div>
                            <div className="mobile__footer-card" >
                                <img src={mobile} alt="phone" className="mobile__footer-img"/>
                                <a href="tel:+1 (781) 879-9380" className="p-text">+1 (781) 879-9380</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}
