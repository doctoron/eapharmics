import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

import axios from 'axios';
import './NewPost.css';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Makesh',
        submitted: false,
    }
    // componentDidMount = () => {
    //     // this.props.history.prelace('/posts';) if unauth
    //     console.log('DidMount', this.props)
    // }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response);
                //             this.props.history.push('/posts')
                //             // this.setState({
                //             //     submitted: true
                //             // })
            });
    }
    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to='/posts' />
        }
        return (
            <div>
            <Jumbotron>
                <Container>
                    <div className="NewPost">
                        {redirect}
                        <h2>Add a Post</h2>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                        <label>Content</label>
                        <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                        <label>Author</label>
                        <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                            <option value="Ron">Ron</option>
                            <option value="Omaar">Omaar</option>
                            <option value="Makesh">Makesh</option>

                        </select>
                        <Button color='success' onClick={this.postDataHandler}>Add Post</Button>
                    </div>
                </Container>
            </Jumbotron>
            </div>
        );
    }
}

export default NewPost;