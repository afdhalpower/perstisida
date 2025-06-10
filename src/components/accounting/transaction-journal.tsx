'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Plus, Edit3, Trash2, Search, Calendar, Download } from 'lucide-react';
interface JournalEntry {
  id: string;
  date: string;
  reference: string;
  description: string;
  accounts: Array<{
    account: string;
    debit: number;
    credit: number;
  }>;
}
export function TransactionJournal() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const journalEntries: JournalEntry[] = [{
    id: '1',
    date: '2024-01-05',
    reference: 'JU-001',
    description: 'Penjualan pestisida tunai',
    accounts: [{
      account: 'Kas',
      debit: 2500000,
      credit: 0
    }, {
      account: 'Penjualan',
      debit: 0,
      credit: 2500000
    }]
  }, {
    id: '2',
    date: '2024-01-10',
    reference: 'JU-002',
    description: 'Pembayaran gaji karyawan',
    accounts: [{
      account: 'Biaya Gaji',
      debit: 1500000,
      credit: 0
    }, {
      account: 'Kas',
      debit: 0,
      credit: 1500000
    }]
  }, {
    id: '3',
    date: '2024-01-15',
    reference: 'JU-003',
    description: 'Pembelian persediaan pestisida',
    accounts: [{
      account: 'Persediaan',
      debit: 5000000,
      credit: 0
    }, {
      account: 'Kas',
      debit: 0,
      credit: 3000000
    }, {
      account: 'Hutang Dagang',
      debit: 0,
      credit: 2000000
    }]
  }, {
    id: '4',
    date: '2024-01-20',
    reference: 'JU-004',
    description: 'Pembayaran sewa toko',
    accounts: [{
      account: 'Biaya Sewa',
      debit: 2000000,
      credit: 0
    }, {
      account: 'Kas',
      debit: 0,
      credit: 2000000
    }]
  }];
  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase()) || entry.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !dateFilter || entry.date.includes(dateFilter);
    return matchesSearch && matchesDate;
  });
  return <div className="space-y-6" data-unique-id="9ae4368d-9914-4a30-891d-c6e7d50a219f" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="6b58e0ce-caf7-4b3c-8e38-bd00072701a2" data-file-name="components/accounting/transaction-journal.tsx">
        <div data-unique-id="b0cb56ac-36a1-48ff-9bed-f800b21e612c" data-file-name="components/accounting/transaction-journal.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="d99f77ba-f879-410f-8ea6-ab6455880163" data-file-name="components/accounting/transaction-journal.tsx">
            <Calculator className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="9203bbca-7f9f-44b2-b5f5-56c33ca74717" data-file-name="components/accounting/transaction-journal.tsx">
            Jurnal Transaksi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="24ae4c55-6085-4cb4-a87f-3b41f79e90c7" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="d76c6017-6106-469e-912a-4275864f9a97" data-file-name="components/accounting/transaction-journal.tsx">Pencatatan jurnal harian</span></p>
        </div>
        
        <div className="flex items-center gap-3" data-unique-id="c684e830-3fd8-4833-87f1-a802d94049ae" data-file-name="components/accounting/transaction-journal.tsx">
          <button onClick={() => alert('Export jurnal ke Excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="2b75389b-a44d-47a5-9dfb-f030863b88a9" data-file-name="components/accounting/transaction-journal.tsx">
            <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="1e25802d-b114-406d-b15e-04657e14c8ff" data-file-name="components/accounting/transaction-journal.tsx">
            Export
          </span></button>
          <button onClick={() => setShowForm(true)} className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2" data-unique-id="2b6cbddb-7a6f-448a-8636-5b5d4232fcb2" data-file-name="components/accounting/transaction-journal.tsx">
            <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="602e2ccf-2145-4b1e-953e-c1ff177b65db" data-file-name="components/accounting/transaction-journal.tsx">
            Tambah Jurnal
          </span></button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="12a63861-a1b8-4a62-92c7-8041dbbfa05d" data-file-name="components/accounting/transaction-journal.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="bbe93b9e-e2da-48e6-9f32-cfb781e1aa3a" data-file-name="components/accounting/transaction-journal.tsx">
          <div data-unique-id="f9a82c91-74b4-49ad-aa00-0d787ffa5667" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="e36f3f19-2888-4344-93d0-ae80011d152a" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="07d1c0a2-c9b1-4062-a414-10026edc5bd8" data-file-name="components/accounting/transaction-journal.tsx">Pencarian</span></label>
            <div className="relative" data-unique-id="5718bbd0-92f0-4906-ad00-baab158bfa1a" data-file-name="components/accounting/transaction-journal.tsx">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Cari jurnal..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="31755c04-96ff-43d1-bb9f-4fcae4c12577" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
          <div data-unique-id="fc7f33bc-86a6-422f-9611-34ba7589d3f5" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="56c4d0a3-984a-4926-a698-a9b78e28f0c6" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="498b0299-f0bd-42d4-91a8-fa0028bd5496" data-file-name="components/accounting/transaction-journal.tsx">Filter Tanggal</span></label>
            <div className="relative" data-unique-id="efd2a6db-14bc-47f0-bf21-3137b34a62cc" data-file-name="components/accounting/transaction-journal.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="01c73de7-f301-4ac6-ae78-9c5e485c5d55" data-file-name="components/accounting/transaction-journal.tsx" />
              <input type="month" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="1c425516-4aa8-47ec-85d8-3484fc8aa44b" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4" data-unique-id="d79042c0-b4f0-4e75-bf4a-1cff85347d54" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
        {filteredEntries.map((entry, index) => {
        const totalDebit = entry.accounts.reduce((sum, acc) => sum + acc.debit, 0);
        const totalCredit = entry.accounts.reduce((sum, acc) => sum + acc.credit, 0);
        return <motion.div key={entry.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="9d42c1bb-b697-47da-a645-17d1ba58a083" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="eb88dd8d-a278-4f30-8dc9-e69e8a442bf0" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="34cf9a00-d6d9-47a1-ac10-64e658eec02d" data-file-name="components/accounting/transaction-journal.tsx">
                  <h3 className="text-lg font-semibold" data-unique-id="f4ad6669-45ed-49ef-a619-b3c122f6a8e1" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.reference}</h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="288faef0-9754-4f07-b4a9-fad4ac9b32e0" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.date}<span className="editable-text" data-unique-id="350789ac-89fe-4823-97da-ba3ff2fc89a7" data-file-name="components/accounting/transaction-journal.tsx"> - </span>{entry.description}</p>
                </div>
                <div className="flex items-center gap-2" data-unique-id="ed839a48-c013-4388-8b18-685fa432a79f" data-file-name="components/accounting/transaction-journal.tsx">
                  <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="1cccbd8e-167d-4325-88a5-da64923f4712" data-file-name="components/accounting/transaction-journal.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="a60ce8ec-70eb-4932-a2f4-2a1f09810e88" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="6d0cd32e-8d4c-4d53-94e9-96578ab5c574" data-file-name="components/accounting/transaction-journal.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="3f7ce827-4629-4627-a142-de5176bab694" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto" data-unique-id="9825304c-b4d3-4a20-a8fc-75270905baf2" data-file-name="components/accounting/transaction-journal.tsx">
                <table className="w-full" data-unique-id="2c36a1b9-b475-47f6-8916-b6226cefc619" data-file-name="components/accounting/transaction-journal.tsx">
                  <thead data-unique-id="64ebe629-299f-42c6-a3a4-c850fd0fb8c7" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-b border-border" data-unique-id="f46da520-fd7f-4b0f-9153-28aa72d5452f" data-file-name="components/accounting/transaction-journal.tsx">
                      <th className="text-left py-2 px-3 font-medium" data-unique-id="8bd58a20-136a-4027-a870-740f4eed5a92" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="c193fa1b-0527-436f-bee5-ff5588ad3ecc" data-file-name="components/accounting/transaction-journal.tsx">Akun</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="848fc144-e6e7-4832-83ae-dfccf5f81f9b" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="3176ff01-63fd-4dd5-b0e6-41db43f78b37" data-file-name="components/accounting/transaction-journal.tsx">Debit</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="41215fb6-3b39-461f-a9da-f4f60ac1d7b1" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="7d249c68-0fda-4a0f-9c53-7dd5c5049029" data-file-name="components/accounting/transaction-journal.tsx">Kredit</span></th>
                    </tr>
                  </thead>
                  <tbody data-unique-id="b7f2d84f-1104-4098-9919-918fbede08f9" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                    {entry.accounts.map((account, idx) => <tr key={idx} className="border-b border-border/50" data-unique-id="cb010710-289c-4dde-a00b-e7d4e7cde723" data-file-name="components/accounting/transaction-journal.tsx">
                        <td className="py-2 px-3" data-unique-id="e170c9e0-91d8-4434-846f-24e67fd1544f" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{account.account}</td>
                        <td className="py-2 px-3 text-right" data-unique-id="d19d2bca-4f68-44a8-8f18-1e56130e8a30" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.debit > 0 ? `Rp ${account.debit.toLocaleString('id-ID')}` : '-'}
                        </td>
                        <td className="py-2 px-3 text-right" data-unique-id="eeb86420-1cfc-4c38-8fd0-0bb947b39b2a" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.credit > 0 ? `Rp ${account.credit.toLocaleString('id-ID')}` : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot data-unique-id="85b273a7-00cb-482f-ac91-e6ffbd47e92e" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-t-2 border-border font-semibold" data-unique-id="ef9d64ba-6259-44bf-bce5-f55cf161bb5a" data-file-name="components/accounting/transaction-journal.tsx">
                      <td className="py-2 px-3" data-unique-id="1289b2fa-38dd-4421-8b55-78a8b13d49ee" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="f4cd44da-2b74-4a52-b88f-fd532f199cfb" data-file-name="components/accounting/transaction-journal.tsx">Total</span></td>
                      <td className="py-2 px-3 text-right" data-unique-id="c59c585f-a83a-455e-89b4-ae11bdef8994" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="657f9178-45ca-42ba-bba2-fbe68a0313b9" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                      <td className="py-2 px-3 text-right" data-unique-id="2bf18137-6613-458a-ace3-376081389e3a" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e7b86eb2-95eb-4bd6-a9de-0159bc395b1e" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {totalDebit !== totalCredit && <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200" data-unique-id="27d08b2f-782c-4ab1-b6b6-670ef456fb08" data-file-name="components/accounting/transaction-journal.tsx">
                  <p className="text-red-700 text-sm font-medium" data-unique-id="0a822813-9af7-481a-ad0a-e314f4a25141" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="a4b3d95c-2c0b-402c-bf85-ef4f861c7921" data-file-name="components/accounting/transaction-journal.tsx">
                    ⚠️ Jurnal tidak seimbang! Debit dan Kredit harus sama.
                  </span></p>
                </div>}
            </motion.div>;
      })}
      </div>

      {filteredEntries.length === 0 && <div className="text-center py-12 glass-effect rounded-2xl" data-unique-id="91e7cba7-d8da-4ae1-9706-ac8b650b548c" data-file-name="components/accounting/transaction-journal.tsx">
          <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="f5da4cac-7258-4c92-9750-2687652dc798" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Jurnal tidak ditemukan' : 'Belum ada jurnal'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="68af845c-3172-4704-b462-c74439af0538" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Coba ubah filter pencarian' : 'Tambahkan jurnal transaksi pertama'}
          </p>
        </div>}

      {/* Add Journal Modal - Simplified for demo */}
      {showForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="f1335ed8-59c7-4cc7-aee3-679e0dafb4a0" data-file-name="components/accounting/transaction-journal.tsx">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl" data-unique-id="6fdcc2f3-008a-4ece-bcbc-a2b6e3a4bc62" data-file-name="components/accounting/transaction-journal.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="e3602951-c174-4fda-ad9d-6bed76ed9a40" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="bfe9f938-68c3-46ab-9838-697641ec0a38" data-file-name="components/accounting/transaction-journal.tsx">Tambah Jurnal Transaksi</span></h3>
            <div className="space-y-4" data-unique-id="e2129a37-df7d-49c9-8980-e2977b9f4dc9" data-file-name="components/accounting/transaction-journal.tsx">
              <div className="grid grid-cols-2 gap-4" data-unique-id="d92caa04-0578-46f7-8f1f-bd76ab864d1e" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="47d02b60-a712-4f62-9148-28b4f8fb5af8" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="08dd2616-697f-4027-ac31-b259a81f64d1" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="c9a78173-4efb-4ef1-be0f-8dbe8882c7fa" data-file-name="components/accounting/transaction-journal.tsx">Tanggal</span></label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="490b912e-4050-4306-91b9-2e9e2c2b7eed" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
                <div data-unique-id="43a20e45-f9cc-4be1-9d96-1c30f0091a0a" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="9c6a3525-181d-41e6-9f5a-8c61553f8931" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="10e060a8-2dd9-409b-a2f1-19ad5f1f9683" data-file-name="components/accounting/transaction-journal.tsx">No. Referensi</span></label>
                  <input type="text" placeholder="JU-001" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="49b783ae-e24c-46f2-ae46-49ef7877caa9" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
              </div>
              <div data-unique-id="932f8750-b515-4514-966a-4c9866b13ee6" data-file-name="components/accounting/transaction-journal.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="81d2b33e-e080-4786-a72a-92edf5d88660" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="9bf24b71-0e87-46ce-8e6a-f201d03655ef" data-file-name="components/accounting/transaction-journal.tsx">Keterangan</span></label>
                <input type="text" placeholder="Deskripsi transaksi" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="914c19fb-28dc-4116-a958-26f51e44b084" data-file-name="components/accounting/transaction-journal.tsx" />
              </div>
              <div className="flex gap-2 pt-4" data-unique-id="1e1156ce-f430-49f0-80a9-cef0ecdf95cf" data-file-name="components/accounting/transaction-journal.tsx">
                <button onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors" data-unique-id="67844f83-aaae-4f8d-aca7-619e3c921ffe" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="2bf4b052-f29f-4251-8f0f-32f1d6775782" data-file-name="components/accounting/transaction-journal.tsx">
                  Batal
                </span></button>
                <button onClick={() => {
              alert('Fitur tambah jurnal akan dikembangkan lebih lanjut');
              setShowForm(false);
            }} className="flex-1 gradient-primary text-white px-4 py-2 rounded-lg font-semibold" data-unique-id="04495248-eb7b-49a1-9f8e-fa267be38626" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="706ff241-9855-4a48-b842-6690527cf092" data-file-name="components/accounting/transaction-journal.tsx">
                  Simpan
                </span></button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}