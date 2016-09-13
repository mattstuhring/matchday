import { browserHistory, withRouter } from 'react-router';
import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const Landing = React.createClass({
  render() {
    const clubs = [
      { club: 'Arsenal', img: './images/clubs/Arsenal.png' },
      { club: 'BourneMouth', img: './images/clubs/Bournemouth.png' },
      { club: 'Burnley', img: './images/clubs/Burnley.png' },
      { club: 'Chelsea', img: './images/clubs/Chelsea.png' },
      { club: 'Crystal Palace', img: './images/clubs/Crystal-Palace.png' },
      { club: 'Everton', img: './images/clubs/Everton.png' },
      { club: 'Hull City', img: './images/clubs/Hull-City.png' },
      { club: 'Leicester', img: './images/clubs/Leicester-City.png' },
      { club: 'Liverpool', img: './images/clubs/Liverpool.png' },
      { club: 'Manchester City', img: './images/clubs/Manchester-City.png' },
      { club: 'Manchester United', img: './images/clubs/Manchester-United.png' },
      { club: 'Middlesbrough', img: './images/clubs/Middlesbrough.png' },
      { club: 'Southampton', img: './images/clubs/Southampton.png' },
      { club: 'Stoke City', img: './images/clubs/Stoke-City.png' },
      { club: 'Sunderland', img: './images/clubs/Sunderland.png' },
      { club: 'Swansea', img: './images/clubs/Swansea-City.png' },
      { club: 'Tottenham', img: './images/clubs/Tottenham-Hotspur.png' },
      { club: 'Watford', img: './images/clubs/Watford.png' },
      { club: 'West Brom', img: './images/clubs/West-Brom.png' },
      { club: 'West Ham United', img: './images/clubs/West-Ham.png' }
    ];

    const styles = {
      mediumIcon: {
        width: 48,
        height: 48,
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24,
      },
    };

    return <div>
      <div style={{width: '100%', textAlign: 'center'}}>
        <h1>EPL-Matchday</h1>
      </div>

      <div className="row">
        <div className="col s6" style={{width: '47%'}}>
          <h3 className="center">Who do you support?</h3>
          <div className="flex-container-1">
            {clubs.map(function(element) {
              const style = {
                height: 100,
                width: 100,
                margin: 20,
                textAlign: 'center',
                display: 'inline-block',
                backgroundImage: 'url(' + element.img + ')',
              };
              return <div key={element.id}>
                <Paper style={style} zDepth={3} circle={true} className="box">
                  <IconButton
                    style={styles.medium}
                  >
                  </IconButton>
                    <p>{element.club}</p>
                </Paper>
              </div>;
            })}
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="section" />
            <Card>
              <div className="row header">
                <div className="col s7">
                  <CardHeader
                    title="Manchester United"
                    subtitle="# of Supporters"
                    avatar="./images/Manchester-United.png"
                  />
                </div>
                <div className="col s5">
                  <div className="section support" />
                  <RaisedButton className="supportClub" label="Support Club!" />
                </div>
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

              <CardTitle className="cardTitle" title="Standings" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardHeader
                className="cardTitle"
                title="Upcoming Matches"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <RaisedButton label="Support Club!" fullWidth={true} />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>;
  }
});

export default withRouter(Landing);
