import { NavBar, Drawer, Button } from "antd-mobile";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faDumbbell, faHeart, faUserCog, faStar, faCocktail, faChalkboardTeacher, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from '../Sidebar/Sidebar';
import Cards from '../Card/Card';
import CarouselImg from "../Carousel/Carousel";

function Header({ title }) {
  
  const [open, setOpen] = useState(false);

  const onOpenChange = (e) => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <NavBar
          icon={<FontAwesomeIcon icon={faBars} />}
          onLeftClick={onOpenChange}
          rightContent={[<FontAwesomeIcon icon={faHome} />]}
        >
          {title}
        </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center",
          }}
          sidebar={
            <Sidebar
              menuItems={[
                { title: "Diet Timeline", icon: faUtensils },
                { title: "Workout Plans", icon: faDumbbell },
                { title: "Training Screen", icon: faStar },
                { title: "Motivation", icon: faHeart },
                { title: "Add Trainee", icon: faUserCog },
                { title: "Add Food Item", icon: faCocktail },
                { title: "About Us", icon: faChalkboardTeacher },
              ]}
            />
          }
          open={open}
          onOpenChange={onOpenChange}
        >
        <Cards />

          <Button className="btn" type="primary">
            Start Training
            <FontAwesomeIcon className="svg-inline--fa" icon={faArrowRight} />
          </Button>

          <CarouselImg />
          
        </Drawer>
      </div>
    </>
  );
}
export default Header;
