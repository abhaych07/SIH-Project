import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import data from "../../public/heading.json"; 

export default function AICounselling() {
  const [messages, setMessages] = useState([
    { from: "bot", text: data.botIntro },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulated bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.botReply },
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center font-semibold text-lg shadow-md">
        {data.AICounsellingPage.header}
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
            {data.AICounsellingPage.sidebar.title}
          </h2>

          {data.sidebar.tools.map((tool, i) => (
            <Card key={i} className="shadow-md border-0">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                <Button
                  className={`w-full bg-${tool.color}-600 text-white`}
                >
                  {tool.button}
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Emergency */}
          <div className="text-center">
            <Button className="w-full bg-red-600 text-white font-bold">
              {data.AICounsellingPage.sidebar.emergency.button}
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              {data.AICounsellingPage.sidebar.emergency.helpline}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
