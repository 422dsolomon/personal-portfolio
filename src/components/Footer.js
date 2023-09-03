import { Container, Row, Col} from "react-bootstrap"
import logo from '../assets/img/DSLogo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className = "text-center text-sm-end">
                        <div className="social-icon">
                            <a href = "https://www.linkedin.com/in/daniel-solomon-6310a11b1/"><img src = {navIcon1} alt = ""/></a>
                            <a href = "https://github.com/422dsolomon"><img src = {navIcon2} alt = ""/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved Danny Solomon</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}