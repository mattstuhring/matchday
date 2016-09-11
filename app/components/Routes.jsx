import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App from 'components/App';
import Landing from 'components/Landing';
import React from 'react';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/" >
        <IndexRoute component={Landing} />
      </Route>
    </Router>;
  }
});

export default Routes;
