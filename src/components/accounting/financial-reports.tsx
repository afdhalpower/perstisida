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
  const renderBalanceSheet = () => <div className="space-y-6" data-unique-id="9ac7df06-8e12-46ac-9b41-5ec093410b34" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="faa29c37-05ce-45e5-ad70-e5376bec1990" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="ef6c1984-04c8-48fd-90dd-c101553e6082" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="3fdd59a6-7ddf-459d-99ae-be84164d006c" data-file-name="components/accounting/financial-reports.tsx">
            <PieChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="9e5b7fcc-21dc-4eb1-8738-1e20773cf1cd" data-file-name="components/accounting/financial-reports.tsx">
            Komposisi Aset
          </span></h3>
          <div className="h-64" data-unique-id="ea8a0866-dc62-4a02-bb1e-d4553c0ecef2" data-file-name="components/accounting/financial-reports.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={assetData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {assetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="52f70876-7fac-4328-856a-6b123f9d67b2" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="87b9ee6e-b083-47fc-bfd8-c3ca8fd0cd20" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="0d6acedc-fe44-4490-98b2-7c2fc618012e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c949ed28-1498-41fe-97a1-3e45b80751c7" data-file-name="components/accounting/financial-reports.tsx">Neraca Ringkas</span></h3>
          <div className="space-y-4" data-unique-id="9d0d05d7-0ab9-4517-b2ed-73143a3c1339" data-file-name="components/accounting/financial-reports.tsx">
            <div className="border-b border-border pb-2" data-unique-id="ccb069c2-c2b4-453b-80ee-634975131f5a" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="59dcc999-67ff-45ba-9911-88ca409f563a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d5325809-22d0-4c40-abad-91e04ee24093" data-file-name="components/accounting/financial-reports.tsx">ASET</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="15e1203d-5d03-4791-974e-50bed9204028" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="81c1a3c4-2537-440a-a9a7-f645d7422009" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="359f82d4-2677-4351-8138-a254e72c8f8c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="242701c2-312d-4310-ab48-db16d686aaf8" data-file-name="components/accounting/financial-reports.tsx">Kas dan Bank</span></span>
                  <span data-unique-id="3260a78b-137d-4c3a-959d-dfe40ac9437e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dd433112-7ce8-4ccd-babc-398b927432f6" data-file-name="components/accounting/financial-reports.tsx">Rp 45.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="989f3164-e7e6-4479-a225-e94955679c09" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="f7aa0ed5-0882-4ad1-b787-cabc266168e2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f7fb14c4-3c7c-4539-acd3-de21c6c4bee9" data-file-name="components/accounting/financial-reports.tsx">Piutang Dagang</span></span>
                  <span data-unique-id="5090e584-d4e4-4a1a-8f6a-92d0fd508782" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d71bad0e-fbf9-4cb1-8717-40688528c058" data-file-name="components/accounting/financial-reports.tsx">Rp 18.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="23df0c9b-9ecf-4d43-acb3-94ac9ae1ecd3" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="770e3587-a869-4d82-ad9d-4a8bbe9e2dc3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a2579684-3bf8-4cd5-91d0-f28cdc601b2b" data-file-name="components/accounting/financial-reports.tsx">Persediaan</span></span>
                  <span data-unique-id="80f7a127-0fea-461c-9e06-8e90f6fa95d0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b059257a-4600-4138-bedc-0785818d785d" data-file-name="components/accounting/financial-reports.tsx">Rp 32.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="4d51cba2-11ab-496a-968a-94845ca92f86" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="10fe51e2-f573-485a-987f-26cae104ebe9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6052e084-4d20-4ac3-a68d-0ddf6d57ab2f" data-file-name="components/accounting/financial-reports.tsx">Aset Tetap</span></span>
                  <span data-unique-id="bb73069d-fe80-4412-902d-25f66087e0ad" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="59f2083e-5f6e-4ead-aa60-6067e0d60046" data-file-name="components/accounting/financial-reports.tsx">Rp 85.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="099a5753-62a4-4baa-b516-d399a9922796" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="f0df63fc-2ba8-4b0c-8f0b-b627c212e038" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="eeed1fee-6e25-4c9e-97bf-47ecc0d0137b" data-file-name="components/accounting/financial-reports.tsx">Total Aset</span></span>
                  <span data-unique-id="10204e80-312e-477b-9c31-017ae193e533" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ac1f5e8c-1b5c-4275-ac17-2dae7c545450" data-file-name="components/accounting/financial-reports.tsx">Rp 180.000.000</span></span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2" data-unique-id="c0b06930-66da-4320-a753-6b60f618d083" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="dcaec0da-90f1-4b2d-ac97-8f72ddfe45ab" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="aa47198f-534e-4313-861b-d4afbc295dd2" data-file-name="components/accounting/financial-reports.tsx">KEWAJIBAN</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="3da25873-6666-4165-b6f9-8380bec6cca3" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="7841e6e4-707d-42f7-baf3-ed4f434af00b" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="4e7698fc-741d-4f4b-a3b1-b74fad05e044" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4bc82556-423b-4410-b7a1-30aa49bb3c20" data-file-name="components/accounting/financial-reports.tsx">Hutang Dagang</span></span>
                  <span data-unique-id="82ea7470-d05c-43a9-9fea-39c2affb37e0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="65eb7fd4-8f51-4b90-bc9f-c18aa97cca4b" data-file-name="components/accounting/financial-reports.tsx">Rp 25.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="46026fe0-1ee0-42e7-8bb9-31327f47ac54" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="3b5e179b-4dc0-4d7e-8065-5a2842361e4c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="daf4776e-f4de-4db6-911b-e3a2b18911f4" data-file-name="components/accounting/financial-reports.tsx">Hutang Bank</span></span>
                  <span data-unique-id="8b5509bb-f7e5-4ee7-85fa-cbb59a4c5680" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="45cf4900-4475-45fa-a7d9-d8637988383f" data-file-name="components/accounting/financial-reports.tsx">Rp 35.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="c28fb685-2a21-457b-99b0-11924cd45d41" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="e904e57a-8e86-405e-9500-4c556c4c0215" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e77255b0-320c-4363-befe-8d39c562b4f6" data-file-name="components/accounting/financial-reports.tsx">Total Kewajiban</span></span>
                  <span data-unique-id="c0f65cf6-3581-4b5b-a75e-13e611daeeaa" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="585336b6-b705-4b21-97ff-05632f575788" data-file-name="components/accounting/financial-reports.tsx">Rp 60.000.000</span></span>
                </div>
              </div>
            </div>
            <div data-unique-id="66361ebf-a1e3-4133-ab1b-d8f97d336d1f" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="30313e9d-9b60-4974-bcda-79a3f33f0d7f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="be4ca2d5-6290-474b-8ecb-57bc8ff56370" data-file-name="components/accounting/financial-reports.tsx">MODAL</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="aeab56a6-cfb6-4f71-9d30-6ca853b54184" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="8522f590-e08c-4df7-a4d5-c9e4552e0ba0" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="bcab0bc0-ab0b-4051-b20d-4daedcb272e3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d3bd2aa1-c129-4d30-bef6-9776da918af3" data-file-name="components/accounting/financial-reports.tsx">Modal Pemilik</span></span>
                  <span data-unique-id="cfcfaee8-25d5-49fa-a6bd-f74b7074f86f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d44cc480-e5df-4b72-a8ee-e474d1482b1a" data-file-name="components/accounting/financial-reports.tsx">Rp 100.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="3e8385d5-9256-43b3-a98f-35d99ee211e4" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="557952a6-71a8-4a17-b2d7-94bdce763b17" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="faf537b0-6466-4881-8506-c6e13d34fc34" data-file-name="components/accounting/financial-reports.tsx">Laba Ditahan</span></span>
                  <span data-unique-id="299a07e7-ecb8-443b-bd6d-209b4a7e602e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="bffe0d39-a4ac-442b-9488-50d96c0a9041" data-file-name="components/accounting/financial-reports.tsx">Rp 20.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="63035a48-ec32-4d3f-ae93-7d3c7fe2a199" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="bdae8d31-fa49-4ecf-ad0d-5982cbbc3607" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8f41e8d8-cd69-40ae-aeed-9a889411bad6" data-file-name="components/accounting/financial-reports.tsx">Total Modal</span></span>
                  <span data-unique-id="07c2c509-f58d-44b4-995f-e33e7c247a7f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="73cf8830-40ca-42ce-9e72-1c9d969df94f" data-file-name="components/accounting/financial-reports.tsx">Rp 120.000.000</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderIncomeStatement = () => <div className="space-y-6" data-unique-id="fb1adcc9-5852-4ec5-818b-181eb21f88f0" data-file-name="components/accounting/financial-reports.tsx">
      <div className="glass-effect rounded-2xl p-6" data-unique-id="a7954d5a-f8c7-40f1-ab0c-80ba311851bc" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="6cbcfdfd-3aec-49d7-8756-f30f8080772b" data-file-name="components/accounting/financial-reports.tsx">
          <BarChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="9f5851b9-280a-49ff-8639-d491deb2fd23" data-file-name="components/accounting/financial-reports.tsx">
          Tren Pendapatan & Laba
        </span></h3>
        <div className="h-80" data-unique-id="fb0f73b8-fb01-478b-8839-ebf67a728016" data-file-name="components/accounting/financial-reports.tsx">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="d2437afa-50ba-4ac2-b3ab-416dab4a56d5" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="6c1ee4a4-b48e-447f-9bcc-6b96e48f3b15" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="b7fb7339-ac31-4cdb-93d4-586ffe95625d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2c1979d4-a9c8-4ede-9752-35cd2e812519" data-file-name="components/accounting/financial-reports.tsx">Laporan Laba Rugi</span></h3>
          <div className="space-y-3 text-sm" data-unique-id="b4efa103-9189-4ae3-b8f1-adc5f3526e97" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-semibold" data-unique-id="42fce3ba-fadd-48da-8f8a-b4cf82567055" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="eb42f308-f536-4311-9eb0-688adcabe985" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d9b51ab0-2ec2-45f8-a8bd-5ab18ba7673e" data-file-name="components/accounting/financial-reports.tsx">Pendapatan Penjualan</span></span>
              <span data-unique-id="cfe29ff1-337f-4024-98b6-c6877a2ee7fb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a9e91063-27f0-4272-bfc8-e2ac6e867fea" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
            </div>
            <div className="flex justify-between" data-unique-id="fa5ef383-85de-42e8-9047-e49666b6f04c" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="8b34fd52-b129-4797-bf8b-528be46c940d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8140dfb3-3551-49b8-8762-1f24ee714806" data-file-name="components/accounting/financial-reports.tsx">Harga Pokok Penjualan</span></span>
              <span data-unique-id="f93c8d21-0ee9-4cc2-a351-8eed7e2c905a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e7a2a09d-2cc5-454d-bc19-c3f776f0b782" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="6da37243-815a-472f-b84d-be7bacbaa720" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="00b47a32-4488-4797-bc6e-1374021a6016" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="cfa2b43b-d080-4f0f-a340-db7d22cf51f2" data-file-name="components/accounting/financial-reports.tsx">Laba Kotor</span></span>
              <span data-unique-id="87b977ec-9111-4ffb-9c23-5f891121e04d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1e561f5e-2d43-4ab4-afbd-8a10b8244a50" data-file-name="components/accounting/financial-reports.tsx">Rp 28.010.000</span></span>
            </div>
            <div className="border-t pt-2" data-unique-id="f9403360-e0f5-4384-8e33-51132a6e42af" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="4b8a319e-5d4e-4741-9c04-81be94e7ceaf" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="ed78ed49-8de7-4277-837f-11b4625e3128" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c6da1f9a-f735-4457-8884-683dddd6cdb0" data-file-name="components/accounting/financial-reports.tsx">Biaya Operasional:</span></span>
                <span data-unique-id="e6a7ef42-0c7e-4430-8cc8-c01e46c6f196" data-file-name="components/accounting/financial-reports.tsx"></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="86d5c2a3-e90a-404c-85c8-ecbc93e8d927" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="547cb164-4660-417d-8ae4-79e327ed7c84" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5d520d1c-138a-4555-b2c7-f6dbdf9b455f" data-file-name="components/accounting/financial-reports.tsx">- Biaya Gaji</span></span>
                <span data-unique-id="e3fcc4d1-ceab-4836-8eb9-eaf65665b2d2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b0699cc1-d241-439e-a6ed-f8cd19c461e8" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="3b90ccaf-fdc5-463f-bc2c-d7500095c9e8" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="7a09cea2-53d5-4b2e-b16b-1e127751604a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="1c9e4538-d100-4df6-9148-e0298459b0f4" data-file-name="components/accounting/financial-reports.tsx">- Biaya Sewa</span></span>
                <span data-unique-id="5851c6a8-ab0e-453b-8767-630666ffbeed" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="454d42bc-fe66-4cad-a543-7a22e09dd70e" data-file-name="components/accounting/financial-reports.tsx">(Rp 3.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="3777d207-daff-4e51-a6ac-58f96517af94" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="b89950ac-f403-48ee-8c2d-897475b1fa66" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="48308214-ba06-49ea-8b81-94256533e40e" data-file-name="components/accounting/financial-reports.tsx">- Biaya Lain-lain</span></span>
                <span data-unique-id="d6ca3cda-6e5f-4bcf-aac2-a4458d2a3838" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5ee0d5eb-7e4b-4f73-8c57-a1b3da634941" data-file-name="components/accounting/financial-reports.tsx">(Rp 2.010.000)</span></span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="caff5202-462d-4090-9ecf-42d06c5d49f0" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="ad85426a-8cfe-4620-ba1a-2377dc5b7c5a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="255cbbe2-945b-48e7-9e5d-e48086421158" data-file-name="components/accounting/financial-reports.tsx">Laba Bersih</span></span>
              <span className="text-green-600" data-unique-id="f9e82959-fcd7-46f7-aaaf-d790d0e6b775" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a528f711-4ce2-4d53-99e6-102df42efce7" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="b97ce5ac-6079-4c3f-bb8d-d148fa7bf1ac" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="c9d05c78-5ba0-4cc3-b245-fc4492aa079e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ba838137-b7a7-4063-95ec-42f6e5479180" data-file-name="components/accounting/financial-reports.tsx">Rasio Profitabilitas</span></h3>
          <div className="space-y-4" data-unique-id="3d562429-bfbd-4569-aa4b-389e4adf023a" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="9956dc7a-c453-4d5c-a31c-77d622c355aa" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="0352adb5-8fbf-47de-a4d2-c380f8bce983" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="06584a30-ac40-4867-a08c-fb2de5cf2044" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="499fac3b-6375-4ce0-9d23-dea342415068" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Kotor</span></span>
                <span className="text-lg font-bold text-green-600" data-unique-id="efee6833-521f-454f-9937-6b6b913720dc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d21be8be-89d5-470e-873a-60d0092930a9" data-file-name="components/accounting/financial-reports.tsx">28.97%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="7f3104f0-7781-4f34-ae2d-e706a48556a6" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="9839b7f6-9182-4cfb-8979-44454872dd7d" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="bb8a5778-5787-4122-b331-c9dc05495662" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0da35dba-236c-45f6-84d3-91e6b1bc3005" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Bersih</span></span>
                <span className="text-lg font-bold text-blue-600" data-unique-id="3639d8dc-0839-4ce8-bf9c-ee7f2b962592" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ad4e2472-b4e6-4ffe-96f0-0640d3a7104e" data-file-name="components/accounting/financial-reports.tsx">15.51%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="96747383-92b4-4b4d-933b-e0731d37f399" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="4bf3515e-c4fa-477b-a2ba-23a8856b8cec" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="c269b9ec-2e9d-4cd6-ad71-84630848835d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="be528cbf-ea87-4002-8657-a23df45dd4cc" data-file-name="components/accounting/financial-reports.tsx">ROA (Return on Assets)</span></span>
                <span className="text-lg font-bold text-purple-600" data-unique-id="bd859852-b3d7-40f3-999a-06a7760694cf" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="370fbc2e-9e34-42f7-8f82-32d62fd457c6" data-file-name="components/accounting/financial-reports.tsx">8.33%</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderCashFlow = () => <div className="space-y-6" data-unique-id="b373622f-864d-407c-906d-6cf9fdfe83c9" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="46001c6c-ebec-4093-8ee5-55d96cdecaf5" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="315b9fb7-282a-429a-ac6e-4dd57d7c2ac6" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="0b766da9-f2fd-46e0-a5b2-cc8a1eea3db1" data-file-name="components/accounting/financial-reports.tsx">
            <LineChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="8aaa4a15-d514-41b2-918b-655fedfffc3a" data-file-name="components/accounting/financial-reports.tsx">
            Tren Arus Kas Bulanan
          </span></h3>
          <div className="h-80" data-unique-id="7dd28d82-cd25-40fa-af3a-adaece6e44ad" data-file-name="components/accounting/financial-reports.tsx">
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

        <div className="glass-effect rounded-2xl p-6" data-unique-id="c58b6f53-cfeb-48bf-abc0-bc8c7a55a2d0" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="f233235e-93a0-4d3f-81b1-879efc921827" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ca3928a9-041b-414d-a60a-9b97e3fa1cf7" data-file-name="components/accounting/financial-reports.tsx">Ringkasan Arus Kas</span></h3>
          <div className="space-y-4" data-unique-id="e15b81f6-8745-4e6a-8ef2-22c80f2e7b3c" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="34c83358-4363-49bc-a0d7-cf81f127f682" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="04c9f91b-06e8-4571-ac63-8d0e6247e12c" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-green-800" data-unique-id="ea9085a8-3a62-4f4a-9bc3-c7988f6a7113" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e1813ea4-3f87-4389-8d92-89666e57e322" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Operasional</span></span>
                <span className="text-xl font-bold text-green-600" data-unique-id="fd63b410-a0ca-46c0-9c02-98b6e6504cb3" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="2c2869b1-10f6-4d6c-9e44-da4129561859" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.operating, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="4c95a939-ba56-43d8-8fc5-b52483344429" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="16b06ca6-64f9-42c6-8519-52bd23d5b630" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-red-800" data-unique-id="5d6a7b49-49bf-41b4-9a6c-9d8ccd76969a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fb12e6fb-2c2e-4b42-94ff-c99496c49531" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Investasi</span></span>
                <span className="text-xl font-bold text-red-600" data-unique-id="70f538d2-696b-4656-82ef-1c3ba58630b2" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="38adf000-85cd-4239-83d5-a7c51720107c" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{Math.abs(cashFlowData.reduce((sum, item) => sum + item.investing, 0)).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="3682012d-87b9-42e8-a25a-4c7ec0a12879" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex items-center justify-between" data-unique-id="d3790494-1fd0-4daf-8d88-929fd7085c7a" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium text-blue-800" data-unique-id="4660bca3-c3ab-4ce4-bf3e-fcf9d00d2387" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f999176f-e60b-4d3d-939c-60e59cfa8b29" data-file-name="components/accounting/financial-reports.tsx">Arus Kas Pendanaan</span></span>
                <span className="text-xl font-bold text-blue-600" data-unique-id="b554d3a7-f90f-4f3f-bd0b-3ed68766b89e" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                  <span className="editable-text" data-unique-id="e934642d-2ceb-469e-8b9c-da45309aa722" data-file-name="components/accounting/financial-reports.tsx">Rp </span>{cashFlowData.reduce((sum, item) => sum + item.financing, 0).toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6" data-unique-id="31fb20f8-7264-4509-9188-77f6608d6fbf" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="b82ec60f-1f09-46a2-9f6c-b95721c6b5fd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="575b124d-4d75-4056-8be7-f74255a8d872" data-file-name="components/accounting/financial-reports.tsx">Laporan Arus Kas</span></h3>
        <div className="space-y-4" data-unique-id="28b91512-9ae5-418d-aa3d-6673d2408e4b" data-file-name="components/accounting/financial-reports.tsx">
          <div className="border-b border-border pb-4" data-unique-id="c73c76ea-1205-401b-92d2-4919b6989f10" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="36df1930-b362-4b3f-9915-7dfc603e7e81" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="affd0c54-8b1c-4739-aa49-13f06eea74e3" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS OPERASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="5adbe051-f9e9-4fdd-8c1f-94484f9713c3" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="1842acca-6a10-4e48-8860-cdbc5a984cc6" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="1976332b-a959-4632-a7ae-081220ad99bc" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="28dd02ca-e703-4256-98a1-2dcb8436e3e5" data-file-name="components/accounting/financial-reports.tsx">Penerimaan dari pelanggan</span></span>
                <span data-unique-id="f32423cd-0d95-4257-b6fc-eb61cbbd3ab6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a8a5e1e5-e2d9-4ff1-94a0-681a22da302d" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="14e7cbfc-c575-4adc-8fd4-3069998e1c7a" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="dd436956-378a-470b-bb22-196c306b13e0" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a057464d-87bf-4187-8f55-2ed1e04ac996" data-file-name="components/accounting/financial-reports.tsx">Pembayaran kepada pemasok</span></span>
                <span data-unique-id="b1c1fbfb-fdd6-43de-9470-154c288a94cd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c864b9e3-c7f9-4b63-8890-eb313f99e726" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="8ca6a4dc-3e4b-404b-ad83-7476d573f403" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="50444949-f37d-4883-8664-b939a95dbdf6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="aa935475-2e53-46f6-9b85-7c312eb860a6" data-file-name="components/accounting/financial-reports.tsx">Pembayaran gaji</span></span>
                <span data-unique-id="aac05458-2c5a-4498-adc5-f4c890ada528" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0bbc8881-7a55-4369-b108-ca7058915a92" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="1b785516-c668-4002-a2b2-69e865c03de3" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="fdad3a16-1676-4de6-858b-438bcf594164" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fadb9f94-9f0e-4615-92c4-10fed831c79b" data-file-name="components/accounting/financial-reports.tsx">Pembayaran biaya operasional</span></span>
                <span data-unique-id="fc29bbd9-59a4-4d6b-ba64-9670c0cc4eb6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e61b47ab-df41-4da7-a1ee-405c138de076" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.010.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="970a83ec-f11a-49b2-ab7c-7eb40d2bbfbc" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="51c01916-fb64-45d6-a668-6febbfd266a8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c6ecb9c9-cf07-4f3c-9421-c3769c9e2995" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Operasi</span></span>
                <span className="text-green-600" data-unique-id="35eabe5e-836a-40b7-aa79-e283c538aaae" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b040769e-e8c5-40ce-99f1-766a577510ca" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4" data-unique-id="694a2986-a519-41dd-9f8b-0c95af21773e" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="05b38bf0-bac6-4e21-aa97-5c351a9308d9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="665dda3b-8e93-47cd-9c28-17cc02082bef" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS INVESTASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="435f6f27-5716-4953-9dc4-4bbee6d1b641" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="c46a6ca9-2440-449c-8ade-6d572fe6edc0" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="d80803b0-8432-4172-b532-df720b988aa8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="abe159ab-6d71-41f6-b93b-6af03c0543b7" data-file-name="components/accounting/financial-reports.tsx">Pembelian peralatan</span></span>
                <span data-unique-id="cb1a6406-cf70-4caf-9058-d2398a7cf1d2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c21218d7-1bec-4403-af4b-1cacd5fa04a4" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="4485e633-2c9d-48cf-8da2-cc1fe54f477c" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="f31587c6-ca0f-4089-b02c-c0c43309cb8d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b5ceb4ed-0761-48cb-b958-9133fc855653" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Investasi</span></span>
                <span className="text-red-600" data-unique-id="ace73a97-edc0-4dd7-8073-cf36954863d5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fb2a70be-6ca2-4763-b475-1a49b8bae847" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
            </div>
          </div>
          
          <div data-unique-id="f2ba35ac-3230-4d59-abf9-4a23a0cce0a7" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="673507f3-35a5-4d3e-b971-f04ca5f0e0d8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7c161994-c368-4d64-84f5-548bcb37a24f" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS PENDANAAN</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="d23cc166-3383-45c6-8d2f-6ede816f055e" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="41c34ed9-f9e5-41d6-969e-afd30b68ac0e" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="022434bf-b754-48f0-a88c-cb084b1e79ae" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3a5bb83e-7f59-41de-8549-fb9c9bbc06b4" data-file-name="components/accounting/financial-reports.tsx">Pinjaman bank</span></span>
                <span data-unique-id="a103f0ce-9556-494d-90d4-7c6750e2d7f6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3736bbb7-50e6-4137-8506-61d6fc3b7207" data-file-name="components/accounting/financial-reports.tsx">Rp 10.000.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="68d56214-e532-4867-99d0-85e58cb53984" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="0deb3efb-59f9-4174-ba08-52dbf59f82b8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b411c316-f0a4-47c1-a3c9-30fab24e51fc" data-file-name="components/accounting/financial-reports.tsx">Pembayaran dividen</span></span>
                <span data-unique-id="a3505546-8483-47ae-b5bd-da752cd830ef" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7e5617bb-197f-438e-a79a-346319d675d6" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="1af3a835-402a-49cf-a9db-ea289e2cfeb8" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="21492300-1545-49bf-bd0a-bda15e62ab99" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ab87bd22-2cbc-42cb-8a09-7cff14d08d74" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Pendanaan</span></span>
                <span className="text-green-600" data-unique-id="8afd5d49-38d2-4d98-ac81-5736e1df7de5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ecce41df-776c-4e20-bc3a-60ae17e6a707" data-file-name="components/accounting/financial-reports.tsx">Rp 5.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4" data-unique-id="82b0d48f-eadb-446d-bc51-92cc8a6c4d57" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-bold text-lg" data-unique-id="e5dc56d0-074d-478a-b1f8-c7684403d1d1" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="9e82b577-c473-4880-8851-a60ea6222404" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2f8b5106-4ed0-4877-bea2-1fb723abc6ad" data-file-name="components/accounting/financial-reports.tsx">Kenaikan Bersih Kas</span></span>
              <span className="text-green-600" data-unique-id="399ab468-19cb-4208-967d-8073e86b9c22" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c3bc86b8-b8da-49c6-9fea-2c53b6d95cd2" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-6" data-unique-id="cfde3ebb-5d0a-4f4d-aff5-e8af16f6a062" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" data-unique-id="568b8337-88ad-42af-9aa2-fc17410e9b36" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {kpiData.map((kpi, index) => <motion.div key={kpi.label} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="29438cbe-0478-4d7a-b0c8-9a059ff7f4c0" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex items-center justify-between mb-2" data-unique-id="199eb537-1c8d-40a3-b936-7a4621a19c0e" data-file-name="components/accounting/financial-reports.tsx">
              <h3 className="text-sm font-medium text-muted-foreground" data-unique-id="9fbbace5-68c0-48fc-9877-5572e6c304e2" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{kpi.label}</h3>
              <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="51463a77-8301-4680-ada0-7c710c5f429c" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
                <TrendingUp className={`w-3 h-3 ${kpi.trend === 'down' ? 'rotate-180' : ''}`} data-unique-id="4005a1a4-d10e-45bb-959b-5da869be2427" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />
                {kpi.change}<span className="editable-text" data-unique-id="f8d3520b-16ed-4abe-ab53-308d2ad14dc8" data-file-name="components/accounting/financial-reports.tsx">%
              </span></div>
            </div>
            <div className="text-2xl font-bold text-foreground" data-unique-id="006db77a-670b-4fd8-858d-b6662aa5ba84" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {kpi.isPercentage ? `${kpi.value}%` : `Rp ${kpi.value.toLocaleString('id-ID')}`}
            </div>
          </motion.div>)}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="ec4db92f-e2e8-4f9e-87d7-ccd7a7621bbd" data-file-name="components/accounting/financial-reports.tsx">
        <div data-unique-id="2cc4757d-80ea-4109-b569-139c3dffff81" data-file-name="components/accounting/financial-reports.tsx">
          <h2 className="text-2xl font-bold" data-unique-id="60bd6a7d-946f-4b26-98b6-757d0d55786d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d2418755-c1fa-485a-b33e-b1da34d41c59" data-file-name="components/accounting/financial-reports.tsx">Laporan Keuangan Detil</span></h2>
          <p className="text-muted-foreground" data-unique-id="48f4d709-4059-42f4-ba5b-e369c5269256" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5ceada20-d0aa-402c-88eb-19b94cbc6b2b" data-file-name="components/accounting/financial-reports.tsx">Analisis mendalam kinerja keuangan perusahaan</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="7b6a50d1-1c90-4958-a70b-9261195b4c78" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
          {/* Period Selector */}
          <div className="flex items-center gap-2" data-unique-id="0a780902-4373-4b68-980a-e2f9989f05bb" data-file-name="components/accounting/financial-reports.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="0a2761f9-6227-40b5-9851-7a73e7dc9155" data-file-name="components/accounting/financial-reports.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as Period)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="2e82e68a-2584-4afe-8e3e-6a13233d3d15" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {periods.map(period => <option key={period.id} value={period.id} data-unique-id="1fae031e-d36d-4a5d-8bd4-a05f357af3c0" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{period.label}</option>)}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2" data-unique-id="820de6f3-0b83-4bcd-bb0e-72719254d146" data-file-name="components/accounting/financial-reports.tsx">
            <button onClick={() => handleExport('excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="3c26ab63-8075-487e-a429-9adfbeba16a5" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="8fa169dd-fdf2-4ed5-9a5b-63445f923ccb" data-file-name="components/accounting/financial-reports.tsx">
              Excel
            </span></button>
            <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="f309a351-48fb-45c6-86fc-3ac74244f27a" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="2863d3e9-aa16-41a0-b9f5-0626151ac38f" data-file-name="components/accounting/financial-reports.tsx">
              PDF
            </span></button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4" data-unique-id="67f3457a-19ab-4d44-8101-c34808ec8594" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {reports.map(report => {
        const Icon = report.icon;
        const isActive = activeReport === report.id;
        return <button key={report.id} onClick={() => setActiveReport(report.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="b839cce7-856b-4152-900b-7fec02051769" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
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
    }} data-unique-id="9b5759b9-975a-45e6-87f3-3dd5fd001992" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>;
}