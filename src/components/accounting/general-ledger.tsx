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
  const accounts: any[] = [];
  const ledgerEntries: LedgerEntry[] = [];
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
  return <div className="space-y-6" data-unique-id="43fddfab-ae3f-4b7d-9728-39e29a2dc684" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="92df804d-86a4-4274-9214-df13902fd016" data-file-name="components/accounting/general-ledger.tsx">
        <div data-unique-id="cae770a4-afb1-43b0-94ca-6aa2043043d6" data-file-name="components/accounting/general-ledger.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="7ccd3311-3499-45f8-82bf-93224517ed47" data-file-name="components/accounting/general-ledger.tsx">
            <BookOpen className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="8662e744-c113-48a5-b31d-d39a3ca679ff" data-file-name="components/accounting/general-ledger.tsx">
            Buku Besar
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="f838e5f9-8c63-4ac0-a4f4-6076344c6e55" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="75a6b917-5e89-4c55-bf89-c44c9eec3f8a" data-file-name="components/accounting/general-ledger.tsx">Catatan transaksi per akun</span></p>
        </div>
        
        <button onClick={handleExport} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="853c7402-1e36-4ef9-8334-ffd1a7252e4a" data-file-name="components/accounting/general-ledger.tsx">
          <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="cdeafa17-0d23-4e4d-8e5d-6ab90f1e81c6" data-file-name="components/accounting/general-ledger.tsx">
          Export Excel
        </span></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-unique-id="525b0f76-4334-4a37-b9de-912fb6a73461" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
        {/* Account List */}
        <div className="glass-effect rounded-2xl p-6" data-unique-id="fc485e79-1401-4593-ac42-9f8ec73ec2eb" data-file-name="components/accounting/general-ledger.tsx">
          <h3 className="text-lg font-semibold mb-4" data-unique-id="efcb1b1a-732b-45c3-a9ee-144d351d7f9c" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="261e0068-b292-45e5-b7ef-2aa4af70a98b" data-file-name="components/accounting/general-ledger.tsx">Daftar Akun</span></h3>
          <div className="space-y-2" data-unique-id="d6173fa4-894c-4ed2-a19a-5c61450945a4" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            {accounts.map(account => <button key={account.id} onClick={() => setSelectedAccount(account.id)} className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedAccount === account.id ? 'gradient-primary text-white' : 'hover:bg-accent/50'}`} data-unique-id="a23b6c4f-cb0c-474f-83ce-837990195546" data-file-name="components/accounting/general-ledger.tsx">
                <div className="font-medium" data-unique-id="3c0769ef-7f05-4c82-aac7-16bd3d5e5604" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{account.name}</div>
                <div className={`text-sm ${selectedAccount === account.id ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="cf7c350c-22c4-4599-b5c3-ff310e07f544" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ec3ade34-8710-434c-85b4-0e2c64f27602" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(account.balance).toLocaleString('id-ID')}
                </div>
              </button>)}
          </div>
        </div>

        {/* Ledger Details */}
        <div className="lg:col-span-3 space-y-6" data-unique-id="6a6eaca3-fa84-487d-b6b1-d06643c338ab" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="eb487caa-079d-4ecd-bb32-0fccbaa88738" data-file-name="components/accounting/general-ledger.tsx">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="b794f228-e91b-4327-bd1e-42ce2d126c45" data-file-name="components/accounting/general-ledger.tsx">
              <div className="md:col-span-2" data-unique-id="61c5ccdd-6093-446b-8b02-c05449d4e837" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="0d1d6ff9-4707-4146-88b0-0b50cc4138ae" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="c75af77c-853e-4ee0-821c-fd5b7332c1da" data-file-name="components/accounting/general-ledger.tsx">Pencarian</span></label>
                <div className="relative" data-unique-id="8bb0d184-00f2-4ab5-89e7-b559775e3631" data-file-name="components/accounting/general-ledger.tsx">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Cari transaksi..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="33e6010e-eba2-4b07-9b5e-6510d9cf20f2" data-file-name="components/accounting/general-ledger.tsx" />
                </div>
              </div>
              <div data-unique-id="e232c310-fcf2-4d5e-8076-2cfa88247683" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="ee9cb087-1efb-4e09-8d76-5526859307cb" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="7a465c01-720f-49a4-bf9e-a616f76763ad" data-file-name="components/accounting/general-ledger.tsx">Dari Tanggal</span></label>
                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="df88e5f4-b2ca-4764-b9d4-72c331e61183" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
              <div data-unique-id="29d67a53-636f-45b8-89d8-2eeab5daf417" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="a3afed43-dc3d-46f2-ae19-7400eaceec72" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="922866a7-db1e-44a2-961a-9f40063a20e4" data-file-name="components/accounting/general-ledger.tsx">Sampai Tanggal</span></label>
                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="701e81e6-c1e6-49be-b8d4-9b10e722e15c" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="12aa8daa-d3f4-4d2e-8c85-11f4d2d5e4d3" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="0c1edc6d-01f9-407c-817e-2a6b7bf16e2c" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="bb78876f-3fc5-4991-802b-23cc5aa4906e" data-file-name="components/accounting/general-ledger.tsx">
              Buku Besar: </span>{selectedAccountData?.name}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6" data-unique-id="98665f2e-d557-4aca-b9ef-a91fc2883c9a" data-file-name="components/accounting/general-ledger.tsx">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="de13623a-d30f-4538-82da-d56cdbcda870" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-blue-600" data-unique-id="0ef1de3a-567d-4d59-af38-9020fb156bec" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7c289543-523c-4e4f-a7e1-9867aeb0c214" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalDebit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-blue-700" data-unique-id="ed759bbc-f12e-49c0-96e4-392e70a4c060" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="aa2575c5-9020-4685-bbd6-b9a2ef3c3bfc" data-file-name="components/accounting/general-ledger.tsx">Total Debit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="11b76f29-d36d-4635-bf62-dd2642beaf52" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-red-600" data-unique-id="d730fdf4-f738-45f5-bd3b-5b23f28d71c7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="913f9ed0-ceb1-40f0-97fb-a97fb109a976" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalCredit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-red-700" data-unique-id="880a1b9c-98ae-48d5-a19e-49d406e087b8" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="29b3e09c-99df-4c97-a5eb-5d58fb5838ec" data-file-name="components/accounting/general-ledger.tsx">Total Kredit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="c64c863f-9a65-47ed-aaf4-703df4b56069" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-green-600" data-unique-id="d476e9e7-33ab-40b0-8083-6271912adb16" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c06f2aa2-4030-4155-a5f8-6c282c202cff" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-green-700" data-unique-id="b3606512-785a-4707-8933-68c133a15bad" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="bae661fa-a4ab-4fe6-9197-235d85f39000" data-file-name="components/accounting/general-ledger.tsx">Saldo Akhir</span></div>
              </div>
            </div>

            {/* Ledger Table */}
            <div className="overflow-x-auto" data-unique-id="0068099f-8f98-447d-9fae-7c68a2fc1c09" data-file-name="components/accounting/general-ledger.tsx">
              <table className="w-full" data-unique-id="7bc3b03a-e477-4010-918e-3b75d325dbbc" data-file-name="components/accounting/general-ledger.tsx">
                <thead data-unique-id="c6bc3ea8-755c-41f6-a850-838806535946" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-b border-border" data-unique-id="083f4edd-02c0-4d66-a986-a73e265d0b7c" data-file-name="components/accounting/general-ledger.tsx">
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="0bb2fccf-b1bc-440a-b9ac-41190321015f" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="3daf9cd5-aac3-476b-b616-954f1f770393" data-file-name="components/accounting/general-ledger.tsx">Tanggal</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="8da5b776-cb8d-45bf-8ea4-329241a08c04" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="5ce95b5e-5a27-460b-90a6-c394c1b10cdf" data-file-name="components/accounting/general-ledger.tsx">Keterangan</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="4f2f3add-c616-44fb-8278-4f9b13d7d9d5" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="718beacd-d875-40f6-8401-2b8a62f9ff5f" data-file-name="components/accounting/general-ledger.tsx">Ref</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="66cd8304-8d6c-47ff-b304-83c080c63291" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="93daa91a-5c64-437d-bdc7-bee2ac6c930c" data-file-name="components/accounting/general-ledger.tsx">Debit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="e5e4e048-679f-4848-a7c1-1b299de76c16" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="fcd08696-d59a-4c83-b9b0-ee9c40189c61" data-file-name="components/accounting/general-ledger.tsx">Kredit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="06dce638-5892-489a-ac0f-0c9d4b520270" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="ac9f5197-787c-4c8e-baeb-fa606889a074" data-file-name="components/accounting/general-ledger.tsx">Saldo</span></th>
                  </tr>
                </thead>
                <tbody data-unique-id="ddfd6f99-5180-4c53-980a-c7c4d91a3bb8" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                  {filteredEntries.map((entry, index) => <motion.tr key={entry.id} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.05
                }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="b15636ac-62db-4a6e-bc74-bd2c4360e26f" data-file-name="components/accounting/general-ledger.tsx">
                      <td className="py-3 px-4" data-unique-id="f89d68ad-3691-46bb-b745-8567e04d8eec" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.date}</td>
                      <td className="py-3 px-4" data-unique-id="51303608-ae53-40e3-afbd-a06efb4f95c7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.description}</td>
                      <td className="py-3 px-4 text-primary font-medium" data-unique-id="24e4fa9f-4eac-4b11-9516-ec49d6d39cf4" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.reference}</td>
                      <td className="py-3 px-4 text-right" data-unique-id="72da0df0-8c14-4247-9bfe-aae96220a16d" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.debit > 0 ? `Rp ${entry.debit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right" data-unique-id="1e6b2699-3ace-4ace-b98b-aa698e785518" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.credit > 0 ? `Rp ${entry.credit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold" data-unique-id="d6557912-c015-4466-977e-53f5a0be6a2d" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="919aeaa7-2f63-484f-888b-6b7a4df1ce53" data-file-name="components/accounting/general-ledger.tsx">
                        Rp </span>{entry.balance.toLocaleString('id-ID')}
                      </td>
                    </motion.tr>)}
                </tbody>
                <tfoot data-unique-id="7655c3b8-8a96-43cd-a6d9-144efd687dac" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-t-2 border-border font-semibold" data-unique-id="beb20c06-8aa0-4bf4-8ede-fd0781a67176" data-file-name="components/accounting/general-ledger.tsx">
                    <td colSpan={3} className="py-3 px-4" data-unique-id="5ded6d35-2c96-481f-aa0a-c47f6d3a8faa" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="6c09cbc1-30dc-4101-b53e-a844fde53b40" data-file-name="components/accounting/general-ledger.tsx">Total</span></td>
                    <td className="py-3 px-4 text-right" data-unique-id="e1504aba-36a7-4368-b9b5-fb7647dcabab" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c01b8d62-0c63-4108-8d11-67884072d67a" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="47cf53bc-2219-45a8-ba34-a6fe62637d26" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ba42e77f-9732-4fb8-bbfb-16a05310ecdc" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="4272c2b6-f0d5-4fbf-87cf-1c96eaa3dbb7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b26cca0e-6675-4802-9a78-6db8c4178245" data-file-name="components/accounting/general-ledger.tsx">
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