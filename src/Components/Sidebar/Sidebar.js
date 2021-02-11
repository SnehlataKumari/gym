import { List } from "antd-mobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ menuItems = [] }) => (
  <List>
    {menuItems.map((menuItem, index) => (
      <List.Item
        key={index}
        thumb={<FontAwesomeIcon icon={menuItem.icon} />}
        arrow="horizontal"
      >
        {menuItem.title}
      </List.Item>
    ))}
  </List>
);
export default Sidebar;
