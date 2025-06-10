'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { 
  collection, 
  query, 
  orderBy, 
  getDocs,
  where,
  Timestamp
} from 'firebase/firestore';
import { motion } from 'framer-motion';
import { 
  History as HistoryIcon, 
  Calendar, 
  TrendingUp,
  Package,
  Filter,
  Download
} from 'lucide-react';
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
        const transactionDate = transaction.timestamp.toDate();
        return format(transactionDate, 'yyyy-MM-dd') === filterDate;
      });
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactions);
    }
  }, [filterDate, transactions]);

  const fetchTransactions = async () => {
    try {
      const q = query(
        collection(db, 'transactions'),
        orderBy('timestamp', 'desc')
      );
      
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

  const totalRevenue = filteredTransactions.reduce((sum, t) => sum + (t.sellPrice * t.quantity), 0);
  const totalProfit = filteredTransactions.reduce((sum, t) => sum + t.profit, 0);
  const totalItems = filteredTransactions.reduce((sum, t) => sum + t.quantity, 0);

  if (loading) {
    return (
      <div className="p-4 lg:p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="h-24 bg-muted rounded-2xl"></div>
            ))}
          </div>
          <div className="space-y-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="h-20 bg-muted rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <HistoryIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Riwayat Transaksi</h1>
              <p className="text-muted-foreground">Lihat semua transaksi penjualan</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </motion.button>
          </div>
        </div>

        {/* Filter Notice */}
        {filterDate && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-center gap-2"
          >
            <Filter className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm">
              Menampilkan transaksi tanggal {format(new Date(filterDate), 'dd MMMM yyyy')}
            </span>
            <button
              onClick={() => setFilterDate('')}
              className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Hapus Filter
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-2xl p-6 hover-lift"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Total Pendapatan</h3>
              <p className="text-2xl font-bold text-blue-600">
                Rp {totalRevenue.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-6 hover-lift"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Total Keuntungan</h3>
              <p className="text-2xl font-bold text-green-600">
                Rp {totalProfit.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-2xl p-6 hover-lift"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Total Item Terjual</h3>
              <p className="text-2xl font-bold text-purple-600">
                {totalItems.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transactions List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect rounded-2xl overflow-hidden"
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Daftar Transaksi</h2>
          <p className="text-muted-foreground">Total {filteredTransactions.length} transaksi</p>
        </div>

        <div className="divide-y divide-border">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 hover:bg-accent/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                        <Package className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{transaction.productName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {format(transaction.timestamp, 'dd MMM yyyy, HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Qty</p>
                        <p className="font-semibold">{transaction.quantity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total</p>
                        <p className="font-semibold">
                          Rp {(transaction.sellPrice * transaction.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Laba</p>
                        <p className="font-semibold text-green-600">
                          Rp {transaction.profit.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-12 text-center">
              <HistoryIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 ClassName="text-xl font-semibold text-muted-foreground mb-2">
                {filterDate ? 'Tidak ada transaksi' : 'Belum ada transaksi'}
              </h3>
              <p className="text-muted-foreground">
                {filterDate 
                  ? 'Tidak ada transaksi pada tanggal yang dipilih' 
                  : 'Mulai catat transaksi pertama Anda'
                }
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
