"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PracticePlanTabs } from "./practice-plan-tabs"
import { TodayPracticePlan } from "./today-practice-plan"
import { PracticeOverview } from "./practice-overview"
import { PracticeSettings } from "./practice-settings"

interface AIPracticePlanProps {
  onBack: () => void
}

export function AIPracticePlan({ onBack }: AIPracticePlanProps) {
  const [activeTab, setActiveTab] = useState("today")

  const renderTabContent = () => {
    switch (activeTab) {
      case "today":
        return <TodayPracticePlan />
      case "overview":
        return <PracticeOverview />
      case "settings":
        return <PracticeSettings />
      default:
        return <TodayPracticePlan />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="font-semibold text-foreground">AI Practice Plan</h1>
            <p className="text-sm text-muted-foreground">Personalized practice schedule</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto p-6 pb-20">
        <PracticePlanTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
      </div>
    </div>
  )
}
