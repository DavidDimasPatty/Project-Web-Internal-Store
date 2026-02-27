// ===== DUMMY DATA SILAPAS =====

export const wbpData = [
  { id: 1, noRegister: "WBP-2024-001", nama: "Ahmad Sudirman", nik: "3201010101900001", blok: "Blok A / Kamar 1", status: "Aktif", tanggalMasuk: "2022-03-15", estimasiBebas: "2026-09-15", masaPidana: 54, masaTerjalani: 36, poin: 85 },
  { id: 2, noRegister: "WBP-2024-002", nama: "Budi Hartono", nik: "3201010101910002", blok: "Blok A / Kamar 2", status: "Aktif", tanggalMasuk: "2023-01-10", estimasiBebas: "2027-01-10", masaPidana: 48, masaTerjalani: 24, poin: 72 },
  { id: 3, noRegister: "WBP-2024-003", nama: "Candra Wijaya", nik: "3201010101920003", blok: "Blok B / Kamar 1", status: "Sakit", tanggalMasuk: "2021-06-20", estimasiBebas: "2026-06-20", masaPidana: 60, masaTerjalani: 42, poin: 90 },
  { id: 4, noRegister: "WBP-2024-004", nama: "Dedi Prasetyo", nik: "3201010101930004", blok: "Blok B / Kamar 3", status: "Aktif", tanggalMasuk: "2023-07-05", estimasiBebas: "2026-07-05", masaPidana: 36, masaTerjalani: 18, poin: 65 },
  { id: 5, noRegister: "WBP-2024-005", nama: "Eko Saputra", nik: "3201010101940005", blok: "Blok C / Kamar 1", status: "Aktif", tanggalMasuk: "2022-11-12", estimasiBebas: "2026-03-12", masaPidana: 40, masaTerjalani: 30, poin: 88 },
  { id: 6, noRegister: "WBP-2024-006", nama: "Fajar Ramadhan", nik: "3201010101950006", blok: "Blok A / Kamar 3", status: "Bebas", tanggalMasuk: "2020-02-10", estimasiBebas: "2025-02-10", masaPidana: 60, masaTerjalani: 60, poin: 95 },
  { id: 7, noRegister: "WBP-2024-007", nama: "Gilang Nugraha", nik: "3201010101960007", blok: "Blok C / Kamar 2", status: "Sakit", tanggalMasuk: "2023-04-18", estimasiBebas: "2027-04-18", masaPidana: 48, masaTerjalani: 20, poin: 70 },
  { id: 8, noRegister: "WBP-2024-008", nama: "Hendra Gunawan", nik: "3201010101970008", blok: "Blok D / Kamar 1", status: "Aktif", tanggalMasuk: "2024-01-05", estimasiBebas: "2028-01-05", masaPidana: 48, masaTerjalani: 12, poin: 78 },
  { id: 9, noRegister: "WBP-2024-009", nama: "Rafi Hakim", nik: "3201010101980009", blok: "Blok D / Kamar 2", status: "Aktif", tanggalMasuk: "2022-08-22", estimasiBebas: "2026-04-22", masaPidana: 44, masaTerjalani: 30, poin: 82 },
  { id: 10, noRegister: "WBP-2024-010", nama: "Joko Susilo", nik: "3201010101990010", blok: "Blok B / Kamar 2", status: "Aktif", tanggalMasuk: "2023-12-01", estimasiBebas: "2026-12-01", masaPidana: 36, masaTerjalani: 15, poin: 60 },
]

