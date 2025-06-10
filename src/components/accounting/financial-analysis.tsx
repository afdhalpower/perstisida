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
  return <div className="space-y-6" data-unique-id="70e55ccb-2cf4-46ee-943d-7f8ff86498c5" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
      {/* Header */}
      <div data-unique-id="77504568-74e0-4dd6-97c3-f9649e436db7" data-file-name="components/accounting/financial-analysis.tsx">
        <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="1aedb8e0-e1f6-4ebf-8cb8-8dd83e567110" data-file-name="components/accounting/financial-analysis.tsx">
          <TrendingUp className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="305f3cee-1526-4b0c-b6dc-9cf85c5055af" data-file-name="components/accounting/financial-analysis.tsx">
          Analisis Rasio Keuangan
        </span></h2>
        <p className="text-muted-foreground" data-unique-id="709cd617-3d17-48db-823c-cbedf0c09437" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="6345efdf-37ef-4121-a0bd-6efb84cf81ec" data-file-name="components/accounting/financial-analysis.tsx">Analisis kinerja dan kesehatan keuangan perusahaan</span></p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="126c24fc-bfb1-4669-8486-80e8bf56f1de" data-file-name="components/accounting/financial-analysis.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="3062af93-4dd3-4824-8a10-468215139edb" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center" data-unique-id="ef926555-b897-4c09-87f0-2218c2cdaf65" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="bdf9d30a-53e0-4d69-976c-57d9e9b0ced3" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="afcc999c-ec48-4869-a360-659c26219cac" data-file-name="components/accounting/financial-analysis.tsx">A+</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="0438d9b9-592d-4745-a2c8-da750a05eccf" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="957be4e0-34cc-4ced-abd8-da20ad20ae02" data-file-name="components/accounting/financial-analysis.tsx">Skor Keuangan</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="e1771532-e04a-46e7-8e3f-ee897b0b2c13" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center" data-unique-id="0b83ef01-d53c-4645-8843-c155d869cc39" data-file-name="components/accounting/financial-analysis.tsx">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="fd958a23-fbf8-47b2-a194-6c7748508b74" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="dea26830-f54b-484e-9a57-28e55aa8016b" data-file-name="components/accounting/financial-analysis.tsx">21.5%</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="4e612157-b988-4eac-9699-b7588da511e3" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="30528362-7c4c-40e9-92a0-bbedc36498ed" data-file-name="components/accounting/financial-analysis.tsx">ROE</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="ed4bb54e-7b0e-4aea-812b-accb64277401" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center" data-unique-id="a36d1aab-9c72-48ee-b6ac-a1ba9dbb536a" data-file-name="components/accounting/financial-analysis.tsx">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600" data-unique-id="6e87401a-d8af-4ed8-97dd-20dac783d7cd" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="534517d1-a8d0-4c86-8ecc-251cd3a3cfb6" data-file-name="components/accounting/financial-analysis.tsx">2.4x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="1965c61b-1704-4ee0-bee0-86f7cdafd711" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="66a4d18d-5b4c-4664-b965-4890be70d168" data-file-name="components/accounting/financial-analysis.tsx">Current Ratio</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="2c3290a1-1a82-49e4-9731-fd6c31bfca43" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center" data-unique-id="5201d46c-7837-4f88-9fe7-1462a7e1ceda" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="9dcc3174-5e9c-4ba3-ba96-e8e25d6d92f0" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="e0657dd7-3c92-48d2-910d-c8ada97a6419" data-file-name="components/accounting/financial-analysis.tsx">4.0x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="c48d6b4e-a44c-4bac-ae13-6744557e23db" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="d6a7580a-be1a-4a90-ad26-f86b28211c89" data-file-name="components/accounting/financial-analysis.tsx">Asset Turnover</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="7cb0bbee-885a-4461-97db-f039bd0b168e" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {/* Ratio Trends */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="1e2d82a9-6880-416f-bfb1-b5bea6bddbc3" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="1ae5850d-edfd-49e3-8983-ee4d6ac6259e" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="6718cd92-e055-4493-aceb-4896f7f9efde" data-file-name="components/accounting/financial-analysis.tsx">Tren Rasio Keuangan</span></h3>
          <div className="h-80" data-unique-id="ae92430e-a97a-4c02-baae-0d02b2f73620" data-file-name="components/accounting/financial-analysis.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="f31eadab-11f9-44bb-9214-fc6901bd3c83" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="0f984cc3-2557-4546-b9fc-002199cd1590" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="9586f77a-4e12-48d1-ad8a-06c12c15b1c9" data-file-name="components/accounting/financial-analysis.tsx">Perbandingan dengan Industri</span></h3>
          <div className="h-80" data-unique-id="c58677e0-49ab-4977-8ac5-aeb946c4c4cc" data-file-name="components/accounting/financial-analysis.tsx">
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
      <div className="space-y-6" data-unique-id="f0324bd2-c5fb-4e2f-975a-d46927604bea" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {currentRatios.map((category, categoryIndex) => <motion.div key={category.category} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: categoryIndex * 0.1
      }} className="glass-effect rounded-2xl p-6" data-unique-id="2cb9fb70-12c9-405a-854a-2fd62bfe0f9a" data-file-name="components/accounting/financial-analysis.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="bbce4d14-6e65-4f77-9370-fe2908b5780c" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-unique-id="2865b35f-a048-4cef-b007-ff1e57187d38" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
              {category.ratios.map((ratio, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100" data-unique-id="cbed4073-f814-4ad0-912a-056be5cd090e" data-file-name="components/accounting/financial-analysis.tsx">
                  <div className="flex items-center justify-between mb-2" data-unique-id="d151faea-a382-4128-b8eb-56d66d00db66" data-file-name="components/accounting/financial-analysis.tsx">
                    <h4 className="font-semibold" data-unique-id="2d1ec29d-64a5-4d7a-b52d-f2a9befaeb64" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.name}</h4>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${getStatusColor(ratio.status)}`} data-unique-id="07f59cc7-269d-405f-944b-5ce7f1808cb2" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {getStatusIcon(ratio.status)}
                      {ratio.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2" data-unique-id="e3d4a5dc-e1d6-486b-ad0d-e9bda2067167" data-file-name="components/accounting/financial-analysis.tsx">
                    <span className="text-2xl font-bold text-primary" data-unique-id="b652f0ac-2aa4-496e-9d42-b372f7ac7a22" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {ratio.value}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                    <span className="text-sm text-muted-foreground" data-unique-id="d560c4ec-ad46-4937-ba6a-747fdd9d47e7" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="eccc2bc4-9d6b-4b86-88de-d959b83839ab" data-file-name="components/accounting/financial-analysis.tsx">
                      Benchmark: </span>{ratio.benchmark}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-unique-id="fb656617-a9fd-4241-bf89-f99c95ae1148" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.description}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="f334262b-c49b-4d05-8c90-0c276b5cb602" data-file-name="components/accounting/financial-analysis.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="7e6e4cec-54ca-438a-9071-665fb14c6c4f" data-file-name="components/accounting/financial-analysis.tsx">
          <Info className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="de7f10ef-0ff0-4919-9d73-0d87234488f1" data-file-name="components/accounting/financial-analysis.tsx">
          Rekomendasi Keuangan
        </span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="f70824d6-d7e4-4fc4-be2a-51837af0bb33" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="f2e5ab99-ed4f-4b5d-a681-8b405ff6d674" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="977fe5c6-073f-4bf5-8e41-6ad1ab9ccf01" data-file-name="components/accounting/financial-analysis.tsx">
              <CheckCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="f5751322-75c4-448f-8575-008e8554f0d8" data-file-name="components/accounting/financial-analysis.tsx">
              Kekuatan
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="11501037-eeec-443f-b51a-db2a55371f93" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="09ff35eb-fb18-4749-b153-ea79366d7e39" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="fe6c1a48-51ab-4079-8a29-dda20deb6e04" data-file-name="components/accounting/financial-analysis.tsx">• Profitabilitas sangat baik di atas rata-rata industri</span></li>
              <li data-unique-id="ed409f6f-ddf8-4ff5-b712-018da03640ae" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="abcd55d3-ffd1-463a-8622-7ccf0f3735c2" data-file-name="components/accounting/financial-analysis.tsx">• Likuiditas kuat untuk memenuhi kewajiban jangka pendek</span></li>
              <li data-unique-id="09f3efdc-1974-4214-86d0-c937e8c371e8" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="ad5f358d-1851-4f50-83f1-05ea67dd43c9" data-file-name="components/accounting/financial-analysis.tsx">• Efisiensi operasional tinggi</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200" data-unique-id="decf2647-3d59-47ab-a697-adf7fba4a68a" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2" data-unique-id="a1d14d7f-c5aa-4c2b-8907-55baa11939ef" data-file-name="components/accounting/financial-analysis.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="b92d1e46-2499-4d78-a04f-3f4028dcb188" data-file-name="components/accounting/financial-analysis.tsx">
              Peluang Perbaikan
            </span></h4>
            <ul className="text-sm text-blue-700 space-y-1" data-unique-id="fbe072c8-d986-4523-a832-da72700f4012" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="bfd3fb7a-a7d5-49cc-bdb2-beaa65fd8afc" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="c7721818-e15c-4e67-a426-345e158148c3" data-file-name="components/accounting/financial-analysis.tsx">• Pertimbangkan investasi untuk ekspansi bisnis</span></li>
              <li data-unique-id="efa29363-4bc3-4430-84f5-2d318295b8ac" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="2ef99b2d-c2ae-49fe-99ef-3607295cc62e" data-file-name="components/accounting/financial-analysis.tsx">• Optimalisasi pengelolaan persediaan</span></li>
              <li data-unique-id="df9f5ca2-4db2-4c94-9f32-e60c9a7cf5f7" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="5ca077b5-7043-4fb8-b3bc-8ddd7afbe380" data-file-name="components/accounting/financial-analysis.tsx">• Diversifikasi produk untuk mengurangi risiko</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}