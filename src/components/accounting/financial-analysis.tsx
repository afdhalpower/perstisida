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
  return <div className="space-y-6" data-unique-id="089dcd74-d25a-4345-b305-401b6fca83b1" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
      {/* Header */}
      <div data-unique-id="c6732b03-689b-4569-903f-f18ad64ed28d" data-file-name="components/accounting/financial-analysis.tsx">
        <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="482e3bb6-4ada-42cf-8e13-e3c77d759565" data-file-name="components/accounting/financial-analysis.tsx">
          <TrendingUp className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="b9ca2173-0949-4b3e-991f-169845a46e3d" data-file-name="components/accounting/financial-analysis.tsx">
          Analisis Rasio Keuangan
        </span></h2>
        <p className="text-muted-foreground" data-unique-id="52a47420-3fe4-48b1-8799-fa8f51b41f1a" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="99e1e4fb-4493-4f89-80ec-e7a3f783862e" data-file-name="components/accounting/financial-analysis.tsx">Analisis kinerja dan kesehatan keuangan perusahaan</span></p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="0f7e8216-f22d-4cdd-b2c1-227c8dbdb0a3" data-file-name="components/accounting/financial-analysis.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="eb63a8ec-4db7-47ae-bb84-141df307b09c" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center" data-unique-id="9b409ef6-022a-4371-8915-ef0a91cd498e" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="20da94f4-bbe1-4244-850e-593c60c8ca46" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="08ee0be4-6002-4b30-acd4-1590f1a1c85a" data-file-name="components/accounting/financial-analysis.tsx">A+</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="6f02705b-dfc8-4cb0-91df-7aa63a90e119" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="bb987671-dc67-46d5-a617-74d5d982585a" data-file-name="components/accounting/financial-analysis.tsx">Skor Keuangan</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="2593e2e6-1d82-4fc2-b5e4-176ba1f62570" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center" data-unique-id="553b214c-fb31-46e7-b554-4a1fb4bd20bd" data-file-name="components/accounting/financial-analysis.tsx">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="30324682-0dff-45cb-bb5f-1050bfdaeab0" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="e82997f2-3502-4fb0-b593-dd112e417be1" data-file-name="components/accounting/financial-analysis.tsx">21.5%</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="3d191f03-fa11-4385-8c35-827f03b6a0c4" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="a2be4ef3-4780-49df-a47c-78ce1e6d7cf9" data-file-name="components/accounting/financial-analysis.tsx">ROE</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="e77ae8db-9946-4ed1-ba99-f6d34bdcdbcc" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center" data-unique-id="3ef0ed4b-1c6d-40d4-8d23-5ecb6d872ce3" data-file-name="components/accounting/financial-analysis.tsx">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600" data-unique-id="746f4924-6524-4960-8401-49c492f2f7d3" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="bb1f8dc9-7be0-4e83-8607-2a60b1ddcd02" data-file-name="components/accounting/financial-analysis.tsx">2.4x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="f9e1f4e6-8393-4f12-8d0b-8a5e9be3173b" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="6f113fa3-2f0a-4236-9d18-bd7f5752cb84" data-file-name="components/accounting/financial-analysis.tsx">Current Ratio</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="6a7eb616-995b-418c-8516-59d0d65d59ba" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center" data-unique-id="2fedf09b-da6b-47ff-93d4-addb8af85b37" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="e35cc8f6-7fdc-4e0c-a794-5b7bbe8c8a58" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="ac0d0a33-a41f-4183-8f1a-45c98d49f991" data-file-name="components/accounting/financial-analysis.tsx">4.0x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="3d5e1028-1fca-4665-84e3-0a421bd6dc4e" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="a66ca066-7ab2-449a-a28a-7f92bcd3a974" data-file-name="components/accounting/financial-analysis.tsx">Asset Turnover</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="02b7fb7c-aeba-44ef-b93e-35f0b62e7044" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {/* Ratio Trends */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="c73ea504-3b25-4d97-b55b-46546dc11b7d" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="7d7c121b-b578-420f-a646-3459863e96fe" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="add6f481-cf05-4fab-baf1-169b37a761a3" data-file-name="components/accounting/financial-analysis.tsx">Tren Rasio Keuangan</span></h3>
          <div className="h-80" data-unique-id="416a4e10-8b26-4a56-baeb-0ecbbbc7db14" data-file-name="components/accounting/financial-analysis.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="123bf4f5-326b-4187-9986-e704bb7ffe28" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="6842f6f7-3490-405c-8b1a-69253646a2a2" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="d8bcfe23-7e8b-4c14-a8ac-9dcde1dd8639" data-file-name="components/accounting/financial-analysis.tsx">Perbandingan dengan Industri</span></h3>
          <div className="h-80" data-unique-id="c96a0c60-80e6-4ec1-8148-e6a2068b7f4e" data-file-name="components/accounting/financial-analysis.tsx">
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
      <div className="space-y-6" data-unique-id="d16722e5-2474-4b73-ba56-6377304cb2f4" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {currentRatios.map((category, categoryIndex) => <motion.div key={category.category} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: categoryIndex * 0.1
      }} className="glass-effect rounded-2xl p-6" data-unique-id="d5883ffb-660d-4f20-ba55-39d7066d8811" data-file-name="components/accounting/financial-analysis.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="257a4c12-59bc-4e42-b206-31794a1668da" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-unique-id="d847f23d-b25b-4cfc-acc4-46730fb4df18" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
              {category.ratios.map((ratio, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100" data-unique-id="4686c0ef-66ba-42a9-8658-10275d381f7d" data-file-name="components/accounting/financial-analysis.tsx">
                  <div className="flex items-center justify-between mb-2" data-unique-id="da73b78b-5c7b-46b8-9c99-7f5bc5c61587" data-file-name="components/accounting/financial-analysis.tsx">
                    <h4 className="font-semibold" data-unique-id="e1d81e4c-8cb1-4980-b9c3-44e7a69338e5" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.name}</h4>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${getStatusColor(ratio.status)}`} data-unique-id="e776ee49-f6ad-46c0-bc10-0f94cd4380dc" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {getStatusIcon(ratio.status)}
                      {ratio.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2" data-unique-id="6b213613-0c82-4cb5-9566-491c8c33a9fb" data-file-name="components/accounting/financial-analysis.tsx">
                    <span className="text-2xl font-bold text-primary" data-unique-id="f1272ddf-64cf-4ba4-93f7-6040517bbb21" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {ratio.value}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                    <span className="text-sm text-muted-foreground" data-unique-id="30a2047e-a766-42ec-81c3-e3203a9cb882" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="42820103-9e1a-483a-a93e-d9fce3f0931c" data-file-name="components/accounting/financial-analysis.tsx">
                      Benchmark: </span>{ratio.benchmark}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-unique-id="ede70cb3-8150-4c35-9f9f-4a986f589d19" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.description}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="d24ce688-8905-42cf-83b3-82035a36173a" data-file-name="components/accounting/financial-analysis.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="1f6b1dee-4369-4e22-abee-dbc8babbe4fa" data-file-name="components/accounting/financial-analysis.tsx">
          <Info className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="26e918c2-153b-4cea-80a1-6b1bbb9323d6" data-file-name="components/accounting/financial-analysis.tsx">
          Rekomendasi Keuangan
        </span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="f5588f10-6ef2-4062-90d5-a4d683a31096" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="1c066712-8c8a-4b41-8f90-44dc9f35571d" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="dcc7e34d-39e5-4495-836f-793c7f12701b" data-file-name="components/accounting/financial-analysis.tsx">
              <CheckCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="86b2daee-fd6b-4ab9-b557-88b2df0da8c5" data-file-name="components/accounting/financial-analysis.tsx">
              Kekuatan
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="f21545f3-4a25-46fc-9a8b-3b49d1f70186" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="48106599-8f8e-4745-bdd4-1ccd9900fbfd" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="2b4cc7df-ed37-4274-a5b0-cdc4e8dafc19" data-file-name="components/accounting/financial-analysis.tsx">• Profitabilitas sangat baik di atas rata-rata industri</span></li>
              <li data-unique-id="897a2f50-49b6-4b3f-8fa2-73abb8884862" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="13f07e69-9546-48d5-9bcd-30f2321253d1" data-file-name="components/accounting/financial-analysis.tsx">• Likuiditas kuat untuk memenuhi kewajiban jangka pendek</span></li>
              <li data-unique-id="45a59ed8-ed3c-4032-a229-19ae5ee6c20f" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="82eeea1f-5a36-4a05-903c-b227f6730d41" data-file-name="components/accounting/financial-analysis.tsx">• Efisiensi operasional tinggi</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200" data-unique-id="df1f08a2-86c0-4978-9731-f6e3259f1268" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2" data-unique-id="c4da0d2f-a34c-4b88-99e0-479c77f1dd50" data-file-name="components/accounting/financial-analysis.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="84582ad9-f2d7-4481-9c9f-3e09730d2a1a" data-file-name="components/accounting/financial-analysis.tsx">
              Peluang Perbaikan
            </span></h4>
            <ul className="text-sm text-blue-700 space-y-1" data-unique-id="2ecbdd57-7575-42e8-8782-169da1134a8d" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="2d9b6b6b-421d-431f-9410-7a415b99cc9c" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="10efe45b-8947-409b-a678-13daa10b990f" data-file-name="components/accounting/financial-analysis.tsx">• Pertimbangkan investasi untuk ekspansi bisnis</span></li>
              <li data-unique-id="eed9441e-5785-425a-bb7d-f3beecd90eb3" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="14798dc8-3766-4a14-a8c5-c3d2e0f1769b" data-file-name="components/accounting/financial-analysis.tsx">• Optimalisasi pengelolaan persediaan</span></li>
              <li data-unique-id="f186ac2c-51bf-49cc-a804-0ca8cdf631f2" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="0456820b-05c6-45be-b44d-8d0178fe1e65" data-file-name="components/accounting/financial-analysis.tsx">• Diversifikasi produk untuk mengurangi risiko</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}