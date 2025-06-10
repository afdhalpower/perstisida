'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, Calendar, Download } from 'lucide-react';
interface LedgerEntry {
  id: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
  reference: string;
}
export function GeneralLedger() {
  const [selectedAccount, setSelectedAccount] = useState('cash');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('2024-01-01');
  const [dateTo, setDateTo] = useState('2024-12-31');
  const accounts = [{
    id: 'cash',
    name: 'Kas',
    balance: 45000000
  }, {
    id: 'accounts-receivable',
    name: 'Piutang Dagang',
    balance: 18000000
  }, {
    id: 'inventory',
    name: 'Persediaan',
    balance: 32000000
  }, {
    id: 'equipment',
    name: 'Peralatan',
    balance: 85000000
  }, {
    id: 'accounts-payable',
    name: 'Hutang Dagang',
    balance: -25000000
  }, {
    id: 'bank-loan',
    name: 'Hutang Bank',
    balance: -35000000
  }, {
    id: 'capital',
    name: 'Modal Pemilik',
    balance: -100000000
  }, {
    id: 'sales',
    name: 'Penjualan',
    balance: -96700000
  }, {
    id: 'cogs',
    name: 'Harga Pokok Penjualan',
    balance: 68690000
  }, {
    id: 'salary-expense',
    name: 'Biaya Gaji',
    balance: 8000000
  }];

  // Sample ledger entries for cash account
  const ledgerEntries: LedgerEntry[] = [{
    id: '1',
    date: '2024-01-01',
    description: 'Saldo Awal',
    debit: 40000000,
    credit: 0,
    balance: 40000000,
    reference: 'SA-001'
  }, {
    id: '2',
    date: '2024-01-05',
    description: 'Penjualan Tunai - Pestisida ABC',
    debit: 2500000,
    credit: 0,
    balance: 42500000,
    reference: 'JU-001'
  }, {
    id: '3',
    date: '2024-01-10',
    description: 'Pembayaran Gaji Karyawan',
    debit: 0,
    credit: 1500000,
    balance: 41000000,
    reference: 'JU-002'
  }, {
    id: '4',
    date: '2024-01-15',
    description: 'Penjualan Tunai - Pestisida XYZ',
    debit: 3200000,
    credit: 0,
    balance: 44200000,
    reference: 'JU-003'
  }, {
    id: '5',
    date: '2024-01-20',
    description: 'Pembayaran Sewa Toko',
    debit: 0,
    credit: 2000000,
    balance: 42200000,
    reference: 'JU-004'
  }, {
    id: '6',
    date: '2024-01-25',
    description: 'Pembelian Persediaan',
    debit: 0,
    credit: 5000000,
    balance: 37200000,
    reference: 'JU-005'
  }, {
    id: '7',
    date: '2024-01-30',
    description: 'Penjualan Tunai - Pestisida DEF',
    debit: 7800000,
    credit: 0,
    balance: 45000000,
    reference: 'JU-006'
  }];
  const selectedAccountData = accounts.find(acc => acc.id === selectedAccount);
  const filteredEntries = ledgerEntries.filter(entry => {
    const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase()) || entry.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = entry.date >= dateFrom && entry.date <= dateTo;
    return matchesSearch && matchesDate;
  });
  const totalDebit = filteredEntries.reduce((sum, entry) => sum + entry.debit, 0);
  const totalCredit = filteredEntries.reduce((sum, entry) => sum + entry.credit, 0);
  const handleExport = () => {
    alert('Mengekspor buku besar ke Excel');
  };
  return <div className="space-y-6" data-unique-id="74b96576-d1d0-4f5f-a9d6-40d36ebfec9e" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="b14e4c39-e3aa-4735-ac22-a5ef70251e49" data-file-name="components/accounting/general-ledger.tsx">
        <div data-unique-id="57145ae9-d8f9-4777-8bc3-dbb5d7b01b94" data-file-name="components/accounting/general-ledger.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="8e2ace88-0997-4505-a3ce-46af9d7aa9e7" data-file-name="components/accounting/general-ledger.tsx">
            <BookOpen className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="315ff3f0-0dc4-48a7-b4ec-aab642a08695" data-file-name="components/accounting/general-ledger.tsx">
            Buku Besar
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="41fa0c77-188e-4b8f-85ba-f989c816f859" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="2c7db70d-dfe1-43d9-b0a2-802c0be6cbe1" data-file-name="components/accounting/general-ledger.tsx">Catatan transaksi per akun</span></p>
        </div>
        
        <button onClick={handleExport} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="f641c64b-fe6a-418b-8dec-2758a97cca15" data-file-name="components/accounting/general-ledger.tsx">
          <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="bc529faf-243a-4d3f-bf22-95a24e6cba96" data-file-name="components/accounting/general-ledger.tsx">
          Export Excel
        </span></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-unique-id="7aa091d9-d222-4ab4-821e-a371c04171c9" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
        {/* Account List */}
        <div className="glass-effect rounded-2xl p-6" data-unique-id="372c5358-48d3-4051-b061-59a996a72a1d" data-file-name="components/accounting/general-ledger.tsx">
          <h3 className="text-lg font-semibold mb-4" data-unique-id="53105258-3fb2-4f2c-862d-2dad34b54c9d" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="448f98a6-f64b-4966-a0b3-bee2ce2af64d" data-file-name="components/accounting/general-ledger.tsx">Daftar Akun</span></h3>
          <div className="space-y-2" data-unique-id="8fc8963d-5d1e-4728-aaed-db969e7674f2" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            {accounts.map(account => <button key={account.id} onClick={() => setSelectedAccount(account.id)} className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedAccount === account.id ? 'gradient-primary text-white' : 'hover:bg-accent/50'}`} data-unique-id="e0aea5ed-40b7-4b1a-a2ce-c277299063e6" data-file-name="components/accounting/general-ledger.tsx">
                <div className="font-medium" data-unique-id="6c1684e3-f8f7-4a46-8a09-0dd7fff54e82" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{account.name}</div>
                <div className={`text-sm ${selectedAccount === account.id ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="01ac8829-952f-474c-8871-362284b27c33" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="1425618f-92df-49c2-a54a-11b1ef658743" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(account.balance).toLocaleString('id-ID')}
                </div>
              </button>)}
          </div>
        </div>

        {/* Ledger Details */}
        <div className="lg:col-span-3 space-y-6" data-unique-id="967466c2-bd6d-43e7-a6a0-1491b3aec6f5" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="f53bce9f-a0ea-4951-b8fa-7fc08c5c4790" data-file-name="components/accounting/general-ledger.tsx">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="a85c2ab8-b91c-4871-8091-06f98e10031b" data-file-name="components/accounting/general-ledger.tsx">
              <div className="md:col-span-2" data-unique-id="2f4ed3b7-ba3f-43e0-b90c-ef21c06341f1" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="5ad84c54-e746-477b-a7a4-a283374d6a60" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="056e6d42-f721-4d13-afd4-cca91cf11080" data-file-name="components/accounting/general-ledger.tsx">Pencarian</span></label>
                <div className="relative" data-unique-id="2418f1bd-7b41-4129-9df2-6dfdaae8405a" data-file-name="components/accounting/general-ledger.tsx">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Cari transaksi..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="e3b186ea-1cc1-4900-9081-65445ebd0793" data-file-name="components/accounting/general-ledger.tsx" />
                </div>
              </div>
              <div data-unique-id="572ebceb-3d56-46f8-9c63-dd41b0d459c7" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="8a63ca58-579a-4c67-a4c7-13aeed15e429" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="3f726382-a5f6-4d94-87f2-990f994b6186" data-file-name="components/accounting/general-ledger.tsx">Dari Tanggal</span></label>
                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="3bfc5169-5b0a-4247-b7c4-953a88adaaf7" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
              <div data-unique-id="9dc40072-2e18-4b30-89d3-24adacee4199" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="d48f70dd-2b29-4433-a96a-d0abe402df24" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="b92cd6d4-36fa-4e48-8032-80112d44d631" data-file-name="components/accounting/general-ledger.tsx">Sampai Tanggal</span></label>
                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="da31df1d-7bae-4c60-b559-df87817f7820" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="4893bec1-430d-4607-b6c4-ee583ce79c6b" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="f5240e7b-57c6-432d-8494-fccd179739a8" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="80920425-d603-4f4c-81c8-a6ccc1823330" data-file-name="components/accounting/general-ledger.tsx">
              Buku Besar: </span>{selectedAccountData?.name}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6" data-unique-id="bfda1891-c4c8-450b-bcff-b1f1519b1584" data-file-name="components/accounting/general-ledger.tsx">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="7da20c00-b8e3-41b9-ac32-2b7d086c7d5e" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-blue-600" data-unique-id="7ffe4d41-0b02-4157-881c-9fa968d1186b" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ba88baa7-72ad-420f-ad06-300a26b40904" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalDebit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-blue-700" data-unique-id="4db8343e-04b6-49a0-85e7-a6fb65568cd7" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="80e543e3-3025-4104-8f22-23b6af4274f9" data-file-name="components/accounting/general-ledger.tsx">Total Debit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="afd17158-0fed-4c5b-8116-e06ec5138e0e" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-red-600" data-unique-id="bd64591e-050e-4cc8-81e6-179596cb9a8e" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="696a3737-14a2-48ff-9cd0-87393560c3a0" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalCredit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-red-700" data-unique-id="d6716ef4-1fac-42c7-9e12-1393eb1aa49d" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="7ae760c6-cb55-4464-a6f7-a329a3028a6a" data-file-name="components/accounting/general-ledger.tsx">Total Kredit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="42da8c92-0470-4581-91f6-0b24dbaed4a1" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-green-600" data-unique-id="ffacdba0-8d01-42fe-a0c0-a1010fc26114" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="568f6db6-6885-412a-9f4d-1e167db05cc1" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-green-700" data-unique-id="96243f2e-da04-424f-bbaf-3e5436fc4851" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="eba2dafa-b7d5-404a-bba5-ea1704ebc89a" data-file-name="components/accounting/general-ledger.tsx">Saldo Akhir</span></div>
              </div>
            </div>

            {/* Ledger Table */}
            <div className="overflow-x-auto" data-unique-id="7470a123-7099-4f5f-a0d6-cd54cfc11660" data-file-name="components/accounting/general-ledger.tsx">
              <table className="w-full" data-unique-id="31c48eff-c312-4c5f-8e62-eb4387eb51da" data-file-name="components/accounting/general-ledger.tsx">
                <thead data-unique-id="4bbf25b6-01db-41fd-a972-c31c920c0055" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-b border-border" data-unique-id="67bdfd08-b0e8-46b7-bdf8-cb689611a6bc" data-file-name="components/accounting/general-ledger.tsx">
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="dbbf5087-49bd-41ea-9e1c-af973b7790e4" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="e168fb5b-452d-4993-b3cb-d29731633ec1" data-file-name="components/accounting/general-ledger.tsx">Tanggal</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="b1abeead-1b8e-4050-a466-d389e477a070" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="feaa09e0-1300-4d93-95f0-1f82def906a2" data-file-name="components/accounting/general-ledger.tsx">Keterangan</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="c280efbb-c756-488f-a219-ac66c62a5e0a" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="766d6eac-8ed1-46ec-b735-1cfe2055719d" data-file-name="components/accounting/general-ledger.tsx">Ref</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="76996a43-8ee3-49b4-8f42-a80e05f1b6aa" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="965aa8a8-31d4-4a84-92f5-6e7265b806cf" data-file-name="components/accounting/general-ledger.tsx">Debit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="2d852b67-0532-4447-a336-e66a42a7cfae" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="89f003cf-df07-4ba8-b8c0-136061b87637" data-file-name="components/accounting/general-ledger.tsx">Kredit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="62d05e39-86d7-4a46-ab80-dcb8b6e312a5" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="bb1c7447-1855-49dc-a6a8-a4d0652ad763" data-file-name="components/accounting/general-ledger.tsx">Saldo</span></th>
                  </tr>
                </thead>
                <tbody data-unique-id="8a70232a-7b25-4882-ad3a-08ed123c6283" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                  {filteredEntries.map((entry, index) => <motion.tr key={entry.id} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.05
                }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="1c066037-2895-46f2-81f6-cdb8fc6ea834" data-file-name="components/accounting/general-ledger.tsx">
                      <td className="py-3 px-4" data-unique-id="4e9da4b8-2dab-4349-b855-c391164787a3" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.date}</td>
                      <td className="py-3 px-4" data-unique-id="abcace31-183f-414a-bd4a-af88cb071e8a" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.description}</td>
                      <td className="py-3 px-4 text-primary font-medium" data-unique-id="0e445a17-af4d-41a2-9e6f-894157bad5c5" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.reference}</td>
                      <td className="py-3 px-4 text-right" data-unique-id="431d14c5-adc0-4315-b90d-d0057a9f250a" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.debit > 0 ? `Rp ${entry.debit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right" data-unique-id="35fc938b-d131-4f54-8550-7d49a7eabaf5" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.credit > 0 ? `Rp ${entry.credit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold" data-unique-id="f8cae079-116e-4ad0-ab36-95c088c6566f" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dd37a91d-b592-42b8-8a13-3a0d639c2c88" data-file-name="components/accounting/general-ledger.tsx">
                        Rp </span>{entry.balance.toLocaleString('id-ID')}
                      </td>
                    </motion.tr>)}
                </tbody>
                <tfoot data-unique-id="7588993c-b25b-4960-bf3a-8798dadc6441" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-t-2 border-border font-semibold" data-unique-id="e8e556d6-d137-4856-96ab-c0677d3a49c1" data-file-name="components/accounting/general-ledger.tsx">
                    <td colSpan={3} className="py-3 px-4" data-unique-id="07e01e46-b704-4461-b82c-38cf8f46ba82" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="3c0af412-9f8e-4772-ac7d-5ee003e284b4" data-file-name="components/accounting/general-ledger.tsx">Total</span></td>
                    <td className="py-3 px-4 text-right" data-unique-id="b7162884-db7b-4c55-a4b2-c1cf89b79aae" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="9c6ed2f1-83fd-4715-b0a3-ea7677ab7050" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="b50a2fd5-93a1-43ed-b5b0-da7adbe8038b" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="941289a2-ead3-418f-8420-93c020d9b5fd" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="55e2306a-2703-4d39-9acc-8487115663a6" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="bd2adcbe-7ae6-4809-82e7-569ab08ccf32" data-file-name="components/accounting/general-ledger.tsx">
                      Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>;
}