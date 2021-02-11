import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  Hint,
} from "react-vis";

export default function Graph(props) {
  return (
    <XYPlot width={300} height={150} >
      <VerticalGridLines color={"white"}/>
      <HorizontalGridLines color={"white"}/>
      <XAxis color={"white"}/>
      <YAxis color={'white'}/>
      <LineSeries
        data={[
          { x: 0, y: 1 },
          { x: 1, y: 10 },
          { x: 2, y: 5 },
          { x: 3, y: 15 },
        ]}
        color={"white"}
      />
      <Hint color={'white'} value={{ x: 1, y: 10 }} />
      <Hint
        value={{ x: 0.4, y: 14 }}
        horizontalAlign={Hint.ALIGN.RIGHT}
        verticalAlign={Hint.ALIGN.BOTTOM}
      >
        <div className="custom-hint">
          This is a custom hint
          <br />
          for a non-existent value
        </div>
      </Hint>
    </XYPlot>
  );
}