'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs, where, Timestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { History as HistoryIcon, Calendar, TrendingUp, Package, Filter, Download } from 'lucide-react';
import { Transaction } from '@/types';
import { format, startOfDay, endOfDay } from 'date-fns';
export function History() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    fetchTransactions();
  }, []);
  useEffect(() => {
    if (filterDate) {
      const filterDateObj = new Date(filterDate);
      const filtered = transactions.filter(transaction => {
        const transactionDate = transaction.timestamp;
        return format(transactionDate, 'yyyy-MM-dd') === filterDate;
      });
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactions);
    }
  }, [filterDate, transactions]);
  const fetchTransactions = async () => {
    try {
      const q = query(collection(db, 'transactions'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      const transactionsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate()
      })) as Transaction[];
      setTransactions(transactionsData);
      setFilteredTransactions(transactionsData);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };
  const totalRevenue = filteredTransactions.reduce((sum, t) => sum + t.sellPrice * t.quantity, 0);
  const totalProfit = filteredTransactions.reduce((sum, t) => sum + t.profit, 0);
  const totalItems = filteredTransactions.reduce((sum, t) => sum + t.quantity, 0);
  if (loading) {
    return <div className="p-4 lg:p-8" data-unique-id="2727b379-65b6-42c5-b74f-c3e97098cde5" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="ab1453d6-c87b-48c2-bc84-2824a588722c" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="8adb7ec6-1d1f-4f9e-8f7f-f5610437ae92" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="80fca386-731c-4b16-8175-7aa0c21d1cde" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="7a34543a-4e64-49f4-b6d2-e5fe30fded2e" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="f65973aa-6b8e-46ab-b8ea-2f1d81c93e0e" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="b0a556d1-5b5c-4744-85a9-441816df7462" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="4dce81cb-261b-4afd-b600-b72818604a15" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="ba26beab-f0d9-4332-988b-84277a631805" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="50fbc7cd-c366-42a9-b699-c20443f0bdc8" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="72c6c6ce-be47-4a50-84f6-fca7c3d44bca" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="1c8b8d8c-e8d3-4379-b642-e96b74e314f7" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="6920cee5-d7eb-47cf-9073-f6e82297a55e" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="308d0360-695f-4e00-9d02-e863c396910f" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="4b469b1a-6e58-4ff2-9b67-a707ff3b4f5c" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="407076a6-3204-4535-9451-6ad68c745a67" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="edc33a34-14cb-4bc6-bd60-041869a68767" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="89de9b3f-a5dd-46ee-adf9-795191ac30e6" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="899336e7-49ad-4119-abde-dbfbb1349f57" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="bf707855-6fd8-40df-8123-58831ea01023" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="44925cdd-56bc-4cfb-b52f-eeff8a533002" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="43035737-0075-4a22-afdb-6db4c4262eb7" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="06538fbf-8d7f-4a01-a646-3f0edad23ec4" data-file-name="components/history.tsx">
              Export
            </span></motion.button>
          </div>
        </div>

        {/* Filter Notice */}
        {filterDate && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="2cec715d-679e-4107-bb1a-e5a18e9e0c41" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="26582708-47c3-445a-b6a3-1ddc20cbfb53" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="64597003-59b2-4b47-8108-6fbd3dc5b28c" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="67663a90-39d3-4bf3-97dc-6855a211aa15" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="2204a8b2-5571-4cad-a522-b38fc3567194" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="8a891bed-23db-492e-8fdf-5313eb481731" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="f6f9e924-a42a-4192-9f02-bc0b433e540c" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="35d0cad5-bb87-4019-beef-d152c0b685d0" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="7575bd37-649e-48fd-8960-9553e05753e4" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="be8c8f45-5615-474d-b320-b8107dd4b9e4" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="882659bb-6cf2-4490-8994-661863b6f1f1" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="09a35b4a-6e35-483c-a15c-3b1b32fc5920" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="55bcfb0e-d3a3-43b2-b4bc-85a740681d19" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="206cf2a1-229a-46be-b9fd-6ddd10a3a1bf" data-file-name="components/history.tsx">
                Rp </span>{totalRevenue.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="85a9356b-7a0a-47f6-b5d3-2c01e0acdca6" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="10bf7fa7-236b-4d5e-a83d-b406707ac3c6" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="e7417f1a-d67e-464f-94db-12da37fe488d" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="c9ab7307-e1a2-445b-9aab-5a67c6cf8138" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="d262575e-4447-46e9-9f7e-be11480cebf8" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e7cdf66b-31ab-4b98-8249-98ded2ec942c" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="1ac52b3a-7da4-4f73-9458-2838d9747338" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a6e0c3ce-b6fa-45ce-ade2-9c4b141356e4" data-file-name="components/history.tsx">
                Rp </span>{totalProfit.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="78656b38-8b4e-4899-a05e-359a082bcdd8" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="6a261591-f473-4931-9ed6-0e66019c90d0" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="f7afac40-0590-4dea-bc1a-c288d4b6d644" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="2da58ef4-dc99-4831-8e6a-715970b1cf73" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="101d31bb-d0fd-4d10-b384-502f177d8f5f" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e38866de-6e67-4b59-801b-8b108db63f43" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="1d2208a2-357b-419a-8516-6f424de63634" data-file-name="components/history.tsx" data-dynamic-text="true">
                {totalItems.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transactions List */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="0a0fa8bf-3c28-415b-a6f2-81ded80accc9" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="fda34f4f-cc10-4b50-b616-df659aa40501" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="eeaa9fca-cacf-42ac-8137-5b66904c17ae" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="d03e4867-1bbb-4cd6-9bcf-5462706738e2" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="eea0549b-6bd2-45d8-ad5a-702876fe939d" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c200e45b-344d-411a-92a5-2dcd32e9a3a2" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="176a4858-3722-4f63-a4f3-c1cfcc7e6970" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="26043874-dc8f-451b-885e-2a46812e99f5" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="2ec45410-ba56-4e6e-9dc9-62680e976536" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="d82fcd95-ae02-432f-a400-221bb1a5701e" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="3ba66e99-e57e-46a3-89ed-21737a6bc74c" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="767aee51-67b4-4f94-a5fa-be88bdb691d5" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="9d3b295c-93a8-44c5-abf3-4a441c9922e8" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="a387f317-5025-4e73-b5ec-fe329ee99444" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="1a226aa4-90cd-4732-b2c9-6ec390a55e42" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="891c7570-a152-4cf4-9cce-95aceda76cea" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="fb48c66d-4fbd-42e2-8b47-f222e3bae9d1" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="5099ffb3-6d28-489b-a333-e37c70fe66f5" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="edaf0fd3-1065-485d-8002-5ac2ae875471" data-file-name="components/history.tsx">
                      <div data-unique-id="3dbbd0b4-48f4-466c-b0cf-b30f87964679" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="9c25ee39-741c-4425-8531-aea32b55edb1" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="edda609c-247d-40af-8424-0a2875ad48c8" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="83c9c549-976c-472f-b603-d62d16ee6b0f" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="65634b51-8031-497a-ba42-5564831310ac" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="f677e07f-c222-4460-a3f0-9dc2dc59160e" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="61965b85-97ef-4580-88f8-f792ddb6b03f" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="0ee93f14-9f8a-46ec-af84-3211ddaf817f" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c4073de5-3ae9-4dae-8e75-13fbbf600d6c" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="47692438-1c2a-4530-b338-e04a2cd57150" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="2cc65aff-3756-44df-8929-191df9d9a366" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="b95abdc7-4e92-4c4d-b43f-6b53618e4dde" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="41b47060-65fc-46e8-a0e8-3815445b07ff" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="71c1ff25-96d3-4184-85de-f5e8b96e5898" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="41c4fb03-84d8-4d18-8979-dd8d50a0afb2" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="88077b24-97ee-4d70-a227-bbe13f1704ae" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="42944a0f-04b9-43fc-8860-52c020577aa7" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}