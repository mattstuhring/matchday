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
    return <div>
      <h1 className="center">Profile</h1>
      <div className="row">
        <div className="col s6">
          <Card>
            <div className="row landHeader">
              <CardHeader
                title="Manchester United"
                subtitle="# of Supporters"
                avatar="./images/Manchester-United.png"
              />
            </div>
            <div className="row">
              <div className="col s7 matchInfo">
                <h3 style={{marginTop: '70px'}}>Next Match</h3>
                <p>Friday, September 16 2016</p>
                <h5>Manchester United v Watford</h5>
                <p>Old Trafford, Manchester</p>
              </div>
              <div className="col s5">
                <img src="./images/kits/manchester-united-j.jpg" />
              </div>
            </div>

            <div className="cardTitle">Standing</div>
            <CardText>
              <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
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
            <div className="cardTitle">Upcoming Matches</div>
            <CardText>
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
                <div className="col s2" style={{marginTop: '10px'}}>12:00pm</div>
                  <div className="col s7">

                  <div style={{display: 'inline-block'}}>
                    <p style={{position: 'relative', bottom: '15px', display: 'inline-block', marginRight: '10px' }}>Watford</p>
                    <Avatar
                      src="./images/clubs/Watford.png"
                      size={40}
                      style={{display: 'inline-block'}}
                    />
                  </div>
                  <div style={{display: 'inline-block', paddingLeft: '10px', paddingRight: '10px', position: 'relative', bottom: '15px'}}>
                    v
                  </div>
                  <div style={{display: 'inline-block'}}>
                    <Avatar
                      src="./images/clubs/Manchester-United.png"
                      size={40}
                      style={{display: 'inline-block'}}
                    />
                    <p style={{position: 'relative', bottom: '15px', display: 'inline-block', marginLeft: '10px' }}>Manchester United</p>
                  </div>
                </div>

                <div className="col s3">
                  <RaisedButton label="Add Match" />
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="col s6">
          <Paper>
            <h3 className="center proClubNews">Club News</h3>
            <div className="row">
              <div className="col s3">
                <img style={{width: '140px', height: '140px', borderRadius: '50%'}} src="https://www.bing.com/th?id=ON.D3ED3B9EB0E7CCB9B5003B035BB05F60&pid=News" />
              </div>
              <div className="col s9">
                <a href="https://www.bing.com">Paul Pogba a passenger for Man United in derby defeat to Man City</a>
                <p>Paul Pogba has yet to register a goal or assist for his new club. Manchester United bought Paul Pogba back this summer for a world-record fee to help push them forward from midfield. In the Manchester derby at Old Trafford on Saturday, a more familiar ...</p>
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <img style={{width: '140px', height: '140px', borderRadius: '50%'}} src="https://www.bing.com/th?id=ON.D2390540171DFA35605BB7644AFDCC85&pid=News" />
              </div>
              <div className="col s9">
                <a href="https://www.bing.com">Manchester United's $761 million revenue sets world soccer record</a>
                <p>Manchester United (MANU) may have lost its most recent match, but the fact that it set a new world record for revenue may lessen the blow. United's financial filings show that it made $761 million in revenue in 2016, the most ever by a soccer club.</p>
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <img style={{width: '140px', height: '140px', borderRadius: '50%'}} src="https://www.bing.com/th?id=ON.4F77567C2F822513D41BE9146543AE62&pid=News" />
              </div>
              <div className="col s9">
                <a href="https://www.bing.com">REVEALED: 3 Ways Manchester United and Mourinho Can Maximise Paul Pogba’s Potency</a>
                <p>To have one of the best players in the world, and utilising him correctly, are two different matters. Having procured the services of Paul Pogba, United fans were looking for the hundred million man to take the league by storm, blow all the fishes out of ...</p>
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <img style={{width: '140px', height: '140px', borderRadius: '50%'}} src="https://www.bing.com/th?id=ON.51B756AA677003012B3809698B81E856&pid=News" />
              </div>
              <div className="col s9">
                <a href="https://www.bing.com">Jose Mourinho reveals battle to lure Paul Pogba to Manchester United as mystery manager at 'another big club' attempted to sign midfielder</a>
                <p>Jose Mourinho has revealed his private battle with an unnamed manager to sign Manchester United's prized asset Paul Pogba. Pogba put pen to paper at Old Trafford but Mourinho had to work hard to convince him it was his ideal destination. The Portuguese ...</p>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Profile);
