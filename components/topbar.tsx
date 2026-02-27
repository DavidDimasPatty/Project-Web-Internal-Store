"use client"

import { Bell, Search, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const moduleLabels: Record<string, string> = {
  "dashboard": "Dashboard Utama",
  "manajemen-wbp": "Module 1 - Manajemen Data WBP",
  "portal-kunjungan": "Module 2 - Portal Kunjungan",
  "rekam-medis": "Module 3 - Rekam Medis",
  "hak-hukum": "Module 4 - Hak & Administrasi Hukum",
  "keamanan": "Module 5 - Keamanan & Monitoring",
  "dashboard-pimpinan": "Module 6 - Dashboard Pimpinan",
}

interface TopbarProps {
  activeModule: string
}

export function Topbar({ activeModule }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-foreground">{moduleLabels[activeModule] || "Dashboard"}</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari..."
            className="h-9 w-64 rounded-lg border border-input bg-background pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive p-0 text-[10px] text-primary-foreground">
            3
          </Badge>
        </button>
        {/* User */}
        <div className="flex items-center gap-3 rounded-lg border border-border px-3 py-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground leading-none">Admin Lapas</p>
            <p className="text-[11px] text-muted-foreground">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  )
}
