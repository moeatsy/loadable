import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import { Auth, Opening } from './Loadables';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>Router links</div>
          <div>
              <Link to="/auth">Auth</Link>
              <Link to="/auth/first">:first</Link>
              <Link to="/auth/second">:second</Link>
              <Link to="/auth/third">:third</Link>
              <br />
              <Link to="/opening">Opening</Link>
              <Link to="/opening/first">:first</Link>
              <Link to="/opening/second">:second</Link>
              <Link to="/opening/third">:third</Link>
          </div>
          <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/opening" component={Opening} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

