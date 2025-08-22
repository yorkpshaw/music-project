"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

interface WelcomeScreenProps {
  onStartPractice: () => void
  onSkipToDashboard: () => void
}

export function WelcomeScreen({ onStartPractice, onSkipToDashboard }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-sm p-8 text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-serif font-bold text-foreground">AUDITIONLAB</h1>
            <p className="text-muted-foreground leading-relaxed">
              You're in. Welcome to AuditionLab. Let's get to work.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button onClick={onStartPractice} className="w-full bg-foreground text-background hover:bg-foreground/90">
            Start First Practice
          </Button>

          <Button onClick={onSkipToDashboard} variant="outline" className="w-full bg-transparent">
            Skip to Dashboard
          </Button>
        </div>
      </Card>
    </div>
  )
}
