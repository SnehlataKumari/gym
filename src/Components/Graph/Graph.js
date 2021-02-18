import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  Hint,
} from "react-vis";
import "./Graph.css";

export default function Graph(props) {
  return (
    <XYPlot width={300} height={150} className="rv-xy-plot">
      <VerticalGridLines color={"white"} />
      <HorizontalGridLines color={"white"} />
      <XAxis color={"white"} />
      <YAxis color={"white"} />
      <LineSeries
        data={[
          { x: 0, y: 1 },
          { x: 1, y: 10 },
          { x: 2, y: 5 },
          { x: 3, y: 15 },
        ]}
        color={"white"}
      />
      <Hint color={"white"} className="rv-hint-title" value={{ x: 1, y: 10 }} />
      <Hint
        className="rv-hint-title"
        value={{ x: 0.4, y: 14 }}
        horizontalAlign={Hint.ALIGN.RIGHT}
        verticalAlign={Hint.ALIGN.BOTTOM}
      ></Hint>
    </XYPlot>
  );
}