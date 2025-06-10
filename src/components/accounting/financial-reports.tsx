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
  const renderBalanceSheet = () => <div className="space-y-6" data-unique-id="fa9d494c-2ae5-48af-bdc7-10fb1e63da3b" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="5e9e44bd-8cc7-4312-9832-ea6d193043a1" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="c79d7cba-9214-4b37-b0a6-6323138c1490" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="3abbc45d-d2d5-4762-bc68-51b83b5e9537" data-file-name="components/accounting/financial-reports.tsx">
            <PieChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="8418caaf-73b8-41f9-804e-c2bbf00af92b" data-file-name="components/accounting/financial-reports.tsx">
            Komposisi Aset
          </span></h3>
          <div className="h-64" data-unique-id="9917f7cf-92fc-4a66-928b-31d9bd09c754" data-file-name="components/accounting/financial-reports.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={assetData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {assetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="6aac8658-8367-4d90-a6bb-54ee7ac1e922" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="bba44232-4653-4ebd-ae58-f404475191fd" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="4bb534db-fe96-4e9d-b802-aec1217f2ab3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f43be667-6171-4545-a40e-4333e59a83a1" data-file-name="components/accounting/financial-reports.tsx">Neraca Ringkas</span></h3>
          <div className="space-y-4" data-unique-id="a11702f9-a70a-48c8-b5ba-03bb0ec65138" data-file-name="components/accounting/financial-reports.tsx">
            <div className="border-b border-border pb-2" data-unique-id="ee1aa901-6814-4ba6-a0ca-0ab4404db705" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="8949b841-a8f9-48ac-bae2-5257cdcb64ed" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5f9badbe-3b13-4b97-b736-664ad4af0740" data-file-name="components/accounting/financial-reports.tsx">ASET</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="62e4d57b-b7b9-4dd2-9fb3-89a5de6bfe81" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="19042a4e-ab8a-4dd0-b7e4-8e7ed4f56613" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="92f7bd6e-9302-4125-a400-d962b3f0394a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8eecf742-26fa-40a5-85b5-ca995c120755" data-file-name="components/accounting/financial-reports.tsx">Kas dan Bank</span></span>
                  <span data-unique-id="ef66b2b1-7578-4a21-9b5d-49d210c25b04" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ea68227e-1ddc-4389-bdf8-9232fef9f733" data-file-name="components/accounting/financial-reports.tsx">Rp 45.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="7e7ac48a-221f-493b-9352-cd797e4aaa62" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="6b7c3ec0-7c41-4d51-9c59-baa8441c6a1b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="05edfef7-c957-4f5a-97a9-471f7ae66187" data-file-name="components/accounting/financial-reports.tsx">Piutang Dagang</span></span>
                  <span data-unique-id="ec41adb6-a34f-43ec-acbf-a2f8f6e74ff7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="86a61cdc-adfc-4ba3-a4e6-5aba575fd238" data-file-name="components/accounting/financial-reports.tsx">Rp 18.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="582d8f92-a30c-4dab-8bf9-df1b03a5d77c" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="a3345a50-615a-40ff-a7ef-a8dc0640f362" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a3234752-6531-4e29-be91-501a9d7449b5" data-file-name="components/accounting/financial-reports.tsx">Persediaan</span></span>
                  <span data-unique-id="912ae4e6-ca29-4911-abd5-5adeb73202a0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5b292f26-73ec-448f-98c9-cac67d31e3b7" data-file-name="components/accounting/financial-reports.tsx">Rp 32.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="17ce6583-eafa-4902-a2f7-9ae65e77907b" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="a641a087-549e-470a-8e53-24f54778277f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="22603833-9e5c-439b-bc6a-e4d12a5419b6" data-file-name="components/accounting/financial-reports.tsx">Aset Tetap</span></span>
                  <span data-unique-id="7b25c329-82d9-4348-9974-c789cc6bbd6e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4866c4ba-30ba-4e0b-8fac-f4bdfc8a1828" data-file-name="components/accounting/financial-reports.tsx">Rp 85.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="d656b21f-8e44-48a0-af2b-88644657a9ea" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="e83bd5dd-6f68-44d5-8bbb-b05a9c8bd49b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="46a99b1d-d080-4846-8237-dc7e155cfd15" data-file-name="components/accounting/financial-reports.tsx">Total Aset</span></span>
                  <span data-unique-id="fc5458b5-ce21-4a43-becf-bc1c833bfeda" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="deac9e33-608e-447a-9cab-e2dbda7f4632" data-file-name="components/accounting/financial-reports.tsx">Rp 180.000.000</span></span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2" data-unique-id="f512b2bb-5d2b-40b6-b2f0-4760cd78b64a" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="c02d9740-df96-4468-97b8-610540a165ec" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="511968a6-f47d-4b3d-b489-4305bb0b5766" data-file-name="components/accounting/financial-reports.tsx">KEWAJIBAN</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="76280c24-e850-4ebe-b6e6-64980ff6d2c2" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="6cc8ab5e-8473-42ba-b971-374ce3b64f08" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="c0f5fe0c-096e-4393-bc5b-6a3c72d28f67" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="97b1de79-7c00-4b2d-bcbb-d908112467e9" data-file-name="components/accounting/financial-reports.tsx">Hutang Dagang</span></span>
                  <span data-unique-id="56c1ba3a-e162-43b1-ab7b-37c6f7424160" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3aa18778-24a9-4c1e-90a8-bd7d6980c245" data-file-name="components/accounting/financial-reports.tsx">Rp 25.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="acd00d10-1688-4f35-9772-0bb8b449bdae" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="84124a29-0a4c-4ecb-8621-20fa5c683314" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dabce771-ffa5-44e5-89c7-9ff3fdeff53f" data-file-name="components/accounting/financial-reports.tsx">Hutang Bank</span></span>
                  <span data-unique-id="dda6b8c6-04a8-4106-944e-0b53f7fce9c4" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e26ba57d-a84d-4b1d-9cae-567208ae21cb" data-file-name="components/accounting/financial-reports.tsx">Rp 35.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="78937635-90ca-49bb-8c35-63d7a7511d4c" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="ceeccbe9-eb53-404c-9506-8d09ae06e991" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fc4ededb-292f-44e4-8268-ca1cb87985cd" data-file-name="components/accounting/financial-reports.tsx">Total Kewajiban</span></span>
                  <span data-unique-id="7633ee6e-e6bc-49d3-8d98-6d813d9cbc01" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8bbb3244-1e61-4823-9f15-b2cb5610bda4" data-file-name="components/accounting/financial-reports.tsx">Rp 60.000.000</span></span>
                </div>
              </div>
            </div>
            <div data-unique-id="afdf7823-eecc-4416-ab95-f0bad99e50db" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="65b11a80-9286-45e7-8679-717185d1d635" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7f72670d-b143-44fe-9a68-2c39de709e4a" data-file-name="components/accounting/financial-reports.tsx">MODAL</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="3bdfc510-9c68-4453-af94-bca588fd79fe" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="8cecc116-b156-48d2-accd-809e8b472c69" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="9b8de99d-54e7-45d2-82bb-f2c13d3e4337" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6756de3f-1cf7-4295-8d41-c16dc2eb327d" data-file-name="components/accounting/financial-reports.tsx">Modal Pemilik</span></span>
                  <span data-unique-id="e368f2a1-42bd-4299-bf7f-5023f17a34b5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="30d06cfe-13a3-417f-ad80-c454f65e1026" data-file-name="components/accounting/financial-reports.tsx">Rp 100.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="da7b4984-8ae0-455e-993c-8781cca1136a" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="6556a8d8-687d-4bbf-8e47-ce1d380693c1" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="10054665-e34e-4b5b-8b0d-de1291e2bc10" data-file-name="components/accounting/financial-reports.tsx">Laba Ditahan</span></span>
                  <span data-unique-id="6ffe615e-4805-40cc-ba87-0aabea8196ce" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1834f412-f14e-462c-ac8b-feb4e0d5f777" data-file-name="components/accounting/financial-reports.tsx">Rp 20.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="4f2d44b0-aca1-4e50-a8a6-e0cca1637fc6" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="abd719cf-a524-49d5-9ccb-4614c986d2f3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="03dfe682-3a03-4a47-83a4-94f12cb7d909" data-file-name="components/accounting/financial-reports.tsx">Total Modal</span></span>
                  <span data-unique-id="83b8c4e6-a6e0-4a85-a0b4-7d4d2c0eda62" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e25a7f19-0eeb-4fe4-899b-46463de4f88c" data-file-name="components/accounting/financial-reports.tsx">Rp 120.000.000</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderIncomeStatement = () => <div className="space-y-6" data-unique-id="10ffcd33-e696-4295-97cf-6f6b26197d7b" data-file-name="components/accounting/financial-reports.tsx">
      <div className="glass-effect rounded-2xl p-6" data-unique-id="9e7baf7d-b487-4622-9c89-cff715fb4cee" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="633df2c2-6bb3-4c64-8048-230991c93354" data-file-name="components/accounting/financial-reports.tsx">
          <BarChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="b504987a-f68d-4d50-a3f8-ce3e840a6c78" data-file-name="components/accounting/financial-reports.tsx">
          Tren Pendapatan & Laba
        </span></h3>
        <div className="h-80" data-unique-id="d6440bb4-0ed2-427f-967d-9b499d9cc3df" data-file-name="components/accounting/financial-reports.tsx">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="01ab0ce7-4660-40a7-bd63-227812181319" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="cb5e52d7-d4c3-463a-8b2a-d258c6225aeb" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="5ce61184-44c4-484a-9512-25252ac8f2d8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="365a1ebc-1630-40d6-ba4c-eac2329aaef7" data-file-name="components/accounting/financial-reports.tsx">Laporan Laba Rugi</span></h3>
          <div className="space-y-3 text-sm" data-unique-id="7f006220-a70e-4eac-ada9-298288ff97d6" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-semibold" data-unique-id="4c17cd9d-8997-4c07-a886-9cdb651363c3" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="4e2dfe21-92ea-4610-96c1-e1dde6c0bde0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4b53cbf1-8c99-47bf-b20a-3dc9a8cdf37a" data-file-name="components/accounting/financial-reports.tsx">Pendapatan Penjualan</span></span>
              <span data-unique-id="17cbf1ce-8f80-4cb1-b56f-a494c486cf32" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5d8982d8-9fe3-4de4-9acd-5ea3331126ca" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
            </div>
            <div className="flex justify-between" data-unique-id="9bdb246b-43b6-4185-9323-470d164a629d" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="b1c8f525-a162-4ef8-9b6e-57356abaa47d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="71e666ea-410e-4d85-a9bf-115dd9105f86" data-file-name="components/accounting/financial-reports.tsx">Harga Pokok Penjualan</span></span>
              <span data-unique-id="dcc18447-fdc0-40ae-9829-ca58c1d6cacb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8a9537ba-a79c-45ec-a1ca-e1326aa776ac" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="8c1e9309-a36a-4e72-8882-ade0b309b4f1" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="e182f2c9-eb42-41ac-9ce7-6a96fbd1cf2e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="18802d1e-a112-4ff9-aae3-13108b120a77" data-file-name="components/accounting/financial-reports.tsx">Laba Kotor</span></span>
              <span data-unique-id="326d0079-e6ca-4bdc-b8db-acecee9e00f9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="423d69f1-184b-47a8-a068-d3114b133559" data-file-name="components/accounting/financial-reports.tsx">Rp 28.010.000</span></span>
            </div>
            <div className="border-t pt-2" data-unique-id="754be9f2-d2ae-43b3-b8c1-07a00d037c27" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="83bbb97b-f078-4b1f-a6f9-1de5f88eef6d" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="1f591270-0f78-410c-afa5-613adc4ff6ee" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bdb4b59b-47bd-4061-a833-f8f3ddad022c" data-file-name="components/accounting/financial-reports.tsx">Biaya Operasional:</span></span>
                <span data-unique-id="ec58e23a-f58e-4dbf-b684-45405bb5b1c5" data-file-name="components/accounting/financial-reports.tsx"></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="2acbbb31-dbb3-490c-a45c-ab04718ad3e2" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="6ef7b4fe-8eec-4b37-87f6-4c08f3e17374" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a5a36e0e-c621-4c26-aaf6-d021a1dc4c2b" data-file-name="components/accounting/financial-reports.tsx">- Biaya Gaji</span></span>
                <span data-unique-id="5edca836-ecb1-430b-9a70-d41ebe564bd9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b7ab5944-1290-4109-9c8e-057b576f0512" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="ffafe81e-4731-43e1-a928-742c10d9d478" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="09dd0c94-e5d9-410e-a1b3-48831e6bd7f2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7fb993bb-aa61-46bf-8394-681fefe814c6" data-file-name="components/accounting/financial-reports.tsx">- Biaya Sewa</span></span>
                <span data-unique-id="894f3e55-9242-45c3-a80e-28574dc61cbb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="969e0d02-00d0-4118-b6e3-fe21d9f31b5f" data-file-name="components/accounting/financial-reports.tsx">(Rp 3.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="496fa28b-3577-4575-9481-a8ef411c930e" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="ddfc82f0-6b20-428d-bdbf-90f40a881281" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7653ed84-87b3-4045-ab9b-d3c02a836e0c" data-file-name="components/accounting/financial-reports.tsx">- Biaya Lain-lain</span></span>
                <span data-unique-id="9f8f4990-b92f-4e5b-a6a9-3fea110538d7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="859383b8-e759-4c0b-98d1-41ac47a07380" data-file-name="components/accounting/financial-reports.tsx">(Rp 2.010.000)</span></span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="13979e57-d807-4da7-a4e0-f624f7b22e5f" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="f8d3a7bc-3e59-4efd-bc1f-a125511687c7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0416bdda-3420-4450-a058-083360ade8a3" data-file-name="components/accounting/financial-reports.tsx">Laba Bersih</span></span>
              <span className="text-green-600" data-unique-id="e35c44ef-c6ff-42b4-a20f-2acac170af45" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6aeb3625-676b-4b7a-b47e-e30a9e68e532" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="43db49cf-24ab-43af-aba6-43c8bd69f749" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="1ed565f5-fe4a-498c-89a8-464e353f8982" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8aadc9f1-b9ab-4cbd-adf6-04ce920e01d3" data-file-name="components/accounting/financial-reports.tsx">Rasio Profitabilitas</span></h3>
          <div className="space-y-4" data-unique-id="a6c9cb2d-2d7d-4a71-a9ea-91215cf8ce29" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="4f0bb3cf-28a6-4ac6-bf23-54b55468a2f4" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="8dc0b925-29e3-48ed-88e6-7523e63d5412" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="f64daa24-95a7-422c-abf0-695f0176a76b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f5453096-7d82-43ce-a64d-0794410f2a63" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Kotor</span></span>
                <span className="text-lg font-bold text-green-600" data-unique-id="5180793c-692d-4324-9979-37a1fe1df567" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e3a94d4c-918d-4138-bef8-2bdd5154fef3" data-file-name="components/accounting/financial-reports.tsx">28.97%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="78c980de-04d1-4de7-a443-31e6a834bdfe" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="3284cb93-19f2-4ae5-8a88-9b7cb6ffa509" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="64e976d5-0147-4e74-b504-f15d87197fc0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b08cd1b1-6471-4134-9978-06679df8cbe2" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Bersih</span></span>
                <span className="text-lg font-bold text-blue-600" data-unique-id="bf3150cb-5130-4173-b43a-c7ac6d4ab65c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="05bd0feb-b189-44c8-ac4c-0abd2d0934e0" data-file-name="components/accounting/financial-reports.tsx">15.51%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="5b6db7cf-34b7-4765-8a12-7a02c5cd6420" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="da8edb86-d700-4ea5-a08f-fd00ae9c7a5d" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="98d3d3e2-cf8c-4d50-912a-66bb8de575d5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="84fd5211-67cd-4bed-9411-d15e9c2da182" data-file-name="components/accounting/financial-reports.tsx">ROA (Return on Assets)</span></span>
                <span className="text-lg font-bold text-purple-600" data-unique-id="5135093a-81f2-4063-963d-563f8601f6bf" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f0cbc42e-21b4-4c5c-a876-91d7256da207" data-file-name="components/accounting/financial-reports.tsx">8.33%</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderCashFlow = () => <div className="space-y-6" data-unique-id="7d634e09-031a-4c12-919c-d8fadf30627e" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="ac84daa6-be13-4aa0-be62-a443674d622b" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="ef9ed60e-097a-4a1f-a107-2e7e6ef59649" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="087ef234-011c-4d09-9721-ab6c0eab251f" data-file-name="components/accounting/financial-reports.tsx">
            <LineChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="1b47abde-99d3-4830-a584-419de76aa93b" data-file-name="components/accounting/financial-reports.tsx">
            Tren Arus Kas Bulanan
          </span></h3>
          <div className="h-80" data-unique-id="eec2f3b7-a908-470a-8e42-bfc05cc7c647" data-file-name="components/accounting/financial-reports.tsx">
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

        <div className="glass-effect rounded-2xl p-6" data-unique-id="3c3e7b4a-266a-4f93-8e4d-cf4308972b1c" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="f8b2530b-5ad7-414b-930e-97939901ab83" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="76285f79-dab4-44d2-8a87-590154c8e2e8" data-file-name="components/accounting/financial-reports.tsx">Ringkasan Arus Kas</span></h3>
          <div className="space-y-4" data-unique-id="56a42651-89aa-4d72-a356-8be19d96ddf0" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="f3f2ed40-c3e9-48e7-85a8-3f39db4b7d26" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="d819ad64-70ed-4d2a-8122-8568338c7dad" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-green-800" data-unique-id="841799fe-6734-48ef-a003-eb0f53399105" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="de6c2bfa-694d-491e-ac43-14785e8c0800" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Operasional</span></span>
                <span className="text-xl font-bold text-green-600" data-unique-id="2aec4f8f-0e27-491d-8a9d-b98f5091805e" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="cf7d910a-063e-40f5-92bc-8e6ec69bb863" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.operating, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="0dd69a2b-2a6b-467f-a87b-ce5e2461cc83" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="e3e4907c-91a8-4483-96ed-8308fb92a465" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-red-800" data-unique-id="4babd81a-c6af-429e-9b80-c30c4261852c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ac44eb7f-4217-4ac2-a14c-920090f58c15" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Investasi</span></span>
                <span className="text-xl font-bold text-red-600" data-unique-id="f522d64d-b2d5-40eb-a073-dab5e37ca337" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="a4c35ab6-bfeb-4eea-a150-12797a7382e0" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{Math.abs(cashFlowData.reduce((sum, item) => sum + item.investing, 0)).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="095936ff-1f2e-47be-8ebc-9522b9cfe484" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="11456638-6622-40ad-b4a1-80dab1ccfce0" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-blue-800" data-unique-id="50efb04a-e93f-43dc-b7a8-0f836c98aac8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f3aa5f34-249d-4bed-b795-8bc9a8418345" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Pendanaan</span></span>
                <span className="text-xl font-bold text-blue-600" data-unique-id="b9eca430-c965-4d86-8a2a-526505e995f7" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="e2554a48-5db6-4bfb-bec2-8a373dcc491a" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.financing, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6" data-unique-id="a6713d3c-77e6-42b2-9ff1-313ca8fb19ce" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="fb06fd7a-c0b8-4a1f-a554-a26ed9cf07b1" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="afd32775-312d-4728-bbc0-7dbf7b3e21cb" data-file-name="components/accounting/financial-reports.tsx">Laporan Arus Kas</span></h3>
        <div className="space-y-4" data-unique-id="c190c5c3-1358-43fb-9a9d-0dbba6bcb924" data-file-name="components/accounting/financial-reports.tsx">
          <div className="border-b border-border pb-4" data-unique-id="acc44ab1-d901-4222-a04f-bd1e6bf9d261" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="4cf2c97d-028e-420c-a0dc-f575487d6e13" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="93b41e54-7513-4405-98f8-70ddb99c1d8b" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS OPERASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="21c88253-e984-40c0-b733-da0c9f21b511" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="86a74cbf-a03c-4c55-a921-0bef627afc57" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="e849a69c-62e5-4dd8-81f7-d988f624a01a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e86e2afe-5158-45cb-91f7-4ae39ab12eda" data-file-name="components/accounting/financial-reports.tsx">Penerimaan dari pelanggan</span></span>
                <span data-unique-id="4128a235-5ec7-47cf-b8dc-384784672d48" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="69b2fe74-b560-4a1b-a26f-b34c1b0e0f20" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="a6f89f43-58d7-472c-8819-66971ff4c5da" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="0652816a-c3f2-4ca7-a8ff-7a68e83e64c5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e2366fad-f85e-4a94-9142-f39138daf348" data-file-name="components/accounting/financial-reports.tsx">Pembayaran kepada pemasok</span></span>
                <span data-unique-id="91a15c11-ba57-4e88-95c9-f63b3d1634df" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="50415c9c-9a43-44de-88b2-e0e6f46dea68" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="a66a3111-752e-4d86-8672-fce973c0cfaf" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="a9bd8822-5a0c-4313-84cd-d93e3ab54722" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7c771552-5b96-4f86-8830-89ee8e45e8e0" data-file-name="components/accounting/financial-reports.tsx">Pembayaran gaji</span></span>
                <span data-unique-id="8fc64a84-1a2f-4891-a1fc-8408aacfd116" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="02e9bfb5-2362-4e35-bfe5-29fb0e3347e4" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="98ac7605-ffcb-4b6e-ac06-23fc50c8acb5" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="357718ca-98a6-486f-b4ce-bf1358ce2120" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7f4fdae5-1cc6-4314-8f01-7219518f67b8" data-file-name="components/accounting/financial-reports.tsx">Pembayaran biaya operasional</span></span>
                <span data-unique-id="d58ce973-c4b4-48b0-8c79-ee64366dd17f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9c821492-d0e7-499c-80b0-be4d5331e86f" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.010.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="069b42b3-3a1a-4e14-b8fe-2b1247127b7a" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="3c80f321-289b-4a3a-8491-6dfc67377e87" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5622fb76-1b0f-42ac-99cb-8ece1c8a25af" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Operasi</span></span>
                <span className="text-green-600" data-unique-id="5be5ead9-a7c1-4639-b9e7-a66c302ed017" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7b17f7f2-91f4-470f-af97-54ca1dfd1407" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4" data-unique-id="4be90053-efad-44a7-9149-3dadc495d3b4" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="30f0b8ff-e997-4955-8658-202c7b4c5163" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="baa62624-9fba-43d1-a97a-729670bdeedd" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS INVESTASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="bf9af6a4-0271-4806-9502-91f538e41ae4" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="3c8a768a-b84b-4b09-9676-8ab6b8ff042a" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="2f3e5612-fc82-42ff-b019-cf30a2b1f534" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a0c56d65-bdc4-46cf-a346-3917e6cec677" data-file-name="components/accounting/financial-reports.tsx">Pembelian peralatan</span></span>
                <span data-unique-id="6c16bbdb-3151-424a-a47b-3c67e100c553" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0d726c77-c4b6-4c60-b0af-7cf18ccea120" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="b761d8e1-9e2a-4ed1-8ada-9a375fc89060" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="757278ae-019f-428b-b6d8-dbd4f5f72e4c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="772bab3e-7f16-4953-860a-bae20b9a8a74" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Investasi</span></span>
                <span className="text-red-600" data-unique-id="0c65eae4-d46f-4752-9842-91e560eab6c5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c21b360d-d8ef-4005-853c-c5bce5890f85" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
            </div>
          </div>
          
          <div data-unique-id="14d93557-25b9-455d-ad84-8a5b884b1759" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="46507f61-fccf-4945-af9a-ae29b5181d9b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="03c97ba8-10e1-4eef-a9bb-3a6f12d138d4" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS PENDANAAN</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="d421eafa-5595-46f9-b043-9ec81e8b1164" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="355d5aed-6802-4c9b-acff-98d5c2eda8a6" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="e602b3d2-592d-48e0-9100-d3b9dd38a45c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4abd74be-ebb8-44b8-a53b-c43d9c7f3154" data-file-name="components/accounting/financial-reports.tsx">Pinjaman bank</span></span>
                <span data-unique-id="b6da4dcb-61b0-450d-9b1f-7bf7e80a882b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a3d73020-c16b-4cfe-b847-049592596d75" data-file-name="components/accounting/financial-reports.tsx">Rp 10.000.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="614285e1-113e-4e2e-907f-76a6c4edd8e7" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="8aac90d0-43fd-4468-a31b-ecadf77874ac" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a5199e15-3e3f-42b1-b4db-cdaa509ae4b7" data-file-name="components/accounting/financial-reports.tsx">Pembayaran dividen</span></span>
                <span data-unique-id="7c2b04a0-8ac2-43fe-9989-2aecdd08e0b7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="368bb072-7a08-479a-b18b-0176b4ae7510" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="91cf10a2-0c1b-4ed2-a1a7-9ff6d4acef8c" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="91b1efb1-ca43-4e67-9829-68ae103de8ca" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3185a186-4ec6-46ca-b315-05174b8bc6db" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Pendanaan</span></span>
                <span className="text-green-600" data-unique-id="aa1b4dc5-82df-4ebe-8516-a058e74eee5b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="35c7a38d-ec9d-434c-97f5-d4ee7b481d18" data-file-name="components/accounting/financial-reports.tsx">Rp 5.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4" data-unique-id="0fa7d6bc-2bde-4a30-ae40-5fbff6902d81" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-bold text-lg" data-unique-id="2f3f9701-e049-49c0-a7a6-3647bd82fda7" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="df5f2aeb-27fd-4103-ae2b-236b08767283" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1b8db8a1-7eee-402f-bea0-afe1dc32f046" data-file-name="components/accounting/financial-reports.tsx">Kenaikan Bersih Kas</span></span>
              <span className="text-green-600" data-unique-id="e4663109-82ca-435d-82ca-4f024cf8bed8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fef50f4f-fd18-409b-88e6-70ad081f75d8" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-6" data-unique-id="e25ffb01-985c-4daa-ba20-7b444ff8797d" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-unique-id="e58d79e8-0eef-4b35-8265-36515e31583a" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {kpiData.map((kpi, index) => <motion.div key={kpi.label} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="cc5500d0-5d22-454b-8d64-492b7b2842e4" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex items-center justify-between mb-2" data-unique-id="d96021a5-c7e5-442e-aeee-33fa17fd6f6b" data-file-name="components/accounting/financial-reports.tsx">
              <h3 className="text-sm font-medium text-muted-foreground" data-unique-id="19eebda9-e75a-43cd-87a1-81f1f0ae71c0" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{kpi.label}</h3>
              <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="32cd91d2-23a6-42c5-9eab-65c59abeebad" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                <TrendingUp className={`w-3 h-3 ${kpi.trend === 'down' ? 'rotate-180' : ''}`} data-unique-id="dcff58dc-9837-42b3-b404-ceb76b4a00ab" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />
                {kpi.change}<span className="editable-text" data-unique-id="591fc618-aded-48bd-a8ae-699bfc4e8814" data-file-name="components/accounting/financial-reports.tsx">%
              </span></div>
            </div>
            <div className="text-2xl font-bold text-foreground" data-unique-id="75a74d7e-e2c6-4faf-8c3e-e09e7a778d19" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {kpi.isPercentage ? `${kpi.value}%` : `Rp ${kpi.value.toLocaleString('id-ID')}`}
            </div>
          </motion.div>)}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="d0b18cf3-a867-41af-a2f5-c0131506b65b" data-file-name="components/accounting/financial-reports.tsx">
        <div data-unique-id="c324fb69-f5e9-45ab-87cd-dc92d512cc54" data-file-name="components/accounting/financial-reports.tsx">
          <h2 className="text-2xl font-bold" data-unique-id="215d5a5f-0956-478a-a1fa-dfab0d8d23ec" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="20aea2f3-3585-4fb6-ad6f-abf41e7e8c18" data-file-name="components/accounting/financial-reports.tsx">Laporan Keuangan Detil</span></h2>
          <p className="text-muted-foreground" data-unique-id="9e591657-48cd-42fb-94ba-2110beaa9d14" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="81406d72-b18e-483d-a50d-aeb49fb6f639" data-file-name="components/accounting/financial-reports.tsx">Analisis mendalam kinerja keuangan perusahaan</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="03300283-c756-444e-ae13-3b417b0f030d" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
          {/* Period Selector */}
          <div className="flex items-center gap-2" data-unique-id="d34184b1-04da-4fe1-ad7a-50a59f5eafd8" data-file-name="components/accounting/financial-reports.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="d8b7c6d3-509d-46ac-8fc5-0e66e1ee8967" data-file-name="components/accounting/financial-reports.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as Period)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="8720c80f-30d8-49d9-9de4-c217dfd7337f" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {periods.map(period => <option key={period.id} value={period.id} data-unique-id="3c1f64a1-3991-49b1-af61-5facd2b76e1f" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{period.label}</option>)}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2" data-unique-id="d80eff86-0007-406f-a288-2c0664f16675" data-file-name="components/accounting/financial-reports.tsx">
            <button onClick={() => handleExport('excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="5be6f8be-c92e-4443-92b1-70e629938e72" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="76f32925-c8e5-47e4-890b-92a2f40689b8" data-file-name="components/accounting/financial-reports.tsx">
              Excel
            </span></button>
            <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="3f088132-c39a-449d-b7ef-0381a333b9c5" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="af4d6412-c675-46c4-b395-13ff5d62580c" data-file-name="components/accounting/financial-reports.tsx">
              PDF
            </span></button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4" data-unique-id="4e3e5ab7-677f-489d-b49a-1a3921e8adfe" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {reports.map(report => {
        const Icon = report.icon;
        const isActive = activeReport === report.id;
        return <button key={report.id} onClick={() => setActiveReport(report.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="22b0440e-e0f3-4e23-bc30-c83e15a8ff78" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
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
    }} data-unique-id="4ff1ad13-8bb9-47b3-a8f4-7ff27c9aa5fe" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>;
}