export const kunjunganData = [
  { id: 1, namaPengunjung: "Siti Aminah", namaWbp: "Ahmad Sudirman", tanggal: "2026-02-25", slot: "09:00 - 10:00", status: "Pending" },
  { id: 2, namaPengunjung: "Rina Wati", namaWbp: "Budi Hartono", tanggal: "2026-02-25", slot: "10:00 - 11:00", status: "Disetujui" },
  { id: 3, namaPengunjung: "Dewi Lestari", namaWbp: "Candra Wijaya", tanggal: "2026-02-25", slot: "11:00 - 12:00", status: "Pending" },
  { id: 4, namaPengunjung: "Maya Sari", namaWbp: "Dedi Prasetyo", tanggal: "2026-02-24", slot: "09:00 - 10:00", status: "Ditolak" },
  { id: 5, namaPengunjung: "Nur Halimah", namaWbp: "Eko Saputra", tanggal: "2026-02-24", slot: "10:00 - 11:00", status: "Disetujui" },
  { id: 6, namaPengunjung: "Anita Permata", namaWbp: "Hendra Gunawan", tanggal: "2026-02-26", slot: "09:00 - 10:00", status: "Pending" },
  { id: 7, namaPengunjung: "Ratna Dewi", namaWbp: "Rafi Hakim", tanggal: "2026-02-26", slot: "11:00 - 12:00", status: "Disetujui" },
  { id: 8, namaPengunjung: "Kartini Wulan", namaWbp: "Joko Susilo", tanggal: "2026-02-23", slot: "10:00 - 11:00", status: "Disetujui" },
]

export const rekamMedisData = [
  { id: 1, namaWbp: "Candra Wijaya", diagnosa: "ISPA", dokter: "dr. Ratna", resep: "Amoxicillin 500mg", statusRawat: "Rawat Jalan", tanggalPeriksa: "2026-02-24" },
  { id: 2, namaWbp: "Gilang Nugraha", diagnosa: "Diare Akut", dokter: "dr. Susanto", resep: "Oralit + Zinc", statusRawat: "Rawat Inap", tanggalPeriksa: "2026-02-23" },
  { id: 3, namaWbp: "Ahmad Sudirman", diagnosa: "Hipertensi", dokter: "dr. Ratna", resep: "Amlodipine 5mg", statusRawat: "Rawat Jalan", tanggalPeriksa: "2026-02-22" },
  { id: 4, namaWbp: "Budi Hartono", diagnosa: "Dermatitis", dokter: "dr. Lia", resep: "Salep Hydrocortisone", statusRawat: "Rawat Jalan", tanggalPeriksa: "2026-02-21" },
  { id: 5, namaWbp: "Eko Saputra", diagnosa: "TBC", dokter: "dr. Susanto", resep: "OAT Kategori 1", statusRawat: "Rawat Inap", tanggalPeriksa: "2026-02-20" },
  { id: 6, namaWbp: "Hendra Gunawan", diagnosa: "Gastritis", dokter: "dr. Ratna", resep: "Omeprazole 20mg", statusRawat: "Rawat Jalan", tanggalPeriksa: "2026-02-19" },
]

export const stokObat = [
  { id: 1, nama: "Paracetamol 500mg", stok: 240, minimum: 100, satuan: "Tablet" },
  { id: 2, nama: "Amoxicillin 500mg", stok: 45, minimum: 100, satuan: "Kapsul" },
  { id: 3, nama: "Omeprazole 20mg", stok: 80, minimum: 50, satuan: "Kapsul" },
  { id: 4, nama: "OAT Kategori 1", stok: 12, minimum: 20, satuan: "Paket" },
  { id: 5, nama: "Oralit", stok: 150, minimum: 100, satuan: "Sachet" },
  { id: 6, nama: "Amlodipine 5mg", stok: 30, minimum: 50, satuan: "Tablet" },
  { id: 7, nama: "Salep Hydrocortisone", stok: 8, minimum: 15, satuan: "Tube" },
  { id: 8, nama: "Zinc 20mg", stok: 200, minimum: 100, satuan: "Tablet" },
]

