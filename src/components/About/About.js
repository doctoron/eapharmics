import React from 'react';
import { Jumbotron, Container, Card } from 'reactstrap';
import './About.css';

import './About.css';

const About = (props) => {
    return (
        <div className="about">
            <Jumbotron fluid >
                <Container fluid>
                    <Card body inverse color="primary"><b>About</b></Card>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default About;