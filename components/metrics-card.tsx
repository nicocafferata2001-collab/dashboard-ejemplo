import type React from "react"
import { Card } from "@/components/ui/card"

interface MetricsCardProps {
  title: string
  value: string | number
  change?: string
  icon: React.ReactNode
}

export function MetricsCard({ title, value, change, icon }: MetricsCardProps) {
  return (
    <Card className="gradient-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-white font-playfair">{value}</p>
          {change && <p className="text-sm text-green-400 mt-1">{change}</p>}
        </div>
        <div className="text-accent">{icon}</div>
      </div>
    </Card>
  )
}
