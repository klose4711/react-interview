import React from 'react';
import LaunchesComponent from "./LaunchesComponent";
import RocketsComponent from "./RocketsComponent";

class SpaceCenterComponent extends React.Component {
  
  state = {
    rockets: [],
    launches: []
  }
  
  fetchRockets = () => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then(res => res.json())
        .catch(reason => {console.log(reason)})
  };

  getRockets = () => {
    this.fetchRockets()
  }
  
  scheduleLaunch = (rocket) => {
  if (!this.state.launches.includes(rocket)) {
  this.setState({ launches: [...this.state.launches, rocket.id] });
  }
  };
  

  render() {
    return (
        <div>
          <LaunchesComponent launches={this.state.launches} removeLaunch={this.removeLaunch}/>
          <RocketsComponent rockets={this.state.rockets} fetchRockets={this.fetchRockets} scheduleLaunch={this.scheduleLaunch}/>
        </div>
    );
  }
}

export default SpaceCenterComponent;