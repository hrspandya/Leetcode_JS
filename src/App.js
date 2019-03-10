import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Top Leetcode Problems
        </div>
        <div>
          <ul>
            <li><Link to="/1">1 Two sum</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
