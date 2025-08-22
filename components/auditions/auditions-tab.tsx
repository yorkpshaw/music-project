"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AuditionCard } from "./audition-card"
import { AddAuditionModal } from "./add-audition-modal"
import { AuditionDetailsModal } from "./audition-details-modal"

export function AuditionsTab() {
  const [auditions, setAuditions] = useState([
    {
      id: "1",
      orchestra: "Los Angeles Philharmonic",
      position: "Second Violin",
      date: "March 15, 2024",
      location: "Walt Disney Concert Hall, Los Angeles",
      daysRemaining: 45,
      progress: 68,
      notes: "Focus on Mozart 39 and Beethoven 9. Need to work on intonation in high positions.",
    },
    {
      id: "2",
      orchestra: "Boston Symphony Orchestra",
      position: "First Violin",
      date: "April 22, 2024",
      location: "Symphony Hall, Boston",
      daysRemaining: 83,
      progress: 45,
      notes: "Preliminary round includes Brahms 2. Schedule extra practice time for technical passages.",
    },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [selectedAudition, setSelectedAudition] = useState(null)

  const handleAddAudition = (newAudition: any) => {
    setAuditions((prev) => [...prev, newAudition])
  }

  const handleViewDetails = (auditionId: string) => {
    const audition = auditions.find((a) => a.id === auditionId)
    setSelectedAudition(audition)
    setShowDetailsModal(true)
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">My Auditions</h1>
            <p className="text-muted-foreground">Track your upcoming orchestra auditions</p>
          </div>
          <Button onClick={() => setShowAddModal(true)} size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>

        {auditions.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Plus className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">No auditions yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add your first audition to start tracking your preparation progress
              </p>
              <Button onClick={() => setShowAddModal(true)}>Add Your First Audition</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {auditions.map((audition) => (
              <AuditionCard key={audition.id} {...audition} onViewDetails={handleViewDetails} />
            ))}
          </div>
        )}

        <AddAuditionModal open={showAddModal} onOpenChange={setShowAddModal} onAddAudition={handleAddAudition} />

        <AuditionDetailsModal open={showDetailsModal} onOpenChange={setShowDetailsModal} audition={selectedAudition} />
      </div>
    </div>
  )
}
