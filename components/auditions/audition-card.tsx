"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Clock } from "lucide-react"

interface AuditionCardProps {
  id: string
  orchestra: string
  position: string
  date: string
  location?: string
  daysRemaining: number
  progress: number
  onViewDetails: (id: string) => void
}

export function AuditionCard({
  id,
  orchestra,
  position,
  date,
  location,
  daysRemaining,
  progress,
  onViewDetails,
}: AuditionCardProps) {
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "text-green-600"
    if (progress >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getDaysRemainingColor = (days: number) => {
    if (days <= 14) return "bg-red-100 text-red-800 border-red-200"
    if (days <= 30) return "bg-yellow-100 text-yellow-800 border-yellow-200"
    return "bg-green-100 text-green-800 border-green-200"
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-lg">{orchestra}</h3>
            <p className="text-muted-foreground">{position}</p>
          </div>
          <Badge variant="outline" className={getDaysRemainingColor(daysRemaining)}>
            <Clock className="h-3 w-3 mr-1" />
            {daysRemaining} days
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          {location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Preparation Progress</span>
            <span className={`text-sm font-semibold ${getProgressColor(progress)}`}>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="text-xs text-muted-foreground">
            {progress < 50 ? "Early preparation" : progress < 80 ? "Good progress" : "Nearly ready"}
          </div>
          <Button variant="outline" size="sm" onClick={() => onViewDetails(id)} className="bg-transparent">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
