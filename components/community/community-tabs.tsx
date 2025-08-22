"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CommunityTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function CommunityTabs({ activeTab, onTabChange }: CommunityTabsProps) {
  const tabs = [
    { id: "feed", label: "Feed" },
    { id: "practice-rooms", label: "Practice Rooms" },
  ]

  return (
    <div className="flex bg-muted rounded-lg p-1 mb-6">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="ghost"
          size="sm"
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex-1 rounded-md transition-colors",
            activeTab === tab.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}
