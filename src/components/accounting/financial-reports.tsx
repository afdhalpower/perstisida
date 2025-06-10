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

  // Data will be populated from actual transactions
  const revenueData: any[] = [];
  const kpiData: any[] = [];
  const cashFlowData: any[] = [];
  const assetData: any[] = [];
  const handleExport = (format: 'excel' | 'pdf') => {
    // Export functionality would be implemented here
    alert(`Mengekspor laporan dalam format ${format.toUpperCase()}`);
  };
  const renderBalanceSheet = () => <div className="space-y-6" data-unique-id="95a96cce-c8a9-40d6-ab87-7cbb55d384f7" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="b0a02226-a41c-40e9-9b27-5eca5e37a009" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="d9e17271-b654-4453-b003-359c7189a90c" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="dd6867b6-6a1b-45fc-a9e2-15de8c636d0f" data-file-name="components/accounting/financial-reports.tsx">
            <PieChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="b6a307ea-007f-45a3-83c7-a6782945a06e" data-file-name="components/accounting/financial-reports.tsx">
            Komposisi Aset
          </span></h3>
          <div className="h-64" data-unique-id="f8e32d70-b72f-4721-b989-1f934016c0a3" data-file-name="components/accounting/financial-reports.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={assetData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {assetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="8dc6992b-540a-4def-9963-2914fa34b28e" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="bcc17d42-a184-4c0c-8c41-ec7b40029ee2" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="a694c20c-8bf4-491a-a1ee-2f706875baec" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2231fd17-842d-4ce2-bd8e-a8f07bcf4c60" data-file-name="components/accounting/financial-reports.tsx">Neraca Ringkas</span></h3>
          <div className="space-y-4" data-unique-id="1ac9d0d1-7d45-4cf2-8a40-077b3f96edbf" data-file-name="components/accounting/financial-reports.tsx">
            <div className="border-b border-border pb-2" data-unique-id="3f5c46c6-a8a9-421d-940d-6ec9521c92d3" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="48beae5d-6c52-4ab7-aee6-c47ddffc18e8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="10d230f1-7666-46bb-a7f9-263458de0969" data-file-name="components/accounting/financial-reports.tsx">ASET</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="258dc8e1-5107-4b86-aaa9-0f57fa0d6487" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="7078cbb5-8151-46c2-b7ef-29da203df7e6" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="e2da4bfb-c7ec-48d6-8297-07d60605da6b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2a7c94a0-7fa9-4b0e-8fa6-b7c43d4dc343" data-file-name="components/accounting/financial-reports.tsx">Kas dan Bank</span></span>
                  <span data-unique-id="6bfc0e20-407b-44b0-bca4-6b6df39fa757" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="57702df0-9f48-48cc-b0f9-699e2008c937" data-file-name="components/accounting/financial-reports.tsx">Rp 45.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="70d65dc6-99a0-4a70-b7c9-54cf9b1ab0c4" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="cb18d9a7-40f3-4464-aee5-22ab1b95716f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="72c68df7-a798-47f9-b8f5-d5afc16a77a4" data-file-name="components/accounting/financial-reports.tsx">Piutang Dagang</span></span>
                  <span data-unique-id="78e70757-e930-4a99-a0f6-578038ce0e8e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f7f6b399-eede-4b8d-9a37-10890b1e5921" data-file-name="components/accounting/financial-reports.tsx">Rp 18.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="e73196be-2f8b-4a96-a525-c2f8005573be" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="1ec23252-a3d5-4021-b3d9-738860067095" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a6bd8a1e-69a1-4952-be78-2b1c51b262b4" data-file-name="components/accounting/financial-reports.tsx">Persediaan</span></span>
                  <span data-unique-id="8dc2b2b5-2b61-40d3-aee3-ff027ae0f006" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ab898f21-c9e1-4d29-b35b-3d9e6768bb27" data-file-name="components/accounting/financial-reports.tsx">Rp 32.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="ec6416e6-14e6-4c10-b542-11dc24a3f62a" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="972aaf30-e616-4bb1-8dd4-f5f9d0f2cedb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4110ff59-4925-47fe-bbad-fd20e95132d6" data-file-name="components/accounting/financial-reports.tsx">Aset Tetap</span></span>
                  <span data-unique-id="2f5fdc7d-6131-42ac-9a49-5a6b84752360" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="da84ff23-9785-48c1-b2b7-335934588bfc" data-file-name="components/accounting/financial-reports.tsx">Rp 85.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="4ea2be48-e6ab-4b77-a2fa-e2d10a457747" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="0f4a5f98-fb1e-4793-aa8c-470eb9afdb58" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c39e41fd-f6a8-4929-a6f7-fedb243c2d2e" data-file-name="components/accounting/financial-reports.tsx">Total Aset</span></span>
                  <span data-unique-id="7a854050-8449-4401-a426-631863bef98e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2838823d-4b57-4997-a153-0ff356d37a84" data-file-name="components/accounting/financial-reports.tsx">Rp 180.000.000</span></span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2" data-unique-id="823ccf07-3481-4c63-bf16-d77cf4670b57" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="2c5b3c60-5561-4d79-a5c6-5b20ca281440" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a165ca61-6abd-48c4-a232-0c2bceedd638" data-file-name="components/accounting/financial-reports.tsx">KEWAJIBAN</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="4110fcd4-b567-45ab-9a92-98e1912bb566" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="ee233ea0-d0be-4573-9375-0d6070699897" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="6e925770-5edd-4e47-82f9-e6ee9cafb4b0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c9e47a19-6c8f-47bc-97e5-b67d07d01716" data-file-name="components/accounting/financial-reports.tsx">Hutang Dagang</span></span>
                  <span data-unique-id="09b49b61-2527-4e93-ba9f-c591baac66c4" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a0824486-90ce-4fa7-82b6-343e41e82113" data-file-name="components/accounting/financial-reports.tsx">Rp 25.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="17ab8398-7150-43b0-ad95-e957c548e2b9" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="4fe5e345-06ba-4bea-940c-7be61b1c2500" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="453d26bc-3175-4ccf-9322-8f1f65e2e42a" data-file-name="components/accounting/financial-reports.tsx">Hutang Bank</span></span>
                  <span data-unique-id="56313707-75b3-4124-b835-8cdb8120307f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6bec2b08-7b9d-43a8-9839-d0a9fd51db76" data-file-name="components/accounting/financial-reports.tsx">Rp 35.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="77bfff24-8de9-4da1-bea4-c4f380916b2d" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="5992946b-b720-44fe-9f27-254c8c6f57fc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2c92c0b5-a82a-4fc4-89d5-ad8f4b2b8de4" data-file-name="components/accounting/financial-reports.tsx">Total Kewajiban</span></span>
                  <span data-unique-id="e87e9548-4609-47ac-bbbe-de82bc9c1f65" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a9b2e633-9e62-4e49-ad50-cc51b65facd7" data-file-name="components/accounting/financial-reports.tsx">Rp 60.000.000</span></span>
                </div>
              </div>
            </div>
            <div data-unique-id="f7f47a32-331e-4bff-b874-9fc75fbd996c" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="b807b28b-4c01-47d2-9050-709252c387cb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dbe3ed13-bba9-44b2-b585-634a61dbc6cf" data-file-name="components/accounting/financial-reports.tsx">MODAL</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="29b569ec-3279-440c-802c-978818c1b5d4" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="ba128bba-8492-406d-888f-80dc219929b3" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="b9bad2c5-3220-4abc-92eb-a873f901f38e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6bb5a831-ae8d-45ca-8c5e-d76bb9ed6ad8" data-file-name="components/accounting/financial-reports.tsx">Modal Pemilik</span></span>
                  <span data-unique-id="d91dc889-1d23-4682-95ff-0de1df4e9022" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="44702a6a-71d2-4004-923e-cbd5423fedb3" data-file-name="components/accounting/financial-reports.tsx">Rp 100.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="85b1863d-8023-449d-9df8-63a453333e7f" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="6f8e073f-9ffd-4004-aaa3-04ec61a43f6a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="656e4f55-a426-4c42-a723-2791f5b49dbd" data-file-name="components/accounting/financial-reports.tsx">Laba Ditahan</span></span>
                  <span data-unique-id="eddd5569-0069-4be7-abfe-69c4231ca906" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="cbdbaebb-147a-4dd0-a3f7-fb4d1b4ddabb" data-file-name="components/accounting/financial-reports.tsx">Rp 20.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="de984040-c9e9-46d6-8637-146c77f45bea" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="fc5b58ff-3fb4-42b4-bd1a-90085ab58557" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0b9d6d52-135a-4b7b-9dc7-508a44116688" data-file-name="components/accounting/financial-reports.tsx">Total Modal</span></span>
                  <span data-unique-id="28d54a3f-1414-44c1-956a-0626fda551f9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a266a906-80b6-42d6-8c19-d9d097c24215" data-file-name="components/accounting/financial-reports.tsx">Rp 120.000.000</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderIncomeStatement = () => <div className="space-y-6" data-unique-id="766e6cbc-ed20-4b93-9dad-822bf2e0459e" data-file-name="components/accounting/financial-reports.tsx">
      <div className="glass-effect rounded-2xl p-6" data-unique-id="cf675674-2349-43f5-a882-9c4011643b69" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="4fcc431c-bf18-401d-a2e6-2ea38b6f4c7f" data-file-name="components/accounting/financial-reports.tsx">
          <BarChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="06044f72-4b8c-4467-be50-66f36b176142" data-file-name="components/accounting/financial-reports.tsx">
          Tren Pendapatan & Laba
        </span></h3>
        <div className="h-80" data-unique-id="612e01ce-f8d0-4f56-8260-26aa0c44e351" data-file-name="components/accounting/financial-reports.tsx">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="f2708a65-18bc-4fec-b388-dddd181b2d40" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="0eba572e-9f4f-4fe3-9779-c7e2b471db19" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="958661c2-6068-4c89-89fe-c3d3754139b5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="43c57980-88af-426a-8817-438585264f15" data-file-name="components/accounting/financial-reports.tsx">Laporan Laba Rugi</span></h3>
          <div className="space-y-3 text-sm" data-unique-id="df3d279a-ee87-4bf8-a0d0-fa2396819638" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-semibold" data-unique-id="e522303c-f39a-4b86-810e-2a27bbea0a69" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="c1832550-3f46-4318-b389-58b203f8fff8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a68cf888-0c7a-4661-9244-713a0a0ad3df" data-file-name="components/accounting/financial-reports.tsx">Pendapatan Penjualan</span></span>
              <span data-unique-id="7978013e-58d3-4ceb-8e35-d57bcc17baf2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9ae161cf-c7ba-406d-ba82-98d35024b697" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
            </div>
            <div className="flex justify-between" data-unique-id="3816a7f2-67d5-44d2-84b1-dd4af1aaf7d9" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="384a6b27-6992-4ea4-b56b-ba028d238dfe" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="771d142b-47a7-4e00-b0bb-ed2319179276" data-file-name="components/accounting/financial-reports.tsx">Harga Pokok Penjualan</span></span>
              <span data-unique-id="645ab899-229f-4683-81d8-97dfc624a26e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e6fc48c7-cbb7-48b1-aea8-9125f765e3d1" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="b50b8556-176a-4895-95f5-76b5e5124c31" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="5cd6e8e4-228d-4f90-a479-0166515c537b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="794f0bbb-e151-4dfa-921e-ff56c12960e1" data-file-name="components/accounting/financial-reports.tsx">Laba Kotor</span></span>
              <span data-unique-id="53130cc8-32f1-4b97-9996-f4fcd2e3c1a5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b5fdd186-220d-4c43-ad27-116142cf95b3" data-file-name="components/accounting/financial-reports.tsx">Rp 28.010.000</span></span>
            </div>
            <div className="border-t pt-2" data-unique-id="f1ac45a9-6f9a-4f4e-90c5-479e4c063037" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="2c9f5fc0-b78e-4ea2-9bd6-f945546511c6" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="6a71c7da-35fe-464b-93b7-4d2fb6866430" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="90446ae9-e208-40ce-b0c6-27c98c95d954" data-file-name="components/accounting/financial-reports.tsx">Biaya Operasional:</span></span>
                <span data-unique-id="85b86b53-43c7-47b3-a6a7-919890572315" data-file-name="components/accounting/financial-reports.tsx"></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="162161c5-72f9-4861-80cc-3676f7ad7bc5" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="4bba09fe-b0bb-4f2d-9d35-44888d6e430f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a2bee1f8-7f1a-4522-bfd7-7dac0f5846c9" data-file-name="components/accounting/financial-reports.tsx">- Biaya Gaji</span></span>
                <span data-unique-id="d93b3914-92e4-4095-b3ba-57b32a69b882" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="532e79d5-91b3-45c7-a238-f7fdacf521d4" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="585dd26a-ff96-4990-8775-a107b76eade4" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="d0cad4f7-f228-4daf-b226-989782f692de" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="98e37d1b-a64c-45bc-9a6e-49ddd229b1a4" data-file-name="components/accounting/financial-reports.tsx">- Biaya Sewa</span></span>
                <span data-unique-id="0ec4e3a2-5965-4487-be81-33d1d6b95d4d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9c83a437-25d5-42d8-ad80-f116d3d673a7" data-file-name="components/accounting/financial-reports.tsx">(Rp 3.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="fbd81625-68a4-4c85-abc5-3a7401d9dc4b" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="2ee78bc1-32dc-40a1-b4ba-72f22ac85f59" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2b985823-a152-47c1-93b3-2f77b8bbef9a" data-file-name="components/accounting/financial-reports.tsx">- Biaya Lain-lain</span></span>
                <span data-unique-id="642b81b5-88e2-4872-add6-7bc4252fd3c1" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f1648a8c-db64-406a-a5a6-c297c860c7c0" data-file-name="components/accounting/financial-reports.tsx">(Rp 2.010.000)</span></span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="2f1453c8-8643-4006-ad21-a6be4b4ff64c" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="e3366a46-79ff-4d6e-9dfb-0230dc02a614" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="95176103-c860-4961-bfb6-243ca6b5531b" data-file-name="components/accounting/financial-reports.tsx">Laba Bersih</span></span>
              <span className="text-green-600" data-unique-id="ce22651f-2047-4732-bae6-3ea0350c2e5d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b01fde8a-20e1-456d-9574-fac6dac72c27" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="96f51b12-23c7-4c8e-aec2-77de08c38377" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="83391865-838c-43e7-965b-026bc866daf7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="10305eba-645e-476f-ad0b-c8ca1b132d56" data-file-name="components/accounting/financial-reports.tsx">Rasio Profitabilitas</span></h3>
          <div className="space-y-4" data-unique-id="7be106e3-4304-40c6-b0f0-45397422aa7a" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="12f0fee9-1765-476d-8ebc-a9c7c263b426" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="98a82815-5c6e-4b55-8984-08f99d0fbc77" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="466ba392-9cc5-40cc-a631-4e487782d78f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0aeeb452-ffec-46a9-b5a4-923d50681e4e" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Kotor</span></span>
                <span className="text-lg font-bold text-green-600" data-unique-id="b4fd393d-0351-473a-ac11-ce1ab2ef439f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fc665633-a526-4835-a2ae-ce5b2872c6d2" data-file-name="components/accounting/financial-reports.tsx">28.97%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="ba332f15-a8cc-4c7b-8844-9c7b75440462" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="13c5798d-5c53-4cda-b50f-cdfc425259a6" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="745d1298-ffc5-4417-887f-8bd48951cc8c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9218ec9d-b37a-416c-8ab7-fa2104499a41" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Bersih</span></span>
                <span className="text-lg font-bold text-blue-600" data-unique-id="6b536b69-4d95-448d-8aa9-987c1287a022" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4206b73a-feba-4973-b7e2-fb4703315cb6" data-file-name="components/accounting/financial-reports.tsx">15.51%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="f533e7b3-82e6-4c04-9354-adc3fa862f06" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="37408279-5698-48f0-ae65-9e453c9852c1" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="84e16ae0-fa48-4211-be81-e3f753d43cd9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5dc565c4-00e8-46de-ac0a-1ce0e6df08ab" data-file-name="components/accounting/financial-reports.tsx">ROA (Return on Assets)</span></span>
                <span className="text-lg font-bold text-purple-600" data-unique-id="3634e14f-c991-4fc4-bb33-51df9644caa7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a38d8ba7-dc21-4c9c-b44e-14df14bff233" data-file-name="components/accounting/financial-reports.tsx">8.33%</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderCashFlow = () => <div className="space-y-6" data-unique-id="228e4b5e-b206-4312-8145-5053003d4303" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="127d7f5e-1993-46ee-8a86-df963b634fd0" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="b8f2451c-28fb-4bee-ad66-2e6a8129b00e" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="636d1560-0fb8-4a14-8743-a59675a0b487" data-file-name="components/accounting/financial-reports.tsx">
            <LineChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="e90ac096-29fb-4b25-bce7-5441222af4fd" data-file-name="components/accounting/financial-reports.tsx">
            Tren Arus Kas Bulanan
          </span></h3>
          <div className="h-80" data-unique-id="1cad1fd3-8876-4819-854d-dac55a0aa74f" data-file-name="components/accounting/financial-reports.tsx">
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

        <div className="glass-effect rounded-2xl p-6" data-unique-id="94dfef85-1236-4080-ac6a-8b74a5cc641c" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="c2bde8e4-e182-41c2-af7e-24749a139dee" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d20a8518-e0d5-4224-bf23-6a480d23caca" data-file-name="components/accounting/financial-reports.tsx">Ringkasan Arus Kas</span></h3>
          <div className="space-y-4" data-unique-id="fa6a856b-438f-41d7-8313-bbb460166e56" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="d5b7fb91-04fa-4701-847d-ecd05f3b2153" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="589e0fcf-ea6b-4bd2-83d5-c1ecd2503ff5" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-green-800" data-unique-id="a5ffa776-de36-42d0-91fe-48c9b3f5c825" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7ead2df8-ffaa-49b3-aa10-9e1d60b7f91e" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Operasional</span></span>
                <span className="text-xl font-bold text-green-600" data-unique-id="2bd481e1-7f46-4daf-bfb0-be386d0a5782" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="4528b59e-d0be-4249-9dc2-eab1873636a2" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.operating, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="cd87db17-e327-4e8d-8b0d-b2ac2c194f8f" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="025c993b-1cc7-47ee-88d5-81b82b84ed40" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-red-800" data-unique-id="f53a53f2-6ed6-42de-9602-16c119ce7aa2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="609823d1-355e-489e-8d0b-9db383d0f9cd" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Investasi</span></span>
                <span className="text-xl font-bold text-red-600" data-unique-id="69d08312-2d15-4c60-b26f-2f1603c428a0" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="ab9d23c1-5913-4e78-ba73-cc79816bccbc" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{Math.abs(cashFlowData.reduce((sum, item) => sum + item.investing, 0)).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="64ab6269-1ab3-45b8-b3af-45d984d1d0c9" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="8c5cfa11-e78e-4ac6-b592-8713eb49af26" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-blue-800" data-unique-id="02db6415-ddb0-44f0-b66f-59e037e4d7a1" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f9ab7af0-d854-4a49-8cb6-eb3ad029c3b1" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Pendanaan</span></span>
                <span className="text-xl font-bold text-blue-600" data-unique-id="07b2378a-fee7-4f04-93c2-295a35b1b7d4" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="db2d2761-e658-4c3d-9a7f-56b72f7771f8" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.financing, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6" data-unique-id="c4ee3417-2393-48c5-8985-b084eec19775" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="300314d5-4184-42a0-8110-34ab1f35e098" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ef3813f9-dec0-40d7-abf0-8504c56e71b5" data-file-name="components/accounting/financial-reports.tsx">Laporan Arus Kas</span></h3>
        <div className="space-y-4" data-unique-id="751dc47a-c68d-4541-8a60-414d307a5f78" data-file-name="components/accounting/financial-reports.tsx">
          <div className="border-b border-border pb-4" data-unique-id="6078d401-634a-442f-ae75-c35b8cdc5784" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="b59b89f3-eca2-4136-855a-be7701a00904" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fabde791-be71-4c30-8a15-b5d2cdaccda3" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS OPERASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="d280dfde-7582-4dae-829e-671768fc7d0a" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="01a7786c-f64c-4e80-a018-e4d989d23c13" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="e7dcd45f-255a-48e6-bd28-0d108da6a9a2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0cb7379d-7bc3-4ba8-a99f-d05d9482aa81" data-file-name="components/accounting/financial-reports.tsx">Penerimaan dari pelanggan</span></span>
                <span data-unique-id="c9f8312d-1a62-4406-b0e7-08dd5e85a0c8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8ae9bd14-2344-4cca-a863-54f654ab3205" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="ca51ee72-6e31-4ac3-9d1d-89c4d02d8e7e" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="a7f10d89-a3cf-4005-9aa0-7910c2d84f1d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4b7a5458-a22d-4e84-8172-8342fc222d60" data-file-name="components/accounting/financial-reports.tsx">Pembayaran kepada pemasok</span></span>
                <span data-unique-id="489dfa19-64b7-4514-abf3-818d7b37340e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="cf4c4189-8052-4beb-aeb6-3034295e9c18" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="f78a2fc4-4448-40da-80c2-ddb5b2766782" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="8fac569d-fc46-4de9-96bb-bb924e41f2a9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5816f795-83d9-440e-be1d-d190dcd96b3f" data-file-name="components/accounting/financial-reports.tsx">Pembayaran gaji</span></span>
                <span data-unique-id="56dbbf2b-1dcb-4662-b7b7-d73092298302" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9f034e99-c4e5-4116-930b-0fcd8fd91f82" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="d6e9c659-c22c-4a5f-99d7-b7fb6b6ba704" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="d032d4fe-5791-4b48-a222-e434f618df51" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e6748f90-89ee-4e0c-9ddd-3da05ead4b40" data-file-name="components/accounting/financial-reports.tsx">Pembayaran biaya operasional</span></span>
                <span data-unique-id="e33e8312-5d4c-4f3a-97e6-1628e05972bf" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="09f8e415-0c1a-4e85-9000-c8c2bdc1a67a" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.010.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="57a4d62b-8f94-4211-bc19-ef3115647603" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="170b42e7-fa63-47d7-9e3a-64fc2058156a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0fd7b662-3cfd-4055-bd3e-76cc12045471" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Operasi</span></span>
                <span className="text-green-600" data-unique-id="860f3b70-a74b-4a60-a7fc-15cc6a6d5f61" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="912125f5-8676-414d-acd7-06baccf6f9b3" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4" data-unique-id="d4bd3ee5-a4d2-4ef6-ac3b-c6d9ccc2861e" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="4e1b7da0-0c14-4ac9-be72-211ea53ff2bd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bf829694-6d44-40ad-8814-67086535b2e5" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS INVESTASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="8479c19b-c587-47f1-8532-29dddba22e3a" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="7cc0ea5a-0010-4aef-a65e-1dce806aed13" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="93449bda-bde4-4329-a0f1-366e0d17cc0e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="17570c4f-156c-45cd-8760-6ac6bd7b3968" data-file-name="components/accounting/financial-reports.tsx">Pembelian peralatan</span></span>
                <span data-unique-id="d374fd72-3b0d-4122-a5aa-49d45fc9b8e9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="31985833-4835-408d-b538-b78a31586f32" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="4f6b7026-e473-490d-8406-2332d7f849f2" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="62b5d341-9ffd-4cc7-aa57-485d31d7909f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="208dd6c1-1c8e-40e1-98ff-c5e1345fb8f4" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Investasi</span></span>
                <span className="text-red-600" data-unique-id="6708276b-2441-4d19-9e2f-8874c81bbabc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9a05273f-650d-4c4e-801a-18eb606ca93e" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
            </div>
          </div>
          
          <div data-unique-id="b63b350e-c142-4d91-b981-d510d3911dcb" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="bfe095f9-7382-4942-8bb1-ad4cae7dacce" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9b76b8d6-d6cd-4fca-8111-c4ad897a047f" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS PENDANAAN</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="058566ed-33a2-4807-9d43-7f7c5c6a92fe" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="51b17b7f-9356-4f2f-90b9-16923861a924" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="a2ff8223-6c84-4903-ade3-7517f8834b56" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0bd067f1-02d7-42e3-b921-03bfebf9dfe7" data-file-name="components/accounting/financial-reports.tsx">Pinjaman bank</span></span>
                <span data-unique-id="ba29fe6f-97aa-4b15-900a-d0beab4664e2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="004081bd-5318-4a44-9e61-f885eadae437" data-file-name="components/accounting/financial-reports.tsx">Rp 10.000.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="37fcc7a7-7283-46c6-8e3b-0d12ad8e02bf" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="1483840a-9b1d-456f-bb46-69098a124380" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dcb7bc67-4d58-40ad-98dc-20afbc95c91c" data-file-name="components/accounting/financial-reports.tsx">Pembayaran dividen</span></span>
                <span data-unique-id="e04dabed-08b7-4d34-8599-c871d254d8d0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1acce6e4-6e14-48d1-8785-d6e1ce8b780e" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="fb49b09f-9187-4f44-8481-c459b613d1f1" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="4add7f5a-ab59-4e3c-9c3b-cb50682c602b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="44405593-baa5-47d7-96f8-bb6631cdba16" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Pendanaan</span></span>
                <span className="text-green-600" data-unique-id="ef11a198-b709-4bb7-9290-51d938aa5ec8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="674b1706-3267-4421-ab2d-61a05b081404" data-file-name="components/accounting/financial-reports.tsx">Rp 5.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4" data-unique-id="963ba417-a6b1-48d2-b517-4598ca07c6ed" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-bold text-lg" data-unique-id="2bd8ef06-424d-445b-84f8-b539967a26da" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="002a2193-88a8-4e7f-ab4e-ba8e95ed3a92" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d3bfd7cd-f090-4ec2-9f39-680a471c2eb5" data-file-name="components/accounting/financial-reports.tsx">Kenaikan Bersih Kas</span></span>
              <span className="text-green-600" data-unique-id="70a0a872-9a8a-4f16-9dc9-eb787b4d28ca" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fb84ef26-5711-478d-9a4e-bdabd2700aba" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-6" data-unique-id="9bc86a5f-8c2e-4327-8046-dddae004f5a0" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-unique-id="41ea41bc-e91f-4a1b-ad31-5944ad484171" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {kpiData.map((kpi, index) => <motion.div key={kpi.label} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="d38d27dc-ecf8-4b64-8ee6-1d4ba7654c44" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex items-center justify-between mb-2" data-unique-id="c1ffa2c7-acb5-4eaa-8c6e-d80539f19bbf" data-file-name="components/accounting/financial-reports.tsx">
              <h3 className="text-sm font-medium text-muted-foreground" data-unique-id="e41623a9-2742-4928-b0c1-66d622485d09" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{kpi.label}</h3>
              <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="ad3fb5e9-24d0-42a2-b58e-4f363822bd38" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                <TrendingUp className={`w-3 h-3 ${kpi.trend === 'down' ? 'rotate-180' : ''}`} data-unique-id="20c2b1fd-c7bd-44a3-af55-8cc15cd7107a" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />
                {kpi.change}<span className="editable-text" data-unique-id="da32af8c-a027-4f71-8bf1-2eb5d26023ac" data-file-name="components/accounting/financial-reports.tsx">%
              </span></div>
            </div>
            <div className="text-2xl font-bold text-foreground" data-unique-id="6df6b667-7c28-4098-824d-524ce128ebba" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {kpi.isPercentage ? `${kpi.value}%` : `Rp ${kpi.value.toLocaleString('id-ID')}`}
            </div>
          </motion.div>)}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="8cd1fa1f-24a1-4445-ad30-ab976f1657e2" data-file-name="components/accounting/financial-reports.tsx">
        <div data-unique-id="8c089270-909d-41f6-bbb2-4bbad3aa3201" data-file-name="components/accounting/financial-reports.tsx">
          <h2 className="text-2xl font-bold" data-unique-id="87410ab4-12fb-4eb3-933f-75a942469f5e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dfbe114d-6b8d-4dcf-ab18-6cd133f6b423" data-file-name="components/accounting/financial-reports.tsx">Laporan Keuangan Detil</span></h2>
          <p className="text-muted-foreground" data-unique-id="23efb232-0d73-4030-8de1-7bb8aaef6384" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1b443ecb-d823-4af4-b181-e989f7f1ecb5" data-file-name="components/accounting/financial-reports.tsx">Analisis mendalam kinerja keuangan perusahaan</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="4d66097b-bac3-4fdc-8545-097c8e98c56c" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
          {/* Period Selector */}
          <div className="flex items-center gap-2" data-unique-id="a80b47d8-2b04-47c6-9297-58d3dcac14ec" data-file-name="components/accounting/financial-reports.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="5775a599-9392-4e91-9ca0-cd9ec519b0ba" data-file-name="components/accounting/financial-reports.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as Period)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="4a697a02-e060-4856-86bb-d23c9aea8824" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {periods.map(period => <option key={period.id} value={period.id} data-unique-id="439827be-d5a2-4be3-9739-2a30ec5c7f77" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{period.label}</option>)}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2" data-unique-id="fe42d8f4-91e0-4bee-af1f-df023e00229d" data-file-name="components/accounting/financial-reports.tsx">
            <button onClick={() => handleExport('excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="b04a941a-cca1-47b0-b19f-eeb22c3d5b86" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="caebd5fa-4c8c-4712-b8d7-ece44d2815a9" data-file-name="components/accounting/financial-reports.tsx">
              Excel
            </span></button>
            <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="0f5ce31f-a97f-4d8b-95f9-2b78ba6961c3" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="3a6c628e-a20c-4f57-ad68-fd990ae6a8b2" data-file-name="components/accounting/financial-reports.tsx">
              PDF
            </span></button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4" data-unique-id="18f01bfa-46e6-4618-a58f-0aaba27577e6" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {reports.map(report => {
        const Icon = report.icon;
        const isActive = activeReport === report.id;
        return <button key={report.id} onClick={() => setActiveReport(report.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="c28a250d-8314-4a83-bedc-6c15479029cd" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
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
    }} data-unique-id="70b3c2e9-802d-460f-aacb-17330c6f4912" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>;
}