import React from 'react'
import { Jumbotron, Container, Card } from 'reactstrap';

const Generics = (props) => {
    return (
        <div >
            <Jumbotron fluid >
                <Container fluid>
                    <Card body inverse color="primary"><b>Our Services</b></Card>
                </Container>

            </Jumbotron>
        </div>
    )
}
export default Generics;