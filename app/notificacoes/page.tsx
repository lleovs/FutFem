"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface Notification {
  id: string
  type: "like" | "comment" | "mention" | "follow"
  user: string
  username: string
  avatar: string
  content: string
  time: string
  postPreview?: string
  unread: boolean
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    user: "Marta Vieira",
    username: "@marta10oficial",
    avatar: "/marta-vieira.jpg",
    content: "curtiu seu post sobre o jogo de ontem",
    time: "2 minutos atrás",
    postPreview: "/placeholder.svg?height=60&width=60",
    unread: true,
  },
  {
    id: "2",
    type: "comment",
    user: "Formiga",
    username: "@formiga8",
    avatar: "/placeholder.svg?height=40&width=40",
    content: 'comentou: "Que jogada incrível! 🔥"',
    time: "5 minutos atrás",
    postPreview: "/placeholder.svg?height=60&width=60",
    unread: true,
  },
  {
    id: "3",
    type: "follow",
    user: "Passaabola",
    username: "@passaabola",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "começou a te seguir",
    time: "10 minutos atrás",
    unread: true,
  },
]

export default function NotificacoesPage() {
  const [activeTab, setActiveTab] = useState("todas")
  const [notifications, setNotifications] = useState(mockNotifications)

  const tabs = [
    { id: "todas", label: "Todas" },
    { id: "mencoes", label: "Menções" },
    { id: "curtidas", label: "Curtidas" },
    { id: "seguidores", label: "Seguidores" },
  ]

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notificações</h1>
          <Button variant="ghost" size="icon">
            <Check className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex gap-4 mb-6 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-4 hover:bg-accent/50 transition-colors ${notification.unread ? "bg-accent/30" : ""}`}
            >
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{notification.user[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold">{notification.user}</span> {notification.content}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>

                    {notification.postPreview && (
                      <img
                        src={notification.postPreview || "/placeholder.svg"}
                        alt="Post preview"
                        className="w-12 h-12 rounded object-cover"
                      />
                    )}
                  </div>

                  {notification.type === "follow" && (
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" className="rounded-full">
                        Seguir de volta
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                        Remover
                      </Button>
                    </div>
                  )}
                </div>

                {notification.unread && <div className="w-2 h-2 rounded-full bg-primary mt-1" />}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
