import { Col } from "react-bootstrap";
export const ProjectCard = ({title, description, imgURL, projURL}) => {
    return (
        <Col  sm= {6} md = {4}>
            <div className="proj-imgbx">
                <img src={imgURL} alt = "proj_img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <p><a href = {projURL} target="_blank" rel="noreferrer">Link To Project</a></p>
                </div>
            </div>
        </Col>
    )
}