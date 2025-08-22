"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calendar, Brain, Target } from "lucide-react"

interface AICoachTabProps {
  onDailyCheckin: () => void
}

export function AICoachTab({ onDailyCheckin }: AICoachTabProps) {
  const coachingOptions = [
    {
      title: "Daily Check-in",
      description: "Chat with your AI coach about today's practice goals",
      icon: MessageCircle,
      action: onDailyCheckin,
      color: "bg-primary text-primary-foreground",
    },
    {
      title: "Practice Analysis",
      description: "Review your recent practice sessions and get insights",
      icon: Target,
      action: () => {},
      color: "bg-secondary text-secondary-foreground",
    },
    {
      title: "Goal Setting",
      description: "Set and track your practice and audition goals",
      icon: Calendar,
      action: () => {},
      color: "bg-accent/20 text-accent-foreground",
    },
    {
      title: "Mental Preparation",
      description: "Mindfulness and performance anxiety support",
      icon: Brain,
      action: () => {},
      color: "bg-muted text-muted-foreground",
    },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-serif font-bold text-foreground">AI Coach</h1>
          <p className="text-muted-foreground">Your personal practice companion</p>
        </div>

        <div className="space-y-4">
          {coachingOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow" onClick={option.action}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${option.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-lg font-serif">Recent Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="text-sm font-medium">Yesterday's Practice Review</p>
                  <p className="text-xs text-muted-foreground">Discussed intonation challenges</p>
                </div>
                <span className="text-xs text-muted-foreground">Yesterday</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="text-sm font-medium">Weekly Goal Check</p>
                  <p className="text-xs text-muted-foreground">Set practice targets for the week</p>
                </div>
                <span className="text-xs text-muted-foreground">3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
