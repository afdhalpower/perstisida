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
    return <div className="p-8" data-unique-id="57bdb2a7-1da1-42b0-9e2c-31429449c62e" data-file-name="components/dashboard.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="ee24faf8-317a-4dd9-893c-3d6f289e367d" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse" data-unique-id="4d48ee6e-7302-4212-9e56-2a52426be285" data-file-name="components/dashboard.tsx">
              <div className="h-4 bg-muted rounded mb-2" data-unique-id="c511426c-9d2c-4463-a4dc-d7480e20f859" data-file-name="components/dashboard.tsx"></div>
              <div className="h-8 bg-muted rounded mb-2" data-unique-id="14a3fe57-7e3f-460f-accf-e96f42339d9c" data-file-name="components/dashboard.tsx"></div>
              <div className="h-3 bg-muted rounded w-1/2" data-unique-id="6c68ffcf-c991-4d94-8251-a2113048293e" data-file-name="components/dashboard.tsx"></div>
            </div>)}
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="d7b4dafa-e776-43b6-b843-63c00bddfaa9" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="9deab883-4c5c-4be9-9a6d-b4880544c453" data-file-name="components/dashboard.tsx">
        <div className="flex items-center gap-3 mb-2" data-unique-id="9120a55f-67d4-42c3-8e8a-17dd892aab60" data-file-name="components/dashboard.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="99ccb0f9-2671-4e55-ae6d-da3a586778ca" data-file-name="components/dashboard.tsx">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="217932e3-c953-4317-b399-a3a22d0d46ba" data-file-name="components/dashboard.tsx">
            <h1 className="text-3xl font-bold" data-unique-id="1f2ecfae-23a4-48f4-9908-829a03603298" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="c371eabf-2f57-465e-807d-429d4fbb5170" data-file-name="components/dashboard.tsx">Dashboard</span></h1>
            <p className="text-muted-foreground" data-unique-id="cabacb16-d7e7-47d4-a3ac-0c488f8f786e" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
              {format(new Date(), 'EEEE, dd MMMM yyyy', {
              locale: id
            })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="fa92ef58-b659-4c19-bd65-26a657f68c21" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="5df8238d-53c6-44ad-964a-02e140281a0a" data-file-name="components/dashboard.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="9f42c51f-6625-4b5f-8c4c-6f4919b4a616" data-file-name="components/dashboard.tsx">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="36292e2f-e75f-4304-8c8f-0b9b0f65725c" data-file-name="components/dashboard.tsx">
                  <Icon className={`w-6 h-6 ${stat.color}`} data-unique-id="a7a81427-b830-4b0b-ad3d-6608c42d56a6" data-file-name="components/dashboard.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg" data-unique-id="aabd8591-a1b3-4908-bf57-eaa376f66848" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                  {stat.change}
                </span>
              </div>
              
              <div data-unique-id="622886f4-8777-40c7-b9b5-b07fe30e6230" data-file-name="components/dashboard.tsx">
                <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="33b1ab55-2f7f-4c79-aa49-78cd25687762" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.value}</h3>
                <p className="text-muted-foreground font-medium" data-unique-id="fd2658ba-d359-4517-8df6-aeef6f28647d" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.title}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="2a6ec27e-04e6-4c8c-9c0c-0f5163f70006" data-file-name="components/dashboard.tsx">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="41d95950-2222-4fe2-829b-c7e0ffc6c769" data-file-name="components/dashboard.tsx">
          <Calendar className="w-5 h-5 text-primary" data-unique-id="ef6f7cf7-1b42-4594-867d-3bf30e18bbf2" data-file-name="components/dashboard.tsx" /><span className="editable-text" data-unique-id="98df4201-583c-4bd7-a65a-7930da057f5d" data-file-name="components/dashboard.tsx">
          Ringkasan Aktivitas
        </span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="0cf70e7b-af04-45c9-9e3f-348fb005d2a3" data-file-name="components/dashboard.tsx">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" data-unique-id="10a6767d-89eb-4559-acf5-43c0bdf5af50" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3" data-unique-id="283acf7c-8f46-4a75-8dc0-fa2af76cbc57" data-file-name="components/dashboard.tsx">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-blue-700" data-unique-id="4a1ab078-07a8-4e1b-8108-7e53c2e0d1e7" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="4f49df04-6e8d-4afd-88f0-a12f44d52dac" data-file-name="components/dashboard.tsx">Transaksi Baru</span></h3>
            <p className="text-blue-600 text-sm" data-unique-id="7b242dc0-1568-4310-b292-fd12f13fa519" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="e6cb443d-5ab1-45d4-ade3-d2f08ba5f776" data-file-name="components/dashboard.tsx">Catat penjualan terbaru</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100" data-unique-id="91f40959-626a-4690-8cc3-9a094183ed8c" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3" data-unique-id="ea5413a2-d589-4043-8d6d-639df6eb8728" data-file-name="components/dashboard.tsx">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-purple-700" data-unique-id="7bbceb4f-3c33-4700-8970-64c8b2f02633" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="520322bd-f11a-42a7-96fc-1fb5c9baa3da" data-file-name="components/dashboard.tsx">Kelola Produk</span></h3>
            <p className="text-purple-600 text-sm" data-unique-id="47006317-4023-4963-ab2b-2c147faf76e0" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="0bf780b5-6fcd-452c-970b-d3bcbbf20244" data-file-name="components/dashboard.tsx">Update stok dan harga</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100" data-unique-id="91dfd645-e617-4e22-8d63-1517c87f1e61" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3" data-unique-id="b01075a3-8f2c-4737-b893-d6d5b27e59ab" data-file-name="components/dashboard.tsx">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-green-700" data-unique-id="307c5d04-0568-43fe-9835-125523f5148a" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="22a5e650-270d-4d8f-82f4-66e46d64dbbb" data-file-name="components/dashboard.tsx">Laporan</span></h3>
            <p className="text-green-600 text-sm" data-unique-id="1a665736-f153-4f92-a2c7-e23834b44f4e" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="8de50d54-da54-4e9d-9acc-665f24e0cde1" data-file-name="components/dashboard.tsx">Analisis penjualan</span></p>
          </div>
        </div>
      </motion.div>
    </div>;
}