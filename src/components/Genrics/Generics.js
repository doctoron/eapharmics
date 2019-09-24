import React from 'react';
import { Jumbotron, Container, Card, Button } from 'reactstrap';

const Generics = (props) => {
    return (
        <div >
            <Jumbotron fluid className='fdaHero'>
                <Container fluid>
                    <Card body inverse color="success" style={{opacity: 0.8}}><b>USFDA Generic Drugs</b>
                        <form>
                            <input>
                            </input> <br /><br />
                            <Button color="primary">Search</Button>
                        </form>
                    </Card>
                </Container>

            </Jumbotron>
        </div>
    )
}
export default Generics;