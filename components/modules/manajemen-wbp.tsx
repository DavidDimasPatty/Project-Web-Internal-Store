"use client"

import { useState } from "react"
import { Plus, QrCode, Eye, FileUp, ArrowRightLeft, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { wbpData } from "@/lib/data"

function StatusBadge({ status }: { status: string }) {
  const variant = status === "Aktif" ? "default" : status === "Sakit" ? "destructive" : "secondary"
  return <Badge variant={variant}>{status}</Badge>
}

function QrCodeVisual({ noRegister }: { noRegister: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-secondary/30 p-4">
      <div className="grid grid-cols-5 gap-0.5">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 ${Math.random() > 0.4 ? "bg-foreground" : "bg-background"}`}
          />
        ))}
      </div>
      <span className="text-[10px] font-mono text-muted-foreground">{noRegister}</span>
    </div>
  )
}

export function ManajemenWbpModule() {
  const [selectedWbp, setSelectedWbp] = useState<typeof wbpData[0] | null>(null)
  const [showAddDialog, setShowAddDialog] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      {/* Action Bar */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">Data Warga Binaan Pemasyarakatan</h2>
          <p className="text-sm text-muted-foreground">Kelola data WBP terdaftar</p>
        </div>
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" /> Tambah WBP
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg bg-card text-card-foreground">
            <DialogHeader>
              <DialogTitle className="text-foreground">Tambah Data WBP Baru</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Nama Lengkap</Label>
                  <Input placeholder="Masukkan nama" className="bg-background text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">NIK</Label>
                  <Input placeholder="Masukkan NIK" className="bg-background text-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Blok / Kamar</Label>
                  <Select>
                    <SelectTrigger className="bg-background text-foreground">
                      <SelectValue placeholder="Pilih blok" />
                    </SelectTrigger>
                    <SelectContent className="bg-card text-card-foreground">
                      <SelectItem value="a1">Blok A / Kamar 1</SelectItem>
                      <SelectItem value="a2">Blok A / Kamar 2</SelectItem>
                      <SelectItem value="b1">Blok B / Kamar 1</SelectItem>
                      <SelectItem value="b2">Blok B / Kamar 2</SelectItem>
                      <SelectItem value="c1">Blok C / Kamar 1</SelectItem>
                      <SelectItem value="d1">Blok D / Kamar 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Masa Pidana (bulan)</Label>
                  <Input type="number" placeholder="Masukkan bulan" className="bg-background text-foreground" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Upload Dokumen</Label>
                <div className="flex items-center gap-2 rounded-lg border-2 border-dashed border-border bg-secondary/30 p-4">
                  <FileUp className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Klik atau seret file ke sini</span>
                </div>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Simpan Data WBP</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <Card className="border border-border bg-card">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">No. Register</TableHead>
                <TableHead className="text-muted-foreground">QR</TableHead>
                <TableHead className="text-muted-foreground">Nama</TableHead>
                <TableHead className="text-muted-foreground">NIK</TableHead>
                <TableHead className="text-muted-foreground">Blok / Kamar</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Tgl Masuk</TableHead>
                <TableHead className="text-muted-foreground">Est. Bebas</TableHead>
                <TableHead className="text-muted-foreground">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wbpData.map((wbp) => (
                <TableRow key={wbp.id} className="border-border">
                  <TableCell className="font-mono text-xs text-foreground">{wbp.noRegister}</TableCell>
                  <TableCell>
                    <QrCode className="h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="font-medium text-foreground">{wbp.nama}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{wbp.nik}</TableCell>
                  <TableCell className="text-sm text-foreground">{wbp.blok}</TableCell>
                  <TableCell><StatusBadge status={wbp.status} /></TableCell>
                  <TableCell className="text-sm text-foreground">{wbp.tanggalMasuk}</TableCell>
                  <TableCell className="text-sm text-foreground">{wbp.estimasiBebas}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedWbp(wbp)} className="text-foreground">
                          <Eye className="mr-1 h-3 w-3" /> Detail
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-card text-card-foreground">
                        <DialogHeader>
                          <DialogTitle className="text-foreground">Detail WBP - {wbp.nama}</DialogTitle>
                        </DialogHeader>
                        <Tabs defaultValue="info" className="mt-2">
                          <TabsList className="bg-secondary">
                            <TabsTrigger value="info">Info</TabsTrigger>
                            <TabsTrigger value="pelanggaran">Pelanggaran</TabsTrigger>
                            <TabsTrigger value="perpindahan">Perpindahan</TabsTrigger>
                          </TabsList>
                          <TabsContent value="info" className="mt-4">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="flex flex-col gap-3">
                                <div>
                                  <p className="text-xs text-muted-foreground">Nomor Register</p>
                                  <p className="text-sm font-medium text-foreground">{wbp.noRegister}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">NIK</p>
                                  <p className="text-sm font-medium text-foreground">{wbp.nik}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Blok / Kamar</p>
                                  <p className="text-sm font-medium text-foreground">{wbp.blok}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Status</p>
                                  <StatusBadge status={wbp.status} />
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground mb-1">Progress Masa Pidana</p>
                                  <Progress value={Math.round((wbp.masaTerjalani / wbp.masaPidana) * 100)} className="h-2" />
                                  <p className="text-xs text-muted-foreground mt-1">{wbp.masaTerjalani}/{wbp.masaPidana} bulan ({Math.round((wbp.masaTerjalani / wbp.masaPidana) * 100)}%)</p>
                                </div>
                              </div>
                              <div className="flex flex-col items-center gap-3">
                                <QrCodeVisual noRegister={wbp.noRegister} />
                                <p className="text-xs text-muted-foreground">Poin Perilaku: <span className="font-semibold text-foreground">{wbp.poin}</span>/100</p>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="pelanggaran" className="mt-4">
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-3">
                                <AlertTriangle className="h-4 w-4 text-warning" />
                                <div>
                                  <p className="text-sm font-medium text-foreground">Pelanggaran Tata Tertib</p>
                                  <p className="text-xs text-muted-foreground">10 Jan 2026 - Poin: -5</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-3">
                                <AlertTriangle className="h-4 w-4 text-destructive" />
                                <div>
                                  <p className="text-sm font-medium text-foreground">Perkelahian</p>
                                  <p className="text-xs text-muted-foreground">25 Nov 2025 - Poin: -15</p>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="perpindahan" className="mt-4">
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-3">
                                <ArrowRightLeft className="h-4 w-4 text-info" />
                                <div>
                                  <p className="text-sm font-medium text-foreground">Blok C {">"} Blok A</p>
                                  <p className="text-xs text-muted-foreground">15 Mei 2025 - Alasan: Penyesuaian kapasitas</p>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
