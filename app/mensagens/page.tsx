"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Send, Search, MoreVertical } from "lucide-react"

interface Conversation {
  id: string
  user: string
  username: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

interface Message {
  id: string
  sender: "me" | "other"
  content: string
  time: string
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    user: "Marta Vieira",
    username: "@marta10oficial",
    avatar: "/marta-vieira.jpg",
    lastMessage: "Obrigada pelo apoio! ⚽",
    time: "2 min",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    user: "Formiga",
    username: "@formiga8",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Vamos marcar aquele treino?",
    time: "1h",
    unread: 0,
    online: true,
  },
]

const mockMessages: Message[] = [
  {
    id: "1",
    sender: "other",
    content: "Oi! Vi seu post sobre o jogo de ontem",
    time: "14:30",
  },
  {
    id: "2",
    sender: "me",
    content: "Oi Marta! Que jogo incrível mesmo! 🔥",
    time: "14:32",
  },
  {
    id: "3",
    sender: "other",
    content: "Obrigada pelo apoio! ⚽",
    time: "14:35",
  },
]

export default function MensagensPage() {
  const [activeConversation, setActiveConversation] = useState(mockConversations[0])
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      sender: "me",
      content: newMessage,
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)]">
        <Card className="h-full flex overflow-hidden">
          {/* Conversations List */}
          <div className="w-80 border-r flex flex-col">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold mb-3">Mensagens</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar conversas..." className="pl-9" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {mockConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setActiveConversation(conversation)}
                  className={cn(
                    "w-full p-4 flex gap-3 hover:bg-accent transition-colors border-b",
                    activeConversation.id === conversation.id && "bg-accent",
                  )}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{conversation.user[0]}</AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>

                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-sm truncate">{conversation.user}</p>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  </div>

                  {conversation.unread > 0 && (
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={activeConversation.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{activeConversation.user[0]}</AvatarFallback>
                  </Avatar>
                  {activeConversation.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <div>
                  <p className="font-semibold">{activeConversation.user}</p>
                  <p className="text-xs text-muted-foreground">{activeConversation.online ? "Online" : "Offline"}</p>
                </div>
              </div>

              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={cn("flex", message.sender === "me" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl px-4 py-2",
                      message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-accent",
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={cn(
                        "text-xs mt-1",
                        message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground",
                      )}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Digite uma mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
