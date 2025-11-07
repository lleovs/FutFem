"use client"

import { useState } from "react"
import { Search, X, Check } from "lucide-react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")

  const suggestions = [
    {
      type: "user",
      name: "Marta Vieira",
      username: "@marta10oficial",
      avatar: "/marta-vieira.jpg",
      verified: true,
    },
    {
      type: "user",
      name: "Luana Passaabola",
      username: "@luanapsb_oficial",
      avatar: "/portrait-Juliana.png",
      verified: true,
    },
    {
      type: "hashtag",
      name: "#BrasileiroFeminino",
      posts: "8.2K posts",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar pessoas, hashtags, posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 focus-visible:ring-0"
            />
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-1 mt-4">
          <h3 className="text-sm font-semibold text-muted-foreground px-3 mb-2">Sugestões para você</h3>

          {suggestions.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                {item.type === "user" ? (
                  <>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={item.avatar || "/placeholder.svg"} alt={item.name} />
                      <AvatarFallback>{item.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{item.name}</span>
                        {item.verified && <Check className="h-4 w-4 text-green-600" />}
                      </div>
                      <span className="text-sm text-muted-foreground">{item.username}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                      <span className="text-green-600 font-bold">#</span>
                    </div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <span className="text-sm text-muted-foreground">{item.posts}</span>
                    </div>
                  </>
                )}
              </div>
              <Check className="h-5 w-5 text-green-600" />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
