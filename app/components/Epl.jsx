import { browserHistory, withRouter } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';


const Epl = React.createClass ({
  getInitialState() {
    return {
      match: {
        calendar: '',
        event: '',
        sum: '',
        desc: '',
        date: {},
        start: null,
        end: null,
      }
    };
  },

  handleTextChange(event) {
    console.log(event);
    const nextMatch = Object.assign({}, this.state.match, {
      [event.target.name]: event.target.value
    });

    this.setState({ match: nextMatch });
  },

  handleCalendar() {
    window.location = 'api/sms';
  },

  render() {
    const match = this.state.match;

    const styleInline = {
      display: 'inline-block'
    };

    return <div>
      <div className="row">
        <div className="col s6 center">
          <Paper>
            <h1>Calendar Event Form</h1>
            <div>
              <TextField
              hintText="Calendar Id"
              name="calendar"
              onChange={this.handleTextChange}
              value={match.calendar}
              />
            </div>
            <div>
              <TextField
              hintText="Event Id"
              name="event"
              onChange={this.handleTextChange}
              value={match.event}
              />
            </div>
            <div>
              <TextField
              hintText="Summary"
              name="sum"
              onChange={this.handleTextChange}
              value={match.sum}
              />
            </div>
            <div>
              <TextField
              hintText="Description"
              name="desc"
              onChange={this.handleTextChange}
              value={match.desc}
              />
            </div>
            <div>
              <DatePicker
                hintText="Date"
                name="date"
                onChange={this.handleTextChange}
                // value={match.date}
              />
            </div>
            <div>
              <TimePicker
                hintText="Start"
                name="start"
                onChange={this.handleTextChange}
                value={match.start}
              />
            </div>
            <div>
              <TimePicker
                hintText="End"
                name="end"
                onChange={this.handleTextChange}
                value={match.end}
              />
            </div>
            <div>
              <RaisedButton
                label="Submit"
                onTouchTap={this.handleCalendar}
              />
            </div>
          </Paper>
        </div>
        <div className="col s6" style={{border: "2px solid red", marginTop: '20px'}}>
        <Table>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>October 1, 2016</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn style={{paddingBottom: '0px',textAlign: 'center', paddingLeft: '0px', paddingRight: '0px', width: '100px'}}>11:00am</TableRowColumn>
              <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center'}}>Manchester United</TableRowColumn>
              <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center', paddingLeft: '0px', paddingRight: '0px', width: '50px'}}>
                <Avatar
                  src="./images/clubs/Manchester-United.png"
                  size={40}
                  style={styleInline}
                />
              </TableRowColumn>
              <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center', paddingLeft: '0px', paddingRight: '0px', width: '15px'}}>v</TableRowColumn>
              <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center', paddingLeft: '0px', paddingRight: '0px', width: '50px'}}>
                <Avatar
                  src="./images/clubs/Manchester-United.png"
                  size={40}
                  style={styleInline}
                />
              </TableRowColumn>
              <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center'}}>Manchester United</TableRowColumn>
              <TableRowColumn style={{paddingBottom: '0px', textAlign: 'center'}}>
                <RaisedButton
                  label="Add Match"
                  backgroundColor="#00ffa1"
                  labelColor="#38003d"
                />
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Epl);
