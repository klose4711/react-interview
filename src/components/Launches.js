import React, { useState } from "react";
import "./LaunchesComponent.css";
import LaunchesComponent from "./LaunchesComponent";
import RocketsComponent from "./RocketsComponent";

function Launches() {
  
  const [rockets, setRockets] = useState([]);
  const [launches, setLaunches] = useState([]);
  
  function fetchRockets() {
    fetch("https://api.spacexdata.com/v4/rockets")
        .then(res => res.json())
        .then(data => {
          data.forEach(rocket => {
            setRockets(prevState => [...prevState, rocket]);
          });
        })
        .catch(error => console.log(error));
  }
  
  function scheduleLaunch(rocket) {
    if (!launches.includes(rocket)) {
      setLaunches(prevState => [...prevState, rocket]);
    }
  }
  
  function removeLaunch(id) {
    setLaunches(launches.filter(launch => launch.id !== id));
  }
  
  return(
      <div>
        <LaunchesComponent launches={launches} removeLaunch={removeLaunch}/>
        <RocketsComponent rockets={rockets} fetchRockets={fetchRockets} scheduleLaunch={scheduleLaunch}/>
      </div>
  );
}

export default Launches;