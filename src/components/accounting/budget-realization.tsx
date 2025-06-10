'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, TrendingDown, AlertCircle, Calendar, Download, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
type BudgetPeriod = '2024' | '2023';
export function BudgetRealization() {
  const [selectedPeriod, setSelectedPeriod] = useState<BudgetPeriod>('2024');
  const budgetData = [
    {
      category: 'Pendapatan Penjualan',
      budget: 1200000000,
      actual: 980000000,
      variance: -220000000,
      percentage: 81.7,
      status: 'warning'
    },
    {
      category: 'Harga Pokok Penjualan',
      budget: 720000000,
      actual: 588000000,
      variance: 132000000,
      percentage: 81.7,
      status: 'good'
    },
    {
      category: 'Biaya Operasional',
      budget: 240000000,
      actual: 195000000,
      variance: 45000000,
      percentage: 81.3,
      status: 'good'
    },
    {
      category: 'Biaya Pemasaran',
      budget: 60000000,
      actual: 72000000,
      variance: -12000000,
      percentage: 120.0,
      status: 'below'
    },
    {
      category: 'Biaya Administrasi',
      budget: 48000000,
      actual: 38400000,
      variance: 9600000,
      percentage: 80.0,
      status: 'good'
    }
  ];

  const monthlyBudget = [
    { month: 'Jan', budget: 100000000, actual: 85000000 },
    { month: 'Feb', budget: 100000000, actual: 92000000 },
    { month: 'Mar', budget: 100000000, actual: 88000000 },
    { month: 'Apr', budget: 100000000, actual: 95000000 },
    { month: 'Mei', budget: 100000000, actual: 78000000 },
    { month: 'Jun', budget: 100000000, actual: 102000000 },
    { month: 'Jul', budget: 100000000, actual: 96000000 },
    { month: 'Agu', budget: 100000000, actual: 89000000 },
    { month: 'Sep', budget: 100000000, actual: 93000000 },
    { month: 'Okt', budget: 100000000, actual: 87000000 },
    { month: 'Nov', budget: 100000000, actual: 91000000 },
    { month: 'Des', budget: 100000000, actual: 84000000 }
  ];

  const expenseBreakdown = [
    { name: 'Pembelian Pestisida', value: 588000000, color: '#8884d8' },
    { name: 'Gaji Karyawan', value: 96000000, color: '#82ca9d' },
    { name: 'Biaya Transportasi', value: 48000000, color: '#ffc658' },
    { name: 'Biaya Pemasaran', value: 72000000, color: '#ff7300' },
    { name: 'Biaya Administrasi', value: 38400000, color: '#00ff88' },
    { name: 'Biaya Lainnya', value: 24000000, color: '#ff0088' }
  ];
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
  return <div className="space-y-6" data-unique-id="dd252a2a-d8a5-483a-bc2e-1f9bcc4ef06a" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="6ae988ea-9f94-490c-abea-9a9b6d9e2bf8" data-file-name="components/accounting/budget-realization.tsx">
        <div data-unique-id="c7adfd5d-5de8-47e2-8a43-1f2271b6d2f9" data-file-name="components/accounting/budget-realization.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="fa69c1d3-ea9b-474f-9a47-beb02f3fef03" data-file-name="components/accounting/budget-realization.tsx">
            <Target className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="7ce2b60e-fd5c-47a7-aba9-5c981317ddf4" data-file-name="components/accounting/budget-realization.tsx">
            Anggaran & Realisasi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="e7bad483-7ea5-4623-9ff9-2e947dd74732" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="2860bf5c-4d4d-4668-b90e-5518d070f327" data-file-name="components/accounting/budget-realization.tsx">Perbandingan anggaran dengan realisasi aktual</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="cf51665d-82e3-4b9a-8dd1-caf910a15c38" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center gap-2" data-unique-id="5edd9bad-1538-479f-b796-1189b1d7eeb3" data-file-name="components/accounting/budget-realization.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="4058a9af-52c1-435f-a254-e71e1bca2790" data-file-name="components/accounting/budget-realization.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as BudgetPeriod)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="45c1d71b-a98d-432a-b7e8-47e9d41c3db8" data-file-name="components/accounting/budget-realization.tsx">
              <option value="2024" data-unique-id="9d5cf7c2-abcd-459c-a825-fe7e5e1bd8e8" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="26da51fe-95cb-4ff2-b07e-461155011a8b" data-file-name="components/accounting/budget-realization.tsx">2024</span></option>
              <option value="2023" data-unique-id="c61652d1-3ac1-48d9-8a5b-81fe2ca6fb5d" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="0e060e1b-d143-45db-8648-6097b2cbb709" data-file-name="components/accounting/budget-realization.tsx">2023</span></option>
            </select>
          </div>
          
          <div className="flex gap-2" data-unique-id="e86c3137-e51e-4dbd-a778-a5ad2334073d" data-file-name="components/accounting/budget-realization.tsx">
            <button onClick={() => alert('Tambah anggaran baru')} className="px-4 py-2 rounded-lg gradient-primary text-white font-semibold flex items-center gap-2" data-unique-id="1defa9db-b84d-4b29-b1a2-0f51af1dc571" data-file-name="components/accounting/budget-realization.tsx">
              <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="bbc433c2-2c72-4cd5-851a-7ea5fc6363b0" data-file-name="components/accounting/budget-realization.tsx">
              Buat Anggaran
            </span></button>
            <button onClick={() => alert('Export laporan anggaran')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="074cde57-ccdc-4acb-af6d-d419749c82f2" data-file-name="components/accounting/budget-realization.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="091eac4d-fc88-407c-a4bd-7af549951c45" data-file-name="components/accounting/budget-realization.tsx">
              Export
            </span></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="06d55196-2a3c-465c-b430-90bc4dacd12e" data-file-name="components/accounting/budget-realization.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="277a1bc5-6680-414f-9c97-d4143ea9aea1" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="ba85b017-cd80-46ac-9c83-872f07bb57f4" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="99336017-bc2c-42ad-aaee-1d5315b3aaea" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="66a74f25-6f61-46b6-9d63-abbacf85431e" data-file-name="components/accounting/budget-realization.tsx">Total Anggaran</span></h3>
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="c9c95738-e0a0-498f-8e43-93677212e9a9" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="4cba3b6d-1d69-4d8b-bbd6-6601f6d6e38c" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="520d0222-dfee-493a-9467-c503774f2846" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="0010ba2b-5189-477b-83e3-7043907d8acd" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="12f20fef-5f6a-435b-89f3-e3fec1f050b6" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="e5211491-1e45-41e3-a651-8f057d4562fd" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="d32b0ba5-05a9-4b6c-9a5b-8db50ff450cc" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5a5b4ecf-ea6f-42a1-8dcb-4477b8c6e82f" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="46e874ef-fe3d-40eb-80e1-3327998be91e" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="34ea1eea-6f61-4acd-a7f7-8a68b32d634b" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="d645534a-6e4e-4ce1-ae22-e0b0b9af630a" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="51c6f4af-6c10-45b5-8fe0-cbc9e91ea069" data-file-name="components/accounting/budget-realization.tsx">Varians</span></h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600" data-unique-id="fc012c4c-62c1-47d6-8f2f-310bdf5ca88f" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b3a950dc-5275-4264-a0a0-39066f45d419" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="54aadd5c-f979-4dd3-997d-e8d3d87f2a84" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="4b2264c3-f2a9-442d-acdf-2554a25b9b70" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="35504635-2677-439a-91bd-30c78da3fddb" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="a310e8ea-e5f5-44cd-b5e2-71c6a41c18cc" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="edd33f5f-71df-4877-a0c4-dd403eae7e02" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="d4f6920a-7190-46a2-b81a-5217e1f55425" data-file-name="components/accounting/budget-realization.tsx">80.6%</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="37d8c71b-57aa-4a2f-9c8a-f12b9dba4933" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
        {/* Monthly Trend */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="fbc8de3a-e010-4589-8950-46a367b5eb26" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="419f7e73-89f6-487a-8c00-cfe8ee68156f" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="1cf650d1-b2cf-4203-85ea-21b5b7140490" data-file-name="components/accounting/budget-realization.tsx">Tren Bulanan Anggaran vs Realisasi</span></h3>
          <div className="h-80" data-unique-id="1ed02290-4826-472a-b082-e58377d75d92" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="b8cdc354-f766-4289-a0e1-775b2587933f" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="a63f9fdd-2a65-4d14-a040-c7e98ceaac2b" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b2841ed9-db13-49bd-b030-c1cbff5da3a9" data-file-name="components/accounting/budget-realization.tsx">Breakdown Pengeluaran</span></h3>
          <div className="h-80" data-unique-id="03fa5d31-5d20-46d2-911d-9fdabe28bf65" data-file-name="components/accounting/budget-realization.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100} dataKey="actual" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {expenseBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="f5bb40f3-22bc-4893-886e-8d58e51f804e" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="10cbad3d-ee05-4ba3-a7d4-f4014012114b" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="dfae5346-309c-4f5c-9793-f2567fb21908" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="1162fb0e-ec19-46f8-90f5-e44f1459aa1e" data-file-name="components/accounting/budget-realization.tsx">Detail Anggaran vs Realisasi</span></h3>
        <div className="overflow-x-auto" data-unique-id="513cdcd2-eb0f-447e-a6f6-c351ff69e584" data-file-name="components/accounting/budget-realization.tsx">
          <table className="w-full" data-unique-id="df494510-f748-4aff-b437-5ccdee3f116f" data-file-name="components/accounting/budget-realization.tsx">
            <thead data-unique-id="1a4f8799-2434-46c1-8072-8ff0b3e2d4a4" data-file-name="components/accounting/budget-realization.tsx">
              <tr className="border-b border-border" data-unique-id="7182c07f-42c3-4b52-b457-4bf91e4afee2" data-file-name="components/accounting/budget-realization.tsx">
                <th className="text-left py-3 px-4 font-medium" data-unique-id="206ccf36-e764-40c3-954c-727fa419f8bf" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="0dc3c2eb-f3ab-4b78-a386-17cb801453b3" data-file-name="components/accounting/budget-realization.tsx">Kategori</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="6260895d-ea7c-4672-b09b-7f5bade1c837" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="e0b7640a-1802-437a-9ffe-7cde15c313bc" data-file-name="components/accounting/budget-realization.tsx">Anggaran</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="ac4bb507-1c07-48c9-90c6-dc1265710478" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="49cf6706-f9ac-4bc4-a27b-4c32350aa211" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="a1ba7ccd-717d-4227-bc36-4bf2aeae0504" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="204407ab-5931-4685-99a0-00a63a6b6f26" data-file-name="components/accounting/budget-realization.tsx">Varians</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="59dda0fa-bd4e-4fdf-bbe0-ff145cb1feba" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b3fb9d54-7a6a-48f2-9c1b-2ec0698af64f" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="70037149-539d-421f-9991-414b5ff3e414" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="8a722ca8-3674-4509-a798-46ed3dcca57b" data-file-name="components/accounting/budget-realization.tsx">Status</span></th>
              </tr>
            </thead>
            <tbody data-unique-id="0ac49e5f-b843-4c95-a013-ca77e4b68765" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
              {budgetData.map((item, index) => <motion.tr key={item.category} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="2939804b-74fa-43f7-9efd-547cf26410b8" data-file-name="components/accounting/budget-realization.tsx">
                  <td className="py-3 px-4 font-medium" data-unique-id="fbd22d7c-3fd4-4a68-ad2f-e063aa568169" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.category}</td>
                  <td className="py-3 px-4 text-right" data-unique-id="10049929-c055-4f38-a038-cd53247be783" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="87ecaad4-9e4e-41e5-a756-f8edd727ddd1" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.budget.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-right" data-unique-id="c70f3986-1997-4b5b-baa2-bb64b6df15db" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dfe6bbf9-95e2-4f71-aec6-c172dd318c31" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.actual.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${item.variance >= 0 ? 'text-green-600' : 'text-red-600'}`} data-unique-id="2b71a90a-5d7a-4641-99f8-cf52d9d250f0" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
                    {item.variance >= 0 ? '+' : ''}<span className="editable-text" data-unique-id="7accac45-e152-4906-b69a-3098e1e3a440" data-file-name="components/accounting/budget-realization.tsx">Rp </span>{item.variance.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="16047d8c-bb14-4b19-8def-20c9a22c3983" data-file-name="components/accounting/budget-realization.tsx">
                    <div className="flex items-center justify-center" data-unique-id="1faa7783-e7a3-4ada-bbf2-297f30790a90" data-file-name="components/accounting/budget-realization.tsx">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2" data-unique-id="2b0b8411-0d90-46f3-8bb7-f56974d07319" data-file-name="components/accounting/budget-realization.tsx">
                        <div className={`h-2 rounded-full ${item.percentage >= 100 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${Math.min(item.percentage, 100)}%`
                    }} data-unique-id="4a03a8f5-0b22-4aa2-b666-e05d563097bc" data-file-name="components/accounting/budget-realization.tsx"></div>
                      </div>
                      <span className="text-sm font-medium" data-unique-id="ea200cf7-8c9d-4721-b435-4010bb5db27f" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.percentage.toFixed(1)}<span className="editable-text" data-unique-id="3b8cfb86-a703-4606-bf85-8f6098405579" data-file-name="components/accounting/budget-realization.tsx">%</span></span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="c499d2c1-0628-471c-b239-7207f9d70596" data-file-name="components/accounting/budget-realization.tsx">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(item.status)}`} data-unique-id="8acce16d-a6e0-4de4-b257-3be3206f9505" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="3665acc9-adcc-4fe6-9022-d656a34f2182" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="b4c6eca6-c87f-4047-b497-bb83d92e5b16" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="252545ca-5255-47fe-8697-d812f3eb6d71" data-file-name="components/accounting/budget-realization.tsx">Rencana Tindakan</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="18437b1f-c14d-42be-9fbe-3bf760aa7465" data-file-name="components/accounting/budget-realization.tsx">
          <div className="p-4 rounded-lg bg-red-50 border border-red-200" data-unique-id="1db6f627-52bb-43ad-ac2c-953d9d008c39" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2" data-unique-id="810a33fe-6c6b-4707-bea8-b7aca13147da" data-file-name="components/accounting/budget-realization.tsx">
              <AlertCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="1b461293-b4db-4ae6-8467-5f1d3e8ba919" data-file-name="components/accounting/budget-realization.tsx">
              Perlu Perhatian
            </span></h4>
            <ul className="text-sm text-red-700 space-y-1" data-unique-id="c6d1f0b1-c52a-4afb-b390-c164b7c68d11" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="16d65d3d-8471-4ffb-b3f2-cd6fbc3c7fda" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="777d15a5-1866-48a9-ab78-cc45ee710d53" data-file-name="components/accounting/budget-realization.tsx">• Pendapatan masih 19.4% di bawah target</span></li>
              <li data-unique-id="6a526b38-89db-44aa-b9f7-ec01e63cb7a2" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="c0bdc075-ad93-4e6e-b20a-0eefb33cbc89" data-file-name="components/accounting/budget-realization.tsx">• Perlu strategi pemasaran yang lebih agresif</span></li>
              <li data-unique-id="49d64b61-165d-4e91-837a-ade892c76b34" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="9c0e45fe-36f2-47ca-aee1-14d8b1c1033c" data-file-name="components/accounting/budget-realization.tsx">• Evaluasi harga jual produk</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="1a96b5b6-f611-47a1-9790-ecc69d41451a" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="d1cf3ce8-4ee2-45dd-a9df-108216555bc3" data-file-name="components/accounting/budget-realization.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="bf00a5d0-c303-4cec-bd85-b627edf6a392" data-file-name="components/accounting/budget-realization.tsx">
              Pencapaian Positif
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="c2b143db-cb7e-4876-8b72-de40eae43642" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="4709278a-a011-4d84-a3a9-28ae133bc235" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="cfa0dab2-9b63-49b3-abeb-552bb42730a3" data-file-name="components/accounting/budget-realization.tsx">• Pengeluaran operasional terkendali</span></li>
              <li data-unique-id="c64ccae4-5c04-4d4b-9e6c-aaa77f04f09f" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="250ee0a6-03ba-4398-8391-06b5f851cc93" data-file-name="components/accounting/budget-realization.tsx">• Efisiensi biaya gaji tercapai</span></li>
              <li data-unique-id="4a1dfeb8-c05d-4784-b154-555e57082c0f" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="5429fc9f-eaf1-45b2-a7c9-8591748c590d" data-file-name="components/accounting/budget-realization.tsx">• HPP sesuai target yang ditetapkan</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}