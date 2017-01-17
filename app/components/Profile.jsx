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
import Sms from 'material-ui/svg-icons/notification/sms';
import Delete from 'material-ui/svg-icons/action/delete';
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
      messages: [],
      clubImgs: [],
      clubImg: [],
      imgs: [],
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
    axios.get('https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=manchester+united&mkt=en-us&Subscription-Key=96366b1419b44f2da9d6d7b4df919268')
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
    axios.get('api/me/team')
      .then((res) => {
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
          return match.date;
        });

        const dates = _.sortBy(Object.keys(group), (date) => {
          return date.valueOf();
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
        const obj = {};

        for (let i=0; i<res.data.length; i++) {
          obj[res.data[i].team_id] = res.data[i].logo
        }
        this.setState({ clubImgs: obj, imgs: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });

    axios.get('/api/sms/all')
      .then((res) => {
        this.setState({ messages: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  handleSms(event) {
    const message = {
      time: this.state.match.pacific,
      date: this.state.match.formatted_date,
      team1: this.state.match.localteam_name,
      team2: this.state.match.visitorteam_name,
      venue: this.state.match.venue
    };

    axios.post('/api/sms', {
      to: '+14257651612',
      from: '+14255599613',
      body: message
    })
    .then((res) => {
      this.setState({ messages: res.data });

      this.props.setToast(
        true,
        'Test SMS was a success!  Renew Twilio subscription :('
      );
    })
    .catch((err) => {
      this.props.setToast(
        true,
        `Whoops! ${err}.`
      );
    });
  },

  handleTabSms(event) {
    const message = {
      time: event.pacific,
      date: event.formatted_date,
      team1: event.localteam_name,
      team2: event.visitorteam_name,
      venue: event.venue
    };

    axios.post('/api/sms', {
      to: '+14257651612',
      from: '+14255599613',
      body: message
    })
    .then((res) => {
      this.setState({ messages: res.data });

      this.props.setToast(
        true,
        'Success!!!'
      );
    })
    .catch((err) => {
      this.props.setToast(
        true,
        `Whoops! ${err}.`
      );
    });
  },

  handleSmsDelete(message) {
    // Example Senior Dev one line filter function.
    // const nextMessages = this.state.messages.filter((el) => el !== message)
    const nextMessages = this.state.messages.filter((element) => {
      return element !== message;
    })

    this.setState({ messages: nextMessages });

    axios.delete(`/api/sms/${message.id}`)
      .then((res) => {
        this.props.setToast(
          true,
          'Deleted Message!'
        );
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  render() {
    const styleField = {
      borderColor: 'white',
      text: {
        color: 'black',
      },
      clear: {
        opacity: '0'
      },
      date: {
        color: 'white',
        textAlign: 'center',
        height: '35px',
        marginBottom: '5px',
        fontSize: '16px'
      },
      time: {
        color: 'white',
        textAlign: 'center',
        height: '35px',
        marginBottom: '5px',
      },
      team: {
        color: 'white',
        textAlign: 'center',
        height: '35px',
        marginBottom: '5px',
        fontSize: '20px'
      },
      venue: {
        color: 'white',
        textAlign: 'center',
        height: '35px',
        marginBottom: '5px',
        fontSize: '14px'
      }
    };

    const styleDeleteBtn = {
      backgroundColor: '#00ffa1',
      width: '30px',
      height: '30px',
      borderRadius: '4px'
    };

    return <div>
      {/* CLUB BANNER */}
      <div className="row center">
        <img className="pro-banner" src="./images/banners/manchester-united.jpg" />
      </div>


      {/* CLUB KIT, STANDINGS, MATCHDAY */}
      <div className="row">
        <div className="col s12 l6">
        <Card className="pro-card">
            <div className="row pro-next">
              <div className="col s5 center">
                <img
                  className="pro-jersey"
                  src="./images/kits/manchester-united-j.jpg"
                />
              </div>
              <div className="col s7 center matchInfoTemp">
                <h3 className="pro-info-title">Next Match</h3>
                <div className="row pro-info">
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.date}
                    inputStyle={styleField.date}
                    name="date"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>
                <div className="row pro-info">
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.pacific}
                    inputStyle={styleField.time}
                    name="time"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>

                <div className="row pro-info">
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.localteam_name + ' v ' + this.state.match.visitorteam_name}
                    inputStyle={styleField.team}
                    name="team2"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>
                <div className="row pro-info">
                  <TextField
                    id="text-field-default"
                    disabled={true}
                    value={this.state.match.venue}
                    inputStyle={styleField.venue}
                    name="venue"
                    underlineDisabledStyle={styleField.clear}
                  />
                </div>
                <RaisedButton
                  label="send next match reminder"
                  labelPosition="before"
                  icon={<Sms />}
                  className="pro-send-btn"
                  backgroundColor="#00ffa1"
                  labelColor="#38003d"
                  onClick={this.handleSms}
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
                      <TableRowColumn className="pro-table-pad" >{this.state.statistics.rank}</TableRowColumn>
                      <TableRowColumn className="pro-table-avatar">
                        <Avatar
                          src="./images/clubs/Manchester-United.png"
                          size={40}
                          className="pro-inline"
                          backgroundColor={fullWhite}
                        />
                      </TableRowColumn>
                      <TableRowColumn className="pro-table-pad">{this.state.statistics.wins}</TableRowColumn>
                      <TableRowColumn className="pro-table-pad">{this.state.statistics.draws}</TableRowColumn>
                      <TableRowColumn className="pro-table-pad">{this.state.statistics.losses}</TableRowColumn>
                      <TableRowColumn className="pro-table-pad">{this.state.statistics.goals}</TableRowColumn>
                      <TableRowColumn className="pro-table-pad">22</TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardText>



              {/* SMS SAVED MATCHES */}
              <div className="cardTitle pro-sms-title">Recently Texted Match Reminders</div>
              <CardText className="pro-card-text">
                <Table className="pro-sms-table">
                  <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>
                        Match Week
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                </Table>
                {this.state.messages.map((message, index) => {
                  return <div className="row center" key={index}>
                    <div className="col s2 pro-sms-row">
                      {message.date}
                    </div>
                    <div className="col s2 pro-sms-row">
                      {message.time}
                    </div>
                    <div className="col s6 pro-sms-row">
                      {message.team1} v {message.team2}
                    </div>
                    <div className="col 2">
                      <IconButton
                        iconStyle={styleDeleteBtn}
                        onClick={() => this.handleSmsDelete(message)}
                      >
                        <Delete />
                      </IconButton>
                    </div>
                  </div>
                })}
              </CardText>
            </Card>
          </Card>
        </div>



      {/* RIGHT COLUMN BEGINS */}


        <div className="col s12 l6">
          <h3 className="center cardTitle pro-overview">Overview</h3>

        {/* TABS - OVERWIEW */}
          <Tabs>
            {/* TAB - ALL MATCHES OF THE WEEK */}
            <Tab label="Matches" className="pro-tab">
              <Paper className="pro-card-text">
                {this.state.matches.map((element, index) => {
                  return <div key={index}>
                    <Table className="pro-m-table">
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
                    </Table>
                    {element.matches.map((e, i) => {
                      return <div key={i} className="row">

                        <div className="col s1">
                          <TextField
                            id="text-field-default"
                            disabled={true}
                            value={e.pacific}
                            underlineDisabledStyle={styleField}
                            name="time"
                            inputStyle={styleField.text}
                            className="pro-field-time"
                          />
                        </div>

                        <div className="col s3 right-align">
                          <TextField
                            id="text-field-default"
                            disabled={true}
                            value={e.localteam_name}
                            underlineDisabledStyle={styleField}
                            name="team1"
                            inputStyle={styleField.text}
                            className="pro-field-team"
                          />
                        </div>

                        <div className="col s1">
                          <Avatar
                            src={this.state.clubImgs[e.localteam_id]}
                            size={40}
                            backgroundColor={fullWhite}
                            className="pro-field-local"
                          />
                        </div>

                        <div className="col s1">
                          <TextField
                            className="center-align"
                            id="text-field-default"
                            disabled={true}
                            value="v"
                            underlineDisabledStyle={styleField}
                            name="v"
                            inputStyle={styleField.text}
                            className="pro-field-v"
                          />
                        </div>

                        <div className="col s1">
                          <Avatar
                            src={this.state.clubImgs[e.visitorteam_id]}
                            size={40}
                            className="pro-field-visitor"
                            backgroundColor={fullWhite}
                          />
                        </div>

                        <div className="col s3">
                          <TextField
                            id="text-field-default"
                            disabled={true}
                            value={e.visitorteam_name}
                            underlineDisabledStyle={styleField}
                            name="team2"
                            inputStyle={styleField.text}
                            className="pro-field-team2"
                          />
                        </div>

                        <div className="col s1">
                          <RaisedButton
                            icon={<Sms />}
                            backgroundColor="#00ffa1"
                            labelColor="#38003d"
                            onClick={() => this.handleTabSms(e)}
                          />
                        </div>
                      </div>;
                    })}
                  </div>;
                })}
              </Paper>
            </Tab>



            {/* TAB - EPL TABLE */}
            <Tab label="Standings" className="pro-tab" onActive={this.handleTable} >
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
                        <TableRowColumn className="pro-table">
                          {element.position}
                        </TableRowColumn>

                        {this.state.imgs.map((e, i) => {
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

                            return <TableRowColumn className="pro-table" key={i}>
                              <Paper circle={true} style={styleStandLogo} ></Paper>
                            </TableRowColumn>;
                        })}

                        <TableRowColumn className="pro-table">{element.overall_gp}</TableRowColumn>
                        <TableRowColumn className="pro-table">{element.overall_w}</TableRowColumn>
                        <TableRowColumn className="pro-table">{element.overall_d}</TableRowColumn>
                        <TableRowColumn className="pro-table">{element.overall_l}</TableRowColumn>
                        <TableRowColumn className="pro-table">{element.home_gs}</TableRowColumn>
                        <TableRowColumn className="pro-table">{element.away_gs}</TableRowColumn>
                        <TableRowColumn className="pro-table">{element.points}</TableRowColumn>
                      </TableRow>;
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Tab>

            {/* TAB - BING NEWS */}
            <Tab label="News" className="pro-tab" onActive={this.handleNews} >
              <div>
                <Paper>
                  <div className="pro-news">
                  {this.state.news.map((element, i) => {
                    let newsImg;

                    if (!element.image) {
                      newsImg = <img className="pro-news-img" src="./images/logo-2017.jpg" />
                    } else {
                      newsImg = <img className="pro-news-img" src={element.image.thumbnail.contentUrl} />
                    }

                    return <div className="row pro-news-box" key={i}>
                      <div className="col s3">
                        <a href={element.url} >
                          {newsImg}
                        </a>
                      </div>
                      <div className="col s9">
                        <a href={element.url} >{element.name}</a>
                        <p><i>{element.description}</i></p>
                        <p><b>{element.datePublished}</b></p>
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
