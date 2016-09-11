import { browserHistory, withRouter } from 'react-router';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Landing = React.createClass({
  render() {
    return <div>
      <FlatButton label="Primary" primary={true} />
    </div>;
  }
});

export default withRouter(Landing);
