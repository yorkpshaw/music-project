"use client"

import { CardContent } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { DashboardHeader } from "./dashboard-header"
import { ActionCards } from "./action-cards"
import { ProgressOverview } from "./progress-overview"
import { QuickTools } from "./quick-tools"
import { MyAuditions } from "./my-auditions"

interface MainDashboardProps {
  onDailyCheckin: () => void
  onPracticePlan: () => void
  onStartPractice: () => void
}

export function MainDashboard({ onDailyCheckin, onPracticePlan, onStartPractice }: MainDashboardProps) {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto p-6 space-y-6">
        <DashboardHeader />

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">Welcome back.</h2>
          <p className="text-muted-foreground">Ready for another day of practice?</p>
        </div>

        <ActionCards
          onDailyCheckin={onDailyCheckin}
          onPracticePlan={onPracticePlan}
          onStartPractice={onStartPractice}
        />

        <ProgressOverview />

        <MyAuditions />

        <QuickTools />

        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-lg font-serif">My Preparation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Recent practice sessions and recordings will appear here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
