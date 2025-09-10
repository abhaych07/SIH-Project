import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingPage() {
  const [customConcern, setCustomConcern] = useState("")

  const concerns = [
    "Academic Stress",
    "Anxiety / Depression",
    "Career Guidance",
    "Relationship / Peer Issues",
    "Family Concerns",
    "Other",
  ]

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">Book a Counseling Session</h2>

          {/* Preferred Location */}
          <div>
            <Label>Preferred Location / Address</Label>
            <Input placeholder="Enter your address or location" />
          </div>

          {/* Preferred Mode */}
          <div>
            <Label>Preferred Mode</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Preferred Timing */}
          <div>
            <Label>Preferred Timing</Label>
            <Input type="datetime-local" />
          </div>

          {/* Severity */}
          <div>
            <Label>Severity of Case</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Concerns */}
          <div>
            <Label>Types of Concerns</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {concerns.map((c, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox
                    id={c}
                    onCheckedChange={(checked) => {
                      if (c === "Other" && !checked) setCustomConcern("")
                    }}
                  />
                  <Label htmlFor={c}>{c}</Label>
                </div>
              ))}
            </div>
            {customConcern !== "" && (
              <Input
                placeholder="Enter your concern"
                className="mt-2"
                value={customConcern}
                onChange={(e) => setCustomConcern(e.target.value)}
              />
            )}
          </div>

          {/* Brief Description */}
          <div>
            <Label>Brief Description</Label>
            <Textarea placeholder="Write a short description..." />
          </div>

          {/* Counselor Preference */}
          <div>
            <Label>Counselor Preference (Optional)</Label>
            <RadioGroup className="flex gap-6 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="any" id="any" />
                <Label htmlFor="any">No Preference</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit */}
          <Button className="w-full mt-4">Submit Booking</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
