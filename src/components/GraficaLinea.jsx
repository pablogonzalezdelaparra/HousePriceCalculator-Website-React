import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

function LineGraph() {
  return (
    <Card>
      <Title>Export/Import Growth Rates (1970 to 2021)</Title>
      <LineChart
        data={chartdata}
        xColumn="year"
        yColumns={["Export Growth Rate", "Import Growth Rate"]}
        yColumnFormatter={dataFormatter}
        yLabel="Growth Rate"
        yLabelFormatter={dataFormatter}
        yLabelOffset={-50}
        yLabelRotation={-90}
        yMax={2.5}
        yMin={1.5}
      />
    </Card>
  );
}

export default LineGraph;