export const hakWbpData = [
  { id: 1, nama: "Ahmad Sudirman", masaPidana: "54 bulan", duaPerTiga: "36 bulan", estimasiBebas: "2026-09-15", statusRemisi: "Diajukan", statusPB: "Belum", progress: 67 },
  { id: 2, nama: "Budi Hartono", masaPidana: "48 bulan", duaPerTiga: "32 bulan", estimasiBebas: "2027-01-10", statusRemisi: "Belum", statusPB: "Belum", progress: 50 },
  { id: 3, nama: "Candra Wijaya", masaPidana: "60 bulan", duaPerTiga: "40 bulan", estimasiBebas: "2026-06-20", statusRemisi: "Diterima", statusPB: "PB Diajukan", progress: 70 },
  { id: 4, nama: "Dedi Prasetyo", masaPidana: "36 bulan", duaPerTiga: "24 bulan", estimasiBebas: "2026-07-05", statusRemisi: "Belum", statusPB: "Belum", progress: 50 },
  { id: 5, nama: "Eko Saputra", masaPidana: "40 bulan", duaPerTiga: "27 bulan", estimasiBebas: "2026-03-12", statusRemisi: "Diterima", statusPB: "CB Diajukan", progress: 75 },
  { id: 6, nama: "Hendra Gunawan", masaPidana: "48 bulan", duaPerTiga: "32 bulan", estimasiBebas: "2028-01-05", statusRemisi: "Belum", statusPB: "Belum", progress: 25 },
  { id: 7, nama: "Rafi Hakim", masaPidana: "44 bulan", duaPerTiga: "29 bulan", estimasiBebas: "2026-04-22", statusRemisi: "Diajukan", statusPB: "PB Diajukan", progress: 68 },
  { id: 8, nama: "Joko Susilo", masaPidana: "36 bulan", duaPerTiga: "24 bulan", estimasiBebas: "2026-12-01", statusRemisi: "Belum", statusPB: "Belum", progress: 42 },
]

export const insidenData = [
  { id: 1, namaWbp: "Dedi Prasetyo", jenis: "Perkelahian", tanggal: "2026-02-25", poin: -15, bukti: true },
  { id: 2, namaWbp: "Joko Susilo", jenis: "Pelanggaran Jam Malam", tanggal: "2026-02-24", poin: -5, bukti: false },
  { id: 3, namaWbp: "Budi Hartono", jenis: "Penyalahgunaan Fasilitas", tanggal: "2026-02-23", poin: -10, bukti: true },
  { id: 4, namaWbp: "Hendra Gunawan", jenis: "Pelanggaran Tata Tertib", tanggal: "2026-02-22", poin: -5, bukti: false },
  { id: 5, namaWbp: "Dedi Prasetyo", jenis: "Menolak Perintah Petugas", tanggal: "2026-02-20", poin: -10, bukti: true },
]

export const absensiPetugas = [
  { id: 1, nama: "Iptu Surya Wijaya", jabatan: "Ka. Regu Jaga", status: "Hadir", jamMasuk: "06:00", jamKeluar: "14:00" },
  { id: 2, nama: "Bripka Andi Pratama", jabatan: "Petugas Jaga", status: "Hadir", jamMasuk: "06:00", jamKeluar: "14:00" },
  { id: 3, nama: "Bripka Doni Saputra", jabatan: "Petugas Jaga", status: "Izin", jamMasuk: "-", jamKeluar: "-" },
  { id: 4, nama: "Aipda Riko Fernandez", jabatan: "Petugas Jaga", status: "Hadir", jamMasuk: "06:00", jamKeluar: "14:00" },
  { id: 5, nama: "Bripka Yusuf Hidayat", jabatan: "Petugas Pos", status: "Hadir", jamMasuk: "14:00", jamKeluar: "22:00" },
  { id: 6, nama: "Aipda Farid Rahman", jabatan: "Petugas Pos", status: "Sakit", jamMasuk: "-", jamKeluar: "-" },
]

// Chart data
export const KAPASITAS_LAPAS = 620

export const trendPopulasi = [
  { bulan: "Sep", total: 420, persen: Math.round((420 / 620) * 100) },
  { bulan: "Oct", total: 435, persen: Math.round((435 / 620) * 100) },
  { bulan: "Nov", total: 428, persen: Math.round((428 / 620) * 100) },
  { bulan: "Dec", total: 445, persen: Math.round((445 / 620) * 100) },
  { bulan: "Jan", total: 452, persen: Math.round((452 / 620) * 100) },
  { bulan: "Feb", total: 461, persen: Math.round((461 / 620) * 100) },
]

