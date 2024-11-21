import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUpdateScore } from "../hooks/useUpdateScore";

// const data = [
//   { name: "You", percentile: 30 },
//   { name: "Average", percentile: 72 },
// ];
const data = [
  { percentile: 0, numberOfStudents: 1 },
  { percentile: 25, numberOfStudents: 3 },
  { percentile: 30, numberOfStudents: 2 }, // Your percentile
  { percentile: 50, numberOfStudents: 10 },
  { percentile: 75, numberOfStudents: 6 },
  { percentile: 90, numberOfStudents: 4 },
  { percentile: 100, numberOfStudents: 1 },
];
export const ComparisonGraph = () => {
  const { updateScore, scores } = useUpdateScore();

  return (
    <div className="my-5 bg-white border border-gray-200 rounded-lg p-4">
      <h1 className="font-bold text-xl">Comparison Graph</h1>
      <p>
        <span className="text-gray-500 font-bold text-md">
          You have scored {`${scores.percentile}%`} percentile
        </span>{" "}
        which is lower than the average percentile of 72% of all the engineers
        who took this assignment
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="percentile" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="numberOfStudents"
            stroke="#8884d8"
            dot={{ stroke: "#8884d8", strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
