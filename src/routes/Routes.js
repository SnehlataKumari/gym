import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Router, Route } from "react-router-dom";
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
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../pages/Dashboard/Dashboard";
import { NavBar, Drawer } from "antd-mobile";
import { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Routes.css";
import DeitTimeLine from "../Components/TimeLine/TimeLine";
// import history from "../services/history";
// import { Switch } from "antd";

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
                {
                  title: "Diet Timeline",
                  icon: faUtensils,
                  // navPath: "/deit-timeline",
                },
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
            {/* <Switch> */}
              <Route path="/">
                <Dashboard />
              </Route>
              <Route path="/deit-timeline">
                <DeitTimeLine
                  deitItems={[
                    {
                      time: "09:30 PM",
                      title: "Dal (1 katori) Lauki Sabzi(1 katori)",
                      description: "Roti(1 katori/chapati)",
                    },
                    {
                      time: "09:30 PM",
                      title: "Mixed Vegetable Salad (1 katori)",
                      description: "",
                    },
                    {
                      time: "09:30 PM",
                      title: "Tea with Less Sugar and Milk(1 teacup)",
                      description: "",
                    },
                    {
                      time: "09:30 PM",
                      title: "Cut Fruits(1 cup) Buttermilk(1 glass)",
                    },
                    {
                      time: "09:30 PM",
                      title: "Dal(1 katori) Gajar Matar Sabzi(1 katori)",
                      description:
                        "Dal(1 katori) Gajar Matar Sabzi(1 katori) Roti(1 Roti/chapati )",
                    },
                  ]}
                />
              </Route>
            {/* </Switch> */}
          </Router>
        </Drawer>
      </div>
    </>
  );
}

export default Routes;
