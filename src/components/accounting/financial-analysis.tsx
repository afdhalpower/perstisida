'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar } from 'recharts';
export function FinancialAnalysis() {
  const ratioTrends = [
    { month: 'Jan', currentRatio: 2.1, quickRatio: 1.8, debtRatio: 0.35, roe: 18.5 },
    { month: 'Feb', currentRatio: 2.3, quickRatio: 1.9, debtRatio: 0.33, roe: 19.2 },
    { month: 'Mar', currentRatio: 2.2, quickRatio: 1.7, debtRatio: 0.36, roe: 17.8 },
    { month: 'Apr', currentRatio: 2.4, quickRatio: 2.0, debtRatio: 0.32, roe: 20.1 },
    { month: 'Mei', currentRatio: 2.1, quickRatio: 1.6, debtRatio: 0.38, roe: 16.9 },
    { month: 'Jun', currentRatio: 2.5, quickRatio: 2.1, debtRatio: 0.30, roe: 21.5 }
  ];

  const currentRatios = [
    {
      name: 'Likuiditas',
      ratios: [
        { name: 'Current Ratio', value: 2.4, benchmark: 2.0, status: 'excellent', description: 'Kemampuan membayar hutang jangka pendek' },
        { name: 'Quick Ratio', value: 2.1, benchmark: 1.5, status: 'excellent', description: 'Likuiditas tanpa persediaan' },
        { name: 'Cash Ratio', value: 0.8, benchmark: 0.5, status: 'excellent', description: 'Kemampuan bayar dengan kas' }
      ]
    },
    {
      name: 'Profitabilitas',
      ratios: [
        { name: 'ROE', value: 21.5, benchmark: 15.0, status: 'excellent', description: 'Return on Equity' },
        { name: 'ROA', value: 14.2, benchmark: 10.0, status: 'excellent', description: 'Return on Assets' },
        { name: 'Gross Margin', value: 40.0, benchmark: 35.0, status: 'excellent', description: 'Margin kotor penjualan' },
        { name: 'Net Margin', value: 16.8, benchmark: 12.0, status: 'excellent', description: 'Margin bersih penjualan' }
      ]
    },
    {
      name: 'Leverage',
      ratios: [
        { name: 'Debt to Equity', value: 0.45, benchmark: 0.60, status: 'good', description: 'Rasio hutang terhadap ekuitas' },
        { name: 'Debt Ratio', value: 0.30, benchmark: 0.40, status: 'good', description: 'Rasio total hutang' },
        { name: 'Interest Coverage', value: 8.5, benchmark: 5.0, status: 'excellent', description: 'Kemampuan bayar bunga' }
      ]
    },
    {
      name: 'Aktivitas',
      ratios: [
        { name: 'Inventory Turnover', value: 6.2, benchmark: 4.0, status: 'excellent', description: 'Perputaran persediaan' },
        { name: 'Receivables Turnover', value: 8.4, benchmark: 6.0, status: 'excellent', description: 'Perputaran piutang' },
        { name: 'Asset Turnover', value: 1.2, benchmark: 1.0, status: 'good', description: 'Perputaran aset' }
      ]
    }
  ];

  const comparisonData = [
    { subject: 'Likuiditas', perusahaan: 85, industri: 70, fullMark: 100 },
    { subject: 'Profitabilitas', perusahaan: 92, industri: 75, fullMark: 100 },
    { subject: 'Leverage', perusahaan: 78, industri: 65, fullMark: 100 },
    { subject: 'Aktivitas', perusahaan: 88, industri: 72, fullMark: 100 },
    { subject: 'Efisiensi', perusahaan: 82, industri: 68, fullMark: 100 },
    { subject: 'Stabilitas', perusahaan: 86, industri: 71, fullMark: 100 }
  ];
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
  return <div className="space-y-6" data-unique-id="3b0d1d2d-cef0-457f-966c-6bddb200ea7e" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
      {/* Header */}
      <div data-unique-id="d30a3663-e836-42d7-913a-890afda4767d" data-file-name="components/accounting/financial-analysis.tsx">
        <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="04e894e7-4f5c-40f7-b8db-62573eb326cf" data-file-name="components/accounting/financial-analysis.tsx">
          <TrendingUp className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="6b5de66e-a1ee-49b7-bec0-26cdb02255e9" data-file-name="components/accounting/financial-analysis.tsx">
          Analisis Rasio Keuangan
        </span></h2>
        <p className="text-muted-foreground" data-unique-id="369f7a33-28b6-4e1f-ad01-f33ae7fb73e0" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="3694500a-fccc-4524-a73e-fbb088d5a2f6" data-file-name="components/accounting/financial-analysis.tsx">Analisis kinerja dan kesehatan keuangan perusahaan</span></p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="dd5c8bda-10f5-4448-93ae-61abe1be0782" data-file-name="components/accounting/financial-analysis.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="4a1cab8f-85a5-4771-bae3-6f1fd171c636" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center" data-unique-id="131687de-078e-4ba5-831d-40c186af549a" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="1c89d53d-633e-453b-94e9-de4898376fca" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="eda63c59-9ff9-4242-90e8-70f486ebc7fe" data-file-name="components/accounting/financial-analysis.tsx">A+</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="5c35f8ce-8272-41c3-b593-061e9b483dc2" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="c78297a9-9bfb-497e-8f14-2b13b3c9534b" data-file-name="components/accounting/financial-analysis.tsx">Skor Keuangan</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="ae63e1da-e04a-44bc-bd67-dd64a522ceea" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center" data-unique-id="411a3d4a-cd46-4ae1-908c-d74efe78f129" data-file-name="components/accounting/financial-analysis.tsx">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="ea5409d0-b41d-4e41-ae2e-84a91b93e9c3" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="fa597e49-dca5-4b63-9105-f9689ad2e056" data-file-name="components/accounting/financial-analysis.tsx">21.5%</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="5a260d75-01c6-43a6-ba12-94614e338779" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="771f4c0c-f3f6-4634-8dd3-ae41b56952bb" data-file-name="components/accounting/financial-analysis.tsx">ROE</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="e7ebb6c0-824b-4b25-9bb0-b405e330123e" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center" data-unique-id="37e6a6df-245b-4e7e-8c1f-4a1a5722b8d2" data-file-name="components/accounting/financial-analysis.tsx">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600" data-unique-id="1b571289-9960-45c4-a5f3-634635422efa" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="314ff926-3f26-47e3-bf99-3094730bbc24" data-file-name="components/accounting/financial-analysis.tsx">2.4x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="67ec5d49-cc14-4bbf-99fd-d866e8361993" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="c93815a3-3d56-4013-8cb9-54a9470c6191" data-file-name="components/accounting/financial-analysis.tsx">Current Ratio</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="cf2aff5e-86d5-4582-b02d-47ecc849bc4f" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center" data-unique-id="026a3aca-dc50-4775-b5e6-28bc6c809855" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="459845f3-231d-4541-b4cd-595d54f3b91b" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="e4bb00f0-fa49-4418-a3a6-a1b0ac92d128" data-file-name="components/accounting/financial-analysis.tsx">4.0x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="037b989f-802a-41b2-87ca-6abcf6aba645" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="4309bdf3-8526-4d30-a036-ce59d53c8f7b" data-file-name="components/accounting/financial-analysis.tsx">Asset Turnover</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="c86bee42-852a-4914-86d1-29815fc774f6" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {/* Ratio Trends */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="699c2ee7-1ded-424e-bbd1-dc0f85951fcf" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="2e704905-6c42-4acd-85ab-53c5ea075ac7" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="977ccea5-f953-4510-9958-f88ad5b0f3bf" data-file-name="components/accounting/financial-analysis.tsx">Tren Rasio Keuangan</span></h3>
          <div className="h-80" data-unique-id="cf9bc483-6641-4d6f-b22a-0676ddc3465e" data-file-name="components/accounting/financial-analysis.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="4f28eeae-774a-4f93-9bd4-c3e96875353d" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="4a060f6c-22d7-49cc-aa5c-6dbf175e8990" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="3920c50e-40d8-4f91-9ca1-06fd21a2e754" data-file-name="components/accounting/financial-analysis.tsx">Perbandingan dengan Industri</span></h3>
          <div className="h-80" data-unique-id="01ea63dc-f371-4465-9655-aa3ca0435cfd" data-file-name="components/accounting/financial-analysis.tsx">
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
      <div className="space-y-6" data-unique-id="5ec2899f-6e78-4432-9443-50b4e0ce88ee" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {currentRatios.map((category, categoryIndex) => <motion.div key={category.category} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: categoryIndex * 0.1
      }} className="glass-effect rounded-2xl p-6" data-unique-id="de4e890a-7501-4723-a4e8-fd5fe656ab5f" data-file-name="components/accounting/financial-analysis.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="396811db-12aa-4a25-bdd3-64b797d46d41" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-unique-id="d715da9f-bcec-4e25-8410-cd4b7400eba8" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
              {category.ratios.map((ratio, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100" data-unique-id="08cd0756-007a-44e0-94fc-55c78e3c9e34" data-file-name="components/accounting/financial-analysis.tsx">
                  <div className="flex items-center justify-between mb-2" data-unique-id="c5baa669-f073-491a-8085-f6f09d753f69" data-file-name="components/accounting/financial-analysis.tsx">
                    <h4 className="font-semibold" data-unique-id="9c7bfdd8-ccec-47f7-91ac-aab18cac1337" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.name}</h4>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${getStatusColor(ratio.status)}`} data-unique-id="46b19278-4e1a-498a-86e4-d6745df5b9ec" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {getStatusIcon(ratio.status)}
                      {ratio.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2" data-unique-id="54d6c58e-ff5c-40ad-8f87-d3dcb0664b15" data-file-name="components/accounting/financial-analysis.tsx">
                    <span className="text-2xl font-bold text-primary" data-unique-id="6524c46e-035a-4cc8-80b9-c113b2e16282" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {ratio.value}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                    <span className="text-sm text-muted-foreground" data-unique-id="77cb7fe2-3a3a-4bc5-a4e5-b57004f36266" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d6f5ed04-ee99-4c7b-b6fb-840465ed0833" data-file-name="components/accounting/financial-analysis.tsx">
                      Benchmark: </span>{ratio.benchmark}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-unique-id="ab132907-895d-42c7-8770-ed77d902cc4c" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.description}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="03be0090-d500-4059-8086-d9cc7062a33b" data-file-name="components/accounting/financial-analysis.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="4515add5-c8f8-4195-9480-c489e5acec36" data-file-name="components/accounting/financial-analysis.tsx">
          <Info className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="e7f7bad2-de4e-4664-ba10-5441034ad9af" data-file-name="components/accounting/financial-analysis.tsx">
          Rekomendasi Keuangan
        </span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="2cb7ffe2-d62a-4d14-926c-fe60fb767204" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="808524d9-8ae1-4cde-92ec-3ac1300652c4" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="7ee15dad-2502-4b47-855f-abeae289d1f0" data-file-name="components/accounting/financial-analysis.tsx">
              <CheckCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="8ed5c5bb-6f9d-4751-84f1-f806abc44d0c" data-file-name="components/accounting/financial-analysis.tsx">
              Kekuatan
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="09f3e78f-2790-44ba-93c6-25a357026651" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="7b4eeeb4-dcf8-48aa-8e88-a9e0aabf9a25" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="81d0f00e-0e03-44d2-b3fd-cb78373d3b67" data-file-name="components/accounting/financial-analysis.tsx">• Profitabilitas sangat baik di atas rata-rata industri</span></li>
              <li data-unique-id="4faa6d43-e094-4e9e-b2cb-b1eff3fd8df1" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="b5fb26ea-85d1-441e-a578-e6ab9e6d3b98" data-file-name="components/accounting/financial-analysis.tsx">• Likuiditas kuat untuk memenuhi kewajiban jangka pendek</span></li>
              <li data-unique-id="9640bf4f-6bb0-42f1-a647-89c4e02273da" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="4fb115d5-078e-4bd9-be43-022706929296" data-file-name="components/accounting/financial-analysis.tsx">• Efisiensi operasional tinggi</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200" data-unique-id="c3e3ceef-bba6-44a6-a6f9-531b228040a3" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2" data-unique-id="0301177f-0848-4235-bb8e-e665c9dda3a1" data-file-name="components/accounting/financial-analysis.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="1ef9aca4-fddc-42d4-b137-ccf47a3beff6" data-file-name="components/accounting/financial-analysis.tsx">
              Peluang Perbaikan
            </span></h4>
            <ul className="text-sm text-blue-700 space-y-1" data-unique-id="7c0acf8f-337a-4ef7-a819-20e48004693b" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="32dd6adf-62b3-43a9-a8ad-857655f0bebc" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="9c7f0495-de7b-4f7b-8639-f386f6db8286" data-file-name="components/accounting/financial-analysis.tsx">• Pertimbangkan investasi untuk ekspansi bisnis</span></li>
              <li data-unique-id="8069432f-cb16-470a-86bf-c37ac9ddc1be" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="a260d8ae-36c0-4581-9dc8-e3fada31e251" data-file-name="components/accounting/financial-analysis.tsx">• Optimalisasi pengelolaan persediaan</span></li>
              <li data-unique-id="5daed1df-6dad-47ad-9b3c-9f0965e16ae8" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="528f3a18-ac2e-4a7e-8391-605672a0d8e6" data-file-name="components/accounting/financial-analysis.tsx">• Diversifikasi produk untuk mengurangi risiko</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}