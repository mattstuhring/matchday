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
    axios.get(`http://api.football-api.com/2.0/team/${id}?Authorization=565ec012251f932ea400000119a15146d7c5405a4923d2307279b822`)
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
      bottom: '8px'
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
              };
              return <div key={element.id}>
                <Paper style={style} zDepth={3} circle={true} className="circle">
                  <FlatButton
                    style={styleClubsBtn}
                    onTouchTap={() => this.handleClub(element.team_id)}
                  />
                </Paper>
                <p style={{marginTop: '0px', textAlign: 'center'}}>{element.name}</p>
              </div>;
            })}
          </div>
        </div>

        <div className="row">
          <div className="col s6 right">
            <div className="section" />
            <Card>
              <div className="row landHeader titleImg">
                <div className="col s7">
                  <CardHeader
                    titleColor={fullWhite}
                    subtitleColor={fullWhite}
                    title={this.state.club.name}
                    subtitle="# of Supporters"
                    avatar="./images/Manchester-United.png"
                  />
                </div>
                <div className="col s5">
                  <div className="section support" />
                  <RaisedButton
                    className="supportClub"
                    label="Click to Support Club!"
                    backgroundColor={"#00ffa1"}
                    labelColor={"#38003d"}
                    fullWidth={true} />
                </div>
              </div>
              <div className="row">
                <div className="col s7 center matchInfo" style={{height: '298px'}}>
                  <h3 style={{marginTop: '60px'}}>Next Match</h3>
                  <p>{this.state.match[0].time}</p>
                  <p>{this.state.match[0].formatted_date}</p>
                  <h5>{this.state.match[0].localteam_name} v {this.state.match[0].visitorteam_name}</h5>
                  <p>{this.state.match[0].venue}</p>
                </div>
                <div className="col s5" style={{border: '1px solid lightgray'}}>
                  <img src="./images/kits/manchester-united-j.jpg" />
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
              <CardText>
                <div className="row center" style={{marginTop: '20px'}}>
                  <div className="col s12">
                    <h5>Club: {this.state.club.name}</h5>
                    <h5>Founded: {this.state.club.founded}</h5>
                    <h5>Coach: {this.state.club.coach_name}</h5>
                    <h5>Stadium: {this.state.club.venue_name}</h5>
                    <h5>City: {this.state.club.venue_city}</h5>
                  </div>
                </div>
              </CardText>
              <CardActions>
                <RaisedButton
                  label="Click to Support Club!"
                  backgroundColor={"#00ffa1"}
                  labelColor={"#38003d"}
                  fullWidth={true}
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
