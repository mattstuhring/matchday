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
        statistics: [
          {rank: ''},
          {wins: ''},
          {draws: ''},
          {losses: ''},
          {goals: ''},
          {goals_conceded: ''}
        ],
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
    const styleBanner = {
      width: '100%',
      marginTop: '25px'
    };

    const styleWho = {
      width: '100%',
      marginTop: '45px',
      marginBottom: '25px'
    };

    const styleClubsBtn = {
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      position: 'relative',
      right: '9px',
      bottom: '9px'
    };

    const styleInline = {
      display: 'inline-block'
    };

    const styleUpMatch1 = {
      position: 'relative',
      bottom: '15px',
      display: 'inline-block',
      marginRight: '10px'
    };

    const styleUpMatch2 = {
      display: 'inline-block',
      paddingLeft: '10px',
      paddingRight: '10px',
      position: 'relative',
      bottom: '15px'
    };

    const styleUpMatch3 = {
      position: 'relative',
      bottom: '15px',
      display: 'inline-block',
      marginLeft: '10px'
    };

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

    const styleLogoP = {
      marginTop: '0px',
      textAlign: 'center',
      marginBottom: '25px',
    };

    const styleClubName = {
      display: 'inline-block',
      position: 'relative',
      bottom: '10px',
      marginLeft: '20px',
      color: 'white'
    };

    const styleStadium = {
      height: '284px',
      backgroundImage: 'url(' + this.state.clubImg.stadium + ')',
    };

    const styleHistory = {
      padding: '5px 5px'
    };

    const styleNoTeamId = {
      box: {
        backgroundColor: 'whitesmoke',
        color: '#38003d',
        paddingBottom: '13px'
      },
      welcome: {
        textDecoration: 'underline',
        marginBottom: '5px'
      },
      div: {
        marginLeft: '80px'
      }
    };

    let welcome;
    let name;
    let founded;
    let coach;
    let stadium;
    let city;

    if (this.state.teamId === '') {
      welcome = <div>
        <div className="col s7" style={styleNoTeamId.box}>
          <div className="center">
            <h3 style={styleNoTeamId.welcome}>Welcome</h3>
          </div>
          <div style={styleNoTeamId.div}>
            <h5 style={styleInline}>1.</h5>
            <h5 style={{display: 'inline-block', marginLeft: '10px'}}>Select your club</h5>
          </div>
          <div style={styleNoTeamId.div}>
            <h5 style={styleInline}>2.</h5>
            <h5 style={{display: 'inline-block', marginLeft: '10px'}}>Click to support club</h5>
          </div>
          <div style={styleNoTeamId.div}>
            <h5 style={styleInline}>3.</h5>
            <h5 style={{display: 'inline-block', marginLeft: '10px'}}>Create Account</h5>
          </div>
          <div style={styleNoTeamId.div}>
            <h5 style={styleInline}>4.</h5>
            <h5 style={{display: 'inline-block', marginLeft: '10px'}}>Never miss a match!</h5>
          </div>
        </div>
        <div className="col s5 center">
          <img src="./images/ball2.png" style={{height: '284px'}}/>
        </div>
      </div>;

      name = <div style={{color: 'lightgrey'}}>Club Name</div>;
      founded = <div style={{color: 'lightgrey'}}>Founded</div>;
      coach = <div style={{color: 'lightgrey'}}>Coach</div>;
      stadium = <div style={{color: 'lightgrey'}}>Stadium</div>;
      city = <div style={{color: 'lightgrey'}}>City</div>;

    } else {
      welcome = <div>
        <div className="col s7 center matchInfo" style={styleStadium}>
          <h3 style={{marginTop: '30px', textDecoration: 'underline'}}>Next Match</h3>
          <p>{this.state.match[0].date}</p>
          <p>{this.state.match[0].pacific}</p>
          <h5>{this.state.match[0].localteam_name} v {this.state.match[0].visitorteam_name}</h5>
          <p>{this.state.match[0].venue}</p>
        </div>
        <div className="col s5 center">
          <img src={this.state.clubImg.kit} style={{height: '284px'}}/>
        </div>
      </div>;

      name = <div>{this.state.club.name}</div>;
      founded = <div>{this.state.club.founded}</div>;
      coach = <div>{this.state.club.coach_name}</div>;
      stadium = <div>{this.state.club.venue_name}</div>;
      city = <div>{this.state.club.venue_city}</div>;
    }










    return <div>
      <div className="row center" style={{marginBottom: '5px'}}>
          <img className="responsive-img" style={styleBanner} src="./images/banner.png" />
      </div>

      <div className="row">
        <div className="col s12 l6">
          <img className="center" style={styleWho} src="./images/who.png" />
          <div className="flex-container-1">
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
                    style={styleClubsBtn}
                    onClick={() => this.handleClub(element.team_id)}
                  />
                </Paper>
                <p style={styleLogoP}>{element.name}</p>
              </div>;
            })}
          </div>
        </div>
        <div className="col s12 l6 right">
          <div className="section"></div>
          <Card>
            <div className="row landHeader titleImg">
              <div className="col s7" style={{marginBottom: '6px'}}>
                <div style={styleTeamHeader}></div>
                <h5 style={styleClubName}>{this.state.club.name}</h5>
              </div>
              <div className="col s5">
                <div className="section support"></div>
                <RaisedButton
                  className="supportClub"
                  label="Click to Support Club!"
                  backgroundColor={"#00ffa1"}
                  labelColor={"#38003d"}
                  fullWidth={true}
                  onClick={() => browserHistory.push('/login')}
                />
              </div>
            </div>
            <div className="row" style={{borderTop: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke', height: '286px'}}>
              {welcome}
            </div>
            <div className="cardTitle logPad">Club Standing</div>
            <CardText>
              <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>#</TableHeaderColumn>
                    <TableHeaderColumn>Club</TableHeaderColumn>
                    <TableHeaderColumn>W</TableHeaderColumn>
                    <TableHeaderColumn>T</TableHeaderColumn>
                    <TableHeaderColumn>L</TableHeaderColumn>
                    <TableHeaderColumn>GF</TableHeaderColumn>
                    <TableHeaderColumn>GA</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>{this.state.club.statistics[0].rank}</TableRowColumn>
                    <TableRowColumn>{this.state.club.name}</TableRowColumn>
                    <TableRowColumn>{this.state.club.statistics[0].wins}</TableRowColumn>
                    <TableRowColumn>{this.state.club.statistics[0].draws}</TableRowColumn>
                    <TableRowColumn>{this.state.club.statistics[0].losses}</TableRowColumn>
                    <TableRowColumn>{this.state.club.statistics[0].goals}</TableRowColumn>
                    <TableRowColumn>{this.state.club.statistics[0].goals_conceded}</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </CardText>
            <div className="cardTitle logPad">Overview</div>
            <CardText style={{padding: '0px'}}>
              <div className="row center" style={{margin: '5px'}}>
                <div className="col s10 offset-s1">
                  <Table>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn style={styleHistory}>
                          <img src="./images/icons/jersey.png" />
                        </TableRowColumn>
                        <TableRowColumn style={styleHistory}>
                          {name}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={styleHistory}>
                          <img src="./images/icons/history.png" />
                        </TableRowColumn>
                        <TableRowColumn style={styleHistory}>
                          {founded}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={styleHistory}>
                          <img src="./images/icons/player.png" />
                        </TableRowColumn>
                        <TableRowColumn style={styleHistory}>
                          {coach}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={styleHistory}>
                          <img src="./images/icons/stadium.png" />
                        </TableRowColumn>
                        <TableRowColumn style={styleHistory}>
                          {stadium}
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={styleHistory}>
                          <img src="./images/icons/city.png" />
                        </TableRowColumn>
                        <TableRowColumn style={styleHistory}>
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
