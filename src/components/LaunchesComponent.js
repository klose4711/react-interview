import {Button} from "react-bootstrap";
import React from "react";
import "./LaunchesComponent.css"

function LaunchesComponent(props) {

    function noLaunches() {
        return <>
            {!props.launches.length && (
                <p>No Launches scheduled yet</p>
            )}
        </>;
    }

    return (
        <div className="launches-container">
            <h1>Launches</h1>
            {noLaunches()}
            <ol>
                {props.launches && props.launches.map(launch => (
                    <li key={launch.id}>
                        <Button className="mr-2" size="sm"
                                onClick={() => alert(`Todo: remove rocket ${launch.id} from launch`)}>X</Button>
                        {launch.name} | Weight: {launch.mass.kg} kg
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default LaunchesComponent;