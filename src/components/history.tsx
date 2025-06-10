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
    return <div className="p-4 lg:p-8" data-unique-id="3e06894c-e78d-4f2a-b16b-740aedd53a5d" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="7964844f-65b8-46a3-9ecf-903e9c3a0492" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="5484befd-c992-41bc-af3b-0d969574f8d2" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="d477d6aa-4db3-41e9-a28d-9a5dc0b9a32b" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="d29c2c93-97f1-4ae1-a0a4-924751927983" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="fee3c1cd-a710-4b1b-93bf-4a879580c257" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="10bd0879-25c8-4187-be3e-5482bf201f4e" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="a40f19f4-c4c8-4789-ae73-eefe9ef76801" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="6f928925-aa33-4e47-83cf-c4bd9805fc39" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="49b9161f-29cf-4049-bfc5-bc5a1c9f0fdd" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="de424ce0-a34e-47ab-ad0d-ced18e145bac" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="aa040ae0-71e3-40b5-bf7f-c2f78f1d6b5b" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="46571731-34f4-43ad-b623-b80d64b1a38d" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="cc17fee6-880c-4794-8453-13bb3e2862eb" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="3520752c-08fe-4ba2-8c91-72fc17a7ffe0" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="15176d3d-2572-4932-af84-afb6004c03fb" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="36c32f6e-c397-4ae6-a6db-7249b5b621a0" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="d3a7831e-d142-49ef-b9a4-5d0dbc7323d9" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="d56e711c-a804-42e3-95f9-0a4585b74da9" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="558c8be7-1ad9-4233-a107-08ba8ce9c510" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="e3adad9e-2e5f-4842-b414-2d434d61a193" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="ad8391f7-92c8-4a2a-ba7d-8c80137c8144" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="e342426b-e086-4120-bbc4-33c17f249b14" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="756afa77-3a36-4a39-beb5-d9ad67132266" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="1695d79d-b11d-4300-b6d5-32b472b15cda" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c29c1559-84fe-458d-8675-f756188c7f6a" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="fad3115f-972a-4ef8-b03d-0a3c61cb5158" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="43e3548f-6d16-4d3d-99ae-994a6f65f481" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="81f31c0f-97f3-46a1-b959-ac5ce21750f7" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="ef2d8eef-8c2a-4793-beab-459895303844" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="a9483537-ceb2-4284-b193-122686a68b2f" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="87405d24-9a63-43ec-a0a7-88bbbb47a56f" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="d62f88b3-802b-4f95-9302-864979fedcfe" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="5fa8e21f-59ff-43e6-934d-e6be287aa64c" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="7e04aa83-69c5-4351-9a47-8b5724bc6c8f" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="beeda857-6d78-4491-b0a7-7679dccbb56f" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="84a6d452-1d5e-40c6-8f36-c7edf6f95eb9" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="d7b9cde3-87f9-4f2c-a778-b5b0e6feacee" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="2b9a5153-ccb1-4f2d-bb22-5ffdc4ea1986" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="4cfbd740-4cca-4010-ae4c-da43454a8a40" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="1d129d21-5492-4603-b3ea-0fb80ad350c8" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="ae9b0dc2-8b55-4b25-b472-05109b34dc3a" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="567bbc8e-bdeb-4310-91ab-da7c037b2ffc" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="658825ce-7958-481e-8871-03788ab40936" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="215df1ce-e74d-4b76-905f-4c5e38505f50" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="9702c8bd-db5b-4b23-82db-358248f10528" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="04705325-635c-4a6d-ab58-bf25486c25f0" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="25aca9cf-c22c-496d-bf4a-0de180ebd4b4" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="3637f652-f1a4-4dd4-890f-d61f3a6d8182" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="a88b2046-85a1-4f2a-9250-838ac00a5a78" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="5b589a2a-c3e2-46e1-8741-2d9d7022fec2" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="3aeb4cd8-c6c1-488d-8251-2b13fbfe9ae9" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="f5d4a6a4-b471-491d-a51f-c86b4bf51c29" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="d8e11bc6-44b6-45cb-9467-c4df05452ab9" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="827c0294-15ae-4540-b2ee-7edcd6482d17" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="abb169e6-9e83-4fef-bb1f-662e4ff7a475" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="ac1421cb-8a0f-46bc-8e73-c1a94afea3a2" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a34eca4e-c4cb-47e2-8d1c-4652bf3c4262" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="9c312520-8b59-48bf-94d9-0db913988344" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="419bc1b3-8a66-453f-97f0-27164ff7c9d8" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="eb6878ae-9d13-45c4-afee-0c39abec380b" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="d6ce996e-0dff-49f5-9717-bdb861b50401" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="040a133a-5539-4291-afdb-6dbe719a40c6" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="db62b86f-0625-4b2f-b50b-6f39e9f2cb7f" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="c922f154-3b8b-40e5-854f-58cba297c272" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="138109f8-eda7-43d4-a7e4-c04f912879e4" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="d23acaae-84cf-4c03-b0fb-83291552b382" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="abea5598-cff7-46ee-8af9-d7690685e1f9" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="83e368bf-a114-4114-95c1-a0fabc689561" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="ff9c154a-54e4-4051-88db-f7bba14fd261" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="645d08d4-d26c-479c-a5fd-3064ceae5f8e" data-file-name="components/history.tsx">
                      <div data-unique-id="eec5203a-1afd-493b-b26c-74688c9a665a" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="cf71ba4c-2f66-488e-a65d-36ef3ef99050" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="f6a62e9c-abe9-4ec9-8bbb-7a2cfca361f6" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="a50702de-cf5f-40aa-a433-1b385f9e3c47" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="9b64654b-c42a-4c9f-92b8-9f9022007199" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="6dfaab75-1907-4f66-a8d6-992ad5f6e87d" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="afe24532-2ddd-4c24-87b6-6ba4501b76fd" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="0ad22264-d5fe-4b1c-a1fa-bf3006bd013c" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b913c4da-522b-4bb2-a1a0-240f253c586b" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="788b2c2b-af38-4fb2-a714-3d71f2e5ab56" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="b0ac039d-bc2f-44a7-aa64-643c8cd60a4e" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="958c1ade-b9af-49fb-89a5-192c4ebb77dd" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="0096a464-12f1-430a-8d79-db939c5cf61c" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="156db1ee-042a-43e6-a48a-9723ce1e559c" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="47675c88-39f3-4fbf-955a-9097a0873daf" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="bba4a440-80b0-495c-855b-9da48dc6caf7" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="a7b555a8-c650-4486-bdf6-9ecff5a4f598" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}