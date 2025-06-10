'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
type ReportType = 'balance-sheet' | 'income-statement' | 'cash-flow';
type Period = 'monthly' | 'quarterly' | 'yearly';
export function FinancialReports() {
  const [activeReport, setActiveReport] = useState<ReportType>('balance-sheet');
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('monthly');
  const reports = [{
    id: 'balance-sheet' as ReportType,
    label: 'Neraca',
    icon: FileText
  }, {
    id: 'income-statement' as ReportType,
    label: 'Laba Rugi',
    icon: TrendingUp
  }, {
    id: 'cash-flow' as ReportType,
    label: 'Arus Kas',
    icon: DollarSign
  }];
  const periods = [{
    id: 'monthly' as Period,
    label: 'Bulanan'
  }, {
    id: 'quarterly' as Period,
    label: 'Triwulanan'
  }, {
    id: 'yearly' as Period,
    label: 'Tahunan'
  }];

  // Sample data
  const revenueData = [{
    month: 'Jan',
    revenue: 12500000,
    profit: 3200000,
    expenses: 9300000,
    cogs: 7800000,
    operatingExpenses: 1500000
  }, {
    month: 'Feb',
    revenue: 15200000,
    profit: 4100000,
    expenses: 11100000,
    cogs: 9600000,
    operatingExpenses: 1500000
  }, {
    month: 'Mar',
    revenue: 18700000,
    profit: 5300000,
    expenses: 13400000,
    cogs: 11800000,
    operatingExpenses: 1600000
  }, {
    month: 'Apr',
    revenue: 14300000,
    profit: 3800000,
    expenses: 10500000,
    cogs: 9000000,
    operatingExpenses: 1500000
  }, {
    month: 'May',
    revenue: 16800000,
    profit: 4900000,
    expenses: 11900000,
    cogs: 10200000,
    operatingExpenses: 1700000
  }, {
    month: 'Jun',
    revenue: 19200000,
    profit: 5700000,
    expenses: 13500000,
    cogs: 11800000,
    operatingExpenses: 1700000
  }];
  const kpiData = [{
    label: 'Total Pendapatan',
    value: 96700000,
    change: 15.2,
    trend: 'up'
  }, {
    label: 'Total Pengeluaran',
    value: 68690000,
    change: 8.7,
    trend: 'down'
  }, {
    label: 'Laba Bersih',
    value: 28010000,
    change: 22.5,
    trend: 'up'
  }, {
    label: 'Margin Profit',
    value: 28.97,
    change: 5.8,
    trend: 'up',
    isPercentage: true
  }];
  const cashFlowData = [{
    month: 'Jan',
    operating: 3200000,
    investing: -800000,
    financing: 500000
  }, {
    month: 'Feb',
    operating: 4100000,
    investing: -1200000,
    financing: 0
  }, {
    month: 'Mar',
    operating: 5300000,
    investing: -2000000,
    financing: 1000000
  }, {
    month: 'Apr',
    operating: 3800000,
    investing: -500000,
    financing: -500000
  }, {
    month: 'May',
    operating: 4900000,
    investing: -1000000,
    financing: 0
  }, {
    month: 'Jun',
    operating: 5700000,
    investing: -1500000,
    financing: 2000000
  }];
  const assetData = [{
    name: 'Kas & Bank',
    value: 45000000,
    color: '#059669'
  }, {
    name: 'Piutang',
    value: 18000000,
    color: '#10b981'
  }, {
    name: 'Persediaan',
    value: 32000000,
    color: '#34d399'
  }, {
    name: 'Aset Tetap',
    value: 85000000,
    color: '#6ee7b7'
  }];
  const handleExport = (format: 'excel' | 'pdf') => {
    // Export functionality would be implemented here
    alert(`Mengekspor laporan dalam format ${format.toUpperCase()}`);
  };
  const renderBalanceSheet = () => <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary" /><span className="editable-text">
            Komposisi Aset
          </span></h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={assetData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {assetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Neraca Ringkas</span></h3>
          <div className="space-y-4">
            <div className="border-b border-border pb-2">
              <h4 className="font-semibold text-primary mb-2"><span className="editable-text">ASET</span></h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span><span className="editable-text">Kas dan Bank</span></span>
                  <span><span className="editable-text">Rp 45.000.000</span></span>
                </div>
                <div className="flex justify-between">
                  <span><span className="editable-text">Piutang Dagang</span></span>
                  <span><span className="editable-text">Rp 18.000.000</span></span>
                </div>
                <div className="flex justify-between">
                  <span><span className="editable-text">Persediaan</span></span>
                  <span><span className="editable-text">Rp 32.000.000</span></span>
                </div>
                <div className="flex justify-between">
                  <span><span className="editable-text">Aset Tetap</span></span>
                  <span><span className="editable-text">Rp 85.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span><span className="editable-text">Total Aset</span></span>
                  <span><span className="editable-text">Rp 180.000.000</span></span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2">
              <h4 className="font-semibold text-primary mb-2"><span className="editable-text">KEWAJIBAN</span></h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span><span className="editable-text">Hutang Dagang</span></span>
                  <span><span className="editable-text">Rp 25.000.000</span></span>
                </div>
                <div className="flex justify-between">
                  <span><span className="editable-text">Hutang Bank</span></span>
                  <span><span className="editable-text">Rp 35.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span><span className="editable-text">Total Kewajiban</span></span>
                  <span><span className="editable-text">Rp 60.000.000</span></span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2"><span className="editable-text">MODAL</span></h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span><span className="editable-text">Modal Pemilik</span></span>
                  <span><span className="editable-text">Rp 100.000.000</span></span>
                </div>
                <div className="flex justify-between">
                  <span><span className="editable-text">Laba Ditahan</span></span>
                  <span><span className="editable-text">Rp 20.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span><span className="editable-text">Total Modal</span></span>
                  <span><span className="editable-text">Rp 120.000.000</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderIncomeStatement = () => <div className="space-y-6">
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart className="w-5 h-5 text-primary" /><span className="editable-text">
          Tren Pendapatan & Laba
        </span></h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={value => `${(value / 1000000).toFixed(0)}M`} />
              <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              <Bar dataKey="revenue" fill="#059669" name="Pendapatan" />
              <Bar dataKey="profit" fill="#10b981" name="Laba Bersih" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Laporan Laba Rugi</span></h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between font-semibold">
              <span><span className="editable-text">Pendapatan Penjualan</span></span>
              <span><span className="editable-text">Rp 96.700.000</span></span>
            </div>
            <div className="flex justify-between">
              <span><span className="editable-text">Harga Pokok Penjualan</span></span>
              <span><span className="editable-text">(Rp 68.690.000)</span></span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span><span className="editable-text">Laba Kotor</span></span>
              <span><span className="editable-text">Rp 28.010.000</span></span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between">
                <span><span className="editable-text">Biaya Operasional:</span></span>
                <span></span>
              </div>
              <div className="flex justify-between ml-4">
                <span><span className="editable-text">- Biaya Gaji</span></span>
                <span><span className="editable-text">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4">
                <span><span className="editable-text">- Biaya Sewa</span></span>
                <span><span className="editable-text">(Rp 3.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4">
                <span><span className="editable-text">- Biaya Lain-lain</span></span>
                <span><span className="editable-text">(Rp 2.010.000)</span></span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span><span className="editable-text">Laba Bersih</span></span>
              <span className="text-green-600"><span className="editable-text">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Rasio Profitabilitas</span></h3>
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium"><span className="editable-text">Margin Laba Kotor</span></span>
                <span className="text-lg font-bold text-green-600"><span className="editable-text">28.97%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium"><span className="editable-text">Margin Laba Bersih</span></span>
                <span className="text-lg font-bold text-blue-600"><span className="editable-text">15.51%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium"><span className="editable-text">ROA (Return on Assets)</span></span>
                <span className="text-lg font-bold text-purple-600"><span className="editable-text">8.33%</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderCashFlow = () => <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <LineChart className="w-5 h-5 text-primary" /><span className="editable-text">
            Tren Arus Kas Bulanan
          </span></h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={value => `${(value / 1000000).toFixed(0)}M`} />
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
                <Bar dataKey="operating" fill="#059669" name="Operasional" />
                <Bar dataKey="investing" fill="#dc2626" name="Investasi" />
                <Bar dataKey="financing" fill="#3b82f6" name="Pendanaan" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Ringkasan Arus Kas</span></h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-800"><span className="editable-text">Arus Kas Operasional</span></span>
                <span className="text-xl font-bold text-green-600">
                  <span className="editable-text">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.operating, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-800"><span className="editable-text">Arus Kas Investasi</span></span>
                <span className="text-xl font-bold text-red-600">
                  <span className="editable-text">Rp </span>{Math.abs(cashFlowData.reduce((sum, item) => sum + item.investing, 0)).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800"><span className="editable-text">Arus Kas Pendanaan</span></span>
                <span className="text-xl font-bold text-blue-600">
                  <span className="editable-text">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.financing, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Laporan Arus Kas</span></h3>
        <div className="space-y-4">
          <div className="border-b border-border pb-4">
            <h4 className="font-semibold text-primary mb-2"><span className="editable-text">ARUS KAS DARI AKTIVITAS OPERASI</span></h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span><span className="editable-text">Penerimaan dari pelanggan</span></span>
                <span><span className="editable-text">Rp 96.700.000</span></span>
              </div>
              <div className="flex justify-between">
                <span><span className="editable-text">Pembayaran kepada pemasok</span></span>
                <span><span className="editable-text">(Rp 68.690.000)</span></span>
              </div>
              <div className="flex justify-between">
                <span><span className="editable-text">Pembayaran gaji</span></span>
                <span><span className="editable-text">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between">
                <span><span className="editable-text">Pembayaran biaya operasional</span></span>
                <span><span className="editable-text">(Rp 5.010.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span><span className="editable-text">Kas Bersih dari Aktivitas Operasi</span></span>
                <span className="text-green-600"><span className="editable-text">Rp 15.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4">
            <h4 className="font-semibold text-primary mb-2"><span className="editable-text">ARUS KAS DARI AKTIVITAS INVESTASI</span></h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span><span className="editable-text">Pembelian peralatan</span></span>
                <span><span className="editable-text">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span><span className="editable-text">Kas Bersih dari Aktivitas Investasi</span></span>
                <span className="text-red-600"><span className="editable-text">(Rp 5.000.000)</span></span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2"><span className="editable-text">ARUS KAS DARI AKTIVITAS PENDANAAN</span></h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span><span className="editable-text">Pinjaman bank</span></span>
                <span><span className="editable-text">Rp 10.000.000</span></span>
              </div>
              <div className="flex justify-between">
                <span><span className="editable-text">Pembayaran dividen</span></span>
                <span><span className="editable-text">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span><span className="editable-text">Kas Bersih dari Aktivitas Pendanaan</span></span>
                <span className="text-green-600"><span className="editable-text">Rp 5.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span><span className="editable-text">Kenaikan Bersih Kas</span></span>
              <span className="text-green-600"><span className="editable-text">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-6">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {kpiData.map((kpi, index) => <motion.div key={kpi.label} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">{kpi.label}</h3>
              <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
                <TrendingUp className={`w-3 h-3 ${kpi.trend === 'down' ? 'rotate-180' : ''}`} />
                {kpi.change}<span className="editable-text">%
              </span></div>
            </div>
            <div className="text-2xl font-bold text-foreground">
              {kpi.isPercentage ? `${kpi.value}%` : `Rp ${kpi.value.toLocaleString('id-ID')}`}
            </div>
          </motion.div>)}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold"><span className="editable-text">Laporan Keuangan Detil</span></h2>
          <p className="text-muted-foreground"><span className="editable-text">Analisis mendalam kinerja keuangan perusahaan</span></p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Period Selector */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as Period)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring">
              {periods.map(period => <option key={period.id} value={period.id}>{period.label}</option>)}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2">
            <button onClick={() => handleExport('excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" /><span className="editable-text">
              Excel
            </span></button>
            <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" /><span className="editable-text">
              PDF
            </span></button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4">
        {reports.map(report => {
        const Icon = report.icon;
        const isActive = activeReport === report.id;
        return <button key={report.id} onClick={() => setActiveReport(report.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`}>
              <Icon className="w-4 h-4" />
              {report.label}
            </button>;
      })}
      </div>

      {/* Report Content */}
      <motion.div key={activeReport} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.3
    }}>
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>;
}