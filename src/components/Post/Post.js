import React from 'react';

import './post.css';
import { Link } from 'react-router-dom';

const post = (props) => (
    <div className="Post" >
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
        <Link to={`/posts/${props.id}`}>See Details</Link>
    </div>

);

export default post;
