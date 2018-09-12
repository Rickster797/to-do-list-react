import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListContainer from "./containers/TaskListContainer";


class App extends Component {
  render() {
    return (
      <TaskListContainer />
    );
  }
}

export default App;
