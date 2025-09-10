"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Ene", leads: 65 },
  { name: "Feb", leads: 78 },
  { name: "Mar", leads: 90 },
  { name: "Abr", leads: 85 },
  { name: "May", leads: 95 },
  { name: "Jun", leads: 110 },
  { name: "Jul", leads: 125 },
]

export function LeadsChart() {
  return (
    <div className="gradient-card p-6 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-6 font-playfair">Leads por Mes</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.3 0.05 240 / 0.3)" />
          <XAxis dataKey="name" stroke="oklch(0.7 0.02 240)" fontSize={12} />
          <YAxis stroke="oklch(0.7 0.02 240)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "oklch(0.15 0.02 240 / 0.9)",
              border: "1px solid oklch(0.3 0.05 240 / 0.3)",
              borderRadius: "8px",
              color: "white",
            }}
          />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="oklch(0.55 0.22 280)"
            strokeWidth={3}
            dot={{ fill: "oklch(0.55 0.22 280)", strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
