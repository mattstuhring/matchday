import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App from 'components/App';
import Landing from 'components/Landing';
import React from 'react';
import Register from 'components/Register';
import Login from 'components/Login';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/" >
        <IndexRoute component={Landing} />
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
      </Route>
    </Router>;
  }
});

export default Routes;
