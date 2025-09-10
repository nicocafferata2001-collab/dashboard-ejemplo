"use client"

import { Users, UserPlus, MessageCircle, TrendingUp } from "lucide-react"
import { Logo } from "@/components/logo"
import { MetricsCard } from "@/components/metrics-card"
import { LeadsChart } from "@/components/leads-chart"
import { LeadsTable } from "@/components/leads-table"

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 gradient-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 container mx-auto px-6 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="Leads Totales"
            value="1,247"
            change="+12% vs mes anterior"
            icon={<Users className="h-8 w-8" />}
          />
          <MetricsCard
            title="Leads Nuevos"
            value="89"
            change="+8% vs semana anterior"
            icon={<UserPlus className="h-8 w-8" />}
          />
          <MetricsCard
            title="Conversaciones"
            value="456"
            change="+15% vs mes anterior"
            icon={<MessageCircle className="h-8 w-8" />}
          />
          <MetricsCard
            title="Tasa de Conversión"
            value="24.5%"
            change="+3.2% vs mes anterior"
            icon={<TrendingUp className="h-8 w-8" />}
          />
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <LeadsChart />
        </div>

        {/* Leads Table */}
        <LeadsTable />
      </main>
    </div>
  )
}
