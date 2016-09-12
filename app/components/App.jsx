import { browserHistory, withRouter } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


const App = React.createClass({
  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return <div>
      <AppBar
        title={<span style={styles.title}>EPL-Matchday</span>}
        showMenuIconButton={false}
      >
        <FlatButton label="EPL" />
        <FlatButton label="Signin" />
      </AppBar>

      {React.cloneElement(this.props.children)}
    </div>;
  }
});

export default withRouter(App);
