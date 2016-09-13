import { browserHistory, withRouter } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FlatButton from 'material-ui/FlatButton';

const Register = React.createClass ({
  render() {
    const clubs = [
      { club: 'Arsenal', img: './images/clubs/Arsenal.png' },
      { club: 'BourneMouth', img: './images/clubs/Bournemouth.png' },
      { club: 'Burnley', img: './images/clubs/Burnley.png' },
      { club: 'Chelsea', img: './images/clubs/Chelsea.png' },
      { club: 'Crystal Palace', img: './images/clubs/Crystal-Palace.png' },
      { club: 'Everton', img: './images/clubs/Everton.png' },
      { club: 'Hull City', img: './images/clubs/Hull-City.png' },
      { club: 'Leicester', img: './images/clubs/Leicester-City.png' },
      { club: 'Liverpool', img: './images/clubs/Liverpool.png' },
      { club: 'Manchester City', img: './images/clubs/Manchester-City.png' },
      { club: 'Manchester United', img: './images/clubs/Manchester-United.png' },
      { club: 'Middlesbrough', img: './images/clubs/Middlesbrough.png' },
      { club: 'Southampton', img: './images/clubs/Southampton.png' },
      { club: 'Stoke City', img: './images/clubs/Stoke-City.png' },
      { club: 'Sunderland', img: './images/clubs/Sunderland.png' },
      { club: 'Swansea', img: './images/clubs/Swansea-City.png' },
      { club: 'Tottenham', img: './images/clubs/Tottenham-Hotspur.png' },
      { club: 'Watford', img: './images/clubs/Watford.png' },
      { club: 'West Brom', img: './images/clubs/West-Brom.png' },
      { club: 'West Ham United', img: './images/clubs/West-Ham.png' }
    ];

    const styles = {
      mediumIcon: {
        width: 48,
        height: 48,
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24,
      },
    };

    return <div className="container">
      <h1 className="center">Lets Get You Registered</h1>
      <Paper zDepth={3}>
        <div className="row">
          <div className="row center">
            <div className="col s10 offset-s1" style={{marginTop: '15px'}}>
              <h4 className="regFormTitle">Who do you support?</h4>
              <div className="flex-container-1">
                {clubs.map(function(element) {
                  const style = {
                    height: 60,
                    width: 60,
                    margin: 10,
                    textAlign: 'center',
                    display: 'inline-block',
                    backgroundImage: 'url(' + element.img + ')',
                  };
                  return <div key={element.id}>
                    <Paper style={style} zDepth={3} circle={true} className="box">
                      <IconButton
                        style={styles.medium}
                      >
                      </IconButton>
                    </Paper>
                  </div>;
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="divider col s10 offset-s1" />
          </div>
          <div className="row">
            <h4 className="col s10 offset-s1 regFormTitle">Your Personal Details</h4>
          </div>
          <div className="col s6 center regForm">
            <div>
              <TextField
                style={{width: '350px'}}
                hintText="Hint Text"
                floatingLabelText="First Name"
              />
            </div>
            <div>
              <TextField
                style={{width: '350px'}}
                hintText="Hint Text"
                floatingLabelText="Last Name"
              />
            </div>
            <div>
              <TextField
                style={{width: '350px'}}
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
          <div className="col s5 center regKit">
            <h4 className="regFormTitle">Club</h4>
            <p>Manchester United</p>
            <img style={{marginBottom: '10px'}} src="./images/kits/manchester-united-j.jpg" />
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Register);
