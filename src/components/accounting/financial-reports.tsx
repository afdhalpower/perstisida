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
  const renderBalanceSheet = () => <div className="space-y-6" data-unique-id="405f0a3c-d778-4fe0-8d1f-b0de8e49a76e" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="d32e148f-f43b-4d7e-bd8a-283ba923efc9" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="79eabbeb-2cd2-4202-bb11-7de53be72afc" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="0e3f54cb-3a68-42b3-9e8f-362fea10f5fc" data-file-name="components/accounting/financial-reports.tsx">
            <PieChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="91f21c0c-2af0-46bf-ba07-3e23281835fe" data-file-name="components/accounting/financial-reports.tsx">
            Komposisi Aset
          </span></h3>
          <div className="h-64" data-unique-id="79744fb7-b753-461e-8e2d-6ac1d2d0bc4c" data-file-name="components/accounting/financial-reports.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={assetData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {assetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="a1ec411e-3ff2-4256-bbe1-3a1115b09a04" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="241f2d3c-e0c3-415f-b8ab-2469ed447c82" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="da520f53-3cdf-450d-be41-691746f07ff2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b04f2532-8f80-4e2a-9033-195474061bff" data-file-name="components/accounting/financial-reports.tsx">Neraca Ringkas</span></h3>
          <div className="space-y-4" data-unique-id="3e2c9d27-c0b5-4f64-898e-214195328888" data-file-name="components/accounting/financial-reports.tsx">
            <div className="border-b border-border pb-2" data-unique-id="91c0e21d-9c6b-43a2-bc44-046e0c86b735" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="e2ec0e6d-01d3-49d7-a3e7-ba525ec48793" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fef356b1-a0d7-4eee-920a-88be18796d2a" data-file-name="components/accounting/financial-reports.tsx">ASET</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="f5a1d6b3-c3b2-4df6-8ce6-159bd169a203" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="0ed0409b-9cc3-406f-9b98-2876bce71a78" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="e0dba7e6-4c3b-4a47-ab9e-b00b799d09dc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="93e984b6-6b0a-4c98-aee1-b70cb773ac31" data-file-name="components/accounting/financial-reports.tsx">Kas dan Bank</span></span>
                  <span data-unique-id="f59a25b1-68da-4ded-b1ed-71ab8b1d15ce" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="eb3ab3da-fcfc-4983-8c21-9f9f3cda437b" data-file-name="components/accounting/financial-reports.tsx">Rp 45.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="5216558a-1160-4648-9e02-620aadf8810b" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="14bbbcbe-9708-4f78-b7a4-ef6da294b6af" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="432a5327-c8d6-4f98-ae1d-52c77fce2aaf" data-file-name="components/accounting/financial-reports.tsx">Piutang Dagang</span></span>
                  <span data-unique-id="9a70cf19-54dd-402e-87d6-b99c1f32644f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0794e48f-7787-4684-970b-d1428152f62e" data-file-name="components/accounting/financial-reports.tsx">Rp 18.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="fbd6a32c-3b8b-4c18-b1a0-a0face03d3c7" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="01c16565-7051-4d70-a3c8-05cb3caef091" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="daf706cd-d199-4836-b97d-79651d7ef13c" data-file-name="components/accounting/financial-reports.tsx">Persediaan</span></span>
                  <span data-unique-id="ce04509a-c1b1-4678-bf3a-7949e10a9364" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b2f5e4e3-2938-4255-933c-83438e1b3401" data-file-name="components/accounting/financial-reports.tsx">Rp 32.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="8506873c-b818-4e99-bec4-de8f6ea015c8" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="5352f4be-d7ac-4c2d-8c3f-4b5f99b4595c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2f49b6ba-07d2-401c-aa0f-dffba1978386" data-file-name="components/accounting/financial-reports.tsx">Aset Tetap</span></span>
                  <span data-unique-id="484bf2b6-0b00-4e79-b02b-ab0952ed760f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="98f914d4-d9a8-4f2f-b929-4d7bb2ae906f" data-file-name="components/accounting/financial-reports.tsx">Rp 85.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="10fd12da-4f98-4c2c-a4a0-0546803d8659" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="473f871a-29f4-4ca4-99a2-65d9f559e2ab" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="049e62f0-605b-4344-9b08-b6d8e9dda8c0" data-file-name="components/accounting/financial-reports.tsx">Total Aset</span></span>
                  <span data-unique-id="ccdd1dec-4693-4f66-aa13-f558648d01f0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ed130d83-6736-4c3c-8a74-f896888a4a03" data-file-name="components/accounting/financial-reports.tsx">Rp 180.000.000</span></span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2" data-unique-id="6ba70795-f039-4099-ac2b-f1dd3d2e9b7c" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="45b5467d-3b36-42ac-af00-30d26c4b62b6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c6e195e0-1701-4a85-9bc5-1afed8be12aa" data-file-name="components/accounting/financial-reports.tsx">KEWAJIBAN</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="9c48674d-45bf-42d9-a589-8934769de99e" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="4a2b0108-6c3b-4f21-a34a-06b26ac7c8a6" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="41d1b8ef-1519-4f8b-80db-331771d0e824" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="97570ccb-1e8c-4703-a345-a5b0ff4617a3" data-file-name="components/accounting/financial-reports.tsx">Hutang Dagang</span></span>
                  <span data-unique-id="99ec83fd-5451-47cf-9cbc-b6afe3e7ac7e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0c54942f-ea99-494b-999b-754946553af6" data-file-name="components/accounting/financial-reports.tsx">Rp 25.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="203d30ce-2c9b-49b7-bd3d-e509b67468bc" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="c032c5e7-3b4f-4836-9dcc-de0d5e7304e7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9600994c-11d4-48f9-9bca-e2e6e1955de4" data-file-name="components/accounting/financial-reports.tsx">Hutang Bank</span></span>
                  <span data-unique-id="0c722c9b-42a3-45b4-a5c0-12a44b7a0d12" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="35548a9b-8196-4d4c-ae63-4acca579e85d" data-file-name="components/accounting/financial-reports.tsx">Rp 35.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="56929a30-425a-4ea8-b56d-84e429000bb0" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="680e5ff6-7386-4d37-88ba-332bda8b8fdd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="527c6eda-da31-4333-badf-3496e230d870" data-file-name="components/accounting/financial-reports.tsx">Total Kewajiban</span></span>
                  <span data-unique-id="f8fc1aca-db28-449d-8af0-f21f0d8c9ffc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="af68428e-854f-4859-8343-029b3755c8d2" data-file-name="components/accounting/financial-reports.tsx">Rp 60.000.000</span></span>
                </div>
              </div>
            </div>
            <div data-unique-id="9aeeda94-c6f4-40fc-96a0-93eacc1444b0" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="e977141a-8615-427c-b18e-1a010a3a4669" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dd56e289-9a54-450d-b08d-c0605e0d0537" data-file-name="components/accounting/financial-reports.tsx">MODAL</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="54338c42-21f9-4295-93b1-eda48dd981fd" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="4a588da9-a2b8-4c2d-8471-76dad649f6fb" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="d2b54825-6418-4cd5-a5e4-f229c49eb365" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="038b2011-42c5-444c-b0cb-35faf3e6beda" data-file-name="components/accounting/financial-reports.tsx">Modal Pemilik</span></span>
                  <span data-unique-id="6b4b657b-1c50-430d-8eea-c8b7aac4c64b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7f3ca677-769f-4ef7-99b4-97ed783b3b04" data-file-name="components/accounting/financial-reports.tsx">Rp 100.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="bae2ba4a-e0ff-48f4-8d86-0c2a1a619c1e" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="3cb85551-50a4-4314-b036-194b19222173" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6465c75d-8234-4361-948a-705e884f3810" data-file-name="components/accounting/financial-reports.tsx">Laba Ditahan</span></span>
                  <span data-unique-id="242e33ff-13d1-46d2-917a-e23712e2fa9d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="be980b2e-0d2f-4302-a1eb-f0cb967216dc" data-file-name="components/accounting/financial-reports.tsx">Rp 20.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="eb3b41fb-da15-4fb4-bb7b-d265bfb631aa" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="efb18f7c-61ff-420a-8028-ffe29e0000d5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="eb70ba2d-e79d-4005-8359-18a88004d07f" data-file-name="components/accounting/financial-reports.tsx">Total Modal</span></span>
                  <span data-unique-id="0f99dda2-d01b-4f92-9d23-4d91931b1a1c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="977675e5-c12c-486f-a42a-bc03670f59ee" data-file-name="components/accounting/financial-reports.tsx">Rp 120.000.000</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderIncomeStatement = () => <div className="space-y-6" data-unique-id="d124bacf-b3fd-42cf-9f33-68dd9f535031" data-file-name="components/accounting/financial-reports.tsx">
      <div className="glass-effect rounded-2xl p-6" data-unique-id="15ace960-86ac-41e8-92f1-60cd2477628d" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="73e3780b-a253-4881-83b3-b051c02cc72c" data-file-name="components/accounting/financial-reports.tsx">
          <BarChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="91e88ce7-3d32-404c-9025-39db34e49998" data-file-name="components/accounting/financial-reports.tsx">
          Tren Pendapatan & Laba
        </span></h3>
        <div className="h-80" data-unique-id="aad7c028-8288-4164-bd6f-f1fd295f73b2" data-file-name="components/accounting/financial-reports.tsx">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="9dc91068-f099-4756-b50b-34b2df6ba945" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="4f5a4533-d822-49e8-9332-8c9d073d95c7" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="cfc8ed40-024f-4d17-8e04-682c0fa9f93a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c8a6ebf7-9756-4a5a-842a-1dc63ff5e3cf" data-file-name="components/accounting/financial-reports.tsx">Laporan Laba Rugi</span></h3>
          <div className="space-y-3 text-sm" data-unique-id="0a213a67-807d-4dab-9f7b-7092a0c28589" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-semibold" data-unique-id="fe854058-53a2-428f-8228-1e4a69124857" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="bf1ee105-fdd2-4b61-ac0c-d6a8aab2b5d6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="096846ab-982f-4d7c-98da-a32ccbb494b0" data-file-name="components/accounting/financial-reports.tsx">Pendapatan Penjualan</span></span>
              <span data-unique-id="4808b618-fed3-48d5-a830-3ffc4f7dd6ef" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5d26a50f-71f6-4304-8824-1028b53b2606" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
            </div>
            <div className="flex justify-between" data-unique-id="182f238f-89e4-4613-bec6-0b1676dde31c" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="7ada61d8-1d85-4c3d-9802-a2846554277e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a3179562-6dcf-4e2d-8d51-1ca9634c9dff" data-file-name="components/accounting/financial-reports.tsx">Harga Pokok Penjualan</span></span>
              <span data-unique-id="d3220875-9fd8-4e33-b5d2-c95584714670" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a452d0b3-5db5-4c49-91ef-76f8f553a592" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="568f2e8c-8bea-4974-89bb-3f5485aa992a" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="bc7bfeff-c2fa-4d47-8550-4ab763e244d0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="507f7aea-7b1e-4199-b607-2afb33be9e71" data-file-name="components/accounting/financial-reports.tsx">Laba Kotor</span></span>
              <span data-unique-id="c18e9bef-9605-49fc-a6b4-6f7d439b13c2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3d608370-baf3-4a11-a09e-07f6b77793a9" data-file-name="components/accounting/financial-reports.tsx">Rp 28.010.000</span></span>
            </div>
            <div className="border-t pt-2" data-unique-id="45c86f2a-bfa3-4c2f-85d4-0ca5341fa1e2" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="3382404e-1f13-4852-8833-59ecae38a339" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="d74dc56b-cfa4-42c0-bb98-51d674bbf76d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f85a7c14-a5df-4fea-a7f8-81a44a90ad57" data-file-name="components/accounting/financial-reports.tsx">Biaya Operasional:</span></span>
                <span data-unique-id="307c87e5-5e7c-4686-89f0-cbf24505c3ac" data-file-name="components/accounting/financial-reports.tsx"></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="c8c316f4-af08-4954-9cbc-0ad3f4623d16" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="6ba5d94d-f115-4300-a5bd-d1734bc91ebe" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fb121e35-862d-4c82-8730-2ccf695b8226" data-file-name="components/accounting/financial-reports.tsx">- Biaya Gaji</span></span>
                <span data-unique-id="462a0e0d-2713-4e9f-80b6-1a8bf2533e49" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="da672109-d91e-4ec3-9f66-a80eea7af808" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="dbaeda0b-6565-4921-b15d-0768ade4d2bb" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="52075109-9568-4879-af2f-d01355389063" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e30a594f-13cd-4dfe-b6e8-0d0dbffbf448" data-file-name="components/accounting/financial-reports.tsx">- Biaya Sewa</span></span>
                <span data-unique-id="6762a00e-74e9-4dda-9bba-a92e0ba0c3ba" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dfa013d3-70f7-48c8-91a1-a9a8e4fcba48" data-file-name="components/accounting/financial-reports.tsx">(Rp 3.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="af176d21-c3e8-475d-b2d8-08d203dccb80" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="e0a1ed27-cf0f-40c5-83e5-d6f57f7446cc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="82ae02ec-1bd6-4bc3-a884-542d2eafef2d" data-file-name="components/accounting/financial-reports.tsx">- Biaya Lain-lain</span></span>
                <span data-unique-id="e2790c14-b20c-430b-8a0d-92d3519c0020" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8f52bcce-8ee7-42c8-b7e4-4e200efd1506" data-file-name="components/accounting/financial-reports.tsx">(Rp 2.010.000)</span></span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="be6ff6b5-6b1d-4372-bde2-404dfcc82980" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="d48047f3-c8d4-4b48-9664-c1349c886974" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="029b2ec8-7bcc-4b4a-8bd9-a04c57bd3d4e" data-file-name="components/accounting/financial-reports.tsx">Laba Bersih</span></span>
              <span className="text-green-600" data-unique-id="31ad7e47-c063-42cb-8a07-19137a645eb6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e4bd6183-c338-47ce-a240-f0a9a55d0d0e" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="d2937a8f-d211-40c2-a8f4-af538a6c9743" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="44348494-63b0-4f13-a679-90fea9e08aa8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="91f64e5a-1a41-4836-9d71-93a8b442df57" data-file-name="components/accounting/financial-reports.tsx">Rasio Profitabilitas</span></h3>
          <div className="space-y-4" data-unique-id="969b37c4-a250-4134-85ce-c7ad17b406c7" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="64a145ca-4c02-4406-ba5d-6887fe777116" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="d91c158b-d6ec-450a-aee4-5b27b3be86b7" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="78373cb6-37ef-4b96-8afd-e971d44134a8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ef026bdc-c2d5-4891-b0ca-e08949e580e2" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Kotor</span></span>
                <span className="text-lg font-bold text-green-600" data-unique-id="5c19fad1-e452-4e84-9cdb-ac8008836008" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d02d8ebc-ae05-4632-bd35-9425b9ed5317" data-file-name="components/accounting/financial-reports.tsx">28.97%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="94e29b99-0d3e-44e6-9da1-5d7c7b63cd61" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="df8cca08-250e-406c-9ea0-113ec7849616" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="840d0bc2-6b8a-434f-a722-d3985bc42ee2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d18426e8-6e71-4e7d-830f-46085a136ff9" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Bersih</span></span>
                <span className="text-lg font-bold text-blue-600" data-unique-id="5b2334e1-8d29-4215-bf2a-970e3d0b4888" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="826475bb-0eb8-4747-9bb4-dbb9a7b01c19" data-file-name="components/accounting/financial-reports.tsx">15.51%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="2f9f8f04-b6f5-4786-a77b-4345f055a5b6" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="c7d147a7-48d3-4914-96b0-c6d3cc10959b" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="33cb3b82-cc46-47bf-8506-494340e534a3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ead5c385-b2e4-4b45-959f-d778ef24a30d" data-file-name="components/accounting/financial-reports.tsx">ROA (Return on Assets)</span></span>
                <span className="text-lg font-bold text-purple-600" data-unique-id="4ff586e0-5633-4364-896b-a8eee085c7ef" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ccef04d9-a22d-4da0-b078-ec00353d51cd" data-file-name="components/accounting/financial-reports.tsx">8.33%</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderCashFlow = () => <div className="space-y-6" data-unique-id="2f928b73-566e-4018-8184-2775f3bdc4d7" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="156a0aa5-23a7-458e-a10a-be03036ea644" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="f5e48d6b-d225-4bcb-b358-17c75cfa41a6" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="82d0cd84-c1e6-4d55-90d3-8815dede37ac" data-file-name="components/accounting/financial-reports.tsx">
            <LineChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="60aeea5e-bff2-49af-b731-791c8b8a5407" data-file-name="components/accounting/financial-reports.tsx">
            Tren Arus Kas Bulanan
          </span></h3>
          <div className="h-80" data-unique-id="e4845a9c-7861-4b1c-b34c-f613c5067823" data-file-name="components/accounting/financial-reports.tsx">
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

        <div className="glass-effect rounded-2xl p-6" data-unique-id="cdcbdaa1-c018-46b2-80b2-0568991bf13d" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="7cb0fed8-852b-46e8-b11c-9424a0efe06b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="67e7f678-5b8e-4640-b333-bef5107ace7e" data-file-name="components/accounting/financial-reports.tsx">Ringkasan Arus Kas</span></h3>
          <div className="space-y-4" data-unique-id="2e4b7781-064f-4b2e-9076-3a0487f95385" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="3c220dbc-a334-4ba8-842f-6256cd56926d" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="e3d8d060-0c6c-47f8-8dfe-d6f76ab9e60f" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-green-800" data-unique-id="460a137e-89e6-4277-ace4-ccb320329968" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="af32bbde-3a10-487f-8015-ed1c32cfab96" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Operasional</span></span>
                <span className="text-xl font-bold text-green-600" data-unique-id="85617727-1581-463c-9b83-c9bd3cad7ca9" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="0cefef52-b0d3-4c2f-9fb3-1ba695496442" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.operating, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="e945ada7-c787-4647-bf9e-9d7bac18fe22" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="897c67e5-79fa-4faf-a907-c3d37c75baf2" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-red-800" data-unique-id="8b3e0f05-2acd-42ef-9e2d-dc1263d184fb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d7b6de71-f309-4aff-aff1-39b43c556c28" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Investasi</span></span>
                <span className="text-xl font-bold text-red-600" data-unique-id="8c974fca-a227-4c39-ac5a-848df855b09e" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="5e48f872-09bd-467d-88c4-2d8c358f3a97" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{Math.abs(cashFlowData.reduce((sum, item) => sum + item.investing, 0)).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="c4b9fd72-e706-44bd-8446-63cbd021789c" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="576cd06d-a430-448f-8cea-254a0c9d6474" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-blue-800" data-unique-id="d98fd83d-09ee-4386-917b-2e4ad69d2876" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3002cba8-1952-4d76-9421-525d70a101a3" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Pendanaan</span></span>
                <span className="text-xl font-bold text-blue-600" data-unique-id="e3c76f4e-9e37-4fca-a46d-82a94c3f8085" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="95031dcb-2aac-4b12-825e-651dbad77eb4" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.financing, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6" data-unique-id="fbb908ac-a043-4039-821d-300d3b712d68" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="712b270b-a5e5-4095-aaad-105df7ce398c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="40f19fe2-6512-4107-bf54-93cfec357097" data-file-name="components/accounting/financial-reports.tsx">Laporan Arus Kas</span></h3>
        <div className="space-y-4" data-unique-id="020372db-7113-4556-8c9f-90cdcd4e52f4" data-file-name="components/accounting/financial-reports.tsx">
          <div className="border-b border-border pb-4" data-unique-id="1eb19fc8-6cd7-46e6-8cb0-57ee97bda313" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="ae142409-63da-4839-8baf-d5daa7df6ca6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b5da899f-9bd6-4fa3-a77d-825bade6457c" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS OPERASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="aff4def6-2576-4fae-b41a-435b62aa99f1" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="b04f8131-a802-457e-bded-c99bf70ab397" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="329fb101-d68b-4642-9412-d912c05b8894" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f060e4ed-b7a9-4c60-ab55-f68a839c3557" data-file-name="components/accounting/financial-reports.tsx">Penerimaan dari pelanggan</span></span>
                <span data-unique-id="4ae5b313-88ee-45c4-8be8-bd8d247996e0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="23f8b27a-28fa-42dd-aa3f-fb006a8ea621" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="c4921bd9-0eba-4a63-91de-b7ca58a6d19b" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="8bc7bb11-86b8-4cd5-bed3-0fb721ff1cae" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a8d4bf3f-9d15-4960-b23a-f1353ae5911a" data-file-name="components/accounting/financial-reports.tsx">Pembayaran kepada pemasok</span></span>
                <span data-unique-id="08aa06e4-6017-411c-be1d-2f5b99b64d85" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f58a6c1d-fada-4b23-94dd-6c297aea3a52" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="ec8357f5-598f-4d0e-97ea-ecd38e8ab738" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="68e812d2-3f0b-4333-bcc2-5cfa70924397" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e6ba2ad8-8f95-4348-a9f7-c191b08295e5" data-file-name="components/accounting/financial-reports.tsx">Pembayaran gaji</span></span>
                <span data-unique-id="8d3751c1-8676-4cf2-a380-6dd96bbbceb9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="001751e5-f691-444f-867b-48e2ccfa2bea" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="e5e7fa2a-6686-4541-bd8a-6b23e1c550fd" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="44c67f0e-a3cd-4153-8480-3e015bf78bd1" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7d17cc38-3999-4c62-b3a9-e8b4efd057c3" data-file-name="components/accounting/financial-reports.tsx">Pembayaran biaya operasional</span></span>
                <span data-unique-id="07e1b381-2c2d-41e1-95e6-886063bd9ad8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="19b52e8b-5e5e-435e-a4eb-cdde713cbd6c" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.010.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="d43e3c9a-08cf-49aa-9e86-6d429451b717" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="bd1845eb-dc62-4e61-9be8-03456a080dbd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="440737cc-6d68-4717-9aa7-f23c1a20c429" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Operasi</span></span>
                <span className="text-green-600" data-unique-id="c55cde3e-1824-4447-89a6-4841c50d9a08" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f6042991-93ae-4dd5-a6a6-8ca5f11fd674" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4" data-unique-id="1e0c331b-35a0-4df3-a647-3ae36418c5d6" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="9aaf6513-aad4-4eaa-ae92-090580adc318" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c91524d3-dca2-4da3-96fa-b31bf2746a7d" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS INVESTASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="1c82e295-c2e7-4664-a6f8-54d4dc06540b" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="92c12e0d-9098-4fb8-86c7-8c71f693f2a2" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="b373f853-ec6f-423b-8b06-3724d4a443c0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7f4b5f77-0d87-4a81-8b13-41aa7548f4d8" data-file-name="components/accounting/financial-reports.tsx">Pembelian peralatan</span></span>
                <span data-unique-id="5e9e07f8-cbf7-4419-bd10-aea0ac16d579" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6efc24e0-eaad-4e11-926d-b7ec59ccb1d3" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="5135c95b-2dbc-4d1f-89f5-36e717be7c67" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="7d350ebe-ad4b-4938-b9fc-8b36b46f1e7a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9447f54e-a547-4452-82a0-b7604df9b9d3" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Investasi</span></span>
                <span className="text-red-600" data-unique-id="320c2b39-7afc-4c60-9474-2bb90e70ff13" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="632d1723-88ef-4b66-a069-99b4cf9453ab" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
            </div>
          </div>
          
          <div data-unique-id="408aadcd-9e32-46ae-a0a3-8ece4558e59d" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="a88af8c1-5f9e-4310-8fa9-fdb4cc6bd60d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4e7983fb-15d2-4721-a3d6-da6f95fdc3a0" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS PENDANAAN</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="ee035717-5217-4451-9684-c642248faa5d" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="a7dffb04-6ab0-4c35-ab43-0a96b6e6d1ad" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="0a2c607c-3cfd-4a1b-a81f-895076215166" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="95325ca7-5590-4485-a94d-ba9af2497a45" data-file-name="components/accounting/financial-reports.tsx">Pinjaman bank</span></span>
                <span data-unique-id="de54bd4d-2cdc-4887-90b7-c1478b795234" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8cc97db1-e439-4836-8bea-e9da660ba680" data-file-name="components/accounting/financial-reports.tsx">Rp 10.000.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="b1bc8a97-fed3-4969-8afc-fd1c049a112a" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="846dfbb7-4ee0-4bed-9867-dd057321a0eb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="026e3a02-ff05-468d-acfa-5d6d501269ec" data-file-name="components/accounting/financial-reports.tsx">Pembayaran dividen</span></span>
                <span data-unique-id="111233cb-7b22-430b-abc3-69c981a2d0a6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ae48c03e-9be1-4194-83f0-c239c9374e91" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="40b3559f-cba4-4704-9661-950df86e6125" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="2337a021-9e5a-4dd7-9bf7-74f8359746a9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fe5d7de2-8b04-45b1-a9ec-6bb345545d3a" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Pendanaan</span></span>
                <span className="text-green-600" data-unique-id="360b20bb-95e1-46a0-9bb8-1a6291b44477" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="33ccbd15-7d1f-44b2-a929-eaee8facf377" data-file-name="components/accounting/financial-reports.tsx">Rp 5.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4" data-unique-id="e92e8d5e-2877-4e8c-9073-cb76e9c9598d" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-bold text-lg" data-unique-id="0496d934-d43f-4d3f-a68c-6de2f36f00a9" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="1daf5aef-71b9-4156-bcfc-990733e551db" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4558d0b6-8b9d-4f3a-bfc4-ae35aa3cdc62" data-file-name="components/accounting/financial-reports.tsx">Kenaikan Bersih Kas</span></span>
              <span className="text-green-600" data-unique-id="a2a86c2c-0db8-4656-9181-4f4c0fff2def" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="32e59f2f-7843-46c9-9697-2e8ed236b7b2" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-6" data-unique-id="9e18ae52-4f66-4c9a-96a5-4dcf3c770a5f" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-unique-id="3c802412-4e01-441c-85f2-74cdbd76e6c8" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {kpiData.map((kpi, index) => <motion.div key={kpi.label} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="f41e7f34-8c56-4165-9c8b-e64213a2f55a" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex items-center justify-between mb-2" data-unique-id="2c49fb49-f06a-483d-a8bd-2182b4b1ffe3" data-file-name="components/accounting/financial-reports.tsx">
              <h3 className="text-sm font-medium text-muted-foreground" data-unique-id="823daa3e-5149-4d65-80f1-ac67bca88c56" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{kpi.label}</h3>
              <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="3b00d918-f4f4-4d73-9959-7b13fff10b5d" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                <TrendingUp className={`w-3 h-3 ${kpi.trend === 'down' ? 'rotate-180' : ''}`} data-unique-id="308681cd-6f9c-41b5-b772-6e4e08123394" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />
                {kpi.change}<span className="editable-text" data-unique-id="964ad220-c0d0-4c22-89a7-9eb8cfbcb0d6" data-file-name="components/accounting/financial-reports.tsx">%
              </span></div>
            </div>
            <div className="text-2xl font-bold text-foreground" data-unique-id="3c6a6e7b-b8e6-427b-8204-75d753871aa2" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {kpi.isPercentage ? `${kpi.value}%` : `Rp ${kpi.value.toLocaleString('id-ID')}`}
            </div>
          </motion.div>)}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="97befb2d-0b0b-4a76-ab74-8f0db080374a" data-file-name="components/accounting/financial-reports.tsx">
        <div data-unique-id="33bcab4b-8d22-4425-8749-f9bffc4cadc5" data-file-name="components/accounting/financial-reports.tsx">
          <h2 className="text-2xl font-bold" data-unique-id="8c552d1f-5921-46f2-9495-fa7077555760" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0dd1d3e3-4072-480b-b347-92521942487d" data-file-name="components/accounting/financial-reports.tsx">Laporan Keuangan Detil</span></h2>
          <p className="text-muted-foreground" data-unique-id="8c4d0209-5398-4d29-a198-32f0d4a507ff" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="41df3522-47a6-48da-a636-84f2533a9ab1" data-file-name="components/accounting/financial-reports.tsx">Analisis mendalam kinerja keuangan perusahaan</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="451b6b17-4a75-4ed4-a0ac-ba6b000cede0" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
          {/* Period Selector */}
          <div className="flex items-center gap-2" data-unique-id="093866af-0152-4789-9229-6f17b5f1f32f" data-file-name="components/accounting/financial-reports.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="5a3f44bc-33a6-4ee4-85f2-5e69321af8b5" data-file-name="components/accounting/financial-reports.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as Period)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="49dd1c79-82f9-4413-9340-fb5b3d978a2a" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {periods.map(period => <option key={period.id} value={period.id} data-unique-id="9f7975bd-c302-408f-88a0-85ab2bf5446e" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{period.label}</option>)}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2" data-unique-id="396e56cd-1abc-440b-91ce-0f7a27f2100d" data-file-name="components/accounting/financial-reports.tsx">
            <button onClick={() => handleExport('excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="2144a029-16be-461c-967e-537c6ab89e12" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="2b585277-57fb-4ef9-9b79-aaf3c5bce9d0" data-file-name="components/accounting/financial-reports.tsx">
              Excel
            </span></button>
            <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="aef6fc97-d0bf-4943-8a85-6737c8a8b3dc" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="51085ba9-80da-4bb1-8f7d-6d965bf183b4" data-file-name="components/accounting/financial-reports.tsx">
              PDF
            </span></button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4" data-unique-id="2d191150-00be-4e03-933d-dd5f9259de35" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {reports.map(report => {
        const Icon = report.icon;
        const isActive = activeReport === report.id;
        return <button key={report.id} onClick={() => setActiveReport(report.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="2ad2f278-895f-42f3-964b-9785dc192bce" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
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
    }} data-unique-id="0bf5e345-c62a-46af-b1c5-fac3b213e198" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>;
}