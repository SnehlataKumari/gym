import { Card } from "antd-mobile";
import "./Card.css";

function Cards(items) {
  return (
    <Card className="am-card">
        <Card.Header
        className="am-card-header-content"
          title={items.title ? items.title : ""}
          // thumb={items.img}
        />
      <Card.Body className="card-body">
        {items.body}
      </Card.Body>
    </Card>
  );
}
export default Cards;
