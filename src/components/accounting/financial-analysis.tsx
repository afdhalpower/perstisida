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
  return <div className="space-y-6" data-unique-id="e6e58061-5b9c-4ca7-b8bb-6a2c965b7c96" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
      {/* Header */}
      <div data-unique-id="6142f482-f15b-4bcd-91c0-547ba9cd37a1" data-file-name="components/accounting/financial-analysis.tsx">
        <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="359f7646-1bdb-4c68-a7e1-b7e9088dfb92" data-file-name="components/accounting/financial-analysis.tsx">
          <TrendingUp className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="18f6f8e4-5bea-4147-9fc5-3b096315c736" data-file-name="components/accounting/financial-analysis.tsx">
          Analisis Rasio Keuangan
        </span></h2>
        <p className="text-muted-foreground" data-unique-id="da122dec-04ba-4528-ba92-2c1fc4b25898" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="50dee8c2-e4c8-4656-aa02-2d10f2ed2eaa" data-file-name="components/accounting/financial-analysis.tsx">Analisis kinerja dan kesehatan keuangan perusahaan</span></p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="72f8dbdb-1842-4a47-8f6d-ac6a357f7d0c" data-file-name="components/accounting/financial-analysis.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="15207418-2b2e-4266-95d3-30aa9fae18c7" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center" data-unique-id="a33b9d74-2d8a-4cf6-9cb3-8c9c1343543e" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="f973fa17-922d-4b35-8d48-dd5013b89551" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="5a06dc8c-68a2-43c2-9886-b98902a9534f" data-file-name="components/accounting/financial-analysis.tsx">A+</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="374fbb28-5688-4756-a505-140ca06aa243" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="5e41c462-ce73-48ac-b760-6583f27c031e" data-file-name="components/accounting/financial-analysis.tsx">Skor Keuangan</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="aa8a8815-f658-4d21-ab80-1d33a681742d" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center" data-unique-id="1fbb5a8d-76fa-4aef-b051-307ba450a29a" data-file-name="components/accounting/financial-analysis.tsx">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="3563fff6-261f-4a04-8c70-2bf8c2a3de64" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="e288a9f3-70f8-4c7b-9e3a-690740c1ff92" data-file-name="components/accounting/financial-analysis.tsx">21.5%</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="d7de46bb-0dd8-4105-b52b-91d6553ea2d2" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="9ba24434-4af9-4014-8807-0f921a4fc6d8" data-file-name="components/accounting/financial-analysis.tsx">ROE</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="59d014e3-d252-459c-974f-b18785e8c13c" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center" data-unique-id="0e17215a-2175-4d84-9795-5001edf90b5f" data-file-name="components/accounting/financial-analysis.tsx">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600" data-unique-id="2e19f62f-5960-4904-bd54-1dbadd46f106" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="3110fe20-34cb-4fb0-b602-d7713979496b" data-file-name="components/accounting/financial-analysis.tsx">2.4x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="cb0a85c6-dcf9-42d5-8231-5ef0eb319af7" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="2249c809-2902-4d49-b03c-ac8f61531c44" data-file-name="components/accounting/financial-analysis.tsx">Current Ratio</span></div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 text-center" data-unique-id="8c010cae-b3f6-49f5-be0c-8e6d12002c48" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center" data-unique-id="f19fddfb-8043-43fe-9b10-76801e737490" data-file-name="components/accounting/financial-analysis.tsx">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="7225bdd6-fa60-4abe-8e7f-404913fd7dae" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="520d0326-c68e-4388-8051-ae6f693add92" data-file-name="components/accounting/financial-analysis.tsx">4.0x</span></div>
          <div className="text-sm text-muted-foreground" data-unique-id="a9c63e78-dacd-4d35-a3dd-d4b7b260f1be" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="0db9a471-6885-4c3d-95d5-975249fe56a3" data-file-name="components/accounting/financial-analysis.tsx">Asset Turnover</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="b5105a4e-3144-49f6-9d5b-87a04889bc28" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {/* Ratio Trends */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="1b34388e-8d02-4d2b-95c9-6791e18663c5" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="f6492f6f-535a-4777-a148-cda8abf823ca" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="151ad23a-7c24-436a-b366-efb3e024f548" data-file-name="components/accounting/financial-analysis.tsx">Tren Rasio Keuangan</span></h3>
          <div className="h-80" data-unique-id="c99bff4d-0361-4eb9-9656-c4743b9c6d51" data-file-name="components/accounting/financial-analysis.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="d1ec1d8b-6dee-49ab-95f9-393963e8f68a" data-file-name="components/accounting/financial-analysis.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="ad294e11-9ead-4b18-bc4a-f8c95e3f349a" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="8762da14-dab8-4c16-ac97-c528b05c892d" data-file-name="components/accounting/financial-analysis.tsx">Perbandingan dengan Industri</span></h3>
          <div className="h-80" data-unique-id="66ec2c73-62a5-4e49-86cf-d8e9a8bbdf8c" data-file-name="components/accounting/financial-analysis.tsx">
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
      <div className="space-y-6" data-unique-id="6af3f4fd-c439-4797-84e9-ca2da71bed06" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
        {currentRatios.map((category, categoryIndex) => <motion.div key={category.category} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: categoryIndex * 0.1
      }} className="glass-effect rounded-2xl p-6" data-unique-id="2789baf3-bb2a-4b27-8f53-aad5f628a3f4" data-file-name="components/accounting/financial-analysis.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="9e5f767f-d564-4aa1-b114-497a23d4a9a2" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-unique-id="1f15d7cf-c04f-4c4d-b706-9f6ccf313388" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
              {category.ratios.map((ratio, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100" data-unique-id="05b474b6-6349-48c1-9219-423b4f7a565d" data-file-name="components/accounting/financial-analysis.tsx">
                  <div className="flex items-center justify-between mb-2" data-unique-id="152854f5-b200-4ccf-9871-4d46b02892e3" data-file-name="components/accounting/financial-analysis.tsx">
                    <h4 className="font-semibold" data-unique-id="f61cbf9b-0276-469c-bda8-74b12937d63d" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.name}</h4>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${getStatusColor(ratio.status)}`} data-unique-id="a0ea6668-e428-47b3-bb7a-4242bfd44fa2" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {getStatusIcon(ratio.status)}
                      {ratio.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2" data-unique-id="97ac67fb-098c-49a5-8c2b-4e1216d9825c" data-file-name="components/accounting/financial-analysis.tsx">
                    <span className="text-2xl font-bold text-primary" data-unique-id="acab79c3-ade7-452b-b809-9a99222f09cf" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">
                      {ratio.value}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                    <span className="text-sm text-muted-foreground" data-unique-id="61e8ece2-f597-4bd9-8e1a-e2e970a9da67" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="404a6167-b85c-4537-8824-b1a48031dde1" data-file-name="components/accounting/financial-analysis.tsx">
                      Benchmark: </span>{ratio.benchmark}{ratio.name.includes('Ratio') ? 'x' : '%'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-unique-id="7c774b34-3348-4449-a5fd-375a454d1b47" data-file-name="components/accounting/financial-analysis.tsx" data-dynamic-text="true">{ratio.description}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="9ea115b7-4433-4edc-a858-67b2783f4c2c" data-file-name="components/accounting/financial-analysis.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="c33468c8-1194-4bc0-9473-60872c96788e" data-file-name="components/accounting/financial-analysis.tsx">
          <Info className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="1721c60c-23c3-418c-85d0-8f3b1ae7523e" data-file-name="components/accounting/financial-analysis.tsx">
          Rekomendasi Keuangan
        </span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="8f074549-f914-4498-9fa8-bc6df440f181" data-file-name="components/accounting/financial-analysis.tsx">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="7b8a1853-83de-46dd-af10-7a32b72f86bb" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="3a4a496d-ebb4-4a5d-95f3-002a38b9754c" data-file-name="components/accounting/financial-analysis.tsx">
              <CheckCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="12788031-0456-4430-a5d7-bcbd0ddc6b60" data-file-name="components/accounting/financial-analysis.tsx">
              Kekuatan
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="6ddbc582-388a-41ff-a611-78a591d62840" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="8faf9bc7-0070-4d55-8b4c-e55e193f28ec" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="c3d7e7d1-d492-443d-8213-90c4877de703" data-file-name="components/accounting/financial-analysis.tsx">• Profitabilitas sangat baik di atas rata-rata industri</span></li>
              <li data-unique-id="5e935edd-35e0-4b53-9287-2381a653be73" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="83f9a8a1-5404-4e69-8c08-0fc3e7c8cefb" data-file-name="components/accounting/financial-analysis.tsx">• Likuiditas kuat untuk memenuhi kewajiban jangka pendek</span></li>
              <li data-unique-id="03512fa0-31b5-48c8-99b5-50dc7d341433" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="1f6111c6-61f3-4b6b-a57f-6867b141e4ad" data-file-name="components/accounting/financial-analysis.tsx">• Efisiensi operasional tinggi</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200" data-unique-id="09ebd671-bdb6-42fd-947e-2a8ae2571c1a" data-file-name="components/accounting/financial-analysis.tsx">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2" data-unique-id="be9e8c42-8b78-4d9a-b1e5-77b4b7cd849f" data-file-name="components/accounting/financial-analysis.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="f9411535-5430-4feb-949d-aabb2142c849" data-file-name="components/accounting/financial-analysis.tsx">
              Peluang Perbaikan
            </span></h4>
            <ul className="text-sm text-blue-700 space-y-1" data-unique-id="509e7ded-637d-4516-9f0e-5b56b93a2ff2" data-file-name="components/accounting/financial-analysis.tsx">
              <li data-unique-id="0d151d05-ca64-4bc8-b65f-0d84999acb77" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="2d81ddec-732f-49ca-8277-6b4701469382" data-file-name="components/accounting/financial-analysis.tsx">• Pertimbangkan investasi untuk ekspansi bisnis</span></li>
              <li data-unique-id="3b13da95-ca9b-4041-b98b-ef5a86972a6f" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="d99c59db-17a3-444d-b830-b9405b83be88" data-file-name="components/accounting/financial-analysis.tsx">• Optimalisasi pengelolaan persediaan</span></li>
              <li data-unique-id="d72f9a64-33f7-48d3-a7c9-0aa1c47a1637" data-file-name="components/accounting/financial-analysis.tsx"><span className="editable-text" data-unique-id="c7624ba7-372c-4ed5-945c-19d2262a2aa2" data-file-name="components/accounting/financial-analysis.tsx">• Diversifikasi produk untuk mengurangi risiko</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}