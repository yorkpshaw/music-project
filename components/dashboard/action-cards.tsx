"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Calendar } from "lucide-react"

interface ActionCardsProps {
  onDailyCheckin: () => void
  onPracticePlan: () => void
  onStartPractice: () => void
}

export function ActionCards({ onDailyCheckin, onPracticePlan, onStartPractice }: ActionCardsProps) {
  return (
    <div className="space-y-4">
      <Card
        className="bg-primary text-primary-foreground cursor-pointer hover:shadow-md transition-shadow"
        onClick={onDailyCheckin}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Daily Check-in</h3>
              <p className="text-sm opacity-90">Chat with your AI coach to plan today's practice</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/20 cursor-pointer hover:shadow-md transition-shadow" onClick={onPracticePlan}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">AI Practice Plan</h3>
              <p className="text-sm text-muted-foreground">View your adaptive daily practice schedule</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={onStartPractice} className="w-full bg-foreground text-background hover:bg-foreground/90 py-6">
        Start Practice Session
      </Button>
    </div>
  )
}
