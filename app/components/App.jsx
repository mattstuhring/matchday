import { browserHistory, withRouter } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


const App = React.createClass({
  getInitialState() {
    return {
      toast: {
        open: false,
        message: ''
      }
    };
  },

  setToast(state, message) {
    const newToast = Object.assign(
      {},
      this.state.toast,
      { open: state, message });

    this.setState({ toast: newToast });
  },

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
        width: "5%",
        borderRadius: "50%",
        border: '2px solid #fe005a',
        marginTop: '2px'
      },
      background: {
        backgroundColor: '#38003d',
      },
      text: {
        // color: '#00ffa1'
        color: '#fe005a'
      },
      logo: {
        height: '40px',
        marginBottom: '9px',
        marginLeft: '10px'
      }
    };

    return <div>
      <AppBar
        style={styles.background}
        title={
          <div>
            <img style={styles.title} src="./images/logo.png" />
            <img style={styles.logo} src="./images/matchday.png" />
          </div>
        }
        showMenuIconButton={false}
      >
        <div style={{marginTop: '12px'}}>
          <FlatButton style={styles.text} label="EPL" />
          <FlatButton style={styles.text} label="Login" onTouchTap={() => browserHistory.push('/login')} />
        </div>
      </AppBar>

      {React.cloneElement(this.props.children, {
        setToast: this.setToast
      })}
    </div>;
  }
});

export default withRouter(App);
