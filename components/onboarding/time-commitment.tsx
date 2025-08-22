"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TimeCommitmentProps {
  selectedTime: string
  onTimeChange: (time: string) => void
  onFinish: () => void
}

export function TimeCommitment({ selectedTime, onTimeChange, onFinish }: TimeCommitmentProps) {
  const timeOptions = [
    { id: "30min", label: "30 minutes" },
    { id: "1hr", label: "1 hour" },
    { id: "2hrs", label: "2 hours" },
    { id: "3hrs", label: "3+ hours" },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <div className="flex-1 max-w-sm mx-auto w-full space-y-6 pt-12">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-serif font-bold text-foreground">Practice Time</h1>
          <p className="text-muted-foreground">How much time do you usually have to practice on weekdays?</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {timeOptions.map((option) => (
            <Card
              key={option.id}
              className={cn(
                "p-4 cursor-pointer border-2 transition-all hover:shadow-md text-center",
                selectedTime === option.id
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-primary/50",
              )}
              onClick={() => onTimeChange(option.id)}
            >
              <div className="font-medium text-foreground">{option.label}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <Button
          onClick={onFinish}
          disabled={!selectedTime}
          className="w-full bg-foreground text-background hover:bg-foreground/90"
        >
          Finish Setup
        </Button>
      </div>
    </div>
  )
}
