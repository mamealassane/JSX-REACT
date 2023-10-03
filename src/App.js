import logo from "./logo.svg";
import "./App.css";
import Nom from "./nom";
import Prix from "./Prix";
import Description from "./Description";
import Image from "./Image";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Hello from "./hello";


function App() {
  return (
    <div className="App">
      <div className="App-head">
        {/* //parti cards */}
        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Image />
            <Card.Body>
              <Card.Title>
                <Nom />
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Description />
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Prix />
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary">Acheter</Button>{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>

 
 {/*  Afficher une image si le prénom est fourni. */}
      <div className="nam">
        <h1>
          <Hello/>
        </h1>
      </div>
    </div>
  );
}

export default App;
