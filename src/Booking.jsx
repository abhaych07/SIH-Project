import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import bookingData from "../../public/data/booking.json" // adjust path if needed

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
              {bookingData.title}
            </h2>
            <p className="text-center text-gray-500">{bookingData.subtitle}</p>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">{bookingData.fields.name.label}</Label>
              <Input id="name" placeholder={bookingData.fields.name.placeholder} />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">{bookingData.fields.email.label}</Label>
              <Input
                id="email"
                type="email"
                placeholder={bookingData.fields.email.placeholder}
              />
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <Label>{bookingData.fields.date.label}</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label htmlFor="time">{bookingData.fields.time.label}</Label>
              <Input id="time" type="time" />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">{bookingData.fields.notes.label}</Label>
              <Textarea
                id="notes"
                placeholder={bookingData.fields.notes.placeholder}
              />
            </div>

            {/* Submit */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button className="w-full text-lg py-6">
                {bookingData.button}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
