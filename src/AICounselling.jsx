// src/pages/AICounselling.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import headings from "@/data/headings.json";


export default function AICounselling() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m your AI Support. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulated bot reply (replace with backend / AI API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "I hear you. Try a short breathing exercise or would you like to book a counsellor?",
        },
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center font-semibold text-lg shadow-md">
        {headings.AICounsellingPage.mainHeading}
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col border-r bg-white">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-2xl max-w-xs ${
                  msg.from === "user"
                    ? "ml-auto bg-blue-100 text-blue-900"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Button onClick={handleSend} className="bg-blue-600 text-white">
              Send
            </Button>
          </div>
        </div>

        {/* Side Tools */}
        <aside className="w-80 p-6 space-y-6 bg-blue-50 hidden md:block">
          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Quick Tools
          </h2>

          {/* Breathing Exercise */}
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Breathing Exercise</h3>
              <p className="text-sm text-gray-600 mb-3">
                Try box breathing for 2 minutes.
              </p>
              <Button className="w-full bg-blue-600 text-white">
                Start
              </Button>
            </CardContent>
          </Card>

          {/* Relaxation Audio */}
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Relaxation Audio</h3>
              <p className="text-sm text-gray-600 mb-3">
                Play 5-min guided meditation.
              </p>
              <Button className="w-full bg-green-600 text-white">
                Play
              </Button>
            </CardContent>
          </Card>

          {/* Book Counsellor */}
          <Card className="shadow-md border-0">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Need to Talk?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Book a confidential appointment.
              </p>
              <Button className="w-full bg-purple-600 text-white">
                Book Now
              </Button>
            </CardContent>
          </Card>

          {/* Emergency */}
          <div className="text-center">
            <Button className="w-full bg-red-600 text-white font-bold">
              🚨 Emergency Help
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              Call KIRAN Helpline: 1800-599-0019
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
