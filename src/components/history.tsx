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
    return <div className="p-4 lg:p-8" data-unique-id="b7a550fc-66f4-4951-acf5-851736f04653" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="7fe18164-c10d-44d4-a720-0dfa868740b9" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="4d6638f6-4f9c-4d95-bf5b-006c899b0c73" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="8c3aaeb2-cfce-4fd3-906b-f9d1e2d7334d" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="bd645462-e268-4c81-a8fb-3204e096274b" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="56c2762f-a9c6-4655-9d23-4e8d4b7cc5c4" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="d93bb949-a377-430c-a51e-97ee1d9d61d4" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="1f129e7d-7947-4359-bfdc-6b0655754052" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="8d2fcb7a-0110-4f63-b290-72f88d6dd685" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="1d95467c-7e84-4bac-b008-3e8564e7ce4e" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="924d7630-390f-40d9-9852-24aadfcfaae5" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="7c0f3dd0-ae4f-4b53-9845-1668a4300d39" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="24cb2f4b-612f-4b1c-b2d4-0b3623d29d09" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="62de4f16-5c51-4db7-b605-a2efee795ada" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="f56d3239-b5e8-4911-9811-1663f0a1a917" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="347db652-1b06-4cd7-89d3-fa889f2d0e49" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="079809a8-1f46-438d-a73c-575ba009fea2" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="f2d771df-b903-49a3-b662-cb8fc52be028" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="c923edc6-e1c8-4683-8918-de4cedbbf824" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="b5c4da0b-ef55-4d23-93ad-ec10c5967a02" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="eb680eff-9fe0-49e4-97a7-b9bdb18bd188" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="4e89b1f6-4cd5-488e-a633-bb82e08b4bfd" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="096f1a97-35ad-406f-a424-3362d838e78c" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="596838a0-cadd-43af-b0eb-4f8836c1a3ad" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="b5201f2f-1541-46c9-83d7-a0faa566fb87" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="88035678-6a87-4029-b6fa-cca1f5a9656d" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="1e57d188-ed60-4d79-aa57-0cffadf66488" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="a3ea05a9-d403-45fd-8d97-c5d8098e7ec8" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="7737f2ff-8bc3-4fb7-a634-fd20bc9161cb" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="edfff570-0a64-45ef-8184-833f2f51c0f8" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="2351640c-1e0c-4d59-acdc-ea2b59f0f774" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="aa20e613-ff92-4214-abb3-d7b936ae485a" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="bdecd8b5-98ad-41e2-b32e-e39fdd4cf078" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="324aa18e-a061-4c01-93b6-ccbe11b65b42" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="95e188bc-35a3-46d1-a56c-448929c6d0ea" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="0eb636fe-8822-4aac-9366-cbaf102798ea" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="fb9cf0bd-b0f6-4e55-b6f0-9551eb79895b" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="2574b79b-59ef-4c01-8f2f-5616a16f728e" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="2d2babc0-c3c7-47ac-9071-d01c84d6e4e1" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="ade29ae9-5b49-428e-919a-4c32db659280" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="af8cd0bb-3d3a-47af-9fd9-21a0727f7bd0" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="b117aa9a-c137-4462-aa50-c7b1587fed7a" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="14d1f07b-387b-4b82-ad1d-24339bc7af7e" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="b7cd2843-849f-4bfc-8f15-acaa17259947" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7e50fd83-c233-45f4-861a-d3bffbcc8ef7" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="ef53891c-ed98-42ad-89e6-947500630c00" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="cabfc2fd-a27d-4296-b564-c157f8b7c704" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="1f560eb8-1053-4c4b-88a1-27e352699c13" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="f0c65f31-55fc-44b6-86b1-205ea6e49f75" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="fd1a529a-810e-4638-a02f-fef06a705d66" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="a1b32de1-109a-4556-9c1e-c80c5bce79cb" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="9f9baa3a-3662-4f2b-a823-b2cd2658505d" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="3977bb20-b27d-4ff3-ae41-f34eacb148ff" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="6d4cd0a7-256a-4b44-8097-bf4930339405" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="7943a43b-159c-4e2d-9133-c0f20d3313a4" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e42cca12-5362-4c13-9e57-706842af0e07" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="9c8acb34-3c6c-469a-840e-3f142f623c0e" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8bfeefa0-0525-457e-8ade-032ede1069d2" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="1b021eb2-7a36-452c-8702-0c202140e2c6" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="4855cb40-b31e-4590-92ee-79e9d4198d93" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="a84f0178-c533-4d81-8aa9-ba9156dc4f8c" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="dc4eab63-55b6-4968-a0c1-2919b254f011" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="0c566bfa-c548-4edb-af85-941d97f5b43d" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="079fce58-9785-4c91-8dee-3a6eec4a078c" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="fc7f4853-2abd-430f-bdee-982badcc9936" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="b44daa6f-91f2-4bc3-9e8e-aa17bb0b5825" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="1452629b-3f46-4800-a344-be4a4f1d647e" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="fabebaab-d1a8-4e47-acbe-fe3a334e80bb" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="4c363dfc-03f0-4e5b-893f-e563d48440ff" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="184bd3ff-dfe1-482d-82c5-aea518407305" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="40842ed1-b404-4d44-ae25-6277e927f9bd" data-file-name="components/history.tsx">
                      <div data-unique-id="5f9accd8-356e-4d3e-8ac2-1ca356e50268" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="a61fc794-5a7c-4ebb-84d2-5302da8ab143" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="116fc79c-1e34-4299-98bc-7015838fe2b6" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="92e0a776-aad2-410b-b916-3bb4154458cb" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="86068fbe-068a-4c4a-8167-93157386b045" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="2cd0b79f-9097-44a1-9cee-5b8b06bfa2a3" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="99a2802c-b5f7-4be7-a5cc-a14eb0f910f1" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="9c8eec3f-8fbc-4e10-bbf9-ab6a18eedcc2" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="973ed60b-3937-480c-8db3-2c5ae3f4c024" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="8e952d55-38d8-4ee0-8785-bd1a157fe382" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="ce008582-25c6-469a-a429-bd1023756852" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="d6e74c14-ff61-4226-a343-4c3bf119786c" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="75bf760b-99e5-4c69-acaa-295b752f9f27" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="550d9187-1ca0-4662-8b64-ab2760ac2c93" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="8c49f717-e82d-4681-94c2-209123b7825e" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="a6bc8f03-413e-4d47-88a7-8238c3269559" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="93fe6db4-ffa6-44aa-af26-bee4c8a0a9ef" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}