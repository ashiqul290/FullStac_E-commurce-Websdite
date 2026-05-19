import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

/* ================= DATA ================= */

const orderData = [
  { month: "Jan", ordered: 30, delivered: 10, canceled: 15 },
  { month: "Feb", ordered: 40, delivered: 30, canceled: 10 },
  { month: "Mar", ordered: 28, delivered: 45, canceled: 30 },
  { month: "Apr", ordered: 50, delivered: 32, canceled: 18 },
  { month: "May", ordered: 42, delivered: 35, canceled: 8 },
  { month: "Jun", ordered: 80, delivered: 52, canceled: 24 },
  { month: "Jul", ordered: 55, delivered: 40, canceled: 10 },
];

const pieData = [
  { name: "Team A", value: 24.9 },
  { name: "Team B", value: 31.1 },
  { name: "Team C", value: 7.3 },
  { name: "Team D", value: 24.3 },
  { name: "Team E", value: 12.4 },
];

const COLORS = ["#0d6efd", "#00e396", "#feb019", "#ff4560", "#775dd0"];

/* ================= COMPONENT ================= */

export default function Deshboardpage() {
  return (
    <div className="p-6  min-h-screen space-y-6">

      {/* ===== TOP STATS ===== */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Total Sales" value="1896" color="bg-indigo-500" />
        <StatCard title="Total Orders" value="$568" color="bg-green-500" />
        <StatCard title="Total Products" value="46%" color="bg-orange-500" />
        <StatCard title="Total Customers" value="$14M" color="bg-pink-500" />
      </div>

      {/* ===== CHART SECTION ===== */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Order Reports */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Order Reports <span className="text-sm text-gray-400">2026</span>
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={orderData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="ordered"
                stroke="#0d6efd"
                strokeWidth={3}
                dot
              />
              <Line
                type="monotone"
                dataKey="delivered"
                stroke="#00e396"
                strokeWidth={3}
                dot
              />
              <Line
                type="monotone"
                dataKey="canceled"
                stroke="#ff4560"
                strokeWidth={3}
                dot
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex gap-6 mt-4 text-sm">
            <LegendItem color="#0d6efd" text="Ordered" />
            <LegendItem color="#00e396" text="Delivered" />
            <LegendItem color="#ff4560" text="Canceled" />
          </div>
        </div>

        {/* Top 5 Products */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Top 5 Products <span className="text-sm text-blue-500">Sale</span>
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={120}
                label={({ value }) => `${value}%`}
              >
                
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function StatCard({ title, value, color }) {
  return (
    <div className={`${color} text-white  p-6 rounded-xl shadow`}>
      <p className="text-sm opacity-90">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function LegendItem({ color, text }) {
  return (
    <div className="flex  items-center gap-2">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      <span className="">{text}</span>
    </div>
  );
}