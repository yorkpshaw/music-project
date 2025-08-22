"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, MapPin, Clock, Target, Music } from "lucide-react"

interface AuditionDetailsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  audition: any
}

export function AuditionDetailsModal({ open, onOpenChange, audition }: AuditionDetailsModalProps) {
  if (!audition) return null

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">{audition.orchestra}</DialogTitle>
          <DialogDescription>{audition.position}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Date</span>
              </div>
              <p className="text-sm text-muted-foreground">{audition.date}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Time Remaining</span>
              </div>
              <Badge variant="outline" className={getDaysRemainingColor(audition.daysRemaining)}>
                {audition.daysRemaining} days
              </Badge>
            </div>
          </div>

          {audition.location && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Location</span>
              </div>
              <p className="text-sm text-muted-foreground">{audition.location}</p>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Preparation Progress</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Overall Readiness</span>
                <span className={`text-sm font-semibold ${getProgressColor(audition.progress)}`}>
                  {audition.progress}%
                </span>
              </div>
              <Progress value={audition.progress} className="h-3" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Music className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Repertoire Status</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Mozart Symphony No. 39</span>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <div className="flex justify-between">
                <span>Beethoven Symphony No. 9</span>
                <Badge variant="secondary">Needs Work</Badge>
              </div>
              <div className="flex justify-between">
                <span>Brahms Symphony No. 2</span>
                <Badge variant="outline">Not Started</Badge>
              </div>
            </div>
          </div>

          {audition.notes && (
            <div className="space-y-2">
              <span className="text-sm font-medium">Notes</span>
              <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">{audition.notes}</p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button>Start Practice Plan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
