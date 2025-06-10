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
    return <div className="p-4 lg:p-8" data-unique-id="fcb3123e-a7f1-4cac-9a73-925135fcd674" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="cd1caf9d-66ce-4153-9b50-38af30f3ce72" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="877a9b15-9de0-45b2-bf3c-86b2470d2f91" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="26f455f4-a742-4754-9db0-6813f717064b" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="5ab9e637-e49f-45c7-ba78-e4fdce38e4cc" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="28e387dd-0b4c-4c1d-a069-112fdb3a4711" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="87b84c23-dfa1-4d42-8e00-d3639b9e608d" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="a54d9f10-209e-43ee-aafc-3fb589c5a73d" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="2eab0627-123e-4113-8eae-ecd2145c58bc" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="d8b8fcec-b75c-4296-ac71-1ab64edb40b4" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="553cf429-6a25-4f4c-8564-2f5ee1af311e" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="a65f4515-1c75-4429-b04c-6bea384c6f86" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="8c1d7b66-8346-477c-979d-a8c7514a58fa" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="5a6b0aa2-29b1-46ef-aa42-f7026c6777f6" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="cb15328c-ba95-4877-87d4-e80a4833b5fa" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="87d73665-eeb4-4aa5-95c9-215d9410fdb0" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="57fb7523-0e2e-4270-b83d-a1d0f6749619" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="8e329ba8-dd74-46c4-9622-cec7078722c8" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="41b21789-560b-439c-bc6c-367d222d7d87" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="aa853650-1e8b-44c2-9310-b0064436bbcf" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="4e8bbdf4-b3e3-447f-aff9-721e75a08c82" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="ee53c740-3a13-46d5-9c8f-09164ff775c2" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="f59870eb-d168-45c8-bcc7-76d3c87f1f4c" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="c70c445b-ee0b-4ea5-bd0a-c29e9408bfc0" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="b5b7d3a1-7bbe-41a0-b689-0516fe3fd464" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2e37e291-d656-41e1-83d2-88965f946106" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="e1f44e14-790d-4d00-8ec8-56423347ca85" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="2eb2d66e-58c5-45a0-832a-05057aeaf75e" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="a993181f-72f2-49af-bf36-707d84ecd39c" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="362c1b12-4f79-4685-bbed-774b022a9c1b" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="ce84df4f-304b-488e-8d63-1f6604da6de1" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="8f75e66c-3031-4fd5-942b-dfa6e57ddd3d" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="6b976364-de92-4ce1-9de0-3378f300c7e5" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="95cac5ba-7506-49e7-8d9d-f180cb517009" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="44d00414-80d1-4725-9c75-9f0e954ea39e" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="26bdb3dd-4af9-4d3e-ae9b-1de98edfff73" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="12fbd57c-9511-416c-844c-954929674a75" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="534feb55-243b-4fbd-b245-fe5cc0ffb08e" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="db4fd85e-62f3-49db-a152-48abf5925547" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="1f14035a-0475-47f8-8a6b-b525d5067082" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="414c7eb1-2bde-4423-af65-e316ce904181" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="1609b41b-122e-45ea-9752-e4a9ea0c89c7" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="6cec3206-185f-4629-b844-3165b6b33d95" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="7665ee87-560f-4026-9853-2a14987b352c" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f5222dac-cca9-4f01-bfc3-48e655f778e5" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="409c8a35-cfd3-445a-829b-ec4dc4c0308c" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="7aabf6d2-94c4-4317-8949-36820b822f25" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="502f88a4-9aa1-42cf-ada8-3932a5f31fdd" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="4c5b461c-05d8-4c41-8b85-2e5c40c211e8" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="aa5ef2e4-8649-4aa1-8af9-8f3f2de45e13" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="ccd41505-b65b-4e4a-892d-b2fdab935e31" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="e67154b2-3da0-4d69-8a4f-2f82b2a1037d" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="5c1c0984-a984-41e9-9245-c388a82a2dc8" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="b277c549-83f5-422f-be3c-faaff0cc9ab3" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="bcd71bfc-6bfd-442c-aa99-f92e9fdbefda" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="fad0b924-c1d9-48ab-9fcd-c7cc7487b734" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="8a4c0df6-1a85-4274-9a0d-0c82e4fe8e6d" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f401f183-2219-488b-9e2e-3688d766840a" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="901b920f-b00a-4e14-b727-47b9b76892d0" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="372adcc7-9708-4630-96d0-f1a3b6b2f7be" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="884b4609-74cc-4a7e-9930-e4d34bc0fd77" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="1e9f258d-6773-435c-9319-0ad929d4a3d9" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="74edfea2-8af8-45c6-b8e4-bbcb17695abf" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="6f81fc27-ea3c-4209-99ea-8aa53ee81eb3" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="0e125e5d-cc70-4035-902f-c4e927e63fe0" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="0d9a6d78-0238-46dd-af2f-c406dde6cec5" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="4f1b3365-1e41-4d33-834a-97d34347c66a" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="76387f16-ed59-4116-8111-cdf8a37b7eae" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="c3420771-328a-475b-95af-56b1ed9f78cb" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="8d6117ab-9983-4068-adda-484a29242dc7" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="12442761-e680-49a8-91a0-1b3aa213aaba" data-file-name="components/history.tsx">
                      <div data-unique-id="f3290ac0-7f98-4d68-be55-1e1685d9c548" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="549e41f2-80c4-4aa2-b521-1fedddd4c8bd" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="687eb763-64f6-4e35-9a2f-f5e36eb9d20e" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="f7598b3f-1e99-4f18-a99f-ceaf5b4b515b" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="bfa8db62-641f-40ff-8dd9-cae636361850" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="55d47c21-67db-4248-b123-a4ba42f9d1cb" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="39f99205-649b-49e6-986a-848922c9fcad" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="4ac58276-f590-47cd-aac7-63bc1657486c" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e3eba533-382b-454c-b118-ee28495ef458" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="9e1bc7c6-a4b4-4098-a92d-f83a37aa8cb9" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="1ba71cff-e57b-4cbe-b331-163239015ebc" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="227313f0-b833-4afc-8c4d-3d31d3983932" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="c1b04954-7d09-4b01-813d-ea8763d01454" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6f03557a-23f5-428a-92ef-aa65b7df11cb" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="3868e7ee-78e6-41b7-84fd-eb67ad79729c" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="06fbd636-178b-4a92-9341-57467be22f21" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="16aa743d-6263-4704-8859-679e9ee01981" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}