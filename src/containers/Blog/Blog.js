import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';


// import { Route, NavLink, Switch } from 'react-router-dom';
// import asyncComponent from '../../hoc/asyncComponent';

// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Makesh'
                    };
                });
                this.setState({ posts: updatedPosts });
                // console.log(res)
            });
    }

    render () {
        // array of jsx elements obtained using map method to get a single Post
        const posts = this.state.posts.map(post =>{
            return <Post key={post.id} title ={post.title} />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                    {/* <FullPost /> */}
                    {/* <Post /> */}
                    {/* <Post /> */}
            </div>
        );
    };
};

export default Blog;