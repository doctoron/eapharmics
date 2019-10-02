import React from 'react';
import axios from 'axios';

class ToxinList extends React.Component {
    state = {
        toxins: []
    }

/* axios.get('https://PROJECT-NAME.firebaseio.com/users/' + user.uid + '.json?auth=DATABASE-SECRET')
    .then((response) => {
    console.log(response)
}); */

    componentDidMount () {
        axios.get('https://eapharmics.firebaseio.com/Chemical/aZmOqXgRtJN2MPK5sGXjH25WkT83.json?auth=Jk9tQwysQNoVWJGPJ0OrEvhApWFuFEnMjLstzZLN')
            .then(res => {
                console.log(res);
                const toxins = res.json;
                this.setState({ toxins });
            })
    }

    render () {
        return (
            <ul>
                {this.state.toxins.map(toxin =>
                    <li key={toxin.id}>{toxin.chemical}</li>
                )}
            </ul>
        )
    }
}
export default ToxinList;