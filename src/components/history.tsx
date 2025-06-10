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
    return <div className="p-4 lg:p-8" data-unique-id="8e31f786-e105-441c-818b-9a54ca544bee" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="860e169f-11dd-44c6-9ee0-76df40ca42c8" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="28cb2e1a-e8e0-498d-b7b9-57739fc43d94" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="1aca74a3-496b-49a4-83c5-6eab8870a105" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="2af5b69d-7de9-4bfb-8cb5-3d727efbfe26" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="6b7ec648-93f4-4b85-aeef-1326675a22a8" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="74720100-df28-4ce4-a566-5f7eb4ca584c" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="7a3cacfd-6036-4595-97a1-8d8b2c4555b5" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="75502818-7c11-4ece-a6a7-cc40a242a986" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="51111a75-f66f-428d-8c27-59b6dffaf9fc" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="630a8538-32b2-41db-94d4-670bf29941ed" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="cb195562-54c4-4b1e-9b12-f732a6043e1f" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="d749ba0f-0b9c-4704-85e9-cddf2f471d78" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="9acc2368-13cc-4e20-ac32-dcadd35d9cc8" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="6fe74441-c13c-40c8-93d4-1ee1595d3128" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="818f5ecf-be58-4e6c-84ce-676ba7437e26" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="ff5656f8-730e-4cba-9866-4d03cbdabe7b" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="b2169918-5a74-4713-a5d8-ee748473cedf" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="89b85b3e-a7df-437d-9463-51d76922543c" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="9f1074ea-c52a-4bc4-8501-0df91c89d592" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="1e61641c-b56c-4c74-91bc-b92c440789f3" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="73dbb181-9313-4238-9f46-741e75da5ddd" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="23d2ab1c-0ae8-48b8-8d04-fc40e6efa455" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="a04dbde9-a220-4034-a860-6409f6462708" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="a2080520-9b07-4929-9a12-f6acf4f578a4" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="9d231c17-36fb-42e8-8b36-1e710c04ecf6" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="335e0b72-14bd-49b0-8ff5-ef76563fbdb1" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="894c3071-ddee-4b27-bd04-f00ffce05b1f" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="590dc775-3214-4ac1-86d8-218787521b94" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="e224507c-1337-4153-8c52-5d1839308078" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="e57cff18-8ff6-4d8f-b3d2-698b6eb7bed1" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="5fd0dc2a-7197-4844-98aa-20f35d9f2e6d" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="f8f0e062-9007-4f84-8390-873598beebcc" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="adf963b6-6da5-42cd-bce2-4e585711c6f1" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="8d3758d3-766b-45c3-ad47-e21c06551b7d" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="c6e7912b-2cb4-42e6-ae38-1fc360cd9e45" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c203b66b-92ea-4389-b81d-f9375e6cf8f2" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="b8e0ebbe-e3e1-4dc7-ae24-0480420c62d2" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="06ee2094-13f8-4513-b59e-c07337707a1e" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="95074f9e-a6cc-4bcb-b73b-1b5b5af27b39" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="c138d79f-d78d-4e7f-a42b-6898826b9f6f" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="11b1e0f2-c008-475e-8dc3-16112bc34e29" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e23555bb-acab-47dd-a614-f83a6a61677e" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="cab2e38d-c81f-4c6f-a231-c8b03eac552d" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e78bb69c-cbed-4c18-a80f-b404dab684e1" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="4954a555-fd8a-4bca-b1af-6d02b7abdd8f" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="6b26d59a-0328-48f6-9c54-14f16bdb63fd" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="e14a1221-7f25-4553-a4c9-5502fa993cc9" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="01ec6d36-c8fe-4a86-9a0c-f33c6c42e6ac" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="78703571-7142-4dd0-8580-3ef2c1d55894" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="a07bf89f-38bd-4209-9135-80c21dc361ff" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="c440d843-53ae-4e80-9bbc-b7b2dbb88d8b" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="ece569e5-149f-4c16-a868-8a8e70d196ef" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="a57e2151-1732-401f-b24b-f9dc6cf0c9ac" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="59ecef91-d723-4ba5-acb5-556618843677" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="8bd6b20d-f761-40f9-8fda-f8942b90366e" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="a83f4892-ce9f-40f2-b04b-309a8ec91225" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="961a011a-fa0d-438b-8c65-50d89ff17cf2" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="7efcc6d3-2700-491a-8f95-3ae80dac3cbb" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="72de5440-56b7-4219-9e2d-119f5098dda3" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="559ae593-0f79-4c1e-bac7-e6de6e4bdbe9" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="d43fbae1-a1bd-46e6-a57a-b0e01b3f2137" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="16d90e6e-430f-487b-966d-f798567a0a29" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="2d9ed391-06e4-4c9e-97e4-ca3c0bd8fab1" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="d0ab66d8-8e9a-43be-90d5-6aa1bee439fa" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="de9924cb-7719-4f0f-85b1-bcbb37c8e62c" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="bd176eda-f974-45a2-a844-82124322f44d" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="2aefd747-e199-4b18-9898-a4616de7554b" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="54512ecd-5c0d-4b9f-9e56-fd9fc582402f" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="3bb53842-c999-4f9e-8596-e3ca406df709" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="c010d5b2-ff26-4d98-849d-9c9c5b9cf22b" data-file-name="components/history.tsx">
                      <div data-unique-id="28387cde-e791-46bc-a374-a7fa8e11971b" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="260ed55c-c14d-4309-bf1f-3584b8a887a3" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="1e577dec-d116-404b-b11e-eb1187a73fa7" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="3cb4e88c-2ff7-41f2-afeb-161fb09fb13d" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="ca701df5-c200-4025-9f6c-584a8ead3d6f" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="bca6eeb2-732a-4ac2-9e40-cf78b514e752" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="caa4f0c7-8474-4dcf-84e2-a3d99eaaa685" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="ebb14f84-68d4-4a29-b4d8-01bab0007b88" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f7f16f67-aa16-4123-9321-41deff24825e" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="9e832bad-6616-4dad-96e7-5260338ce04a" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="752462b7-91fa-4019-a8ac-5913d5d78089" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="7fddcb6d-38a4-4064-857c-b5a9998cc6cd" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="80e0ca8e-2abe-4a52-bdb9-53dd7efab96a" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b6af7201-4159-4b66-89d3-e1f8141375e4" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="ced49b2e-6e1a-47d9-9107-5fbf5981a8f7" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="90dee5a2-5e74-4b9f-b1b1-55a4ebe34f24" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="ecfbeaee-6b09-4990-ae1a-0f4416f7d7ad" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}