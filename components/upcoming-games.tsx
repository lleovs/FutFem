"use client"

import { Bell } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface UpcomingGame {
  id: string
  time: string
  league: string
  homeTeam: string
  awayTeam: string
  homeLogo: string
  awayLogo: string
}

export function UpcomingGames() {
  const games: UpcomingGame[] = [
    {
      id: "1",
      time: "Hoje, 16:00",
      league: "Brasileirão Feminino",
      homeTeam: "Corinthians",
      awayTeam: "Palmeiras",
      homeLogo: "/ancient-corinth.png",
      awayLogo: "/palmeiras-football-team.png",
    },
    {
      id: "2",
      time: "Amanhã, 19:30",
      league: "Copa Libertadores Feminina",
      homeTeam: "Santos",
      awayTeam: "Flamengo",
      homeLogo: "/santos-statues.png",
      awayLogo: "/flamengo-scarf.png",
    },
  ]

  return (
    <Card className="p-6 animate-fade-in-up">
      <h2 className="text-xl font-bold text-green-600 mb-4">Próximos Jogos</h2>

      <div className="space-y-4">
        {games.map((game) => (
          <div key={game.id} className="space-y-3 pb-4 border-b last:border-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-600">{game.time}</span>
              <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 dark:bg-green-950">
                {game.league}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={game.homeLogo || "/placeholder.svg"} alt={game.homeTeam} />
                  <AvatarFallback>{game.homeTeam[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{game.homeTeam}</span>
              </div>

              <span className="text-sm font-bold text-muted-foreground">VS</span>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{game.awayTeam}</span>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={game.awayLogo || "/placeholder.svg"} alt={game.awayTeam} />
                  <AvatarFallback>{game.awayTeam[0]}</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-200 hover:scale-105 bg-transparent"
            >
              <Bell className="h-4 w-4 mr-2" />
              Notificar-me
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
