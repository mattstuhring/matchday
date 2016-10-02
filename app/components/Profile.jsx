import { browserHistory, withRouter } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText}
  from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import axios from 'axios';
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Tabs, Tab} from 'material-ui/Tabs';
import _ from 'lodash';
import moment from 'moment';
import cookie from 'react-cookie';
import TextField from 'material-ui/TextField';
import { fullWhite }
  from 'material-ui/styles/colors';

const Profile = React.createClass ({
  getInitialState() {
    return {
      table: [],
      news: [],
      matches: [],
      clubImgs: [],
      clubImg: [],
      club: [],
      match: [],
      statistics: {},
      sms: {
        to: '',
        from: '',
        body: '',
      },
    };
  },

  handleNews() {
    axios.get('https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=english+premier+league&mkt=en-us&Subscription-Key=b80e34b3295f443f8809177ae301b6a1')
      .then((res) => {
        this.setState({ news: res.data.value });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  handleTable() {
    axios.get('/api/clubs/table')
      .then((res) => {
        this.setState({ table: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  componentWillMount() {
    const nextCookies = {
      loggedIn: cookie.load('loggedIn'),
    };

    axios.get('api/me/team')
      .then((res) => {
        // console.log(res.data.teamInfo.statistics[0]);
        this.setState({match: res.data.teamInfo.game, statistics: res.data.teamInfo.statistics[0], clubImg: res.data.clubImg});
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });

    axios.get('api/clubs/matches')
      .then((res) => {
        const group = _.groupBy(res.data, (match) => {
          return match.formatted_date;
        });

        const dates = _.sortBy(Object.keys(group), (date) => {
          return moment(date, 'DD.MM.YYYY').valueOf();
        });

        const matches = dates.map((date) => {
          return {
            date: date,
            matches: _.sortBy(group[date], (match) => {
              return moment(match.time, 'HH:mmm').valueOf();
            })
          };
        });

        this.setState({ matches });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });

    axios.get('/api/clubs')
      .then((res) => {
        this.setState({ clubImgs: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  handleSms(event) {
    // window.location = 'api/sms';

    const message = {
      time: this.state.match.time,
      date: this.state.match.formatted_date,
      team1: this.state.match.localteam_name,
      team2: this.state.match.visitorteam_name,
      venue: this.state.match.venue
    };

    axios.post('/api/sms', {
      // to: '+14257651612',
      // from: '+14255599613',
      // body: 'MANU v LIV'
      to: '+14257651612',
      from: '+14255599613',
      body: message
    })
    .then((res) => {
      this.props.setToast(
        true,
        'Success!!!'
      );
      // this.setState({toast: res.data});
    })
    .catch((err) => {
      this.props.setToast(
        true,
        `Whoops! ${err}.`
      );
    });
  },

  render() {
    const styleNext = {
      border: '1px solid lightgrey',
      marginBottom: '0px'
    };

    const styleJersey = {
      width: '80%',
      marginTop: '25px'
    };

    const styleNewsImg = {
      width: '140px',
      height: '140px',
      borderRadius: '50%'
    };

    const styleTableRowColumn = {
      fontSize: '18px',
      color: '#38003d',
      paddingTop: '5px',
      paddingBottom: '5px'
    };

    const styleUpMatch1 = {
      position: 'relative',
      bottom: '15px',
      display: 'inline-block',
      marginRight: '10px'
    };

    const styleTab = {
      backgroundColor: '#00ffa1',
      color: '#38003d'
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

    const styleResMatch1 = {
      position: 'relative',
      bottom: '15px',
      display: 'inline-block',
      marginRight: '10px'
    };

    const styleInline = {
      display: 'inline-block'
    };

    const styleResMatch2 = {
      color: 'white',
      backgroundColor: 'grey'
    };

    const styleUpRes = {
      padding: '0px 0px'
    };

    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

    const styleField = {
      borderColor: 'white',
      text: {
        color: 'black',
      },
      clear: {
        opacity: '0'
      }
    };






    return <div>
      {/* CLUB BANNER */}
      <div className="row center">
        <img style={{width: '100%', marginTop: '20px'}} src="./images/banners/manchester-united.jpg" />
      </div>


      {/* CLUB KIT, STANDINGS, MATCHDAY */}
      <div className="row">
        <div className="col s6">
        <Card style={{border: '1px solid lightgrey', marginBottom: '30px'}}>
            <div className="row" style={styleNext}>
              <div className="col s5 center">
                <img
                  style={styleJersey}
                  src="./images/kits/manchester-united-j.jpg"
                />
              </div>
              <div className="col s7 center matchInfoTemp">
                <h3 style={{marginTop: '20px', marginBottom: '5px'}}>Next Match</h3>
                <div style={{height: '35px', marginBottom: '5px'}}>
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.time}
                    inputStyle={{color: 'white', textAlign: 'center', height: '35px', marginBottom: '5px'}}
                    name="time"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>
                <div style={{height: '35px', marginBottom: '5px'}}>
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.formatted_date}
                    inputStyle={{color: 'white', textAlign: 'center'}}
                    name="date"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>

                <div style={{height: '35px', marginBottom: '5px'}}>
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.localteam_name + ' v ' + this.state.match.visitorteam_name}
                    inputStyle={{color: 'white', textAlign: 'center', height: '50%', marginBottom: '5px'}}
                    name="team2"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>
                <div>
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.venue}
                    inputStyle={{color: 'white', textAlign: 'center', height: '50%', marginBottom: '5px'}}
                    name="venue"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>
                <RaisedButton
                  label="Add Match"
                  style={{marginBottom: '20px'}}
                  backgroundColor="#00ffa1"
                  labelColor="#38003d"
                  onTouchTap={this.handleSms}
                />
              </div>
            </div>
            <Card>
              <CardText>
                <Table>
                  <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                  >
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
                      <TableRowColumn style={{paddingBottom: '0px'}}>{this.state.statistics.rank}</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>
                        <Avatar
                          src="./images/clubs/Manchester-United.png"
                          size={40}
                          style={styleInline}
                        />
                      </TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>{this.state.statistics.wins}</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>{this.state.statistics.draws}</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>{this.state.statistics.losses}</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>{this.state.statistics.goals}</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>22</TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardText>
              <div className="cardTitle" style={{padding: '16px', backgroundColor: '#38003d', color: 'white'}}>Saved To Calendar</div>
              <CardText style={styleUpRes}>
                <Table style={{marginBottom: '5px'}}>
                  <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>
                        Sunday, 23 October 2016
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                </Table>
                <div className="row center">
                  <div className="col s2" style={{marginTop: '10px'}}>
                    12:00pm
                  </div>
                  <div className="col s5">
                    <div style={styleInline}>
                      <p style={styleUpMatch1}>CHE</p>
                      <Avatar
                        src="./images/clubs/Chelsea.png"
                        size={40}
                        style={styleInline}
                      />
                    </div>
                    <div style={styleUpMatch2}>v</div>
                    <div style={styleInline}>
                      <Avatar
                        src="./images/clubs/Manchester-United.png"
                        size={40}
                        style={styleInline}
                      />
                      <p style={styleUpMatch3}>MUN</p>
                    </div>
                  </div>
                  <div className="col s5">
                    <RaisedButton
                      label="update"
                      backgroundColor="#00ffa1"
                      labelColor="#38003d"
                      style={{marginRight: '15px'}}
                    />
                    <RaisedButton
                      label="delete"
                      backgroundColor="#00ffa1"
                      labelColor="#38003d"
                    />
                  </div>
                </div>
              </CardText>


              {/* SHOW ALL SAVED MATCHES */}
              <CardHeader
                title="Show All Saved Matches"
                actAsExpander={true}
                showExpandableButton={true}
                titleStyle={{color: '#00ffa1'}}
                style={{padding: '5px'}}
              />
              <CardText expandable={true} className="styleUpRes">
                <Table style={{marginBottom: '5px'}}>
                  <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>
                        Sunday, 19 November 2016
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                </Table>
                <div className="row center">
                  <div className="col s2" style={{marginTop: '10px'}}>
                    8:00am
                  </div>
                  <div className="col s5">
                    <div style={styleInline}>
                      <p style={styleUpMatch1}>ARS</p>
                      <Avatar
                        src="./images/clubs/Arsenal.png"
                        size={40}
                        style={styleInline}
                      />
                    </div>
                    <div style={styleUpMatch2}>v</div>
                    <div style={styleInline}>
                      <Avatar
                        src="./images/clubs/Manchester-United.png"
                        size={40}
                        style={styleInline}
                      />
                      <p style={styleUpMatch3}>MUN</p>
                    </div>
                  </div>
                  <div className="col s5">
                    <RaisedButton
                      label="update"
                      backgroundColor="#00ffa1"
                      labelColor="#38003d"
                    />
                    <RaisedButton
                      label="delete"
                      backgroundColor="#00ffa1"
                      labelColor="#38003d"
                    />
                  </div>
                </div>
              </CardText>
            </Card>
          </Card>
        </div>




        {/* RIGHT COLUMN BEGINS */}
        <div className="col s6">
        <h3 className="center proClubNews cardTitle" style={{marginBottom: '0px', fontFamily: 'Contrail One, cursive' }}>Overview</h3>
        <Tabs>

          <Tab label="Matches" style={styleTab}>
            <div>
              <Paper style={styleUpRes}>

              {this.state.matches.map((element, index) => {
                return <div key={index}>
                  <Table style={{marginBottom: '5px'}}>
                    <TableHeader
                      adjustForCheckbox={false}
                      displaySelectAll={false}
                      >
                      <TableRow>
                        <TableHeaderColumn>
                          {element.date}
                        </TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                  {element.matches.map((e, i) => {
                    return <div key={i}>

                      <TableRow>
                        <TableRowColumn style={{paddingBottom: '0px',textAlign: 'center', paddingLeft: '0px', paddingRight: '0px', width: '100px'}}
                        >
                          <div>
                            <TextField
                              id="text-field-default"
                              disabled={true}
                              value={e.time}
                              underlineDisabledStyle={styleField}
                              name="time"
                              inputStyle={styleField.text}
                              style={{width: '100px', paddingLeft: '25px'}}
                            />
                          </div>
                        </TableRowColumn>

                        <TableRowColumn style={{paddingBottom: '0px', width: '150px', paddingLeft: '0px', paddingRight: '0px'}}
                        >
                          <div>
                            <TextField
                              id="text-field-default"
                              disabled={true}
                              value={e.localteam_name}
                              underlineDisabledStyle={styleField}
                              name="team1"
                              inputStyle={styleField.text}
                              style={{width: '150px', textAlign: 'center'}}
                            />
                          </div>
                        </TableRowColumn>

                        <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center', paddingLeft: '0px', paddingRight: '15px', width: '50px'}}
                        >
                          <Avatar
                            src="./images/clubs/Manchester-United.png"
                            size={40}
                            style={styleInline}
                          />
                        </TableRowColumn>

                        <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center', paddingLeft: '0px', paddingRight: '0px', width: '15px'}}
                        >
                          <div>
                            <TextField
                              id="text-field-default"
                              disabled={true}
                              value="v"
                              underlineDisabledStyle={styleField}
                              name="v"
                              inputStyle={styleField.text}
                              style={{width: '15px'}}

                            />
                          </div>
                        </TableRowColumn>

                        <TableRowColumn style={{paddingBottom: '0px', textAlign: 'right', paddingLeft: '0px', paddingRight: '0px', width: '50px'}}>
                          <Avatar
                            src="./images/clubs/Manchester-United.png"
                            size={40}
                            style={styleInline}
                          />
                        </TableRowColumn>

                        <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center', width: '200px', paddingLeft: '0px', paddingRight: '0px'}}
                        >
                          <div>
                            <TextField
                              id="text-field-default"
                              disabled={true}
                              value={e.visitorteam_name}
                              underlineDisabledStyle={styleField}
                              name="team2"
                              inputStyle={styleField.text}
                              style={{width: '200px', paddingLeft: '15px'}}
                            />
                          </div>
                        </TableRowColumn>

                        <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center', paddingLeft: '0px', paddingRight: '0px', width: '50px'}}>
                          <RaisedButton
                            label="Add Match"
                            backgroundColor="#00ffa1"
                            labelColor="#38003d"
                          />
                        </TableRowColumn>
                      </TableRow>
                    </div>;
                  })}
                  </TableBody>
                  </Table>
                </div>;
              })}
              </Paper>
            </div>
          </Tab>


          <Tab label="Standings" style={styleTab} onActive={this.handleTable} >
            <Paper>
              <Table>
                <TableHeader
                  adjustForCheckbox={false}
                  displaySelectAll={false}
                >
                  <TableRow>
                    <TableHeaderColumn>#</TableHeaderColumn>
                    <TableHeaderColumn>Club</TableHeaderColumn>
                    <TableHeaderColumn>GP</TableHeaderColumn>
                    <TableHeaderColumn>W</TableHeaderColumn>
                    <TableHeaderColumn>T</TableHeaderColumn>
                    <TableHeaderColumn>D</TableHeaderColumn>
                    <TableHeaderColumn>GF</TableHeaderColumn>
                    <TableHeaderColumn>GA</TableHeaderColumn>
                    <TableHeaderColumn>Pts</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} stripedRows={true} showRowHover={true}>

                  {this.state.table.map((element) => {
                    return <TableRow key={element.position}>
                      <TableRowColumn style={styleTableRowColumn}>{element.position}</TableRowColumn>

                      {this.state.clubImgs.map((e, i) => {
                        const styleStandLogo = {
                          width: '40px',
                          height: '40px',
                          position: 'relative',
                          backgroundSize: 'contain',
                          right: '20px',
                          backgroundImage: 'url(' + e.logo + ')'
                        };

                        let logo;

                        if (parseInt(element.team_id) === e.team_id) {
                          logo = e.logo;
                        } else {
                          return;
                        }

                          return <TableRowColumn style={styleTableRowColumn} key={i}>
                            <Paper circle={true} style={styleStandLogo} ></Paper>
                          </TableRowColumn>;
                      })}

                      <TableRowColumn style={styleTableRowColumn}>{element.overall_gp}</TableRowColumn>
                      <TableRowColumn style={styleTableRowColumn}>{element.overall_w}</TableRowColumn>
                      <TableRowColumn style={styleTableRowColumn}>{element.overall_d}</TableRowColumn>
                      <TableRowColumn style={styleTableRowColumn}>{element.overall_l}</TableRowColumn>
                      <TableRowColumn style={styleTableRowColumn}>{element.home_gs}</TableRowColumn>
                      <TableRowColumn style={styleTableRowColumn}>{element.away_gs}</TableRowColumn>
                      <TableRowColumn style={styleTableRowColumn}>{element.points}</TableRowColumn>
                    </TableRow>;
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Tab>


          <Tab label="News" style={styleTab} onActive={this.handleNews} >
            <div>
              <Paper>
                <div style={{overflow: 'auto', maxHeight: '1100px'}}>
                {this.state.news.map((element, i) => {
                  let newsImg;

                  if (!element.image) {
                    newsImg = <img style={{width: '140px', height: '140px', borderRadius: '50%', marginTop: '23px'}} src="./images/logo-2017.jpg" />
                  } else {
                    newsImg = <img style={{width: '140px', height: '140px', borderRadius: '50%', marginTop: '23px'}} src={element.image.thumbnail.contentUrl} />
                  }

                  return <div className="row" style={{borderBottom: '1px solid lightgrey'}} key={i}>
                    <div className="col s3">
                      <a href={element.url} >
                        {newsImg}
                      </a>
                    </div>
                    <div className="col s9">
                      <a href={element.url} >{element.name}</a>
                      <p style={{fontStyle: 'italic'}}>{element.description}</p>
                      <p style={{fontWeight: 'bold'}}>{element.datePublished}</p>
                    </div>
                  </div>;
                })}
                </div>
              </Paper>
            </div>
          </Tab>
        </Tabs>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Profile);
