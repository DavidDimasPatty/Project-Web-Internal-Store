"use client"

import { Users, ShieldAlert, HeartPulse, CalendarCheck, FileDown, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { komparasiBulanan, kalenderBebas } from "@/lib/data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts"

const summaryCards = [
  { label: "Total WBP", value: "461", sub: "+9 bulan ini", icon: Users, color: "bg-primary" },
  { label: "Insiden Bulan Ini", value: "6", sub: "+2 dari bulan lalu", icon: ShieldAlert, color: "bg-destructive" },
  { label: "WBP Rawat Inap", value: "2", sub: "5 rawat jalan", icon: HeartPulse, color: "bg-warning" },
  { label: "Kunjungan Bulan Ini", value: "220", sub: "+25 dari bulan lalu", icon: CalendarCheck, color: "bg-info" },
]

export function DashboardPimpinanModule() {
  return (
    <div className="flex flex-col gap-6">
      {/* Export Buttons */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">Ringkasan Eksekutif</h2>
          <p className="text-sm text-muted-foreground">Laporan periode Februari 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-foreground">
            <FileDown className="mr-2 h-4 w-4" /> Export PDF
          </Button>
          <Button variant="outline" className="text-foreground">
            <FileDown className="mr-2 h-4 w-4" /> Export Excel
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.label} className="border border-border bg-card">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}>
                  <card.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-foreground">{card.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{card.label}</p>
                <p className="text-[11px] text-muted-foreground">{card.sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Komparasi WBP Masuk vs Keluar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={komparasiBulanan}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Bar dataKey="wbpMasuk" name="WBP Masuk" fill="#1e3a5f" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="wbpKeluar" name="WBP Keluar" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Tren Kunjungan & Insiden Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={komparasiBulanan}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Line yAxisId="left" type="monotone" dataKey="kunjungan" name="Kunjungan" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="insiden" name="Insiden" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kalender Hak Bebas */}
      <Card className="border border-border bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold text-foreground">Kalender Hak Bebas Terdekat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {kalenderBebas.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success">
                  <Clock className="h-5 w-5 text-success-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.nama}</p>
                  <p className="text-xs text-muted-foreground">{item.tanggal}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
