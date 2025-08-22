"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { CoachingVoiceSelection } from "@/components/onboarding/coaching-voice-selection"
import { PracticeGoals } from "@/components/onboarding/practice-goals"
import { TimeCommitment } from "@/components/onboarding/time-commitment"
import { MainDashboard } from "@/components/dashboard/main-dashboard"
import { AICoachTab } from "@/components/chat/ai-coach-tab"
import { DailyCheckin } from "@/components/chat/daily-checkin"
import { AIPracticePlan } from "@/components/practice/ai-practice-plan"
import { AuditionsTab } from "@/components/auditions/auditions-tab"
import { CommunityTab } from "@/components/community/community-tab"
import { BottomNavigation } from "@/components/bottom-navigation"

type OnboardingStep = "welcome" | "coaching-voice" | "practice-goals" | "time-commitment" | "dashboard"
type AppScreen = OnboardingStep | "ai-coach" | "daily-checkin" | "practice-plan" | "auditions" | "community"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("welcome")
  const [activeTab, setActiveTab] = useState("home")

  const [onboardingData, setOnboardingData] = useState({
    coachingVoice: "",
    practiceGoal: "",
    timeCommitment: "",
  })

  const handleStartPractice = () => {
    setCurrentScreen("coaching-voice")
  }

  const handleSkipToDashboard = () => {
    setCurrentScreen("dashboard")
    setActiveTab("home")
  }

  const handleCoachingVoiceNext = () => {
    setCurrentScreen("practice-goals")
  }

  const handlePracticeGoalsNext = () => {
    setCurrentScreen("time-commitment")
  }

  const handleFinishOnboarding = () => {
    setCurrentScreen("dashboard")
    setActiveTab("home")
  }

  const handleDailyCheckin = () => {
    setCurrentScreen("daily-checkin")
  }

  const handlePracticePlan = () => {
    setCurrentScreen("practice-plan")
  }

  const handleStartPracticeSession = () => {
    // TODO: Navigate to practice session screen
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    switch (tab) {
      case "home":
        setCurrentScreen("dashboard")
        break
      case "coach":
        setCurrentScreen("ai-coach")
        break
      case "auditions":
        setCurrentScreen("auditions")
        break
      case "community":
        setCurrentScreen("community")
        break
    }
  }

  const handleBackToDashboard = () => {
    setCurrentScreen("dashboard")
    setActiveTab("home")
  }

  const handleBackToCoach = () => {
    setCurrentScreen("ai-coach")
    setActiveTab("coach")
  }

  if (currentScreen === "welcome") {
    return <WelcomeScreen onStartPractice={handleStartPractice} onSkipToDashboard={handleSkipToDashboard} />
  }

  if (currentScreen === "coaching-voice") {
    return (
      <CoachingVoiceSelection
        selectedVoice={onboardingData.coachingVoice}
        onVoiceChange={(voice) => setOnboardingData((prev) => ({ ...prev, coachingVoice: voice }))}
        onNext={handleCoachingVoiceNext}
      />
    )
  }

  if (currentScreen === "practice-goals") {
    return (
      <PracticeGoals
        selectedGoal={onboardingData.practiceGoal}
        onGoalChange={(goal) => setOnboardingData((prev) => ({ ...prev, practiceGoal: goal }))}
        onNext={handlePracticeGoalsNext}
      />
    )
  }

  if (currentScreen === "time-commitment") {
    return (
      <TimeCommitment
        selectedTime={onboardingData.timeCommitment}
        onTimeChange={(time) => setOnboardingData((prev) => ({ ...prev, timeCommitment: time }))}
        onFinish={handleFinishOnboarding}
      />
    )
  }

  if (currentScreen === "daily-checkin") {
    return <DailyCheckin onBack={handleBackToCoach} />
  }

  if (currentScreen === "practice-plan") {
    return <AIPracticePlan onBack={handleBackToDashboard} />
  }

  if (currentScreen === "ai-coach") {
    return (
      <>
        <AICoachTab onDailyCheckin={handleDailyCheckin} />
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </>
    )
  }

  if (currentScreen === "auditions") {
    return (
      <>
        <AuditionsTab />
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </>
    )
  }

  if (currentScreen === "community") {
    return (
      <>
        <CommunityTab />
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </>
    )
  }

  return (
    <>
      <MainDashboard
        onDailyCheckin={handleDailyCheckin}
        onPracticePlan={handlePracticePlan}
        onStartPractice={handleStartPracticeSession}
      />
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  )
}
