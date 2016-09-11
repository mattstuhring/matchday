import { browserHistory, withRouter } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const App = React.createClass({
  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return <div>
      <AppBar
        title={<span style={styles.title}>Title</span>}
        onTitleTouchTap={handleTouchTap}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />}
      />
      {this.props.children}
    </div>;
  }
});

export default withRouter(App);
