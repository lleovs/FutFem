"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { GameCard } from "@/components/game-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getGames } from "@/lib/storage"

export default function JogosPage() {
  const [activeTab, setActiveTab] = useState("todos")
  const [city, setCity] = useState("all")
  const [level, setLevel] = useState("all")
  const games = getGames()

  const filteredGames = games.filter((game) => {
    if (activeTab === "hoje" && !game.date.includes("Hoje")) return false
    if (activeTab === "semana" && game.date.includes("Amanhã")) return true
    if (activeTab === "semana" && game.date.includes("Hoje")) return false
    if (activeTab === "meus") return false

    if (city !== "all" && !game.location.includes(city)) return false
    if (level !== "all" && game.level !== level) return false

    return true
  })

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={activeTab === "todos" ? "default" : "outline"}
              onClick={() => setActiveTab("todos")}
              className="rounded-full"
            >
              Todos
            </Button>
            <Button
              variant={activeTab === "hoje" ? "default" : "outline"}
              onClick={() => setActiveTab("hoje")}
              className="rounded-full"
            >
              Hoje
            </Button>
            <Button
              variant={activeTab === "semana" ? "default" : "outline"}
              onClick={() => setActiveTab("semana")}
              className="rounded-full"
            >
              Esta Semana
            </Button>
            <Button
              variant={activeTab === "meus" ? "default" : "outline"}
              onClick={() => setActiveTab("meus")}
              className="rounded-full bg-green-100 dark:bg-green-900"
            >
              Meus Jogos
            </Button>
          </div>

          <div className="flex gap-4">
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Todas as Cidades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Cidades</SelectItem>
                <SelectItem value="São Paulo">São Paulo</SelectItem>
                <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
                <SelectItem value="Copacabana">Copacabana</SelectItem>
              </SelectContent>
            </Select>

            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Todos os Níveis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Níveis</SelectItem>
                <SelectItem value="Intermediário">Intermediário</SelectItem>
                <SelectItem value="Avançado">Avançado</SelectItem>
                <SelectItem value="Profissional">Profissional</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
