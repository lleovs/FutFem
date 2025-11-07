"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Bell, Mail, Trophy, User, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme-provider"

export function Navigation() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/explorar", label: "Explorar", icon: Search },
    { href: "/notificacoes", label: "Notificações", icon: Bell },
    { href: "/mensagens", label: "Mensagens", icon: Mail },
    { href: "/jogos", label: "Jogos", icon: Trophy },
    { href: "/perfil", label: "Perfil", icon: User },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <h1 className="text-2xl font-bold text-green-600">
            FutFem <span className="text-green-700">Social</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={active ? "default" : "ghost"}
                  className={`gap-2 transition-all duration-200 ${
                    active
                      ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30"
                      : "hover:bg-green-50 dark:hover:bg-green-950/30"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full transition-all duration-200 hover:scale-110 hover:rotate-12 bg-transparent"
        >
          {theme === "light" ? <Moon className="h-5 w-5 text-green-600" /> : <Sun className="h-5 w-5 text-green-400" />}
        </Button>
      </div>
    </header>
  )
}
