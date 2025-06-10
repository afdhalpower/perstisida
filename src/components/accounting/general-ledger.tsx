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
  return <div className="space-y-6" data-unique-id="5909a307-3383-4158-9689-de279629a349" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="9bdb2fde-aee1-47b9-92ed-817871164c19" data-file-name="components/accounting/general-ledger.tsx">
        <div data-unique-id="ff233c98-f99a-4fc8-a2a9-132d32cbc9f7" data-file-name="components/accounting/general-ledger.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="ebc6022c-74ea-4abc-8f81-34d1c0eb6a22" data-file-name="components/accounting/general-ledger.tsx">
            <BookOpen className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="d09bc5c0-0225-40cc-b235-c468548079c2" data-file-name="components/accounting/general-ledger.tsx">
            Buku Besar
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="de054862-1868-41b1-bf8a-800c076eeb61" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="c169b4b7-b72f-46e6-a988-e6aa559c1358" data-file-name="components/accounting/general-ledger.tsx">Catatan transaksi per akun</span></p>
        </div>
        
        <button onClick={handleExport} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="6be564e9-3584-444e-98bd-d80a3bf92878" data-file-name="components/accounting/general-ledger.tsx">
          <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="4ab91b1a-9001-42b8-9a85-c0703b5f22bf" data-file-name="components/accounting/general-ledger.tsx">
          Export Excel
        </span></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-unique-id="f66ffb4a-230d-42ce-bcec-487a37cecf5b" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
        {/* Account List */}
        <div className="glass-effect rounded-2xl p-6" data-unique-id="171b51d3-4bf1-4edd-88d6-8537cf0ec886" data-file-name="components/accounting/general-ledger.tsx">
          <h3 className="text-lg font-semibold mb-4" data-unique-id="c1c13b60-4e87-48df-9880-af20cfd38d12" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="9e9ba369-eade-48c6-a8cf-b5c1f8273988" data-file-name="components/accounting/general-ledger.tsx">Daftar Akun</span></h3>
          <div className="space-y-2" data-unique-id="706c16a5-98fa-4b60-82d2-cb4d00cbe5a1" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            {accounts.map(account => <button key={account.id} onClick={() => setSelectedAccount(account.id)} className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedAccount === account.id ? 'gradient-primary text-white' : 'hover:bg-accent/50'}`} data-unique-id="decef7f4-89e6-4e80-ab11-afd9280d862d" data-file-name="components/accounting/general-ledger.tsx">
                <div className="font-medium" data-unique-id="15b07143-ebcd-481e-ac9c-6764a8dbaca5" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{account.name}</div>
                <div className={`text-sm ${selectedAccount === account.id ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="2b0eb739-470a-4a00-8f91-63f79b246875" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="556c6506-a1db-4f1a-b1e1-2c5f22f978a0" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(account.balance).toLocaleString('id-ID')}
                </div>
              </button>)}
          </div>
        </div>

        {/* Ledger Details */}
        <div className="lg:col-span-3 space-y-6" data-unique-id="12d52d03-afa9-4521-be0b-c4fd0c3e3001" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="f88ace40-f691-49c5-b825-c6e4a641bcb8" data-file-name="components/accounting/general-ledger.tsx">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="bfdacf36-de16-448f-a03d-40569dd82450" data-file-name="components/accounting/general-ledger.tsx">
              <div className="md:col-span-2" data-unique-id="423049ff-f5ce-4f8f-9213-908a8915f5e8" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="dae5b5bb-dde3-49ae-a497-224fe7f66591" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="b73e5c9b-35c6-4f2b-8d01-4b28a90d1f74" data-file-name="components/accounting/general-ledger.tsx">Pencarian</span></label>
                <div className="relative" data-unique-id="16f4702f-e57c-4732-899a-e7c7d1db25dc" data-file-name="components/accounting/general-ledger.tsx">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Cari transaksi..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="f6ea0200-ff8c-42c6-a8fe-55685dba6c06" data-file-name="components/accounting/general-ledger.tsx" />
                </div>
              </div>
              <div data-unique-id="abc8fdb2-1648-42a9-be19-6c310aa4d003" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="863c3288-a0e9-49b0-8fc6-438d0b64dfb4" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="551eef42-5b32-456e-be56-22d648226609" data-file-name="components/accounting/general-ledger.tsx">Dari Tanggal</span></label>
                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="37b5c333-53bc-46b4-97c0-763b8557c244" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
              <div data-unique-id="343fc0e2-7853-4140-9557-95b3a6e99c5e" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="ba44359d-b947-4619-9e58-b66c9c62eda5" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="c8a29e14-d6e6-47d4-9f69-050a7573390b" data-file-name="components/accounting/general-ledger.tsx">Sampai Tanggal</span></label>
                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="fe7c0e0b-2f32-448d-88bf-534bbdd09517" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="ceffb7c3-6b20-4da4-9555-98799e43824d" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="19f2116e-f022-440e-b136-229192aeb554" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="224fa7d1-d7ab-419a-849b-8fff49024d01" data-file-name="components/accounting/general-ledger.tsx">
              Buku Besar: </span>{selectedAccountData?.name}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6" data-unique-id="75709e9b-a49e-4365-8a87-0344289ffc2c" data-file-name="components/accounting/general-ledger.tsx">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="c123077a-6ed7-468c-a836-bc6b6ba0dc17" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-blue-600" data-unique-id="26a3e9da-849d-42b2-bf49-9bc8e305dd59" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="82c287b3-8839-4c3e-a707-22e4892f25c8" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalDebit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-blue-700" data-unique-id="6fa9ca4a-57e4-4caf-9289-a51a8d863102" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="a211896c-3eb8-4396-ad65-34b5626d461f" data-file-name="components/accounting/general-ledger.tsx">Total Debit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="6ff2fe1d-33fd-4b95-830a-8e5d069fb82f" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-red-600" data-unique-id="f2409b35-865f-408d-811a-22da2b89112b" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c5a6053e-d532-4ff3-8e54-b002b95502f4" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalCredit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-red-700" data-unique-id="f5cc017c-590b-4955-a7aa-641971727763" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="088d249c-0ba2-4da1-8672-bbe2e716257d" data-file-name="components/accounting/general-ledger.tsx">Total Kredit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="e96f6d8b-391f-47a4-80db-50cf3757dc50" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-green-600" data-unique-id="728465c3-f19d-4a36-9977-40d0a72784d7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8270fb74-8097-437c-bfd5-eaaf1ff3ce8e" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-green-700" data-unique-id="86ddb0a3-7899-4a90-a936-64b7417ca7e6" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="6b23f29b-0259-47ec-9e6f-090f55a4bd41" data-file-name="components/accounting/general-ledger.tsx">Saldo Akhir</span></div>
              </div>
            </div>

            {/* Ledger Table */}
            <div className="overflow-x-auto" data-unique-id="33e132c9-1427-48aa-b58d-6a9149d7e298" data-file-name="components/accounting/general-ledger.tsx">
              <table className="w-full" data-unique-id="e9a1b17f-0552-423d-bedb-d4f0391529e4" data-file-name="components/accounting/general-ledger.tsx">
                <thead data-unique-id="aef66f2f-c517-41c0-9aa0-ee4332ccb5e6" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-b border-border" data-unique-id="53d8c734-2e27-4d32-be23-83b1479d6ec1" data-file-name="components/accounting/general-ledger.tsx">
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="66c74f59-9198-45b2-ba2f-3c9daadb9a20" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="9b0fad54-33ec-4d48-b66c-deb420c83b47" data-file-name="components/accounting/general-ledger.tsx">Tanggal</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="7a27924b-5cf4-4db7-afb5-ce8403a9e39f" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="01941344-cd47-4fb9-815b-58c99eb2fa2d" data-file-name="components/accounting/general-ledger.tsx">Keterangan</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="6eb2df32-e85a-4d5b-8ba7-42c4fc4837f4" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="bb697790-bb0e-4536-a366-eeb8d4814ac8" data-file-name="components/accounting/general-ledger.tsx">Ref</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="7495c9d8-79b6-47f4-b8e5-7c2df5bdf6b8" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="bb3296b1-1409-44f1-80ec-f4b6f0273875" data-file-name="components/accounting/general-ledger.tsx">Debit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="684d052f-f065-4446-8584-472848b8e4fc" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="414e4581-4a9e-420b-9252-187f47fe59eb" data-file-name="components/accounting/general-ledger.tsx">Kredit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="5bd63ec6-ba36-46c2-be82-91bd7b03ff9c" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="e0b8a234-4611-4578-80c6-27c9877b9c6a" data-file-name="components/accounting/general-ledger.tsx">Saldo</span></th>
                  </tr>
                </thead>
                <tbody data-unique-id="e9466c31-94d4-4d26-8672-4e56ecd805e5" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                  {filteredEntries.map((entry, index) => <motion.tr key={entry.id} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.05
                }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="b7d7a27b-046e-43f2-933b-92fbd8d731de" data-file-name="components/accounting/general-ledger.tsx">
                      <td className="py-3 px-4" data-unique-id="17e66067-a4ea-494f-bea3-fc5af2ad5eaa" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.date}</td>
                      <td className="py-3 px-4" data-unique-id="da518ab8-4658-4384-9058-260a849dfcf6" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.description}</td>
                      <td className="py-3 px-4 text-primary font-medium" data-unique-id="2b132ae4-e0b5-4dba-931c-c5f74950a9cb" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.reference}</td>
                      <td className="py-3 px-4 text-right" data-unique-id="775b5a49-7f17-4275-b24c-ed353925d7b7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.debit > 0 ? `Rp ${entry.debit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right" data-unique-id="5c6f1eb7-a7c8-4d7f-a423-790dd0812c76" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.credit > 0 ? `Rp ${entry.credit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold" data-unique-id="cede6899-e327-4cc3-a754-b5b27298d213" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="9d56212f-15fa-4ce7-ae01-9e9321b6e06e" data-file-name="components/accounting/general-ledger.tsx">
                        Rp </span>{entry.balance.toLocaleString('id-ID')}
                      </td>
                    </motion.tr>)}
                </tbody>
                <tfoot data-unique-id="d4ded49e-977a-4e21-b8fb-73ea5ec3f2fc" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-t-2 border-border font-semibold" data-unique-id="62912e19-1b27-4a11-9a20-8f4883e14586" data-file-name="components/accounting/general-ledger.tsx">
                    <td colSpan={3} className="py-3 px-4" data-unique-id="4a872c1c-f32b-4c6f-826d-eb36820b6432" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="cfe76a7d-ecb7-44b5-a91d-015f12fda6f6" data-file-name="components/accounting/general-ledger.tsx">Total</span></td>
                    <td className="py-3 px-4 text-right" data-unique-id="7bae8ee7-7942-4dd7-a414-543e94d28223" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2524f6ad-a3ca-43df-90e3-79518d39a442" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="8d1988ac-ab0c-414c-9119-13203c8bb833" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="13675abd-045a-43e1-a415-2f8b5b12f80c" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="a98bab52-7371-4ecf-9290-74f3dac2c575" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a349a0fb-7731-4155-8511-edb8eeb299ce" data-file-name="components/accounting/general-ledger.tsx">
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