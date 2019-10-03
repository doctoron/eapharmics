import React, { Component } from 'react';
import { Jumbotron, Container, Card, CardBody } from 'reactstrap';

import axios from 'axios';
import ToxinList from '../Chemicals/ToxinList';
import './Toxics.css';



class ToxicList extends Component {
    state = {
        toxins: [],
        selectedToxinId: null,
        updatedToxins: [],
        error: false
    }
    componentDidMount () {
        axios.get('https://eapharmics.firebaseio.com/.json')
        // Over 1642 Chemicals
            .then(response => {
                const toxins = response.data.slice(0, 200);
                const updatedToxins = toxins.map(toxin => {
                    return {
                        ...toxins
                    };
                });
                this.setState({ toxins: updatedToxins })
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true })
            });
    }
    toxinSelectorHandler = (id) => {
        this.setState({ selectedToxinId: id })
    }

    render () {
        let toxins = <h2 style={{ textAlign: 'center' }}>Oh oh, something went wrong! </h2>
        if (!this.state.error) {
            toxins = this.state.toxins.map(toxin => {
                return <ToxinList
                    key={toxins.id}
                    toxin={toxin.chemical}
                    clicked={() => this.toxinSelectorHandler(toxins.id)} />
            })
        }

        return (
            <Jumbotron>
                <Container>
                    <h3 style={{ color: '#0f120d' }}>Toxin List</h3>
                    <Card>
                        <CardBody className='toxins'>
                            {this.state.updatedToxins}
                            <ToxinList />
                        </CardBody>
                        <ul >
                            <li>ToxinList.js</li>
                            <li></li>
                            <li></li>
                        </ul >
                    </Card>
                </Container>
            </Jumbotron>
        )
    }
}
export default ToxicList;