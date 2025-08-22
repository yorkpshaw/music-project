"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Timer, Brain } from "lucide-react"

export function QuickTools() {
  const tools = [
    { name: "Tuner", icon: Music, color: "text-primary" },
    { name: "Metronome", icon: Timer, color: "text-primary" },
    { name: "Mindfulness", icon: Brain, color: "text-primary" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-serif">Quick Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <button
                key={tool.name}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Icon className={`h-6 w-6 ${tool.color}`} />
                <span className="text-xs font-medium">{tool.name}</span>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
