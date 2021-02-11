import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { NavBar, Drawer } from "antd-mobile";
import "./Routes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faDumbbell,
  faHeart,
  faUserCog,
  faStar,
  faCocktail,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

function Routes() {

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
          Dashboard
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
          <Router>
            <Route path="/">
              <Dashboard />
            </Route>
          </Router>
        </Drawer>
      </div>
    </>
  );
}

export default Routes;
