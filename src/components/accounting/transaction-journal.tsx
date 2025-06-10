'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Plus, Edit3, Trash2, Search, Calendar, Download } from 'lucide-react';
interface JournalEntry {
  id: string;
  date: string;
  reference: string;
  description: string;
  accounts: Array<{
    account: string;
    debit: number;
    credit: number;
  }>;
}
export function TransactionJournal() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const journalEntries: JournalEntry[] = [{
    id: '1',
    date: '2024-01-05',
    reference: 'JU-001',
    description: 'Penjualan pestisida tunai',
    accounts: [{
      account: 'Kas',
      debit: 2500000,
      credit: 0
    }, {
      account: 'Penjualan',
      debit: 0,
      credit: 2500000
    }]
  }, {
    id: '2',
    date: '2024-01-10',
    reference: 'JU-002',
    description: 'Pembayaran gaji karyawan',
    accounts: [{
      account: 'Biaya Gaji',
      debit: 1500000,
      credit: 0
    }, {
      account: 'Kas',
      debit: 0,
      credit: 1500000
    }]
  }, {
    id: '3',
    date: '2024-01-15',
    reference: 'JU-003',
    description: 'Pembelian persediaan pestisida',
    accounts: [{
      account: 'Persediaan',
      debit: 5000000,
      credit: 0
    }, {
      account: 'Kas',
      debit: 0,
      credit: 3000000
    }, {
      account: 'Hutang Dagang',
      debit: 0,
      credit: 2000000
    }]
  }, {
    id: '4',
    date: '2024-01-20',
    reference: 'JU-004',
    description: 'Pembayaran sewa toko',
    accounts: [{
      account: 'Biaya Sewa',
      debit: 2000000,
      credit: 0
    }, {
      account: 'Kas',
      debit: 0,
      credit: 2000000
    }]
  }];
  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase()) || entry.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !dateFilter || entry.date.includes(dateFilter);
    return matchesSearch && matchesDate;
  });
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary" /><span className="editable-text">
            Jurnal Transaksi
          </span></h2>
          <p className="text-muted-foreground"><span className="editable-text">Pencatatan jurnal harian</span></p>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={() => alert('Export jurnal ke Excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /><span className="editable-text">
            Export
          </span></button>
          <button onClick={() => setShowForm(true)} className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
            <Plus className="w-4 h-4" /><span className="editable-text">
            Tambah Jurnal
          </span></button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2"><span className="editable-text">Pencarian</span></label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Cari jurnal..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2"><span className="editable-text">Filter Tanggal</span></label>
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="month" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4">
        {filteredEntries.map((entry, index) => {
        const totalDebit = entry.accounts.reduce((sum, acc) => sum + acc.debit, 0);
        const totalCredit = entry.accounts.reduce((sum, acc) => sum + acc.credit, 0);
        return <motion.div key={entry.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="glass-effect rounded-2xl p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{entry.reference}</h3>
                  <p className="text-sm text-muted-foreground">{entry.date}<span className="editable-text"> - </span>{entry.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 font-medium"><span className="editable-text">Akun</span></th>
                      <th className="text-right py-2 px-3 font-medium"><span className="editable-text">Debit</span></th>
                      <th className="text-right py-2 px-3 font-medium"><span className="editable-text">Kredit</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {entry.accounts.map((account, idx) => <tr key={idx} className="border-b border-border/50">
                        <td className="py-2 px-3">{account.account}</td>
                        <td className="py-2 px-3 text-right">
                          {account.debit > 0 ? `Rp ${account.debit.toLocaleString('id-ID')}` : '-'}
                        </td>
                        <td className="py-2 px-3 text-right">
                          {account.credit > 0 ? `Rp ${account.credit.toLocaleString('id-ID')}` : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-border font-semibold">
                      <td className="py-2 px-3"><span className="editable-text">Total</span></td>
                      <td className="py-2 px-3 text-right"><span className="editable-text">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                      <td className="py-2 px-3 text-right"><span className="editable-text">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {totalDebit !== totalCredit && <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-700 text-sm font-medium"><span className="editable-text">
                    ⚠️ Jurnal tidak seimbang! Debit dan Kredit harus sama.
                  </span></p>
                </div>}
            </motion.div>;
      })}
      </div>

      {filteredEntries.length === 0 && <div className="text-center py-12 glass-effect rounded-2xl">
          <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2">
            {searchTerm || dateFilter ? 'Jurnal tidak ditemukan' : 'Belum ada jurnal'}
          </h3>
          <p className="text-muted-foreground">
            {searchTerm || dateFilter ? 'Coba ubah filter pencarian' : 'Tambahkan jurnal transaksi pertama'}
          </p>
        </div>}

      {/* Add Journal Modal - Simplified for demo */}
      {showForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl">
            <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Tambah Jurnal Transaksi</span></h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2"><span className="editable-text">Tanggal</span></label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2"><span className="editable-text">No. Referensi</span></label>
                  <input type="text" placeholder="JU-001" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2"><span className="editable-text">Keterangan</span></label>
                <input type="text" placeholder="Deskripsi transaksi" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" />
              </div>
              <div className="flex gap-2 pt-4">
                <button onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"><span className="editable-text">
                  Batal
                </span></button>
                <button onClick={() => {
              alert('Fitur tambah jurnal akan dikembangkan lebih lanjut');
              setShowForm(false);
            }} className="flex-1 gradient-primary text-white px-4 py-2 rounded-lg font-semibold"><span className="editable-text">
                  Simpan
                </span></button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}