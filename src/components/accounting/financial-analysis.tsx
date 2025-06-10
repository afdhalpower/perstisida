'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar } from 'recharts';
export function FinancialAnalysis() {
  const ratioTrends: any[] = [];
  const currentRatios: any[] = [];
  const comparisonData: any[] = [];
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
  return <div className="space-y-6" data-unique-id="47211f9b-d077-4608-9bd5-1e08889f2206" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
      {/* Header */}
      <div data-unique-id="6ec2170a-afba-4372-8a6b-3109577fce76" data-file-name="components/accounting/financial-analysis.tsx">
        <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="d055e33c-3de4-4c99-a478-ac21153b15d7" data-file-name="components/accounting/financial-analysis.tsx">
          <TrendingUp className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="189552e0-1350-421f-a306-7bd95c480d7e" data-file-name="components/accounting/financial-analysis.tsx">
          Analisis Rasio Keuangan
        </span></h2>
        <p className="text-muted-foreground" data-unique-id="e6b4ca1d-9287-413e-8e5e-364eb486fb69" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="2fab397e-8d03-4352-9a03-b0d5d0bc506e" data-file-name="components/accounting/financial-analysis.tsx">Analisis kinerja dan kesehatan keuangan perusahaan</span></p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="8edea56a-2ad5-4e33-a7db-5d11f5c0aa1b" data-file-name="components/accounting/financial-analysis.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="0afb5b32-3fa6-4bc0-a087-e28f4ed00940" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center" data-unique-id="7c3a3338-58d8-413b-a6cc-faa55cd70210" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="b83a97f5-16f5-401f-94c0-0c9be86a4116" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="cffc259a-0b95-449d-82bd-181cefe14cf7" data-file-name="components/accounting/financial-analysis.tsx">A+</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="106aea68-6b34-4793-848d-735e4ddcd1fd" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="5e28e3f7-4435-41b2-a34a-9cb2d02b4e58" data-file-name="components/accounting/financial-analysis.tsx">Skor Keuangan</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="cfde877c-1f7d-41fd-af84-30a49a99e416" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center" data-unique-id="f8549772-7426-4ae7-b0d2-6836662c20c0" data-file-name="components/accounting/financial-analysis.tsx">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="88e82a07-f4b2-483a-9291-ec6017c419d1" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="abbacd93-87d7-4468-9d32-54fd5ab5e18b" data-file-name="components/accounting/financial-analysis.tsx">21.5%</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="c6ee9422-6ece-4fe4-9655-0dbbe64e139a" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="27a69e2b-eeb1-4687-b22d-42d814b708e3" data-file-name="components/accounting/financial-analysis.tsx">ROE</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="108f17ba-734e-4c0e-9986-a9137678c742" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center" data-unique-id="3890d701-7753-4169-8d8e-c41e7810d572" data-file-name="components/accounting/financial-analysis.tsx">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600" data-unique-id="a4ba95ec-8bec-4d4d-8d88-3f7c37b46cf2" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="26afce6a-a20f-430a-96ab-69817996c34a" data-file-name="components/accounting/financial-analysis.tsx">2.4x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="4112534d-4167-4b8c-b686-258d14118515" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="073203fa-309f-4d8f-92d7-23924877dba1" data-file-name="components/accounting/financial-analysis.tsx">Current Ratio</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="cb82b8e6-98e0-4c29-83a4-26755503a793" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center" data-unique-id="cf107b60-30a8-4faf-9951-65f84e8b2873" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="ca3a2f8c-ec2b-4026-a591-239e81550393" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="c73f382c-1cf8-4cd3-a8d1-0cf91acd275d" data-file-name="components/accounting/financial-analysis.tsx">4.0x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="2fd190b3-7402-4238-beff-9b20f3e0a0c5" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="ea6a43b5-1ce9-4ead-8be1-b410a1570741" data-file-name="components/accounting/financial-analysis.tsx">Asset Turnover</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="16113020-b72a-4e97-b299-0871c063c325" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {/* Ratio Trends */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="954754f2-1d25-4d17-948f-96d8fa3a71c0" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="7a297b84-95d5-4c8f-b055-432b97cc58db" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="ed553efa-344d-4838-a28b-d48d8010a385" data-file-name="components/accounting/financial-analysis.tsx">Tren Rasio Keuangan</span></h3>
          <div className="h-80" data-unique-id="44ae0a74-ba73-4472-b820-ed64b8aa9b76" data-file-name="components/accounting/financial-analysis.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="20062a77-7460-42c8-a7ba-88a2950c0b98" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="49995911-06c1-4650-87b7-919932757393" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="0bd0259a-1e0f-4185-a68a-0a427e04aa90" data-file-name="components/accounting/financial-analysis.tsx">Perbandingan dengan Industri</span></h3>
          <div className="h-80" data-unique-id="3f7156c4-1b42-441a-9a1a-0f3b8598c0ec" data-file-name="components/accounting/financial-analysis.tsx">
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
      <div className="space-y-6" data-unique-id="d47b5123-6ff6-4bcb-8b46-40ac97890ac9" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {currentRatios.map((category, categoryIndex) => <motion.div key={category.category} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: categoryIndex * 0.1
      }} className="glass-effect rounded-2xl p-6" data-unique-id="f8827800-e24b-437f-b255-1f0be3d281c8" data-file-name="components/accounting/financial-analysis.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="73be30b0-6a6f-482e-be99-9bb1d868ea19" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-unique-id="a807b164-6ea3-4b19-954b-f24cefcd54fb" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
              {category.ratios.map((ratio, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100" data-unique-id="a107b97e-b3d6-43af-8c17-73575f8b8cba" data-file-name="components/accounting/financial-analysis.tsx">
                  <div className="flex items-center justify-between mb-2" data-unique-id="1246ebea-3cbf-4edc-a10e-d62fd301d6a3" data-file-name="components/accounting/financial-analysis.tsx">
                    <h4 className="font-semibold" data-unique-id="02ddccdc-725b-4c80-b793-3f2d526acdb4" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.name}</h4>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${getStatusColor(ratio.status)}`} data-unique-id="16caadc2-9165-4ade-ad19-6fc0c2de6235" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {getStatusIcon(ratio.status)}
                      {ratio.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2" data-unique-id="d7318591-1adf-4d22-9d35-746ea4a6e846" data-file-name="components/accounting/financial-analysis.tsx">
                    <span className="text-2xl font-bold text-primary" data-unique-id="cfb49013-a635-4c53-8a86-72efbfc74eb0" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {ratio.value}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                    <span className="text-sm text-muted-foreground" data-unique-id="a2c57c7f-b7ff-47e6-afbe-c4831d08bb21" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6e1da2c6-045c-414e-8302-106658deddf5" data-file-name="components/accounting/financial-analysis.tsx">
                      Benchmark: </span>{ratio.benchmark}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-unique-id="5fe99816-1f81-4267-a94b-84bd14454e3b" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.description}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="432494f5-a13d-44f0-bbb2-9afbbd41a358" data-file-name="components/accounting/financial-analysis.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="2de5ffd1-b6d7-4fc2-b047-e7168a5a4dac" data-file-name="components/accounting/financial-analysis.tsx">
          <Info className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="420f447e-e68e-4d4b-9704-574ecb7d1914" data-file-name="components/accounting/financial-analysis.tsx">
          Rekomendasi Keuangan
        </span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="8679ff28-0aab-481d-887a-322fa4eae8d6" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="fce93a96-27ed-402d-8dd9-c0bb518352cf" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="3ebd3d93-aa78-46ff-a5a8-bef2a3e88165" data-file-name="components/accounting/financial-analysis.tsx">
              <CheckCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="9fc2150b-cc97-43ed-9dad-db67bdeb7882" data-file-name="components/accounting/financial-analysis.tsx">
              Kekuatan
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="a844ed60-6a6b-4fe9-a03b-4bbd0e5e1aba" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="0b23fa6a-d454-419d-a5f2-430bf2968bdd" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="fc7b8b3f-5ec0-421b-b0e4-2226fa06c4c7" data-file-name="components/accounting/financial-analysis.tsx">• Profitabilitas sangat baik di atas rata-rata industri</span></li>
              <li data-unique-id="5462d026-27b6-4f16-bb3c-8977bb1636ee" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="701ef7a2-60ae-497c-8d83-a44d18666cc9" data-file-name="components/accounting/financial-analysis.tsx">• Likuiditas kuat untuk memenuhi kewajiban jangka pendek</span></li>
              <li data-unique-id="068a035e-1866-4020-802a-a420e10b7d40" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="4ea89d91-5d36-4f81-aeff-6ba29ed8a3fc" data-file-name="components/accounting/financial-analysis.tsx">• Efisiensi operasional tinggi</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200" data-unique-id="f471bfba-751c-44e8-9ea3-3a295a0f825b" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2" data-unique-id="2b0eceb4-5fcd-45b1-b275-9501a3d8cebb" data-file-name="components/accounting/financial-analysis.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="d201d791-feb7-4e17-8c9a-d6a4e188c596" data-file-name="components/accounting/financial-analysis.tsx">
              Peluang Perbaikan
            </span></h4>
            <ul className="text-sm text-blue-700 space-y-1" data-unique-id="f9f70705-5fda-4591-8ae9-b82426746fbc" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="7a451baa-6428-4341-85f0-a89350c80e02" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="78af6fb7-78cb-4e76-9b4e-13c8516e08db" data-file-name="components/accounting/financial-analysis.tsx">• Pertimbangkan investasi untuk ekspansi bisnis</span></li>
              <li data-unique-id="331eac10-dd26-4e2c-8bdc-f80c28f96ee1" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="7ee801b8-496a-435e-ac5d-9f602be41022" data-file-name="components/accounting/financial-analysis.tsx">• Optimalisasi pengelolaan persediaan</span></li>
              <li data-unique-id="97bb7adf-274c-4b99-a240-f1be892f6e95" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="ecb3ebb2-42ce-4dbb-a411-55625e25f06c" data-file-name="components/accounting/financial-analysis.tsx">• Diversifikasi produk untuk mengurangi risiko</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}