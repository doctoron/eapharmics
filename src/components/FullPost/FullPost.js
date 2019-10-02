import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
        if (this.props.id) {
            return (
            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <Button className="Delete">Delete</Button>
                    </div>
                </div>
            )
        )}
        return post;
    }
}
export default FullPost;