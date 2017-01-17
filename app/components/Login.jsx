import { browserHistory, withRouter } from 'react-router';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import axios from 'axios';
import React from 'react';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import TextField from 'material-ui/TextField';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Check from 'material-ui/svg-icons/action/check-circle';

const Login = React.createClass({
  getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  handleTextChange(event) {
    const nextLogin = Object.assign({}, this.state.login, {
      [event.target.name]: event.target.value
    });

    this.setState({ login: nextLogin });
  },

  handleLogin() {
    const login = this.state.login;

    axios.post('/api/token', login)
    .then(() => {
      browserHistory.push('/profile');
      this.props.setToast(true, 'Login successful!');
    })
    .catch((err) => {
      this.props.setToast(
        true,
        `Whoops! ${err.response.data}`
      );
    });
  },

  render() {
    return <div>
      <div className="row">
        <div className="col s12 center log-account">
          <img src="./images/account.png" />
        </div>
      </div>

      <div className="row container">
        <div className="col s12 l6">
          <Paper zDepth={3}>
            <h4 className="log-card-title log-login">Login</h4>
            <div className="row">
              <div className="col s10 offset-s1 center">
                <div>
                  <TextField
                    className="log-text-field"
                    hintText="Email"
                    floatingLabelText="Email"
                    name="email"
                    onChange={this.handleTextChange}
                  />
                </div>
                <div>
                  <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={this.handleTextChange}
                  />
                </div>
                <div className="log-btn-div">
                  <RaisedButton
                    className="log-reg-btn"
                    label="Submit"
                    labelPosition="before"
                    backgroundColor={"#00ffa1"}
                    labelColor={"#38003d"}
                    icon={<Check />}
                    onClick={this.handleLogin}
                  />
                  <RaisedButton
                    label="Cancel"
                    labelPosition="before"
                    backgroundColor={"#00ffa1"}
                    labelColor={"#38003d"}
                    icon={<Cancel />}
                    onClick={() => browserHistory.push('/')}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center">
                <img src="./images/ball.png" className="log-ball"/>
              </div>
            </div>
          </Paper>
        </div>


        <div className="col s12 l6">
          <Paper zDepth={3}>
            <h4 className="log-card-title">Register</h4>
            <div className="row">
              <div className="col s10 offset-s1">
                <Paper zDepth={2} className="log-paper">
                  <h5 className="center log-paper-header">Don't have a Matchday account?</h5>
                  <p className="center log-paper-p">Here's what you are missing:</p>
                  <div className="log-paper-div">
                    <Done className="log-paper-done" />
                    <h5 className="log-paper-h5">SMS match reminders</h5>
                  </div>
                  <div className="log-paper-div">
                    <Done className="log-paper-done" />
                    <h5 className="log-paper-h5">Weekly Match schedule</h5>
                  </div>
                  <div className="log-paper-div">
                    <Done className="log-paper-done" />
                    <h5 className="log-paper-h5">Favorite club news</h5>
                  </div>
                  <div className="log-paper-div">
                    <Done className="log-paper-done" />
                    <h5 className="log-epl-standings">Epl standings</h5>
                  </div>
                  <RaisedButton
                    label="Click to go register"
                    fullWidth={true}
                    backgroundColor={"#00ffa1"}
                    labelColor={"#38003d"}
                    onClick={() => browserHistory.push('/register')}
                  />
                </Paper>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Login);
