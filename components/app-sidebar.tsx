"use client"

import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Stethoscope,
  Scale,
  ShieldAlert,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "manajemen-wbp", label: "Manajemen WBP", icon: Users },
  { id: "portal-kunjungan", label: "Portal Kunjungan", icon: CalendarCheck },
  { id: "rekam-medis", label: "Rekam Medis", icon: Stethoscope },
  { id: "hak-hukum", label: "Hak & Administrasi Hukum", icon: Scale },
  { id: "keamanan", label: "Keamanan & Monitoring", icon: ShieldAlert },
  { id: "dashboard-pimpinan", label: "Dashboard Pimpinan", icon: BarChart3 },
]

interface AppSidebarProps {
  activeModule: string
  onModuleChange: (id: string) => void
  collapsed: boolean
  onToggle: () => void
}

export function AppSidebar({ activeModule, onModuleChange, collapsed, onToggle }: AppSidebarProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300",
          collapsed ? "w-[68px]" : "w-[260px]"
        )}
      >
        {/* Logo */}
        <div className={cn(
          "flex h-16 items-center border-b border-sidebar-border px-4",
          collapsed ? "justify-center" : "gap-3"
        )}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
            <Building2 className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-sidebar-primary-foreground">SILAPAS</span>
              <span className="text-[10px] text-sidebar-foreground/60">Sistem Lapas Terintegrasi</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav className="flex flex-col gap-1 px-3">
            {menuItems.map((item) => {
              const isActive = activeModule === item.id
              const button = (
                <button
                  key={item.id}
                  onClick={() => onModuleChange(item.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-[18px] w-[18px] shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </button>
              )

              if (collapsed) {
                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>{button}</TooltipTrigger>
                    <TooltipContent side="right" className="bg-foreground text-background">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                )
              }

              return button
            })}
          </nav>
        </ScrollArea>

        {/* Collapse Toggle */}
        <div className="border-t border-sidebar-border p-3">
          <button
            onClick={onToggle}
            className="flex w-full items-center justify-center rounded-lg py-2 text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>
      </aside>
    </TooltipProvider>
  )
}
