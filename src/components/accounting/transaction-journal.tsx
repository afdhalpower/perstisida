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
  const journalEntries: JournalEntry[] = [];
  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase()) || entry.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !dateFilter || entry.date.includes(dateFilter);
    return matchesSearch && matchesDate;
  });
  return <div className="space-y-6" data-unique-id="f3acbfe2-aab4-4131-9c06-c280de6bcd4b" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="f4de32dc-e4b0-4490-932d-8785fe42193a" data-file-name="components/accounting/transaction-journal.tsx">
        <div data-unique-id="0ad2f01d-12d4-456c-881b-d49980e36835" data-file-name="components/accounting/transaction-journal.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="936c6d47-b51a-4e74-a3d4-c9b040ec66e3" data-file-name="components/accounting/transaction-journal.tsx">
            <Calculator className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="96195743-b3e1-4090-9b65-51ac1243a59c" data-file-name="components/accounting/transaction-journal.tsx">
            Jurnal Transaksi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="48a80542-955c-41e7-bd96-66b21060a788" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="d1cd98b0-9cd5-4cba-9f64-613c9589d87c" data-file-name="components/accounting/transaction-journal.tsx">Pencatatan jurnal harian</span></p>
        </div>
        
        <div className="flex items-center gap-3" data-unique-id="e1016617-1e53-4e16-91c4-aaa63a9ed203" data-file-name="components/accounting/transaction-journal.tsx">
          <button onClick={() => alert('Export jurnal ke Excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="962e6fdd-f0c0-41d9-9030-e134d5c5255b" data-file-name="components/accounting/transaction-journal.tsx">
            <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="4a9a2e4f-7395-4a4f-b6b6-c9046d2f71b3" data-file-name="components/accounting/transaction-journal.tsx">
            Export
          </span></button>
          <button onClick={() => setShowForm(true)} className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2" data-unique-id="ebc0928c-3c5c-42e2-bb5d-5cb96c3b6dca" data-file-name="components/accounting/transaction-journal.tsx">
            <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="af5f153e-de9b-48e9-bca8-7c3ddfeae6e4" data-file-name="components/accounting/transaction-journal.tsx">
            Tambah Jurnal
          </span></button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="481e627d-fe0b-4384-aa66-af80ccd6a4ab" data-file-name="components/accounting/transaction-journal.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="50a71585-4028-4c1b-84aa-1688999ad7a3" data-file-name="components/accounting/transaction-journal.tsx">
          <div data-unique-id="6cce29c1-efee-44c4-8d79-4fc3b8f71dac" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="0ed8b4ee-6b6b-44e7-89f3-5c7205fb6a2c" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="67b15cb0-ceca-48a8-8b93-6dcc8867f970" data-file-name="components/accounting/transaction-journal.tsx">Pencarian</span></label>
            <div className="relative" data-unique-id="6cf1af8b-7bbb-4384-8541-32aab0127aa6" data-file-name="components/accounting/transaction-journal.tsx">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Cari jurnal..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="7eac7610-d096-4e5c-b0cb-db7b9dcb35e1" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
          <div data-unique-id="2584d777-b815-4c7f-9682-1c6ea36beb23" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="e90283bd-478e-4cde-a8d5-d87ea7757807" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="515c4527-09e1-4d1f-ae7f-02550ca89333" data-file-name="components/accounting/transaction-journal.tsx">Filter Tanggal</span></label>
            <div className="relative" data-unique-id="344e1a1c-0598-4d2b-b93d-31c0ed3346e4" data-file-name="components/accounting/transaction-journal.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="90d842a7-8352-4a76-a163-4c4c22fda2c6" data-file-name="components/accounting/transaction-journal.tsx" />
              <input type="month" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="9bd99190-8d40-4046-af46-bb4819d09410" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4" data-unique-id="04984512-ef88-4283-b145-e1c276bf78e6" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="4ae275f1-c467-4a7f-abac-a42dc7de219e" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="4340a8eb-fab5-472a-935d-c691e7d09888" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="2f866233-5a7e-4853-a867-0c519a04fe13" data-file-name="components/accounting/transaction-journal.tsx">
                  <h3 className="text-lg font-semibold" data-unique-id="912b152f-6583-47fa-ae64-c1c930b55de8" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.reference}</h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="09abc78d-0b29-4dec-93bd-176de971c517" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.date}<span className="editable-text" data-unique-id="a5e9eb39-b307-43b9-ab62-299e12cc2d2c" data-file-name="components/accounting/transaction-journal.tsx"> - </span>{entry.description}</p>
                </div>
                <div className="flex items-center gap-2" data-unique-id="d72377c7-88b8-4a01-ba66-7017745fd817" data-file-name="components/accounting/transaction-journal.tsx">
                  <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="3fc2b999-254f-4b64-8dae-4a57ba6aa728" data-file-name="components/accounting/transaction-journal.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="38f172e4-f84a-4358-8146-627f9c919c9e" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="8d4b2acd-e051-4a1f-994f-8779591c3e87" data-file-name="components/accounting/transaction-journal.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="0db4d76d-24ab-446a-94ec-46cdcf717d26" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto" data-unique-id="89c59464-47be-42b5-bf30-a6efd203aa49" data-file-name="components/accounting/transaction-journal.tsx">
                <table className="w-full" data-unique-id="4e81983e-8637-4ed7-a8bd-76f672a3970b" data-file-name="components/accounting/transaction-journal.tsx">
                  <thead data-unique-id="c617ccfe-574e-4362-8625-b23ef2c6cafe" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-b border-border" data-unique-id="cd987189-6c24-4d6b-9b70-4ebc7135845d" data-file-name="components/accounting/transaction-journal.tsx">
                      <th className="text-left py-2 px-3 font-medium" data-unique-id="ba98088c-35ba-4fe7-adae-f25a5aff9ea6" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="77df34f9-2760-485d-a6eb-381282310bb5" data-file-name="components/accounting/transaction-journal.tsx">Akun</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="241a09f0-8564-42cb-a208-d47f1154b6ff" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="30d8292c-16d2-410a-870d-2c9674492a94" data-file-name="components/accounting/transaction-journal.tsx">Debit</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="ff41746d-afbc-4def-ba5d-2548067560e8" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="e1978efb-1bf5-42a3-8c11-7b3cc3bc59f6" data-file-name="components/accounting/transaction-journal.tsx">Kredit</span></th>
                    </tr>
                  </thead>
                  <tbody data-unique-id="c6a9ee7e-215b-4314-bb1f-2b989dbbcfe2" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                    {entry.accounts.map((account, idx) => <tr key={idx} className="border-b border-border/50" data-unique-id="54aa7b37-3e35-4192-823d-15bea7bae325" data-file-name="components/accounting/transaction-journal.tsx">
                        <td className="py-2 px-3" data-unique-id="04d43858-1038-46ba-9f16-59792ff2b562" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{account.account}</td>
                        <td className="py-2 px-3 text-right" data-unique-id="4937c9c8-4dc8-4fab-9c9e-e8cdd6d584b3" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.debit > 0 ? `Rp ${account.debit.toLocaleString('id-ID')}` : '-'}
                        </td>
                        <td className="py-2 px-3 text-right" data-unique-id="819a73ab-b2d1-48f5-90c9-fa467dee8b30" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.credit > 0 ? `Rp ${account.credit.toLocaleString('id-ID')}` : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot data-unique-id="e12dc2af-b480-4785-9893-ec18ab45579a" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-t-2 border-border font-semibold" data-unique-id="b01b11bb-f6b4-4a2a-9fc3-ebc0fd4869f4" data-file-name="components/accounting/transaction-journal.tsx">
                      <td className="py-2 px-3" data-unique-id="e740451a-5ad8-400b-8623-11e05cf6e42c" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="4bb7d46e-8315-4531-ba22-53a4760ef524" data-file-name="components/accounting/transaction-journal.tsx">Total</span></td>
                      <td className="py-2 px-3 text-right" data-unique-id="1630acf6-552b-4ca7-8fd5-00e89bfc132e" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="79e81c9d-d909-4488-b112-dc392956a1d8" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                      <td className="py-2 px-3 text-right" data-unique-id="b488b203-0cd4-4eba-8064-36013df51e13" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f886e827-f65b-4d25-9d44-d6f334b235e8" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {totalDebit !== totalCredit && <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200" data-unique-id="eb13e5fa-e00a-44cf-bc21-52a02bda8190" data-file-name="components/accounting/transaction-journal.tsx">
                  <p className="text-red-700 text-sm font-medium" data-unique-id="a5b0324b-21b9-4fa8-a649-f4ea36acd76b" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="991dd65e-6036-48b0-aeb2-1615a0c31d3e" data-file-name="components/accounting/transaction-journal.tsx">
                    ⚠️ Jurnal tidak seimbang! Debit dan Kredit harus sama.
                  </span></p>
                </div>}
            </motion.div>;
      })}
      </div>

      {filteredEntries.length === 0 && <div className="text-center py-12 glass-effect rounded-2xl" data-unique-id="1c1c440f-1fee-4361-8531-3ed0324ec602" data-file-name="components/accounting/transaction-journal.tsx">
          <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="6ba18ee9-fcd4-4d62-9ca3-0afcd3fbdee7" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Jurnal tidak ditemukan' : 'Belum ada jurnal'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="7dd82c2e-0e90-45ba-8622-205325192560" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Coba ubah filter pencarian' : 'Tambahkan jurnal transaksi pertama'}
          </p>
        </div>}

      {/* Add Journal Modal - Simplified for demo */}
      {showForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="d74784a3-1583-44d4-ba3e-1bbfe7c4b9a2" data-file-name="components/accounting/transaction-journal.tsx">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl" data-unique-id="423befc4-7d61-4a30-82ea-e7f4f9fb5f2b" data-file-name="components/accounting/transaction-journal.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="a279c4c3-78f3-4225-b679-dc51fab2686f" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="b79c56c5-c706-439e-8bdf-08d585cd988e" data-file-name="components/accounting/transaction-journal.tsx">Tambah Jurnal Transaksi</span></h3>
            <div className="space-y-4" data-unique-id="9592cc5c-8961-41ec-9bca-64f24a0b194d" data-file-name="components/accounting/transaction-journal.tsx">
              <div className="grid grid-cols-2 gap-4" data-unique-id="28d951d0-4b54-432f-abb6-2b30ce9e09a8" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="085bf4fe-0d01-4dd1-9895-99ecd7ad40e9" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="79aa2f7a-26da-483e-a971-7eb8373b983f" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="7b29981a-fd90-49bd-9844-02a80d3bf16e" data-file-name="components/accounting/transaction-journal.tsx">Tanggal</span></label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="045d1d3a-e417-47d8-8164-cc8debc83a18" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
                <div data-unique-id="bbe06242-38b3-48d2-be2d-8baac106d4be" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="9ab0d498-fcc9-40d9-b986-26c851301898" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="b7dac375-6c96-4d74-9691-17ef092dfc44" data-file-name="components/accounting/transaction-journal.tsx">No. Referensi</span></label>
                  <input type="text" placeholder="JU-001" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="e92c213b-142a-4db7-b1fc-29bd1267caf4" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
              </div>
              <div data-unique-id="cc6d4bb8-62c6-4d48-9cf7-f1538ee0ae47" data-file-name="components/accounting/transaction-journal.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="2b536889-2d95-4206-bf34-b31b120e464b" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="07079858-3bc1-44af-97d0-fdefa8fab965" data-file-name="components/accounting/transaction-journal.tsx">Keterangan</span></label>
                <input type="text" placeholder="Deskripsi transaksi" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="bad45589-c5d4-4d4a-b7bc-1f411a098dde" data-file-name="components/accounting/transaction-journal.tsx" />
              </div>
              <div className="flex gap-2 pt-4" data-unique-id="29cd62d0-c7d7-450d-9431-2e976d73a9b7" data-file-name="components/accounting/transaction-journal.tsx">
                <button onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors" data-unique-id="7ff70f43-83bd-4703-85f3-80a30fb6b24f" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="af960f37-3689-4e64-a53a-9be738cf1a09" data-file-name="components/accounting/transaction-journal.tsx">
                  Batal
                </span></button>
                <button onClick={() => {
              alert('Fitur tambah jurnal akan dikembangkan lebih lanjut');
              setShowForm(false);
            }} className="flex-1 gradient-primary text-white px-4 py-2 rounded-lg font-semibold" data-unique-id="654a19f6-fe54-4d46-bd53-e5160414827b" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="e2ff5156-45a6-4862-bfd8-be0cba32c213" data-file-name="components/accounting/transaction-journal.tsx">
                  Simpan
                </span></button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}