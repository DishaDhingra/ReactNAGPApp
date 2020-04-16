import React, { Component } from 'react';
import axios from 'axios'

import './newPost.css';

class NewPost extends Component {
    state = {
        id: '5',
        title: 'Post 5',
        content: 'This is Content',
        author: 'Suhas',
        createdAt: '10-01-2020',
        privacy: 'private'
    }

    postDataHandler = () => {
        const dataToPost = {
            id: this.state.id,
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            createdAt: this.state.createdAt,
            privacy: this.state.privacy
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToPost)
        };
        fetch('http://localhost:3001/posts', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

    };
    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <input type="text" value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })} />
                <label>Author</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Privacy</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <input type="date" value={this.state.createdAt} onChange={(event) => this.setState({ createdAt: event.target.value })} />
                <label>Created on</label>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
