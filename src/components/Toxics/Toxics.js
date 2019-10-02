import React, { Component } from 'react';
import { Jumbotron, Container, Card, Button } from 'reactstrap';

import ToxinList from '../Chemicals/ToxinList';
import './Toxics.css';
import Axios from 'axios';

class ToxicList extends Component {
    state = {
        toxins: []
    }
    componentDidMount () {
        // Axios.get('https://eapharmics.firebaseio.com/Chemical/aZmOqXgRtJN2MPK5sGXjH25WkT83.json?auth=Jk9tQwysQNoVWJGPJ0OrEvhApWFuFEnMjLstzZLN')
        Axios.get('https://eapharmics.firebaseio.com/data.json')
            .then(response => {
                const toxins = response.data.slice(0, 6);
                const updatedToxins = toxins.map(toxin => {
                    return {
                        ...toxin,
                        Chemical: 'EPA Listed'
                    };
                });
                this.setState({ toxins: updatedToxins });
                console.log(response);
            });
    }
    render () {
        const toxins = this.state.toxins.map(toxin => {
            return <ToxinList key={toxin.id} />
        });
        return (
            <div >
                <Jumbotron fluid className='epaHero'>
                    <Container fluid>
                        <Card body inverse color="danger" style={{ opacity: 0.7 }}><b> USEPA Toxic Chemicals</b>
                            <form>
                                <input>
                                </input> <br /><br />
                                <Button color="warning"> Search</Button>
                            </form>
                        </Card>
                        {toxins}
                    </Container>

                </Jumbotron>
            </div >
        )
    }
}
export default ToxicList;