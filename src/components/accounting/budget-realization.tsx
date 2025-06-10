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
  return <div className="space-y-6" data-unique-id="36ff22a0-9a2e-4c25-9e2e-4a1c19b00dc5" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="7be9442f-00de-4281-b177-ca6be4056b37" data-file-name="components/accounting/budget-realization.tsx">
        <div data-unique-id="3cd5fca0-ed2f-4dad-8c37-7526e39def75" data-file-name="components/accounting/budget-realization.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="7ea92a3b-659b-40b2-a0fd-38b62a9e57f4" data-file-name="components/accounting/budget-realization.tsx">
            <Target className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="248f6160-585d-496a-bd4d-bc4376319664" data-file-name="components/accounting/budget-realization.tsx">
            Anggaran & Realisasi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="7abf0f9e-fae7-4a33-a6dc-646a37eb43c0" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="6e0dc4e3-d6b8-4689-94e3-784bfcbb9a3d" data-file-name="components/accounting/budget-realization.tsx">Perbandingan anggaran dengan realisasi aktual</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="65f1619b-6fc4-4cd1-bd00-6e3dfecf5783" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center gap-2" data-unique-id="ef8386df-498d-4ed5-a2df-ab7868ed683b" data-file-name="components/accounting/budget-realization.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="d1599eb9-d70c-4206-9065-db06a4e629ee" data-file-name="components/accounting/budget-realization.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as BudgetPeriod)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="6f8f429b-b60c-4dc8-9b73-b8f1a1e03565" data-file-name="components/accounting/budget-realization.tsx">
              <option value="2024" data-unique-id="e6ed49e8-0a1c-4dd0-9b55-91093c542462" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="847b557f-af37-4b0c-a385-763f3709828d" data-file-name="components/accounting/budget-realization.tsx">2024</span></option>
              <option value="2023" data-unique-id="6f61e37d-c819-4854-99c1-73df828a7084" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="be9d9b86-91be-4344-8869-97014b2636f8" data-file-name="components/accounting/budget-realization.tsx">2023</span></option>
            </select>
          </div>
          
          <div className="flex gap-2" data-unique-id="7d528223-ea8f-48d6-8815-c378e14201f7" data-file-name="components/accounting/budget-realization.tsx">
            <button onClick={() => alert('Tambah anggaran baru')} className="px-4 py-2 rounded-lg gradient-primary text-white font-semibold flex items-center gap-2" data-unique-id="67b12e8e-6a88-4377-92cb-d226ed7c4c36" data-file-name="components/accounting/budget-realization.tsx">
              <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="544b1615-36bb-40f2-84bf-0d126d594c3c" data-file-name="components/accounting/budget-realization.tsx">
              Buat Anggaran
            </span></button>
            <button onClick={() => alert('Export laporan anggaran')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="fcf040e1-666f-4a5a-9162-4fdcec062f56" data-file-name="components/accounting/budget-realization.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="961575ee-c22e-4935-9579-997332f8bc7c" data-file-name="components/accounting/budget-realization.tsx">
              Export
            </span></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="13f278e6-959f-4151-b5ae-2512c14244b7" data-file-name="components/accounting/budget-realization.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="96b8c770-7d3b-40bb-a813-e9867521f96a" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="6333d2ce-b723-400d-9cc1-caf41239b1e0" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="155d2adf-30fe-4bd6-ad9c-b5e89f22a4bb" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="a632deab-8bc9-4671-962a-4426250c6da5" data-file-name="components/accounting/budget-realization.tsx">Total Anggaran</span></h3>
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="f697689c-9371-407f-b217-4084f2e633f2" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="90e72209-e2e3-4032-8566-8964d5add618" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="64118844-16e0-4e5e-b075-c1e17a91744b" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="276ea88d-9d47-456f-8d28-0c24cfeaf4cb" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="fae37f6a-7645-49a8-b2cf-d6534f27631e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="97076311-92e1-440f-ab77-4b9ada61e5ef" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="db664cc1-5808-4964-aa6b-22af08e65aa7" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b11073dd-ef8a-464e-8f7e-ed18be8f305c" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="9068f8f3-113f-48a2-bd80-abe7e7aa6771" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="08bfe52c-f8b1-4803-982b-73cf449f63d6" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="9e66772f-c4f4-4115-8e76-ec163a647c8f" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="76c837dc-1b1c-4dc1-93a6-bd2f92f5b450" data-file-name="components/accounting/budget-realization.tsx">Varians</span></h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600" data-unique-id="168e8560-6605-4c88-8942-7f0d31df44b1" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="31e9861c-313e-4617-afca-d932cb5c8dad" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="79c8d3dc-40cc-4f95-8967-ecc36dc2d2d8" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="c806a95a-c750-40aa-bd63-777c8d199619" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="7ad5f250-7868-4094-b3ee-70d17737e991" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="63a895db-f5ce-4780-972c-429b5052f55e" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="3529267f-7785-4e0e-ba00-88790ad223c3" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="12bd8812-fd23-4db8-9746-15aa4a519613" data-file-name="components/accounting/budget-realization.tsx">80.6%</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="67d55ff5-5211-44d4-9da3-8657d0a58173" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
        {/* Monthly Trend */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="4b6e54e7-d920-4ab7-87b4-184dfa83d6ef" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="a4f28c0c-2005-422b-ae89-4bd7d55359ce" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="698b2274-668d-4a70-9753-9d4bebf73c67" data-file-name="components/accounting/budget-realization.tsx">Tren Bulanan Anggaran vs Realisasi</span></h3>
          <div className="h-80" data-unique-id="e865210c-e281-4d95-b76b-0a4a40829656" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="4aa1fd65-bed4-48c5-93d9-8bc7128bd148" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="4ff52d92-d124-4e5a-9800-58ba45a3ec50" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="79f6f006-5c9d-43e1-884e-859b728c453a" data-file-name="components/accounting/budget-realization.tsx">Breakdown Pengeluaran</span></h3>
          <div className="h-80" data-unique-id="5519d08a-0133-4a2c-b7f9-e57dacd91896" data-file-name="components/accounting/budget-realization.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100} dataKey="actual" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {expenseBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="6bc84d6c-3d25-4ab0-b4c4-074ad50393c1" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="384e5803-4dca-469c-b87f-135447364426" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="28a884cd-36df-4f71-b3e0-9825f893aa56" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="d9a578be-2d21-42ae-9d05-bbc9c4b75b35" data-file-name="components/accounting/budget-realization.tsx">Detail Anggaran vs Realisasi</span></h3>
        <div className="overflow-x-auto" data-unique-id="cd5a0a44-e509-4613-9e20-c6d420d46ab7" data-file-name="components/accounting/budget-realization.tsx">
          <table className="w-full" data-unique-id="f925ad36-5b8b-473a-a163-67ccc731e253" data-file-name="components/accounting/budget-realization.tsx">
            <thead data-unique-id="2cd71302-32d9-4846-9302-a418c6db3e72" data-file-name="components/accounting/budget-realization.tsx">
              <tr className="border-b border-border" data-unique-id="248ea7ff-4ca3-4d9a-986e-28232a5866c0" data-file-name="components/accounting/budget-realization.tsx">
                <th className="text-left py-3 px-4 font-medium" data-unique-id="f9d0f52c-752d-4dcc-89b0-c0d13e4144ce" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="626dc0ed-cf9d-482f-8b83-6fad457e8a5e" data-file-name="components/accounting/budget-realization.tsx">Kategori</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="c7de5ed7-4c6b-4443-b408-f6dbcc00e696" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="42fa9c63-3d09-4e0a-807b-0015f2d4be4c" data-file-name="components/accounting/budget-realization.tsx">Anggaran</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="e4a85c2e-64e5-486a-9d80-f2c453cfb050" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="e8be5317-124b-4435-b272-7d3def297ee0" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="45db8995-e7f6-4b9b-881c-75e131a06c5e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="2bdb4794-02cb-488e-92ff-694a3fc0bdff" data-file-name="components/accounting/budget-realization.tsx">Varians</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="0f6f0048-69b2-4e6f-be21-ca0e35cf7459" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="8d6f848c-76e0-4439-a83f-a4e96e35ec37" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="9aff8a03-f6e9-41f1-afb5-d856a5cd2bd5" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="2188a868-ec47-4874-9fcf-e18b21e412f5" data-file-name="components/accounting/budget-realization.tsx">Status</span></th>
              </tr>
            </thead>
            <tbody data-unique-id="05b42596-1cab-42e5-897f-d64845c403ef" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
              {budgetData.map((item, index) => <motion.tr key={item.category} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="7137f304-78aa-4b84-b601-84ee2b4c2969" data-file-name="components/accounting/budget-realization.tsx">
                  <td className="py-3 px-4 font-medium" data-unique-id="776a861c-8a3c-4fe2-a30c-dba39a4f4213" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.category}</td>
                  <td className="py-3 px-4 text-right" data-unique-id="3855da6e-1497-4c50-aaeb-58b2decc04cf" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="88d035aa-520a-45fc-aad1-e0191245ed61" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.budget.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-right" data-unique-id="1d919b46-106a-4f86-b651-da96a41ead34" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d336eb11-87d1-4a0f-adc7-9f108aabac6e" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.actual.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${item.variance >= 0 ? 'text-green-600' : 'text-red-600'}`} data-unique-id="22b754fe-2f47-470b-a548-724cd09eb65d" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
                    {item.variance >= 0 ? '+' : ''}<span className="editable-text" data-unique-id="ea476742-b35f-4f97-86a6-d945ff65d9d0" data-file-name="components/accounting/budget-realization.tsx">Rp </span>{item.variance.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="2e199eb9-c15e-4d35-9950-4e1d79e9ffa2" data-file-name="components/accounting/budget-realization.tsx">
                    <div className="flex items-center justify-center" data-unique-id="3abab0e1-7e02-4ebb-a580-218f1c7fb1a4" data-file-name="components/accounting/budget-realization.tsx">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2" data-unique-id="397a9535-61dd-4547-8591-35d365c8f84f" data-file-name="components/accounting/budget-realization.tsx">
                        <div className={`h-2 rounded-full ${item.percentage >= 100 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${Math.min(item.percentage, 100)}%`
                    }} data-unique-id="e2145196-2772-4171-bb1d-a6ad78f4cbfc" data-file-name="components/accounting/budget-realization.tsx"></div>
                      </div>
                      <span className="text-sm font-medium" data-unique-id="26d6104b-3a01-4c56-92b4-1ca6a469ff8d" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.percentage.toFixed(1)}<span className="editable-text" data-unique-id="b261dd28-f5d5-477c-b092-b5ecfe6baea6" data-file-name="components/accounting/budget-realization.tsx">%</span></span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="159aa554-7f7f-42cd-9ae7-4b612be53c4c" data-file-name="components/accounting/budget-realization.tsx">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(item.status)}`} data-unique-id="229a4d95-61e4-4e11-a2d2-c2f5c040539f" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="a63a4b0f-faf5-4bf3-b209-b49b37aef041" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="a1f85eeb-f907-43de-87b0-81b5dc92657e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="f31ecf48-8995-4baa-ab0f-52d2b53d5fff" data-file-name="components/accounting/budget-realization.tsx">Rencana Tindakan</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="1e7c8183-5ebb-4ced-8e0f-dbb0a0e8dc21" data-file-name="components/accounting/budget-realization.tsx">
          <div className="p-4 rounded-lg bg-red-50 border border-red-200" data-unique-id="217be19a-5b39-4811-87fa-44dcf3a61c79" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2" data-unique-id="e7ff41c8-f1b3-45ad-8723-2153597006fe" data-file-name="components/accounting/budget-realization.tsx">
              <AlertCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="d147a92e-a682-41ae-9d23-89639fb48815" data-file-name="components/accounting/budget-realization.tsx">
              Perlu Perhatian
            </span></h4>
            <ul className="text-sm text-red-700 space-y-1" data-unique-id="0d08e24e-e721-4fb6-b84f-61b185b32c59" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="b60189de-04cc-4db3-9454-b39a7aa69d0d" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="44215124-676d-4048-bf53-13db7388c32b" data-file-name="components/accounting/budget-realization.tsx">• Pendapatan masih 19.4% di bawah target</span></li>
              <li data-unique-id="04f3bff6-b130-44fd-a328-a658b3a59f22" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="47695adc-a651-49eb-95a2-dfc30af3f7c4" data-file-name="components/accounting/budget-realization.tsx">• Perlu strategi pemasaran yang lebih agresif</span></li>
              <li data-unique-id="a9577573-929e-412f-b7c9-78c7e008b34e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="692609e1-4b5c-42d9-b375-0552a1773c36" data-file-name="components/accounting/budget-realization.tsx">• Evaluasi harga jual produk</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="815a95a3-be16-45eb-8960-890f01d21f24" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="4fb04bd5-278a-4d06-b49d-7b2bfc827ce2" data-file-name="components/accounting/budget-realization.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="7417cec3-eb9b-485e-95bf-345c104072dc" data-file-name="components/accounting/budget-realization.tsx">
              Pencapaian Positif
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="fba43b8c-5a87-477c-a155-a5f7fd60bcba" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="cf29b9a8-4b6b-4e85-8b92-265145394f98" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="5ad64813-d1d9-4391-a43b-ec7ee1bffaa5" data-file-name="components/accounting/budget-realization.tsx">• Pengeluaran operasional terkendali</span></li>
              <li data-unique-id="8ad6b0e2-634f-45b3-8409-3543f24fa617" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="74accd49-2bbe-4603-8a38-649fad6918aa" data-file-name="components/accounting/budget-realization.tsx">• Efisiensi biaya gaji tercapai</span></li>
              <li data-unique-id="628756ec-867d-4b13-8185-43780e718451" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="389581b4-1287-475a-b0c0-7d7d29358ad7" data-file-name="components/accounting/budget-realization.tsx">• HPP sesuai target yang ditetapkan</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}