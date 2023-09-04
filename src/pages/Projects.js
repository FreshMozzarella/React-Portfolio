import { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Projects(props) {
    const [projects, setProjects] = useState(null);
    const getProjectData = async () => {
        const response = await fetch('./projects.json')
        const data = await response.json()
        setProjects(data)
    };

    useEffect(() => {
        getProjectData();
    }, []);

    const loaded = () => {
        return (
            <Container className='main-container project-container'>
                <Row className='justify-content-center '>
                    {projects.map((project) => (
                        <Col md={4} sm={12} className="mb-4 " key={project.name}>
                            <Card className="h-100 ">
                                <div className='projectimage' style={{backgroundImage: `url(${project.image})`}}></div>
                                <Card.Body className='theme-card-bg'>
                                    <Card.Title>{project.name}</Card.Title>
                                </Card.Body>
                                <Card.Footer className='theme-card-bg'>
                                    <a href={project.git} className="button">Github</a>
                                    <a href={project.live} className="button">Live site</a>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
    return (
        projects ? loaded() : <h1>Loading...</h1>
    );
}

export default Projects;