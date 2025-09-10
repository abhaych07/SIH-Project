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
import data from

export default function BookingPage() {
  const [customConcern, setCustomConcern] = useState("")

  // Render fields dynamically
  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <div key={field.id}>
            <Label>{field.label}</Label>
            <Input placeholder={field.placeholder} required={field.required} />
          </div>
        )
      case "datetime-local":
        return (
          <div key={field.id}>
            <Label>{field.label}</Label>
            <Input type="datetime-local" required={field.required} />
          </div>
        )
      case "textarea":
        return (
          <div key={field.id}>
            <Label>{field.label}</Label>
            <Textarea placeholder={field.placeholder} required={field.required} />
          </div>
        )
      case "select":
        return (
          <div key={field.id}>
            <Label>{field.label}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${field.label}`} />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((opt, i) => (
                  <SelectItem key={i} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )
      case "checkbox-group":
        return (
          <div key={field.id}>
            <Label>{field.label}</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {field.options.map((opt, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox
                    id={opt.value}
                    onCheckedChange={(checked) => {
                      if (opt.value === "other" && !checked) setCustomConcern("")
                    }}
                  />
                  <Label htmlFor={opt.value}>{opt.label}</Label>
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
        )
      case "radio":
        return (
          <div key={field.id}>
            <Label>{field.label}</Label>
            <RadioGroup className="flex gap-6 mt-2">
              {field.options.map((opt, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value}>{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">{data.bookingForm.title}</h2>

          {formConfig.bookingForm.fields.map((field) => renderField(field))}

          <Button className="w-full mt-4">{data.bookingForm.submitButton.label}</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
