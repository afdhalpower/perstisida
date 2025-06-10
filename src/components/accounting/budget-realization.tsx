'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, TrendingDown, AlertCircle, Calendar, Download, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
type BudgetPeriod = '2024' | '2023';
export function BudgetRealization() {
  const [selectedPeriod, setSelectedPeriod] = useState<BudgetPeriod>('2024');
  const budgetData = [{
    category: 'Pendapatan',
    budget: 120000000,
    actual: 96700000,
    variance: -23300000,
    percentage: 80.6,
    status: 'below'
  }, {
    category: 'HPP',
    budget: 72000000,
    actual: 68690000,
    variance: 3310000,
    percentage: 95.4,
    status: 'good'
  }, {
    category: 'Biaya Operasional',
    budget: 15000000,
    actual: 13010000,
    variance: 1990000,
    percentage: 86.7,
    status: 'good'
  }, {
    category: 'Biaya Gaji',
    budget: 10000000,
    actual: 8000000,
    variance: 2000000,
    percentage: 80.0,
    status: 'good'
  }];
  const monthlyBudget = [{
    month: 'Jan',
    budget: 10000000,
    actual: 8500000,
    variance: -1500000
  }, {
    month: 'Feb',
    budget: 10000000,
    actual: 12200000,
    variance: 2200000
  }, {
    month: 'Mar',
    budget: 10000000,
    actual: 15800000,
    variance: 5800000
  }, {
    month: 'Apr',
    budget: 10000000,
    actual: 9300000,
    variance: -700000
  }, {
    month: 'May',
    budget: 10000000,
    actual: 11800000,
    variance: 1800000
  }, {
    month: 'Jun',
    budget: 10000000,
    actual: 14200000,
    variance: 4200000
  }];
  const expenseBreakdown = [{
    name: 'HPP',
    budgeted: 72000000,
    actual: 68690000,
    color: '#059669'
  }, {
    name: 'Gaji',
    budgeted: 10000000,
    actual: 8000000,
    color: '#10b981'
  }, {
    name: 'Operasional',
    budgeted: 15000000,
    actual: 13010000,
    color: '#34d399'
  }, {
    name: 'Lain-lain',
    budgeted: 3000000,
    actual: 2300000,
    color: '#6ee7b7'
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'below':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <TrendingUp className="w-4 h-4" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4" />;
      case 'below':
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" /><span className="editable-text">
            Anggaran & Realisasi
          </span></h2>
          <p className="text-muted-foreground"><span className="editable-text">Perbandingan anggaran dengan realisasi aktual</span></p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as BudgetPeriod)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring">
              <option value="2024"><span className="editable-text">2024</span></option>
              <option value="2023"><span className="editable-text">2023</span></option>
            </select>
          </div>
          
          <div className="flex gap-2">
            <button onClick={() => alert('Tambah anggaran baru')} className="px-4 py-2 rounded-lg gradient-primary text-white font-semibold flex items-center gap-2">
              <Plus className="w-4 h-4" /><span className="editable-text">
              Buat Anggaran
            </span></button>
            <button onClick={() => alert('Export laporan anggaran')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" /><span className="editable-text">
              Export
            </span></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-muted-foreground"><span className="editable-text">Total Anggaran</span></h3>
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600"><span className="editable-text">
            Rp </span>{120000000 .toLocaleString('id-ID')}
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-muted-foreground"><span className="editable-text">Realisasi</span></h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600"><span className="editable-text">
            Rp </span>{96700000 .toLocaleString('id-ID')}
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-muted-foreground"><span className="editable-text">Varians</span></h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600"><span className="editable-text">
            Rp </span>{23300000 .toLocaleString('id-ID')}
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-muted-foreground"><span className="editable-text">% Pencapaian</span></h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600"><span className="editable-text">80.6%</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Tren Bulanan Anggaran vs Realisasi</span></h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyBudget}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={value => `${(value / 1000000).toFixed(0)}M`} />
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
                <Bar dataKey="budget" fill="#94a3b8" name="Anggaran" />
                <Bar dataKey="actual" fill="#059669" name="Realisasi" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Expense Breakdown */}
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Breakdown Pengeluaran</span></h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100} dataKey="actual" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {expenseBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Detailed Budget Table */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Detail Anggaran vs Realisasi</span></h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium"><span className="editable-text">Kategori</span></th>
                <th className="text-right py-3 px-4 font-medium"><span className="editable-text">Anggaran</span></th>
                <th className="text-right py-3 px-4 font-medium"><span className="editable-text">Realisasi</span></th>
                <th className="text-right py-3 px-4 font-medium"><span className="editable-text">Varians</span></th>
                <th className="text-center py-3 px-4 font-medium"><span className="editable-text">% Pencapaian</span></th>
                <th className="text-center py-3 px-4 font-medium"><span className="editable-text">Status</span></th>
              </tr>
            </thead>
            <tbody>
              {budgetData.map((item, index) => <motion.tr key={item.category} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                  <td className="py-3 px-4 font-medium">{item.category}</td>
                  <td className="py-3 px-4 text-right"><span className="editable-text">
                    Rp </span>{item.budget.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-right"><span className="editable-text">
                    Rp </span>{item.actual.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${item.variance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.variance >= 0 ? '+' : ''}<span className="editable-text">Rp </span>{item.variance.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div className={`h-2 rounded-full ${item.percentage >= 100 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${Math.min(item.percentage, 100)}%`
                    }}></div>
                      </div>
                      <span className="text-sm font-medium">{item.percentage.toFixed(1)}<span className="editable-text">%</span></span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      {item.status === 'good' ? 'Baik' : item.status === 'warning' ? 'Peringatan' : 'Di Bawah Target'}
                    </div>
                  </td>
                </motion.tr>)}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Action Items */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Rencana Tindakan</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-red-50 border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /><span className="editable-text">
              Perlu Perhatian
            </span></h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li><span className="editable-text">• Pendapatan masih 19.4% di bawah target</span></li>
              <li><span className="editable-text">• Perlu strategi pemasaran yang lebih agresif</span></li>
              <li><span className="editable-text">• Evaluasi harga jual produk</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /><span className="editable-text">
              Pencapaian Positif
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li><span className="editable-text">• Pengeluaran operasional terkendali</span></li>
              <li><span className="editable-text">• Efisiensi biaya gaji tercapai</span></li>
              <li><span className="editable-text">• HPP sesuai target yang ditetapkan</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}