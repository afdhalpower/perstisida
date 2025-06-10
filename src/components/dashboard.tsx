'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { TrendingUp, Package, ShoppingCart, DollarSign, Calendar, Activity } from 'lucide-react';
import { DashboardStats } from '@/types';
import { format, startOfToday, endOfToday, startOfMonth, endOfMonth } from 'date-fns';
import { id } from 'date-fns/locale';
export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    todayTransactions: 0,
    todayProfit: 0,
    totalProducts: 0,
    monthlyRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDashboardStats();
  }, []);
  const fetchDashboardStats = async () => {
    try {
      const today = new Date();
      const todayStart = startOfToday();
      const todayEnd = endOfToday();
      const monthStart = startOfMonth(today);
      const monthEnd = endOfMonth(today);

      // Get today's transactions
      const todayTransactionsQuery = query(collection(db, 'transactions'), where('timestamp', '>=', Timestamp.fromDate(todayStart)), where('timestamp', '<=', Timestamp.fromDate(todayEnd)));
      const todaySnapshot = await getDocs(todayTransactionsQuery);
      let todayTransactions = 0;
      let todayProfit = 0;
      todaySnapshot.forEach(doc => {
        const data = doc.data();
        todayTransactions++;
        todayProfit += data.profit || 0;
      });

      // Get monthly revenue
      const monthlyTransactionsQuery = query(collection(db, 'transactions'), where('timestamp', '>=', Timestamp.fromDate(monthStart)), where('timestamp', '<=', Timestamp.fromDate(monthEnd)));
      const monthlySnapshot = await getDocs(monthlyTransactionsQuery);
      let monthlyRevenue = 0;
      monthlySnapshot.forEach(doc => {
        const data = doc.data();
        monthlyRevenue += data.sellPrice * data.quantity || 0;
      });

      // Get total products
      const productsSnapshot = await getDocs(collection(db, 'products'));
      const totalProducts = productsSnapshot.size;
      setStats({
        todayTransactions,
        todayProfit,
        totalProducts,
        monthlyRevenue
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };
  const statsCards = [{
    title: 'Transaksi Hari Ini',
    value: stats.todayTransactions.toString(),
    icon: ShoppingCart,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    change: '+12%'
  }, {
    title: 'Keuntungan Hari Ini',
    value: `Rp ${stats.todayProfit.toLocaleString('id-ID')}`,
    icon: TrendingUp,
    color: 'text-green-600',
    bg: 'bg-green-50',
    change: '+8%'
  }, {
    title: 'Total Produk',
    value: stats.totalProducts.toString(),
    icon: Package,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    change: '+3'
  }, {
    title: 'Pendapatan Bulan Ini',
    value: `Rp ${stats.monthlyRevenue.toLocaleString('id-ID')}`,
    icon: DollarSign,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    change: '+15%'
  }];
  if (loading) {
    return <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-8 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </div>)}
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold"><span className="editable-text">Dashboard</span></h1>
            <p className="text-muted-foreground">
              {format(new Date(), 'EEEE, dd MMMM yyyy', {
              locale: id
            })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => {
        const Icon = stat.icon;
        return <motion.div key={stat.title} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="glass-effect rounded-2xl p-6 hover-lift group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.title}</p>
              </div>
            </motion.div>;
      })}
      </div>

      {/* Quick Actions */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.5
    }} className="glass-effect rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" /><span className="editable-text">
          Ringkasan Aktivitas
        </span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-blue-700"><span className="editable-text">Transaksi Baru</span></h3>
            <p className="text-blue-600 text-sm"><span className="editable-text">Catat penjualan terbaru</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-purple-700"><span className="editable-text">Kelola Produk</span></h3>
            <p className="text-purple-600 text-sm"><span className="editable-text">Update stok dan harga</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-green-700"><span className="editable-text">Laporan</span></h3>
            <p className="text-green-600 text-sm"><span className="editable-text">Analisis penjualan</span></p>
          </div>
        </div>
      </motion.div>
    </div>;
}