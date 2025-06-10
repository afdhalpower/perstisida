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
    category: 'Likuiditas',
    ratios: [{
      name: 'Current Ratio',
      value: 2.4,
      benchmark: 2.0,
      status: 'good',
      description: 'Kemampuan membayar hutang jangka pendek'
    }, {
      name: 'Quick Ratio',
      value: 1.8,
      benchmark: 1.0,
      status: 'good',
      description: 'Kemampuan membayar hutang tanpa persediaan'
    }, {
      name: 'Cash Ratio',
      value: 0.9,
      benchmark: 0.5,
      status: 'excellent',
      description: 'Kemampuan membayar dengan kas'
    }]
  }, {
    category: 'Profitabilitas',
    ratios: [{
      name: 'ROA',
      value: 15.5,
      benchmark: 10.0,
      status: 'excellent',
      description: 'Return on Assets'
    }, {
      name: 'ROE',
      value: 21.5,
      benchmark: 15.0,
      status: 'excellent',
      description: 'Return on Equity'
    }, {
      name: 'Net Profit Margin',
      value: 18.2,
      benchmark: 10.0,
      status: 'excellent',
      description: 'Margin keuntungan bersih'
    }]
  }, {
    category: 'Efisiensi',
    ratios: [{
      name: 'Asset Turnover',
      value: 4.0,
      benchmark: 2.0,
      status: 'excellent',
      description: 'Efisiensi penggunaan aset'
    }, {
      name: 'Receivable Turnover',
      value: 12.0,
      benchmark: 8.0,
      status: 'good',
      description: 'Perputaran piutang'
    }, {
      name: 'Inventory Turnover',
      value: 6.5,
      benchmark: 4.0,
      status: 'good',
      description: 'Perputaran persediaan'
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
  return <div className="space-y-6" data-unique-id="fda1e39d-e863-447f-b4a7-ba7f329f73d2" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
      {/* Header */}
      <div data-unique-id="693bcd50-faae-4313-8ab8-96e5b283bb84" data-file-name="components/accounting/financial-analysis.tsx">
        <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="0a8de83e-7012-44e6-9bf9-2dabd79e19e5" data-file-name="components/accounting/financial-analysis.tsx">
          <TrendingUp className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="bb7013cd-1565-4ac6-a3e9-9ec6816542df" data-file-name="components/accounting/financial-analysis.tsx">
          Analisis Rasio Keuangan
        </span></h2>
        <p className="text-muted-foreground" data-unique-id="df74a2bb-85f6-4829-acf4-db157cf5e997" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="3050d43e-6457-4a34-b666-5571fbe353c0" data-file-name="components/accounting/financial-analysis.tsx">Analisis kinerja dan kesehatan keuangan perusahaan</span></p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="6700c282-b94e-4336-ad66-80d6931c6751" data-file-name="components/accounting/financial-analysis.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="5ce91f86-178a-4ac2-8310-dc909e5e6872" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center" data-unique-id="6d88ec59-ee58-4e85-b128-997aea185fa8" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="7832b87d-dd90-49a9-b5c3-be10a07edcc8" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="42cc3e39-50a4-4949-b2d0-b7bf77869d9f" data-file-name="components/accounting/financial-analysis.tsx">A+</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="4ed39c4a-570c-4e5e-a590-2c33251ee42f" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="92e08675-4a95-48e4-8d29-2a1be967151c" data-file-name="components/accounting/financial-analysis.tsx">Skor Keuangan</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="328ff50b-55c1-4947-b5cb-14d53a2f2c84" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center" data-unique-id="812e0656-936c-4bab-b2b9-22a792138fba" data-file-name="components/accounting/financial-analysis.tsx">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="91b61c03-5206-4b29-94e6-6f334f98b999" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="bb02f254-44a4-4a98-8c88-28415e9bd8d2" data-file-name="components/accounting/financial-analysis.tsx">21.5%</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="34ddf9ff-cee2-47ac-aef5-60299e4a9713" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="1800cc6c-a5c2-4dd7-8a9e-2bfb514b13da" data-file-name="components/accounting/financial-analysis.tsx">ROE</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="36fb8b88-00d9-4151-b77a-6abdc590d726" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center" data-unique-id="2caaaa9e-06b2-4177-9ca3-76e1bd5d6ef2" data-file-name="components/accounting/financial-analysis.tsx">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600" data-unique-id="44f8ebd5-1ee0-46ab-a951-a6b7440fe246" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="46c6025c-ef9c-4c1b-87e4-59774dd8b3fa" data-file-name="components/accounting/financial-analysis.tsx">2.4x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="ec968fa2-6fe8-4b12-808c-7816ebf39283" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="e39e6f01-8c5c-4988-ba94-a5dbf1585243" data-file-name="components/accounting/financial-analysis.tsx">Current Ratio</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="5e7fe5c1-8446-4186-a302-6507110b2d13" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center" data-unique-id="4c05667d-1e0d-4000-84fb-a887e912dcdb" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="fca39595-7e74-49c9-a714-9d3eb1cc0b2f" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="4599f922-5ef3-4996-a13d-94c32e866ce3" data-file-name="components/accounting/financial-analysis.tsx">4.0x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="8ad9405d-f16b-4c80-a178-368fd61e1050" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="e5a24fa3-dbc6-420b-a62d-34842e5bc2a0" data-file-name="components/accounting/financial-analysis.tsx">Asset Turnover</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="0b094754-9e4f-4fcf-aafe-323ae712060b" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {/* Ratio Trends */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="b4f54841-679f-4829-84a9-921b89a2381f" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="78e47185-8675-4b5f-a60d-912ace5bbcd1" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="4d74049a-7c1b-4ed2-a12f-256e700d971c" data-file-name="components/accounting/financial-analysis.tsx">Tren Rasio Keuangan</span></h3>
          <div className="h-80" data-unique-id="1917e286-4c59-4236-a972-466834d30b8b" data-file-name="components/accounting/financial-analysis.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="44275bd7-6a12-461a-94c5-9f9f521571f6" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="bf8741be-bc12-44e4-bf9e-ce14dc197836" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="7d8bbd67-feb5-48a3-b67f-4e0a3b9fcfa9" data-file-name="components/accounting/financial-analysis.tsx">Perbandingan dengan Industri</span></h3>
          <div className="h-80" data-unique-id="ff268b29-d5ee-4e12-9b49-4b74b68810e4" data-file-name="components/accounting/financial-analysis.tsx">
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
      <div className="space-y-6" data-unique-id="99b87bf1-b715-4172-b1c6-5176cb950289" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {currentRatios.map((category, categoryIndex) => <motion.div key={category.category} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: categoryIndex * 0.1
      }} className="glass-effect rounded-2xl p-6" data-unique-id="7ad77550-edef-41be-b288-d70dbec2a71f" data-file-name="components/accounting/financial-analysis.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="5c64ce79-6ffb-4140-b1cf-b8a272b15605" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-unique-id="a469e82f-7d15-4a16-81c0-3bce70b16602" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
              {category.ratios.map((ratio, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100" data-unique-id="ca93e628-ab52-4802-94eb-3de41e12fbf8" data-file-name="components/accounting/financial-analysis.tsx">
                  <div className="flex items-center justify-between mb-2" data-unique-id="1b2a8b6c-8251-4f6a-9ac9-e97caddf15d6" data-file-name="components/accounting/financial-analysis.tsx">
                    <h4 className="font-semibold" data-unique-id="c1b80705-472c-4526-8b1d-41b941d682e9" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.name}</h4>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${getStatusColor(ratio.status)}`} data-unique-id="75fc21bf-be01-4b45-b548-97a796e63607" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {getStatusIcon(ratio.status)}
                      {ratio.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2" data-unique-id="4dd807a1-ccd4-40cf-832e-14bf5ffe798d" data-file-name="components/accounting/financial-analysis.tsx">
                    <span className="text-2xl font-bold text-primary" data-unique-id="af947301-c1f5-4784-87f7-48441eed6693" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {ratio.value}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                    <span className="text-sm text-muted-foreground" data-unique-id="37e7fd9b-b319-4e24-a43a-8bff6eb3b877" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="48476797-cc46-4335-b61c-9be32ae50957" data-file-name="components/accounting/financial-analysis.tsx">
                      Benchmark: </span>{ratio.benchmark}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-unique-id="ff9a1b19-85fb-43d1-9ddb-4cce8de4d29b" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.description}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="2e72c8cf-a224-478b-9d80-2012419146ff" data-file-name="components/accounting/financial-analysis.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="19555303-24fd-4fb9-988e-5454bc5f921d" data-file-name="components/accounting/financial-analysis.tsx">
          <Info className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="f966e93e-1609-4b68-88e1-d115f34a7871" data-file-name="components/accounting/financial-analysis.tsx">
          Rekomendasi Keuangan
        </span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="ed1d1882-4b27-41be-b42c-b06b0763dc40" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="ee735960-1224-4e4e-8f38-5f7c0c612b28" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="24ec9466-ddba-4184-a7f3-e9448d8d3363" data-file-name="components/accounting/financial-analysis.tsx">
              <CheckCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="729f72e7-1523-4e71-9962-88a08deee98e" data-file-name="components/accounting/financial-analysis.tsx">
              Kekuatan
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="84c9e341-3d1e-4fac-8e6a-ce52b7a00bae" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="3b7a7e19-af39-4d0b-8879-7dc654bf6936" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="ce2bc06b-8142-4d40-a259-72c3e914d771" data-file-name="components/accounting/financial-analysis.tsx">• Profitabilitas sangat baik di atas rata-rata industri</span></li>
              <li data-unique-id="f7441e3c-ae83-4a9d-8540-a96f474f35bd" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="ce081a23-5ef5-4f55-bdc6-1e687c3b164e" data-file-name="components/accounting/financial-analysis.tsx">• Likuiditas kuat untuk memenuhi kewajiban jangka pendek</span></li>
              <li data-unique-id="2a63b293-00a4-473f-bc96-1a49f39977ad" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="2856a4aa-9d59-41de-8d68-e33e6af58d7a" data-file-name="components/accounting/financial-analysis.tsx">• Efisiensi operasional tinggi</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200" data-unique-id="d67ef800-63c9-41a6-a2bf-be049aa08669" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2" data-unique-id="b00ede10-9bad-474d-8cff-fdd5303d5a59" data-file-name="components/accounting/financial-analysis.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="3c5dc3ba-6425-4816-8fdc-ab28a5ad8519" data-file-name="components/accounting/financial-analysis.tsx">
              Peluang Perbaikan
            </span></h4>
            <ul className="text-sm text-blue-700 space-y-1" data-unique-id="e31510a4-dcc4-46ba-9738-da6f10e863fb" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="54723107-31d5-4ca5-9cb0-d939140c9a00" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="3b7956f7-2ba5-41e7-803d-b73de047abf4" data-file-name="components/accounting/financial-analysis.tsx">• Pertimbangkan investasi untuk ekspansi bisnis</span></li>
              <li data-unique-id="14a5d86d-19c6-4160-aa46-2215ef0eef84" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="586fc9d0-47c5-4dad-ba8c-e7598d80b538" data-file-name="components/accounting/financial-analysis.tsx">• Optimalisasi pengelolaan persediaan</span></li>
              <li data-unique-id="a903daf3-baa8-43a1-84e4-c40d0ee283db" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="6b01c241-3b3d-4e28-8b50-e3b9e88c357c" data-file-name="components/accounting/financial-analysis.tsx">• Diversifikasi produk untuk mengurangi risiko</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}