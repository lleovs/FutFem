"use client"

import { Calendar, MapPin, Users, DollarSign } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import type { Game } from "@/lib/storage"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg">{game.title}</h3>
          <Badge
            variant={game.status === "Aberto" ? "default" : "secondary"}
            className={game.status === "Aberto" ? "bg-green-600" : "bg-yellow-600"}
          >
            {game.status}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={game.organizer.avatar || "/placeholder.svg"} alt={game.organizer.name} />
            <AvatarFallback>{game.organizer.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">por {game.organizer.name}</span>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-green-600" />
            <span>
              {game.date} às {game.time}
            </span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-green-600" />
            <span>{game.location}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-green-600" />
            <span>{game.players}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span>{game.price}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{game.description}</p>

        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {game.avatars.slice(0, 3).map((avatar, i) => (
              <Avatar key={i} className="h-6 w-6 border-2 border-background">
                <AvatarImage src={avatar || "/placeholder.svg"} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">+{game.participants}</span>
          <Badge variant="outline" className="ml-auto">
            {game.level}
          </Badge>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105">
          + Participar
        </Button>
      </div>
    </Card>
  )
}
