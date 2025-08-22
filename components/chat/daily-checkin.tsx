"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

interface DailyCheckinProps {
  onBack: () => void
}

export function DailyCheckin({ onBack }: DailyCheckinProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Good morning! Let's analyze yesterday's practice and optimize today's session. How did your technique work go?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickResponses = [
    "Practice went well yesterday",
    "Had some challenges with intonation",
    "Feeling motivated today",
    "Need help with rhythm",
  ]

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(content),
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "That's great to hear! Based on your progress, I recommend focusing on slow practice with the metronome today.",
      "I understand. Let's work on some intonation exercises today. We'll start with scales using a drone.",
      "Excellent! Your motivation will help us tackle some challenging passages today.",
      "Rhythm work is crucial. Let's incorporate some clapping exercises and metronome practice into today's session.",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="font-semibold text-foreground">Daily Check-in</h1>
            <p className="text-sm text-muted-foreground">{formatDate(new Date())}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-md mx-auto w-full">
        {messages.map((message) => (
          <div key={message.id} className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[80%] rounded-lg p-3 text-sm",
                message.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-card-foreground",
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Responses */}
      <div className="p-4 max-w-md mx-auto w-full">
        <div className="grid grid-cols-1 gap-2 mb-4">
          {quickResponses.map((response, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSendMessage(response)}
              className="text-left justify-start bg-transparent text-sm"
            >
              {response}
            </Button>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="I felt a little stiff"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
            className="flex-1"
          />
          <Button onClick={() => handleSendMessage(inputValue)} size="sm" className="px-3">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
