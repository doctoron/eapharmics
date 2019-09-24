import React from 'react';
import { Jumbotron, Container, Card } from 'reactstrap';

const About = (props) => {
    return (
        <div >
            <Jumbotron fluid >
                <Container fluid>
                    <Card body inverse color="primary"><b>About</b></Card>
                </Container>

            </Jumbotron>
        </div>
    )
}
export default About;