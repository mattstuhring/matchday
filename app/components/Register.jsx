import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Check from 'material-ui/svg-icons/action/check-circle';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router';

const Register = React.createClass({
  getInitialState() {
    return {
      user: {
        email: '',
        emailApple: '',
        emailGmail: '',
        password: '',
        clubId: 11
      },
      errors: {}
    };
  },

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
      { club: 'Manchester United',
        img: './images/clubs/Manchester-United.png' },
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

    const styleRegClubsBtn = {
      borderRadius: '50%',
      minWidth: '80px',
      height: '80px',
      position: 'relative',
      right: '9px',
      bottom: '8px'
    };

    return <div>
      <div className="row">
        <div className="col s12 center" style={{marginTop: '30px', marginBottom: '10px', padding: '20px 0px', backgroundColor: '#00ffa1'}}>
          <img style={{width: '58%'}} src="./images/create.png" />
        </div>
      </div>
      <Paper zDepth={3} className="container">
        <div className="row">
          <div className="row center">
            <div className="col s10 offset-s1" style={{ marginTop: '15px' }}>
              <h4 className="regFormTitle cardTitle">Who do you support?</h4>
              <div className="flex-container-1">
                {clubs.map((element) => {
                  const style = {
                    height: 60,
                    width: 60,
                    margin: 10,
                    textAlign: 'center',
                    display: 'inline-block',
                    backgroundImage: 'url(' + element.img + ')'
                  };

                  return <div key={element.id}>
                    <Paper
                      style={style}
                      zDepth={3}
                      circle={true}
                      className="circle"
                    >
                      <FlatButton style={styleRegClubsBtn} />
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
            <div className="col s10 offset-s1 cardTitle">
              <h4 style={{marginLeft: '10px'}}>Your Personal Details</h4>
            </div>
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
                backgroundColor={"#00ffa1"}
                label="Submit"
                labelColor={"#38003d"}
                labelPosition="before"
                icon={<Check />}
              />
              <RaisedButton
                className="regBtn"
                label="Not Ready"
                labelColor={"#38003d"}
                backgroundColor={"#00ffa1"}
                labelPosition="before"
                icon={<Cancel />}
              />
            </div>
          </div>
          <div className="col s5 center regKit">
            <Paper zDepth={2}>
              <h4 className="cardTitle" style={{padding: '5px 0px', marginTop: '0px'}}>Club</h4>
              <p>Manchester United</p>
              <img style={{marginBottom: '20px'}} src="./images/kits/manchester-united-j.jpg" />
            </Paper>
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Register);
