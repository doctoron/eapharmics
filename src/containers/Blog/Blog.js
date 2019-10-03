import React, { Component } from 'react';
import axios from 'axios';

import { Jumbotron, Container, Card, CardBody } from 'reactstrap';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';


// import { Route, NavLink, Switch } from 'react-router-dom';
// import asyncComponent from '../../hoc/asyncComponent';

// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Makesh'
                    };
                });
                this.setState({ posts: updatedPosts });
                // console.log(response)
            })
            .catch(error => {
                //console.log(error);
                this.setState({ error: true })
            });
    }
    postSelectorHandler = (id) => {
        this.setState({ selectedPostId: id });
    }
    
    render () {
        let posts = <h2 style={{ textAlign: 'center' }}>Oh oh, something went wrong! </h2>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                // array of jsx elements obtained using map method to get a single Post
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectorHandler(post.id)} />
            });
        }

        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Card>
                            <h2 style={{ color: '#0F120D' }}>Blog</h2>
                            <CardBody className="Posts">
                                {posts}
                            </CardBody>
                            <CardBody>
                                <FullPost id={this.state.selectedPostId} />
                            </CardBody>
                            <CardBody>
                                <NewPost />
                            </CardBody>
                        </Card>
                    </Container>

                </Jumbotron>
            </div>
        );
    };
};

export default Blog;