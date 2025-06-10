'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, TrendingDown, AlertCircle, Calendar, Download, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
type BudgetPeriod = '2024' | '2023';
export function BudgetRealization() {
  const [selectedPeriod, setSelectedPeriod] = useState<BudgetPeriod>('2024');
  const budgetData: any[] = [];
  const monthlyBudget: any[] = [];
  const expenseBreakdown: any[] = [];
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
  return <div className="space-y-6" data-unique-id="46ab367e-9ccc-41a0-87a3-f4f20aa6b480" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="52e6f42c-9266-4371-b65c-f53587a94a15" data-file-name="components/accounting/budget-realization.tsx">
        <div data-unique-id="61dfa557-c0fa-46fe-8d43-7f2b0a774cb7" data-file-name="components/accounting/budget-realization.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="a2231e05-987a-44aa-babc-395c9b7e94f7" data-file-name="components/accounting/budget-realization.tsx">
            <Target className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="658924be-41c4-4b18-8bd8-2371df28af6d" data-file-name="components/accounting/budget-realization.tsx">
            Anggaran & Realisasi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="941318fc-2d2c-40c4-b052-4961bc5e4833" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="7b824d96-b84e-4673-8876-ad0e3cdb9809" data-file-name="components/accounting/budget-realization.tsx">Perbandingan anggaran dengan realisasi aktual</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="4e58b742-1029-43e3-9335-1b859490cb62" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center gap-2" data-unique-id="4a142f77-84ac-4768-8639-9ea8b09826fe" data-file-name="components/accounting/budget-realization.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="9fcb761d-4226-409a-b0bf-3b57390e8320" data-file-name="components/accounting/budget-realization.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as BudgetPeriod)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="a172e1f9-c4e0-47bb-a7b3-ca0f5e142d36" data-file-name="components/accounting/budget-realization.tsx">
              <option value="2024" data-unique-id="2217aae2-465c-4c79-bf00-50ebcc8eb2ed" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="2467a04c-f611-492d-9698-b2f2405d11b1" data-file-name="components/accounting/budget-realization.tsx">2024</span></option>
              <option value="2023" data-unique-id="860b47e7-6889-469c-97bb-416af7aef57a" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="f24c4c92-7e93-40aa-93cd-2adc6f39afb4" data-file-name="components/accounting/budget-realization.tsx">2023</span></option>
            </select>
          </div>
          
          <div className="flex gap-2" data-unique-id="df17e865-ecc8-4047-9d39-ecc967652ece" data-file-name="components/accounting/budget-realization.tsx">
            <button onClick={() => alert('Tambah anggaran baru')} className="px-4 py-2 rounded-lg gradient-primary text-white font-semibold flex items-center gap-2" data-unique-id="a76f1a71-2150-41b7-8290-470d03c5007c" data-file-name="components/accounting/budget-realization.tsx">
              <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="ef5edadf-7f0c-44b2-84a3-a65624e6c4a4" data-file-name="components/accounting/budget-realization.tsx">
              Buat Anggaran
            </span></button>
            <button onClick={() => alert('Export laporan anggaran')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="a9449ea4-c9b1-4549-9b27-ccdaab319a4e" data-file-name="components/accounting/budget-realization.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="948f7e6a-5060-48a4-ab25-ff135212c7f8" data-file-name="components/accounting/budget-realization.tsx">
              Export
            </span></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="f84782bf-6bbf-4355-b382-ef8f7a997bab" data-file-name="components/accounting/budget-realization.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="cc16ce96-7dfa-416a-8f70-743b9e714518" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="1d790f5a-1023-4b48-ad62-07c78fea5481" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="c7f0db39-868a-4d21-8a33-e5c4fdec73f5" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="85d49862-9c81-43d3-8cc2-ee41702a5707" data-file-name="components/accounting/budget-realization.tsx">Total Anggaran</span></h3>
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="9a666431-c351-4f97-9ae8-807ae0cd33ea" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f95891f7-0615-4416-b839-b79a73cd9203" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="89a429c7-565a-4152-9670-d7d381c0ff29" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="14713531-8d71-4456-bff0-1ba5ae564019" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="7b0c43a6-e563-4d59-95be-30245fa60130" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="ba88a375-736d-469c-a654-f7f3c3272a5b" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="cd0c2b7e-bfd4-4892-b720-127ed6d2fa6a" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e31ce856-2f6b-492e-b945-edd77d5b2f79" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="d8911bfa-df88-45de-b8cd-d2d90ff253eb" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="7638306e-1c7f-4dec-8926-4f968132c2ae" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="859877a4-f93b-4851-9887-8d3044a60460" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="a873b493-cd4a-4695-a285-966214c674dd" data-file-name="components/accounting/budget-realization.tsx">Varians</span></h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600" data-unique-id="9bbc25dd-63b0-4c03-9808-7763e385d244" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c2bb8aac-a436-42e4-a81d-ea06a8e71157" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="7f120388-6307-4c19-8755-0a91e3574603" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="c639bb9f-480c-4dc8-9fa9-2454715e0fc8" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="acddff48-6438-4806-a960-693e61e7b4c9" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="19898f89-3d16-4370-b4c9-7c45b718c7e0" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="1d3d71a3-8d59-4d31-b2e2-84707dcb54e4" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="2de350d2-7df1-4a55-9780-e0d2f920e03e" data-file-name="components/accounting/budget-realization.tsx">80.6%</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="63923b7b-c691-4061-b0bf-cefabb02cff2" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
        {/* Monthly Trend */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="3b02e2aa-a739-4958-8d72-2f80b9e107f0" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="caa692e8-142b-4899-9a46-1a291ccb5e15" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="6949c1da-bce5-46a3-9c88-4de09a82d6c9" data-file-name="components/accounting/budget-realization.tsx">Tren Bulanan Anggaran vs Realisasi</span></h3>
          <div className="h-80" data-unique-id="6f0eeb9b-2c07-4acb-bf55-03d97a4118f9" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="0eda7ec0-8add-4e07-981e-418d1a5e37bd" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="e57d369c-e4a9-427b-8ac2-13a5a1d72928" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b14264f1-3d9e-45fb-a0a8-d7924c9d6743" data-file-name="components/accounting/budget-realization.tsx">Breakdown Pengeluaran</span></h3>
          <div className="h-80" data-unique-id="e3a7e16e-41fb-41da-a020-3a724e7f432c" data-file-name="components/accounting/budget-realization.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100} dataKey="actual" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {expenseBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="8031ff81-89fd-4e32-8224-86e0d5b45bcc" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="1d45d7eb-3f76-4049-a475-176ecf56bf3a" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="32db293d-9b00-4924-9a71-4f381f757e04" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="809c9d64-e3e6-45c7-99b9-b73d7ff36c5a" data-file-name="components/accounting/budget-realization.tsx">Detail Anggaran vs Realisasi</span></h3>
        <div className="overflow-x-auto" data-unique-id="4b6fa7a9-37f0-423e-9cb3-106c4ddcb5ad" data-file-name="components/accounting/budget-realization.tsx">
          <table className="w-full" data-unique-id="fe88eeb5-1e7a-47d9-82c5-74c9931dfbbb" data-file-name="components/accounting/budget-realization.tsx">
            <thead data-unique-id="69820e42-6fd4-4dd1-ac06-af0ea6367921" data-file-name="components/accounting/budget-realization.tsx">
              <tr className="border-b border-border" data-unique-id="af327e5a-5ea5-4e3a-90ed-2c1e771768d7" data-file-name="components/accounting/budget-realization.tsx">
                <th className="text-left py-3 px-4 font-medium" data-unique-id="526d97d2-ed0d-40e8-93fa-b07fd2dafe32" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="6b140797-4908-4053-abbe-6e288ea3fe6c" data-file-name="components/accounting/budget-realization.tsx">Kategori</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="884da7d7-2878-4b7f-b27a-929b67826f21" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="8f0a6de7-65f4-4400-87b3-94058c7e8d39" data-file-name="components/accounting/budget-realization.tsx">Anggaran</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="620c7f85-816c-4514-a137-b52443077056" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="23b77d4e-2e9f-4813-98ec-6a0f9af21453" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="fa919259-d450-4905-aafe-270b5c6df128" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="44709b49-1efe-4444-a51b-8e64367bd94c" data-file-name="components/accounting/budget-realization.tsx">Varians</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="099f824f-c500-442d-854a-75e44f858030" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="43138e07-c263-436a-993f-ed4042127888" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="d6d74fcd-70fe-49e4-b42b-fc4db944433f" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b561dc09-ca23-447b-add3-093912c1d779" data-file-name="components/accounting/budget-realization.tsx">Status</span></th>
              </tr>
            </thead>
            <tbody data-unique-id="6ff3716c-6ed6-4fad-957d-ce8e088d0096" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
              {budgetData.map((item, index) => <motion.tr key={item.category} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="c3c8f5e2-6014-4e8f-9322-adcdea7ccc50" data-file-name="components/accounting/budget-realization.tsx">
                  <td className="py-3 px-4 font-medium" data-unique-id="c34396f4-65e0-4083-b3dd-7586c57e1b4f" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.category}</td>
                  <td className="py-3 px-4 text-right" data-unique-id="87913b3b-6b37-4b2e-89b2-3c4c7d9f5a75" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="aa19935e-9171-4d30-a83e-78ed01aa7e9f" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.budget.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-right" data-unique-id="cdbf20e0-e9ba-47a9-85e5-a69d0dbc73ff" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f00114cd-88e0-4f7f-9915-9ed082c9c82d" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.actual.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${item.variance >= 0 ? 'text-green-600' : 'text-red-600'}`} data-unique-id="ec3ce9fd-112a-492b-8e99-f144e51def2d" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
                    {item.variance >= 0 ? '+' : ''}<span className="editable-text" data-unique-id="1245ef14-801a-42cc-bf6a-31d0070c0eb1" data-file-name="components/accounting/budget-realization.tsx">Rp </span>{item.variance.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="4a595faa-67ce-4276-a70e-b4413e7aac63" data-file-name="components/accounting/budget-realization.tsx">
                    <div className="flex items-center justify-center" data-unique-id="1538310b-6a4b-430f-84f7-0923f7871e82" data-file-name="components/accounting/budget-realization.tsx">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2" data-unique-id="0d89650e-601c-4ce6-b241-243af3129fdd" data-file-name="components/accounting/budget-realization.tsx">
                        <div className={`h-2 rounded-full ${item.percentage >= 100 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${Math.min(item.percentage, 100)}%`
                    }} data-unique-id="8fb07c6f-5d91-4566-8c7b-006e81874928" data-file-name="components/accounting/budget-realization.tsx"></div>
                      </div>
                      <span className="text-sm font-medium" data-unique-id="3bfe8abb-7d77-4442-99d2-4e6376631d11" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.percentage.toFixed(1)}<span className="editable-text" data-unique-id="0424a009-93c4-45ae-8166-2eb8755842b8" data-file-name="components/accounting/budget-realization.tsx">%</span></span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="16df97af-34d5-4036-a4e2-e5121009d2f8" data-file-name="components/accounting/budget-realization.tsx">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(item.status)}`} data-unique-id="9124fc1e-da43-4821-a1de-7caa54e88686" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="7e5736b8-8516-400e-b4f2-6837956400e7" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="838aca13-2b1a-429f-a4ec-e0ab259764bc" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="05f49337-d454-44e9-8a0c-4fa64edc9b52" data-file-name="components/accounting/budget-realization.tsx">Rencana Tindakan</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="4330702c-a05d-4d8d-967c-13576f42690d" data-file-name="components/accounting/budget-realization.tsx">
          <div className="p-4 rounded-lg bg-red-50 border border-red-200" data-unique-id="5bab10dc-8e5a-4bcb-8236-4d35cfce91b0" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2" data-unique-id="b88498f7-b833-4af6-a1e7-691429582eaf" data-file-name="components/accounting/budget-realization.tsx">
              <AlertCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="27d33968-4bbf-45d9-8d77-059ca059e463" data-file-name="components/accounting/budget-realization.tsx">
              Perlu Perhatian
            </span></h4>
            <ul className="text-sm text-red-700 space-y-1" data-unique-id="f631a777-2854-4010-8c87-b1c93c407561" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="c0f8c63b-48b4-4c36-b576-097d72e32ddd" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="5027ef6e-e883-4460-8b13-a64a6b52160d" data-file-name="components/accounting/budget-realization.tsx">• Pendapatan masih 19.4% di bawah target</span></li>
              <li data-unique-id="3d05e798-9fe1-4ab6-a498-665254398e54" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="c2c765e1-5bfa-4293-8f31-d9a978065113" data-file-name="components/accounting/budget-realization.tsx">• Perlu strategi pemasaran yang lebih agresif</span></li>
              <li data-unique-id="8190668f-775a-4ee9-a8e9-033007b933e6" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="1090b9e5-c72e-44ea-866d-fc19f20fa038" data-file-name="components/accounting/budget-realization.tsx">• Evaluasi harga jual produk</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="2300cfdc-19cd-4fdd-8c72-c6d39577dee0" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="faa213f5-dc18-4db6-96ee-f1764f8073df" data-file-name="components/accounting/budget-realization.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="a2ce08a2-18c5-461d-9fe0-819981dc6e31" data-file-name="components/accounting/budget-realization.tsx">
              Pencapaian Positif
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="957c38b9-cd6b-4110-af5f-f005bfe45db8" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="28bb7003-4809-44b5-b0f9-d0f43c5c8633" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="00918782-2df4-4074-8024-8d2d96967c5e" data-file-name="components/accounting/budget-realization.tsx">• Pengeluaran operasional terkendali</span></li>
              <li data-unique-id="9b594bb2-d81b-4fb5-8289-5e19f229bd86" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b76e84a2-5cdc-4c7b-b021-42df7ee8718c" data-file-name="components/accounting/budget-realization.tsx">• Efisiensi biaya gaji tercapai</span></li>
              <li data-unique-id="b8a54ffc-4bea-4156-9ee3-194be1c6f6aa" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="dfdc1eee-9f84-44a8-8687-462b10937cc4" data-file-name="components/accounting/budget-realization.tsx">• HPP sesuai target yang ditetapkan</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}