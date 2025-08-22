"use client"

import { useState } from "react"
import { CommunityTabs } from "./community-tabs"
import { CommunityFeed } from "./community-feed"
import { PracticeRooms } from "./practice-rooms"

export function CommunityTab() {
  const [activeTab, setActiveTab] = useState("feed")

  const renderTabContent = () => {
    switch (activeTab) {
      case "feed":
        return <CommunityFeed />
      case "practice-rooms":
        return <PracticeRooms />
      default:
        return <CommunityFeed />
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-serif font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground">Connect with fellow musicians</p>
        </div>

        <CommunityTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
      </div>
    </div>
  )
}
