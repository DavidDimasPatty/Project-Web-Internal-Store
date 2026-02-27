"use client"

import { Users, HeartPulse, ShieldAlert, CalendarCheck, Clock, Pill, Home, TriangleAlert, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { trendPopulasi, remisiPembebasan, trendKunjungan, insidenKeamanan, kalenderBebas, KAPASITAS_LAPAS } from "@/lib/data"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, RadialBarChart, RadialBar, PolarAngleAxis
} from "recharts"
import { useState } from "react"

const WBP_AKTIF = 461
const KAPASITAS = KAPASITAS_LAPAS
const OCCUPANCY_PCT = Math.round((WBP_AKTIF / KAPASITAS) * 100)

interface StatCard {
  label: string
  value: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  change: string
  changeType: "up" | "down" | "warning" | "neutral"
  barColor: string
}

const stats: StatCard[] = [
  {
    label: "Total WBP Aktif",
    value: "461",
    icon: Users,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    change: "+2.0%",
    changeType: "up",
    barColor: "bg-blue-500",
  },
  {
    label: "WBP Sakit",
    value: "12",
    icon: HeartPulse,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    change: "-1",
    changeType: "down",
    barColor: "bg-rose-400",
  },
  {
    label: "Insiden Hari Ini",
    value: "2",
    icon: ShieldAlert,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    change: "+1",
    changeType: "up",
    barColor: "bg-amber-400",
  },
  {
    label: "Kunjungan Hari Ini",
    value: "33",
    icon: CalendarCheck,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    change: "+5",
    changeType: "up",
    barColor: "bg-blue-500",
  },
  {
    label: "WBP Mendekati Bebas",
    value: "5",
    icon: Clock,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    change: "+8",
    changeType: "up",
    barColor: "bg-emerald-500",
  },
  {
    label: "Stok Obat Kritis",
    value: "3",
    icon: Pill,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    change: "Restock",
    changeType: "warning",
    barColor: "bg-rose-400",
  },
]

function ChangeBadge({ change, changeType }: { change: string; changeType: string }) {
  if (changeType === "warning") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-600 border border-amber-200">
        <TriangleAlert className="h-3 w-3" />
        {change}
      </span>
    )
  }
  if (changeType === "down") {
    return (
      <span className="inline-flex items-center gap-0.5 rounded-md bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-500 border border-rose-200">
        <TrendingDown className="h-3 w-3" />
        {change}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600 border border-emerald-200">
      <TrendingUp className="h-3 w-3" />
      {change}
    </span>
  )
}

function StatCardItem({ stat }: { stat: StatCard }) {
  return (
    <Card className="relative overflow-hidden border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}>
            <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
          </div>
          <ChangeBadge change={stat.change} changeType={stat.changeType} />
        </div>
        <div className="mt-4">
          <p className="text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className={`h-1 flex-1 rounded-full ${stat.barColor}`} />
          <div className="h-1 flex-1 rounded-full bg-muted" />
        </div>
        {/* Watermark icon */}
        <div className="absolute -bottom-3 -right-3 opacity-[0.06]">
          <stat.icon className="h-24 w-24" />
        </div>
      </CardContent>
    </Card>
  )
}

function KapasitasHunianCard() {
  const radialData = [{ name: "Terisi", value: OCCUPANCY_PCT, fill: "url(#occupancyGradient)" }]

  return (
    <Card className="border border-border/60 bg-card shadow-sm">
      <CardContent className="px-5 ">
        <div className="flex items-start gap-3 mb-4">
          {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100">
            <Home className="h-5 w-5 text-indigo-600" />
          </div> */}
          <div>
            <p className="text-base font-bold text-foreground">Kapasitas Hunian</p>
            <p className="text-sm text-muted-foreground">{WBP_AKTIF} dari {KAPASITAS} kapasitas</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[280px] w-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="72%"
                outerRadius="100%"
                barSize={14}
                data={radialData}
                startAngle={90}
                endAngle={-270}
              >
                <defs>
                  <linearGradient id="occupancyGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <RadialBar
                  background={{ fill: "#e5e7eb" }}
                  dataKey="value"
                  angleAxisId={0}
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-foreground">{OCCUPANCY_PCT}%</span>
              <span className="text-sm text-muted-foreground">Terisi</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function DashboardModule() {
  const [cardPage, setCardPage] = useState(0)

  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards - 3 col grid with pagination arrows on mobile */}
      <div className="relative">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Kapasitas Hunian */}
          {/* <KapasitasHunianCard /> */}
          {/* 6 stat cards */}
          {stats.map((stat) => (
            <StatCardItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border border-border/60 bg-card shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Tren Populasi WBP Bulanan (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendPopulasi}>
                  <defs>
                    <linearGradient id="populasiGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis
                    tick={{ fontSize: 12, fill: "#64748b" }}
                    domain={[0, 100]}
                    tickFormatter={(v: number) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }}
                    formatter={(value: number) => [`${value}%`, "Kapasitas Terisi"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="persen"
                    stroke="#3b82f6"
                    fill="url(#populasiGrad)"
                    strokeWidth={2.5}
                    dot={{ fill: "#3b82f6", r: 4, strokeWidth: 2, stroke: "#fff" }}
                    activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* <Card className="border border-border/60 bg-card shadow-sm"> */}
          {/* <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Remisi & Pembebasan</CardTitle>
          </CardHeader>
          <CardContent> */}
          {/* <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={remisiPembebasan}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Bar dataKey="remisi" fill="#1e3a5f" radius={[4, 4, 0, 0]} name="Remisi" />
                  <Bar dataKey="bebas" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Bebas" />
                </BarChart>
              </ResponsiveContainer>
            </div> */}
          <KapasitasHunianCard />
          {/* </CardContent> */}
        {/* </Card> */}
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border border-border/60 bg-card shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Tren Kunjungan Mingguan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendKunjungan}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hari" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Line type="monotone" dataKey="jumlah" stroke="#3b82f6" strokeWidth={2.5} dot={{ fill: "#3b82f6", r: 4, strokeWidth: 2, stroke: "#fff" }} name="Jumlah" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60 bg-card shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Insiden Keamanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={insidenKeamanan}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Bar dataKey="insiden" fill="#ef4444" radius={[4, 4, 0, 0]} name="Insiden" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Charts Row 3 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border border-border/60 bg-card shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Remisi & Pembebasan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={remisiPembebasan}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Bar dataKey="remisi" fill="#1e3a5f" radius={[4, 4, 0, 0]} name="Remisi" />
                  <Bar dataKey="bebas" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Bebas" />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </CardContent>
        </Card>

        <Card className="border border-border/60 bg-card shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Kalender Hak Bebas Terdekat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {kalenderBebas.map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border/60 bg-secondary/50 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.nama}</p>
                    <p className="text-xs text-muted-foreground">{item.tanggal}</p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                    <Clock className="h-4 w-4 text-emerald-600" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  )
}
