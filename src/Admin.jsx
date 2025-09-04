import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, CalendarCheck, FileText, BarChart3 } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function AdminDashboard() {
  // Example stats
  const stats = [
    { title: "Total Users", value: "1,245", icon: <Users className="w-8 h-8 text-blue-500" /> },
    { title: "Bookings", value: "320", icon: <CalendarCheck className="w-8 h-8 text-green-500" /> },
    { title: "Resources Uploaded", value: "56", icon: <FileText className="w-8 h-8 text-purple-500" /> },
    { title: "Reports Generated", value: "78", icon: <BarChart3 className="w-8 h-8 text-orange-500" /> },
  ]

  // Example pie chart data
  const chartData = [
    { name: "Students", value: 65 },
    { name: "Counsellors", value: 25 },
    { name: "Admins", value: 10 },
  ]

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
      >
        📊 Admin Dashboard
      </motion.h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="shadow-md rounded-2xl hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                {stat.icon}
                <h3 className="text-gray-600">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Chart + Recent Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Pie Chart */}
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">User Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-gray-600">
              <li>✅ New counsellor registered</li>
              <li>📥 3 new resources uploaded</li>
              <li>📌 12 new bookings confirmed</li>
              <li>⚡ Admin generated a report</li>
            </ul>
            <Button className="mt-4 w-full">View All</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
