"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Topbar } from "@/components/topbar"
import { DashboardModule } from "@/components/modules/dashboard"
import { ManajemenWbpModule } from "@/components/modules/manajemen-wbp"
import { PortalKunjunganModule } from "@/components/modules/portal-kunjungan"
import { RekamMedisModule } from "@/components/modules/rekam-medis"
import { HakHukumModule } from "@/components/modules/hak-hukum"
import { KeamananModule } from "@/components/modules/keamanan"
import { DashboardPimpinanModule } from "@/components/modules/dashboard-pimpinan"
import { cn } from "@/lib/utils"

const modules: Record<string, React.ComponentType> = {
  "dashboard": DashboardModule,
  "manajemen-wbp": ManajemenWbpModule,
  "portal-kunjungan": PortalKunjunganModule,
  "rekam-medis": RekamMedisModule,
  "hak-hukum": HakHukumModule,
  "keamanan": KeamananModule,
  "dashboard-pimpinan": DashboardPimpinanModule,
}

export default function SilapasPage() {
  const [activeModule, setActiveModule] = useState("dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const ActiveModuleComponent = modules[activeModule] || DashboardModule

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar
        activeModule={activeModule}
        onModuleChange={setActiveModule}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className={cn(
        "flex flex-col transition-all duration-300",
        sidebarCollapsed ? "ml-[68px]" : "ml-[260px]"
      )}>
        <Topbar activeModule={activeModule} />
        <main className="flex-1 p-6">
          <ActiveModuleComponent />
        </main>
      </div>
    </div>
  )
}
