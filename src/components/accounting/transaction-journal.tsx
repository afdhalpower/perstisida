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
  return <div className="space-y-6" data-unique-id="45356024-d365-4b70-a1e0-42256132c991" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="1eeeaec0-3143-4d5d-baa2-dcb90f35fadf" data-file-name="components/accounting/transaction-journal.tsx">
        <div data-unique-id="6f2dcb56-8a99-4c3c-be7a-8b9c6d32f061" data-file-name="components/accounting/transaction-journal.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="3d5f7be4-2a57-406c-bf53-d47e15f5ba22" data-file-name="components/accounting/transaction-journal.tsx">
            <Calculator className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="2603f89f-7f57-4972-9d74-4f2c322172bc" data-file-name="components/accounting/transaction-journal.tsx">
            Jurnal Transaksi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="f3077dca-a43b-42a5-a1dc-3564e4c775f8" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="f9177c3a-58d0-4eec-a8b0-6c7271033b25" data-file-name="components/accounting/transaction-journal.tsx">Pencatatan jurnal harian</span></p>
        </div>
        
        <div className="flex items-center gap-3" data-unique-id="eb0285c6-6794-4103-b182-6144339d7796" data-file-name="components/accounting/transaction-journal.tsx">
          <button onClick={() => alert('Export jurnal ke Excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="4edb522b-86e3-4ce1-bced-13bdb98dd392" data-file-name="components/accounting/transaction-journal.tsx">
            <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="c6287f77-2a0c-43e7-b022-a1dd4b698a9e" data-file-name="components/accounting/transaction-journal.tsx">
            Export
          </span></button>
          <button onClick={() => setShowForm(true)} className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2" data-unique-id="08173391-a2e0-4daa-ad5c-4ba32bc6f932" data-file-name="components/accounting/transaction-journal.tsx">
            <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="9d615488-8955-474d-b706-63f59baa5ce6" data-file-name="components/accounting/transaction-journal.tsx">
            Tambah Jurnal
          </span></button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="46381e33-0312-4f95-a223-0028e68b5125" data-file-name="components/accounting/transaction-journal.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="ec0e92d2-2401-49c4-990a-9560a1e9d868" data-file-name="components/accounting/transaction-journal.tsx">
          <div data-unique-id="605dd32d-45ec-4580-8266-8d0f43c6c1de" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="9fbd1ac2-829a-410a-8011-fc3636892ff1" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="ab64a13f-45b8-428a-949d-6ddccf6703e0" data-file-name="components/accounting/transaction-journal.tsx">Pencarian</span></label>
            <div className="relative" data-unique-id="b6440ca1-fbc4-4d4b-9c15-5e349ebadd60" data-file-name="components/accounting/transaction-journal.tsx">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Cari jurnal..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="5986d22b-cd96-4da2-857f-a8041324fcae" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
          <div data-unique-id="7efe7cc3-9f64-4357-a11c-d006891897ab" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="fa72483f-6a67-46b5-a390-bec5a7767a3b" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="fd952c02-6cb7-4770-b3d5-bfe493b2851f" data-file-name="components/accounting/transaction-journal.tsx">Filter Tanggal</span></label>
            <div className="relative" data-unique-id="9d09b64f-9430-42f6-83d3-7d8a15cfd3b0" data-file-name="components/accounting/transaction-journal.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="fa3b1f44-a1a9-4105-b72f-0f6ef5a1aa7f" data-file-name="components/accounting/transaction-journal.tsx" />
              <input type="month" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="acebde65-f22b-4659-aad0-c0a0d6278f44" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4" data-unique-id="504dda29-3174-4f18-9fa0-1a47bddf82df" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="931e897f-69dd-4699-9825-40d9fd58c5f0" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="11b45186-e14e-4f4c-be69-d3226425854d" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="13d2bf85-4916-478a-af83-2f8df2b72a4d" data-file-name="components/accounting/transaction-journal.tsx">
                  <h3 className="text-lg font-semibold" data-unique-id="b11a0d32-65fb-42e9-bf4e-4a4040622248" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.reference}</h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="642aaf87-c9e9-45ea-8f53-a88374b3ce95" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.date}<span className="editable-text" data-unique-id="537b2ebf-7916-466b-9885-e31b434b91a1" data-file-name="components/accounting/transaction-journal.tsx"> - </span>{entry.description}</p>
                </div>
                <div className="flex items-center gap-2" data-unique-id="9eea3563-f2b4-4029-95c1-7abe544aa085" data-file-name="components/accounting/transaction-journal.tsx">
                  <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="dcac48cf-5f57-4491-85d7-624e3f069ec3" data-file-name="components/accounting/transaction-journal.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="e4824373-5f2a-4846-9d7e-bce7264e3d05" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="7fd54fa0-9e8e-4951-848d-c9d99fe27de2" data-file-name="components/accounting/transaction-journal.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="2a8b4e6a-b77e-4f48-bfe6-f4fbb5eb0d5a" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto" data-unique-id="387cc6ba-a2f6-4526-9a1d-de04ad7be3ca" data-file-name="components/accounting/transaction-journal.tsx">
                <table className="w-full" data-unique-id="082599dc-c604-4111-99aa-0e3f4b8ac1f0" data-file-name="components/accounting/transaction-journal.tsx">
                  <thead data-unique-id="bb24d44b-ce4e-492e-9aab-b7150094dbbe" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-b border-border" data-unique-id="92bb32c3-3169-49be-bea2-06b17797c8a6" data-file-name="components/accounting/transaction-journal.tsx">
                      <th className="text-left py-2 px-3 font-medium" data-unique-id="5bac4050-3485-41fe-bf84-a16686b19233" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="9a8ba547-91d4-4557-bc0e-f244e306358a" data-file-name="components/accounting/transaction-journal.tsx">Akun</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="a14d6e64-31dc-4a41-bd53-bfa2e78c6c35" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="00626884-bcb1-43c0-9954-ffd276381428" data-file-name="components/accounting/transaction-journal.tsx">Debit</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="17eb4ebb-35c1-4e23-bcea-214bbc57afb9" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="81fe3d3d-35c0-436b-bf41-5f155c119094" data-file-name="components/accounting/transaction-journal.tsx">Kredit</span></th>
                    </tr>
                  </thead>
                  <tbody data-unique-id="dcee4f77-470b-487b-880e-d0544b710702" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                    {entry.accounts.map((account, idx) => <tr key={idx} className="border-b border-border/50" data-unique-id="d28e0080-68f8-48e9-8f69-872db46618d3" data-file-name="components/accounting/transaction-journal.tsx">
                        <td className="py-2 px-3" data-unique-id="81b73f1b-7478-4298-9949-cb1007e9477e" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{account.account}</td>
                        <td className="py-2 px-3 text-right" data-unique-id="0424daeb-ed88-47ae-9724-b69b651efc0a" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.debit > 0 ? `Rp ${account.debit.toLocaleString('id-ID')}` : '-'}
                        </td>
                        <td className="py-2 px-3 text-right" data-unique-id="9ad0955b-2e8d-480c-adca-7de170167e3d" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.credit > 0 ? `Rp ${account.credit.toLocaleString('id-ID')}` : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot data-unique-id="36d458a3-1f75-4a78-91aa-5890112245f8" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-t-2 border-border font-semibold" data-unique-id="22258dbb-e76d-4f5f-8895-6b5dde6b0a66" data-file-name="components/accounting/transaction-journal.tsx">
                      <td className="py-2 px-3" data-unique-id="691fca41-78c0-468f-b1e6-aaace0c42a5d" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="cb7dde91-eadc-4072-8079-4e0237e60582" data-file-name="components/accounting/transaction-journal.tsx">Total</span></td>
                      <td className="py-2 px-3 text-right" data-unique-id="121d74fc-c48e-47d9-b7ba-5f5206b51f02" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6af9a0f6-4598-4e19-8907-6b90826e9ea9" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                      <td className="py-2 px-3 text-right" data-unique-id="1b001dc9-9a27-41da-af39-950573766233" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="aa69dcb8-ca95-4fd3-b0a0-bb261840e8f1" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {totalDebit !== totalCredit && <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200" data-unique-id="5180014f-2c1b-4510-b214-4dd119e36ac7" data-file-name="components/accounting/transaction-journal.tsx">
                  <p className="text-red-700 text-sm font-medium" data-unique-id="f222020c-fe4c-44d7-9faf-54faba293d5e" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="aae8175c-e49b-40d8-a5e4-08f2e734d7b8" data-file-name="components/accounting/transaction-journal.tsx">
                    ⚠️ Jurnal tidak seimbang! Debit dan Kredit harus sama.
                  </span></p>
                </div>}
            </motion.div>;
      })}
      </div>

      {filteredEntries.length === 0 && <div className="text-center py-12 glass-effect rounded-2xl" data-unique-id="9e4e6138-62c1-4548-a8e3-a221bfa6aa01" data-file-name="components/accounting/transaction-journal.tsx">
          <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="3fe0b100-3393-4fc2-9b57-ce0a1103b8ee" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Jurnal tidak ditemukan' : 'Belum ada jurnal'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="1adc2a28-3b62-458d-8075-b9d68e98385a" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Coba ubah filter pencarian' : 'Tambahkan jurnal transaksi pertama'}
          </p>
        </div>}

      {/* Add Journal Modal - Simplified for demo */}
      {showForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="87c7cf18-53b7-4cb0-a04e-4d0f31b08719" data-file-name="components/accounting/transaction-journal.tsx">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl" data-unique-id="554c7531-fb4a-474c-aa94-5555f96d5301" data-file-name="components/accounting/transaction-journal.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="8e9cf90e-10ad-46f8-8de6-4b97e7e82bcc" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="bb3409e8-6587-4e2e-a8b2-392e830ea084" data-file-name="components/accounting/transaction-journal.tsx">Tambah Jurnal Transaksi</span></h3>
            <div className="space-y-4" data-unique-id="b8c7ac59-a34a-4de8-84bb-093c5a4a67e8" data-file-name="components/accounting/transaction-journal.tsx">
              <div className="grid grid-cols-2 gap-4" data-unique-id="2cb9d645-2b47-469d-8dcb-18e9b6cd53be" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="7381a021-2a8c-427e-928e-8eae40cef7a9" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="f879877d-c49a-41d7-863a-1b3a6777af19" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="cb72333c-3263-4788-be6c-49ee183523ac" data-file-name="components/accounting/transaction-journal.tsx">Tanggal</span></label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="bb028dd3-9b82-4034-8b52-4fa9d44943bd" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
                <div data-unique-id="8fd0b13d-9ece-4cba-b3ab-c5b964af6af6" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="a731222c-5a47-4cae-b954-e9390e11eb05" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="3ba56e6f-106e-4870-95b6-5701a3a9e605" data-file-name="components/accounting/transaction-journal.tsx">No. Referensi</span></label>
                  <input type="text" placeholder="JU-001" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="fc05b5be-3a0c-4a0e-84ba-9201500b6f58" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
              </div>
              <div data-unique-id="0a64085f-2029-4cb5-a465-e3bd3e8b7333" data-file-name="components/accounting/transaction-journal.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="02525eee-7092-4c0d-b18b-e097a751f54e" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="fa527324-040c-4e05-9c95-154158d0b470" data-file-name="components/accounting/transaction-journal.tsx">Keterangan</span></label>
                <input type="text" placeholder="Deskripsi transaksi" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="bc57f871-fbeb-4768-a265-b2abc9930945" data-file-name="components/accounting/transaction-journal.tsx" />
              </div>
              <div className="flex gap-2 pt-4" data-unique-id="3184c9bf-54b4-4f46-b856-945b30274b8f" data-file-name="components/accounting/transaction-journal.tsx">
                <button onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors" data-unique-id="82a22af4-3d64-4639-849d-3ae1ad52f777" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="fd497e36-4d07-43c1-8aea-048b80f66715" data-file-name="components/accounting/transaction-journal.tsx">
                  Batal
                </span></button>
                <button onClick={() => {
              alert('Fitur tambah jurnal akan dikembangkan lebih lanjut');
              setShowForm(false);
            }} className="flex-1 gradient-primary text-white px-4 py-2 rounded-lg font-semibold" data-unique-id="a7a070a2-9b5d-4d58-a4b8-878589af17f3" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="652e53d8-74ad-447d-aa28-c7a1a4d7fc59" data-file-name="components/accounting/transaction-journal.tsx">
                  Simpan
                </span></button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}