import { useState, useEffect } from "react";
import EmailForm from '../components/EmailForm';
import { Container, Row, Col } from 'react-bootstrap';  // <-- Import Bootstrap components

function About(props) {
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
        const response = await fetch('./about.json');
        const data = await response.json();
        setAbout(data);
    }
    useEffect(() => { getAboutData() }, []);

    function openResume() {
        window.open('SanitizedResume.pdf', '_blank');
    }
    const loaded = () => (
        <Container className="main-container">
            <Row className="my-4">
                <Col md={4}>
                    <img className='headshot img-fluid' src={about.headshot} alt="me"/>
                </Col>
                <Col md={8}>
                    <article className="article">
                        <p className="">My past careers in: the culinary industry, outdoor leadership, I have a passion for creativity and working in high pressure environments. I love playing my acoustic guitar, my gecko, and video games. I love trying gyros at every food truck I see.</p>
                        <p className="">For business inquiries, contact {about.email}</p>
                        <p className="">{about.bio}</p>
                    </article>
                        <button className="button" onClick={openResume}>Download Resume</button>  {/* Add a link to your resume here */}
                </Col>
            </Row>
            <Row className="justify-content-center my-4">
                <Col md={6}>
                    <EmailForm />
                </Col>
            </Row>
        </Container>
    );

    return (
        about ? loaded() : <h1>Loading...</h1>
    );
}

export default About;