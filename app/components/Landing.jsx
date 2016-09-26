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
        {formatted_date: ''},
        {localteam_name: ''},
        {visitorteam_name: ''},
        {venue: ''}
      ],
      clubImg: [],

    };
  },

  componentWillMount() {
    axios.get('/api/clubs')
      .then((res) => {
        console.log(res.data);
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
      bottom: '13px'
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
      marginBottom: '25px'
    };

    const styleClubName = {
      display: 'inline-block',
      position: 'relative',
      bottom: '10px',
      marginLeft: '20px',
      color: 'white'
    };

    const styleStadium = {
      height: '298px',
      backgroundImage: 'url(' + this.state.clubImg.stadium + ')'
    };

    const styleHistory = {
      padding: '5px 5px'
    };

    console.log(this.state);

    return <div>
      <div className="row center" style={{marginBottom: '5px'}}>
          <img style={styleBanner} src="./images/banner.png" />
      </div>

      <div className="row">
        <div className="col s6" style={{width: '47%'}}>
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
                    onTouchTap={() => this.handleClub(element.team_id)}
                  />
                </Paper>
                <p style={styleLogoP}>{element.name}</p>
              </div>;
            })}
          </div>
        </div>

        <div className="row">
          <div className="col s6 right">
            <div className="section" />
            <Card>
              <div className="row landHeader titleImg">
                <div className="col s7" style={{marginBottom: '6px'}}>
                  <div style={styleTeamHeader}></div>
                  <h5 style={styleClubName}>{this.state.club.name}</h5>
                </div>
                <div className="col s5">
                  <div className="section support" />
                  <RaisedButton
                    className="supportClub"
                    label="Click to Support Club!"
                    backgroundColor={"#00ffa1"}
                    labelColor={"#38003d"}
                    fullWidth={true}
                    onTouchTap={() => browserHistory.push('/register')}
                  />
                </div>
              </div>
              <div className="row" style={{borderTop: '1px solid lightgrey', borderBottom: '1px solid lightgrey'}}>
                <div className="col s7 center matchInfo" style={styleStadium}>
                  <h3 style={{marginTop: '30px'}}>Next Match</h3>
                  <p>{this.state.match[0].time}</p>
                  <p>{this.state.match[0].formatted_date}</p>
                  <h5>{this.state.match[0].localteam_name} v {this.state.match[0].visitorteam_name}</h5>
                  <p>{this.state.match[0].venue}</p>
                </div>
                <div className="col s5 center">
                  <img src={this.state.clubImg.kit} />
                </div>
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
                            {this.state.club.name}
                          </TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn style={styleHistory}>
                            <img src="./images/icons/history.png" />
                          </TableRowColumn>
                          <TableRowColumn style={styleHistory}>
                            {this.state.club.founded}
                          </TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn style={styleHistory}>
                            <img src="./images/icons/player.png" />
                          </TableRowColumn>
                          <TableRowColumn style={styleHistory}>
                            {this.state.club.coach_name}
                          </TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn style={styleHistory}>
                            <img src="./images/icons/stadium.png" />
                          </TableRowColumn>
                          <TableRowColumn style={styleHistory}>
                            {this.state.club.venue_name}
                          </TableRowColumn>
                        </TableRow>
                        <TableRow>
                          <TableRowColumn style={styleHistory}>
                            <img src="./images/icons/city.png" />
                          </TableRowColumn>
                          <TableRowColumn style={styleHistory}>
                            {this.state.club.venue_city}
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
                  onTouchTap={() => browserHistory.push('/register')}
                />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Landing);
