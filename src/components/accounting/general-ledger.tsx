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
  return <div className="space-y-6" data-unique-id="1d5339e2-37f8-4172-a622-44e8703a9704" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="98e27834-3de2-4282-855c-37730a2a4f79" data-file-name="components/accounting/general-ledger.tsx">
        <div data-unique-id="150f442c-f0ab-410d-8219-1436e8f3424f" data-file-name="components/accounting/general-ledger.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="275d4117-d9b9-400d-839b-4642dfb70fe3" data-file-name="components/accounting/general-ledger.tsx">
            <BookOpen className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="6eaaef6e-d95d-451a-a5a5-967ff84515e7" data-file-name="components/accounting/general-ledger.tsx">
            Buku Besar
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="b484f9cc-61ef-45c3-bf08-06917767110e" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="d04c3549-fada-4a49-bdbc-1dcbb47d98ae" data-file-name="components/accounting/general-ledger.tsx">Catatan transaksi per akun</span></p>
        </div>
        
        <button onClick={handleExport} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="06b767d7-29a6-4624-aa74-ea190951eaf8" data-file-name="components/accounting/general-ledger.tsx">
          <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="8c231138-a30f-47dc-956b-ba71a127ea70" data-file-name="components/accounting/general-ledger.tsx">
          Export Excel
        </span></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-unique-id="ad023a9f-4438-4809-ae53-eb073303378b" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
        {/* Account List */}
        <div className="glass-effect rounded-2xl p-6" data-unique-id="416962d3-624f-4fb9-960b-f17955962d44" data-file-name="components/accounting/general-ledger.tsx">
          <h3 className="text-lg font-semibold mb-4" data-unique-id="edcdb19a-a4f8-4f25-b743-870772b11648" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="18a37185-9abb-4195-b123-208d387702f1" data-file-name="components/accounting/general-ledger.tsx">Daftar Akun</span></h3>
          <div className="space-y-2" data-unique-id="fc5c1729-f86c-47f1-b4f2-2b976cee5bc8" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            {accounts.map(account => <button key={account.id} onClick={() => setSelectedAccount(account.id)} className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedAccount === account.id ? 'gradient-primary text-white' : 'hover:bg-accent/50'}`} data-unique-id="8f8d327a-d05b-4f52-b7ce-e3da0f158025" data-file-name="components/accounting/general-ledger.tsx">
                <div className="font-medium" data-unique-id="0cb489fc-c3d6-4fd5-a74c-2ec239598dca" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{account.name}</div>
                <div className={`text-sm ${selectedAccount === account.id ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="4200f876-2a9f-4f8a-af58-c418ed18b1ce" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="03fb2ff7-3d33-4137-8609-804ef8144d09" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(account.balance).toLocaleString('id-ID')}
                </div>
              </button>)}
          </div>
        </div>

        {/* Ledger Details */}
        <div className="lg:col-span-3 space-y-6" data-unique-id="a8e57a60-3484-4652-9526-bf8a898f1a9e" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="99ae10d6-6041-4a5d-a4cb-dcd7dcff13d5" data-file-name="components/accounting/general-ledger.tsx">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="94399a04-6ad3-44f2-b01c-7626eb2e828b" data-file-name="components/accounting/general-ledger.tsx">
              <div className="md:col-span-2" data-unique-id="215ff091-8609-4a39-bc8d-4789113e8635" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="f9fbe978-8b05-400a-8b66-260060af1e52" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="2efc6784-41bc-4bf7-b83e-8064aeabc01a" data-file-name="components/accounting/general-ledger.tsx">Pencarian</span></label>
                <div className="relative" data-unique-id="43174729-6e17-489c-8f0b-bc6af805fdb8" data-file-name="components/accounting/general-ledger.tsx">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Cari transaksi..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="5db93a34-136e-4b3c-aca0-9fdd96786d90" data-file-name="components/accounting/general-ledger.tsx" />
                </div>
              </div>
              <div data-unique-id="6d7640be-c820-45df-9a22-aebef80c72f3" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="f79cd5af-d06d-4370-9965-fcbd7d1d5150" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="48a673fd-45cc-466e-b758-b09106fab71a" data-file-name="components/accounting/general-ledger.tsx">Dari Tanggal</span></label>
                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="c78a244d-7ebc-46a4-9200-977cb2bdf150" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
              <div data-unique-id="c83292bf-487b-4593-bc44-62dd658d2c3e" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="c9598b57-4356-44ba-b41f-e29f1f762eb5" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="dff9eaa8-c5bd-4fdf-b9fb-d69b03458929" data-file-name="components/accounting/general-ledger.tsx">Sampai Tanggal</span></label>
                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="ee4922cd-e05d-43d1-af2d-4890afc94126" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="2656fef3-3d9f-4b76-83a9-6da5c278d316" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="3fe433de-220b-433f-964a-d2252f3182f3" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="67e309c2-f7ef-4cdd-8144-4b78e8df116f" data-file-name="components/accounting/general-ledger.tsx">
              Buku Besar: </span>{selectedAccountData?.name}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6" data-unique-id="2e4b3701-89f0-4578-82d5-b69c969d03e1" data-file-name="components/accounting/general-ledger.tsx">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="0b4e5828-eb27-4351-a20c-673027878cb6" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-blue-600" data-unique-id="abf54d79-8924-4e77-9df2-13976d468403" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="09cefb7b-50e5-469f-99b4-c1894107054e" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalDebit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-blue-700" data-unique-id="6fb69ad6-c56f-4dc1-a54d-5c7cdd3f8a30" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="e0f79ee3-9182-430b-b04c-61e1df1a4ae9" data-file-name="components/accounting/general-ledger.tsx">Total Debit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="d96314cb-ea61-48cc-b18d-6a17633cd9e5" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-red-600" data-unique-id="ea535bbe-55e0-492b-b5c8-6942aa45bd91" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7065ad99-b69b-4b47-a9c5-de6ef74c8178" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalCredit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-red-700" data-unique-id="345e44d5-391b-4696-9d7a-06a0e1152d4f" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="7da03775-9484-47bc-a6dd-0b4dc72a2401" data-file-name="components/accounting/general-ledger.tsx">Total Kredit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="9642c967-8393-45d7-b883-312641dcb602" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-green-600" data-unique-id="37805e86-9c92-445c-a6d3-a38db971e4b8" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="57083763-b555-4809-bae4-d27d7f84c118" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-green-700" data-unique-id="b51abea4-ea9e-449c-9c5d-ab8898d72a9e" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="a6c71d53-afa0-4187-9124-6eb1e9afabca" data-file-name="components/accounting/general-ledger.tsx">Saldo Akhir</span></div>
              </div>
            </div>

            {/* Ledger Table */}
            <div className="overflow-x-auto" data-unique-id="295c9693-d443-4e15-9f37-27dc03b8e75b" data-file-name="components/accounting/general-ledger.tsx">
              <table className="w-full" data-unique-id="52845a2a-5b71-4e8e-8273-ca5b77849d13" data-file-name="components/accounting/general-ledger.tsx">
                <thead data-unique-id="392d15b8-76b7-4a78-a22b-71fc594fc02f" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-b border-border" data-unique-id="7b696769-a665-4e3f-ac96-ca9835fd22e6" data-file-name="components/accounting/general-ledger.tsx">
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="c50b2a13-19fd-41f7-8389-591226e332ad" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="d28dc3be-4c51-4bcc-84b6-94d5b2752328" data-file-name="components/accounting/general-ledger.tsx">Tanggal</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="88289b93-1d73-4d6c-8001-32de0c6beccd" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="4cad4952-a9a9-4ce0-902e-c832ba7bb4fe" data-file-name="components/accounting/general-ledger.tsx">Keterangan</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="8e84c42b-f7b7-468f-a145-cf272d70d94e" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="4adebbce-fa56-48fc-9e39-ff4becd33593" data-file-name="components/accounting/general-ledger.tsx">Ref</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="c6266c8b-2f65-45a5-97c8-c3f5bb7697e5" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="1de1740a-5d70-4cd1-8660-c0a79980fbf9" data-file-name="components/accounting/general-ledger.tsx">Debit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="b8596b26-b8c2-474c-9833-170d19537a84" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="38949e60-abe9-4dd6-96f8-ad1c0c04f5a7" data-file-name="components/accounting/general-ledger.tsx">Kredit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="b9a29327-ce14-42d0-bbd4-6a82add9e3b0" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="da13d9b3-e5d0-4000-8333-0b4b4f9dae72" data-file-name="components/accounting/general-ledger.tsx">Saldo</span></th>
                  </tr>
                </thead>
                <tbody data-unique-id="4f26cfc0-8e92-4e3f-8beb-bb14dc789302" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                  {filteredEntries.map((entry, index) => <motion.tr key={entry.id} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.05
                }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="d9fa6803-0d4d-4059-b130-76504c9c0738" data-file-name="components/accounting/general-ledger.tsx">
                      <td className="py-3 px-4" data-unique-id="b34de184-81ef-4d55-879f-6f0f8b09ebc3" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.date}</td>
                      <td className="py-3 px-4" data-unique-id="cf3aeef6-33b6-479f-939d-c334a90c86e9" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.description}</td>
                      <td className="py-3 px-4 text-primary font-medium" data-unique-id="27c3fabb-812e-4b9b-9039-541ec6de6193" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.reference}</td>
                      <td className="py-3 px-4 text-right" data-unique-id="795cb758-4107-4ec3-b58c-51244e572ad6" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.debit > 0 ? `Rp ${entry.debit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right" data-unique-id="d179dc30-ec16-4262-b9c9-31478654216f" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.credit > 0 ? `Rp ${entry.credit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold" data-unique-id="b7706776-be90-4e77-bc84-dba6b9b791d7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="4bdbfdd8-751a-4f1e-9de9-4f0402aa6f51" data-file-name="components/accounting/general-ledger.tsx">
                        Rp </span>{entry.balance.toLocaleString('id-ID')}
                      </td>
                    </motion.tr>)}
                </tbody>
                <tfoot data-unique-id="bd05904c-8db7-46e8-bcc4-3a6c68a531e6" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-t-2 border-border font-semibold" data-unique-id="716fc4d2-769b-4e62-ae20-3f982c5bd887" data-file-name="components/accounting/general-ledger.tsx">
                    <td colSpan={3} className="py-3 px-4" data-unique-id="ef4b533d-8df9-4930-9c03-53df40bdb540" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="f2ea403e-b27d-4958-a9c8-14b26fe1e191" data-file-name="components/accounting/general-ledger.tsx">Total</span></td>
                    <td className="py-3 px-4 text-right" data-unique-id="d18f5ec0-4420-40ed-978b-ba4ba2e858ea" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="cac389da-2829-4374-8f70-028351192197" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="31630904-17f9-4467-bb1c-df4a4378b40f" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b91441b7-5355-47db-b52b-29c6fcce0fe9" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="431783b7-d6de-43e3-94f7-967b65186ec3" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="cd2376ab-e80a-4c39-a5eb-b8f5fcc76cac" data-file-name="components/accounting/general-ledger.tsx">
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