'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
type ReportType = 'balance-sheet' | 'income-statement' | 'cash-flow';
type Period = 'monthly' | 'quarterly' | 'yearly';
export function FinancialReports() {
  const [activeReport, setActiveReport] = useState<ReportType>('balance-sheet');
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('monthly');
  const reports = [{
    id: 'balance-sheet' as ReportType,
    label: 'Neraca',
    icon: FileText
  }, {
    id: 'income-statement' as ReportType,
    label: 'Laba Rugi',
    icon: TrendingUp
  }, {
    id: 'cash-flow' as ReportType,
    label: 'Arus Kas',
    icon: DollarSign
  }];
  const periods = [{
    id: 'monthly' as Period,
    label: 'Bulanan'
  }, {
    id: 'quarterly' as Period,
    label: 'Triwulanan'
  }, {
    id: 'yearly' as Period,
    label: 'Tahunan'
  }];

  // Sample data
  const revenueData = [{
    month: 'Jan',
    revenue: 12500000,
    profit: 3200000,
    expenses: 9300000,
    cogs: 7800000,
    operatingExpenses: 1500000
  }, {
    month: 'Feb',
    revenue: 15200000,
    profit: 4100000,
    expenses: 11100000,
    cogs: 9600000,
    operatingExpenses: 1500000
  }, {
    month: 'Mar',
    revenue: 18700000,
    profit: 5300000,
    expenses: 13400000,
    cogs: 11800000,
    operatingExpenses: 1600000
  }, {
    month: 'Apr',
    revenue: 14300000,
    profit: 3800000,
    expenses: 10500000,
    cogs: 9000000,
    operatingExpenses: 1500000
  }, {
    month: 'May',
    revenue: 16800000,
    profit: 4900000,
    expenses: 11900000,
    cogs: 10200000,
    operatingExpenses: 1700000
  }, {
    month: 'Jun',
    revenue: 19200000,
    profit: 5700000,
    expenses: 13500000,
    cogs: 11800000,
    operatingExpenses: 1700000
  }];
  const kpiData = [{
    label: 'Total Pendapatan',
    value: 96700000,
    change: 15.2,
    trend: 'up'
  }, {
    label: 'Total Pengeluaran',
    value: 68690000,
    change: 8.7,
    trend: 'down'
  }, {
    label: 'Laba Bersih',
    value: 28010000,
    change: 22.5,
    trend: 'up'
  }, {
    label: 'Margin Profit',
    value: 28.97,
    change: 5.8,
    trend: 'up',
    isPercentage: true
  }];
  const cashFlowData = [{
    month: 'Jan',
    operating: 3200000,
    investing: -800000,
    financing: 500000
  }, {
    month: 'Feb',
    operating: 4100000,
    investing: -1200000,
    financing: 0
  }, {
    month: 'Mar',
    operating: 5300000,
    investing: -2000000,
    financing: 1000000
  }, {
    month: 'Apr',
    operating: 3800000,
    investing: -500000,
    financing: -500000
  }, {
    month: 'May',
    operating: 4900000,
    investing: -1000000,
    financing: 0
  }, {
    month: 'Jun',
    operating: 5700000,
    investing: -1500000,
    financing: 2000000
  }];
  const assetData = [{
    name: 'Kas & Bank',
    value: 45000000,
    color: '#059669'
  }, {
    name: 'Piutang',
    value: 18000000,
    color: '#10b981'
  }, {
    name: 'Persediaan',
    value: 32000000,
    color: '#34d399'
  }, {
    name: 'Aset Tetap',
    value: 85000000,
    color: '#6ee7b7'
  }];
  const handleExport = (format: 'excel' | 'pdf') => {
    // Export functionality would be implemented here
    alert(`Mengekspor laporan dalam format ${format.toUpperCase()}`);
  };
  const renderBalanceSheet = () => <div className="space-y-6" data-unique-id="f2ef8cf8-0181-4f0a-87bf-9c3f291320ac" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="d2ffc821-4b2a-4a26-9c97-58618d73f300" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="fb56d340-4d51-40d8-985b-7c5a9e90e118" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="07635f3a-65ff-4a41-80ba-b17da2d5667f" data-file-name="components/accounting/financial-reports.tsx">
            <PieChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="e12d284d-1eab-4439-8bef-fb8cfb3e2fb1" data-file-name="components/accounting/financial-reports.tsx">
            Komposisi Aset
          </span></h3>
          <div className="h-64" data-unique-id="d1271654-8463-458d-9965-a765b2a0ac31" data-file-name="components/accounting/financial-reports.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={assetData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {assetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="166496e1-b99b-4800-ac58-1f2351105b06" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="98e69dde-5beb-4638-b2f2-26b0eb38b5e6" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="bb909f66-5376-4174-8cee-13b4719c453a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6429e842-4dc3-4ba4-8c23-6cd7409606ed" data-file-name="components/accounting/financial-reports.tsx">Neraca Ringkas</span></h3>
          <div className="space-y-4" data-unique-id="966017d3-2c7e-4092-963b-3df48bef4b59" data-file-name="components/accounting/financial-reports.tsx">
            <div className="border-b border-border pb-2" data-unique-id="92d3f2fb-1eb8-40a5-9f50-5a1742683386" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="745a1a78-081f-472b-b9dc-258dd640c697" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="79869c78-4fc2-4956-9da5-5cdc5b470b2f" data-file-name="components/accounting/financial-reports.tsx">ASET</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="83f0461b-1f07-4a82-bdd4-c44e4516586f" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="8c12c816-75b9-4552-8338-0d687460e727" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="39d9c877-b9eb-499b-aa78-04f037567cb4" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f5339fa7-6aba-4521-99ed-5b681a94627d" data-file-name="components/accounting/financial-reports.tsx">Kas dan Bank</span></span>
                  <span data-unique-id="efb1495a-2ed5-47c1-bba4-e31982a051c7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ee750dc2-3b1d-4d0f-ae49-fe9221a49229" data-file-name="components/accounting/financial-reports.tsx">Rp 45.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="8a27f5c4-1f96-4260-8233-ae82eb9a9fa8" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="657fed21-33ad-4f1f-a1c6-da71b545ede3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="cf2e4c80-2673-4c1e-88fb-b32017626467" data-file-name="components/accounting/financial-reports.tsx">Piutang Dagang</span></span>
                  <span data-unique-id="e7613c43-cf93-47bb-b97b-804a93d97c89" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bc104354-8c46-45e0-8e03-2a48533ddfba" data-file-name="components/accounting/financial-reports.tsx">Rp 18.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="c52cf495-297f-4ea3-abde-5dbfbd881a1d" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="f3906cdf-cba6-46e6-90f7-8dc077659f4d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bbcc277f-81c5-43b2-8445-0ef36d1d7ecf" data-file-name="components/accounting/financial-reports.tsx">Persediaan</span></span>
                  <span data-unique-id="2b308d24-79a2-4f69-9597-bc1df2a8399f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8d93b090-3e85-4ec3-8eab-28e010dfdeba" data-file-name="components/accounting/financial-reports.tsx">Rp 32.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="501d8ecd-8fd0-4b62-93df-d8524000403c" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="7cc3cd9b-edfc-45b4-baa2-6950a78ae0b3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fd5d21ec-b04c-4196-944c-74117c3c0487" data-file-name="components/accounting/financial-reports.tsx">Aset Tetap</span></span>
                  <span data-unique-id="47712912-81da-4cfd-b543-a4ec049a15d7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="eaa055ee-348f-4f72-8db4-4765555d76ae" data-file-name="components/accounting/financial-reports.tsx">Rp 85.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="282d3343-f9d0-40fb-8c59-cf2e06700337" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="f5460c4b-68c2-4d03-a6e6-b8eaffeb473e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="18185f3a-0aee-4b4b-a5b8-0da4d1a4b81d" data-file-name="components/accounting/financial-reports.tsx">Total Aset</span></span>
                  <span data-unique-id="13211bdc-e7a5-4f4a-9506-baf3eb7bbe8d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="eef2028f-4688-4951-8e53-8a20ff10a526" data-file-name="components/accounting/financial-reports.tsx">Rp 180.000.000</span></span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2" data-unique-id="6a4b5b30-6f73-4213-ac2b-66fa09f661c4" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="b5acd6c2-2a51-494e-9c80-fb3e58c99d2e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8544436e-efb8-457d-8ed8-999b3d27bc00" data-file-name="components/accounting/financial-reports.tsx">KEWAJIBAN</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="583c5a1c-1616-4bcc-a694-1d5b05a0240b" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="7ff782e6-5dbc-44eb-bc54-d89ce84d892c" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="29d668ff-fc45-44d8-9031-2e78217d3de7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bfe3d57e-6a12-4b7d-8dbf-c14621f75b4d" data-file-name="components/accounting/financial-reports.tsx">Hutang Dagang</span></span>
                  <span data-unique-id="a2dd13c6-014b-44aa-8f44-79415540cc0c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f2414f02-f81f-4c09-9371-4cbe78f01993" data-file-name="components/accounting/financial-reports.tsx">Rp 25.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="cc2621b3-ffdf-445c-9905-3739f7b9923a" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="d0c61052-4c04-4433-97be-28374d0ba62a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bdb39f95-5464-40c1-aecb-c3a0711e0ca3" data-file-name="components/accounting/financial-reports.tsx">Hutang Bank</span></span>
                  <span data-unique-id="21ff5e05-2823-444f-b091-f40d2196c7d7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b4628582-b4e9-4a1d-ab6d-5afa5b8d459e" data-file-name="components/accounting/financial-reports.tsx">Rp 35.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="36314ed3-9e8b-4112-8fc3-3425c10150fc" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="2d873107-6081-42cd-8276-c50c56c8da28" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1c3c5acf-3f0e-4ad7-bdf9-086baeb805b9" data-file-name="components/accounting/financial-reports.tsx">Total Kewajiban</span></span>
                  <span data-unique-id="9fb85782-ad62-4ed3-a02b-59a305881d30" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4da89fbf-0081-42f8-b1a5-08902ed6b0c4" data-file-name="components/accounting/financial-reports.tsx">Rp 60.000.000</span></span>
                </div>
              </div>
            </div>
            <div data-unique-id="8e619700-7a03-49d6-852e-3e2b2f8c6591" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="a449b5d8-4779-4420-b3dd-b1fe9be63d04" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3bc3d4eb-4778-40af-a066-7dd731029e43" data-file-name="components/accounting/financial-reports.tsx">MODAL</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="ee521b60-1617-4717-8595-77cff9223edf" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="52f81a9c-8e63-4467-972a-c7a56da0c199" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="a7208fae-b0f3-4be8-9aad-74cdfb1f8334" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2f55db07-85df-4d72-9140-f166337bb2de" data-file-name="components/accounting/financial-reports.tsx">Modal Pemilik</span></span>
                  <span data-unique-id="636b0b63-1a51-4127-9bd0-f9d2bd936cf4" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dcdf8315-de6b-46c3-b139-926d578df95d" data-file-name="components/accounting/financial-reports.tsx">Rp 100.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="9e5f0d17-4965-4cd4-bc48-8a12310d4583" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="3138df91-8c87-4f29-8898-2fd6fb7a207a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7075dc28-f34a-42da-875e-256fcd28db55" data-file-name="components/accounting/financial-reports.tsx">Laba Ditahan</span></span>
                  <span data-unique-id="b89f95d8-d2f8-445e-8b77-14dbfb6063e5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0909635a-16c9-4d34-8c05-da928d9b1876" data-file-name="components/accounting/financial-reports.tsx">Rp 20.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="d6bfe3dc-8cd5-44ca-89ba-d32a4dd967fa" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="c16872f2-b82a-4297-b678-b55b423f9a96" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="34a4e8c5-377b-4e95-b0a2-a8574f026eb3" data-file-name="components/accounting/financial-reports.tsx">Total Modal</span></span>
                  <span data-unique-id="cf8bcb40-3036-4301-ba9b-5a5158906685" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2f576555-d234-48fb-9b17-13bafd2823bc" data-file-name="components/accounting/financial-reports.tsx">Rp 120.000.000</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderIncomeStatement = () => <div className="space-y-6" data-unique-id="5de42894-4c56-4bcf-b1f3-04b615eec7ea" data-file-name="components/accounting/financial-reports.tsx">
      <div className="glass-effect rounded-2xl p-6" data-unique-id="844b3e26-0218-4a28-aabe-e433e1d4a20c" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="f715161e-7529-4615-a1b0-92a5ef618c92" data-file-name="components/accounting/financial-reports.tsx">
          <BarChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="e5d0b689-f3f1-460e-bf2b-e400c9e3eea2" data-file-name="components/accounting/financial-reports.tsx">
          Tren Pendapatan & Laba
        </span></h3>
        <div className="h-80" data-unique-id="6866cb93-d4b5-4639-ad0d-4afac2827598" data-file-name="components/accounting/financial-reports.tsx">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={value => `${(value / 1000000).toFixed(0)}M`} />
              <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              <Bar dataKey="revenue" fill="#059669" name="Pendapatan" />
              <Bar dataKey="profit" fill="#10b981" name="Laba Bersih" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="ec513ec0-0ebb-438c-be23-2b57aede8ffe" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="8d11f296-d5d7-485f-98fe-57976eed31b9" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="697b63f8-eea7-4f67-950c-fcd4a8a106e3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3d0ca9cf-d9bb-4b56-9a2e-b28b67180bae" data-file-name="components/accounting/financial-reports.tsx">Laporan Laba Rugi</span></h3>
          <div className="space-y-3 text-sm" data-unique-id="e64f5408-00dc-43d4-ae1d-c789b0b4d7b1" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-semibold" data-unique-id="7272f722-e71e-4992-8c7c-a9bac29b3343" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="0b6e4790-e85b-4280-b1dc-787e41e30f3a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3b53a7ec-e914-456f-af71-f1616c89fde4" data-file-name="components/accounting/financial-reports.tsx">Pendapatan Penjualan</span></span>
              <span data-unique-id="24cd4b3c-c7be-403b-aee1-65e527a2ea9d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ca7604d1-9271-4b7e-9914-2a1c534a7cdc" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
            </div>
            <div className="flex justify-between" data-unique-id="c4873b50-7947-48b1-8d7d-82b90a179d54" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="556eacf0-09f7-4645-98d3-545872d47966" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ce538913-151b-4763-a76d-2f20001292e1" data-file-name="components/accounting/financial-reports.tsx">Harga Pokok Penjualan</span></span>
              <span data-unique-id="863a5616-2c08-410d-b04a-ab74df911e4a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e269b3eb-804a-4102-b734-6e1e12b9f1be" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="26abc168-7819-4c29-93c9-e4bbbba14d6b" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="b7248104-9c7e-43e1-85cb-707889b3ca90" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3ee3391d-59e9-4d82-9f32-72cb99591ae0" data-file-name="components/accounting/financial-reports.tsx">Laba Kotor</span></span>
              <span data-unique-id="6f3a0c27-b2b1-4ac3-b016-f1822d700b5e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8fd8220b-ab97-4340-bcb0-a15d8271a584" data-file-name="components/accounting/financial-reports.tsx">Rp 28.010.000</span></span>
            </div>
            <div className="border-t pt-2" data-unique-id="2ad09c64-7bd6-49b0-b7b7-d15892dd0be5" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="eca2875d-2093-4070-bbf6-66a15020c662" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="236afdc1-9e11-4328-a065-eaf737026ea3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5a2827ac-e2d0-4ab3-be6c-b37bf3e9b98c" data-file-name="components/accounting/financial-reports.tsx">Biaya Operasional:</span></span>
                <span data-unique-id="7fb446d6-d438-4f0a-bbb1-0b1002d3bfca" data-file-name="components/accounting/financial-reports.tsx"></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="9ec5e732-38e4-45b2-a50d-68f2f5924ad4" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="dc48ec44-b200-4838-bdcd-e158bd3e4f9b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="92cf0d52-6aa5-4c89-bd40-da771b20c8f4" data-file-name="components/accounting/financial-reports.tsx">- Biaya Gaji</span></span>
                <span data-unique-id="ba2a11d0-1d3f-4c85-af71-5676495a741a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0ef3a4af-c9ac-4945-ae07-c443faf9d0e9" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="e19a8701-ed24-4933-a8b0-2df1dd60048a" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="1a5d4313-2c12-4330-9e1f-936f10e6475b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9eee1c2d-07b8-4426-9eb6-14a711da8dbe" data-file-name="components/accounting/financial-reports.tsx">- Biaya Sewa</span></span>
                <span data-unique-id="d198cbf7-c791-49db-9356-3b9591ce1c4e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4a147746-27a8-4f34-aa31-1ee68a62f91c" data-file-name="components/accounting/financial-reports.tsx">(Rp 3.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="a454d71f-1139-4e83-9431-e7087fec88b2" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="b184ce71-1207-4a48-b5f3-4ea038f97fda" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0ed56c0d-9781-491c-940a-7b66549f8582" data-file-name="components/accounting/financial-reports.tsx">- Biaya Lain-lain</span></span>
                <span data-unique-id="fa873494-4071-4a45-834f-0fed0903e4a7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9900a19c-442c-4bd1-897b-486084752bd0" data-file-name="components/accounting/financial-reports.tsx">(Rp 2.010.000)</span></span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="6cace80e-0dc7-40b5-844c-bc944806d150" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="8475df91-3f65-40dd-958f-09920500e2ae" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d9f25fd9-01e3-40b5-8057-fffa137ed8bb" data-file-name="components/accounting/financial-reports.tsx">Laba Bersih</span></span>
              <span className="text-green-600" data-unique-id="c23dadfb-df5b-437b-abbd-368279053d3f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d9f42d86-f725-4965-abf3-bd6635983ea5" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="9e7f9906-cbbe-4f93-aad1-c648386b979e" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="3bd2079a-2bc3-4a98-8f0c-e8901d33f85a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="23db8c1a-a291-4163-9167-7ae872046b5e" data-file-name="components/accounting/financial-reports.tsx">Rasio Profitabilitas</span></h3>
          <div className="space-y-4" data-unique-id="0ecefe22-5359-4cc5-a51e-aee61f251d13" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="786c2bac-4eec-46e1-9378-231a0030d672" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="494cd197-8181-4be4-ba46-0f1d63ee5d90" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="4f068e74-e71e-4531-8892-bab24cc2dbce" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9fd05f39-84dc-4e1d-a9ce-2555a943b154" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Kotor</span></span>
                <span className="text-lg font-bold text-green-600" data-unique-id="cdf3f09d-5320-404b-9d9d-2bd10abda33c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ae6e6998-3a76-4ad9-8d52-8f3fea2e2d6d" data-file-name="components/accounting/financial-reports.tsx">28.97%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="03cafc14-dad0-46c1-aebc-eebd6242a432" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="c599dcc1-bcea-48c2-a95b-f2c16948087d" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="845c34fc-6130-4ba7-b6d3-31716241bfcd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a8a2a803-dae0-4dfe-b55c-fe8c3d4aedb7" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Bersih</span></span>
                <span className="text-lg font-bold text-blue-600" data-unique-id="c1a82c25-5ebe-4db9-b7d7-447e1879b1f5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b1673b08-ebfc-4b6e-921d-7cc1ea11e957" data-file-name="components/accounting/financial-reports.tsx">15.51%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="28b796a4-4446-4310-8aa2-7c8087253746" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="9f03c0a5-ed63-4e69-8ee9-65553adcf82b" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="f51bcd0f-915b-4f6a-b572-53bda7c5df8f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="cb291093-cb83-41b0-abf3-75ec6e4763c5" data-file-name="components/accounting/financial-reports.tsx">ROA (Return on Assets)</span></span>
                <span className="text-lg font-bold text-purple-600" data-unique-id="6213fdac-fa9b-4c2f-92d3-c564f2d99a26" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a49a02b9-7451-4996-b482-7c9e487e9a33" data-file-name="components/accounting/financial-reports.tsx">8.33%</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderCashFlow = () => <div className="space-y-6" data-unique-id="60a42b2c-8385-4260-86f9-850ae2615e62" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="0e5503e8-5755-4066-91fe-b02af3bd962f" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="5fab613f-8631-4f95-8161-099c886c71d6" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="7e1b5845-6fcb-4b55-a4e6-5f307aaaa20f" data-file-name="components/accounting/financial-reports.tsx">
            <LineChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="07701b46-7c1c-4cd4-8b4a-1e83425d5e41" data-file-name="components/accounting/financial-reports.tsx">
            Tren Arus Kas Bulanan
          </span></h3>
          <div className="h-80" data-unique-id="e438f820-da0d-488b-a271-a306967174b8" data-file-name="components/accounting/financial-reports.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={value => `${(value / 1000000).toFixed(0)}M`} />
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
                <Bar dataKey="operating" fill="#059669" name="Operasional" />
                <Bar dataKey="investing" fill="#dc2626" name="Investasi" />
                <Bar dataKey="financing" fill="#3b82f6" name="Pendanaan" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="f7e5756c-cb4d-4f8c-b419-bc7b9f2f90e0" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="f67ed1be-2f08-4bb9-8c03-64078ad1e3df" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d0998de3-04b1-4ef2-9dc8-ffa2946c0058" data-file-name="components/accounting/financial-reports.tsx">Ringkasan Arus Kas</span></h3>
          <div className="space-y-4" data-unique-id="f93c9b6f-ffb9-4edf-b9d0-eaefc1000cd4" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="a2c3d080-09a7-438e-a28f-77557938d621" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="4747c703-d61b-4802-bdc6-c87aa3a10c34" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-green-800" data-unique-id="ee0e43d2-62b5-43de-85b4-d77988393c97" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a4c174ae-9b57-4f5b-9922-018836a20c6a" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Operasional</span></span>
                <span className="text-xl font-bold text-green-600" data-unique-id="12d4b636-bfdc-4915-aa50-edd82cf36f73" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="aebf4fe2-e8cd-4508-9441-ddc02e8cac55" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.operating, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="e86b3d56-6c45-44f9-84c0-4c2b0871c288" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="55c0cc0c-31f6-4e3a-a95b-0d8f5cd15a42" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-red-800" data-unique-id="b8bcdc7c-d0de-467e-a2c9-8d930ccd2e8e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1f155877-b916-4a71-ba4f-85e724bf1233" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Investasi</span></span>
                <span className="text-xl font-bold text-red-600" data-unique-id="ecdfc377-c683-490e-a846-f4801e14bb51" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="e8f0b29f-e1aa-4388-a853-6fc0dbef83cc" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{Math.abs(cashFlowData.reduce((sum, item) => sum + item.investing, 0)).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="08f72b11-1058-4580-86ff-f554c7a4eed1" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="7be0aa45-7b6e-460b-a788-db7515166b7e" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-blue-800" data-unique-id="c71e16fa-3506-4f1d-97db-830746ae8b2b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4c46f374-c6ce-4244-8668-d96b43b2fb2b" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Pendanaan</span></span>
                <span className="text-xl font-bold text-blue-600" data-unique-id="9dd1800a-df7d-430c-9739-e88d9631ba65" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="5941dc58-133d-45f0-aaef-4daef001b60e" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.financing, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6" data-unique-id="e52f765f-618c-4ed2-8cfc-24c226dda0b8" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="846e1bd1-cce6-4654-9214-4dbf1bfc65bc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a768c58b-633c-49eb-aa68-973e8acad87d" data-file-name="components/accounting/financial-reports.tsx">Laporan Arus Kas</span></h3>
        <div className="space-y-4" data-unique-id="0b115fc4-e4ec-4ced-a0b7-28067cf5ffa7" data-file-name="components/accounting/financial-reports.tsx">
          <div className="border-b border-border pb-4" data-unique-id="b60b78d4-e6b3-42f7-852e-e65fa3908ccf" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="2768b87e-ab03-4182-9d69-57fc1dd0a6ec" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="885db778-229e-4313-a317-0ca95bdb3aed" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS OPERASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="8ab01b40-1592-4f32-8348-d409a72cb59b" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="c33ee049-739f-4e47-8687-4e48a9d282db" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="28f4b084-f5b4-4a6b-a684-13e95c9e21eb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="889ae6d7-e44c-42a9-9ee5-2eaf70c9fe20" data-file-name="components/accounting/financial-reports.tsx">Penerimaan dari pelanggan</span></span>
                <span data-unique-id="15d3f5bb-83b4-440a-b4c6-0b0d9ee2a579" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9c001f9b-93d9-433b-9ab7-5ee04247195f" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="bc3dc635-b0c4-47db-9c30-bd9e493f455e" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="638240c1-e2f4-458d-99ab-ddb39255a9df" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c55664f7-93a2-4aa7-89bb-22d62f60daab" data-file-name="components/accounting/financial-reports.tsx">Pembayaran kepada pemasok</span></span>
                <span data-unique-id="04b31c8a-e461-4694-ae2c-ee37d7c68fae" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c9336e42-63a3-4304-ba72-773c04712cb4" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="6c5104ee-6303-4c5f-93a1-199d18c6b3bf" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="7b0b62d3-aaaa-4e69-af8c-26a00d10f772" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="052ed9c7-4dfb-46e9-84f5-bdf522085994" data-file-name="components/accounting/financial-reports.tsx">Pembayaran gaji</span></span>
                <span data-unique-id="d14b6554-fd8e-4585-851c-bb1eac82e881" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ac03f933-a264-4f78-9094-484091046ae8" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="5cabba8b-49dd-4c87-8c78-8d817dbcdde8" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="f3827316-2e95-4657-947d-d912bf4e8a39" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="99058058-c10f-4c04-a6ed-7359b3c53ea4" data-file-name="components/accounting/financial-reports.tsx">Pembayaran biaya operasional</span></span>
                <span data-unique-id="de3426c1-ea30-4bcc-8680-8e8c9f60919a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d739bc6c-e71a-4854-9482-c229bc087a96" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.010.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="55d19fcd-be9f-4c6b-954a-da4ba31fcadf" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="5f1e8fcc-5bc5-4eda-9daa-74b38872a862" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="605238f3-a509-48ec-88aa-77b82bb903c1" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Operasi</span></span>
                <span className="text-green-600" data-unique-id="ab457a49-215c-4418-84a5-9465bb2068ae" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="75baa27e-322c-4d1c-83a3-b2a783c1fe69" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4" data-unique-id="031d9bd0-01a8-4f2a-a13c-12a8ee246296" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="f9ded0eb-1d89-4fdd-a2c7-4b8ddf7e7cc1" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="49368ab1-8275-4e23-a5c6-c9562d640245" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS INVESTASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="bef83481-21b0-4766-a51d-cf12b6cb25f2" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="f470fbde-30a9-4316-b532-696fe7aa990e" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="2b6c9054-dc1f-4374-9b5d-51c63884792c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="84aaf357-e2a1-416f-b382-ee4bab94d169" data-file-name="components/accounting/financial-reports.tsx">Pembelian peralatan</span></span>
                <span data-unique-id="c71efad3-2d0f-4fd8-af01-93365b542747" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bcf3397d-d5c7-4e7b-bddc-a5240bcbaa66" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="882e44c8-9222-4197-af0e-109e92fe2441" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="54bc0a7e-bae3-448f-96d0-981f01d49c18" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="52c32ef9-bdce-4817-845a-bd51bfd7bcfe" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Investasi</span></span>
                <span className="text-red-600" data-unique-id="5a6b144f-beea-43f6-8975-09c354247af2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ebce959d-30d4-4b99-8c27-52109c926994" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
            </div>
          </div>
          
          <div data-unique-id="46c9c7bd-6d08-4e80-b64f-a840c341be2e" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="01a0fc56-9729-4ce5-b4d8-e85c6445acb4" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="43011eb2-3724-4c60-9a42-5216fd3f5f8c" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS PENDANAAN</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="04342a59-d2b2-421d-8724-16dfffe54d72" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="2379a871-063a-4aa9-aed1-58c9aebdea5f" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="d236e41c-4d31-4d06-88fa-0fe05341e6ea" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d74acb61-4a57-4de5-83b7-f096e17de2e8" data-file-name="components/accounting/financial-reports.tsx">Pinjaman bank</span></span>
                <span data-unique-id="c604ee63-3575-4844-a113-48ad3e5f704f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="16401880-e559-4ed2-af9c-3d5b9f845644" data-file-name="components/accounting/financial-reports.tsx">Rp 10.000.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="dcb76604-d105-4931-82be-bd08fe08b8c6" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="90b5b29f-3dc4-4f00-a1eb-ce0881b46b49" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="08b822c1-35a5-459e-9066-026cd47a87a9" data-file-name="components/accounting/financial-reports.tsx">Pembayaran dividen</span></span>
                <span data-unique-id="9c29518f-6e18-4906-9543-0ed610bbdb5b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="31f14a05-62f3-4f22-aea2-ab037e697c84" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="0d20aea6-41c8-4d73-8be9-ef45177c1edd" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="7b0e5e7f-794f-4a91-9a48-1ca260399c2d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="627c8a4a-da4e-40e9-a911-1b782dfbbc0c" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Pendanaan</span></span>
                <span className="text-green-600" data-unique-id="f83eb90a-353d-426d-8ad1-ec522020ca56" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a86cf527-6452-4fc1-b554-2b84fa717f49" data-file-name="components/accounting/financial-reports.tsx">Rp 5.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4" data-unique-id="8e4d9a32-204b-49ee-a5bd-a192d9193ec4" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-bold text-lg" data-unique-id="c9cd9b04-79ff-4c0e-b2ee-531798bf268e" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="e342e4ed-e446-4a64-8a7f-05623c39a796" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ef0262f6-846c-4532-bc72-94015b99b33c" data-file-name="components/accounting/financial-reports.tsx">Kenaikan Bersih Kas</span></span>
              <span className="text-green-600" data-unique-id="fdfa8399-68f8-4c54-9281-67cc3b5c4d5b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0a564ac1-7854-4ba6-b36f-07175a2f1f42" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-6" data-unique-id="340f3dcc-5f57-475b-a1d5-2aa94ab80ac9" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-unique-id="bd65968b-8940-46ea-b197-c93d8ecb2291" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {kpiData.map((kpi, index) => <motion.div key={kpi.label} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="a74a4a3a-ca12-4afb-946b-bc1fd584817d" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex items-center justify-between mb-2" data-unique-id="83b14a97-18b8-4482-9b96-bb5730444c94" data-file-name="components/accounting/financial-reports.tsx">
              <h3 className="text-sm font-medium text-muted-foreground" data-unique-id="ebd23527-f391-477f-9850-148148cb15ec" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{kpi.label}</h3>
              <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="81f8c8a0-7b8e-492b-b095-88fe74ba05e5" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                <TrendingUp className={`w-3 h-3 ${kpi.trend === 'down' ? 'rotate-180' : ''}`} data-unique-id="c24c3baf-2194-4c84-a917-dd4bbcfd7068" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />
                {kpi.change}<span className="editable-text" data-unique-id="ef631d04-497e-4b29-91fb-9414f4f8170d" data-file-name="components/accounting/financial-reports.tsx">%
              </span></div>
            </div>
            <div className="text-2xl font-bold text-foreground" data-unique-id="311cfbd6-e4fe-46f1-bdfd-dc368cc8cda4" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {kpi.isPercentage ? `${kpi.value}%` : `Rp ${kpi.value.toLocaleString('id-ID')}`}
            </div>
          </motion.div>)}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="e12f14b8-5a3c-47c4-8d6f-9a8639f0a446" data-file-name="components/accounting/financial-reports.tsx">
        <div data-unique-id="193dfb27-22f0-480c-ab6b-9e25e4066085" data-file-name="components/accounting/financial-reports.tsx">
          <h2 className="text-2xl font-bold" data-unique-id="ac37a8cf-75b0-47ce-a8b4-374d4cf30ba7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5da9cc7d-f427-435c-aaf5-d53aee5abee8" data-file-name="components/accounting/financial-reports.tsx">Laporan Keuangan Detil</span></h2>
          <p className="text-muted-foreground" data-unique-id="5f60156a-d3a5-4d93-bd58-502684e54376" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="093a446e-edf0-44a7-8b04-1c0791f85752" data-file-name="components/accounting/financial-reports.tsx">Analisis mendalam kinerja keuangan perusahaan</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="e08290fd-c01a-4952-9caa-7da7dfa23c00" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
          {/* Period Selector */}
          <div className="flex items-center gap-2" data-unique-id="54c1c487-9010-4abd-b36a-04e107ee6968" data-file-name="components/accounting/financial-reports.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="390ac663-7161-45a4-aa0d-e21b5f9ed427" data-file-name="components/accounting/financial-reports.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as Period)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="a8de6408-e1bd-46c0-ac67-c15f45431c77" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {periods.map(period => <option key={period.id} value={period.id} data-unique-id="ebe9c91e-049d-432a-aed9-6e23e0bd6c49" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{period.label}</option>)}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2" data-unique-id="04f0e96a-424d-4e52-90a0-55789e822b27" data-file-name="components/accounting/financial-reports.tsx">
            <button onClick={() => handleExport('excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="272b3c0d-d77c-401b-9aa2-576da57fe55f" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="86e6f2c4-3ae2-46e4-9887-c114d6f1d033" data-file-name="components/accounting/financial-reports.tsx">
              Excel
            </span></button>
            <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="fde66069-3148-45a3-abbf-b872bcdc7e44" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="8efc1e6a-bf5c-4dbe-8bc4-7bc72b19fb98" data-file-name="components/accounting/financial-reports.tsx">
              PDF
            </span></button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4" data-unique-id="688e5a10-dcc3-41c8-b4a3-9cbc57d3e1b5" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {reports.map(report => {
        const Icon = report.icon;
        const isActive = activeReport === report.id;
        return <button key={report.id} onClick={() => setActiveReport(report.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="14c407dd-d3b3-4a70-b147-008d28af9a03" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              <Icon className="w-4 h-4" />
              {report.label}
            </button>;
      })}
      </div>

      {/* Report Content */}
      <motion.div key={activeReport} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.3
    }} data-unique-id="40460059-f545-49eb-9488-a5f4624f4f16" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>;
}