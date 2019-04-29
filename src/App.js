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
            <li><Link to="/2">2 Add Two Numbers</Link></li>
            <li><Link to="/3">3 Longest Substring Without Repeating Characters</Link></li>
            <li><Link to="/4">4 Median of Two Sorted Arrays</Link></li>
            <li><Link to="/5">5 Longest Palindromic Substring</Link></li>
            <li><Link to="/10">10 Regular Expression Matching</Link></li>
            <li><Link to="/101">101 Symmetric Tree</Link></li>
            <li><Link to="/trie">Trie data structure</Link></li>
            <li><Link to="/tree">Tree data structure</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
