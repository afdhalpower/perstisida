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
  return <div className="space-y-6" data-unique-id="bd4fc5d0-163d-4b18-8f19-473c56f0bb89" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="54258522-1116-4c07-9bda-f17b63bae431" data-file-name="components/accounting/transaction-journal.tsx">
        <div data-unique-id="b8fb3fe2-0056-4a5e-91c9-23ab4adebde0" data-file-name="components/accounting/transaction-journal.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="347ab993-9a66-4e51-a234-9ee4662d9d96" data-file-name="components/accounting/transaction-journal.tsx">
            <Calculator className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="f872ceda-c40b-4884-9785-279aea78ee96" data-file-name="components/accounting/transaction-journal.tsx">
            Jurnal Transaksi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="dc401946-c7fd-48f1-9d2c-64cd1c997650" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="92ebba93-863f-44c1-9d78-8be0b39b9434" data-file-name="components/accounting/transaction-journal.tsx">Pencatatan jurnal harian</span></p>
        </div>
        
        <div className="flex items-center gap-3" data-unique-id="81250fcb-8081-46a4-b6cf-63e0cfc9b6fe" data-file-name="components/accounting/transaction-journal.tsx">
          <button onClick={() => alert('Export jurnal ke Excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="a4b48084-ab8d-4c3b-b1e7-d130bb9d014d" data-file-name="components/accounting/transaction-journal.tsx">
            <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="791d86c9-9525-418a-9167-1e4591e85950" data-file-name="components/accounting/transaction-journal.tsx">
            Export
          </span></button>
          <button onClick={() => setShowForm(true)} className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2" data-unique-id="641e4bcc-7b82-4397-b375-e5316f30f7c1" data-file-name="components/accounting/transaction-journal.tsx">
            <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="3b039fd6-c1bd-473d-82b9-2bb72286b909" data-file-name="components/accounting/transaction-journal.tsx">
            Tambah Jurnal
          </span></button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="b86e15d3-d690-4802-abc6-aeb180663c03" data-file-name="components/accounting/transaction-journal.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="08593912-52f9-429e-9421-def8f5c5bbed" data-file-name="components/accounting/transaction-journal.tsx">
          <div data-unique-id="b483d779-240e-413e-9925-c991ce743200" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="c2baedf9-0856-4fb5-baa3-550e1a3b2321" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="8642cd17-f0f0-4ec8-b83a-b78e912de29a" data-file-name="components/accounting/transaction-journal.tsx">Pencarian</span></label>
            <div className="relative" data-unique-id="e9b4fb5e-7075-4585-83dd-5181cdd8e182" data-file-name="components/accounting/transaction-journal.tsx">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Cari jurnal..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="66273c49-9c7c-482b-ba34-d72be402b516" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
          <div data-unique-id="715ca4af-5d68-47d0-8e77-7db790ac15e5" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="7a3c3d4b-3b41-4c52-ad87-e779a7ba2991" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="5506081e-6e4d-4d21-9c19-8f97418f58fc" data-file-name="components/accounting/transaction-journal.tsx">Filter Tanggal</span></label>
            <div className="relative" data-unique-id="aea42740-962e-4157-a343-11de6084a27d" data-file-name="components/accounting/transaction-journal.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="369c3687-93c9-432b-895f-7eda92abefd2" data-file-name="components/accounting/transaction-journal.tsx" />
              <input type="month" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="5876fb95-c142-4c9e-9449-10d6a259c9f8" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4" data-unique-id="7610c999-6f05-454a-9fe8-a0df04d7e692" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="157a01b0-5586-40a7-b95b-c4609e0a3ac0" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="f429c126-125a-42cc-aa39-5a00d42c1691" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="b5f0e94b-55b6-4340-be4e-e547cfe71f33" data-file-name="components/accounting/transaction-journal.tsx">
                  <h3 className="text-lg font-semibold" data-unique-id="c42ac362-044b-442e-a0d7-a83aa35c536d" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.reference}</h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="7a33c9c1-45d1-4f00-933a-40b16d46f56f" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.date}<span className="editable-text" data-unique-id="d32b5b19-e23f-497b-a7c2-c672dd14809a" data-file-name="components/accounting/transaction-journal.tsx"> - </span>{entry.description}</p>
                </div>
                <div className="flex items-center gap-2" data-unique-id="9c57ebc4-27e4-46de-a7b1-a7fe3231080c" data-file-name="components/accounting/transaction-journal.tsx">
                  <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="91c10136-8a20-4d0a-bf65-c2056b0197db" data-file-name="components/accounting/transaction-journal.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="012338c2-174f-4836-9098-b49d3fb75ae2" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="dfe51fab-2c33-4721-a405-1b869c1859de" data-file-name="components/accounting/transaction-journal.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="05b8ae16-7890-490e-98f3-a2b0de94e456" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto" data-unique-id="382bbdcf-e145-418c-a8ef-f5bb414794d5" data-file-name="components/accounting/transaction-journal.tsx">
                <table className="w-full" data-unique-id="82fc7e5f-ab65-4a7c-a69a-ee695ea26aa5" data-file-name="components/accounting/transaction-journal.tsx">
                  <thead data-unique-id="e898d948-747f-47f3-aa98-729730f2d348" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-b border-border" data-unique-id="5c5b4cbb-7215-4ea9-a0ea-e628591d42bb" data-file-name="components/accounting/transaction-journal.tsx">
                      <th className="text-left py-2 px-3 font-medium" data-unique-id="41e615a0-930c-49bf-a047-93ea4d2385b7" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="23cf3f6e-75af-4d1b-a784-484253a03a09" data-file-name="components/accounting/transaction-journal.tsx">Akun</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="8457ceaa-c21f-4ccd-8806-a8c1205c6941" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="ffe97d50-672c-49df-a189-f0a91ac33f14" data-file-name="components/accounting/transaction-journal.tsx">Debit</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="8b9bd61d-317a-42f4-9abe-1b8aee7177e0" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="377bfc9b-0661-4dcc-997b-0311bf0d350b" data-file-name="components/accounting/transaction-journal.tsx">Kredit</span></th>
                    </tr>
                  </thead>
                  <tbody data-unique-id="34bd1109-34e2-41ec-9afb-03c060b1ebce" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                    {entry.accounts.map((account, idx) => <tr key={idx} className="border-b border-border/50" data-unique-id="44ca3fc6-b8d0-486a-acb1-d5775dc74bed" data-file-name="components/accounting/transaction-journal.tsx">
                        <td className="py-2 px-3" data-unique-id="f39b1181-42d6-407e-9181-74f2db44b32c" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{account.account}</td>
                        <td className="py-2 px-3 text-right" data-unique-id="0aaaf114-134c-4549-926a-9f63ae7387e1" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.debit > 0 ? `Rp ${account.debit.toLocaleString('id-ID')}` : '-'}
                        </td>
                        <td className="py-2 px-3 text-right" data-unique-id="a2b3495b-ff5b-4d27-a9a3-1bf9064c48c0" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.credit > 0 ? `Rp ${account.credit.toLocaleString('id-ID')}` : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot data-unique-id="30323416-26f5-4e77-a888-076dd6c659a7" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-t-2 border-border font-semibold" data-unique-id="6e1564fb-9ced-489d-8b55-c91129513c06" data-file-name="components/accounting/transaction-journal.tsx">
                      <td className="py-2 px-3" data-unique-id="627c165b-6b61-4af3-9975-f861adfaf7ef" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="e1f9db6a-28a8-4fb5-b55e-408a79ff0af9" data-file-name="components/accounting/transaction-journal.tsx">Total</span></td>
                      <td className="py-2 px-3 text-right" data-unique-id="d59469d1-1afb-455a-93d8-fe258ed4e2fb" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="9f170d88-7b13-4d99-8dc3-53f9d4bf9146" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                      <td className="py-2 px-3 text-right" data-unique-id="325d584c-cb57-44a1-9859-d83da195681e" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b7521540-4d2e-458c-aacd-a6030325cfa2" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {totalDebit !== totalCredit && <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200" data-unique-id="51d7d11c-d02b-40c5-825f-bb77db571f77" data-file-name="components/accounting/transaction-journal.tsx">
                  <p className="text-red-700 text-sm font-medium" data-unique-id="b58de95f-56eb-4af0-8b63-5d20d9f6a160" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="def7dd10-36bb-4cee-a940-c4cda6cee6ec" data-file-name="components/accounting/transaction-journal.tsx">
                    ⚠️ Jurnal tidak seimbang! Debit dan Kredit harus sama.
                  </span></p>
                </div>}
            </motion.div>;
      })}
      </div>

      {filteredEntries.length === 0 && <div className="text-center py-12 glass-effect rounded-2xl" data-unique-id="ce1c69ec-136f-44c1-a52b-4751fd12663d" data-file-name="components/accounting/transaction-journal.tsx">
          <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="f4c4a772-8148-499d-a86a-fb666091ffb9" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Jurnal tidak ditemukan' : 'Belum ada jurnal'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="3ce663ae-9069-4659-bf52-0c8b4dcfcd10" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Coba ubah filter pencarian' : 'Tambahkan jurnal transaksi pertama'}
          </p>
        </div>}

      {/* Add Journal Modal - Simplified for demo */}
      {showForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="45bed174-0dee-499a-9cf8-970bd2ef77ad" data-file-name="components/accounting/transaction-journal.tsx">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl" data-unique-id="10bb10ea-24e3-453d-b8d0-092305c081ae" data-file-name="components/accounting/transaction-journal.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="a2ca30bd-ce4c-4345-a49b-450fc4b7d08d" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="cd801d2c-2bb8-45d0-b824-8f0a01ef8da1" data-file-name="components/accounting/transaction-journal.tsx">Tambah Jurnal Transaksi</span></h3>
            <div className="space-y-4" data-unique-id="d0b021d7-dbc7-4dc2-b974-6576ccbbca8d" data-file-name="components/accounting/transaction-journal.tsx">
              <div className="grid grid-cols-2 gap-4" data-unique-id="6998c3b1-e0dc-46d3-844b-82dd0c52c2f9" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="79b81e13-9d5a-4f04-89d3-61a5b6eca562" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="5e10b0db-5288-4c0e-9cf4-f9d4ced4d29a" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="8370aa97-f645-4808-a97c-cceb89edc640" data-file-name="components/accounting/transaction-journal.tsx">Tanggal</span></label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="9adcc70f-147b-4507-90d6-bc281b83fde0" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
                <div data-unique-id="d6146b93-bc65-4869-b025-cd2f6a7d1d03" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="a5dec81c-364d-4fc3-94e7-f88e0320fecb" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="c4d3e37f-81c5-40b2-8e88-13d53458ec6f" data-file-name="components/accounting/transaction-journal.tsx">No. Referensi</span></label>
                  <input type="text" placeholder="JU-001" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="53886f47-7bf3-4192-a8c7-ab86d87d5a64" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
              </div>
              <div data-unique-id="dac64155-25bd-4609-9d4c-60519699453a" data-file-name="components/accounting/transaction-journal.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="0208d9b5-a6fa-495a-ab5b-9fba68111ec8" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="94e61514-ffe3-4d14-8e08-91b3af0723a4" data-file-name="components/accounting/transaction-journal.tsx">Keterangan</span></label>
                <input type="text" placeholder="Deskripsi transaksi" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="b33257b9-f35a-44ca-abaa-df7953cede54" data-file-name="components/accounting/transaction-journal.tsx" />
              </div>
              <div className="flex gap-2 pt-4" data-unique-id="5ae2d3cf-848e-40fb-b252-93927892dfef" data-file-name="components/accounting/transaction-journal.tsx">
                <button onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors" data-unique-id="fa2e2139-e47d-4c66-ba36-fdf8c9aa37b2" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="a543e25d-630c-407c-af43-8c860b75a888" data-file-name="components/accounting/transaction-journal.tsx">
                  Batal
                </span></button>
                <button onClick={() => {
              alert('Fitur tambah jurnal akan dikembangkan lebih lanjut');
              setShowForm(false);
            }} className="flex-1 gradient-primary text-white px-4 py-2 rounded-lg font-semibold" data-unique-id="08e17e86-2ff6-4d2b-8f1c-bd07fab79a2a" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="6a800d70-5341-48f7-98c6-f7057f1269e0" data-file-name="components/accounting/transaction-journal.tsx">
                  Simpan
                </span></button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}