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
    return <div className="p-4 lg:p-8" data-unique-id="057a3544-9560-4733-9167-0157be72b859" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="83d746ed-cabe-4d53-a9b4-2e4abf42bd30" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="de4d29ff-d353-495d-b065-833f9c8e6688" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="3aa8abb2-76b9-44ec-bb8f-7d75bd094451" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="0fb8c2bf-d91c-4fd3-a80a-7fc09d3ebb6a" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="bb33c6d5-adcc-43c0-b09b-cfd228180cbd" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="d2602aff-c787-4d22-aad0-283f334d3201" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="6f3e1cd3-fc96-4d70-b267-1762510ca4a1" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="554929b9-e858-420c-b805-4053242489a1" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="ed1fd05d-d778-4820-a620-edeb2659161d" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="9a9c19e0-2c97-48b9-8ee9-4539d62b5b11" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="114af98e-aeb1-4d4c-a9d0-5ef4ca813578" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="8143ed07-1db4-44f6-99cd-f6df49af32a8" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="a225ed59-cf28-42aa-a7d7-e6f98e4244a6" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="239fdff4-b71d-492e-9190-ab5252459696" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="14bccacf-b4de-4896-b7f3-d877f7b445f0" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="208aff39-f180-4f6c-ac5e-c1b9a1651946" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="1470a1bd-bb82-44d1-a27f-dea4746ddf3d" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="d5262ce3-5b60-4746-bcd7-64b2fdcf95e4" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="8798e1ea-7a4c-463e-9982-a9c607f7bf83" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="6149a4b8-3d73-4203-9ace-16c3c02c6ce5" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="a212cb9d-20a4-4b37-86ad-13c9cec77e82" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="3177db3d-98c5-465b-887f-b70d9d05f4e1" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="18a21079-a3a9-49e9-9a0e-be97a3bca054" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="8458bd53-4731-46e6-98e2-c83abf3aabc2" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e177e8e5-c5b9-43cc-a28f-398e5087ad56" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="b32afc9e-0b94-40f8-bf45-c4d81f0fb459" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="917d1b14-fe18-4434-acc3-9ac323a2c377" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="0a3147b6-3d6e-42a1-9126-e05cafc9e276" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="02fb1368-47f6-4e34-b317-5d154a06139e" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="92c8b75e-02bb-4dcd-9c2d-a29e45f2ae32" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="5ee5b96b-4503-40f8-84e2-c739a9a91bb5" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="92a47d8b-957e-423b-80f2-6ae77efd8e20" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="820a149c-6c65-498e-be2d-d343df3bcf9a" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="daf4c2bd-665e-40d4-b895-8548433b887e" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="66339882-ec0b-4453-b263-2107ec13b8e9" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0ad506b2-5959-4ff2-b31d-666c28ee4c30" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="10d29d67-d2ba-4472-9dd1-55d0f0b5fad7" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="8291b0d6-73d7-464e-a4c1-0b6a5c87e0e7" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="cecb593e-49de-456c-b684-a0707366a199" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="1c1b0100-9d83-4e5c-a8f8-3fd8df7357f0" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="d7058dc9-78a6-48b3-affa-2552f4a4eb0f" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="dc513e20-8357-4516-9e5e-a85c1e6c8065" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="cceee18e-4cfc-4652-9e95-6c39e41f7024" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="12ba86ff-ac3c-445b-bd05-2bff108abbf6" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="8633431b-b1e9-4dd9-ad52-174578323121" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="b7181a8e-0248-454b-b6c5-10e542392f8d" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="58a590ba-5d56-4531-bc77-a3c75178be3a" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="12f5207e-7876-443d-8b7e-d8913dcde257" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="9329ec63-35c3-4d69-bbd4-8bf0b2dc8124" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="df6c0a23-ce88-45be-9b41-bb1c0da4ec47" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="4d34e56a-7220-4766-9148-4a00fd95aaea" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="fff478b9-b5e4-4ee4-87b4-2821138ec8bf" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="934f3d1b-9698-4e62-9622-503b51ed1382" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="89dd7b37-c01b-4d54-87f1-632dbf4cde04" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="dcd929bc-9124-4a29-9e60-fa13339673fe" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="9bf85e95-1cee-4169-8e5f-5de3112f1f48" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ee0b7054-f473-47db-8c0f-272285311526" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="d342ff64-f4f6-4bef-818b-b3c3351dcb98" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="2bc186ec-10df-4097-9d00-d245f815fc97" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="2097fb65-db4a-4950-9f35-e7a9a34d8ae0" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="57c46762-dd0a-4571-95fb-ac0cfccfc1d7" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="0eac4839-1ffb-4cb6-bba4-bf1c81c5f75c" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="3d3e4e95-c289-4c77-896c-bb0064c40a08" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="8b4344d8-5b73-4ad3-89b0-80f4580eee65" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="572a6e09-7811-4942-8d76-0f1d3b801e8e" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="9997494d-c936-4993-baaa-e246fe55a049" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="a0e46918-8244-4910-9424-4a9448114bf3" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="a124cef0-44a8-4818-90c4-953a7de9602b" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="5ddb3342-6234-428c-97db-80296e0584bd" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="867de5d6-efa8-4e6c-912a-5aaabd50f213" data-file-name="components/history.tsx">
                      <div data-unique-id="3e4ff323-cbe1-4826-a2b1-f5343828178a" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="26a68f30-e2e8-4db1-80be-df59a4fc1c3a" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="aec160fd-2135-4aea-bfeb-f2be8c46218b" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="94005d5c-e40f-4bcb-b02f-7cca6fda9123" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="8d8d8ecf-3833-40c4-9748-4fed9ba8e262" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="63f4e320-6b00-4d17-9854-6af0f8fef16c" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="9d03bb04-1453-4815-857e-6bf857d16a68" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="e351a8a7-1562-448f-a970-8eb091df09e3" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="1129dc59-388c-4cd0-9d24-7f4184266e55" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="114a417c-78ab-4b1e-bbbc-5827c5a3951e" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="62221dca-6420-4c76-a6bc-f7970a19faad" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e5625ad2-c612-4967-9665-c517aa1c8366" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="37e5c43b-b503-4b56-a931-51803d297e59" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="3aa37f5d-53d5-4e03-b872-3ad4172a9847" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="74992b96-9b9a-49fc-a955-b1d55afca379" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="c972f9b7-ec95-4f26-a7f4-82dca0a2ec14" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="c6f599f1-dc01-4389-a740-54d98e33b789" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}