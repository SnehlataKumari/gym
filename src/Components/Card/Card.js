import { Card } from "antd-mobile";
import Graph from "../Graph/Graph";
import "./Card.css";

function Cards() {
  return (
    <Card className="am-card">
      <Card.Body className="card-body">
        <Graph/>
      </Card.Body>
    </Card>
  )
}
export default Cards;
