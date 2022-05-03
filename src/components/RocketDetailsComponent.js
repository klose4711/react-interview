import {Button, Card, ListGroup} from "react-bootstrap";
import React from "react";

function RocketDetailsComponent(props) {
  
  return (
      <div>
        {props.rockets && props.rockets.map(foo => (
            <div key={foo.id}>
              <Card style={{ width: '46rem'}} className="mt-4">
                <Card.Header>{props.rockets[0].name}</Card.Header>
                <ListGroup variant="flush">
                <ListGroup.Item   className="rocketdetails">{props.rockets[0].description}</ListGroup.Item>
                <ListGroup.Item>Weight: {props.rockets[0].mass.kg} KG</ListGroup.Item>
                </ListGroup>
                <Button onClick={() => props.scheduleLaunch(foo)}>Schedule Launch</Button>
              </Card>
            </div>
        ))}
      </div>
  )
}

export default RocketDetailsComponent;