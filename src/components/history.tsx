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
    return <div className="p-4 lg:p-8" data-unique-id="2c344ba4-c5da-4cc2-84b3-1c46e7966946" data-file-name="components/history.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="4b3dadbe-3364-44f9-bc78-0545ed65630e" data-file-name="components/history.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="1dbf186c-526c-46f3-8dc6-be12f92878f3" data-file-name="components/history.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="5864f305-c038-4b95-9018-2de972835c46" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-2xl" data-unique-id="b8743b80-1ff5-4609-8501-b6c70fd148a1" data-file-name="components/history.tsx"></div>)}
          </div>
          <div className="space-y-4" data-unique-id="b5edf2e3-68c9-4e1c-a3a6-302c4b5cde6a" data-file-name="components/history.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-muted rounded-xl" data-unique-id="574a868a-b5d4-418b-9458-60046b44d0a3" data-file-name="components/history.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="6c97252e-dee3-4711-9ee0-6e3e01e11846" data-file-name="components/history.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="661cd961-6907-4eb2-9c2a-a9720621ba1a" data-file-name="components/history.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="e7a685a6-dba8-4052-a7e3-75ca2b6ebeef" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3" data-unique-id="fe546ec0-5464-44f7-9768-10bce29b84a1" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="f48ec492-5bc9-4353-b5c0-78c9a02f2bc4" data-file-name="components/history.tsx">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="80e2b484-b924-473b-b2cc-b53fb23a63ba" data-file-name="components/history.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="52cfab8c-9246-4df8-9106-05f1850a6170" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="e6b9660b-2919-470e-b5cb-45065db90d99" data-file-name="components/history.tsx">Riwayat Transaksi</span></h1>
              <p className="text-muted-foreground" data-unique-id="4493362e-d886-48a1-a45e-23d194c85196" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="d518d398-edbf-42a3-932e-60ee9f732df2" data-file-name="components/history.tsx">Lihat semua transaksi penjualan</span></p>
            </div>
          </div>
          
          <div className="flex items-center gap-3" data-unique-id="a3603454-10b3-4ff0-bc0c-f39128071760" data-file-name="components/history.tsx">
            <div className="relative" data-unique-id="e5524671-4279-42d2-8b9b-81704015a948" data-file-name="components/history.tsx">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" data-unique-id="32207ad4-a537-4c5d-b285-12693bca7386" data-file-name="components/history.tsx" />
              <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="93b76ccd-cb8e-48e8-9411-00577be87dd0" data-file-name="components/history.tsx" />
            </div>
            
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2" data-unique-id="b769b0e0-6720-4a31-9117-3ba6aff09b78" data-file-name="components/history.tsx">
              <Download className="w-4 h-4" /><span className="editable-text" data-unique-id="fbf81e2d-027b-400e-b3d3-e5208db68c75" data-file-name="components/history.tsx">
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
      }} className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2" data-unique-id="5cabe762-e21f-40f5-9e77-bb33658c2a2c" data-file-name="components/history.tsx">
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm" data-unique-id="e1c67bde-d16c-41e8-948b-826388bc2116" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8a6806e5-1ec6-43ca-812e-d4f86c1d27b9" data-file-name="components/history.tsx">
              Menampilkan transaksi tanggal </span>{format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button onClick={() => setFilterDate('')} className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium" data-unique-id="f311eb2f-8cd6-4345-9338-cbaa02a25342" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="1593b004-9a46-4cce-87a9-610cf8e4f727" data-file-name="components/history.tsx">
              Hapus Filter
            </span></button>
          </motion.div>}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-unique-id="58c5307c-dda2-436d-850f-4093e57cf534" data-file-name="components/history.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="3c774f7b-b4da-46a6-a569-bcfd693cef0c" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="f1a427fe-5e24-499a-b7ae-c5db94bb2903" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" data-unique-id="8f687576-12f6-4b8f-b3e5-f475ba0032e6" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div data-unique-id="f1ea452e-ed83-4fdd-830a-b9a9e0ab024d" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="a5f7b220-549d-4df2-8318-274a23c1c3f8" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="7f9be118-e99f-4ab1-8e51-3f55e3154746" data-file-name="components/history.tsx">Total Pendapatan</span></h3>
              <p className="text-2xl font-bold text-blue-600" data-unique-id="98608ebe-a1fa-4789-a67c-0ca86d83e9c4" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f33f0d86-75d6-46a3-b531-80e509904016" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="13d1eaff-2cd3-4a60-820e-411d01af33cd" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="ccb32462-4fc7-49bc-9444-ddc1c5d09da9" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center" data-unique-id="9c46ff45-3639-4396-a280-6c3492d8a479" data-file-name="components/history.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div data-unique-id="310c92bf-44f6-43fa-ad81-d4e7e1c1d043" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="81c4672a-ff7d-42be-a991-500e79e021d0" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="d3ae9b5f-5679-4975-952f-18ecafde12a8" data-file-name="components/history.tsx">Total Keuntungan</span></h3>
              <p className="text-2xl font-bold text-green-600" data-unique-id="f5af01c1-4c4a-4c7b-b748-3bd7d6880d35" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e4d092b2-f4b8-4710-bff0-71d469bcce98" data-file-name="components/history.tsx">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="066a2f3d-4c70-4d78-a23f-4cfd91459a5b" data-file-name="components/history.tsx">
          <div className="flex items-center gap-3 mb-3" data-unique-id="872a8075-1068-44b6-8eec-0e11fe8b12a9" data-file-name="components/history.tsx">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center" data-unique-id="4391f690-b0e8-4b25-8404-dd4ea2b5c963" data-file-name="components/history.tsx">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div data-unique-id="926f6453-b444-45aa-a77a-1a659979ee2d" data-file-name="components/history.tsx">
              <h3 className="font-semibold text-foreground" data-unique-id="f5fcb309-8931-4153-8bac-7c2526a25b92" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="903114c3-2c96-427a-8fca-74a96235ec95" data-file-name="components/history.tsx">Total Item Terjual</span></h3>
              <p className="text-2xl font-bold text-purple-600" data-unique-id="b7e93b61-2192-4ec4-bd97-9175701f36b6" data-file-name="components/history.tsx" data-dynamic-text="true">
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
    }} className="glass-effect rounded-2xl overflow-hidden" data-unique-id="26166cae-83b4-4e2b-b6e2-d20d802121aa" data-file-name="components/history.tsx">
        <div className="p-6 border-b border-border" data-unique-id="909d787c-4c09-41be-aa81-401d5a5095cb" data-file-name="components/history.tsx">
          <h2 className="text-xl font-semibold" data-unique-id="f6575939-a895-4d94-834d-02809683f7a8" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="929c4086-c08d-449b-a7db-a371eed9078a" data-file-name="components/history.tsx">Daftar Transaksi</span></h2>
          <p className="text-muted-foreground" data-unique-id="26f8165e-f3cf-45b1-9b60-9be243a36a02" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="63e85c0e-c4ee-4f5e-be2f-a6d7abff9504" data-file-name="components/history.tsx">Total </span>{filteredTransactions.length}<span className="editable-text" data-unique-id="4dce5d10-25ff-4cad-8ab3-d30fc7cc1223" data-file-name="components/history.tsx"> transaksi</span></p>
        </div>

        <div className="divide-y divide-border" data-unique-id="261048e8-1bf6-4a66-8248-19d947070cb7" data-file-name="components/history.tsx" data-dynamic-text="true">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }} className="p-6 hover:bg-accent/30 transition-colors" data-unique-id="c69f8254-4a10-4e46-9441-40543bc2f27b" data-file-name="components/history.tsx">
                <div className="flex items-center justify-between" data-unique-id="b358c06e-11cb-4b81-8d4c-308f3b50ee6b" data-file-name="components/history.tsx">
                  <div className="flex-1" data-unique-id="b2d28783-3eaf-4bd1-8205-87a0acaa2c4a" data-file-name="components/history.tsx">
                    <div className="flex items-center gap-3 mb-2" data-unique-id="977724ae-4ea7-455a-b53c-498be0a2d5b2" data-file-name="components/history.tsx">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="6434939c-a92f-45fd-97f3-0f2ca0301225" data-file-name="components/history.tsx">
                        <Package className="w-4 h-4 text-white" data-unique-id="3ad86b6f-9961-4688-a92b-995df547c6f9" data-file-name="components/history.tsx" data-dynamic-text="true" />
                      </div>
                      <div data-unique-id="28d45675-a97d-4d52-9284-1b0d50724496" data-file-name="components/history.tsx">
                        <h3 className="font-semibold text-foreground" data-unique-id="68264a77-5c43-4d5f-aa8e-f687f921ba7c" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="ad346f46-5d07-49b1-b2c5-edd6398fbb2b" data-file-name="components/history.tsx" data-dynamic-text="true">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right" data-unique-id="da489a15-eb5f-43ae-9513-6494e0100e80" data-file-name="components/history.tsx">
                    <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="eea6c4fd-938e-4097-a5ff-8a694c8f09ea" data-file-name="components/history.tsx">
                      <div data-unique-id="46425cc5-6984-46cf-8ab3-cc125f8e6f5d" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="217fe89d-e9d5-41b7-92ad-db69553909e0" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="efd81dff-97fd-480f-9d85-9dde6575e8f8" data-file-name="components/history.tsx">Qty</span></p>
                        <p className="font-semibold" data-unique-id="2c9482cc-ff84-4973-989e-76fcd33225df" data-file-name="components/history.tsx" data-dynamic-text="true">{transaction.quantity}</p>
                      </div>
                      <div data-unique-id="a0a4ad43-6ace-4787-b9a5-1e66a74fa5fa" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="94947623-7301-478f-b359-1ae64d6722d6" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="71d20537-35c2-46d8-8211-e9ce79bd4b27" data-file-name="components/history.tsx">Total</span></p>
                        <p className="font-semibold" data-unique-id="60089d2c-79b3-4b48-af1c-786c7616d0cc" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0b6901b2-33c8-4f42-a0e4-1db410663ab2" data-file-name="components/history.tsx">
                          Rp </span>{(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div data-unique-id="cd2c8016-dd16-495f-b3c8-8083c7e84af6" data-file-name="components/history.tsx">
                        <p className="text-muted-foreground" data-unique-id="8140efa0-de75-4c60-8f58-9d0de38f96bf" data-file-name="components/history.tsx"><span className="editable-text" data-unique-id="82eb9364-f125-498a-a309-0fb857110b8f" data-file-name="components/history.tsx">Laba</span></p>
                        <p className="font-semibold text-green-600" data-unique-id="529a4a99-42f0-4a3d-8ffe-ded34a8b766a" data-file-name="components/history.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a37a552f-57b5-410b-952c-f8da82f17726" data-file-name="components/history.tsx">
                          Rp </span>{transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>) : <div className="p-12 text-center" data-unique-id="fa678f70-6a8e-4624-bfaf-bc82c3073500" data-file-name="components/history.tsx">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="f931bad9-b9b0-43cf-a73f-5571c8f4f2c4" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground" data-unique-id="c8be437b-8be9-45df-8829-5d268d843b2c" data-file-name="components/history.tsx" data-dynamic-text="true">
                {filterDate ? 'Tidak ada transaksi pada tanggal yang dipilih' : 'Mulai catat transaksi pertama Anda'}
              </p>
            </div>}
        </div>
      </motion.div>
    </div>;
}