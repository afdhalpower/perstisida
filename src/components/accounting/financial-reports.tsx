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
    profit: 3200000
  }, {
    month: 'Feb',
    revenue: 15200000,
    profit: 4100000
  }, {
    month: 'Mar',
    revenue: 18700000,
    profit: 5300000
  }, {
    month: 'Apr',
    revenue: 14300000,
    profit: 3800000
  }, {
    month: 'May',
    revenue: 16800000,
    profit: 4900000
  }, {
    month: 'Jun',
    revenue: 19200000,
    profit: 5700000
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
  const renderBalanceSheet = () => <div className="space-y-6" data-unique-id="4ffa9439-7f76-4cf0-b1a1-8cd44364937b" data-file-name="components/accounting/financial-reports.tsx">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="681b29e4-dd01-4de6-89e1-3849c80cfdb3" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="9c17cbf0-ba67-4f5d-9837-be7e3560a06b" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="7ab263d5-1761-4e4c-88a3-71d46f37e96e" data-file-name="components/accounting/financial-reports.tsx">
            <PieChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="7240e055-bb69-4a3c-9357-b2a7df3a884e" data-file-name="components/accounting/financial-reports.tsx">
            Komposisi Aset
          </span></h3>
          <div className="h-64" data-unique-id="9ebbd2c9-10a4-491d-8eab-91f1e03ddfb8" data-file-name="components/accounting/financial-reports.tsx">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie data={assetData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {assetData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-unique-id="c52eba27-80eb-4603-84ed-d554cc96fb98" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true" />)}
                </Pie>
                <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="ec876998-38ae-45de-a745-516c4ea72a7f" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="29e63e3f-5260-4eb2-b738-3b549c2c26fd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2629f0d7-6d81-41f5-b5e8-5490ba4b5145" data-file-name="components/accounting/financial-reports.tsx">Neraca Ringkas</span></h3>
          <div className="space-y-4" data-unique-id="8d077fc4-96f3-4fe2-af19-67cfd36ef8ce" data-file-name="components/accounting/financial-reports.tsx">
            <div className="border-b border-border pb-2" data-unique-id="8f467e1d-34f2-4784-aa99-d27d9f7e83d3" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="8d824b4d-6ad3-4848-a146-37bafce8fa10" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c3694885-00df-4d1e-bda1-4908d4233b6c" data-file-name="components/accounting/financial-reports.tsx">ASET</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="8fa49df9-4fc9-4f30-bc73-89fe7f98a495" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="2d3d8612-ab04-4ca8-95af-cf0489db3b6e" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="21d944f5-260e-49a6-ae75-314fc4afa9a2" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="45ce80c9-ffa7-4a61-a487-30da4df76945" data-file-name="components/accounting/financial-reports.tsx">Kas dan Bank</span></span>
                  <span data-unique-id="89d04153-61a7-430c-9086-107a0e334a6d" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9db9b1bb-3c37-4616-8090-7127e330c309" data-file-name="components/accounting/financial-reports.tsx">Rp 45.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="a8d26791-d004-4f97-b0a4-584025783dcd" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="c49e74ad-f5e2-451b-94f6-51449cd75cf5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ebae5a49-6493-40d9-ab1f-d47376e3774e" data-file-name="components/accounting/financial-reports.tsx">Piutang Dagang</span></span>
                  <span data-unique-id="443ea87b-7976-424d-a501-8a44753d8094" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="cd0479b2-a4e3-497b-94ed-5a482dc5468a" data-file-name="components/accounting/financial-reports.tsx">Rp 18.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="bcd73f3c-dcdd-457f-ae5b-b38587860d8b" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="09257387-0ed7-4ab9-b481-e06680b42687" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="076e5a51-1859-4fbe-97c7-51eea8e1438b" data-file-name="components/accounting/financial-reports.tsx">Persediaan</span></span>
                  <span data-unique-id="2bbb2d82-08b4-4eae-9b31-957a65cec282" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b6290915-b109-4a88-862c-2dd3672bcf91" data-file-name="components/accounting/financial-reports.tsx">Rp 32.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="67f54453-9356-4409-bb0b-a692055ef159" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="f1f72425-ae8a-4d7a-8bde-3cf8d6ca8e6e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="aabd0446-c73e-47e5-8509-985fb162ea23" data-file-name="components/accounting/financial-reports.tsx">Aset Tetap</span></span>
                  <span data-unique-id="21f1a612-4f96-456f-8875-740760ea8fb7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f9078ada-d44c-4e53-ae50-fd50cd0236ed" data-file-name="components/accounting/financial-reports.tsx">Rp 85.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="17f8ef22-5c1a-4ea6-9019-ac42f2ffe133" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="02c81e98-36d6-4cc4-a3be-12b2036639e3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d7974cd2-b2da-4663-81fb-9ea796405b39" data-file-name="components/accounting/financial-reports.tsx">Total Aset</span></span>
                  <span data-unique-id="6c0cd23c-216a-4e9b-bbc0-268999ade1c6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="315c3862-9f13-40d9-8e99-291f4dc20507" data-file-name="components/accounting/financial-reports.tsx">Rp 180.000.000</span></span>
                </div>
              </div>
            </div>
            <div className="border-b border-border pb-2" data-unique-id="3e775a70-ed0c-4d4f-a6a6-a2c2c4298be9" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="531786e5-71aa-4fd2-b6f6-a0afaf76947f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="411926b4-6281-42ab-a12e-bf88ae4c10b9" data-file-name="components/accounting/financial-reports.tsx">KEWAJIBAN</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="1b10857b-25d9-448e-9277-2425f549ca06" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="bb519c4a-338a-4a77-9a2c-bb9118a7e43e" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="739148e8-8abf-4ccc-a6ee-d8aface68a41" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="2bdd0bd4-878d-4313-86a2-10c8e145d06b" data-file-name="components/accounting/financial-reports.tsx">Hutang Dagang</span></span>
                  <span data-unique-id="ab7c5fd3-d4bd-4d62-b118-06a91d168474" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0e234b77-6671-4aef-ac22-b2b0f02f8e87" data-file-name="components/accounting/financial-reports.tsx">Rp 25.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="fba23a2a-1258-4710-a6a4-ecacb2f4f1ef" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="4ab548c7-45ca-42cb-b48f-92aaa08a2470" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b3652fdd-5045-46a7-b042-951d9c6085bd" data-file-name="components/accounting/financial-reports.tsx">Hutang Bank</span></span>
                  <span data-unique-id="214b8bc0-a9a7-4878-9952-c7e24648ca07" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="c90cfcad-14b1-4095-955f-876aa209fe5c" data-file-name="components/accounting/financial-reports.tsx">Rp 35.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="a2bddefa-d6ef-4fba-aab0-6708014dbfbe" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="29742cc1-f1e6-4c79-90a2-f3e54c43ee90" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8eb2f696-2171-43f4-b459-c8ff1e7444e5" data-file-name="components/accounting/financial-reports.tsx">Total Kewajiban</span></span>
                  <span data-unique-id="e6ff7aa7-80ea-4e3d-ae61-5bd0bb310753" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="885ff461-bced-4d3c-8ff8-33fd45f0e650" data-file-name="components/accounting/financial-reports.tsx">Rp 60.000.000</span></span>
                </div>
              </div>
            </div>
            <div data-unique-id="037a4902-846b-4c06-b8c0-b93d9acc6713" data-file-name="components/accounting/financial-reports.tsx">
              <h4 className="font-semibold text-primary mb-2" data-unique-id="d760ed8d-7e5b-4712-9f5d-f43f19be14c9" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9f21cc85-4c37-46cf-b9bc-e796625e9c74" data-file-name="components/accounting/financial-reports.tsx">MODAL</span></h4>
              <div className="space-y-2 text-sm" data-unique-id="4fc15718-8fee-417e-b5b3-2bbe27f10dc6" data-file-name="components/accounting/financial-reports.tsx">
                <div className="flex justify-between" data-unique-id="73851aa6-a5b5-4282-bfe9-232fc677f11e" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="d89c753e-7512-4b49-b735-fd0811aef138" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="12d2a860-753d-416f-aec6-df04266ae533" data-file-name="components/accounting/financial-reports.tsx">Modal Pemilik</span></span>
                  <span data-unique-id="5740b740-abab-4030-8b42-418ddfc16451" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="03e6957f-4481-4768-8d83-b4f6d5051e26" data-file-name="components/accounting/financial-reports.tsx">Rp 100.000.000</span></span>
                </div>
                <div className="flex justify-between" data-unique-id="0109215a-523a-4721-93c0-9696e76eeb9f" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="8a89a8cb-505e-4707-8eab-021d3f6dbf2a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a354a8c8-259b-4799-8fb3-bd5871a9764b" data-file-name="components/accounting/financial-reports.tsx">Laba Ditahan</span></span>
                  <span data-unique-id="18376bae-dab0-4fa3-976d-c120aa01e409" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6a8d531d-7804-4523-a1be-0988fed82d11" data-file-name="components/accounting/financial-reports.tsx">Rp 20.000.000</span></span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="f15f90f2-cf89-4d20-9670-b09f44f9126a" data-file-name="components/accounting/financial-reports.tsx">
                  <span data-unique-id="eef34bb2-a27c-4b2a-b766-67f5a9c733ff" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ba0c5aad-248f-4578-a58a-f66f7d7057f7" data-file-name="components/accounting/financial-reports.tsx">Total Modal</span></span>
                  <span data-unique-id="5fb1cbbb-8638-4332-8024-d4ee8c863dca" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7d13c14f-2140-4126-94c6-fdbb5682d414" data-file-name="components/accounting/financial-reports.tsx">Rp 120.000.000</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderIncomeStatement = () => <div className="space-y-6" data-unique-id="14527eb8-91af-4dbd-b832-5855b559e2d5" data-file-name="components/accounting/financial-reports.tsx">
      <div className="glass-effect rounded-2xl p-6" data-unique-id="7cc7cbf8-0ece-40e7-9229-d6e996e6414d" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="d7a128c9-35f5-4ba8-8efa-5870b25648fb" data-file-name="components/accounting/financial-reports.tsx">
          <BarChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="cbe9d0c9-d676-4f94-90aa-ce1a40f2bb04" data-file-name="components/accounting/financial-reports.tsx">
          Tren Pendapatan & Laba
        </span></h3>
        <div className="h-80" data-unique-id="3bb9c0e5-79f8-4eb6-a10d-8123e94fe162" data-file-name="components/accounting/financial-reports.tsx">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-unique-id="1323ff19-5fd8-47ce-bdb1-057d3ff5583e" data-file-name="components/accounting/financial-reports.tsx">
        <div className="glass-effect rounded-2xl p-6" data-unique-id="73fa11c3-84de-40eb-8d38-9d9a54266569" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="952c23aa-dd59-4cff-9a64-e069c4c0ae5e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3b412957-9ac2-4961-9e9e-d2361b3b8026" data-file-name="components/accounting/financial-reports.tsx">Laporan Laba Rugi</span></h3>
          <div className="space-y-3 text-sm" data-unique-id="7ac32422-3178-45d1-86da-37df24f1dbc9" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-semibold" data-unique-id="0e8a5350-0223-451a-9894-a0b164e7c834" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="a5c852f0-4a85-46fb-a0cb-3baa2a71d9e7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d45cc7ae-05f5-41fc-a63a-0afbce1506f6" data-file-name="components/accounting/financial-reports.tsx">Pendapatan Penjualan</span></span>
              <span data-unique-id="b1e08bcc-8c6c-415a-8b49-f8f81fe1c1d8" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fb2f159e-5a05-46aa-8642-ae62e08d3f82" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
            </div>
            <div className="flex justify-between" data-unique-id="6ca836c0-3df7-4588-a65d-96730c92aee2" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="9d3570b4-b7a3-48a5-8b69-0f38cfa6388b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dab21073-2172-4149-a58d-88caeb99404f" data-file-name="components/accounting/financial-reports.tsx">Harga Pokok Penjualan</span></span>
              <span data-unique-id="855900de-a061-4d44-bbcd-ff2cb38ed79e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="557601b3-beb0-4c21-a93d-2522a68925ed" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="e1bca843-ae61-44ca-b6b3-ebb2f0073c6c" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="390e4727-c8f0-4816-a202-4ac5513c2474" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6b4e70b2-d946-4f95-b602-5e13f7bd1c35" data-file-name="components/accounting/financial-reports.tsx">Laba Kotor</span></span>
              <span data-unique-id="9a0ff816-632b-4594-908a-2e291c057d2e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f70def2e-9c54-40be-877d-2640e48f2a0d" data-file-name="components/accounting/financial-reports.tsx">Rp 28.010.000</span></span>
            </div>
            <div className="border-t pt-2" data-unique-id="f185f1c0-6be8-423c-854f-2d29238277a1" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="f4128e29-a11a-4269-91fa-f4dcf7195db5" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="c631dbf0-09dd-4d58-bac7-414ffbee9b04" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="27dd8225-1d4f-4ecf-8551-fd9ca743d038" data-file-name="components/accounting/financial-reports.tsx">Biaya Operasional:</span></span>
                <span data-unique-id="89520541-8984-4aab-bdba-dff9303e5199" data-file-name="components/accounting/financial-reports.tsx"></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="cc28d3dc-af3a-454e-89ba-c88162510bf9" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="623a76d7-f21d-4370-a108-4af777a79085" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dddff050-e038-45a2-9766-8e37d173d46b" data-file-name="components/accounting/financial-reports.tsx">- Biaya Gaji</span></span>
                <span data-unique-id="232b5029-4282-43b9-913b-877c55f73564" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="a656fbf2-2202-44e3-a1c0-d02536174e33" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="fd15b391-7786-4d45-bce2-1b7227bf6d1e" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="1a42aeea-9aa6-4020-aea2-ed9c8a7bf89e" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8f0a83c7-619a-4043-bfb0-307a7bec6d6c" data-file-name="components/accounting/financial-reports.tsx">- Biaya Sewa</span></span>
                <span data-unique-id="dcd5ea73-e3b7-49e8-aba5-4177d1de5542" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ea6bf64b-a23a-4310-a645-c97eaa6fc291" data-file-name="components/accounting/financial-reports.tsx">(Rp 3.000.000)</span></span>
              </div>
              <div className="flex justify-between ml-4" data-unique-id="9ee4105c-f386-4a14-83b3-9361eb0a542c" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="8112d5e4-ff29-44a8-b090-a25777191e64" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="0dc50a04-0a4d-4d0e-b5e1-e752163d623b" data-file-name="components/accounting/financial-reports.tsx">- Biaya Lain-lain</span></span>
                <span data-unique-id="cf0ca300-65fb-410c-89bc-be1b13875f8c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3577a20b-074a-47bf-a887-7b4c258aaea2" data-file-name="components/accounting/financial-reports.tsx">(Rp 2.010.000)</span></span>
              </div>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="430afdd9-0b48-472e-a6d0-95cf2560cdf6" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="b4ca7d33-7b13-42f7-ba50-19cf1c36917b" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b40ae038-8ea3-462d-8ffa-6ac3d4541f5b" data-file-name="components/accounting/financial-reports.tsx">Laba Bersih</span></span>
              <span className="text-green-600" data-unique-id="8a931961-63c9-453d-b7e0-6ccf3603fcdd" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b856e359-146c-4068-80b2-b6b5838db8f5" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6" data-unique-id="75ecde41-2df8-4449-bec8-5d08b2851518" data-file-name="components/accounting/financial-reports.tsx">
          <h3 className="text-xl font-semibold mb-4" data-unique-id="61cbe160-806e-4eed-ab8e-c363cb55c56f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8b4394b6-4216-46a5-9b97-3c5ada78f80a" data-file-name="components/accounting/financial-reports.tsx">Rasio Profitabilitas</span></h3>
          <div className="space-y-4" data-unique-id="e76335dc-050a-44c0-aa2d-cbfad648df66" data-file-name="components/accounting/financial-reports.tsx">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="4d9309df-98e0-4bcd-bec8-b9a2eec2e332" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="733d3660-0d79-434e-b666-a2f8258a68de" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="b72dbac5-9c26-4a3e-954f-81ad2e889110" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ad4fc6fc-f31c-48ab-81db-57969c36a82c" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Kotor</span></span>
                <span className="text-lg font-bold text-green-600" data-unique-id="a6362ac3-251c-470f-a258-a166671a0326" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b964d2ff-e80f-4be0-bb7a-a34ab0906015" data-file-name="components/accounting/financial-reports.tsx">28.97%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="6a1b8e90-1138-422a-b484-a77222b196d4" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="04f12a30-c223-4f63-9668-031b0ec86f4a" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="c176956d-6182-4c3c-9c20-6382a7c02375" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="413c0737-70c6-482d-9144-ac8d17454603" data-file-name="components/accounting/financial-reports.tsx">Margin Laba Bersih</span></span>
                <span className="text-lg font-bold text-blue-600" data-unique-id="5cbffe52-5db6-4dd9-9cf7-77548eaa1766" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5822af35-1c0b-4db9-8aa4-2e674c7fc256" data-file-name="components/accounting/financial-reports.tsx">15.51%</span></span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="9595f5ae-8b2c-457a-860c-a3d0ffa0e54f" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between items-center" data-unique-id="40960068-f49b-4967-904a-19d864955101" data-file-name="components/accounting/financial-reports.tsx">
                <span className="text-sm font-medium" data-unique-id="1ad347c0-866c-4d1d-8fac-2d9f37e06a18" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="ef45d23f-3ac3-412e-9970-ecccc5f4967d" data-file-name="components/accounting/financial-reports.tsx">ROA (Return on Assets)</span></span>
                <span className="text-lg font-bold text-purple-600" data-unique-id="fbc175b1-7b1a-4bd6-bd7d-febb0b4d30cf" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="6e9a76c9-f356-4c8e-9bd0-356f520b36e2" data-file-name="components/accounting/financial-reports.tsx">8.33%</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderCashFlow = () => <div className="space-y-6" data-unique-id="4dd61367-3485-4506-972c-7d33730b954d" data-file-name="components/accounting/financial-reports.tsx">
      <div className="glass-effect rounded-2xl p-6" data-unique-id="5b79451f-1809-4141-b504-1fee56e21152" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="208eabf3-06c9-49f1-aef1-8d7ce73989b7" data-file-name="components/accounting/financial-reports.tsx">
          <LineChart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="eb5ebb37-332b-4d0c-9dd2-09a4200d5ce1" data-file-name="components/accounting/financial-reports.tsx">
          Tren Arus Kas
        </span></h3>
        <div className="h-80" data-unique-id="30ce0e6b-7339-47fa-bb40-57703e3b4454" data-file-name="components/accounting/financial-reports.tsx">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={value => `${(value / 1000000).toFixed(0)}M`} />
              <Tooltip formatter={value => `Rp ${Number(value).toLocaleString('id-ID')}`} />
              <Line type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={3} name="Arus Masuk" />
              <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} name="Arus Keluar" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-effect rounded-2xl p-6" data-unique-id="90d54ede-571f-4f73-9578-913fa1493906" data-file-name="components/accounting/financial-reports.tsx">
        <h3 className="text-xl font-semibold mb-4" data-unique-id="c5ad0d3e-8306-4759-a706-e72444c91d26" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="03182101-753f-46bf-999a-b80979973e79" data-file-name="components/accounting/financial-reports.tsx">Laporan Arus Kas</span></h3>
        <div className="space-y-4" data-unique-id="65aa3ebb-e782-4437-8df9-ec4bbf70d11b" data-file-name="components/accounting/financial-reports.tsx">
          <div className="border-b border-border pb-4" data-unique-id="1393d636-76b4-4fe7-8060-d19120454114" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="01756689-f3b1-4d86-b1bb-c9c423367017" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="97685a42-d4ed-4a0d-8042-afdef8d0661d" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS OPERASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="4623425f-04ad-4b38-aadc-2a42fe01db1a" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="75b0bd47-41de-44e8-bbf8-ad7857f4d010" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="ec02727a-f114-4197-b4d1-66babb9e40c3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e026d093-4147-41ad-9a91-77d79d6ab240" data-file-name="components/accounting/financial-reports.tsx">Penerimaan dari pelanggan</span></span>
                <span data-unique-id="fcc504b5-85f7-4b4c-b6e3-9079d7fee578" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="cc510cd0-e9f8-4696-8880-9d0833f62a84" data-file-name="components/accounting/financial-reports.tsx">Rp 96.700.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="9e2f6cac-e962-490a-984f-cec8996227f8" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="955d6381-946d-455e-9f5b-5fb6a85681cf" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="7a0b6b98-9086-4699-bb41-7fe2ec40bc94" data-file-name="components/accounting/financial-reports.tsx">Pembayaran kepada pemasok</span></span>
                <span data-unique-id="60038c26-94bd-49cb-b170-4db87a8188ee" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="8959c7b0-1c79-4198-a618-d3fd62a73bb9" data-file-name="components/accounting/financial-reports.tsx">(Rp 68.690.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="d6d5e2ea-4cad-4e11-b046-2c1e22d567e0" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="8940a0e2-1276-46dd-a509-474380abd1fa" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5743b208-56f5-4b12-8851-d4fc487d71f8" data-file-name="components/accounting/financial-reports.tsx">Pembayaran gaji</span></span>
                <span data-unique-id="0b0ae192-d541-4baa-ae64-b27ba7078ef7" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f89c18eb-d727-4443-9243-33ecd915cbcf" data-file-name="components/accounting/financial-reports.tsx">(Rp 8.000.000)</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="6dae564e-76ce-4615-bc7e-0172bf291a48" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="21e8a315-60af-4971-bc0e-b26698071d95" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="3614b5f5-9c77-48f7-9882-dd3b42f37fef" data-file-name="components/accounting/financial-reports.tsx">Pembayaran biaya operasional</span></span>
                <span data-unique-id="ef1910a6-6638-47fe-82e7-a8c8c953f798" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="dac217b9-1374-46d3-9923-d949abccd565" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.010.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="65db79c5-24a2-4c89-8e9e-17261ab1ea53" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="c14f594d-608b-4f5a-a1b4-be9b9e532a49" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="fb594768-2551-4bfd-80c9-aa96420d446c" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Operasi</span></span>
                <span className="text-green-600" data-unique-id="f76bbf50-082a-4b9a-b839-1959532227a3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="06c768ad-37bd-4a13-8547-e4688d035f45" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-border pb-4" data-unique-id="e54e1aa7-765b-47d2-8981-a73275103982" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="30ccd520-af04-47fe-8d0b-715b5583222a" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="adb17ac2-33ab-480e-a833-fbe116d43deb" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS INVESTASI</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="185262f4-6309-49d5-afe7-faf6987b2e2d" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="4b4989ac-ac36-4139-b36f-5b2f8bc93f95" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="dddde624-c99f-40d0-bbf1-c68c8083fe54" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="34f0bb5f-09e1-4e90-a9e9-3df9496c8cd6" data-file-name="components/accounting/financial-reports.tsx">Pembelian peralatan</span></span>
                <span data-unique-id="861ac51d-4070-4120-b280-b619e570913c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e2c538e8-402f-4b85-8bda-cb59cb8f7ec6" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="f3059d1c-b5c0-4a1a-a11d-a7834deec183" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="d8339181-19dc-4497-ac4e-097b4aee08f5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d69b6acc-15fe-4a57-95fd-32b2e0622da1" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Investasi</span></span>
                <span className="text-red-600" data-unique-id="7f7b1bc0-86d9-4d7f-8051-b5a303b612b6" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="f5c01df2-5fc2-410b-af44-75d9f183d565" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
            </div>
          </div>
          
          <div data-unique-id="3a25719f-fc42-4fff-a36e-9112146c0e5f" data-file-name="components/accounting/financial-reports.tsx">
            <h4 className="font-semibold text-primary mb-2" data-unique-id="22d290d8-c4ee-42fe-a352-d382583685ea" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="4a0eb1a7-e36a-49f6-bdfa-c5875862a2c6" data-file-name="components/accounting/financial-reports.tsx">ARUS KAS DARI AKTIVITAS PENDANAAN</span></h4>
            <div className="space-y-2 text-sm" data-unique-id="79ce2e3f-c5e9-4e7e-8d9c-29a0f0c0d84f" data-file-name="components/accounting/financial-reports.tsx">
              <div className="flex justify-between" data-unique-id="2b60bca4-4e4d-421e-8bf3-efb9a51bf978" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="6b75b785-f224-483d-be8c-ae4eb39e3cf3" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="094cd348-e247-462e-852b-2e14cce3a844" data-file-name="components/accounting/financial-reports.tsx">Pinjaman bank</span></span>
                <span data-unique-id="ea3eb9d1-839c-4c88-9881-8f5d923f47d5" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="9b1e9e2f-b512-461e-adf6-c77b895fdbd3" data-file-name="components/accounting/financial-reports.tsx">Rp 10.000.000</span></span>
              </div>
              <div className="flex justify-between" data-unique-id="18bad4d8-0fb5-4c43-ac87-2d39fbc9f5a7" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="494426fc-7db9-435d-b459-98e11e5d549f" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="27011998-64c6-4911-93fc-dd86c6d7dc1e" data-file-name="components/accounting/financial-reports.tsx">Pembayaran dividen</span></span>
                <span data-unique-id="583ccc32-20be-4961-8ae6-661ed7859edb" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="b208890d-cb05-4d04-8c55-1c6582f33ef0" data-file-name="components/accounting/financial-reports.tsx">(Rp 5.000.000)</span></span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2" data-unique-id="922de9c7-fdfb-4816-8baf-99bf9f91a3e3" data-file-name="components/accounting/financial-reports.tsx">
                <span data-unique-id="f06a5dd0-d8c7-4f50-b5d8-e714bb563b4c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="d16f09b3-d827-418f-95c7-bde45fb2382f" data-file-name="components/accounting/financial-reports.tsx">Kas Bersih dari Aktivitas Pendanaan</span></span>
                <span className="text-green-600" data-unique-id="47c806c8-5bb1-422c-a4e1-b9c2c3b1d490" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="07ed1c98-fce9-45d5-8837-09c51cb2198e" data-file-name="components/accounting/financial-reports.tsx">Rp 5.000.000</span></span>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4" data-unique-id="2dd81d3a-0890-41c3-b998-da257294a4bf" data-file-name="components/accounting/financial-reports.tsx">
            <div className="flex justify-between font-bold text-lg" data-unique-id="f48626ce-3e93-4b0e-960c-c9a4341403f7" data-file-name="components/accounting/financial-reports.tsx">
              <span data-unique-id="8899e0b4-0df4-4520-955f-5b41d49b9e09" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="417a2b5e-bb38-41d9-ad32-d83af25a60e9" data-file-name="components/accounting/financial-reports.tsx">Kenaikan Bersih Kas</span></span>
              <span className="text-green-600" data-unique-id="c5b6766c-5e97-4bdc-b404-ba9c0959500c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="e6793765-8df8-4acd-a5fc-56535b7998a9" data-file-name="components/accounting/financial-reports.tsx">Rp 15.000.000</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  return <div className="space-y-6" data-unique-id="f163c16d-68e1-469e-b9f7-61ee3a7b2fef" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="7840cfe7-1f6b-424f-8bdf-a7d14e999162" data-file-name="components/accounting/financial-reports.tsx">
        <div data-unique-id="7eb53384-9055-4fcf-a256-c3d78928af95" data-file-name="components/accounting/financial-reports.tsx">
          <h2 className="text-2xl font-bold" data-unique-id="f25cd403-983f-4d3b-bf28-876de0d7dc8c" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="5e9669ef-420c-48cb-b25a-5ab10fe6dfa9" data-file-name="components/accounting/financial-reports.tsx">Laporan Keuangan</span></h2>
          <p className="text-muted-foreground" data-unique-id="54a5961c-8173-4f97-8e95-cd1cfba7fafe" data-file-name="components/accounting/financial-reports.tsx"><span className="editable-text" data-unique-id="542fc757-d64a-4a83-a657-7ed3b93ba194" data-file-name="components/accounting/financial-reports.tsx">Analisis kinerja keuangan perusahaan</span></p>
        </div>
        
        <div className="flex items-center gap-4" data-unique-id="36ac994e-2442-4ee6-915e-764a53910a89" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
          {/* Period Selector */}
          <div className="flex items-center gap-2" data-unique-id="84106a3b-d57d-44b1-a16f-9b405c8bad6d" data-file-name="components/accounting/financial-reports.tsx">
            <Calendar className="w-4 h-4 text-muted-foreground" data-unique-id="d5d80f0d-0b9b-44e1-92d3-ef6120cf33ea" data-file-name="components/accounting/financial-reports.tsx" />
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value as Period)} className="px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="d4fd86bd-7403-458f-b5ab-c7888b9a3a48" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
              {periods.map(period => <option key={period.id} value={period.id} data-unique-id="e555fe2d-b2c6-41e5-828b-7547906d3047" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">{period.label}</option>)}
            </select>
          </div>
          
          {/* Export Buttons */}
          <div className="flex gap-2" data-unique-id="8dc92fd3-1af8-464e-8dca-ffd76a50930b" data-file-name="components/accounting/financial-reports.tsx">
            <button onClick={() => handleExport('excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="f3867c9b-81dc-4177-8eb0-1552d67963fa" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="7af084f9-9681-4a65-8ac9-32f288e63e4b" data-file-name="components/accounting/financial-reports.tsx">
              Excel
            </span></button>
            <button onClick={() => handleExport('pdf')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="753e3df9-bcfd-4a3f-8b77-b6d8ddeb391e" data-file-name="components/accounting/financial-reports.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="3344e625-5a28-4689-b503-be02e55b6f02" data-file-name="components/accounting/financial-reports.tsx">
              PDF
            </span></button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="flex space-x-4" data-unique-id="16d829a8-0dc6-4260-856c-54ac038a5f97" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {reports.map(report => {
        const Icon = report.icon;
        const isActive = activeReport === report.id;
        return <button key={report.id} onClick={() => setActiveReport(report.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="1f8a9694-f2fa-45e0-b109-24eeae3d589e" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
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
    }} data-unique-id="fc36750a-7650-4805-a3b2-250a1c24738d" data-file-name="components/accounting/financial-reports.tsx" data-dynamic-text="true">
        {activeReport === 'balance-sheet' && renderBalanceSheet()}
        {activeReport === 'income-statement' && renderIncomeStatement()}
        {activeReport === 'cash-flow' && renderCashFlow()}
      </motion.div>
    </div>;
}