import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import email from "../assets/img/email.png"
import mobile from "../assets/img/mobile.png"

export const Contact = () => {

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md = {6}>
                        <img src = {contactImg} alt="Contact Us" className="app__contact-img"/>
                    </Col>
                    <Col md = {6}>
                        <h2>Get In Touch</h2>
                        <div className="app__footer-cards">
                            <div className="app__footer-card ">
                                <img src={email} alt="email" className="app__footer-img"/>
                                <a href="mailto:422dsolomon@gmail.com" className="p-text">422dsolomon@gmail.com</a>
                            </div>
                            <div className="app__footer-card" >
                                <img src={mobile} alt="phone" className="app__footer-img"/>
                                <a href="tel:+1 (781) 879-9380" className="p-text">+1 (781) 879-9380</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}