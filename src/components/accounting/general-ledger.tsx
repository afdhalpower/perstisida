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
  return <div className="space-y-6" data-unique-id="3965dff9-eb0e-44cd-8e87-88df66a47a36" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
      {/* Header */}
      <div className="flex items-center justify-between" data-unique-id="f93c74b6-cbba-4449-874e-99343a6f0b2b" data-file-name="components/accounting/general-ledger.tsx">
        <div data-unique-id="af039df8-3ab0-42b9-8b59-6aa1a20ae387" data-file-name="components/accounting/general-ledger.tsx">
          <h2 className="text-2xl font-bold flex items-center gap-2" data-unique-id="ee28a7f1-14a3-42c3-a671-394df34e31c7" data-file-name="components/accounting/general-ledger.tsx">
            <BookOpen className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="a4efb3b5-d577-4b68-9e69-8517ac95354d" data-file-name="components/accounting/general-ledger.tsx">
            Buku Besar
          </span></h2>
          <p className="text-muted-foreground" data-unique-id="a40aa9c5-3725-4872-bb75-d60baea48e5a" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="7c9568f5-f708-4350-8e66-97fd9f7cc517" data-file-name="components/accounting/general-ledger.tsx">Catatan transaksi per akun</span></p>
        </div>
        
        <button onClick={handleExport} className="px-4 py-2 rounded-lg glass-effect border border-border hover:bg-accent/50 transition-colors flex items-center gap-2" data-unique-id="d6526cc7-abd7-48f7-b063-ef26b7513977" data-file-name="components/accounting/general-ledger.tsx">
          <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="073c48bc-504d-4db8-977c-2922cb37e65a" data-file-name="components/accounting/general-ledger.tsx">
          Export Excel
        </span></button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-unique-id="39286e2a-b4ab-4f7c-b803-7d96c96fdcd0" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
        {/* Account List */}
        <div className="glass-effect rounded-2xl p-6" data-unique-id="b9210c90-b5ae-4736-8a89-c26676e59d10" data-file-name="components/accounting/general-ledger.tsx">
          <h3 className="text-lg font-semibold mb-4" data-unique-id="d6340e7c-bf24-470f-977f-439a0029cc10" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="7714e7ba-9256-4735-a533-d0a5987af2c1" data-file-name="components/accounting/general-ledger.tsx">Daftar Akun</span></h3>
          <div className="space-y-2" data-unique-id="c63f41a4-f484-4208-90a0-567727b37269" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            {accounts.map(account => <button key={account.id} onClick={() => setSelectedAccount(account.id)} className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedAccount === account.id ? 'gradient-primary text-white' : 'hover:bg-accent/50'}`} data-unique-id="b2d2c852-dd84-450a-a643-855e88b7e7a8" data-file-name="components/accounting/general-ledger.tsx">
                <div className="font-medium" data-unique-id="77591857-0d2b-4c20-b3c5-5784dd844f43" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{account.name}</div>
                <div className={`text-sm ${selectedAccount === account.id ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="28c38882-9234-4886-b9b3-a1fedc8621bd" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7bafd286-96e2-4cc7-bc00-3eeb9998b90d" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(account.balance).toLocaleString('id-ID')}
                </div>
              </button>)}
          </div>
        </div>

        {/* Ledger Details */}
        <div className="lg:col-span-3 space-y-6" data-unique-id="b0aa109c-5672-444e-b0c4-f9dcdeabb954" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
          {/* Filters */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="e35b4f3c-e4e0-472f-abee-02353517b2eb" data-file-name="components/accounting/general-ledger.tsx">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-unique-id="387bad5f-9f1c-4b02-998e-8b721bda93ef" data-file-name="components/accounting/general-ledger.tsx">
              <div className="md:col-span-2" data-unique-id="90c18695-42ee-4e89-bf38-a878039b1d42" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="1d41ff1c-d078-4b1b-9381-a32f175eaf38" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="1a1511de-a2b2-4344-8bcb-1a00e1d7a694" data-file-name="components/accounting/general-ledger.tsx">Pencarian</span></label>
                <div className="relative" data-unique-id="f188a5a9-b51f-4281-8641-db15dfe707ff" data-file-name="components/accounting/general-ledger.tsx">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Cari transaksi..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="90c23400-218e-4796-a385-d028f4f1b512" data-file-name="components/accounting/general-ledger.tsx" />
                </div>
              </div>
              <div data-unique-id="3c26102e-180f-4a3a-a006-46c4d3417165" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="47f7b349-59ba-49a7-940b-f6e2b01d0127" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="a527db7e-6836-4222-8e0d-caa011e93ccd" data-file-name="components/accounting/general-ledger.tsx">Dari Tanggal</span></label>
                <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="081cceb5-c982-4bb4-8512-61c0b695d7ce" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
              <div data-unique-id="b56da9a6-cd3d-4fe3-9916-3e09a797fece" data-file-name="components/accounting/general-ledger.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="d07d6503-b92c-4ee5-897c-ecfe974a8408" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="c30c5216-d52a-44f2-8bea-ae7b78c59b96" data-file-name="components/accounting/general-ledger.tsx">Sampai Tanggal</span></label>
                <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="5d38f2da-4409-4b2f-bb34-58bd82aa42fd" data-file-name="components/accounting/general-ledger.tsx" />
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="709d0897-40e9-4bef-bbfa-a7ac9385d3f7" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
            <h3 className="text-xl font-semibold mb-4" data-unique-id="669a1d3c-ed60-4ab5-a437-06659872f8fc" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f21cfe34-ac57-4e6f-838a-b5d4879e8527" data-file-name="components/accounting/general-ledger.tsx">
              Buku Besar: </span>{selectedAccountData?.name}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6" data-unique-id="81202aef-7372-41f5-afa2-82b2fa187455" data-file-name="components/accounting/general-ledger.tsx">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="d7c1597e-e2b4-4886-9ece-329d84d62248" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-blue-600" data-unique-id="1687bd4b-3044-4099-bd91-0ffed407f3f8" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="910369cc-9cdb-4b88-9f8e-d7d952bcd554" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalDebit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-blue-700" data-unique-id="1bd2dd3b-10a1-4156-a319-19000d3a3c5f" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="51ea1401-e837-46df-b759-f96292c5695e" data-file-name="components/accounting/general-ledger.tsx">Total Debit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50" data-unique-id="1485602e-3076-49f7-ba73-b64b9723b60d" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-red-600" data-unique-id="ec5bb3c2-876d-415c-a39f-4b7adb00e274" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="530901f2-e2f9-4b9a-96c6-4ae62ea1c40d" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{totalCredit.toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-red-700" data-unique-id="0493c321-23a2-4d55-a379-852daa939677" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="fefd9e06-e212-4f8b-adc3-accff1cb6400" data-file-name="components/accounting/general-ledger.tsx">Total Kredit</span></div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50" data-unique-id="a3548694-b59c-4a71-976a-a61ca2c01ab2" data-file-name="components/accounting/general-ledger.tsx">
                <div className="text-2xl font-bold text-green-600" data-unique-id="02e2b14f-f3de-4ade-8924-61f1448e868c" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7f5510de-dde7-4467-9c6a-e4f6da1872e9" data-file-name="components/accounting/general-ledger.tsx">
                  Rp </span>{Math.abs(selectedAccountData?.balance || 0).toLocaleString('id-ID')}
                </div>
                <div className="text-sm text-green-700" data-unique-id="21dddf16-cc0c-4b5d-a895-0fb964155593" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="903bc27f-0a73-4c0f-869c-a468bd4c904a" data-file-name="components/accounting/general-ledger.tsx">Saldo Akhir</span></div>
              </div>
            </div>

            {/* Ledger Table */}
            <div className="overflow-x-auto" data-unique-id="3e423ecc-2db1-41b6-84a1-02527f683b71" data-file-name="components/accounting/general-ledger.tsx">
              <table className="w-full" data-unique-id="c8fef515-5c75-4d42-ae7f-1124c209fcdf" data-file-name="components/accounting/general-ledger.tsx">
                <thead data-unique-id="d5573da3-25e5-4cdb-ba63-d6326e0a28c8" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-b border-border" data-unique-id="12d0bbe0-5a68-40a9-8203-3ac5be5d281f" data-file-name="components/accounting/general-ledger.tsx">
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="17af5526-a549-4b9f-8723-41cfd695d736" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="bf895a6f-2867-4d1e-acb4-63c124224533" data-file-name="components/accounting/general-ledger.tsx">Tanggal</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="5e4cbf40-fff1-4295-8c8c-dae2015817e3" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="9607a2f0-55da-499a-a569-113887d97830" data-file-name="components/accounting/general-ledger.tsx">Keterangan</span></th>
                    <th className="text-left py-3 px-4 font-medium" data-unique-id="4304f27f-6dab-43c2-aa5a-4619338bb208" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="096bf036-a022-4fe3-9f12-615afe85960a" data-file-name="components/accounting/general-ledger.tsx">Ref</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="677738db-f8a5-42c3-93be-f2ecb441f9cc" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="d689a8f6-6870-478c-a46f-28297777d5c6" data-file-name="components/accounting/general-ledger.tsx">Debit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="efbad030-7e03-4154-8428-7965814f7816" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="dd4e8842-095c-478d-8d30-76739626fce0" data-file-name="components/accounting/general-ledger.tsx">Kredit</span></th>
                    <th className="text-right py-3 px-4 font-medium" data-unique-id="03070341-1c6c-4bad-b85b-cb41c349b1ac" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="a30a3062-5fe0-4ee3-850e-d81507c00550" data-file-name="components/accounting/general-ledger.tsx">Saldo</span></th>
                  </tr>
                </thead>
                <tbody data-unique-id="352ae0fe-e80b-4aa1-9235-23e4a6e89fe0" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                  {filteredEntries.map((entry, index) => <motion.tr key={entry.id} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.05
                }} className="border-b border-border/50 hover:bg-accent/30 transition-colors" data-unique-id="f8ffe898-ac0b-491c-b673-ee0adc93d6a1" data-file-name="components/accounting/general-ledger.tsx">
                      <td className="py-3 px-4" data-unique-id="39d54538-1fb4-408d-aca6-4d27e1aec08a" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.date}</td>
                      <td className="py-3 px-4" data-unique-id="65a32803-3c29-4360-b06d-c014104b9d2f" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.description}</td>
                      <td className="py-3 px-4 text-primary font-medium" data-unique-id="337bac02-a93b-41c9-b0c6-fa005a47e4af" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">{entry.reference}</td>
                      <td className="py-3 px-4 text-right" data-unique-id="d3c81ec4-05a5-4ffa-8a18-8d27d0df1751" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.debit > 0 ? `Rp ${entry.debit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right" data-unique-id="17f0e24c-7f48-410a-b5b3-285a98089e90" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true">
                        {entry.credit > 0 ? `Rp ${entry.credit.toLocaleString('id-ID')}` : '-'}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold" data-unique-id="1b1e446b-9ab4-4813-98d6-654dc9d538d8" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="03a00e3a-fb68-4641-8d5f-9a45585f64cc" data-file-name="components/accounting/general-ledger.tsx">
                        Rp </span>{entry.balance.toLocaleString('id-ID')}
                      </td>
                    </motion.tr>)}
                </tbody>
                <tfoot data-unique-id="a4046f92-f473-40fc-a5e1-6050027abbf5" data-file-name="components/accounting/general-ledger.tsx">
                  <tr className="border-t-2 border-border font-semibold" data-unique-id="de874bf6-cdf2-44bb-8342-cc61919dd62c" data-file-name="components/accounting/general-ledger.tsx">
                    <td colSpan={3} className="py-3 px-4" data-unique-id="0cea878f-8476-4645-a020-80bbf368f14c" data-file-name="components/accounting/general-ledger.tsx"><span className="editable-text" data-unique-id="748acdee-fc8c-4062-8feb-b90756fb6e00" data-file-name="components/accounting/general-ledger.tsx">Total</span></td>
                    <td className="py-3 px-4 text-right" data-unique-id="1b76a451-b829-4d7c-8c3e-1a1a1df86436" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="97e42d8a-1944-4a38-8b06-e381f04a1827" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalDebit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="efc45c13-7554-496f-96df-88b2c6f66b0a" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="18169aae-f279-4d5f-a955-4bf9141d33f0" data-file-name="components/accounting/general-ledger.tsx">Rp </span>{totalCredit.toLocaleString('id-ID')}</td>
                    <td className="py-3 px-4 text-right" data-unique-id="80149d5b-8471-411f-82c1-449727c6de5b" data-file-name="components/accounting/general-ledger.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e63c5824-7cdf-412f-b5cf-8082d2a621d1" data-file-name="components/accounting/general-ledger.tsx">
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