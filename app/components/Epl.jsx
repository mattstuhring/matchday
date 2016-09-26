import { browserHistory, withRouter } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText}
  from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import _ from 'lodash';
import moment from 'moment';

const Epl = React.createClass ({
  getInitialState() {
    return {
      table: [],
      news: [],
      matches: [],
      clubImg: []
    };
  },

  componentWillMount() {
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

    axios.get('/api/clubs')
      .then((res) => {
        console.log(res.data);

        this.setState({ clubImg: res.data });
      })
      .catch((err) => {
        this.props.setToast(
          true,
          `Whoops! ${err}.`
        );
      });
  },

  handleMatches() {
    axios.get('api/clubs/matches')
      .then((res) => {
        console.log(res.data);
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
  },

  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
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

    const styleUpMatch1 = {
      position: 'relative',
      bottom: '15px',
      display: 'inline-block',
      marginRight: '10px'
    };

    const styleInline = {
      display: 'inline-block'
    };

    const styleUpRes = {
      padding: '0px 0px'
    };

    const styleTab = {
      backgroundColor: '#00ffa1',
      color: '#38003d'
    };

    const styleTableRowColumn = {
      fontSize: '18px',
      color: '#38003d',
      paddingTop: '5px',
      paddingBottom: '5px'
    };

    return <div>
      <div className="row">
        <div className="row">
          <div className="col s12 center" style={{marginTop: '30px', marginBottom: '10px', padding: '20px 0px', backgroundColor: '#00ffa1'}}>
            <img style={{width: '40%', marginTop: '8px'}} src="./images/premier.png" />
          </div>
        </div>
        <div className="col s6">
          <h3 className="center proClubNews cardTitle" style={{marginBottom: '0px', fontFamily: 'Contrail One, cursive' }}>Overview</h3>
          <Tabs>
            <Tab label="Standings" style={styleTab} >
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

                        {this.state.clubImg.map((e, i) => {
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

            <Tab label="Matches" style={styleTab} onActive={this.handleMatches}>
              <div>
                <Paper style={styleUpRes}>

                {this.state.matches.map((element, index) => {
                  return <div key={index}>
                    <Table style={{marginBottom: '5px'}}>
                      <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}>
                        <TableRow>
                          <TableHeaderColumn>
                            {element.date}
                          </TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                    </Table>

                    {element.matches.map((e, i) => {
                      return <div className="row center" key={i}>
                        <div className="col s2">
                          <p>{e.time}</p>
                        </div>
                        <div className="col s7">
                          <div style={styleInline}>
                            <p style={styleUpMatch1}>{e.localteam_name}</p>
                            <Avatar
                              src="./images/clubs/Watford.png"
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
                            <p style={styleUpMatch3}>{e.visitorteam_name}</p>
                          </div>
                        </div>
                        <div className="col s3">
                          <RaisedButton
                            label="Add Match"
                            backgroundColor="#00ffa1"
                            labelColor="#38003d"
                          />
                        </div>
                      </div>;
                    })}
                  </div>;
                })}
                </Paper>
              </div>
            </Tab>

            <Tab label="Results" style={styleTab} >
              <div>
                <h2 style={styles.headline}>Tab Three</h2>
                <p>
                  And another example tab.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>




        <div className="col s6">
          <Paper>
            <h3 className="center proClubNews cardTitle">Latest News</h3>
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
      </div>
    </div>;
  }
});

export default withRouter(Epl);
