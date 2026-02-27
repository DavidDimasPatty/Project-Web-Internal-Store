"use client"

import { Check, X, Filter, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { kunjunganData, trendKunjungan, kunjunganHarian } from "@/lib/data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

function KunjunganStatusBadge({ status }: { status: string }) {
  if (status === "Disetujui") return <Badge className="bg-success text-success-foreground">{status}</Badge>
  if (status === "Ditolak") return <Badge variant="destructive">{status}</Badge>
  return <Badge variant="secondary" className="text-foreground">{status}</Badge>
}

export function PortalKunjunganModule() {
  return (
    <div className="flex flex-col gap-6">
      {/* Filter Bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="date" className="pl-9 bg-background text-foreground" defaultValue="2026-02-25" />
        </div>
        <Button variant="outline" className="text-foreground">
          <Settings className="mr-2 h-4 w-4" /> Atur Kapasitas Slot
        </Button>
      </div>

      {/* Request Table */}
      <Card className="border border-border bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold text-foreground">Permintaan Kunjungan</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Nama Pengunjung</TableHead>
                <TableHead className="text-muted-foreground">Nama WBP</TableHead>
                <TableHead className="text-muted-foreground">Tanggal</TableHead>
                <TableHead className="text-muted-foreground">Slot</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kunjunganData.map((item) => (
                <TableRow key={item.id} className="border-border">
                  <TableCell className="font-medium text-foreground">{item.namaPengunjung}</TableCell>
                  <TableCell className="text-foreground">{item.namaWbp}</TableCell>
                  <TableCell className="text-foreground">{item.tanggal}</TableCell>
                  <TableCell className="text-sm text-foreground">{item.slot}</TableCell>
                  <TableCell><KunjunganStatusBadge status={item.status} /></TableCell>
                  <TableCell>
                    {item.status === "Pending" ? (
                      <div className="flex items-center gap-2">
                        <Button size="sm" className="h-7 bg-success text-success-foreground hover:bg-success/90">
                          <Check className="mr-1 h-3 w-3" /> Approve
                        </Button>
                        <Button size="sm" variant="destructive" className="h-7">
                          <X className="mr-1 h-3 w-3" /> Tolak
                        </Button>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="border border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Kunjungan Harian</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={kunjunganHarian}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="tanggal" tick={{ fontSize: 11, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Bar dataKey="jumlah" fill="#1e3a5f" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Tren Mingguan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendKunjungan}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hari" tick={{ fontSize: 12, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                  <Line type="monotone" dataKey="jumlah" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-foreground">Ringkasan Kunjungan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-2xl font-bold text-foreground">33</p>
                <p className="text-xs text-muted-foreground">Total Kunjungan Hari Ini</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-2xl font-bold text-success">28</p>
                <p className="text-xs text-muted-foreground">Disetujui Bulan Ini</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-2xl font-bold text-destructive">4</p>
                <p className="text-xs text-muted-foreground">Ditolak Bulan Ini</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
