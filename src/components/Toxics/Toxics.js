import React from 'react';
import { Jumbotron, Container, Card, Button } from 'reactstrap';

const Toxics = (props) => {
    return (
        <div >
            <Jumbotron fluid className='epaHero'>
                <Container fluid>
                    <Card body inverse color="success"><b> USEPA Toxic Chemicals</b>
                        <form>
                            <input>
                            </input> <br /><br />
                            <Button color="warning">Search</Button>
                        </form>
                    </Card>
                </Container>

            </Jumbotron>
        </div>
    )
}
export default Toxics;