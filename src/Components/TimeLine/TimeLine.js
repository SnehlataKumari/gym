import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TimeLines({deitItems}) {
  return (
    <VerticalTimeline animate={false}>
      {deitItems.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--education"
          date={item.time}
          iconStyle={{ background: "cornflowerblue", color: "#fff" }}
          >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.description}</p>
          <hr/>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
export default TimeLines;
