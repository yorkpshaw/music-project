"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, Zap, RotateCcw, Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface PracticeGoalsProps {
  selectedGoal: string
  onGoalChange: (goal: string) => void
  onNext: () => void
}

export function PracticeGoals({ selectedGoal, onGoalChange, onNext }: PracticeGoalsProps) {
  const goals = [
    {
      id: "specific-audition",
      title: "Preparing for a specific audition",
      icon: Target,
    },
    {
      id: "skill-improvement",
      title: "General skill improvement",
      icon: Zap,
    },
    {
      id: "returning-break",
      title: "Returning after a break",
      icon: RotateCcw,
    },
    {
      id: "exploring",
      title: "Just exploring for now",
      icon: Search,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <div className="flex-1 max-w-sm mx-auto w-full space-y-6 pt-12">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-serif font-bold text-foreground">What brings you to AuditionLab?</h1>
          <p className="text-muted-foreground">Help us personalize your practice experience</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {goals.map((goal) => {
            const Icon = goal.icon
            return (
              <Card
                key={goal.id}
                className={cn(
                  "p-4 cursor-pointer border-2 transition-all hover:shadow-md",
                  selectedGoal === goal.id
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border hover:border-primary/50",
                )}
                onClick={() => onGoalChange(goal.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-medium text-foreground">{goal.title}</div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="pt-6">
        <Button onClick={onNext} disabled={!selectedGoal} className="w-full">
          Continue
        </Button>
      </div>
    </div>
  )
}
