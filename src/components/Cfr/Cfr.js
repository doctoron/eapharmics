import React from 'react'
import { Jumbotron, Container, Card } from 'reactstrap';

import './Cfr.css';

const Cfr = (props) => {
    return (
        <div className='cfr'>
            <Jumbotron fluid >
                <Container fluid>
                    <Card body inverse color="primary"><b>eSTAR - Electronic Stability Testing Analyses & Reporting</b></Card>
                </Container>

            </Jumbotron>
        </div>
    )
}
export default Cfr;