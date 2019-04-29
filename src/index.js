import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Leetcode_1 from './1';
import Leetcode_2 from './2';
import Leetcode_3 from './3';
import Leetcode_4 from './4';
import Leetcode_5 from './5';
import Leetcode_10 from './10';
import Leetcode_101 from './101';
import Trie from './trie';
import Tree from './tree';


const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/1" component={Leetcode_1} />
          <Route exact path="/2" component={Leetcode_2} />
          <Route exact path="/3" component={Leetcode_3} />
          <Route exact path="/4" component={Leetcode_4} />
          <Route exact path="/5" component={Leetcode_5} />
          <Route exact path="/10" component={Leetcode_10} />
          <Route exact path="/101" component={Leetcode_101} />
          <Route exact path="/trie" component={Trie} />
          <Route exact path="/tree" component={Tree} />
          
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
