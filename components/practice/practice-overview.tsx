"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"

interface WeekPlan {
  week: number
  title: string
  progress: number
  status: "complete" | "in-progress" | "upcoming"
  goals: string[]
}

export function PracticeOverview() {
  const weeklyPlans: WeekPlan[] = [
    {
      week: 1,
      title: "Foundation Building",
      progress: 100,
      status: "complete",
      goals: ["Master basic fingerings", "Establish practice routine", "Record baseline performances"],
    },
    {
      week: 2,
      title: "Technical Development",
      progress: 85,
      status: "in-progress",
      goals: ["Improve intonation accuracy", "Stabilize tempo", "Refine bow technique"],
    },
    {
      week: 3,
      title: "Musical Expression",
      progress: 60,
      status: "in-progress",
      goals: ["Develop phrasing", "Work on dynamics", "Add musical interpretation"],
    },
    {
      week: 4,
      title: "Performance Preparation",
      progress: 0,
      status: "upcoming",
      goals: ["Mock auditions", "Performance anxiety work", "Final polish"],
    },
    {
      week: 5,
      title: "Repertoire Expansion",
      progress: 0,
      status: "upcoming",
      goals: ["Learn new pieces", "Sight-reading practice", "Style exploration"],
    },
    {
      week: 6,
      title: "Advanced Techniques",
      progress: 0,
      status: "upcoming",
      goals: ["Complex bowing patterns", "Extended techniques", "Virtuosic passages"],
    },
    {
      week: 7,
      title: "Audition Simulation",
      progress: 0,
      status: "upcoming",
      goals: ["Full run-throughs", "Pressure practice", "Mental preparation"],
    },
    {
      week: 8,
      title: "Final Preparation",
      progress: 0,
      status: "upcoming",
      goals: ["Performance readiness", "Confidence building", "Last-minute adjustments"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-600" />
      case "upcoming":
        return <Circle className="h-5 w-5 text-gray-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "upcoming":
        return "bg-gray-100 text-gray-600 border-gray-200"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">8-Week Plan Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Your personalized practice journey designed to maximize audition readiness
          </p>
        </CardContent>
      </Card>

      {weeklyPlans.map((plan) => (
        <Card key={plan.week} className="relative">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">{getStatusIcon(plan.status)}</div>
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Week {plan.week}: {plan.title}
                    </h3>
                    <Badge variant="outline" className={`mt-1 ${getStatusColor(plan.status)}`}>
                      {plan.status === "complete"
                        ? "Complete"
                        : plan.status === "in-progress"
                          ? "In Progress"
                          : "Upcoming"}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{plan.progress}%</span>
                  </div>
                </div>

                {plan.progress > 0 && <Progress value={plan.progress} className="h-2" />}

                <div className="space-y-1">
                  {plan.goals.map((goal, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
