import {
  BarChart,
  Cell,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";

const Rechart = ({ bookedTutors }) => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${
      y + height / 3
    } ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width},${y + height}
            Z`;
  };
  return (
    <div
      className={`border border-slate-200 rounded-lg mx-4 flex justify-center mb-20 mt-30 shadow-lg lg:mt-10 bg-white ${
        bookedTutors?.length == "0" ? "hidden" : "block"
      }`}
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={1000}
          height={300}
          data={bookedTutors}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3,3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="review" fill="#8884d8" label={{ position: "top" }}>
            {bookedTutors.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
          <Line
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            yAxisId="left"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
