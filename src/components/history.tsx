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
    return <div className="p-4 lg:p-8" data-unique-id="529df5d0-e946-4ebc-94bc-6501e97a179f" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="53ec61e5-debe-4b18-a5d2-770c2b94e060" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="30177450-3d70-4864-a8da-d6943a394325" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="d5caa4cc-bed4-44ed-bf53-42bcb784ea87" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="5f5db273-2fd3-4564-8e2e-03401a8bc4cd" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="f222e747-d426-415f-8bc4-4addbf1c1319" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="180f1c32-5940-4802-be66-4df41f9892ed" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="ba1b79aa-1674-469d-a556-ac6d57e6f5a2" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="652df1c0-d396-4925-8d01-f8e79cb964c6" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="ff25d736-0226-4f8f-b636-bae3b785ee59" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="b4905eb3-57d3-4e9f-b723-a821fa8e7fc1" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="66c91a19-278e-4908-b013-8ada92e9e036" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="d164358c-c8e5-4244-8ecb-674c0074c85e" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="66b8b18e-d859-41f2-99f5-076aaead7ca2" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="ffd85962-b469-4cf9-8069-adfe4e2341c3" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="877080b8-3fdc-44fb-a059-4d1598ffa0af" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="5a9c7b1e-280c-4a48-88d7-1ad8b3c0ad93" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="94d51b49-67d0-4ac7-88e0-317a83cdb35a" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="8cec9330-99e8-4aac-8ad1-2325bb757267" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="1adf2f68-1c32-4327-a2e0-b2f98cd9a521" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="f9a9d44d-7568-424d-9e72-096f9bb3b287" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="2baf6e2c-f249-45ab-b271-09328734e070" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="e88a2379-5e4f-4e03-a99a-8ba064b51fb4" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="fdeb4275-83c6-4972-8f44-9c6f8491951a" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="87fda398-1e1b-4cf8-a226-8800ccfb24fc" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5fcb1145-5208-42cf-8707-bf6c2b763b45" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="144f6a7d-5bcb-4cd1-8b77-e5b44e448433" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="35133f20-0d90-4f6f-b6ba-b05c7c572456" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="37246da4-e0eb-4b58-9c33-d975b80c3616" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="f0334aa1-6452-4ae2-b8d8-5f53c2d2a5f3" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="10af2348-79a4-4226-9b4d-ada480853eb5" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="b6332aa7-9157-4177-86f4-0ba825f4bad9" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="a67eff4c-0fea-40d5-a052-1db9d92070cf" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="a0afa6ef-04aa-4536-9fff-260af8040d0f" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="530c771f-b2e5-44bc-8f4a-32239962699d" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="0b763445-2530-47fc-a54a-e7865d0cbed0" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="48f6c9f9-0cda-4a31-8dd2-e22318c32770" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="3859ec40-69c1-4a02-a9d2-47cc1326a682" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="8a8421a0-70a5-48aa-b877-e9cb5fb8e43f" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="a98575f0-354c-4427-bd7c-33232cde7841" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="f9358522-0706-4151-b4e0-22166072c03f" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="51f89509-fb54-4671-acf9-9c5a6ccdb6d5" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="307b9cb4-5db9-4a25-9a52-bb1621f756a9" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="8c54b5d2-5f19-41b1-96c5-e8f982cf6513" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d7202daf-5cf3-4e3c-aac0-e80eb8fdbebb" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="bd041fd9-f9bb-4f45-8574-3093eed74034" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="c33960b4-ec41-4cbd-9185-4f11868e4327" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="ab921260-c72d-4cd1-8439-ecfd3e3cb2e9" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="7bece06b-802f-4342-9e48-8c71d8e68595" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="eebd7f48-541c-4a58-9558-154ba9c89e4a" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="3ab9beef-ab24-4a03-a174-1a7e1782b21d" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="0ffa43b7-ac98-4f8b-8479-a8fdf9317ff4" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="fb5c2636-101c-432f-984d-1c1a3d52f368" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="80726175-8e13-45bf-a0bc-85d0fd1ff55a" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="32cf2f5f-2754-4ecf-9c8a-248ed5fc0ab1" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="c9458c81-3b43-4ac0-9e6d-8187e84f0194" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="2a9e1169-8778-41a9-978a-90eef02ed4ec" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="57262af9-796d-4437-8196-2cf83bd619d6" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="40e7d1fe-c6aa-4b13-b4db-48feccd698cc" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="499af121-4e4a-4def-8491-9608b1b1f402" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="108ca016-ce2b-4a37-a8b6-e8f17531b86d" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="32e37250-6ed8-47cf-8169-827bbdbdd4fd" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="540c24e2-2fdd-44e4-9afa-79818336686f" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="4508a95e-8752-4735-ad6a-7665c51ccda5" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="ad01e724-0705-46f2-9a45-1885702c2311" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="e47620e5-51f1-4c5e-a1f2-073fc1481407" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="04339930-d02a-45ac-93ad-5c35ea90f0d8" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="8cad372f-9ce1-48a0-9726-fd3c3e24af53" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="3e0e6a44-38fd-4659-90fd-70dbd86ad3f3" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="4317c1a3-85a6-4400-9b87-42ee240cb724" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="485c26ac-f45c-4cd5-90e6-a797fa3e70ad" data-file-name="components/history.tsx">
                      <div data-unique-id="f60eeb70-85da-41ad-9ca1-b2c47891cbfc" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="805e6836-81aa-46ba-b89d-ac753546d987" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="de1a1c41-d1cb-469a-8568-303f861ce9e6" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="9e97eb69-217b-4f5f-8111-cac2e297a657" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="e5e1506d-fbb7-4da2-bf16-3044b71af926" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="60beffec-7aee-4fc2-b619-d49d2875b46a" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="ca4f9576-61e3-42c4-a003-438ae99b049e" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="e4253497-77ef-42b7-9932-9a5bb363529e" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8e034be6-4a7b-42fa-a407-f851833d94e1" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="8e27c160-a6c1-489e-aa42-601999f99116" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="25095f49-8687-4d75-b96c-690d7e5ed530" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e0b2efcf-81ba-41b5-b1de-c87928b6d10a" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="408ddc60-262d-4839-aca5-8dc733420303" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="064ab848-a7dc-47e5-975e-5a8e5662873f" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="f0c39802-61b9-4738-9466-78e405d851c5" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="95f89ff0-2cbd-4f12-b1a2-d9c0da3c1dce" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="ff886149-838c-4978-8d52-7b884c9b7284" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}