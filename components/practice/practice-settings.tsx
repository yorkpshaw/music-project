"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function PracticeSettings() {
  const [planDuration, setPlanDuration] = useState("8-weeks")
  const [adaptationSettings, setAdaptationSettings] = useState({
    adaptBasedOnRecordings: true,
    adjustDifficulty: true,
    incorporateFeedback: true,
    optimizeForAudition: true,
  })

  const handleAdaptationChange = (key: string, value: boolean) => {
    setAdaptationSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Plan Duration</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={planDuration} onValueChange={setPlanDuration} className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4-weeks" id="4-weeks" />
              <Label htmlFor="4-weeks" className="font-medium">
                4 Weeks
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="8-weeks" id="8-weeks" />
              <Label htmlFor="8-weeks" className="font-medium">
                8 Weeks
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="12-weeks" id="12-weeks" />
              <Label htmlFor="12-weeks" className="font-medium">
                12 Weeks
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6-months" id="6-months" />
              <Label htmlFor="6-months" className="font-medium">
                6 Months
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">AI Adaptation Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="recordings" className="font-medium">
                Adapt based on practice recordings
              </Label>
              <p className="text-sm text-muted-foreground">AI analyzes your recordings to adjust difficulty</p>
            </div>
            <Switch
              id="recordings"
              checked={adaptationSettings.adaptBasedOnRecordings}
              onCheckedChange={(value) => handleAdaptationChange("adaptBasedOnRecordings", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="difficulty" className="font-medium">
                Adjust difficulty based on progress
              </Label>
              <p className="text-sm text-muted-foreground">Automatically scale challenge level</p>
            </div>
            <Switch
              id="difficulty"
              checked={adaptationSettings.adjustDifficulty}
              onCheckedChange={(value) => handleAdaptationChange("adjustDifficulty", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="feedback" className="font-medium">
                Incorporate daily feedback
              </Label>
              <p className="text-sm text-muted-foreground">Use check-in responses to modify plans</p>
            </div>
            <Switch
              id="feedback"
              checked={adaptationSettings.incorporateFeedback}
              onCheckedChange={(value) => handleAdaptationChange("incorporateFeedback", value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="audition" className="font-medium">
                Optimize for audition date
              </Label>
              <p className="text-sm text-muted-foreground">Prioritize readiness for upcoming auditions</p>
            </div>
            <Switch
              id="audition"
              checked={adaptationSettings.optimizeForAudition}
              onCheckedChange={(value) => handleAdaptationChange("optimizeForAudition", value)}
            />
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-foreground text-background hover:bg-foreground/90">Regenerate Plan</Button>
    </div>
  )
}
