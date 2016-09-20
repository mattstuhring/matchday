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
    return <div>
      {/* <h1 className="center">Your Account</h1> */}
      <div className="row">
        <div className="col s12 center" style={{marginTop: '30px', marginBottom: '10px', padding: '20px 0px', backgroundColor: '#00ffa1'}}>
          <img style={{width: '40%'}} src="./images/account.png" />
        </div>
      </div>

        <div className="row container">
          <div className="col s6">
            <Paper zDepth={3}>
              <h4 className="cardTitle" style={{marginTop: '0px', padding: '16px', marginBottom: '0px'}}>Login</h4>
              <div className="row">
                <div className="col s10 offset-s1 center">
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
                  <div style={{height: '74px'}}>
                    <RaisedButton
                      className="regBtn"
                      style={{marginRight: '20px'}}
                      label="Submit"
                      labelPosition="before"
                      backgroundColor={"#00ffa1"}
                      labelColor={"#38003d"}
                      icon={<ActionAndroid />}
                    />
                    <RaisedButton
                      className="regBtn"
                      label="Cancel"
                      labelPosition="before"
                      backgroundColor={"#00ffa1"}
                      labelColor={"#38003d"}
                      icon={<ActionAndroid />}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 center">
                  <img src="./images/ball.png" />
                </div>
              </div>
            </Paper>
          </div>


          <div className="col s6">
          <Paper zDepth={3}>
            <h4 className="cardTitle" style={{marginTop: '0px', padding: '16px'}}>Register</h4>
            <div className="row">
              <div className="col s10 offset-s1">
                <Paper zDepth={2} style={{marginBottom: '50px'}}>
                  <h5 className="center" style={{backgroundColor: '#38003d', color: 'white', padding: '15px'}}>Don't have a Matchday account?</h5>
                  <p style={{marginLeft: '10px'}}>Here's what you are missing:</p>
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
                  <RaisedButton label="Click to go register" fullWidth={true} backgroundColor={"#00ffa1"}
                  labelColor={"#38003d"} />
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
