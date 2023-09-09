
import { useState, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const MobileBanner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Fullstack Developer", "Biomedical Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return  () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/1.9)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
  return (
    <section className="mobilebanner" id= "home">
        <Container>
            <Row className="align-items-center">
                <Col xs = {12} md = {6} xl ={7}>
                    <div >
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>{`Hi I'm Danny `}<span className="wrap">{text}</span></h1>
                        <p>My name is Danny Solomon. I am a 2023 graduate from Harvard College with a concentration in biomedical engineering. I am passionate about the intersection of health and technology, aiming to utilize innovative technological solutions to advance healthcare. I have proficiency in software engineering, cell culturing, experimental design and digital fabrication, enabling me to tackle complex projects effectively.  
                            As a dedicated student-athlete throughout my four years in college, I have honed my communication, leadership, and teamwork skills. 
                            These skills and experiences merge seamlessly with my passion for healthcare technology, allowing me to contribute effectively within this dynamic field.</p>
                            <a href = "#connect"><button className='vvd'>Let's Connect <ArrowRightCircle size = {25}/></button></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}