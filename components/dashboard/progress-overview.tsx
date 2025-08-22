"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProgressOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-serif">Progress Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Readiness</span>
            <span className="text-sm text-muted-foreground">68%</span>
          </div>
          <Progress value={68} className="h-2" />
          <p className="text-xs text-muted-foreground">Overall progress</p>
        </div>

        <div className="pt-2 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">This Week</span>
            <span className="text-sm font-semibold text-primary">7.5 hours</span>
          </div>
          <p className="text-xs text-muted-foreground">practiced</p>
        </div>
      </CardContent>
    </Card>
  )
}
