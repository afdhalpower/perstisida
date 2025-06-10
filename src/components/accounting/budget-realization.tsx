'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, TrendingDown, AlertCircle, Calendar, Download, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
type BudgetPeriod = '2024' | '2023';
export function BudgetRealization() {
  const [selectedPeriod, setSelectedPeriod] = useState<BudgetPeriod>('2024');
  const budgetData = [{
    category: 'Pendapatan Penjualan',
    budget: 120000000,
    actual: 96700000,
    variance: -23300000,
    percentage: 80.6,
    status: 'below',
    subcategories: [{
      name: 'Penjualan Tunai',
      budget: 80000000,
      actual: 65000000
    }, {
      name: 'Penjualan Kredit',
      budget: 40000000,
      actual: 31700000
    }]
  }, {
    category: 'Harga Pokok Penjualan',
    budget: 72000000,
    actual: 68690000,
    variance: 3310000,
    percentage: 95.4,
    status: 'good',
    subcategories: [{
      name: 'Pembelian Barang',
      budget: 65000000,
      actual: 62000000
    }, {
      name: 'Biaya Angkut',
      budget: 7000000,
      actual: 6690000
    }]
  }, {
    category: 'Biaya Operasional',
    budget: 15000000,
    actual: 13010000,
    variance: 1990000,
    percentage: 86.7,
    status: 'good',
    subcategories: [{
      name: 'Sewa Toko',
      budget: 6000000,
      actual: 6000000
    }, {
      name: 'Listrik & Air',
      budget: 3000000,
      actual: 2510000
    }, {
      name: 'Komunikasi',
      budget: 2000000,
      actual: 1800000
    }, {
      name: 'Transportasi',
      budget: 4000000,
      actual: 2700000
    }]
  }, {
    category: 'Biaya Gaji & Tunjangan',
    budget: 10000000,
    actual: 8000000,
    variance: 2000000,
    percentage: 80.0,
    status: 'good',
    subcategories: [{
      name: 'Gaji Pokok',
      budget: 7000000,
      actual: 6000000
    }, {
      name: 'Tunjangan',
      budget: 2000000,
      actual: 1500000
    }, {
      name: 'Bonus',
      budget: 1000000,
      actual: 500000
    }]
  }, {
    category: 'Biaya Pemasaran',
    budget: 8000000,
    actual: 6500000,
    variance: 1500000,
    percentage: 81.3,
    status: 'good',
    subcategories: [{
      name: 'Iklan & Promosi',
      budget: 5000000,
      actual: 4000000
    }, {
      name: 'Event & Pameran',
      budget: 3000000,
      actual: 2500000
    }]
  }];
  const monthlyBudget = [{
    month: 'Jan',
    budget: 10000000,
    actual: 8500000,
    variance: -1500000
  }, {
    month: 'Feb',
    budget: 10000000,
    actual: 12200000,
    variance: 2200000
  }, {
    month: 'Mar',
    budget: 10000000,
    actual: 15800000,
    variance: 5800000
  }, {
    month: 'Apr',
    budget: 10000000,
    actual: 9300000,
    variance: -700000
  }, {
    month: 'May',
    budget: 10000000,
    actual: 11800000,
    variance: 1800000
  }, {
    month: 'Jun',
    budget: 10000000,
    actual: 14200000,
    variance: 4200000
  }];
  const expenseBreakdown = [{
    name: 'HPP',
    budgeted: 72000000,
    actual: 68690000,
    color: '#059669'
  }, {
    name: 'Gaji',
    budgeted: 10000000,
    actual: 8000000,
    color: '#10b981'
  }, {
    name: 'Operasional',
    budgeted: 15000000,
    actual: 13010000,
    color: '#34d399'
  }, {
    name: 'Lain-lain',
    budgeted: 3000000,
    actual: 2300000,
    color: '#6ee7b7'
  }];
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
  return <div className="space-y-6" data-unique-id="c4b28c3f-a377-40c7-92b5-5937cb90b164" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="3171aa26-51b2-4803-af03-843d3732ce0a" data-file-name="components/accounting/budget-realization.tsx">
        <div data-unique-id="ef26bc19-47e5-43cb-af0d-07e6397ea2c9" data-file-name="components/accounting/budget-realization.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="25d6a9e4-8ff6-464c-88bf-a78cecdc8ad0" data-file-name="components/accounting/budget-realization.tsx">
            <Target className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="7aebc941-fcb1-45d6-afaa-b3e8b5ae69a0" data-file-name="components/accounting/budget-realization.tsx">
            Anggaran & Realisasi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="fe6da546-ada1-4ef7-9aa7-d8b6f2d4849a" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="d767d943-ad33-45fb-93cc-ba27ea725ae8" data-file-name="components/accounting/budget-realization.tsx">Perbandingan anggaran dengan realisasi aktual</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="69a060d0-92b6-40d7-887b-6415ca3f69f9" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center gap-2" data-unique-id="3e1b33cb-9041-4fc2-a7c4-11ce59c8314a" data-file-name="components/accounting/budget-realization.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="cb775c13-696b-4314-bdc0-4f5b90062bb6" data-file-name="components/accounting/budget-realization.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as BudgetPeriod)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="57263278-5c7d-483d-ba6d-c8d04df9e0bd" data-file-name="components/accounting/budget-realization.tsx">
              <option value="2024" data-unique-id="0b94d3df-0ffd-4da6-8f80-86705e4ac045" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="78ce605f-aec6-468a-8487-67ead641e1c0" data-file-name="components/accounting/budget-realization.tsx">2024</span></option>
              <option value="2023" data-unique-id="be0781b7-625f-4389-b80a-04ff3f90e2f9" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="a2b4f256-5209-4503-8ebf-be114b931eb0" data-file-name="components/accounting/budget-realization.tsx">2023</span></option>
            </select>
          </div>
          
          <div className="flex gap-2" data-unique-id="aecf5e66-cda0-40bd-a3f0-d99ce8debfcc" data-file-name="components/accounting/budget-realization.tsx">
            <button onClick={() => alert('Tambah anggaran baru')} className="px-4 py-2 rounded-lg gradient-primary text-white font-semibold flex items-center gap-2" data-unique-id="1d5ebe38-3f89-468e-b1d2-e747b43cf0a2" data-file-name="components/accounting/budget-realization.tsx">
              <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="8ebab788-bb27-4eaf-bcdc-e7e3439e6908" data-file-name="components/accounting/budget-realization.tsx">
              Buat Anggaran
            </span></button>
            <button onClick={() => alert('Export laporan anggaran')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="dba6d95c-d8c1-4e64-90a3-d06d8997a197" data-file-name="components/accounting/budget-realization.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="fe544722-833c-43de-9e1c-e781353784b7" data-file-name="components/accounting/budget-realization.tsx">
              Export
            </span></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="1d33fc18-d284-4348-829c-56110c877623" data-file-name="components/accounting/budget-realization.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="a4b2e8e0-0976-4d7d-9cef-a758c018e30f" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="04e4a1d4-3ec2-4b41-aee2-5c2ee4388c7d" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="f37b2fb7-1c8f-4cd0-b877-fa3eccedb209" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="67769e5a-e5b9-4858-99ed-1a568653d6da" data-file-name="components/accounting/budget-realization.tsx">Total Anggaran</span></h3>
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="51a6a69a-c347-46f9-8e39-0606d01278d3" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="91412b57-b554-4be0-b26f-4ae14c131fde" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="173d476a-3138-44ce-9ec8-66cbfce8c20c" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="06f4706b-8e52-469a-8458-4b05cadc4ea2" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="b1c398c5-34c0-4abc-a83b-c82efbf462b7" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="afcc8308-9af1-4603-8da2-2c079e575787" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="fa1902bd-5310-40dc-a9f7-b397cb3d3e04" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e86c9849-5d1b-468b-9618-6b594378e5b2" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="5ec4cbb5-bf3f-4be6-8cb4-3f85a49a36ed" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="0965ec15-3f27-4a40-86fe-093da786ce7a" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="336d6636-cc0f-43de-8ff6-cd2e483684d6" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="87c171ea-cea7-4ce1-adcc-87b42395f174" data-file-name="components/accounting/budget-realization.tsx">Varians</span></h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600" data-unique-id="0934d571-06a4-4859-a77a-a46cd4b32d21" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="82a6592f-d3ae-425a-8dbe-9c3b66d21eba" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="5892d895-24d6-4013-a7ee-88bdc0f763f0" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="d7fdc143-f888-4698-8871-4cb8edc3a2f3" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="b49a066b-96a1-404a-a4a8-c31f35db549b" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="4746c8a3-7b70-46f0-b7ce-52efc22d7fce" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="1e6e2c65-f494-4f78-9f8f-b2af33dfdde0" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="7d56f3e8-38d7-4d48-9a92-1f835abe5328" data-file-name="components/accounting/budget-realization.tsx">80.6%</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="5371d7a2-c3a3-47fb-9b5e-30b79802e57c" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
        {/* Monthly Trend */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="b5718eb1-1f04-43fd-83f5-09cfa8d4e0f2" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="12a84d78-c639-4f74-9106-3bf077b18187" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="5754d918-a884-4484-a375-c8d1f2191413" data-file-name="components/accounting/budget-realization.tsx">Tren Bulanan Anggaran vs Realisasi</span></h3>
          <div className="h-80" data-unique-id="afb0e8fd-e804-4c6e-9710-cc8d9a016024" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="b3f87b5d-f224-418d-81b8-074de633d2d2" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="b1acf651-2d29-47af-8bcd-919417dfa70d" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="a118bce7-d06d-44db-8079-c82d6b58a15e" data-file-name="components/accounting/budget-realization.tsx">Breakdown Pengeluaran</span></h3>
          <div className="h-80" data-unique-id="8a959d2b-e287-4030-945a-e0414dc857fa" data-file-name="components/accounting/budget-realization.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100} dataKey="actual" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {expenseBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="60c7297c-267f-4a92-b562-6b0ceed522fe" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="59ccd773-e92c-4f85-96c6-3eafb9a36a57" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="f3b4e9e7-a065-4a8d-9cd5-837d7a81e0dd" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="4d597280-7a1e-4786-aac1-35fcbce3a7b5" data-file-name="components/accounting/budget-realization.tsx">Detail Anggaran vs Realisasi</span></h3>
        <div className="overflow-x-auto" data-unique-id="2f9577b7-76b6-4db1-903f-4a43c9c4d262" data-file-name="components/accounting/budget-realization.tsx">
          <table className="w-full" data-unique-id="a6d84c3d-9f06-49e4-8386-c0ef6f53d7df" data-file-name="components/accounting/budget-realization.tsx">
            <thead data-unique-id="ad8e116f-ce09-4e26-9f2e-d3ec7dbf7051" data-file-name="components/accounting/budget-realization.tsx">
              <tr className="border-b border-border" data-unique-id="6d7db607-3010-4bfe-b038-cd50b1004cff" data-file-name="components/accounting/budget-realization.tsx">
                <th className="text-left py-3 px-4 font-medium" data-unique-id="a663331e-5ae8-439d-a3a4-51d6c879993c" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="294ebecb-1ce1-440a-a6d4-fbd962f0e0f6" data-file-name="components/accounting/budget-realization.tsx">Kategori</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="096658ff-0172-4d88-9626-3779882fb904" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="9d9586d1-32ff-430d-9c91-9ea274f46e45" data-file-name="components/accounting/budget-realization.tsx">Anggaran</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="09ea6ee2-508b-4d6f-9af0-2723d7899514" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="ceac0b1e-f606-454a-baaf-dd72e069e42d" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="67dbf43c-d9db-4563-9da2-6675283332f5" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="559530bf-b842-4979-bb9c-10fe7d8c955e" data-file-name="components/accounting/budget-realization.tsx">Varians</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="51d1cea4-bfc1-4ca3-8a5e-7b682a30a815" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="c1fe74a5-6494-4f46-a555-b09c1630e57b" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="acf95582-61cc-4b33-a9ac-fe12435f88e1" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="14c4f210-9ee3-49ce-b5f1-ebc14fc04125" data-file-name="components/accounting/budget-realization.tsx">Status</span></th>
              </tr>
            </thead>
            <tbody data-unique-id="b4534ab9-d40c-49d1-b993-ad41e5202804" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
              {budgetData.map((item, index) => <motion.tr key={item.category} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="680803ad-54bc-4ed3-a01a-c53b5cfa8bc3" data-file-name="components/accounting/budget-realization.tsx">
                  <td className="py-3 px-4 font-medium" data-unique-id="3ef540e2-1454-41cf-bfd1-2627c562b0d3" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.category}</td>
                  <td className="py-3 px-4 text-right" data-unique-id="57ef1a88-6b68-45de-adb3-8f0c95a12e41" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="43385514-e05e-4331-b535-18fed510fd34" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.budget.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-right" data-unique-id="d8dc30c7-b9bd-48ad-be0f-5a4e1d04f741" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6b30e329-76b8-4b52-8fd9-85273784e50c" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.actual.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${item.variance >= 0 ? 'text-green-600' : 'text-red-600'}`} data-unique-id="5d793ae7-7186-44e6-9106-43b05852023b" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
                    {item.variance >= 0 ? '+' : ''}<span className="editable-text" data-unique-id="059cf429-2c37-46c2-9d43-b4029102331d" data-file-name="components/accounting/budget-realization.tsx">Rp </span>{item.variance.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="7ae9d6a2-e54f-4a60-acc3-3d5d37c056da" data-file-name="components/accounting/budget-realization.tsx">
                    <div className="flex items-center justify-center" data-unique-id="7a7b19cb-c075-4fdd-9b03-71fd4dffdee7" data-file-name="components/accounting/budget-realization.tsx">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2" data-unique-id="0f489838-a2ea-4897-9c81-030eb6862c93" data-file-name="components/accounting/budget-realization.tsx">
                        <div className={`h-2 rounded-full ${item.percentage >= 100 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${Math.min(item.percentage, 100)}%`
                    }} data-unique-id="8a7a09e8-7374-4256-8992-ab5f8d3bf32b" data-file-name="components/accounting/budget-realization.tsx"></div>
                      </div>
                      <span className="text-sm font-medium" data-unique-id="db53cbbc-1887-440e-a3e4-cfc94d8f8661" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.percentage.toFixed(1)}<span className="editable-text" data-unique-id="fb556428-26f4-4b73-8c28-ff256adfbaed" data-file-name="components/accounting/budget-realization.tsx">%</span></span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="fdea19ed-e0a3-4fa7-9bdb-77a3e7f3b398" data-file-name="components/accounting/budget-realization.tsx">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(item.status)}`} data-unique-id="19c59e27-21ed-4193-8172-e277f1f7dc3d" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="7840a348-2486-4440-9e1f-ce0e6305210e" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="8a4a55f4-ee74-4772-9c8d-84a36a7090a0" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b906f663-6c57-4e54-a9a7-570ff2244999" data-file-name="components/accounting/budget-realization.tsx">Rencana Tindakan</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="e3d300ad-684b-4cea-979a-43c601ae3256" data-file-name="components/accounting/budget-realization.tsx">
          <div className="p-4 rounded-lg bg-red-50 border border-red-200" data-unique-id="258bfdcb-7405-44fa-a490-365557b6a588" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2" data-unique-id="ecf85562-496d-48ba-bbbc-35c7f3542a23" data-file-name="components/accounting/budget-realization.tsx">
              <AlertCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="c16f3bad-17f7-454f-a6b8-fa5b04865e1e" data-file-name="components/accounting/budget-realization.tsx">
              Perlu Perhatian
            </span></h4>
            <ul className="text-sm text-red-700 space-y-1" data-unique-id="94cdc6ab-249d-4e42-bfbd-7f87fc980d36" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="22504211-353f-495c-af84-5474d216260d" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="6efb13cc-5d7a-414c-85d1-a7c01146c22b" data-file-name="components/accounting/budget-realization.tsx">• Pendapatan masih 19.4% di bawah target</span></li>
              <li data-unique-id="2f6d03b8-8df3-4522-9aa0-0cfda1d02ecf" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="359c69cf-a3a9-44e1-866b-7cbb587012c2" data-file-name="components/accounting/budget-realization.tsx">• Perlu strategi pemasaran yang lebih agresif</span></li>
              <li data-unique-id="aa5a681d-d206-40e3-bb12-4446d19277a1" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="ea1c170d-4e0e-4065-b801-7811a7708503" data-file-name="components/accounting/budget-realization.tsx">• Evaluasi harga jual produk</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="1bf7e8dd-2a13-40e8-a2b8-b828b5dea1f0" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="d3d122f7-b7d1-4eae-9557-13ca64f30fce" data-file-name="components/accounting/budget-realization.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="cc3ff0f4-5e28-4a4c-9220-c24ec3df4704" data-file-name="components/accounting/budget-realization.tsx">
              Pencapaian Positif
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="2e4a6561-33ab-4eef-9348-674504522cf4" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="ba3cb1c2-bc42-492e-ac86-d0f953ae74bd" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="5cfb0c17-62dd-460e-b027-5562ae35e40d" data-file-name="components/accounting/budget-realization.tsx">• Pengeluaran operasional terkendali</span></li>
              <li data-unique-id="ea10ebcb-83a0-4fa7-b346-c24ac0761621" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="8e7812d3-5f21-4f55-b03b-d7afe47bb285" data-file-name="components/accounting/budget-realization.tsx">• Efisiensi biaya gaji tercapai</span></li>
              <li data-unique-id="142b1f42-d0be-4aa7-bbb6-bb5dcaf84dd8" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="a6aa2730-c274-4290-8675-3836c9cb7ba0" data-file-name="components/accounting/budget-realization.tsx">• HPP sesuai target yang ditetapkan</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}