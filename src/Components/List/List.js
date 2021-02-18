 import {List, Badge } from 'antd-mobile';
 import './List.css';

const Item = List.Item;

const Lists = ({listItems = []}) => {

    return (
      <div>
        <List>
          {listItems.map((item, index) => (
            <Item
              key={index}
              thumb={item.imgSrc}
              arrow="horizontal"
              onClick={() => {}}
              extra={
                <div className="some">
                  <Badge text={item.weight} />
                </div>
              }
              className="am-list-item am-list-line am-list-content"
            >
              {item.title}
              <div>
                {item.badgeList
                  ? item.badgeList.map((badge, index) => (
                      <Badge key={index} text={badge.title} />
                    ))
                  : ""}
              </div>
            </Item>
          ))}
        </List>
      </div>
    );
}
export default Lists;