import React from 'react';

import './Post.css';

const post = (props) => {
    console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h4>{props.title}</h4>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

// Get access to props using higher order component by using HOC
// export default withRouter(post);

export default post;