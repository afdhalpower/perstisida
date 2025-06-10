'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Cell } from 'recharts';

type ReportType = 'balance-sheet' | 'income-statement' | 'cash-flow';
type Period = 'monthly' | 'quarterly' | 'yearly';

export function FinancialReports() {
  const [activeReport, setActiveReport] = useState<ReportType>('balance-sheet');
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('monthly');

  const reports = [
    { id: 'balance-sheet' as ReportType, label: 'Neraca', icon: FileText },
    { id: 'income-statement' as ReportType, label: 'Laba Rugi', icon: TrendingUp },
    { id: 'cash-flow' as ReportType, label: 'Arus Kas', icon: DollarSign }
  ];

  const periods = [
    { id: 'monthly' as Period, label: 'Bulanan' },
    { id: 'quarterly' as Period, label: 'Triwulanan' },
    { id: 'yearly' as Period, label: 'Tahunan' }
  ];

  // Sample data
  const revenueData = [
    { month: 'Jan', revenue: 12500000, profit: 3200000 },
    { month: 'Feb', revenue: 15200000, profit: 4100000 },
    { month: 'Mar', revenue: 18700000, profit: 5300000 },
    { month: 'Apr', revenue: 14300000, profit: 3800000 },
    { month: 'May', revenue: 16800000, profit: 4900000 },
    { month: 'Jun', revenue: 19200000, profit: 5700000 }
  ];

  const assetData = [
    { name: 'Kas & Bank', value: 45000000, color: '#059669' },
    { name: 'Piutang', value: 18000000, color: '#10b981' },
    { name: 'Persediaan', value: 32000000, color: '#34d399' },
    { name: 'Aset Tetap', value: 85000000, color: '#6ee7b7' }
  ];

  const handleExport = (format: 'excel' | 'pdf') => {
    // Export functionality would be implemented here
    alert(`Mengekspor laporan dalam format ${format.toUpperCase()}`);
  };

  const renderBalanceSheet = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary" />
            Komposisi Aset
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={assetData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {assetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Neraca Ringkas</h3>
          <div className="space-y-4">
            <div className="border-b border-border pb-2">
              <h4 className="font-semibold text-primary mb-2">ASET</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Kas dan Bank</span>
                  <span>Rp 45.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Piutang Dagang</span>
                  <span>Rp 18.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Persediaan</span>
                  <span>Rp 32.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Aset Tetap</span>
                  <span>Rp 85.000.000</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total Aset</span>
                  <span>Rp 180.000.000</span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2">
              <h4 className="font-semibold text-primary mb-2">KEWAJIBAN</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Hutang Dagang</span>
                  <span>Rp 25.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Hutang Bank</span>
                  <span>Rp 35.000.000</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total Kewajiban</span>
                  <span>Rp 60.000.000</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">MODAL</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Modal Pemilik</span>
                  <span>Rp 100.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Laba Ditahan</span>
                  <span>Rp 20.000.000</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total Modal</span>
                  <span>Rp 120.000.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIncomeStatement = () => (
    <div className="space-y-6">
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart className="w-5 h-5 text-primary" />
          Tren Pendapatan & Laba
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
              <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              <Bar dataKey="revenue" fill="#059669" name="Pendapatan" />
              <Bar dataKey="profit" fill="#10b981" name="Laba Bersih" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Laporan Laba Rugi</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between font-semibold">
              <span>Pendapatan Penjualan</span>
              <span>Rp 96.700.000</span>
            </div>
            <div className="flex justify-between">
              <span>Harga Pokok Penjualan</span>
              <span>(Rp 68.690.000)</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Laba Kotor</span>
              <span>Rp 28.010.000</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between">
                <span>Biaya Operasional:</span>
                <span></span>
              </div>
              <div className="flex justify-between ml-4">
                <span>- Biaya Gaji</span>
                <span>(Rp 8.000.000)</span>
              </div>
              <div className="flex justify-between ml-4">
                <span>- Biaya Sewa</span>
                <span>(Rp 3.000.000)</span>
              </div>
              <div className="flex justify-between ml-4">
                <span>- Biaya Lain-lain</span>
                <span>(Rp 2.010.000)</span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Laba Bersih</span>
              <span className="text-green-600">Rp 15.000.000</span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Rasio Profitabilitas</h3>
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Margin Laba Kotor</span>
                <span className="text-lg font-bold text-green-600">28.97%</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Margin Laba Bersih</span>
                <span className="text-lg font-bold text-blue-600">15.51%</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">ROA (Return on Assets)</span>
                <span className="text-lg font-bold text-purple-600">8.33%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCashFlow = () => (
    <div className="space-y-6">
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <LineChart className="w-5 h-5 text-primary" />
          Tren Arus Kas
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
              <Tooltip formatter={(value) => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              <Line type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={3} name="Arus Masuk" />
              <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} name="Arus Keluar" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Laporan Arus Kas</h3>
        <div className="space-y-4">
          <div className="border-b border-border pb-4">
            <h4 className="font-semibold text-primary mb-2">ARUS KAS DARI AKTIVITAS OPERASI</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Penerimaan dari pelanggan</span>
                <span>Rp 96.700.000</span>
              </div>
              <div className="flex justify-between">
                <span>Pembayaran kepada pemasok</span>
                <span>(Rp 68.690.000)</span>
              </div>
              <div className="flex justify-between">
                <span>Pembayaran gaji</span>
                <span>(Rp 8.000.000)</span>
              </div>
              <div className="flex justify-between">
                <span>Pembayaran biaya operasional</span>
                <span>(Rp 5.010.000)</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Kas Bersih dari Aktivitas Operasi</span>
                <span className="text-green-600">Rp 15.000.000</span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4">
            <h4 className="font-semibold text-primary mb-2">ARUS KAS DARI AKTIVITAS INVESTASI</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Pembelian peralatan</span>
                <span>(Rp 5.000.000)</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Kas Bersih dari Aktivitas Investasi</span>
                <span className="text-red-600">(Rp 5.000.000)</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">ARUS KAS DARI AKTIVITAS PENDANAAN</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Pinjaman bank</span>
                <span>Rp 10.000.000</span>
              </div>
              <div className="flex justify-between">
                <span>Pembayaran dividen</span>
                <span>(Rp 5.000.000)</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Kas Bersih dari Aktivitas Pendanaan</span>
                <span className="text-green-600">Rp 5.000.000</span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Kenaikan Bersih Kas</span>
              <span className="text-green-600">Rp 15.000.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Laporan Keuangan</h2>
          <p className="text-muted-foreground">Analisis kinerja keuangan perusahaan</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Period Selector */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <select 
              value={selectedPeriod} 
              onChange={(e) => setSelectedPeriod(e.target.value as Period)}
              className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring"
            >
              {periods.map(period => (
                <option key={period.id} value={period.id}>{period.label}</option>
              ))}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => handleExport('excel')}
              className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Excel
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              PDF
            </button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4">
        {reports.map((report) => {
          const Icon = report.icon;
          const isActive = activeReport === report.id;
          
          return (
            <button
              key={report.id}
              onClick={() => setActiveReport(report.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'gradient-primary text-white shadow-lg' 
                  : 'glass-effect hover:bg-accent/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {report.label}
            </button>
          );
        })}
      </div>

      {/* Report Content */}
      <motion.div
        key={activeReport}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>
  );
}
