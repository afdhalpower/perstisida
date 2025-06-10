'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar } from 'recharts';
export function FinancialAnalysis() {
  // Sample data for financial ratios
  const ratioTrends = [{
    month: 'Jan',
    liquidity: 2.1,
    profitability: 15.5,
    efficiency: 3.2
  }, {
    month: 'Feb',
    liquidity: 2.3,
    profitability: 18.2,
    efficiency: 3.5
  }, {
    month: 'Mar',
    liquidity: 2.0,
    profitability: 20.1,
    efficiency: 3.8
  }, {
    month: 'Apr',
    liquidity: 1.9,
    profitability: 16.8,
    efficiency: 3.4
  }, {
    month: 'May',
    liquidity: 2.2,
    profitability: 19.3,
    efficiency: 3.7
  }, {
    month: 'Jun',
    liquidity: 2.4,
    profitability: 21.5,
    efficiency: 4.0
  }];
  const currentRatios = [{
    category: 'Rasio Likuiditas',
    ratios: [{
      name: 'Current Ratio',
      value: 2.4,
      benchmark: 2.0,
      status: 'good',
      description: 'Kemampuan membayar hutang jangka pendek',
      formula: 'Aset Lancar / Hutang Lancar'
    }, {
      name: 'Quick Ratio',
      value: 1.8,
      benchmark: 1.0,
      status: 'good',
      description: 'Kemampuan membayar hutang tanpa persediaan',
      formula: '(Aset Lancar - Persediaan) / Hutang Lancar'
    }, {
      name: 'Cash Ratio',
      value: 0.9,
      benchmark: 0.5,
      status: 'excellent',
      description: 'Kemampuan membayar dengan kas',
      formula: 'Kas & Setara Kas / Hutang Lancar'
    }]
  }, {
    category: 'Rasio Profitabilitas',
    ratios: [{
      name: 'ROA (Return on Assets)',
      value: 15.5,
      benchmark: 10.0,
      status: 'excellent',
      description: 'Efektivitas penggunaan aset untuk menghasilkan laba',
      formula: 'Laba Bersih / Total Aset × 100%'
    }, {
      name: 'ROE (Return on Equity)',
      value: 21.5,
      benchmark: 15.0,
      status: 'excellent',
      description: 'Tingkat pengembalian investasi pemilik',
      formula: 'Laba Bersih / Total Ekuitas × 100%'
    }, {
      name: 'Net Profit Margin',
      value: 18.2,
      benchmark: 10.0,
      status: 'excellent',
      description: 'Persentase laba bersih dari penjualan',
      formula: 'Laba Bersih / Penjualan × 100%'
    }, {
      name: 'Gross Profit Margin',
      value: 28.97,
      benchmark: 25.0,
      status: 'excellent',
      description: 'Persentase laba kotor dari penjualan',
      formula: 'Laba Kotor / Penjualan × 100%'
    }]
  }, {
    category: 'Rasio Aktivitas/Efisiensi',
    ratios: [{
      name: 'Asset Turnover',
      value: 4.0,
      benchmark: 2.0,
      status: 'excellent',
      description: 'Efisiensi penggunaan aset untuk menghasilkan penjualan',
      formula: 'Penjualan / Total Aset'
    }, {
      name: 'Receivable Turnover',
      value: 12.0,
      benchmark: 8.0,
      status: 'good',
      description: 'Kecepatan penagihan piutang',
      formula: 'Penjualan Kredit / Rata-rata Piutang'
    }, {
      name: 'Inventory Turnover',
      value: 6.5,
      benchmark: 4.0,
      status: 'good',
      description: 'Kecepatan perputaran persediaan',
      formula: 'HPP / Rata-rata Persediaan'
    }, {
      name: 'Working Capital Turnover',
      value: 3.2,
      benchmark: 2.5,
      status: 'good',
      description: 'Efisiensi penggunaan modal kerja',
      formula: 'Penjualan / Modal Kerja Bersih'
    }]
  }, {
    category: 'Rasio Leverage/Solvabilitas',
    ratios: [{
      name: 'Debt to Equity Ratio',
      value: 0.5,
      benchmark: 1.0,
      status: 'excellent',
      description: 'Perbandingan hutang dengan modal sendiri',
      formula: 'Total Hutang / Total Ekuitas'
    }, {
      name: 'Debt to Assets Ratio',
      value: 0.33,
      benchmark: 0.5,
      status: 'excellent',
      description: 'Persentase aset yang dibiayai hutang',
      formula: 'Total Hutang / Total Aset'
    }, {
      name: 'Interest Coverage Ratio',
      value: 8.5,
      benchmark: 3.0,
      status: 'excellent',
      description: 'Kemampuan membayar bunga hutang',
      formula: 'EBIT / Beban Bunga'
    }]
  }];
  const comparisonData = [{
    metric: 'Profitabilitas',
    company: 21.5,
    industry: 15.0,
    market: 12.0
  }, {
    metric: 'Likuiditas',
    company: 2.4,
    industry: 2.0,
    market: 1.8
  }, {
    metric: 'Efisiensi',
    company: 4.0,
    industry: 2.5,
    market: 2.2
  }, {
    metric: 'Leverage',
    company: 0.5,
    industry: 0.6,
    market: 0.7
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600 bg-green-50';
      case 'good':
        return 'text-blue-600 bg-blue-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'poor':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-4 h-4" />;
      case 'good':
        return <CheckCircle className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };
  return <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-primary" /><span className="editable-text">
          Analisis Rasio Keuangan
        </span></h2>
        <p className="text-muted-foreground"><span className="editable-text">Analisis kinerja dan kesehatan keuangan perusahaan</span></p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600"><span className="editable-text">A+</span></div>
          <div className="text-sm text-muted-foreground"><span className="editable-text">Skor Keuangan</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600"><span className="editable-text">21.5%</span></div>
          <div className="text-sm text-muted-foreground"><span className="editable-text">ROE</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600"><span className="editable-text">2.4x</span></div>
          <div className="text-sm text-muted-foreground"><span className="editable-text">Current Ratio</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600"><span className="editable-text">4.0x</span></div>
          <div className="text-sm text-muted-foreground"><span className="editable-text">Asset Turnover</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ratio Trends */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Tren Rasio Keuangan</span></h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ratioTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="liquidity" stroke="#059669" strokeWidth={2} name="Likuiditas" />
                <Line type="monotone" dataKey="profitability" stroke="#3b82f6" strokeWidth={2} name="Profitabilitas (%)" />
                <Line type="monotone" dataKey="efficiency" stroke="#8b5cf6" strokeWidth={2} name="Efisiensi" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Industry Comparison */}
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4"><span className="editable-text">Perbandingan dengan Industri</span></h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="company" fill="#059669" name="Perusahaan" />
                <Bar dataKey="industry" fill="#10b981" name="Rata-rata Industri" />
                <Bar dataKey="market" fill="#6ee7b7" name="Rata-rata Pasar" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Detailed Ratios */}
      <div className="space-y-6">
        {currentRatios.map((category, categoryIndex) => <motion.div key={category.category} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: categoryIndex * 0.1
      }} className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.ratios.map((ratio, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{ratio.name}</h4>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${getStatusColor(ratio.status)}`}>
                      {getStatusIcon(ratio.status)}
                      {ratio.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-primary">
                      {ratio.value}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                    <span className="text-sm text-muted-foreground"><span className="editable-text">
                      Benchmark: </span>{ratio.benchmark}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{ratio.description}</p>
                </div>)}
            </div>
          </motion.div>)}
      </div>

      {/* Recommendations */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" /><span className="editable-text">
          Rekomendasi Keuangan
        </span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /><span className="editable-text">
              Kekuatan
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li><span className="editable-text">• Profitabilitas sangat baik di atas rata-rata industri</span></li>
              <li><span className="editable-text">• Likuiditas kuat untuk memenuhi kewajiban jangka pendek</span></li>
              <li><span className="editable-text">• Efisiensi operasional tinggi</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /><span className="editable-text">
              Peluang Perbaikan
            </span></h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li><span className="editable-text">• Pertimbangkan investasi untuk ekspansi bisnis</span></li>
              <li><span className="editable-text">• Optimalisasi pengelolaan persediaan</span></li>
              <li><span className="editable-text">• Diversifikasi produk untuk mengurangi risiko</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}