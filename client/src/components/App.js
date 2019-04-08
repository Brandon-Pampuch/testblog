/**
 * Dependencies
 */
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import BlogGrid from './BlogGrid'
import initialState from '../../../data/initialState.json'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ...initialState
    }
  }

  render() {

    return(
  <Router>
      <div>
        <Route exact path="/" render={() => <BlogGrid allPosts={this.state.blogPosts} />}/>
        <Route path="/BlogPost" render={() => <p>hello</p>}/>
      </div>
  </Router>
    ) 
  }
}

export default App;