export const remisiPembebasan = [
  { bulan: "Sep", remisi: 12, bebas: 8 },
  { bulan: "Oct", remisi: 15, bebas: 5 },
  { bulan: "Nov", remisi: 10, bebas: 12 },
  { bulan: "Dec", remisi: 18, bebas: 7 },
  { bulan: "Jan", remisi: 14, bebas: 10 },
  { bulan: "Feb", remisi: 20, bebas: 9 },
]

export const trendKunjungan = [
  { hari: "Sen", jumlah: 25 },
  { hari: "Sel", jumlah: 32 },
  { hari: "Rab", jumlah: 28 },
  { hari: "Kam", jumlah: 35 },
  { hari: "Jum", jumlah: 22 },
  { hari: "Sab", jumlah: 40 },
  { hari: "Min", jumlah: 15 },
]

export const insidenKeamanan = [
  { bulan: "Sep", insiden: 5 },
  { bulan: "Oct", insiden: 3 },
  { bulan: "Nov", insiden: 7 },
  { bulan: "Dec", insiden: 2 },
  { bulan: "Jan", insiden: 4 },
  { bulan: "Feb", insiden: 6 },
]

export const distribusiBlok = [
  { blok: "Blok A", jumlah: 120 },
  { blok: "Blok B", jumlah: 105 },
  { blok: "Blok C", jumlah: 98 },
  { blok: "Blok D", jumlah: 85 },
  { blok: "Blok E", jumlah: 53 },
]

export const penyakitTerbanyak = [
  { penyakit: "ISPA", jumlah: 45 },
  { penyakit: "Diare", jumlah: 32 },
  { penyakit: "Hipertensi", jumlah: 28 },
  { penyakit: "TBC", jumlah: 15 },
  { penyakit: "Dermatitis", jumlah: 22 },
]

export const rawatInap = [
  { bulan: "Sep", rawat: 8 },
  { bulan: "Oct", rawat: 5 },
  { bulan: "Nov", rawat: 10 },
  { bulan: "Dec", rawat: 6 },
  { bulan: "Jan", rawat: 9 },
  { bulan: "Feb", rawat: 7 },
]

export const kunjunganHarian = [
  { tanggal: "20 Feb", jumlah: 28 },
  { tanggal: "21 Feb", jumlah: 35 },
  { tanggal: "22 Feb", jumlah: 22 },
  { tanggal: "23 Feb", jumlah: 30 },
  { tanggal: "24 Feb", jumlah: 38 },
  { tanggal: "25 Feb", jumlah: 33 },
]

export const kalenderBebas = [
  { nama: "Eko Saputra", tanggal: "12 Mar 2026" },
  { nama: "Rafi Hakim", tanggal: "22 Apr 2026" },
  { nama: "Candra Wijaya", tanggal: "20 Jun 2026" },
  { nama: "Dedi Prasetyo", tanggal: "05 Jul 2026" },
  { nama: "Ahmad Sudirman", tanggal: "15 Sep 2026" },
]

export const komparasiBulanan = [
  { bulan: "Sep", wbpMasuk: 18, wbpKeluar: 8, kunjungan: 180, insiden: 5 },
  { bulan: "Oct", wbpMasuk: 22, wbpKeluar: 5, kunjungan: 200, insiden: 3 },
  { bulan: "Nov", wbpMasuk: 15, wbpKeluar: 12, kunjungan: 175, insiden: 7 },
  { bulan: "Dec", wbpMasuk: 25, wbpKeluar: 7, kunjungan: 210, insiden: 2 },
  { bulan: "Jan", wbpMasuk: 20, wbpKeluar: 10, kunjungan: 195, insiden: 4 },
  { bulan: "Feb", wbpMasuk: 16, wbpKeluar: 9, kunjungan: 220, insiden: 6 },
]
