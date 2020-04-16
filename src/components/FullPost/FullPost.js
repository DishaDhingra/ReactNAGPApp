import React, { Component } from 'react';
import axios from 'axios';

import './fullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    };
    componentDidMount() {
        if (this.props.match.params.id) {
            fetch('http://localhost:3001/posts/' + this.props.match.params.id)
                .then(response => response.json())
                .then(data => this.setState({ loadedPost: data }));

        }
    }

    render() {
        let post = null;
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.author}</p>
                    <p>{this.state.loadedPost.content}</p>
                    <p>{this.state.loadedPost.createdAt}</p>
                    <p>{this.state.loadedPost.privacy}</p>

                </div>

            );
        }

        return post;
    }
}

export default FullPost;
