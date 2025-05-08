import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Dog", value: 60 },
  { name: "Cat", value: 40 },
];

const COLORS = ["#1B4A7B", "#ff8042"];

export default function Dashboard() {
  return (
    <div className="p-6 w-full ">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow drop-shadow-xl">
          <div>
            <p className="text-gray-600">Number of Pets</p>
            <p className="text-2xl font-semibold">30</p>
          </div>
          <img
            src="https://img.icons8.com/emoji/48/dog.png"
            alt="Pets"
            className="w-10 h-10"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow drop-shadow-xl">
          <div>
            <p className="text-gray-600">Active Bookings</p>
            <p className="text-2xl font-semibold">15</p>
          </div>
          <img
            src="https://img.icons8.com/color/48/dog-walking.png"
            alt="Bookings"
            className="w-10 h-10"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow drop-shadow-xl">
          <div>
            <p className="text-gray-600">Registered Owners</p>
            <p className="text-2xl font-semibold">20</p>
          </div>
          <img
            src="https://img.icons8.com/?size=100&id=02AbFTOZGc7a&format=png&color=000000 "
            alt="Owners"
            className="w-10 h-10"
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow drop-shadow-xl">
          <div>
            <p className="text-gray-600">Total Shop Items</p>
            <p className="text-2xl font-semibold">100</p>
          </div>
          <img
            src="https://img.icons8.com/color/48/dog-house.png
"
            alt="Shop Items"
            className="w-10 h-10"
          />
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Month Bookings</h2>
        <div className="flex justify-center items-center">
          <PieChart width={350} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
