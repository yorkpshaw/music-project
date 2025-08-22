"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddAuditionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddAudition: (audition: any) => void
}

export function AddAuditionModal({ open, onOpenChange, onAddAudition }: AddAuditionModalProps) {
  const [formData, setFormData] = useState({
    orchestra: "",
    position: "",
    date: "",
    location: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.orchestra || !formData.position || !formData.date) return

    const auditionDate = new Date(formData.date)
    const today = new Date()
    const daysRemaining = Math.ceil((auditionDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    const newAudition = {
      id: Date.now().toString(),
      orchestra: formData.orchestra,
      position: formData.position,
      date: auditionDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      location: formData.location,
      daysRemaining: Math.max(0, daysRemaining),
      progress: 0,
      notes: formData.notes,
    }

    onAddAudition(newAudition)
    setFormData({ orchestra: "", position: "", date: "", location: "", notes: "" })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif">Add New Audition</DialogTitle>
          <DialogDescription>Add details for your upcoming orchestra audition.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orchestra">Orchestra Name</Label>
            <Input
              id="orchestra"
              value={formData.orchestra}
              onChange={(e) => setFormData((prev) => ({ ...prev, orchestra: e.target.value }))}
              placeholder="e.g., New York Philharmonic"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Select
              value={formData.position}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, position: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="First Violin">First Violin</SelectItem>
                <SelectItem value="Second Violin">Second Violin</SelectItem>
                <SelectItem value="Principal First Violin">Principal First Violin</SelectItem>
                <SelectItem value="Principal Second Violin">Principal Second Violin</SelectItem>
                <SelectItem value="Associate Principal">Associate Principal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Audition Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location (Optional)</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
              placeholder="e.g., Lincoln Center, New York"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
              placeholder="Any additional notes about this audition..."
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Audition</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
