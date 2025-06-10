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
  return <div className="space-y-6" data-unique-id="b41eabd0-7c20-400a-af31-b7716148039a" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="d1598c04-bd48-496f-93f2-302f09295fb8" data-file-name="components/accounting/general-ledger.tsx">
        <div data-unique-id="67a181f5-d9b3-49d5-91a0-ee917c4c7ee2" data-file-name="components/accounting/general-ledger.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="ebc410a0-bd1b-4f2f-b5a6-b0fe49f2f61e" data-file-name="components/accounting/general-ledger.tsx">
            <BookOpen className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="6aaecd19-c624-4eca-b213-1a31f05d5ce8" data-file-name="components/accounting/general-ledger.tsx">
            Buku Besar
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="0d3a0bd5-b4f4-4e95-84ed-ea656443503d" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="c0efa67a-be51-4f04-929e-3e9094ecee8a" data-file-name="components/accounting/general-ledger.tsx">Catatan transaksi per akun</span></p>
        </div>
        
        <button onClick={handleExport} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="61627a6f-76c9-4416-8335-6a633bcd90b0" data-file-name="components/accounting/general-ledger.tsx">
          <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="335d06fa-340b-4722-afae-2907e2fca1db" data-file-name="components/accounting/general-ledger.tsx">
          Export Excel
        </span></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-unique-id="555cb395-46d1-4410-b9e0-3035b1d28355" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
        {/* Account List */}
        <div className="glass-effect rounded-2xl p-6" data-unique-id="a50d1f33-ec67-4ce2-abbd-79bf13c4b760" data-file-name="components/accounting/general-ledger.tsx">
          <h3 className="text-lg font-semibold mb-4" data-unique-id="f157b076-e62d-4ae7-8aea-0b9b4e85c545" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="a61f22ab-c47b-48f7-9450-4afc3c9c9469" data-file-name="components/accounting/general-ledger.tsx">Daftar Akun</span></h3>
          <div className="space-y-2" data-unique-id="28ea8f58-bde5-4d7d-a293-eacc0c8abfb6" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            {accounts.map(account => <button key={account.id} onClick={() => setSelectedAccount(account.id)} className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedAccount === account.id ? 'gradient-primary text-white' : 'hover:bg-accent/50'}`} data-unique-id="c6a95c36-d755-4c11-82a6-de9be699b6b0" data-file-name="components/accounting/general-ledger.tsx">
                <div className="font-medium" data-unique-id="a9017426-7cd1-4046-a3bf-eb938d6501a4" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{account.name}</div>
                <div className={`text-sm ${selectedAccount === account.id ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="244e9d31-5533-4cde-adc9-14a4474404d7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c473a63a-5b82-4b59-8de5-d6b7edfa67a9" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(account.balance).toLocaleString('id-ID')}
                </div>
              </button>)}
          </div>
        </div>

        {/* Ledger Details */}
        <div className="lg:col-span-3 space-y-6" data-unique-id="ef4d4e32-fbe6-4f86-8202-71963aafe3a0" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="4c4fb101-0198-4e1c-a729-60488bf750b9" data-file-name="components/accounting/general-ledger.tsx">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="a14cb2f4-e205-45b6-9b47-1a6eeec5df03" data-file-name="components/accounting/general-ledger.tsx">
              <div className="md:col-span-2" data-unique-id="d8e4a582-a5b2-49f3-833d-14176fcaec8f" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="b5a26bb9-60ea-4a27-a5f4-fee106537b08" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="979c3ac8-3420-4ce5-9098-b8f562ea2912" data-file-name="components/accounting/general-ledger.tsx">Pencarian</span></label>
                <div className="relative" data-unique-id="f912c78e-aa40-43a5-b8ab-b9617396aca6" data-file-name="components/accounting/general-ledger.tsx">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Cari transaksi..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="cf9b1cc8-06ec-4ec5-b13a-05df156301a5" data-file-name="components/accounting/general-ledger.tsx" />
                </div>
              </div>
              <div data-unique-id="6fbfd2da-2d38-45c7-b56e-e5b3a79e2c07" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="743073fd-3e34-4f78-baf5-5bdf8c9bf438" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="7e114597-0800-4599-a937-5bcd1ecb5932" data-file-name="components/accounting/general-ledger.tsx">Dari Tanggal</span></label>
                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="b9a095b4-e331-4b17-9721-57f225e4bceb" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
              <div data-unique-id="2099813e-e80c-4f2a-a8f9-3c55bca0d765" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="935ca82e-ddde-4fd8-84a9-2fab31249541" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="b2fbd1dc-daa9-4d64-9946-adb3dfb62453" data-file-name="components/accounting/general-ledger.tsx">Sampai Tanggal</span></label>
                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="acfd1b58-044f-4ea6-9978-04b8cceac4d0" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="851ff35e-4b1e-4b9a-b462-f57f1a214971" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="f674654a-ad1b-4783-8da1-a215f209b923" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c88f2b64-376e-4f86-843d-05a001eafd1b" data-file-name="components/accounting/general-ledger.tsx">
              Buku Besar: </span>{selectedAccountData?.name}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6" data-unique-id="2cfa1cea-283c-4425-9081-e4b24c831f70" data-file-name="components/accounting/general-ledger.tsx">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="944af23a-f8b7-4754-96aa-b4554703d4d4" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-blue-600" data-unique-id="7284f387-e935-4753-a11d-53da9168cce7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="de6087c9-a331-4c34-8190-70307c29494c" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalDebit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-blue-700" data-unique-id="1ddabb26-8119-4526-b4b0-319b46a4287b" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="a21d45cd-6edb-48fc-a762-6a62659f4f3f" data-file-name="components/accounting/general-ledger.tsx">Total Debit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="14030b2b-95b6-4219-8d9d-e274a52287ca" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-red-600" data-unique-id="693b1414-4f4d-4814-8830-69060f4235bb" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b216c52e-7d08-4658-8d8a-fd7bcbe2dc4e" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalCredit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-red-700" data-unique-id="1d449af6-00ba-46cf-8042-33ada2957f77" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="586fe0cb-209a-4f44-87fb-b2c36f091a63" data-file-name="components/accounting/general-ledger.tsx">Total Kredit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="2beb3967-c4f7-4f86-974b-a3236231fedd" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-green-600" data-unique-id="0f654331-cfb0-45e5-a086-efca83c9a843" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c9d1f736-93db-4473-8eeb-11b42b4a73ac" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-green-700" data-unique-id="e97974b6-2177-4c91-b522-fd5dc00e5184" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="0787e9ea-e918-4c85-9b4f-96735fd3b92f" data-file-name="components/accounting/general-ledger.tsx">Saldo Akhir</span></div>
              </div>
            </div>

            {/* Ledger Table */}
            <div className="overflow-x-auto" data-unique-id="32ae8d7c-8d88-467d-940c-ae5a73395ace" data-file-name="components/accounting/general-ledger.tsx">
              <table className="w-full" data-unique-id="bb7a8276-7e3b-4859-beec-0904e34d9a26" data-file-name="components/accounting/general-ledger.tsx">
                <thead data-unique-id="a8890e06-24a3-45c3-9dfc-aee79166df72" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-b border-border" data-unique-id="6de805c9-9c52-4d97-99ed-933211785eab" data-file-name="components/accounting/general-ledger.tsx">
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="4fc93501-89bb-450d-a4e5-9ce251055bbf" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="63afc042-ecd2-400d-ace3-1076e8aab2b3" data-file-name="components/accounting/general-ledger.tsx">Tanggal</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="ae083319-80b7-4155-b884-bb6d8da35a52" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="eff29f1c-cef3-41be-9f31-ee544ffc7578" data-file-name="components/accounting/general-ledger.tsx">Keterangan</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="764b1c96-f939-4954-87af-94928bec3929" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="2ebb0b35-3bcb-4ed0-95fa-22ecbcf73a16" data-file-name="components/accounting/general-ledger.tsx">Ref</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="5b914b46-75a3-429b-9101-0af8a732f435" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="c07adebd-82ce-44f9-961f-b483fc92df83" data-file-name="components/accounting/general-ledger.tsx">Debit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="d82fc302-6f5f-4b51-b8fa-180afdeb8fff" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="a8a4b6b3-1dad-40d9-a636-d5707d48e60b" data-file-name="components/accounting/general-ledger.tsx">Kredit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="822ce564-85f5-4d23-9c83-db80c77c5912" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="75a35233-60de-4760-a1fa-f13d05f73463" data-file-name="components/accounting/general-ledger.tsx">Saldo</span></th>
                  </tr>
                </thead>
                <tbody data-unique-id="93ce50f7-b80f-4fcf-a434-96a4fa091d96" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                  {filteredEntries.map((entry, index) => <motion.tr key={entry.id} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.05
                }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="6c5509cc-35d5-4951-9f2a-a62a34cba4d1" data-file-name="components/accounting/general-ledger.tsx">
                      <td className="py-3 px-4" data-unique-id="3847edfc-20db-4993-8834-4ece54433649" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.date}</td>
                      <td className="py-3 px-4" data-unique-id="ebd6febc-59a2-431e-b888-f31d442f33c5" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.description}</td>
                      <td className="py-3 px-4 text-primary font-medium" data-unique-id="7eddc7c5-633b-44b4-b68b-6e3fb0daabd0" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.reference}</td>
                      <td className="py-3 px-4 text-right" data-unique-id="331e82c9-6e7d-4b3d-8338-95d2c8d961f9" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.debit > 0 ? `Rp ${entry.debit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right" data-unique-id="397203a2-0072-40b4-9de6-ae8a270a4fda" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.credit > 0 ? `Rp ${entry.credit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold" data-unique-id="90817429-f878-4fc1-be22-88ba277a5734" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a7bf982c-a2e4-49fb-979d-c7a4b6533626" data-file-name="components/accounting/general-ledger.tsx">
                        Rp </span>{entry.balance.toLocaleString('id-ID')}
                      </td>
                    </motion.tr>)}
                </tbody>
                <tfoot data-unique-id="f614a108-999f-42d6-b0df-f568ac3bc2f5" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-t-2 border-border font-semibold" data-unique-id="1f2d55e9-ae53-4868-b835-09d6009dd32d" data-file-name="components/accounting/general-ledger.tsx">
                    <td colSpan={3} className="py-3 px-4" data-unique-id="0744cc7c-d9d7-4080-8120-3c9081797c99" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="40e6f884-e09d-4217-bba5-45b299c6c529" data-file-name="components/accounting/general-ledger.tsx">Total</span></td>
                    <td className="py-3 px-4 text-right" data-unique-id="24746ee3-b312-41b1-b08f-ee2a7f49dc31" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="247021ff-2662-4262-b319-69982928523f" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="9be3307a-9ecb-4319-8252-f8358cb90617" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f993bbf1-60a1-44c8-99c2-4e9af15cea95" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="f4b82528-a103-4842-a968-dbc75d53caf1" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8ba59ee4-c91f-4e3e-840d-7465728f9145" data-file-name="components/accounting/general-ledger.tsx">
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