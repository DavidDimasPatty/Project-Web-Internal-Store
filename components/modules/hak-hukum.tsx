"use client"

import { FileText, Bell, Clock, CheckCircle2, Circle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { hakWbpData } from "@/lib/data"

function RemisiStatusBadge({ status }: { status: string }) {
  if (status === "Diterima") return <Badge className="bg-success text-success-foreground">{status}</Badge>
  if (status === "Diajukan") return <Badge className="bg-info text-info-foreground">{status}</Badge>
  return <Badge variant="secondary" className="text-foreground">{status}</Badge>
}

function PBStatusBadge({ status }: { status: string }) {
  if (status === "Belum") return <Badge variant="secondary" className="text-foreground">{status}</Badge>
  return <Badge className="bg-info text-info-foreground">{status}</Badge>
}

const timelineSteps = [
  { label: "Pengajuan Berkas", status: "done" },
  { label: "Verifikasi Admin", status: "done" },
  { label: "Review Kalapas", status: "current" },
  { label: "Persetujuan Kanwil", status: "pending" },
  { label: "SK Terbit", status: "pending" },
]

export function HakHukumModule() {
  const mendekatiRemisi = hakWbpData.filter(w => w.progress >= 65)

  return (
    <div className="flex flex-col gap-6">
      {/* Notification Alert */}
      {mendekatiRemisi.length > 0 && (
        <Card className="border-l-4 border-l-info border border-border bg-info/5">
          <CardContent className="flex items-center gap-3 p-4">
            <Bell className="h-5 w-5 text-info" />
            <div>
              <p className="text-sm font-medium text-foreground">{mendekatiRemisi.length} WBP mendekati syarat remisi</p>
              <p className="text-xs text-muted-foreground">
                {mendekatiRemisi.map(w => w.nama).join(", ")}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Table */}
      <Card className="border border-border bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold text-foreground">Tabel Hak WBP</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Nama</TableHead>
                <TableHead className="text-muted-foreground">Masa Pidana</TableHead>
                <TableHead className="text-muted-foreground">2/3 Masa</TableHead>
                <TableHead className="text-muted-foreground">Est. Bebas</TableHead>
                <TableHead className="text-muted-foreground">Progress</TableHead>
                <TableHead className="text-muted-foreground">Status Remisi</TableHead>
                <TableHead className="text-muted-foreground">Status PB/CB/CMB</TableHead>
                <TableHead className="text-muted-foreground">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hakWbpData.map((item) => (
                <TableRow key={item.id} className="border-border">
                  <TableCell className="font-medium text-foreground">{item.nama}</TableCell>
                  <TableCell className="text-foreground">{item.masaPidana}</TableCell>
                  <TableCell className="text-foreground">{item.duaPerTiga}</TableCell>
                  <TableCell className="text-foreground">{item.estimasiBebas}</TableCell>
                  <TableCell className="w-36">
                    <div className="flex flex-col gap-1">
                      <Progress value={item.progress} className="h-2" />
                      <span className="text-[11px] text-muted-foreground">{item.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell><RemisiStatusBadge status={item.statusRemisi} /></TableCell>
                  <TableCell><PBStatusBadge status={item.statusPB} /></TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="text-foreground">
                            <Clock className="mr-1 h-3 w-3" /> Timeline
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md bg-card text-card-foreground">
                          <DialogHeader>
                            <DialogTitle className="text-foreground">Timeline Pengajuan - {item.nama}</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="flex flex-col gap-0">
                              {timelineSteps.map((step, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <div className="flex flex-col items-center">
                                    {step.status === "done" ? (
                                      <CheckCircle2 className="h-5 w-5 text-success" />
                                    ) : step.status === "current" ? (
                                      <ArrowRight className="h-5 w-5 text-info" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-muted-foreground/40" />
                                    )}
                                    {i < timelineSteps.length - 1 && (
                                      <div className={`h-8 w-px ${step.status === "done" ? "bg-success" : "bg-border"}`} />
                                    )}
                                  </div>
                                  <div className="pb-6">
                                    <p className={`text-sm font-medium ${step.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}>
                                      {step.label}
                                    </p>
                                    {step.status === "current" && (
                                      <span className="text-xs text-info">Dalam proses</span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="sm" className="text-foreground">
                        <FileText className="mr-1 h-3 w-3" /> Generate SK
                      </Button>
                    </div>
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
