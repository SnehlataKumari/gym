import { List } from "antd-mobile";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useHistory } from "react-router-dom";
// import history from "../../services/history";

function Sidebar({ menuItems = [] }) {
  // const history = useHistory();

  // function handleClick(navPath, e) {
  //   console.log(history);
  //   console.log(navPath);
  //   history.push(navPath);
  // }

  return (
    <List>
      {menuItems.map((menuItem, index) => (
        <List.Item
          key={index}
          thumb={<FontAwesomeIcon icon={menuItem.icon} />}
          arrow="horizontal"
          // onClick={(e) => handleClick(menuItem.navPath, e)}
        >
          {menuItem.title}
        </List.Item>
      ))}
    </List>
  );
}
export default Sidebar;
