'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, TrendingDown, AlertCircle, Calendar, Download, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
type BudgetPeriod = '2024' | '2023';
export function BudgetRealization() {
  const [selectedPeriod, setSelectedPeriod] = useState<BudgetPeriod>('2024');
  const budgetData = [{
    category: 'Pendapatan',
    budget: 120000000,
    actual: 96700000,
    variance: -23300000,
    percentage: 80.6,
    status: 'below'
  }, {
    category: 'HPP',
    budget: 72000000,
    actual: 68690000,
    variance: 3310000,
    percentage: 95.4,
    status: 'good'
  }, {
    category: 'Biaya Operasional',
    budget: 15000000,
    actual: 13010000,
    variance: 1990000,
    percentage: 86.7,
    status: 'good'
  }, {
    category: 'Biaya Gaji',
    budget: 10000000,
    actual: 8000000,
    variance: 2000000,
    percentage: 80.0,
    status: 'good'
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
  return <div className="space-y-6" data-unique-id="53c2da5e-e191-4be0-90f4-29f77fc7fdfa" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="47afed94-fdd2-47d0-99f4-bf2438a12bb1" data-file-name="components/accounting/budget-realization.tsx">
        <div data-unique-id="580704d3-b1d7-4a32-b17c-245633a8fdd7" data-file-name="components/accounting/budget-realization.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="e32adc0a-94fd-4923-8a58-92fc9b452781" data-file-name="components/accounting/budget-realization.tsx">
            <Target className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="ab3247e6-c123-42a1-8a20-9891da23e0a8" data-file-name="components/accounting/budget-realization.tsx">
            Anggaran & Realisasi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="01c7e1d4-93b8-46b5-a251-067b5e43ab3d" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="e15d43a4-8e0d-4fd5-ba9e-c232b0c6d11c" data-file-name="components/accounting/budget-realization.tsx">Perbandingan anggaran dengan realisasi aktual</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="0b1c425d-e02f-4e6b-80c3-eb8e4b36e56f" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center gap-2" data-unique-id="62f7dcc2-b154-48da-ba4c-9dc481d1208b" data-file-name="components/accounting/budget-realization.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="d49e66ec-b587-413d-b2f2-bb3f502554d5" data-file-name="components/accounting/budget-realization.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as BudgetPeriod)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="8397445e-b165-454e-9035-7fc59e1a0cc3" data-file-name="components/accounting/budget-realization.tsx">
              <option value="2024" data-unique-id="0b2bac93-22b1-42c3-9214-fe632d7be20b" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="87cbb400-c296-41ff-b34b-aecc572cd059" data-file-name="components/accounting/budget-realization.tsx">2024</span></option>
              <option value="2023" data-unique-id="ed188030-20cf-416c-b29a-0511d39db93e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="48b029e5-5c1b-412f-9c55-f57d2ea37454" data-file-name="components/accounting/budget-realization.tsx">2023</span></option>
            </select>
          </div>
          
          <div className="flex gap-2" data-unique-id="fca14d60-62c2-438d-977d-0a58e1124464" data-file-name="components/accounting/budget-realization.tsx">
            <button onClick={() => alert('Tambah anggaran baru')} className="px-4 py-2 rounded-lg gradient-primary text-white font-semibold flex items-center gap-2" data-unique-id="656029cb-3fcf-4c8d-9e83-4ca116b45d00" data-file-name="components/accounting/budget-realization.tsx">
              <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="3687d644-953c-4852-8af4-37bc2b167fd4" data-file-name="components/accounting/budget-realization.tsx">
              Buat Anggaran
            </span></button>
            <button onClick={() => alert('Export laporan anggaran')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="bc77b672-9bcd-41ed-85a3-990c1f913917" data-file-name="components/accounting/budget-realization.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="4b575366-f4eb-40c4-b2a5-aa0dd41330a2" data-file-name="components/accounting/budget-realization.tsx">
              Export
            </span></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="8870f789-0324-435d-9f91-dad4ef80f0b9" data-file-name="components/accounting/budget-realization.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="3fb06326-4405-4fd0-883b-eca72907e2a0" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="281a523a-ab69-4349-9a14-44875f94b345" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="da2cb39b-b0b4-48a5-a15b-20c36117d695" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="88a4a658-7641-4297-9a0a-4e2c055b2427" data-file-name="components/accounting/budget-realization.tsx">Total Anggaran</span></h3>
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="fc0bbe40-a6e0-4bbc-9986-cabebe8a52cf" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8e807713-6362-4208-afac-2fc9435112dd" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="524f9d80-7885-4d2d-acfa-3e6ab415437a" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="029edffb-fc7b-4c88-b90d-db723137056f" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="65bc3abc-385f-4bda-a01b-ff2f6b2c5dd5" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="e04fdc41-7cba-4132-9bad-94659a762cc1" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="ecabfdef-1063-4a65-b4ab-c11a25e45ae4" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b0574aac-ca06-4748-9dc3-8b54f2752c57" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="5c736521-3e3b-46e1-950f-921a8be9660f" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="c031dbeb-6146-4462-965a-598b011bcaae" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="5a2224cf-1f38-4d13-afd8-bfe25783c883" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="86ef57a3-6ae9-4aae-bae2-6354ec7f33f4" data-file-name="components/accounting/budget-realization.tsx">Varians</span></h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600" data-unique-id="e367e58f-2586-4c2f-a0e9-b3c8e7b188e4" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="647abad1-69fc-4cee-91a0-c30748adec45" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="972db24a-9971-4dd2-b2ba-df21e4a26fe1" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="1daf56a2-2c2f-4a81-a4e6-c5179ad93d48" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="af8a65ef-ba9f-4537-bce7-d2c62fe55894" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="7090f17c-458b-442b-97d7-f4cc71b61158" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="df64809c-94b1-4fea-8e57-6f856208a2da" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="5d256b71-1e57-4d4e-afd2-380951c9f1ee" data-file-name="components/accounting/budget-realization.tsx">80.6%</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="b313f14a-93ad-4090-9227-6a88136dafbb" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
        {/* Monthly Trend */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="1f58cb72-0c8f-4217-9228-b431f257bd3d" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="76674c32-bbaf-43fa-a671-014285f3c8fa" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="36ae2d5e-3f29-4cd3-ba36-96f5859f5313" data-file-name="components/accounting/budget-realization.tsx">Tren Bulanan Anggaran vs Realisasi</span></h3>
          <div className="h-80" data-unique-id="daefaaf3-f731-478b-bfd4-1026ad2921d0" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="8b627624-9894-490e-9ada-613f5d395016" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="464893a6-1656-4dbb-bbbd-53df2afc3115" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="31cf04bc-3e77-435b-9585-19b7df1dedb7" data-file-name="components/accounting/budget-realization.tsx">Breakdown Pengeluaran</span></h3>
          <div className="h-80" data-unique-id="e5cdfa69-7dc2-43d5-a8ca-db6a54ccc755" data-file-name="components/accounting/budget-realization.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100} dataKey="actual" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {expenseBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="951dbc6e-af15-45df-bd18-a6869f884008" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="41bce83c-733b-4c77-aa1c-49d340c3c81e" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="5808c5cd-fb0c-4db7-8cda-eaab3dfedca1" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="4b777185-86c9-4d96-b8cb-60d82c11da5b" data-file-name="components/accounting/budget-realization.tsx">Detail Anggaran vs Realisasi</span></h3>
        <div className="overflow-x-auto" data-unique-id="434f4e2e-6f49-42ea-951c-a688b3331222" data-file-name="components/accounting/budget-realization.tsx">
          <table className="w-full" data-unique-id="6f464cac-6dfb-46e1-b947-8f10ff833230" data-file-name="components/accounting/budget-realization.tsx">
            <thead data-unique-id="43cf08ce-6c2b-4ca8-8018-74b9763a2fbd" data-file-name="components/accounting/budget-realization.tsx">
              <tr className="border-b border-border" data-unique-id="2c647279-8a27-4fba-b987-1c9798bfd9ab" data-file-name="components/accounting/budget-realization.tsx">
                <th className="text-left py-3 px-4 font-medium" data-unique-id="1b3234c7-7267-4a4b-b76c-f8e2157517e4" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="f1e5a3c6-f4ec-44e6-b826-576589753ed2" data-file-name="components/accounting/budget-realization.tsx">Kategori</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="4351ed56-6947-46c2-a610-b73521458991" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="9fa24b5f-f3ed-489f-a412-23db64c916f2" data-file-name="components/accounting/budget-realization.tsx">Anggaran</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="2cebc765-bf81-48c0-b07c-33432fc3a632" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b097d12f-b010-4f76-89c5-ec2f46f569b8" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="0883870e-e147-4020-8c9d-c420e1e6fe88" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="c0507414-51a7-4775-a607-494e91bebe19" data-file-name="components/accounting/budget-realization.tsx">Varians</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="08b9d82b-dd9b-4479-aa37-4397e6692c5e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="50d14100-22ed-4bbd-896e-8beeab5056e8" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="f07492fc-c284-4114-883b-bc7223a1c758" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="4d2df203-d8a2-4f92-94b6-21cbfdb20c6a" data-file-name="components/accounting/budget-realization.tsx">Status</span></th>
              </tr>
            </thead>
            <tbody data-unique-id="82c02860-0fee-4d39-bf7a-d65cf90768b7" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
              {budgetData.map((item, index) => <motion.tr key={item.category} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="908bff69-c9a3-4f27-aba6-a7b085b0e18b" data-file-name="components/accounting/budget-realization.tsx">
                  <td className="py-3 px-4 font-medium" data-unique-id="0faf369f-612c-4b35-9692-50ce09e82e69" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.category}</td>
                  <td className="py-3 px-4 text-right" data-unique-id="f07b6180-fe0d-437c-a9d5-7b070a14f5aa" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7a8f24b3-74a8-4e22-9d9d-059cf3e29bab" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.budget.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-right" data-unique-id="bb02566a-d243-4709-b665-30e847044c7a" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8f45f43f-d301-4187-be62-8ba4ad90c542" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.actual.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${item.variance >= 0 ? 'text-green-600' : 'text-red-600'}`} data-unique-id="8f1f16a6-fdf0-4fe7-ba5f-88d04c748539" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
                    {item.variance >= 0 ? '+' : ''}<span className="editable-text" data-unique-id="38466512-a64b-4a35-b8ab-02597f2d6de7" data-file-name="components/accounting/budget-realization.tsx">Rp </span>{item.variance.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="f25f29d7-68ba-4226-a346-1f4e49374473" data-file-name="components/accounting/budget-realization.tsx">
                    <div className="flex items-center justify-center" data-unique-id="ee7b3e98-3106-44b5-ba79-67fdb134a993" data-file-name="components/accounting/budget-realization.tsx">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2" data-unique-id="8771cfe2-f8b4-450c-af45-aed4cbc5a8cb" data-file-name="components/accounting/budget-realization.tsx">
                        <div className={`h-2 rounded-full ${item.percentage >= 100 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${Math.min(item.percentage, 100)}%`
                    }} data-unique-id="6496b882-779d-4d61-aa73-fb4ca9d37465" data-file-name="components/accounting/budget-realization.tsx"></div>
                      </div>
                      <span className="text-sm font-medium" data-unique-id="a7e36405-4988-483a-89e3-964e73e1de34" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.percentage.toFixed(1)}<span className="editable-text" data-unique-id="4af73373-d1d8-4ae8-9406-bae33a142aa9" data-file-name="components/accounting/budget-realization.tsx">%</span></span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="9dcad273-b0d6-492f-8846-164e305975d4" data-file-name="components/accounting/budget-realization.tsx">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(item.status)}`} data-unique-id="6822d35c-d177-426b-a9f7-d9ec279779b9" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="8e54fffb-cbb9-416b-813a-eed6fa77e721" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="f6f6a4a5-50e4-400e-bcf6-06ef841d7ba3" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="045e89c0-91ea-4978-af1f-1791203d8912" data-file-name="components/accounting/budget-realization.tsx">Rencana Tindakan</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="ad083b77-69c8-4d19-a3f0-6b4472a4d673" data-file-name="components/accounting/budget-realization.tsx">
          <div className="p-4 rounded-lg bg-red-50 border border-red-200" data-unique-id="d7e6d5fb-847a-4321-8504-b34221df3bd5" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2" data-unique-id="ce6b2bb0-d54a-4477-9c80-970270a66d10" data-file-name="components/accounting/budget-realization.tsx">
              <AlertCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="3c0e0d8b-5f6b-4538-afad-6696a068d449" data-file-name="components/accounting/budget-realization.tsx">
              Perlu Perhatian
            </span></h4>
            <ul className="text-sm text-red-700 space-y-1" data-unique-id="1a2a74e0-5baf-41ac-aa4a-5a7f7e626723" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="d7068600-7148-4d96-8725-3b3efbca4508" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="df9c0932-85a8-49ee-b82f-db576ffa3332" data-file-name="components/accounting/budget-realization.tsx">• Pendapatan masih 19.4% di bawah target</span></li>
              <li data-unique-id="b2be0031-c7e2-4274-aa37-26976b4fabe0" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b60cf359-64fb-4f63-9859-de90f0db9387" data-file-name="components/accounting/budget-realization.tsx">• Perlu strategi pemasaran yang lebih agresif</span></li>
              <li data-unique-id="d96f83e5-971a-4e32-9f27-f3abf33f02e8" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b2a8e61e-51e7-4748-a600-6473e227e6db" data-file-name="components/accounting/budget-realization.tsx">• Evaluasi harga jual produk</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="92e63e95-ebc1-4287-a801-d51620bcfd85" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="d3f1ab98-4979-4547-981b-dd96da6a7afd" data-file-name="components/accounting/budget-realization.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="f62877f2-dcb8-42a9-bc66-04a0cc752766" data-file-name="components/accounting/budget-realization.tsx">
              Pencapaian Positif
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="4eaf9353-878c-4fe9-acf8-c6aee2d1600e" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="da38ad29-5f7f-4ced-8fac-34c58231614d" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="fc9d66d3-891e-40bf-b4fa-97c122e87b74" data-file-name="components/accounting/budget-realization.tsx">• Pengeluaran operasional terkendali</span></li>
              <li data-unique-id="068b2a79-6473-45b5-8e54-ee61d6f9a47d" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b60141ff-1ebe-4625-91ef-54d248675dc3" data-file-name="components/accounting/budget-realization.tsx">• Efisiensi biaya gaji tercapai</span></li>
              <li data-unique-id="ab40e66e-6323-4f98-b441-170a28abf7bd" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="d9ae716c-f38e-4a2c-b7cc-14bfbdd4ef33" data-file-name="components/accounting/budget-realization.tsx">• HPP sesuai target yang ditetapkan</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}