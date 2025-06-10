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
    return <div className="p-4 lg:p-8" data-unique-id="aa2308e9-d2d2-47fd-bbe6-18db18153fe0" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="2890e4d4-40f9-46f4-a3d5-0e8e4e8b364c" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="74509a10-fb07-4670-8fd8-1ea61ea5903a" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="b2291122-a096-4dbe-ad46-dcce9d0e5d49" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="64e5d5bf-f10d-40fa-b7fd-6879ff598437" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="d69f3961-d2d9-44a7-ac5c-9a6d5f0b9751" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="05e612b5-cd11-44e5-b907-23bd6c9746be" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="947e21d4-27e6-4c40-9119-968a9f893d62" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="02d20f9b-ddc0-49e6-9f9c-23090ac6aa57" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="a345b5d1-d3a6-4233-8130-c75cde1415ea" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="5aabb804-1e6e-4827-adc8-a8f83b807938" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="0f2b1580-8f19-486b-9c5e-711b40bf14e2" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="e49ef6c1-6490-4c28-b9d0-8b9cb01a2d46" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="20c79148-5c6b-472c-a1ef-003a1436e133" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="1bed5b09-6977-4f35-8ecd-013ebd14d875" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="fa1fca1b-e859-414e-b6c2-6164a8809f91" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="a6351359-b603-42f1-9861-e16e3ac2c44f" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="cd892966-b758-42b7-bd26-08379fd07cc8" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="bbea8c92-677c-444e-bc74-dc6ab448fd62" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="ae0701e1-2936-4c35-8c05-4a8b1c6aa7ca" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="7b8e48d8-c80f-45fc-a145-fe7000336e02" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="214627d8-fe5c-43ca-95bf-df9e052644a2" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="13d039f3-ce5d-4e05-87a5-d257fc68d5e3" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="e7439531-591e-4c55-966c-0b972874ba78" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="2ab79ca6-5191-45d9-8cf7-543f30fdea85" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="82cde669-fcee-438b-b827-2f2a0c620359" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="7dbd4129-7516-4cc7-8086-3e490337d522" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="44338682-e105-478c-9b04-a27db4b421b4" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="abbebbe8-1e42-4565-83ce-115c19ee9bdf" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="b86036b5-d5f7-4778-9edf-bec9b0854e88" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="763e6494-4f8f-4f6d-9586-6f82631c12c1" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="590f4013-3304-4008-917f-81741a22da10" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="ee9eac90-ed20-4c53-b505-d822f17408c4" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="d5fa668b-823a-426a-8ef9-f0a968014ecc" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="2a23b97b-0e1e-4fbe-a4a0-afa8c7056619" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="6bc00013-d985-4c28-9989-64b459d97652" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="47c18d97-2b49-405f-aeda-9d9af0f663ca" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="f548e1f9-c8a0-4f75-8f02-8f85b5131424" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="9b2b684e-2e53-4857-af84-157c707aa9fe" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="2a8f05ff-55b4-4074-8802-c37dca578078" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="fc58e447-327e-473a-bcdf-783a1d1ec022" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="2f35efbf-61f6-48c5-bbf3-78bcca440359" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="a3e8fa6a-2ec7-430f-8706-7e6dc038be16" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="7933f67f-df82-47dc-a844-b60e4578cbf5" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b911d8d3-0c13-42af-945c-7ff8a9e3f35c" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="531537db-25e4-4a99-a617-5a65a2d23aa5" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="4bcbe922-611d-4641-adcd-4de3dca87521" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="7e4931f6-3c2a-4b62-a52b-3b182d71c6a9" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="c35c8ff5-e13a-49d4-b8b8-3582877d2b69" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="2047e97b-ab85-4cdc-9793-eff991d95ebf" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="c123a4cd-55df-457a-aa40-6210b44e6ece" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="3767d957-291c-44ab-8943-d2dee8b0a369" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="a66312ef-c8d7-4e3d-8fc9-2b313770eecf" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="7409056d-dd86-4669-adad-ce8c8127a8ec" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="b38feb74-1702-4922-aa28-e61259b48cf5" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="a09c893f-97b4-4d7d-bef8-725aed1ee2ae" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="886d1fae-c75b-48b6-baed-04b7f4201c51" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="400a5eb9-8061-4640-9144-fbaeaa911818" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="06962bc0-a37a-4b77-aaf7-e1f4ebdb8906" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="0b1b8cfb-1430-408f-8534-2162e7327640" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="ae8e4fdb-f8c9-4bfd-a872-0d69b117411f" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="a1839368-f5d3-46a3-9b15-ac565a4ba72c" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="d22843d9-1f0b-4685-8128-889c494129f1" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="d8e29dae-1dc6-40c0-b4d2-ef6c093ea637" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="5a5aeb5d-8e70-4a99-8d8f-6a5f1985e688" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="d023081c-2ee8-4469-ad64-9a8fef960424" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="c0eee82e-2a8d-47bb-96aa-cb032a7f4319" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="888d9fc1-d2f5-4077-86ef-cc18176d729f" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="1ce09dfc-3978-4578-b955-8a3b0edec952" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="87efa469-607e-4292-beb3-1c1f4d686d53" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="95eaa27c-9532-4132-b2aa-59b3f8c40ab3" data-file-name="components/history.tsx">
                      <div data-unique-id="592587bd-51b7-4c72-ba98-4023cbfcd83c" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="02fd8cec-e68e-4ee9-8a88-53ae0409e6c7" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="46a70f22-788f-4885-a04a-b10c46982cc6" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="3ea11b79-9c59-45fc-8613-e7b04970dffa" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="a5047ef3-bacb-4278-a771-f2f184cf3c49" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="6fe6fcde-cc2a-4f63-8927-9112390391c7" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="474a9ac1-83ef-44e9-9087-e65729582f23" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="65fd3f40-271c-4596-9056-9a59318e9af7" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="3d62b280-d5a7-4243-9898-b8a6277d49cc" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="1a816606-c850-48d5-9957-b161be98956a" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="e2b9af5f-7996-4aea-84b6-865d7ab9dadd" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="3000c259-6caa-430c-8aae-f326176c8f15" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="5b89d5c6-c1a5-4445-a137-44a111167cf8" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0524b81d-4d50-429a-bb10-1fbf414f1841" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="22bb9a19-83c9-48ca-8fa3-a23d41975d8d" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="b56e6870-3322-47eb-a3c5-b36d16d2dfe5" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="caa2030b-8bbe-4ed1-b4e9-07f86457d336" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}