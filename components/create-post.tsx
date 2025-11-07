"use client"

import { useState } from "react"
import { ImageIcon, MapPin, Smile, BarChart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface CreatePostProps {
  onPost?: (content: string) => void
}

export function CreatePost({ onPost }: CreatePostProps) {
  const [content, setContent] = useState("")

  const handlePost = () => {
    if (content.trim()) {
      onPost?.(content)
      setContent("")
    }
  }

  return (
    <Card className="p-6 animate-fade-in-up">
      <div className="flex gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder-user.jpg" alt="Seu avatar" />
          <AvatarFallback>Você</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-4">
          <Textarea
            placeholder="O que está acontecendo no futebol feminino?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px] resize-none border-0 p-0 focus-visible:ring-0"
          />

          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-200 hover:scale-110"
              >
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-200 hover:scale-110"
              >
                <BarChart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-200 hover:scale-110"
              >
                <MapPin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-200 hover:scale-110"
              >
                <Smile className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">0/280</span>
              <Button
                onClick={handlePost}
                disabled={!content.trim()}
                className="bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Publicar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
