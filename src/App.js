import React, { Component } from 'react';

import  NewPost  from '../src/components/newPost/newPost';
import  FullPost  from '../src/components/fullPost/fullPost';
import  PostListing  from '../src/components/postsListing/postListing.js';
import { Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={PostListing} />} />
          <Route exact path="/createPost" component={NewPost} />} />
          <Route exact path="/posts/:id" component={FullPost} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
