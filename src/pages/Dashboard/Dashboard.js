import { Button } from "antd-mobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CarouselImg from "../../Components/Carousel/Carousel";
import "./Dashboard.css";
import Graph from "../../Components/Graph/Graph";

function Dashboard() {
  return (
    <>
      <div className="graph-card">
      <Graph/>
      </div>
      <Button className="btn" type="primary">
        Start Training
        <FontAwesomeIcon className="svg-inline--fa" icon={faArrowRight} />
      </Button>
      <CarouselImg />
    </>
  );
}

export default Dashboard;
