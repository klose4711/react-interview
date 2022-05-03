import {Button} from "react-bootstrap";
import React from "react";
import "./LaunchesComponent.css"

class LaunchesComponent extends React.Component {
    render() {

        function noLaunches() {
            return <>
                {!this.props.launches.length && (
                    <p>No Launches scheduled yet</p>
                )}
            </>;
        }

        return (
            <div className="launches-container">
                <h1>Launches</h1>
                {noLaunches()}
                <ol>
                    {this.props.launches && this.props.launches.map(class extends React.Component {
                        render() {
                            return (
                                <li key={this.props.id}>
                                    <Button className="mr-2" size="sm"
                                            onClick={() => alert(`Todo: remove rocket ${this.props.id} from launch`)}>X</Button>
                                    {this.props.name} | Weight: {this.props.mass.kg} kg
                                </li>
                            );
                        }
                    })}
                </ol>
            </div>
        )
    }
}

export default LaunchesComponent;