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
        phoneNumber: '',
        teamId: null
      },
      errors: {}
    };
  },

  componentWillMount() {
    let resClubs;
    axios.get('/api/clubs')
      .then((res) => {
        resClubs = res;
        const localTeamId = localStorage.getItem('teamId');
        if (!localTeamId) {
          return;
        }

        return axios.get(`/api/clubs/${localTeamId}`);
      })
      .then((resClub) => {
        if (resClub) {
          this.setState({
            user: {
              teamId: resClub.data.team_id,
              kit: resClub.data.kit,
              name: resClub.data.name
            },
            clubs: resClubs.data
          });
        } else {
          this.setState({ clubs: resClubs.data });
        }
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  handleClub(id) {
    localStorage.setItem('teamId', id);

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

  formatPhoneNumber(phone) {
    phone = phone.replace(/[^\d]/g, "");

      if (phone.length == 10) {
        const newPhone = '+1' + phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1$2$3");
        this.setState({ phoneNumber: newPhone });
      }

    this.props.setToast(true, 'Woops! Phone number error.');
  },

  handleRegister() {
    this.formatPhoneNumber(this.state.user.phoneNumber);

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

    return <div>
      <div className="row">
        <div className="col s12 center reg-create">
          <img className="reg-create-img" src="./images/create.png" />
        </div>
      </div>
      <Paper zDepth={3} className="container">
        <div className="row">
          <div className="row center">
            <div className="col s10 offset-s1">
              <h4 className="card-title reg-support">Who do you support?</h4>
              <div className="reg-flex-container">
                {this.state.clubs.map((element) => {
                  const style = {
                    height: 85,
                    width: 85,
                    margin: 10,
                    textAlign: 'center',
                    display: 'inline-block',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
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
                        className="reg-club-btn"
                        onClick={() => this.handleClub(element.team_id)}
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
            <div className="col s10 offset-s1 reg-details-title">
              <h4 className="reg-details">Your Personal Details</h4>
            </div>
          </div>
          <div className="col s5 offset-s1 regForm">
            <div className="row">
              <div className="input-field col s10">
                <input
                  id="first"
                  name="firstName"
                  onChange={this.handleTextChange}
                  type="text"
                  value={user.firstName}
                />
                <label for="first">First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  id="last"
                  name="lastName"
                  onChange={this.handleTextChange}
                  type="text"
                  value={user.lastName}
                />
                <label for="last">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  id="email"
                  name="email"
                  onChange={this.handleTextChange}
                  type="email"
                  value={user.email}
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  id="password"
                  type="password"
                  onChange={this.handleTextChange}
                  name="password"
                  value={user.password}
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  id="phone"
                  type="text"
                  className="validate"
                  name="phoneNumber"
                  onChange={this.handleTextChange}
                  placeholder="ex. 123-456-7890"
                  value={user.phoneNumber}
                />
                <label className="reg-phone" for="phone">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="col s11 center reg-btn">
                <RaisedButton
                  className="reg-submit-btn"
                  backgroundColor={"#00ffa1"}
                  label="Submit"
                  labelColor={"#38003d"}
                  labelPosition="before"
                  icon={<Check />}
                  onClick={this.handleRegister}
                />
                <RaisedButton
                  label="Not Ready"
                  labelColor={"#38003d"}
                  backgroundColor={"#00ffa1"}
                  labelPosition="before"
                  icon={<Cancel />}
                  onClick={() => browserHistory.push('/')}
                />
              </div>
            </div>
          </div>
          <div className="col s5 center regKit">
            <Paper zDepth={2}>
              <h4 className="reg-club">Club</h4>
              <p>{this.state.user.name}</p>
              <img src={this.state.user.kit} className="responsive-img reg-club-img"/>
            </Paper>
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Register);
