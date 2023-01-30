import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Graph({data}:any) {
 console.log(data)

  return (
    <ResponsiveContainer width="100%" 
    height={400}
    aspect={3}
    >
      <BarChart
        data={data}
        width={400}
        height={400}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
        {/* <Bar dataKey="priceUsd" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}