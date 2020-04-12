import React, { Component } from 'react';
import axios from 'axios';

import Post from '../post/post';
import './postListing.css';

class PostListing extends Component {
    state={
        posts:[],
        selectedPostId:null,
        error:false
    }
    componentDidMount() {
        // async call
        axios.get('/posts')
            .then(
                response => {
                    const posts =response.data.slice(0,4);
                    const updatedPosts = posts.map(post => {
                        return{
                            ...post,
                            author:'Shubhra'
                        }
                    });
                    this.setState({posts:updatedPosts});}
                    // console.log(response.data);}
            ).catch(error =>{
                this.setState({error:true});
                console.log(error);
        });

    }

    postSelectHandler = (id) => {
        this.setState({selectedPostId:id});
    }
    render () {
        let posts = <p> Something went wrong</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return<Post
                    key = {post.id}
                    title={post.title}
                    author ={post.author}
                    clicked ={() => this.postSelectHandler(post.id)}
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
