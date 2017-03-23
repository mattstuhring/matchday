import { browserHistory, withRouter } from 'react-router';
import Avatar from 'material-ui/Avatar';
import axios from 'axios';
import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText}
  from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import { fullWhite }
  from 'material-ui/styles/colors';
import cookie from 'react-cookie';
import moment from 'moment-timezone';



const Landing = React.createClass({
  getInitialState() {
    return {
      clubs: [],
      club: {
        clubFacts: {},
        team: {}
      },
      match: [
        {time: ''},
        {date: ''},
        {localteam_name: ''},
        {visitorteam_name: ''},
        {venue: ''}
      ],
      clubImg: [],
      teamId: '',
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
    this.setState({teamId: id});

    localStorage.setItem('teamId', id);

    axios.get(`/api/clubs/team/${id}`)
      .then((res) => {
        console.log(res.data, 'clubs/team/id !!!!!!!!!!!!!!!!!!!!!!!!');
        this.setState({ club: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });

    axios.get(`/api/clubs/${id}`)
      .then((res) => {
        this.setState({ clubImg: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });

    axios.get(`/api/clubs/match/${id}`)
      .then((res) => {
        this.setState({ match: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  render() {
    const styleTeamHeader = {
      width: '55px',
      height: '55px',
      display: 'inline-block',
      backgroundImage: 'url(' + this.state.clubImg.logo + ')',
      backgroundSize: 'cover',
      top: '10px',
      position: 'relative',
      paddingBottom: '5px'
    };

    const styleStadium = {
      height: '284px',
      backgroundImage: 'url(' + this.state.clubImg.stadium + ')',
    };

    let welcome;
    let name;
    let founded;
    let coach;
    let stadium;
    let city;

    if (this.state.teamId === '') {
      welcome = <div>
        <div className="col s7 land-team-box">
          <div className="center">
            <h3 className="land-team-welcome">Welcome</h3>
          </div>
          <div className="land-div" >
            <h5 className="land-inline">1.</h5>
            <h5 className="land-team-text">Select your club</h5>
          </div>
          <div className="land-div">
            <h5 className="land-inline">2.</h5>
            <h5 className="land-team-text">Click to support club</h5>
          </div>
          <div className="land-div">
            <h5 className="land-inline">3.</h5>
            <h5 className="land-team-text">Create Account</h5>
          </div>
          <div className="land-div">
            <h5 className="land-inline">4.</h5>
            <h5 className="land-team-text">Never miss a match!</h5>
          </div>
        </div>
        <div className="col s5 center">
          <img src="./images/ball2.png" className="land-team-img"/>
        </div>
      </div>;

      name = <div className="land-text-color">Club Name</div>;
      founded = <div className="land-text-color">Founded</div>;
      coach = <div className="land-text-color">Coach</div>;
      stadium = <div className="land-text-color">Stadium</div>;
      city = <div className="land-text-color">City</div>;

    } else {
      welcome = <div>
        <div className="col s7 center match-info" style={styleStadium}>
          <h3 className="land-next-match">Next Match</h3>
          <p>{this.state.match[0].date}</p>
          <p>{this.state.match[0].pacific}</p>
          <h5>{this.state.match[0].localteam_name} v {this.state.match[0].visitorteam_name}</h5>
          <p>{this.state.match[0].venue}</p>
        </div>
        <div className="col s5 center">
          <img src={this.state.clubImg.kit} className="land-team-img"/>
        </div>
      </div>;

      name = <div>{this.state.club.clubFacts.name}</div>;
      founded = <div>{this.state.club.clubFacts.founded}</div>;
      coach = <div>{this.state.club.clubFacts.coach_name}</div>;
      stadium = <div>{this.state.club.clubFacts.venue_name}</div>;
      city = <div>{this.state.club.clubFacts.venue_city}</div>;
    }

    return <div>

      {/* Matchday banner */}
      <div className="row center land-team-banner">
          <img className="responsive-img land-banner" src="./images/banner.png" />
      </div>

      <div className="row">
        {/* Team logos */}
        <div className="col s12 l6">
          <img className="center land-who" src="./images/who.png" />
          <div className="land-flex-container">
            {this.state.clubs.map((element) => {
              const style = {
                height: '100px',
                width: '100px',
                margin: '10px',
                textAlign: 'center',
                display: 'inline-block',
                backgroundImage: 'url(' + element.logo + ')',
                backgroundSize: 'contain'
              };
              return <div key={element.id}>
                <Paper style={style} circle={true} zDepth={3} >
                  <FlatButton
                    className="land-club-btn"
                    onClick={() => this.handleClub(element.team_id)}
                  />
                </Paper>
                <p className="land-logo">{element.name}</p>
              </div>;
            })}
          </div>
        </div>


        <div className="col s12 l6 right">
          <div className="section"></div>
          <Card>
            <div className="row land-header land-title-img">
              <div className="col s7 land-title-img-div">
                <div style={styleTeamHeader}></div>
                <h5 className="land-club-name">{this.state.club.team.team_name}</h5>
              </div>
              <div className="col s5">
                <div className="section land-support"></div>
                <RaisedButton
                  className="land-support-club"
                  label="Click to Support Club!"
                  backgroundColor={"#00ffa1"}
                  labelColor={"#38003d"}
                  fullWidth={true}
                  onClick={() => browserHistory.push('/login')}
                />
              </div>
            </div>
            <div className="row land-welcome-box">
              {welcome}
            </div>
            <div className="card-title log-pad">Club Standing</div>
            <CardText>
              <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>#</TableHeaderColumn>
                    <TableHeaderColumn>Club</TableHeaderColumn>
                    <TableHeaderColumn>W</TableHeaderColumn>
                    <TableHeaderColumn>D</TableHeaderColumn>
                    <TableHeaderColumn>L</TableHeaderColumn>
                    <TableHeaderColumn>Round</TableHeaderColumn>
                    <TableHeaderColumn>Pts</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>{this.state.club.team.position}</TableRowColumn>
                    <TableRowColumn>{this.state.club.team.team_name}</TableRowColumn>
                    <TableRowColumn>{this.state.club.team.overall_w}</TableRowColumn>
                    <TableRowColumn>{this.state.club.team.overall_d}</TableRowColumn>
                    <TableRowColumn>{this.state.club.team.overall_l}</TableRowColumn>
                    <TableRowColumn>{this.state.club.team.round}</TableRowColumn>
                    <TableRowColumn>{this.state.club.team.points}</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </CardText>
            <div className="card-title log-pad">Overview</div>
            <CardText className="land-card-text">
              <div className="row center land-card-row">
                <div className="col s10 offset-s1">
                  <Table>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn className="land-history">
                          <img src="./images/icons/jersey.png" />
                        </TableRowColumn>
                        <TableRowColumn className="land-history">
                          {name}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn className="land-history">
                          <img src="./images/icons/history.png" />
                        </TableRowColumn>
                        <TableRowColumn className="land-history">
                          {founded}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn className="land-history">
                          <img src="./images/icons/player.png" />
                        </TableRowColumn>
                        <TableRowColumn className="land-history">
                          {coach}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn className="land-history">
                          <img src="./images/icons/stadium.png" />
                        </TableRowColumn>
                        <TableRowColumn className="land-history">
                          {stadium}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn className="land-history">
                          <img src="./images/icons/city.png" />
                        </TableRowColumn>
                        <TableRowColumn className="land-history">
                          {city}
                        </TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardText>
            <CardActions>
              <RaisedButton
                label="Click to Support Club!"
                backgroundColor={"#00ffa1"}
                labelColor={"#38003d"}
                fullWidth={true}
                onClick={() => browserHistory.push('/login')}
              />
            </CardActions>
          </Card>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Landing);
