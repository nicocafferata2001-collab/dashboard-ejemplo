"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

const mockLeads = [
  {
    id: 1,
    name: "Ana García",
    email: "ana@email.com",
    phone: "+34 600 123 456",
    status: "Nuevo",
    source: "Web",
    priority: "Alta",
  },
  {
    id: 2,
    name: "Carlos López",
    email: "carlos@email.com",
    phone: "+34 600 234 567",
    status: "Contactado",
    source: "LinkedIn",
    priority: "Media",
  },
  {
    id: 3,
    name: "María Rodríguez",
    email: "maria@email.com",
    phone: "+34 600 345 678",
    status: "Calificado",
    source: "Referido",
    priority: "Alta",
  },
  {
    id: 4,
    name: "Juan Martínez",
    email: "juan@email.com",
    phone: "+34 600 456 789",
    status: "Propuesta",
    source: "Web",
    priority: "Baja",
  },
  {
    id: 5,
    name: "Laura Sánchez",
    email: "laura@email.com",
    phone: "+34 600 567 890",
    status: "Cerrado",
    source: "Email",
    priority: "Media",
  },
  {
    id: 6,
    name: "Pedro González",
    email: "pedro@email.com",
    phone: "+34 600 678 901",
    status: "Nuevo",
    source: "Web",
    priority: "Alta",
  },
  {
    id: 7,
    name: "Carmen Díaz",
    email: "carmen@email.com",
    phone: "+34 600 789 012",
    status: "Contactado",
    source: "LinkedIn",
    priority: "Media",
  },
  {
    id: 8,
    name: "Miguel Torres",
    email: "miguel@email.com",
    phone: "+34 600 890 123",
    status: "Calificado",
    source: "Referido",
    priority: "Baja",
  },
]

const ITEMS_PER_PAGE = 5

export function LeadsTable() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(mockLeads.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentLeads = mockLeads.slice(startIndex, endIndex)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Nuevo":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Contactado":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Calificado":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Propuesta":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "Cerrado":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "Media":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Baja":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="gradient-card rounded-lg">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-bold text-white font-playfair">Lista de Leads</h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-muted-foreground">ID</TableHead>
            <TableHead className="text-muted-foreground">Nombre</TableHead>
            <TableHead className="text-muted-foreground">Email</TableHead>
            <TableHead className="text-muted-foreground">Teléfono</TableHead>
            <TableHead className="text-muted-foreground">Estado</TableHead>
            <TableHead className="text-muted-foreground">Fuente</TableHead>
            <TableHead className="text-muted-foreground">Prioridad</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentLeads.map((lead) => (
            <TableRow key={lead.id} className="border-border hover:bg-white/5">
              <TableCell className="text-white">{lead.id}</TableCell>
              <TableCell className="text-white font-medium">{lead.name}</TableCell>
              <TableCell className="text-muted-foreground">{lead.email}</TableCell>
              <TableCell className="text-muted-foreground">{lead.phone}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(lead.status)}>{lead.status}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{lead.source}</TableCell>
              <TableCell>
                <Badge className={getPriorityColor(lead.priority)}>{lead.priority}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="p-6 border-t border-border flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {startIndex + 1} a {Math.min(endIndex, mockLeads.length)} de {mockLeads.length} leads
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-transparent border-border text-white hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>
          <span className="text-sm text-white px-3">
            {currentPage} de {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-transparent border-border text-white hover:bg-white/10"
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
