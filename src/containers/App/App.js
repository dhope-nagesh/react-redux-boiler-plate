import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { HashRouter as Router, Route } from 'react-router-dom'
import Header from '../../components/Header/Header';
import TodoList from '../../components/TodoList/TodoList';
import Todo from '../../components/Todo/Todo';
import { fetchUsers } from '../../actions/github';

export class App extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={TodoList} />
            <Route path="/add" component={Todo} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
