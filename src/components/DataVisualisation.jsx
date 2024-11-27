import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const DataVisualization = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default DataVisualization;
