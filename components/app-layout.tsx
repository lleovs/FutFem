"use client"

import type React from "react"

import { Navigation } from "./navigation"
import { ThemeProvider } from "@/lib/theme-provider"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}
