"use client"

import { AppLayout } from "@/components/app-layout"
import { Card } from "@/components/ui/card"

export default function PerfilPage() {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Perfil</h1>
          <p className="text-muted-foreground">Página de perfil em construção</p>
        </Card>
      </div>
    </AppLayout>
  )
}
