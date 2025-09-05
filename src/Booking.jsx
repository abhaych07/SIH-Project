import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"

export default function BookingPage() {
  const [date, setDate] = useState(new Date())

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              🧑‍⚕️ Book a Counselling Session
            </h2>
            <p className="text-center text-gray-500">
              All bookings are <span className="font-semibold">confidential</span>.  
              Choose your preferred date & time to connect with a counsellor.
            </p>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email / College ID</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Input id="time" type="time" />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea id="notes" placeholder="Any specific concerns you'd like to mention..." />
            </div>

            {/* Submit */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button className="w-full text-lg py-6">
                📅 Confirm Booking
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
