import { browserHistory, withRouter } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText}
  from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

const Profile = React.createClass ({
  render() {
    const styleNext = {
      border: '2px solid grey',
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


    return <div>

      {/* CLUB BANNER */}
      <div className="row center">
        <img style={{width: '100%', marginTop: '20px'}} src="./images/banners/manchester-united.jpg" />
      </div>


      {/* CLUB KIT, STANDINGS, MATCHDAY */}
      <div className="row">
        <div className="col s6">
          <Card>
            <div className="row" style={styleNext}>
              <div className="col s5 center">
                <img
                  style={styleStadium}
                  src="./images/kits/manchester-united-j.jpg"
                />
              </div>
              <div className="col s7 center matchInfo">
                <h3 style={{marginTop: '20px'}}>Matchday</h3>
                <p>Friday, September 16 2016</p>
                <h5>Manchester United v Watford</h5>
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
              <div className="cardTitle" style={{padding: '16px'}}>Club Standing</div>
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
                      <TableRowColumn>1</TableRowColumn>
                      <TableRowColumn>MAN</TableRowColumn>
                      <TableRowColumn>7</TableRowColumn>
                      <TableRowColumn>7</TableRowColumn>
                      <TableRowColumn>0</TableRowColumn>
                      <TableRowColumn>0</TableRowColumn>
                      <TableRowColumn>11</TableRowColumn>
                      <TableRowColumn>0</TableRowColumn>
                      <TableRowColumn>22</TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardText>
            </div>
          </Card>


          {/* LATEST NEWS */}
          <Card>
            <div className="cardTitle" style={{padding: '16px'}}>Latest News</div>
            <CardText>
              <div className="row">
                <div className="col s3">
                  <img
                    style={styleNewsImg} src="https://www.bing.com/th?id=ON.D3ED3B9EB0E7CCB9B5003B035BB05F60&pid=News"
                  />
                </div>
                <div className="col s9">
                  <a href="https://www.bing.com">Paul Pogba a passenger for Man United in derby defeat to Man City</a>
                  <p>Paul Pogba has yet to register a goal or assist for his new club. Manchester United bought Paul Pogba back this summer for a world-record fee to help push them forward from midfield. In the Manchester derby at Old Trafford on Saturday, a more familiar ...</p>
                </div>
              </div>
              <div className="row">
                <div className="col s3">
                  <img
                    style={styleNewsImg} src="https://www.bing.com/th?id=ON.D2390540171DFA35605BB7644AFDCC85&pid=News"
                  />
                </div>
                <div className="col s9">
                  <a href="https://www.bing.com">Manchester United's $761 million revenue sets world soccer record</a>
                  <p>Manchester United (MANU) may have lost its most recent match, but the fact that it set a new world record for revenue may lessen the blow. United's financial filings show that it made $761 million in revenue in 2016, the most ever by a soccer club.</p>
                </div>
              </div>
            </CardText>
          </Card>
        </div>


        {/* RIGHT COLUMN BEGINS */}
        <div className="col s6">
          <Card>
            <div className="row">
              <CardHeader
                title="Manchester United"
                subtitle="# of Supporters"
                avatar="./images/Manchester-United.png"
                titleColor="white"
                subtitleColor="white"
                className="cardTitle"
              />
            </div>


            {/* UPCOMING MATCHES */}
            <div style={{padding: '10px', backgroundColor: '#38003d', color: 'white'}}>Upcoming Matches</div>
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
                <div className="col s2" style={{marginTop: '10px'}}>
                  12:00pm
                </div>
                <div className="col s7">
                  <div style={styleInline}>
                    <p style={styleUpMatch1}>Watford</p>
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
                    <p style={styleUpMatch3}>Manchester United</p>
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
                      Sunday, 18 September 2016
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
                    <p style={styleUpMatch1}>Watford</p>
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
                    <p style={styleUpMatch3}>Manchester United</p>
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
            <div style={{padding: '10px', backgroundColor: '#38003d', color: 'white'}}>Results</div>
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
                  <h5 style={{margin: '6px 0'}}>0 - 2</h5>
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
                    <h5 style={{margin: '6px 0'}}>0 - 2</h5>
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
            </Card>
          </Card>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Profile);
