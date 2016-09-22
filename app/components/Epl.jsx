import { browserHistory, withRouter } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

const Epl = React.createClass ({
  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

    function handleActive(tab) {
      alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    }

    return <div>
      <div className="row">
        <div className="row">
          <div className="col s12 center" style={{marginTop: '30px', marginBottom: '10px', padding: '20px 0px', backgroundColor: '#00ffa1'}}>
            <img style={{width: '40%', marginTop: '8px'}} src="./images/premier.png" />
          </div>
        </div>
        <div className="col s6">
          <Tabs>
            <Tab label="Standings" style={{color: '#00ffa1', backgroundColor: '#38003d'}} >
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
              </Paper>
            </Tab>
            <Tab label="Matches" style={{color: '#00ffa1', backgroundColor: '#38003d'}} >
              <div>
                <h2 style={styles.headline}>Tab Two</h2>
                <p>
                  This is another example tab.
                </p>
              </div>
            </Tab>
            <Tab label="Results" style={{color: '#00ffa1', backgroundColor: '#38003d'}} >
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

export default withRouter(Epl);
