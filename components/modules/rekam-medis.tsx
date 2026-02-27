"use client"

import { useState } from "react"
import { Plus, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { rekamMedisData, stokObat, penyakitTerbanyak, rawatInap } from "@/lib/data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

export function RekamMedisModule() {
  const [showAddDialog, setShowAddDialog] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="rekam" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="bg-secondary">
            <TabsTrigger value="rekam">Rekam Medis</TabsTrigger>
            <TabsTrigger value="obat">Inventory Obat</TabsTrigger>
            <TabsTrigger value="statistik">Statistik</TabsTrigger>
          </TabsList>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" /> Tambah Pemeriksaan
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-card text-card-foreground">
              <DialogHeader>
                <DialogTitle className="text-foreground">Tambah Pemeriksaan Baru</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Nama WBP</Label>
                  <Input placeholder="Pilih WBP" className="bg-background text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Diagnosa</Label>
                  <Input placeholder="Masukkan diagnosa" className="bg-background text-foreground" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label className="text-foreground">Dokter</Label>
                    <Input placeholder="Nama dokter" className="bg-background text-foreground" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-foreground">Status Rawat</Label>
                    <Input placeholder="Rawat Jalan/Inap" className="bg-background text-foreground" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Resep Obat</Label>
                  <Input placeholder="Masukkan resep" className="bg-background text-foreground" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Simpan Pemeriksaan</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="rekam" className="mt-4">
          <Card className="border border-border bg-card">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-muted-foreground">Nama WBP</TableHead>
                    <TableHead className="text-muted-foreground">Diagnosa</TableHead>
                    <TableHead className="text-muted-foreground">Dokter</TableHead>
                    <TableHead className="text-muted-foreground">Resep</TableHead>
                    <TableHead className="text-muted-foreground">Status Rawat</TableHead>
                    <TableHead className="text-muted-foreground">Tanggal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rekamMedisData.map((item) => (
                    <TableRow key={item.id} className="border-border">
                      <TableCell className="font-medium text-foreground">{item.namaWbp}</TableCell>
                      <TableCell className="text-foreground">{item.diagnosa}</TableCell>
                      <TableCell className="text-foreground">{item.dokter}</TableCell>
                      <TableCell className="text-sm text-foreground">{item.resep}</TableCell>
                      <TableCell>
                        <Badge className={item.statusRawat === "Rawat Inap" ? "bg-destructive text-primary-foreground" : "bg-success text-success-foreground"}>
                          {item.statusRawat}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-foreground">{item.tanggalPeriksa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="obat" className="mt-4">
          <Card className="border border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-foreground">Inventory Obat</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-muted-foreground">Nama Obat</TableHead>
                    <TableHead className="text-muted-foreground">Stok</TableHead>
                    <TableHead className="text-muted-foreground">Minimum</TableHead>
                    <TableHead className="text-muted-foreground">Satuan</TableHead>
                    <TableHead className="text-muted-foreground">Status</TableHead>
                    <TableHead className="text-muted-foreground">Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stokObat.map((item) => {
                    const isKritis = item.stok < item.minimum
                    const percentage = Math.min((item.stok / item.minimum) * 100, 100)
                    return (
                      <TableRow key={item.id} className="border-border">
                        <TableCell className="font-medium text-foreground">{item.nama}</TableCell>
                        <TableCell className="text-foreground">{item.stok}</TableCell>
                        <TableCell className="text-muted-foreground">{item.minimum}</TableCell>
                        <TableCell className="text-foreground">{item.satuan}</TableCell>
                        <TableCell>
                          {isKritis ? (
                            <div className="flex items-center gap-1">
                              <AlertCircle className="h-3.5 w-3.5 text-destructive" />
                              <Badge variant="destructive">Kritis</Badge>
                            </div>
                          ) : (
                            <Badge className="bg-success text-success-foreground">Aman</Badge>
                          )}
                        </TableCell>
                        <TableCell className="w-32">
                          <Progress value={percentage} className="h-2" />
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statistik" className="mt-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-foreground">Penyakit Terbanyak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={penyakitTerbanyak} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis type="number" tick={{ fontSize: 12, fill: "#64748b" }} />
                      <YAxis dataKey="penyakit" type="category" tick={{ fontSize: 12, fill: "#64748b" }} width={80} />
                      <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                      <Bar dataKey="jumlah" fill="#1e3a5f" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-foreground">Tren Rawat Inap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={rawatInap}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#64748b" }} />
                      <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                      <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px" }} />
                      <Line type="monotone" dataKey="rawat" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444", r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
