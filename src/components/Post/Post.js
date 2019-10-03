import React from 'react';

import { Jumbotron, Container } from 'reactstrap';
import './Post.css';

const post = (props) => {
    console.log(props);
    return (
        <Jumbotron>
            <Container>
                <article className="Post" onClick={props.clicked}>
                    <h4>{props.title}</h4>
                    <div className="Info">
                        <div className="Author">{props.author}</div>
                    </div>
                </article>
            </Container>
        </Jumbotron>
    )
};


// Get access to props using higher order component by using HOC
// export default withRouter(post);

export default post;