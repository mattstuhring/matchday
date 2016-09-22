import { browserHistory, withRouter } from 'react-router';
import axios from 'axios';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Check from 'material-ui/svg-icons/action/check-circle';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Register = React.createClass({
  getInitialState() {
    return {
      clubs: [],
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        teamId: null
      },
      errors: {}
    };
  },

  componentWillMount() {
    axios.get('/api/clubs')
      .then((res) => {
        this.setState({ clubs: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  handleClub(id) {
    axios.get(`/api/clubs/${id}`)
      .then((res) => {
        this.setState({ user: { teamId: res.data.team_id, kit: res.data.kit, name: res.data.name} });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  handleTextChange(event) {
    const nextUser = Object.assign({}, this.state.user, {
      [event.target.name]: event.target.value
    });

    this.setState({ user: nextUser });
  },

  handleRegister() {
    const user = this.state.user;

    axios.post('/api/users', user)
      .then(() => {
        browserHistory.push('/login');
        this.props.setToast(true, 'Thanks for signing up! Go ahead and log in.');
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}`
        );
      });
  },

  render() {
    const user = this.state.user;
    const errors = this.state.errors;

    const styleRegClubsBtn = {
      borderRadius: '50%',
      minWidth: '80px',
      height: '80px',
      position: 'relative',
      right: '9px',
      bottom: '8px'
    };

console.log(this.state);

    return <div>
      <div className="row">
        <div className="col s12 center" style={{marginTop: '30px', marginBottom: '10px', padding: '20px 0px', backgroundColor: '#00ffa1'}}>
          <img style={{width: '58%'}} src="./images/create.png" />
        </div>
      </div>
      <Paper zDepth={3} className="container">
        <div className="row">
          <div className="row center">
            <div className="col s10 offset-s1" style={{ marginTop: '20px'}}>
              <h4 className="regFormTitle cardTitle">Who do you support?</h4>
              <div className="flex-container-1" style={{marginTop: '20px'}}>
                {this.state.clubs.map((element) => {
                  const style = {
                    height: 60,
                    width: 60,
                    margin: 10,
                    textAlign: 'center',
                    display: 'inline-block',
                    backgroundSize: 'contain',
                    backgroundImage: 'url(' + element.logo + ')'
                  };

                  return <div key={element.id}>
                    <Paper
                      style={style}
                      zDepth={3}
                      circle={true}
                      className="circle"
                    >
                      <FlatButton
                        style={styleRegClubsBtn}
                        onTouchTap={() => this.handleClub(element.team_id)}
                      />
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
                name="firstName"
                floatingLabelText="First Name"
                onChange={this.handleTextChange}
                value={user.firstName}
              />
            </div>
            <div>
              <TextField
                style={{width: '350px'}}
                hintText="Hint Text"
                floatingLabelText="Last Name"
                name="lastName"
                onChange={this.handleTextChange}
                value={user.lastName}
              />
            </div>
            <div>
              <TextField
                style={{width: '350px'}}
                hintText="Hint Text"
                floatingLabelText="Email"
                name="email"
                onChange={this.handleTextChange}
                value={user.email}
              />
            </div>
            <div>
              <TextField
                style={{width: '350px'}}
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                onChange={this.handleTextChange}
                name="password"
                value={user.password}
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
                onTouchTap={this.handleRegister}
              />
              <RaisedButton
                className="regBtn"
                label="Not Ready"
                labelColor={"#38003d"}
                backgroundColor={"#00ffa1"}
                labelPosition="before"
                icon={<Cancel />}
                onTouchTap={() => browserHistory.push('/')}
              />
            </div>
          </div>
          <div className="col s5 center regKit">
            <Paper zDepth={2}>
              <h4 style={{padding: '5px 0px', marginTop: '0px', backgroundColor: '#38003d', color: 'white'}}>Club</h4>
              <p>{this.state.user.name}</p>
              <img style={{marginBottom: '20px'}} src={this.state.user.kit} />
            </Paper>
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Register);
