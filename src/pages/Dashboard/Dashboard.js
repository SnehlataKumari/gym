import { Button } from "antd-mobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cards from "../../Components/Card/Card";
import CarouselImg from "../../Components/Carousel/Carousel";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Cards />
      <Button className="btn" type="primary">
        Start Training
        <FontAwesomeIcon className="svg-inline--fa" icon={faArrowRight} />
      </Button>
      <CarouselImg />
    </>
  );
}

export default Dashboard;
