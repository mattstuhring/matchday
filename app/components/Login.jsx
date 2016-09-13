import { browserHistory, withRouter } from 'react-router';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import React from 'react';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import TextField from 'material-ui/TextField';

const Login = React.createClass ({
  render() {
    return <div className="container">
      <h1 className="center">Your Account</h1>
      <Paper zDepth={3}>
        <div className="row">
          <div className="row logTitle">
            <div className="col s6" style={{color: 'white', backgroundColor: 'grey'}}>
              <h4>Login</h4>
            </div>
            <div className="col s6" style={{color: 'white', backgroundColor: 'grey'}}>
              <h4>Register</h4>
            </div>
          </div>
          <div className="col s6 center">
            <div>
              <TextField
                style={{width: '350px', marginTop: '20px'}}
                hintText="Hint Text"
                floatingLabelText="Email"
              />
            </div>
            <div>
              <TextField
                style={{width: '350px'}}
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
              />
            </div>
            <div>
              <RaisedButton
                className="regBtn"
                style={{marginRight: '20px'}}
                label="Submit"
                labelPosition="before"
                primary={true}
                icon={<ActionAndroid />}
              />
              <RaisedButton
                className="regBtn"
                label="Cancel"
                labelPosition="before"
                primary={true}
                icon={<ActionAndroid />}
              />
            </div>
          </div>
          <div className="col s5">
            <Paper zDepth={2} style={{marginBottom: '50px'}}>
              <h5 className="center" style={{backgroundColor: 'grey', color: 'white', padding: '15px'}}>Don't have a Matchday account?</h5>
              <p style={{marginLeft: '10px'}}>Here is what you are missing:</p>
              <div style={{marginLeft: '40px'}}>
                <Done style={{display: 'inline-block'}} />
                <p style={{display: 'inline-block'}}>Calendar match alerts</p>
              </div>
              <div style={{marginLeft: '40px'}}>
                <Done style={{display: 'inline-block'}} />
                <p style={{display: 'inline-block'}}>Support your favorite club</p>
              </div>
              <div style={{marginLeft: '40px'}}>
                <Done style={{display: 'inline-block'}} />
                <p style={{display: 'inline-block'}}>Favorite club news</p>
              </div>
              <div style={{marginLeft: '40px'}}>
                <Done style={{display: 'inline-block'}} />
                <p style={{display: 'inline-block'}}>Match commentary</p>
              </div>
              <RaisedButton label="Register" fullWidth={true} />
            </Paper>
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Login);
