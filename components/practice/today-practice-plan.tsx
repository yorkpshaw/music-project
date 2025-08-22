"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertCircle, CheckCircle } from "lucide-react"

interface PracticeItem {
  title: string
  duration: number
  priority: "high" | "medium" | "low"
  reasoning: string
}

export function TodayPracticePlan() {
  const practiceItems: PracticeItem[] = [
    {
      title: "Extended Warm-up: Scales with Drone",
      duration: 15,
      priority: "high",
      reasoning: "Extended due to reported stiffness",
    },
    {
      title: "Beethoven 9 - Slow Practice with Metronome",
      duration: 25,
      priority: "high",
      reasoning: "Focus on tempo stability after yesterday's rushing",
    },
    {
      title: "Mozart 39 - Problem Passages Only",
      duration: 20,
      priority: "medium",
      reasoning: "Targeted work on challenging sections",
    },
    {
      title: "Recording Review & Self-Assessment",
      duration: 10,
      priority: "medium",
      reasoning: "Track progress and identify areas for improvement",
    },
  ]

  const totalDuration = practiceItems.reduce((sum, item) => sum + item.duration, 0)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-3 w-3" />
      case "medium":
        return <Clock className="h-3 w-3" />
      case "low":
        return <CheckCircle className="h-3 w-3" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Coach Insight */}
      <Card className="bg-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg font-serif text-primary">AI Coach Insight</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground">
            Based on yesterday's practice session, I noticed some rushing in the Beethoven excerpt. Today's plan
            emphasizes steady tempo work and intonation refinement in challenging passages.
          </p>
        </CardContent>
      </Card>

      {/* Today's Adaptations */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-lg font-serif text-yellow-800">Today's Adaptations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
            <p className="text-sm text-yellow-800">Extended warm-up time due to reported stiffness</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
            <p className="text-sm text-yellow-800">Added extra metronome work for tempo stability</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
            <p className="text-sm text-yellow-800">Reduced Mozart practice time to focus on problem areas</p>
          </div>
        </CardContent>
      </Card>

      {/* Today's Practice Plan */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-serif">Today's Practice Plan</CardTitle>
            <Badge variant="secondary" className="text-sm">
              {totalDuration} min total
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {practiceItems.map((item, index) => (
            <div key={index} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-foreground flex-1">{item.title}</h4>
                <div className="flex items-center gap-2 ml-2">
                  <Badge variant="outline" className={getPriorityColor(item.priority)}>
                    <div className="flex items-center gap-1">
                      {getPriorityIcon(item.priority)}
                      <span className="capitalize">{item.priority}</span>
                    </div>
                  </Badge>
                  <Badge variant="secondary">{item.duration} min</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">AI reasoning: {item.reasoning}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
