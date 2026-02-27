"use client"

import { ShieldAlert, Camera, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { insidenData, absensiPetugas, distribusiBlok, insidenKeamanan } from "@/lib/data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts"

const COLORS = ["#1e3a5f", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b"]

export function KeamananModule() {
  const totalInsiden = insidenData.filter(i => i.tanggal === "2026-02-25").length
  const totalPoin = insidenData.reduce((acc, i) => acc + Math.abs(i.poin), 0)

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border border-border bg-card">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive">
              <ShieldAlert className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalInsiden}</p>
              <p className="text-xs text-muted-foreground">Insiden Hari Ini</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-border bg-card">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning">
              <AlertTriangle className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalPoin}</p>
              <p className="text-xs text-muted-foreground">Total Poin Pelanggaran</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-border bg-card">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Camera className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{insidenData.filter(i => i.bukti).length}</p>
              <p className="text-xs text-muted-foreground">Insiden Dengan Bukti</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="insiden" className="w-full">
        <TabsList className="bg-secondary">
          <TabsTrigger value="insiden">Insiden</TabsTrigger>
          <TabsTrigger value="blok">Distribusi Blok</TabsTrigger>
          <TabsTrigger value="absensi">Absensi Petugas</TabsTrigger>
        </TabsList>

        <TabsContent value="insiden" className="mt-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="border border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-foreground">Daftar Insiden</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead className="text-muted-foreground">Nama WBP</TableHead>
                        <TableHead className="text-muted-foreground">Jenis Pelanggaran</TableHead>
                        <TableHead className="text-muted-foreground">Tanggal</TableHead>
                        <TableHead className="text-muted-foreground">Poin</TableHead>
                        <TableHead className="text-muted-foreground">Bukti</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {insidenData.map((item) => (
                        <TableRow key={item.id} className="border-border">
                          <TableCell className="font-medium text-foreground">{item.namaWbp}</TableCell>
                          <TableCell className="text-foreground">{item.jenis}</TableCell>
                          <TableCell className="text-foreground">{item.tanggal}</TableCell>
                          <TableCell>
                            <Badge variant="destructive">{item.poin}</Badge>
                          </TableCell>
                          <TableCell>
                            {item.bukti ? (
                              <Badge className="bg-success text-success-foreground">Ada</Badge>
                            ) : (
                              <Badge variant="secondary" className="text-foreground">Tidak ada</Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-foreground">Tren Insiden</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={insidenKeamanan}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                      <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                      <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                      <Line type="monotone" dataKey="insiden" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444", r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="blok" className="mt-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-foreground">Distribusi WBP per Blok</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={distribusiBlok}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={4}
                        dataKey="jumlah"
                        label={({ blok, jumlah }) => `${blok}: ${jumlah}`}
                      >
                        {distribusiBlok.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-foreground">Kapasitas Blok</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={distribusiBlok}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="blok" tick={{ fontSize: 12, fill: "#64748b" }} />
                      <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                      <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                      <Bar dataKey="jumlah" fill="#1e3a5f" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="absensi" className="mt-4">
          <Card className="border border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-foreground">Absensi Harian Petugas - 25 Feb 2026</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-muted-foreground">Nama</TableHead>
                    <TableHead className="text-muted-foreground">Jabatan</TableHead>
                    <TableHead className="text-muted-foreground">Status</TableHead>
                    <TableHead className="text-muted-foreground">Jam Masuk</TableHead>
                    <TableHead className="text-muted-foreground">Jam Keluar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {absensiPetugas.map((item) => (
                    <TableRow key={item.id} className="border-border">
                      <TableCell className="font-medium text-foreground">{item.nama}</TableCell>
                      <TableCell className="text-foreground">{item.jabatan}</TableCell>
                      <TableCell>
                        {item.status === "Hadir" ? (
                          <Badge className="bg-success text-success-foreground">{item.status}</Badge>
                        ) : item.status === "Izin" ? (
                          <Badge className="bg-warning text-warning-foreground">{item.status}</Badge>
                        ) : (
                          <Badge variant="destructive">{item.status}</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-foreground">{item.jamMasuk}</TableCell>
                      <TableCell className="text-foreground">{item.jamKeluar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
