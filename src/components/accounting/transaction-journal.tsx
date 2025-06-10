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
  return <div className="space-y-6" data-unique-id="b7955489-65ea-4c48-90e5-898412b0a441" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="198a2e5a-9c2e-47dd-a1d5-a0cc2efb9046" data-file-name="components/accounting/transaction-journal.tsx">
        <div data-unique-id="f06d6ac6-c15e-41ed-8e13-835cfd3c7394" data-file-name="components/accounting/transaction-journal.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="ea31c39b-3fe9-4fde-92c9-7aa7a6684b7c" data-file-name="components/accounting/transaction-journal.tsx">
            <Calculator className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="9e101b00-699c-4448-9c97-4ee47ff64694" data-file-name="components/accounting/transaction-journal.tsx">
            Jurnal Transaksi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="784f59db-3b78-4f26-bec0-50fefffce77c" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="c0ac1b12-9d57-42ac-b8fc-53bd93b13b34" data-file-name="components/accounting/transaction-journal.tsx">Pencatatan jurnal harian</span></p>
        </div>
        
        <div className="flex items-center gap-3" data-unique-id="0f09d4c1-445f-4796-8306-39900f5108b2" data-file-name="components/accounting/transaction-journal.tsx">
          <button onClick={() => alert('Export jurnal ke Excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="52883c87-508b-41ca-b688-fa85768cda20" data-file-name="components/accounting/transaction-journal.tsx">
            <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="b357eeb3-11f3-4ff3-8d31-887cb178ae93" data-file-name="components/accounting/transaction-journal.tsx">
            Export
          </span></button>
          <button onClick={() => setShowForm(true)} className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2" data-unique-id="2a8c3f1b-5189-40d0-b36b-5fa8ac45ce81" data-file-name="components/accounting/transaction-journal.tsx">
            <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="ccd41717-34a7-41eb-ad37-4d55cecfdc96" data-file-name="components/accounting/transaction-journal.tsx">
            Tambah Jurnal
          </span></button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="15498f38-e9f1-4428-9702-19bf2816d22e" data-file-name="components/accounting/transaction-journal.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="0397a28a-7954-47ee-a533-f146e4428a57" data-file-name="components/accounting/transaction-journal.tsx">
          <div data-unique-id="8e0b3753-ed50-46b2-8c96-5d688000b248" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="806ea561-6441-4a23-a4b4-b3b89697f08c" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="4d3c09a6-da40-4208-8e62-3754f44320c4" data-file-name="components/accounting/transaction-journal.tsx">Pencarian</span></label>
            <div className="relative" data-unique-id="96e7c3f6-5669-4e41-9045-19b6a500758e" data-file-name="components/accounting/transaction-journal.tsx">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Cari jurnal..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="c574599f-12c0-4852-b3d1-b56b38606491" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
          <div data-unique-id="42358f0a-5d67-490d-957f-30c9bbdb0c1c" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="bdbe0081-aeac-49ff-b928-25d2b11484d4" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="3319f5e3-4ae2-4623-992d-1325e825a2df" data-file-name="components/accounting/transaction-journal.tsx">Filter Tanggal</span></label>
            <div className="relative" data-unique-id="18377f5b-8ad4-4c3b-a234-5e0c06c185f8" data-file-name="components/accounting/transaction-journal.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="bb0cf3aa-2a9f-4c41-b9ee-a4190d57bcc1" data-file-name="components/accounting/transaction-journal.tsx" />
              <input type="month" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="d9eef7d0-68cf-46ad-be17-eb4627cef325" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4" data-unique-id="e973537e-5b6a-4446-ba9f-ffcae533ed2a" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="7089ee60-aa8a-4816-b5ab-4e75fe5dc769" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="ec6ebf56-37f4-4ab1-8967-db7740875785" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="20c4da35-8baa-4c13-a724-fed1774b08a3" data-file-name="components/accounting/transaction-journal.tsx">
                  <h3 className="text-lg font-semibold" data-unique-id="5453f1c2-c0f1-4b2d-85e2-8f390d8762b1" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.reference}</h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="44b396f7-9272-4428-9d3e-3709b7a77fa7" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.date}<span className="editable-text" data-unique-id="6a47f3a1-2546-41e8-9cb7-dc13b7a1cd34" data-file-name="components/accounting/transaction-journal.tsx"> - </span>{entry.description}</p>
                </div>
                <div className="flex items-center gap-2" data-unique-id="a7e1e25b-d0d8-411a-b3b1-e65ead9e748f" data-file-name="components/accounting/transaction-journal.tsx">
                  <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="3c6080f3-d8e9-498e-b378-0bef6bbe05e2" data-file-name="components/accounting/transaction-journal.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="f07748ad-b821-40c2-b4c6-511048815aea" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="74eaed64-fffb-4d28-bcd3-7cfb93f6a495" data-file-name="components/accounting/transaction-journal.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="0ecdb281-a7aa-47bd-979e-4b610d0b4a64" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto" data-unique-id="2af48e6b-0900-4881-a53e-9db3e44be3d6" data-file-name="components/accounting/transaction-journal.tsx">
                <table className="w-full" data-unique-id="7d71b619-0ac8-4977-9a36-aeb736c4e42d" data-file-name="components/accounting/transaction-journal.tsx">
                  <thead data-unique-id="f6d05da8-aee0-497e-9ec8-453461f42621" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-b border-border" data-unique-id="87ab2c35-0c33-4e88-a335-6f3238e5e6af" data-file-name="components/accounting/transaction-journal.tsx">
                      <th className="text-left py-2 px-3 font-medium" data-unique-id="2ab1645a-4fad-4b1d-a12a-c4ea1ceb1ed0" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="c1b61e08-522a-420d-b339-7cb4856d8626" data-file-name="components/accounting/transaction-journal.tsx">Akun</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="2bc4533f-b52e-42da-acf1-a0d0bc3825e5" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="b76313f8-9c0d-449e-965d-e539f3cf5dbf" data-file-name="components/accounting/transaction-journal.tsx">Debit</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="94dcfa31-5ad1-4c7f-bac4-5149dd4e697d" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="3940d789-7158-4a1a-8dcf-bc428bb290e5" data-file-name="components/accounting/transaction-journal.tsx">Kredit</span></th>
                    </tr>
                  </thead>
                  <tbody data-unique-id="464f0c50-a7ed-451d-9328-42944d83bf3e" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                    {entry.accounts.map((account, idx) => <tr key={idx} className="border-b border-border/50" data-unique-id="867cc4ec-c312-40f2-b045-30a0654bc338" data-file-name="components/accounting/transaction-journal.tsx">
                        <td className="py-2 px-3" data-unique-id="a2c4f375-f0b5-434d-bcdd-068073118e8e" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{account.account}</td>
                        <td className="py-2 px-3 text-right" data-unique-id="6aafeeb7-81e7-4f67-9b76-0a537a6ecc5f" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.debit > 0 ? `Rp ${account.debit.toLocaleString('id-ID')}` : '-'}
                        </td>
                        <td className="py-2 px-3 text-right" data-unique-id="f28507a9-ca79-4ce8-afd1-a50aa3836d05" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.credit > 0 ? `Rp ${account.credit.toLocaleString('id-ID')}` : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot data-unique-id="3de34c36-0b14-4e44-b02a-240a3022167b" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-t-2 border-border font-semibold" data-unique-id="df84a2b3-a002-41ee-b798-d449c6bf6aef" data-file-name="components/accounting/transaction-journal.tsx">
                      <td className="py-2 px-3" data-unique-id="393acffe-8822-4c45-b6cb-929d44171ca0" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="0ab65067-0165-48b3-8a68-9d493ae92f7c" data-file-name="components/accounting/transaction-journal.tsx">Total</span></td>
                      <td className="py-2 px-3 text-right" data-unique-id="d06cac1c-8ec4-42a1-be13-36de5a9bbfcb" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="536ed23a-f82f-41ef-8b0c-aafbb9495dbb" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                      <td className="py-2 px-3 text-right" data-unique-id="acf11b26-ff90-45d6-a708-b3efd0abb97f" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f6923ece-5457-47fa-a6fe-2cf2db5aa8da" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {totalDebit !== totalCredit && <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200" data-unique-id="a82f5408-6efc-4a2b-91ff-75c0edda50d6" data-file-name="components/accounting/transaction-journal.tsx">
                  <p className="text-red-700 text-sm font-medium" data-unique-id="04310fc5-9cdb-42a2-8396-668cd11a4bb1" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="9bf26df8-ec4a-4eb0-a577-0610e3071cd5" data-file-name="components/accounting/transaction-journal.tsx">
                    ⚠️ Jurnal tidak seimbang! Debit dan Kredit harus sama.
                  </span></p>
                </div>}
            </motion.div>;
      })}
      </div>

      {filteredEntries.length === 0 && <div className="text-center py-12 glass-effect rounded-2xl" data-unique-id="d64be720-f2cf-4256-a796-a61ca35333cf" data-file-name="components/accounting/transaction-journal.tsx">
          <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="5eebd8ed-46a2-432d-965e-96a9c6e79cb9" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Jurnal tidak ditemukan' : 'Belum ada jurnal'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="00414922-4b6d-44e8-bdc3-302bb4c12dad" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Coba ubah filter pencarian' : 'Tambahkan jurnal transaksi pertama'}
          </p>
        </div>}

      {/* Add Journal Modal - Simplified for demo */}
      {showForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="76dba3ad-0c0a-4b05-89ab-cb8e2ceafc51" data-file-name="components/accounting/transaction-journal.tsx">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl" data-unique-id="11dc57d4-31d2-4f3c-89c7-c5f98bc41458" data-file-name="components/accounting/transaction-journal.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="8f3ce916-fc37-4495-a5ee-21fdb03a102e" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="4249520e-44ef-4eef-9e5b-35ea7fd97522" data-file-name="components/accounting/transaction-journal.tsx">Tambah Jurnal Transaksi</span></h3>
            <div className="space-y-4" data-unique-id="0e6d82b3-07ef-408b-aa95-797b87c69c5e" data-file-name="components/accounting/transaction-journal.tsx">
              <div className="grid grid-cols-2 gap-4" data-unique-id="34e76eee-f6a2-4a46-8bd1-aa1f606274bd" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="1cab2240-1968-4533-9638-0fa4158b4c7c" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="7480e709-26c7-42ee-bf6f-c8e6f1dcd5bb" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="a7279652-d0c2-43e0-bb9c-8e80a6a61a96" data-file-name="components/accounting/transaction-journal.tsx">Tanggal</span></label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="91b02210-d6ed-4561-8559-a3ce40727071" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
                <div data-unique-id="fcf46d3f-9e0a-40e7-b722-d259da3a3f3e" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="400a6a94-ed52-4364-ab59-f8a5c7baf6e9" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="cb280b53-c8cc-4126-945b-190f75446d16" data-file-name="components/accounting/transaction-journal.tsx">No. Referensi</span></label>
                  <input type="text" placeholder="JU-001" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="c7e2e559-52ca-4533-a8ef-10095775fd25" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
              </div>
              <div data-unique-id="b7c614fb-97ce-4e04-b4db-268aa7f3294e" data-file-name="components/accounting/transaction-journal.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="2d03faaf-e0de-423b-8e1d-5525d3e5bc27" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="43e42675-cb5f-4685-a5a0-148441822948" data-file-name="components/accounting/transaction-journal.tsx">Keterangan</span></label>
                <input type="text" placeholder="Deskripsi transaksi" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="edfbedec-fb7f-454b-bda3-a63298a0335c" data-file-name="components/accounting/transaction-journal.tsx" />
              </div>
              <div className="flex gap-2 pt-4" data-unique-id="0d8e6c6f-3d84-4e93-99ab-ed827b076073" data-file-name="components/accounting/transaction-journal.tsx">
                <button onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors" data-unique-id="e40072b3-66b7-47e1-a7c6-6a0af260cc93" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="b57a6a54-f8d2-4494-967e-2b5dc63a734a" data-file-name="components/accounting/transaction-journal.tsx">
                  Batal
                </span></button>
                <button onClick={() => {
              alert('Fitur tambah jurnal akan dikembangkan lebih lanjut');
              setShowForm(false);
            }} className="flex-1 gradient-primary text-white px-4 py-2 rounded-lg font-semibold" data-unique-id="748df957-9bfd-4ec4-b4a8-7a90c1ff893e" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="f1bca3a8-b37c-4e40-b402-829d2bf19e2a" data-file-name="components/accounting/transaction-journal.tsx">
                  Simpan
                </span></button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}