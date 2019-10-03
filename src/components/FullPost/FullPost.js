import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data })
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log('Deleted', response);
            })
    };

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>
        }
        if (this.state.loadedPost) {
            post = (
                <Jumbotron >
                    <Container >
                        <div className="FullPost">
                            <h4 className="title">{this.state.loadedPost.title}</h4>
                            <p className="body">{this.state.loadedPost.body}</p>
                            <div className="Edit">
                                <Button onClick={this.deletePostHandler} color="danger" className="delete">Delete</Button>
                            </div>
                        </div>
                    </Container>
                </Jumbotron>
            );
        }
        return post;
    }
}
export default FullPost;