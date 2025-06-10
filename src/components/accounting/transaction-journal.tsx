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
  const journalEntries: JournalEntry[] = [
    {
      id: '1',
      date: '2024-01-15',
      reference: 'JU-001',
      description: 'Penjualan pestisida ke PT Agro Makmur',
      accounts: [
        { account: 'Piutang Dagang', debit: 25000000, credit: 0 },
        { account: 'Pendapatan Penjualan', debit: 0, credit: 22321429 },
        { account: 'PPN Keluaran', debit: 0, credit: 2678571 }
      ]
    },
    {
      id: '2',
      date: '2024-01-16',
      reference: 'JU-002',
      description: 'Pembelian pestisida dari PT Kimia Farma',
      accounts: [
        { account: 'Persediaan Pestisida', debit: 18000000, credit: 0 },
        { account: 'PPN Masukan', debit: 1800000, credit: 0 },
        { account: 'Hutang Dagang', debit: 0, credit: 19800000 }
      ]
    },
    {
      id: '3',
      date: '2024-01-18',
      reference: 'JU-003',
      description: 'Pembayaran gaji karyawan bulan Januari',
      accounts: [
        { account: 'Biaya Gaji', debit: 8000000, credit: 0 },
        { account: 'Kas', debit: 0, credit: 8000000 }
      ]
    },
    {
      id: '4',
      date: '2024-01-20',
      reference: 'JU-004',
      description: 'Penjualan tunai pestisida ke CV Tani Sejahtera',
      accounts: [
        { account: 'Kas', debit: 15000000, credit: 0 },
        { account: 'Pendapatan Penjualan', debit: 0, credit: 13392857 },
        { account: 'PPN Keluaran', debit: 0, credit: 1607143 }
      ]
    },
    {
      id: '5',
      date: '2024-01-22',
      reference: 'JU-005',
      description: 'Pembayaran biaya listrik dan air',
      accounts: [
        { account: 'Biaya Listrik', debit: 1500000, credit: 0 },
        { account: 'Biaya Air', debit: 500000, credit: 0 },
        { account: 'PPN Masukan', debit: 200000, credit: 0 },
        { account: 'Kas', debit: 0, credit: 2200000 }
      ]
    },
    {
      id: '6',
      date: '2024-01-25',
      reference: 'JU-006',
      description: 'Penerimaan pembayaran dari PT Agro Makmur',
      accounts: [
        { account: 'Kas', debit: 25000000, credit: 0 },
        { account: 'Piutang Dagang', debit: 0, credit: 25000000 }
      ]
    },
    {
      id: '7',
      date: '2024-01-28',
      reference: 'JU-007',
      description: 'Pembelian peralatan semprot',
      accounts: [
        { account: 'Peralatan', debit: 12000000, credit: 0 },
        { account: 'PPN Masukan', debit: 1200000, credit: 0 },
        { account: 'Kas', debit: 0, credit: 13200000 }
      ]
    },
    {
      id: '8',
      date: '2024-01-30',
      reference: 'JU-008',
      description: 'Penjualan pestisida ke Koperasi Tani Maju',
      accounts: [
        { account: 'Piutang Dagang', debit: 8500000, credit: 0 },
        { account: 'Pendapatan Penjualan', debit: 0, credit: 7589286 },
        { account: 'PPN Keluaran', debit: 0, credit: 910714 }
      ]
    }
  ];
  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.description.toLowerCase().includes(searchTerm.toLowerCase()) || entry.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !dateFilter || entry.date.includes(dateFilter);
    return matchesSearch && matchesDate;
  });
  return <div className="space-y-6" data-unique-id="755674f4-449b-4f84-b639-e80f8e8e4fb7" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="ba786683-71c2-4c2c-a633-4287db798926" data-file-name="components/accounting/transaction-journal.tsx">
        <div data-unique-id="c40760ef-7ad0-4a1f-82e0-20beae7c03f6" data-file-name="components/accounting/transaction-journal.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="fc62dc72-5451-440b-a6ec-5e0bf4bf373a" data-file-name="components/accounting/transaction-journal.tsx">
            <Calculator className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="5d5e4101-e031-4bd2-a006-1b6e2e8a93d2" data-file-name="components/accounting/transaction-journal.tsx">
            Jurnal Transaksi
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="b7f59da8-8932-496b-b462-89666d043f5c" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="a63a0024-7eb4-4a8f-91c3-e5f297dccbb1" data-file-name="components/accounting/transaction-journal.tsx">Pencatatan jurnal harian</span></p>
        </div>
        
        <div className="flex items-center gap-3" data-unique-id="376fb9b6-00af-441f-83e1-5ff50610d9b4" data-file-name="components/accounting/transaction-journal.tsx">
          <button onClick={() => alert('Export jurnal ke Excel')} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="bd87d0fc-f585-4fa7-a5d2-4acb9ecdd024" data-file-name="components/accounting/transaction-journal.tsx">
            <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="02ff9365-6f2d-4dad-90e6-aef61ea3073e" data-file-name="components/accounting/transaction-journal.tsx">
            Export
          </span></button>
          <button onClick={() => setShowForm(true)} className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2" data-unique-id="8e5ea1b0-9bd0-4c8d-89f8-800fc2928b71" data-file-name="components/accounting/transaction-journal.tsx">
            <Plus className="w-4 h-4" /><span className="editable-text" data-unique-id="510b3702-c5c6-48db-8e8b-7353f4aaa320" data-file-name="components/accounting/transaction-journal.tsx">
            Tambah Jurnal
          </span></button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="efeafde1-81a3-45d4-b55d-7fb0687b3494" data-file-name="components/accounting/transaction-journal.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-unique-id="0b91e368-519e-48f2-bbfc-2f19232de558" data-file-name="components/accounting/transaction-journal.tsx">
          <div data-unique-id="91a17b7a-d5a2-49d5-ad2a-f9f8844b9299" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="a862f1ed-c609-4a7d-936a-e5974f871c35" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="d64cf21f-e18c-4380-b7ef-373e2fe7921e" data-file-name="components/accounting/transaction-journal.tsx">Pencarian</span></label>
            <div className="relative" data-unique-id="bbba2c6f-95e6-4e21-ad49-5bbe72ddaf34" data-file-name="components/accounting/transaction-journal.tsx">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input type="text" placeholder="Cari jurnal..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="7db36d53-3fc1-46dd-b641-05fc26ebe4bc" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
          <div data-unique-id="9c32ad99-aec6-443b-8c40-9f32acc31127" data-file-name="components/accounting/transaction-journal.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="ebc3c632-338f-40c4-8fee-244d50795f89" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="d5c74cd4-cd6f-4257-882b-3b8d5867f74d" data-file-name="components/accounting/transaction-journal.tsx">Filter Tanggal</span></label>
            <div className="relative" data-unique-id="25d800ff-e062-4aaa-bbad-62ed303abe20" data-file-name="components/accounting/transaction-journal.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="c8649f12-7c81-4b15-b08a-a05be250ac43" data-file-name="components/accounting/transaction-journal.tsx" />
              <input type="month" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="b1776f58-314c-47de-8e1a-681f5fc97839" data-file-name="components/accounting/transaction-journal.tsx" />
            </div>
          </div>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4" data-unique-id="bd654e64-6fed-4e0a-b948-6828511e1b61" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="05ef4eae-cf99-4b7a-b14d-651582dcf496" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="4268efcb-d4c8-481a-834e-f82f7d4ba7be" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="11b0a4ed-7a92-4055-9c1d-0f8ac08db2f8" data-file-name="components/accounting/transaction-journal.tsx">
                  <h3 className="text-lg font-semibold" data-unique-id="e2647079-cf1e-4406-bcbc-6f2ffecaf41b" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.reference}</h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="6479578b-4d6b-4ad6-8983-ab0ddb62b4b5" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{entry.date}<span className="editable-text" data-unique-id="8f2c66ee-1fb0-468f-a990-48f17101e238" data-file-name="components/accounting/transaction-journal.tsx"> - </span>{entry.description}</p>
                </div>
                <div className="flex items-center gap-2" data-unique-id="4acada3e-df36-4fe4-9c92-be43bb4c58bb" data-file-name="components/accounting/transaction-journal.tsx">
                  <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="b8388865-2387-43e7-a2a7-bff6491eeb11" data-file-name="components/accounting/transaction-journal.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="be4f70ed-f9ef-4955-8570-8513ee635d3a" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="58bf2f65-9e2f-439b-9298-710ce7a57f09" data-file-name="components/accounting/transaction-journal.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="a56da399-f7c6-4a39-bcc4-3cbf90abacb7" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto" data-unique-id="2cf153b9-0ae8-469f-a843-57b4da15b9fa" data-file-name="components/accounting/transaction-journal.tsx">
                <table className="w-full" data-unique-id="e7f52e38-fbd7-4eb5-99f5-df1ebf94a76b" data-file-name="components/accounting/transaction-journal.tsx">
                  <thead data-unique-id="83662ad0-cca3-4907-a573-d729679508fe" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-b border-border" data-unique-id="b28309bd-23e3-43c5-b5cc-e0d04adf7d7c" data-file-name="components/accounting/transaction-journal.tsx">
                      <th className="text-left py-2 px-3 font-medium" data-unique-id="8b5d9d76-19db-4b7a-a4bd-0b346501ea24" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="477e32a5-133d-48e0-bd72-a3a88e8b4a81" data-file-name="components/accounting/transaction-journal.tsx">Akun</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="cc304015-ef19-480d-bcc2-7e1f0dbabfb5" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="7dcf8341-f17d-403b-be56-0a2267f27daa" data-file-name="components/accounting/transaction-journal.tsx">Debit</span></th>
                      <th className="text-right py-2 px-3 font-medium" data-unique-id="83a43207-3932-42c2-b2bf-6c5c59687c7c" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="b318e4c8-253f-4d79-83de-936dba53aaf4" data-file-name="components/accounting/transaction-journal.tsx">Kredit</span></th>
                    </tr>
                  </thead>
                  <tbody data-unique-id="05339730-32f4-4c87-913e-dfcfd53dfbde" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                    {entry.accounts.map((account, idx) => <tr key={idx} className="border-b border-border/50" data-unique-id="aadaaa49-83ab-45f8-ad18-f2476b586012" data-file-name="components/accounting/transaction-journal.tsx">
                        <td className="py-2 px-3" data-unique-id="0482b296-14b1-4fe1-a91f-98231b3cd300" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">{account.account}</td>
                        <td className="py-2 px-3 text-right" data-unique-id="ba3adb36-d378-4f84-92a1-9c11d3986af6" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.debit > 0 ? `Rp ${account.debit.toLocaleString('id-ID')}` : '-'}
                        </td>
                        <td className="py-2 px-3 text-right" data-unique-id="dd4def33-7e3d-4976-b3c9-860e640d8c09" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
                          {account.credit > 0 ? `Rp ${account.credit.toLocaleString('id-ID')}` : '-'}
                        </td>
                      </tr>)}
                  </tbody>
                  <tfoot data-unique-id="032c7547-5427-470b-9e99-5a5b28fed993" data-file-name="components/accounting/transaction-journal.tsx">
                    <tr className="border-t-2 border-border font-semibold" data-unique-id="51677341-5b29-4f83-9eff-c6242ab21c89" data-file-name="components/accounting/transaction-journal.tsx">
                      <td className="py-2 px-3" data-unique-id="028a6851-5d6b-4087-ad72-357512ed72bb" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="51a569c0-3c05-4408-bdfe-0470de79aba8" data-file-name="components/accounting/transaction-journal.tsx">Total</span></td>
                      <td className="py-2 px-3 text-right" data-unique-id="adf6dbb8-5c7c-41c3-8831-fa395f1e2eb0" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="56ada362-2c06-47ea-883c-f42885dd70b0" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                      <td className="py-2 px-3 text-right" data-unique-id="61e373a6-ddb3-41e7-ade1-0bc221537274" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="391a7beb-e90a-44a0-aad5-50fbe68550f4" data-file-name="components/accounting/transaction-journal.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {totalDebit !== totalCredit && <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200" data-unique-id="48c4a22d-b215-413b-9872-288df5ee9e5e" data-file-name="components/accounting/transaction-journal.tsx">
                  <p className="text-red-700 text-sm font-medium" data-unique-id="7c33441c-b3ff-47e4-9091-d41c3d2d5014" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="afa47cf7-40c9-4361-bcbd-3de732a467cb" data-file-name="components/accounting/transaction-journal.tsx">
                    ⚠️ Jurnal tidak seimbang! Debit dan Kredit harus sama.
                  </span></p>
                </div>}
            </motion.div>;
      })}
      </div>

      {filteredEntries.length === 0 && <div className="text-center py-12 glass-effect rounded-2xl" data-unique-id="c4a933d4-1d16-4428-a312-0ec3f5e9a272" data-file-name="components/accounting/transaction-journal.tsx">
          <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="46560b44-6cc9-4349-944e-0d950a082f08" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Jurnal tidak ditemukan' : 'Belum ada jurnal'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="7b1cfde4-e7c6-4353-9967-78b2a3c823f9" data-file-name="components/accounting/transaction-journal.tsx" data-dynamic-text="true">
            {searchTerm || dateFilter ? 'Coba ubah filter pencarian' : 'Tambahkan jurnal transaksi pertama'}
          </p>
        </div>}

      {/* Add Journal Modal - Simplified for demo */}
      {showForm && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="cce0079b-df2b-4ef8-8065-cfd199b52552" data-file-name="components/accounting/transaction-journal.tsx">
          <div className="glass-effect rounded-2xl p-6 w-full max-w-2xl" data-unique-id="a0fc266d-892e-4b15-8b4c-82bf5fc460e5" data-file-name="components/accounting/transaction-journal.tsx">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="a1eabeaf-6008-414f-aebc-acdb000075cd" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="d94999a5-7aca-42e3-9b84-365deb87b225" data-file-name="components/accounting/transaction-journal.tsx">Tambah Jurnal Transaksi</span></h3>
            <div className="space-y-4" data-unique-id="d300c025-e7a0-42aa-aca5-acf115f74ebf" data-file-name="components/accounting/transaction-journal.tsx">
              <div className="grid grid-cols-2 gap-4" data-unique-id="f95b799b-0a13-437f-8945-26451feb4429" data-file-name="components/accounting/transaction-journal.tsx">
                <div data-unique-id="6ab974a3-c95d-44f2-afb8-eb283c7c6daa" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="20c8d082-e304-4840-8d39-2399bae2cdc2" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="324a275a-a175-4594-8155-467bd258a00d" data-file-name="components/accounting/transaction-journal.tsx">Tanggal</span></label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="4191b14b-4c44-44ce-b716-6bbf151a9920" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
                <div data-unique-id="de1f46cd-d5cf-4097-9083-e89f7bb3afc7" data-file-name="components/accounting/transaction-journal.tsx">
                  <label className="block text-sm font-medium mb-2" data-unique-id="7bfb02cb-6c79-4f72-803a-f75e2a9d90e7" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="a59afa1e-0aa0-4dff-9672-997bdc592495" data-file-name="components/accounting/transaction-journal.tsx">No. Referensi</span></label>
                  <input type="text" placeholder="JU-001" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="e8f475bf-70e3-4d65-b3ef-091bc086c447" data-file-name="components/accounting/transaction-journal.tsx" />
                </div>
              </div>
              <div data-unique-id="7ff809ae-6d95-4426-b82a-b1883b9464a9" data-file-name="components/accounting/transaction-journal.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="fb95bca0-7cd9-429b-9780-6211b70ee28f" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="181baf3e-75a1-4927-ae8d-b5f4766f4729" data-file-name="components/accounting/transaction-journal.tsx">Keterangan</span></label>
                <input type="text" placeholder="Deskripsi transaksi" className="w-full px-3 py-2 rounded-lg glass-effect border border-border" data-unique-id="53747995-7559-4a19-aa23-9f8bec8f94d4" data-file-name="components/accounting/transaction-journal.tsx" />
              </div>
              <div className="flex gap-2 pt-4" data-unique-id="a289bba6-f677-431d-ab5e-d3b4beef8dd3" data-file-name="components/accounting/transaction-journal.tsx">
                <button onClick={() => setShowForm(false)} className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors" data-unique-id="627511e3-2282-49d2-8a64-d2f829527340" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="56dd6fd1-8b61-4b0a-bc46-736581126406" data-file-name="components/accounting/transaction-journal.tsx">
                  Batal
                </span></button>
                <button onClick={() => {
              alert('Fitur tambah jurnal akan dikembangkan lebih lanjut');
              setShowForm(false);
            }} className="flex-1 gradient-primary text-white px-4 py-2 rounded-lg font-semibold" data-unique-id="48adbca1-b729-45e8-8f29-f1b3e894891f" data-file-name="components/accounting/transaction-journal.tsx"><span className="editable-text" data-unique-id="5ea22049-7ff1-4216-8435-d476d7fa66aa" data-file-name="components/accounting/transaction-journal.tsx">
                  Simpan
                </span></button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}