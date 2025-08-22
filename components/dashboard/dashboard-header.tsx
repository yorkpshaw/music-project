"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-serif font-bold text-foreground">AuditionLab</h1>
      <Avatar className="h-10 w-10">
        <AvatarImage src="/violinist-avatar.png" alt="User" />
        <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
      </Avatar>
    </div>
  )
}
