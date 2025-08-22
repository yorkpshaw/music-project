"use client"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface CoachingVoiceSelectionProps {
  selectedVoice: string
  onVoiceChange: (voice: string) => void
  onNext: () => void
}

export function CoachingVoiceSelection({ selectedVoice, onVoiceChange, onNext }: CoachingVoiceSelectionProps) {
  const coachingStyles = [
    {
      id: "warm-musical",
      title: "Warm & Musical",
      description: "Expressive phrasing, supportive tone, musical storytelling",
    },
    {
      id: "analytical-technician",
      title: "Analytical Technician",
      description: "Precise, detail-oriented feedback, tempo + rhythm focus",
    },
    {
      id: "supportive-partner",
      title: "Supportive Practice Partner",
      description: "Motivating, gentle structure, goal tracking and encouragement",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <div className="flex-1 max-w-sm mx-auto w-full space-y-6 pt-12">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-serif font-bold text-foreground">Choose Your Coaching Style</h1>
          <p className="text-muted-foreground">Select the coaching approach that resonates with you</p>
        </div>

        <RadioGroup value={selectedVoice} onValueChange={onVoiceChange} className="space-y-4">
          {coachingStyles.map((style) => (
            <div key={style.id} className="relative">
              <RadioGroupItem value={style.id} id={style.id} className="peer sr-only" />
              <Label
                htmlFor={style.id}
                className="flex cursor-pointer rounded-lg border border-border p-4 hover:bg-muted/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-colors"
              >
                <div className="space-y-1">
                  <div className="font-medium text-foreground">{style.title}</div>
                  <div className="text-sm text-muted-foreground">{style.description}</div>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="pt-6">
        <Button onClick={onNext} disabled={!selectedVoice} className="w-full">
          Continue
        </Button>
      </div>
    </div>
  )
}
