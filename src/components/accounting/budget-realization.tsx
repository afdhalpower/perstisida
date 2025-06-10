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
  return <div className="space-y-6" data-unique-id="2173482d-6a23-41fb-8b63-aba6bd516c16" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="6dfb7df6-09f7-4d4a-a767-4b15d5d060e9" data-file-name="components/accounting/budget-realization.tsx">
        <div data-unique-id="74f587d7-9c60-4867-8aca-3e964e763312" data-file-name="components/accounting/budget-realization.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="9ea329ea-c4b7-442d-a0b1-87906032e452" data-file-name="components/accounting/budget-realization.tsx">
            <Target className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="14f37705-7d08-41fb-b124-b6dbb5dfadd1" data-file-name="components/accounting/budget-realization.tsx">
            Anggaran & Realisasi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="3a98f199-e9ce-4cc4-bb14-36b399fdb4e2" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="6c684060-4a79-41a1-bc0a-d01211ebf4a5" data-file-name="components/accounting/budget-realization.tsx">Perbandingan anggaran dengan realisasi aktual</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="be7a7a04-150b-4f47-969f-9221e44d8b0c" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center gap-2" data-unique-id="7da8b5fa-466d-49a5-a9c4-a9c31ef3eec7" data-file-name="components/accounting/budget-realization.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="cfbea6c4-81a4-47de-8ade-6648c41a93f5" data-file-name="components/accounting/budget-realization.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as BudgetPeriod)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="831740c3-6065-4fa3-a07e-72d3b6fb354c" data-file-name="components/accounting/budget-realization.tsx">
              <option value="2024" data-unique-id="948ffa4f-f6bc-4da7-b361-0e5451b3e606" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b110198d-cad1-46a2-9e66-f1964bc42f4f" data-file-name="components/accounting/budget-realization.tsx">2024</span></option>
              <option value="2023" data-unique-id="e9482982-a68d-45ad-accf-1670955b18e3" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="e2e0d9e0-bd46-444f-b19a-2a146de9a4d5" data-file-name="components/accounting/budget-realization.tsx">2023</span></option>
            </select>
          </div>
          
          <div className="flex gap-2" data-unique-id="4146b044-3d52-4a04-915f-5999c0dd99b3" data-file-name="components/accounting/budget-realization.tsx">
            <button onClick={() => alert('Tambah anggaran baru')} className="px-4 py-2 rounded-lg gradient-primary text-white font-semibold flex items-center gap-2" data-unique-id="cdabdb19-dfdb-431b-b75e-303d071e4d5c" data-file-name="components/accounting/budget-realization.tsx">
              <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="6df22432-280b-4429-8317-13d04cbab4dd" data-file-name="components/accounting/budget-realization.tsx">
              Buat Anggaran
            </span></button>
            <button onClick={() => alert('Export laporan anggaran')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="869cbb02-db69-4bee-aaac-c8bcd9ddde49" data-file-name="components/accounting/budget-realization.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="fcd2d1af-2e87-400e-bdef-77ce1a0bf3f0" data-file-name="components/accounting/budget-realization.tsx">
              Export
            </span></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="2ff35481-17c9-4b7f-a49d-a4d5ec520c63" data-file-name="components/accounting/budget-realization.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="34dde798-3339-4455-9a69-341b0254ef7f" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="732d851c-520e-4310-b968-64c73c58eff8" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="2f49ad66-247f-4e1c-b06b-2a5b31ddb6d9" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="300458d5-f035-478c-ba41-6e115bc94510" data-file-name="components/accounting/budget-realization.tsx">Total Anggaran</span></h3>
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600" data-unique-id="3f8febfe-5924-4a4e-b882-8b2a07bdd5d2" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0cf8a8a9-8968-48f9-b088-abe9922c5281" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="5b955f41-21f6-4078-9ccf-ab8af0f5cf63" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="34d29afe-5afa-491f-9ecf-553eadd46f48" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="99a801ca-b76f-4380-80df-97e667205b7b" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="62125c7e-d545-4ce3-bfc8-4dad027efc05" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600" data-unique-id="a6db17a0-0484-416a-b51e-f2c6bfa35241" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dbb205e3-a252-4096-8b88-dc63ae5bdb3e" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="3f27b5de-9f17-4cf9-868f-41605df08c38" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="4dff3ed1-fcc3-4a3f-8f0f-cf3afe5d0e26" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="8836e5c4-3340-4f2f-af0d-138da84125b6" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="4eece7b0-7b8a-4cc2-902d-34d8825d2219" data-file-name="components/accounting/budget-realization.tsx">Varians</span></h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600" data-unique-id="804c4f2f-549d-4288-bb55-76abc0bc39c2" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="493e3080-dbe2-498f-aae9-bf17693dd65d" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="1f3b9aa0-79f8-4642-9401-59d8eb85dcbd" data-file-name="components/accounting/budget-realization.tsx">
          <div className="flex items-center justify-between mb-2" data-unique-id="e2b7e369-4beb-42b4-a7d2-9d64b2b236cd" data-file-name="components/accounting/budget-realization.tsx">
            <h3 className="font-semibold text-muted-foreground" data-unique-id="a96eab15-1b9d-4b3a-8835-3d46d114fa03" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="d0fda997-363d-4bb5-a2b1-c640752156db" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600" data-unique-id="b02c6bf6-c8a0-4859-8ef6-e0dbf8525892" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="813a7880-47c9-43f5-841c-20248b637026" data-file-name="components/accounting/budget-realization.tsx">80.6%</span></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="f07ab811-25e2-4973-9555-9bc86f204945" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
        {/* Monthly Trend */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="glass-effect rounded-2xl p-6" data-unique-id="74257841-872a-4290-be56-075fbc48a081" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="d878561b-66e6-427b-bb44-7b6f69547d8e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="9129fe8a-ecfb-47ae-ae16-a752b8ea7aaf" data-file-name="components/accounting/budget-realization.tsx">Tren Bulanan Anggaran vs Realisasi</span></h3>
          <div className="h-80" data-unique-id="2c6cf9c6-73c5-4ea9-a6e3-cd1ac48aca71" data-file-name="components/accounting/budget-realization.tsx">
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
      }} className="glass-effect rounded-2xl p-6" data-unique-id="b326559e-97f6-48f0-9794-3107f690ee26" data-file-name="components/accounting/budget-realization.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="1508ad91-2dea-4051-a5bb-05df0de69cfa" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="077bede5-6bca-445f-a902-91fea95f9d50" data-file-name="components/accounting/budget-realization.tsx">Breakdown Pengeluaran</span></h3>
          <div className="h-80" data-unique-id="b8143511-d2ae-4743-bbac-6c7f37a5da8a" data-file-name="components/accounting/budget-realization.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100} dataKey="actual" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {expenseBreakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="9297bcd5-11b4-4c29-914c-7bcbf960d047" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="618056b6-f045-409f-830f-d4c77e57d17d" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="c29f62c1-811c-4a0b-ba4b-0d0fa3a9db80" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b0a4dbce-58c3-489e-bd75-a20b6cd47ada" data-file-name="components/accounting/budget-realization.tsx">Detail Anggaran vs Realisasi</span></h3>
        <div className="overflow-x-auto" data-unique-id="90d26b2e-aec6-464c-9600-e201e797f53a" data-file-name="components/accounting/budget-realization.tsx">
          <table className="w-full" data-unique-id="5481895f-a70d-4e16-aebc-f45b61bb0742" data-file-name="components/accounting/budget-realization.tsx">
            <thead data-unique-id="c6414ab8-9f21-4a71-a361-c3c4d3140231" data-file-name="components/accounting/budget-realization.tsx">
              <tr className="border-b border-border" data-unique-id="a18b2f7a-0a52-4fed-9f30-358d9237cd77" data-file-name="components/accounting/budget-realization.tsx">
                <th className="text-left py-3 px-4 font-medium" data-unique-id="7134b22e-f21c-4a3c-96ea-fdc9c91176e1" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="aa0eeb02-d8cc-4bf3-96d1-3f0acf58c236" data-file-name="components/accounting/budget-realization.tsx">Kategori</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="b59ec1ae-9e07-4b80-a5e2-dec5f2ebcf02" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="16bcc52a-3955-48c1-8b12-e0118d009eed" data-file-name="components/accounting/budget-realization.tsx">Anggaran</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="327a329a-9992-4024-a510-b956255c33d0" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="82c875ae-60be-4b5c-8d23-87bb99be3aa7" data-file-name="components/accounting/budget-realization.tsx">Realisasi</span></th>
                <th className="text-right py-3 px-4 font-medium" data-unique-id="fc59485c-0413-4759-b1b9-4af1050e3968" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="5e49b4ba-7c48-4e49-95de-f725f4c5d13a" data-file-name="components/accounting/budget-realization.tsx">Varians</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="02c606e0-115a-4699-9aaa-37636e61f9bc" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="8b04c619-1583-44be-b403-6784738efac9" data-file-name="components/accounting/budget-realization.tsx">% Pencapaian</span></th>
                <th className="text-center py-3 px-4 font-medium" data-unique-id="f4472927-9735-424a-a1b3-f1e1a8084c38" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="fe4569a0-985a-400e-ab30-339354217479" data-file-name="components/accounting/budget-realization.tsx">Status</span></th>
              </tr>
            </thead>
            <tbody data-unique-id="86a3d3b4-a521-4650-89f2-69b83df86b86" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
              {budgetData.map((item, index) => <motion.tr key={item.category} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="f2f221e5-d02e-46ad-bd69-2bc32d6bf540" data-file-name="components/accounting/budget-realization.tsx">
                  <td className="py-3 px-4 font-medium" data-unique-id="6c3b4190-64e8-4c3d-828a-96ebf0d7175a" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.category}</td>
                  <td className="py-3 px-4 text-right" data-unique-id="080c6ccc-2f3e-418a-902f-a2e84448e79c" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="95c2aee9-e006-403c-94fe-f690db4ce873" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.budget.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-right" data-unique-id="ca2b453c-9e87-4199-b59c-d6d03d90cdd5" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="4630fb42-c2e2-405e-9585-f59442a722f5" data-file-name="components/accounting/budget-realization.tsx">
                    Rp </span>{item.actual.toLocaleString('id-ID')}
                  </td>
                  <td className={`py-3 px-4 text-right font-semibold ${item.variance >= 0 ? 'text-green-600' : 'text-red-600'}`} data-unique-id="704a0c70-725a-4a28-800e-9522403f1750" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
                    {item.variance >= 0 ? '+' : ''}<span className="editable-text" data-unique-id="cd117a3a-2b04-49b4-affd-33217540b354" data-file-name="components/accounting/budget-realization.tsx">Rp </span>{item.variance.toLocaleString('id-ID')}
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="e3a4e16e-0e71-42c1-be25-81856213bf7e" data-file-name="components/accounting/budget-realization.tsx">
                    <div className="flex items-center justify-center" data-unique-id="d8b7facd-deb4-4981-b286-0d0c3918f8d2" data-file-name="components/accounting/budget-realization.tsx">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2" data-unique-id="aefd2c06-da61-4039-b000-ca338d9e7a56" data-file-name="components/accounting/budget-realization.tsx">
                        <div className={`h-2 rounded-full ${item.percentage >= 100 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${Math.min(item.percentage, 100)}%`
                    }} data-unique-id="562ec67b-758f-4a48-9573-f55ff02a76c0" data-file-name="components/accounting/budget-realization.tsx"></div>
                      </div>
                      <span className="text-sm font-medium" data-unique-id="9393f102-842b-41c6-821b-0156ec8e35e4" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">{item.percentage.toFixed(1)}<span className="editable-text" data-unique-id="8ee44096-40f6-4a51-8ad3-9f04790ee95c" data-file-name="components/accounting/budget-realization.tsx">%</span></span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center" data-unique-id="4a5d7efd-1521-43e2-b2e0-a15de8019367" data-file-name="components/accounting/budget-realization.tsx">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(item.status)}`} data-unique-id="3195edc4-23b2-418a-b8ca-5e30899ba4cd" data-file-name="components/accounting/budget-realization.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="0245befd-8ff7-4224-b691-7752a131a236" data-file-name="components/accounting/budget-realization.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="1bfb0783-42a6-483e-aecd-971200bc9805" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="b983a88f-0c96-45eb-9402-f867011b56c0" data-file-name="components/accounting/budget-realization.tsx">Rencana Tindakan</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="eed4798f-93a1-4685-a8d7-90e3f49bb899" data-file-name="components/accounting/budget-realization.tsx">
          <div className="p-4 rounded-lg bg-red-50 border border-red-200" data-unique-id="3dd21911-6f5d-4b99-9e95-0ad6b4196489" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2" data-unique-id="1cd527c2-11cf-449e-86a8-c3ac6870880f" data-file-name="components/accounting/budget-realization.tsx">
              <AlertCircle className="w-4 h-4" /><span className="editable-text" data-unique-id="16f5b4d6-88da-4e4e-a27d-ac8fc6aec44b" data-file-name="components/accounting/budget-realization.tsx">
              Perlu Perhatian
            </span></h4>
            <ul className="text-sm text-red-700 space-y-1" data-unique-id="7ea11890-03da-4c5a-8098-f873ffede84b" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="bb3d534f-d5a3-4790-94b3-fda852dd7a6b" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="569f8de9-90b6-450f-a682-dcb56936a6e0" data-file-name="components/accounting/budget-realization.tsx">• Pendapatan masih 19.4% di bawah target</span></li>
              <li data-unique-id="e24dea7b-c9c0-4ef3-a9bd-9a96869e3969" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="441f3a39-eaaa-407d-b612-27584933e3cf" data-file-name="components/accounting/budget-realization.tsx">• Perlu strategi pemasaran yang lebih agresif</span></li>
              <li data-unique-id="19fb8c43-8196-4618-94b1-6e2266dd6633" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="2616c8a0-ffe6-4a35-93d4-08346f25d7f1" data-file-name="components/accounting/budget-realization.tsx">• Evaluasi harga jual produk</span></li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200" data-unique-id="84778095-dcff-4ba0-ab0f-5a1702445f7f" data-file-name="components/accounting/budget-realization.tsx">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2" data-unique-id="20381cf5-111a-41cf-aebd-c8a0ed7e18ed" data-file-name="components/accounting/budget-realization.tsx">
              <TrendingUp className="w-4 h-4" /><span className="editable-text" data-unique-id="97ed9d96-34ab-4d7b-930f-3e26fd645ee1" data-file-name="components/accounting/budget-realization.tsx">
              Pencapaian Positif
            </span></h4>
            <ul className="text-sm text-green-700 space-y-1" data-unique-id="0062de20-398e-4be2-8fd0-1ec2172345da" data-file-name="components/accounting/budget-realization.tsx">
              <li data-unique-id="07c22899-5800-487c-b9b7-fef0c081d946" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="0330817a-e11f-4192-8552-1ae923c94b20" data-file-name="components/accounting/budget-realization.tsx">• Pengeluaran operasional terkendali</span></li>
              <li data-unique-id="93396c97-f783-4473-917e-7b35545a099a" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="8b0aa0b3-2d46-444c-8f9f-0039298272cb" data-file-name="components/accounting/budget-realization.tsx">• Efisiensi biaya gaji tercapai</span></li>
              <li data-unique-id="fed563e5-39b1-4548-8884-72de1f0a294e" data-file-name="components/accounting/budget-realization.tsx"><span className="editable-text" data-unique-id="bc41a30e-efe2-40b4-a9d6-f07f68939d94" data-file-name="components/accounting/budget-realization.tsx">• HPP sesuai target yang ditetapkan</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>;
}