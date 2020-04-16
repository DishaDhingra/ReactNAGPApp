import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route,NavLink,Switch} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {
   
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">NewPost</a></li> */}
                            <li><NavLink to="/" exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:"#fa923f",
                                textDecoration:"underline"
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash:'#submit',
                                search:'?quick-submit=true'}}>NewPost</NavLink></li>
                   </ul>
                    </nav>
                </header> 
                {/* <Route path="/" exact render={() =><h1>Home</h1>}/> */}
                {/*  exact specify the correct path of the components */}
                <Switch>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
                <Route path="/:id" exact component={FullPost}/>
                </Switch>
                {/* <Posts/> */}
            </div>
        );
    }
}

export default Blog;