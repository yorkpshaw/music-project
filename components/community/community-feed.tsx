"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share, Play, Pause } from "lucide-react"
import { useState } from "react"

interface FeedPost {
  id: string
  user: {
    name: string
    avatar?: string
    initials: string
    level: string
  }
  content: string
  audioClip?: {
    title: string
    duration: string
  }
  timestamp: string
  likes: number
  comments: number
  isLiked: boolean
}

export function CommunityFeed() {
  const [posts, setPosts] = useState<FeedPost[]>([
    {
      id: "1",
      user: {
        name: "Sarah Chen",
        initials: "SC",
        level: "Professional",
      },
      content:
        "Just nailed the Mozart 39 finale! The key was slowing down the sixteenth note passages and really focusing on bow distribution. Sharing my practice recording - hope it helps others working on this piece!",
      audioClip: {
        title: "Mozart 39 - Finale Practice",
        duration: "2:34",
      },
      timestamp: "2 hours ago",
      likes: 12,
      comments: 5,
      isLiked: false,
    },
    {
      id: "2",
      user: {
        name: "Marcus Rodriguez",
        initials: "MR",
        level: "Advanced Student",
      },
      content:
        "Struggling with intonation in the Beethoven 9 scherzo. Any tips for the high position work in measures 45-60? Would love to hear how others approach this passage.",
      timestamp: "4 hours ago",
      likes: 8,
      comments: 12,
      isLiked: true,
    },
    {
      id: "3",
      user: {
        name: "Emma Thompson",
        initials: "ET",
        level: "Professional",
      },
      content:
        "Pre-audition nerves are real! Just finished a mock audition session and feeling more confident. Remember: breathe, trust your preparation, and let the music speak. You've got this! 🎻",
      timestamp: "6 hours ago",
      likes: 24,
      comments: 8,
      isLiked: false,
    },
    {
      id: "4",
      user: {
        name: "David Kim",
        initials: "DK",
        level: "Intermediate",
      },
      content:
        "Week 3 of my audition prep and finally feeling the Brahms 2 coming together. The slow practice is paying off! Here's a snippet from today's session.",
      audioClip: {
        title: "Brahms 2 - Movement 1 Excerpt",
        duration: "1:47",
      },
      timestamp: "8 hours ago",
      likes: 15,
      comments: 6,
      isLiked: true,
    },
  ])

  const [playingAudio, setPlayingAudio] = useState<string | null>(null)

  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const handlePlayAudio = (postId: string) => {
    setPlayingAudio(playingAudio === postId ? null : postId)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional":
        return "bg-green-100 text-green-800 border-green-200"
      case "Advanced Student":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {post.user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{post.user.name}</h4>
                  <Badge variant="outline" className={`text-xs ${getLevelColor(post.user.level)}`}>
                    {post.user.level}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{post.timestamp}</p>
              </div>
            </div>

            <p className="text-sm text-foreground leading-relaxed">{post.content}</p>

            {post.audioClip && (
              <Card className="bg-muted/30">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" onClick={() => handlePlayAudio(post.id)} className="p-2 h-8 w-8">
                      {playingAudio === post.id ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{post.audioClip.title}</p>
                      <p className="text-xs text-muted-foreground">{post.audioClip.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(post.id)}
                className={`gap-2 ${post.isLiked ? "text-red-600" : "text-muted-foreground"}`}
              >
                <Heart className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
                <span className="text-sm">{post.likes}</span>
              </Button>

              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">{post.comments}</span>
              </Button>

              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                <Share className="h-4 w-4" />
                <span className="text-sm">Share</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
