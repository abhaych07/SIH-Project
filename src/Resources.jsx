import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, BookOpen, Headphones, Video } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Guided Meditation",
      description: "10-minute audio for stress relief and mindfulness.",
      icon: <Headphones className="w-10 h-10 text-blue-500" />,
      type: "Audio",
      link: "#"
    },
    {
      title: "Coping with Academic Stress",
      description: "A quick guide with proven techniques for handling pressure.",
      icon: <BookOpen className="w-10 h-10 text-green-500" />,
      type: "Article",
      link: "#"
    },
    {
      title: "Sleep Hygiene Tips",
      description: "Video series on building better sleep habits.",
      icon: <Video className="w-10 h-10 text-purple-500" />,
      type: "Video",
      link: "#"
    },
    {
      title: "Relaxation Audio Pack",
      description: "Collection of sounds for focus, relaxation, and calmness.",
      icon: <PlayCircle className="w-10 h-10 text-pink-500" />,
      type: "Audio",
      link: "#"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          🌱 Wellness Resources
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore curated resources to support your mental well-being.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-md rounded-2xl hover:shadow-xl transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  {res.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{res.title}</h3>
                  <p className="text-gray-500">{res.description}</p>
                  <Button asChild className="mt-2">
                    <a href={res.link} target="_blank" rel="noopener noreferrer">
                      Open {res.type}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
