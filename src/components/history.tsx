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
    return <div className="p-4 lg:p-8" data-unique-id="ec959f15-5d17-4511-9149-209c1e741511" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="00820886-aaa2-46d1-8f1e-fafd0b4eac62" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="38814093-285c-4173-82d1-4eb689f3afca" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="30b5f676-f0b5-4b5c-994c-90562a59161c" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="b1e055bb-8bf2-49d4-aeda-dafe356348b5" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="91dc9bff-7a21-4717-ba16-73d302202437" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="e751ce36-4e10-4b68-a553-318489630d38" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="355e830a-e7e6-41f8-8f09-4e4626a6ed2f" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="65d517b6-da81-4721-81d5-4398529a1878" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="6082f309-59ee-485a-906d-c357cc2b1334" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="bff02bf5-4ea8-46e3-9d6e-e04d838423ec" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="d092b36c-b4eb-4069-8adc-67c56851d851" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="4a0f0903-c795-4fbe-bd9a-2d44daebe32e" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="ebb29f3d-add9-4c29-9078-0c5f3755790c" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="1a89e7a2-5856-4ed8-9fc4-c9b0747d5e83" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="30be5717-1009-4e9d-9241-6cb3ad7729b4" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="48028710-a92a-4491-aeb2-e8d4a4256f56" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="1cf6aea8-27a3-4e45-8daf-331b88c47b58" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="135da484-2152-49e1-be5b-d7c422fe68a0" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="fd44b320-d581-4765-af18-fdb3d91ab950" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="44e9195e-b770-4ef8-8ae3-f95c63e6c77c" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="7a32a9b7-ab17-4d7c-b9a8-83a514f417c8" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="87dbaec2-2682-422a-afe2-7b4eef96662e" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="e98386a2-5752-4c01-9358-5cf8a99e4970" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="2c2a3a16-ec40-49c0-95b9-ab96356a744e" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="30db677e-8bcb-4e53-a63d-ecbb27143f6b" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="9eca690c-d2a5-4a1f-a492-a38540c42a5d" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="32770598-0ea7-4c96-9eac-2648ca898473" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="72fe4acc-1696-4f84-88ed-2c54765287e9" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="494a82d0-1722-4770-a089-ef94a2b1ee00" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="f3f3bf7e-4d3c-4b47-9e48-0775af6213dc" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="2f958139-2a28-48f4-85d6-37503e2d8109" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="737bdfe4-4290-4335-9554-1f0d9b3e57ed" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="451e8f34-5266-4ad2-b1ee-1ecdf40c2565" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="82b05bf9-a3d3-4023-aaf1-fed7616e1198" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="1f46ab1d-fa9a-428f-8da1-07350440b02e" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a3873496-82c7-4d8e-a810-ef7be9c69232" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="5d16c200-a7da-487a-a0b6-715ba605743b" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="919f81d1-70dc-4c41-a2c3-3365e2cebd68" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="be8b873c-5fba-4a5b-adaa-8e57ec528f91" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="04595b1e-289b-449e-b5c7-a750caef0512" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="162638f4-aca5-48d1-8ef6-110e87e19c90" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="69d4c186-41f4-46e2-8950-887ce30cb36c" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="105a8d51-1d45-41a2-9e9c-5b3b5ef721e9" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b3451dae-8511-4a37-9aa1-64df93d748a0" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="464800d8-a6a6-491c-ae1c-83343b083d36" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="d751f246-9b2b-4cac-a310-66da8b984019" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="948a2cd0-ee25-40ef-ac06-14182f88970a" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="99bfd48b-7be5-4d82-a5d2-8435e96085ee" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="67e11af3-83a1-4640-955d-5520f4f5c874" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="baccfb5b-aef2-4d48-9007-194fd0f06c0f" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="68e81b75-70a6-49ff-ab3c-48c2a5f3e9cd" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="012f7ff3-f5ea-4d04-9330-3c908b0ac5c7" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="9b84e7d0-5569-450d-8836-aa322780fcd4" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="413bb32c-b581-41fa-a8c6-6dd68ab68eda" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="a65e3cbd-f5d8-41ef-8c8a-f875966c504b" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="b987ac58-f7f6-4230-9bfc-9082ef1069f6" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0cd06c1f-50a1-46f1-95ae-6c4c6ea3cd55" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="b39a8bd2-a028-4bed-bc34-8ade8dc90be5" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="b890742b-081d-484a-9a90-5551a957597e" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="1815df70-88b6-4675-ae5e-9d2eab2966f1" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="84729e1c-4ad7-4271-931a-f4b6ec3a2ad8" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="6b6a867c-b8e7-469b-9d77-e97fe6cf0b42" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="4fe9a3fc-683b-4f19-99a1-dbfabe3c4890" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="89c070f8-fb10-4f2d-8170-cc305b710a44" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="a89780ad-1af2-4879-b2d8-8514ec38d6d1" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="5a387d75-53b8-4fdf-bfe2-6113e9d86dcd" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="d4c92ea5-2c37-43d7-876c-35f2109b6d69" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="79e74425-3ed9-4429-8e80-3fd19416bf4b" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="2f135ed8-50d7-4eb9-96f0-9612850806bd" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="cd40eeac-85d8-4b80-a9ef-7cab8ebf91c3" data-file-name="components/history.tsx">
                      <div data-unique-id="1ca6a6ce-f0d4-4242-aa12-e54caab4b07b" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="4f3218b6-7873-4ade-a1a0-390b2b955166" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="c5404716-209a-46d6-bfcd-57c7526e64f6" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="ef519c08-5691-41df-8503-0117d653ea18" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="37708bef-329f-4f45-85f2-73080ed164e7" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="34c13eb5-9048-4f2d-b148-44040d6c5a28" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="12457f2d-5bc2-479c-9fbc-4c82e5a4e066" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="f5252ffa-60ce-4b9b-8d0f-8370046585c6" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2387e6d4-6445-4494-a9bd-83cacfb50699" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="e16ebe40-0791-4b13-bde5-8c88114675cd" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="db29339f-4fa8-421d-a657-fde45f4b0bd3" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e5d9f2bb-54ae-487b-bb5f-dd34ddee4206" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="78f1836b-377e-46bf-afa1-0e730bde4da0" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a471b6ac-f58f-493b-a74c-4a335002ffc3" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="33fa3ec8-ee62-4e7c-b001-842d4a50ce77" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="1dd2488b-8482-42e1-8d80-68f65fdd1420" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="b9cb0723-b887-44e4-8d30-9682352fd9c1" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}