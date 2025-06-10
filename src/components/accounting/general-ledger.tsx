'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, Calendar, Download } from 'lucide-react';
interface LedgerEntry {
  id: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
  reference: string;
}
export function GeneralLedger() {
  const [selectedAccount, setSelectedAccount] = useState('cash');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('2024-01-01');
  const [dateTo, setDateTo] = useState('2024-12-31');
  const accounts: any[] = [];
  const ledgerEntries: LedgerEntry[] = [];
  const selectedAccountData = accounts.find(acc => acc.id === selectedAccount);
  const filteredEntries = ledgerEntries.filter(entry => {
    const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase()) || entry.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = entry.date >= dateFrom && entry.date <= dateTo;
    return matchesSearch && matchesDate;
  });
  const totalDebit = filteredEntries.reduce((sum, entry) => sum + entry.debit, 0);
  const totalCredit = filteredEntries.reduce((sum, entry) => sum + entry.credit, 0);
  const handleExport = () => {
    alert('Mengekspor buku besar ke Excel');
  };
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" /><span className="editable-text">
            Buku Besar
          </span></h2>
          <p className="text-muted-foreground"><span className="editable-text">Catatan transaksi per akun</span></p>
        </div>
        
        <button onClick={handleExport} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" /><span className="editable-text">
          Export Excel
        </span></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Account List */}
        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4"><span className="editable-text">Daftar Akun</span></h3>
          <div className="space-y-2">
            {accounts.map(account => <button key={account.id} onClick={() => setSelectedAccount(account.id)} className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedAccount === account.id ? 'gradient-primary text-white' : 'hover:bg-accent/50'}`}>
                <div className="font-medium">{account.name}</div>
                <div className={`text-sm ${selectedAccount === account.id ? 'text-white/80' : 'text-muted-foreground'}`}><span className="editable-text">
                  Rp </span>{Math.abs(account.balance).toLocaleString('id-ID')}
                </div>
              </button>)}
          </div>
        </div>

        {/* Ledger Details */}
        <div className="lg:col-span-3 space-y-6">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2"><span className="editable-text">Pencarian</span></label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Cari transaksi..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2"><span className="editable-text">Dari Tanggal</span></label>
                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2"><span className="editable-text">Sampai Tanggal</span></label>
                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" />
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4"><span className="editable-text">
              Buku Besar: </span>{selectedAccountData?.name}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="text-2xl font-bold text-blue-600"><span className="editable-text">
                  Rp </span>{totalDebit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-blue-700"><span className="editable-text">Total Debit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50">
                <div className="text-2xl font-bold text-red-600"><span className="editable-text">
                  Rp </span>{totalCredit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-red-700"><span className="editable-text">Total Kredit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="text-2xl font-bold text-green-600"><span className="editable-text">
                  Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-green-700"><span className="editable-text">Saldo Akhir</span></div>
              </div>
            </div>

            {/* Ledger Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium"><span className="editable-text">Tanggal</span></th>
                    <th className="text-left py-3 px-4 font-medium"><span className="editable-text">Keterangan</span></th>
                    <th className="text-left py-3 px-4 font-medium"><span className="editable-text">Ref</span></th>
                    <th className="text-right py-3 px-4 font-medium"><span className="editable-text">Debit</span></th>
                    <th className="text-right py-3 px-4 font-medium"><span className="editable-text">Kredit</span></th>
                    <th className="text-right py-3 px-4 font-medium"><span className="editable-text">Saldo</span></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEntries.map((entry, index) => <motion.tr key={entry.id} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.05
                }} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                      <td className="py-3 px-4">{entry.date}</td>
                      <td className="py-3 px-4">{entry.description}</td>
                      <td className="py-3 px-4 text-primary font-medium">{entry.reference}</td>
                      <td className="py-3 px-4 text-right">
                        {entry.debit > 0 ? `Rp ${entry.debit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {entry.credit > 0 ? `Rp ${entry.credit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold"><span className="editable-text">
                        Rp </span>{entry.balance.toLocaleString('id-ID')}
                      </td>
                    </motion.tr>)}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-border font-semibold">
                    <td colSpan={3} className="py-3 px-4"><span className="editable-text">Total</span></td>
                    <td className="py-3 px-4 text-right"><span className="editable-text">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right"><span className="editable-text">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right"><span className="editable-text">
                      Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
