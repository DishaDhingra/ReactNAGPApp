import React, { Component } from 'react';
import axios from 'axios';

import Post from '../post/post';
import './postListing.css';
import FullPost from '../fullPost/fullPost';

class PostListing extends Component {
    state = {
        posts: [],
        error: false
    }
    componentDidMount() {
        // async call
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }));

    }

  
    render() {
        let posts = <p> Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    id = {post.id}
                
                />;
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default PostListing;
