import { browserHistory, withRouter } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText}
  from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const Profile = React.createClass ({
  render() {
    const styleNext = {
      border: '1px solid lightgrey',
      marginBottom: '0px'
    };

    const styleStadium = {
      width: '80%',
      marginTop: '7px'
    };

    const styleNewsImg = {
      width: '140px',
      height: '140px',
      borderRadius: '50%'
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
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 700,
        height: 325,
        overflowY: 'auto',
        marginBottom: 10,
      },
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
                  style={styleStadium}
                  src="./images/kits/manchester-united-j.jpg"
                />
              </div>
              <div className="col s7 center matchInfoTemp">
                <h3 style={{marginTop: '20px'}}>Matchday</h3>
                <p>Friday, September 24 2016</p>
                <h5>Manchester United v Leicester</h5>
                <p>Old Trafford, Manchester</p>
                <RaisedButton
                  label="Add Match"
                  style={{marginBottom: '20px'}}
                  backgroundColor="#00ffa1"
                  labelColor="#38003d"
                />
              </div>
            </div>
            <div className="row">
              <CardText>
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
                      <TableHeaderColumn>L</TableHeaderColumn>
                      <TableHeaderColumn>GF</TableHeaderColumn>
                      <TableHeaderColumn>GA</TableHeaderColumn>
                      <TableHeaderColumn>Pts</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn style={{paddingBottom: '0px'}}>1</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>
                        <Avatar
                          src="./images/clubs/Manchester-United.png"
                          size={40}
                          style={styleInline}
                        />
                      </TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>7</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>7</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>0</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>0</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>11</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>0</TableRowColumn>
                      <TableRowColumn style={{paddingBottom: '0px'}}>22</TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardText>
            </div>
          </Card>


          {/* LATEST NEWS */}
          <div style={styles.root}>
            <GridList
              cellHeight={200}
              style={styles.gridList}
              cols={6}
            >
              <GridTile
                title="Premier League era: Manchester United’s Greatest XI"
                subtitle="Manchester United are undoubtedly the best club in the Premier League era as the club dominated both English football as well as European football with ease under legendary Sir Alex Ferguson. The club has won a record 13 Premier League titles and have ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.B7D5A7B675CE9BFFA3D7CD5959E11717&pid=News" />
              </GridTile>

              <GridTile
                title="Watford vs. Manchester United: Score and Reaction from 2016 Premier League Match"
                subtitle="Substitute Juan Camilo Zuniga condemned Manchester United to a third defeat in a row in all competitions by putting Watford 2-1 ahead at Vicarage Road on Sunday before winning a stoppage-time penalty that Troy Deeney converted to give the Hornets a 3-1 win ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.36FD9B23FBBA3766608F295196F9A081&pid=News" />
              </GridTile>

              <GridTile
                title="Impossible” For Manchester United To Win Premier League Says Steve Claridge"
                subtitle="Former Portsmouth striker Steve Claridge feels it could be impossible for Manchester United to win the league this season as Jose Mourinho is still struggling to settle on the right combinations. Manchester United went into last night’s EFL Cup game ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.DB98186270C70005C351EDD1FC0C09F2&pid=News" />
              </GridTile>

              <GridTile
                title="Premier League Playback: Why is Man United’s midfield breaking down?"
                subtitle="After three losses in a week Manchester United and Jose Mourinho is reeling. In their defeats to Manchester City last weekend, Feyenoord in midweek Europa League action and to Watford on Sunday, one thing is clear: the midfield is the main problem area."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.0F770EE1A3E76E95B96EDE95DE3EF2B7&pid=News" />
              </GridTile>

              <GridTile
                title="Manchester United vs Leicester City: Latest odds, TV information and team news ahead of the Premier League clash"
                subtitle="MANCHESTER United have the chance to arrest some poor recent Premier League form on Saturday when they host Leicester City. In the midweek EFL Cup games, there were contrasting fortunes for the two teams. Manchester United defeated Northampton 3-1 away ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.4EB20C4A352BEF9C04C0476DD05FCB66&pid=News" />
              </GridTile>

              <GridTile
                title="Manchester United in search of home comfort against Leicester"
                subtitle="Manchester (United Kingdom) (AFP) - Manchester United eased some of the pressure on manager Jose Mourinho by beating Northampton Town in midweek but that will count for little if they lose to Premier League champions Leicester City on Saturday. United ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.D86F4B04A32C3B7FE90C1032CBEFD23B&pid=News" />
              </GridTile>

              <GridTile
                title="Premier League era: Manchester United’s Greatest XI"
                subtitle="Manchester United are undoubtedly the best club in the Premier League era as the club dominated both English football as well as European football with ease under legendary Sir Alex Ferguson. The club has won a record 13 Premier League titles and have ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.B7D5A7B675CE9BFFA3D7CD5959E11717&pid=News" />
              </GridTile>

              <GridTile
                title="Watford vs. Manchester United: Score and Reaction from 2016 Premier League Match"
                subtitle="Substitute Juan Camilo Zuniga condemned Manchester United to a third defeat in a row in all competitions by putting Watford 2-1 ahead at Vicarage Road on Sunday before winning a stoppage-time penalty that Troy Deeney converted to give the Hornets a 3-1 win ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.36FD9B23FBBA3766608F295196F9A081&pid=News" />
              </GridTile>

              <GridTile
                title="Impossible” For Manchester United To Win Premier League Says Steve Claridge"
                subtitle="Former Portsmouth striker Steve Claridge feels it could be impossible for Manchester United to win the league this season as Jose Mourinho is still struggling to settle on the right combinations. Manchester United went into last night’s EFL Cup game ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.DB98186270C70005C351EDD1FC0C09F2&pid=News" />
              </GridTile>

              <GridTile
                title="Premier League Playback: Why is Man United’s midfield breaking down?"
                subtitle="After three losses in a week Manchester United and Jose Mourinho is reeling. In their defeats to Manchester City last weekend, Feyenoord in midweek Europa League action and to Watford on Sunday, one thing is clear: the midfield is the main problem area."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.0F770EE1A3E76E95B96EDE95DE3EF2B7&pid=News" />
              </GridTile>

              <GridTile
                title="Manchester United vs Leicester City: Latest odds, TV information and team news ahead of the Premier League clash"
                subtitle="MANCHESTER United have the chance to arrest some poor recent Premier League form on Saturday when they host Leicester City. In the midweek EFL Cup games, there were contrasting fortunes for the two teams. Manchester United defeated Northampton 3-1 away ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.4EB20C4A352BEF9C04C0476DD05FCB66&pid=News" />
              </GridTile>

              <GridTile
                title="Manchester United in search of home comfort against Leicester"
                subtitle="Manchester (United Kingdom) (AFP) - Manchester United eased some of the pressure on manager Jose Mourinho by beating Northampton Town in midweek but that will count for little if they lose to Premier League champions Leicester City on Saturday. United ..."
                cols={2}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="https://www.bing.com/th?id=ON.D86F4B04A32C3B7FE90C1032CBEFD23B&pid=News" />
              </GridTile>
            </GridList>
          </div>
        </div>


        {/* RIGHT COLUMN BEGINS */}
        <div className="col s6">
          <Card>

            {/* UPCOMING MATCHES */}
            <div className="cardTitle" style={{padding: '16px', backgroundColor: '#38003d', color: 'white'}}>Upcoming Matches</div>
            <CardText style={styleUpRes}>
              <Table style={{marginBottom: '5px'}}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>
                      Sunday, 2 October 2016
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
              </Table>
              <div className="row center">
                <div className="col s2" style={{marginTop: '10px'}}>
                  4:00pm
                </div>
                <div className="col s7">
                  <div style={styleInline}>
                    <p style={styleUpMatch1}>STK</p>
                    <Avatar
                      src="./images/clubs/Stoke-City.png"
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
                <div className="col s3">
                  <RaisedButton
                    label="Add Match"
                    backgroundColor="#00ffa1"
                    labelColor="#38003d"
                  />
                </div>
              </div>
            </CardText>


            {/* SHOW ALL UPCOMING RESULTS */}
            <CardHeader
              title="Show All Upcoming Matches"
              actAsExpander={true}
              showExpandableButton={true}
              titleColor="#00ffa1"
              style={{padding: '5px'}}
            />
            <CardText expandable={true} className="styleUpRes">
              <Table style={{marginBottom: '5px'}}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>
                      Sunday, 17 October 2016
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
              </Table>
              <div className="row center">
                <div className="col s2" style={{marginTop: '10px'}}>
                  12:00pm
                </div>
                <div className="col s7">
                  <div style={styleInline}>
                    <p style={styleUpMatch1}>LIV</p>
                    <Avatar
                      src="./images/clubs/Liverpool.png"
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
                <div className="col s3">
                  <RaisedButton
                    label="Add Match"
                    backgroundColor="#00ffa1"
                    labelColor="#38003d"
                  />
                </div>
              </div>
            </CardText>


            {/* RESULTS */}
            <div className="cardTitle" style={{padding: '16px', backgroundColor: '#38003d', color: 'white'}}>Results</div>
            <Card>
              <CardText style={styleUpRes}>
              <Table style={{marginBottom: '5px'}}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>
                      Sunday, 18 September 2016
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
              </Table>
              <div className="row center">
                <div className="col s4 offset-s1 right-align" style={styleInline}>
                  <p style={styleUpMatch1}>Watford</p>
                  <Avatar
                    src="./images/clubs/Watford.png"
                    size={40}
                    style={styleInline}
                  />
                </div>
                <div className="col s2" style={styleResMatch2}>
                  <h5 style={{margin: '6px 0'}}>3 - 1</h5>
                </div>
                <div className="col s4 left-align" style={styleInline}>
                  <Avatar
                    src="./images/clubs/Manchester-United.png"
                    size={40}
                    style={styleInline}
                  />
                  <p style={styleUpMatch3}>Manchester United</p>
                </div>
              </div>
              </CardText>


              {/* SHOW ALL RESULTS */}
              <CardHeader
                title="Show All Results"
                actAsExpander={true}
                showExpandableButton={true}
                titleColor="#00ffa1"
                style={{padding: '5px'}}
              />
              <CardText expandable={true} className="styleUpRes">
                <Table style={{marginBottom: '5px'}}>
                  <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>
                        Sunday, 10 September 2016
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                </Table>
                <div className="row center">
                  <div className="col s4 offset-s1 right-align" style={styleInline}>
                    <p style={styleUpMatch1}>MCI</p>
                    <Avatar
                      src="./images/clubs/Manchester-City.png"
                      size={40}
                      style={styleInline}
                    />
                  </div>
                  <div className="col s2" style={styleResMatch2}>
                    <h5 style={{margin: '6px 0'}}>0 - 2</h5>
                  </div>
                  <div className="col s4 left-align" style={styleInline}>
                    <Avatar
                      src="./images/clubs/Manchester-United.png"
                      size={40}
                      style={styleInline}
                    />
                    <p style={styleUpMatch3}>MUN</p>
                  </div>
                </div>
              </CardText>
            </Card>


            {/* SAVED */}
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


            {/* SHOW ALL UPCOMING RESULTS */}
            <CardHeader
              title="Show All Upcoming Matches"
              actAsExpander={true}
              showExpandableButton={true}
              titleColor="#00ffa1"
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
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Profile);
