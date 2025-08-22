"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar } from "lucide-react"

interface AuditionCardProps {
  orchestra: string
  position: string
  date: string
  daysRemaining: number
  progress: number
}

function AuditionCard({ orchestra, position, date, daysRemaining, progress }: AuditionCardProps) {
  return (
    <Card className="mb-3">
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-foreground">{orchestra}</h4>
              <p className="text-sm text-muted-foreground">{position}</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              {daysRemaining} days
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-muted-foreground">{progress}% preparation</span>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function MyAuditions() {
  const auditions = [
    {
      orchestra: "Los Angeles Philharmonic",
      position: "Second Violin",
      date: "March 15, 2024",
      daysRemaining: 45,
      progress: 68,
    },
    {
      orchestra: "Boston Symphony Orchestra",
      position: "First Violin",
      date: "April 22, 2024",
      daysRemaining: 83,
      progress: 45,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-serif">My Auditions</CardTitle>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {auditions.map((audition, index) => (
          <AuditionCard key={index} {...audition} />
        ))}
      </CardContent>
    </Card>
  )
}
