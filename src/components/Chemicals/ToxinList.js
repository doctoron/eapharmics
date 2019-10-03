import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

import './ToxinList.css';

class ToxinList extends Component {
    state = {
        LoadedToxins: null
    }



    componentDidUpdate () {
        if (this.props.id) {
            if (!this.state.loadedToxins || (this.state.loadedToxins && this.state.loadedToxins.id !== this.props.id)) {
                axios.get('https://eapharmics.firebaseio.com/.json' + this.props.id)
                    .then(response => {
                        this.setState({ loadedToxins: response.data })
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                        this.setState({ error: true })
                    });
            }
        }
    }

    render () {
        let toxin = <p style={{ textAlign: 'center' }}> Select Chemcial</p>
        if (this.props.id) {
            toxin = <p style={{ textAlign: 'center' }}> Loading...!> </p>
        }
        if (this.state.loadedToxins) {
            toxin = (
                <Container>
                    <ul>
                        {this.state.toxins.map(toxin =>
                            <li key={toxin.id}>{toxin.chemical}</li>
                        )}
                    </ul>
                </Container>
            );
        }
        return toxin;
    }
}
export default ToxinList;