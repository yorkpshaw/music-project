"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Mic } from "lucide-react"

interface PracticeRoom {
  id: string
  title: string
  description: string
  participants: number
  maxParticipants: number
  duration: string
  host: string
  isLive: boolean
  category: "technique" | "repertoire" | "support" | "masterclass"
}

export function PracticeRooms() {
  const rooms: PracticeRoom[] = [
    {
      id: "1",
      title: "Brahms 2 - Scherzo Focus",
      description: "Working through the technical challenges in the scherzo movement",
      participants: 3,
      maxParticipants: 8,
      duration: "45 min",
      host: "Sarah Chen",
      isLive: true,
      category: "repertoire",
    },
    {
      id: "2",
      title: "Mozart 39 Tempo Discussion",
      description: "Exploring different tempo approaches and interpretations",
      participants: 4,
      maxParticipants: 6,
      duration: "30 min",
      host: "Marcus Rodriguez",
      isLive: true,
      category: "repertoire",
    },
    {
      id: "3",
      title: "Performance Anxiety Support Group",
      description: "Sharing strategies and support for managing audition nerves",
      participants: 6,
      maxParticipants: 12,
      duration: "60 min",
      host: "Dr. Emma Thompson",
      isLive: true,
      category: "support",
    },
    {
      id: "4",
      title: "Bow Technique Masterclass",
      description: "Advanced bowing techniques with professional violinist",
      participants: 8,
      maxParticipants: 15,
      duration: "90 min",
      host: "David Kim",
      isLive: false,
      category: "masterclass",
    },
    {
      id: "5",
      title: "Intonation Workshop",
      description: "Practical exercises for improving intonation accuracy",
      participants: 2,
      maxParticipants: 10,
      duration: "45 min",
      host: "Lisa Wang",
      isLive: true,
      category: "technique",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "repertoire":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "technique":
        return "bg-green-100 text-green-800 border-green-200"
      case "support":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "masterclass":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "repertoire":
        return "Repertoire"
      case "technique":
        return "Technique"
      case "support":
        return "Support"
      case "masterclass":
        return "Masterclass"
      default:
        return "General"
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-lg font-serif font-semibold">Live Practice Rooms</h2>
        <p className="text-sm text-muted-foreground">Join fellow musicians for collaborative practice sessions</p>
      </div>

      {rooms.map((room) => (
        <Card key={room.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{room.title}</h3>
                  {room.isLive && (
                    <Badge variant="destructive" className="text-xs bg-red-600 text-white">
                      LIVE
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{room.description}</p>
                <p className="text-xs text-muted-foreground">Hosted by {room.host}</p>
              </div>
              <Badge variant="outline" className={`${getCategoryColor(room.category)} text-xs`}>
                {getCategoryLabel(room.category)}
              </Badge>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>
                  {room.participants}/{room.maxParticipants}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{room.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mic className="h-4 w-4" />
                <span>Audio enabled</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-border">
              <div className="text-xs text-muted-foreground">
                {room.participants < room.maxParticipants ? "Spots available" : "Room full"}
              </div>
              <Button
                size="sm"
                disabled={room.participants >= room.maxParticipants}
                className={room.isLive ? "bg-primary" : "bg-muted-foreground"}
              >
                {room.isLive ? "Join Room" : "Starting Soon"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
