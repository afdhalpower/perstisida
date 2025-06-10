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
    return <div className="p-8" data-unique-id="7f76477d-21d5-433c-b56b-83cafe924824" data-file-name="components/dashboard.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="31315fb8-03ab-4d88-b505-f1e4dc0cd380" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse" data-unique-id="fcf0614c-4d17-4f35-8d0b-cc026bc44ed6" data-file-name="components/dashboard.tsx">
              <div className="h-4 bg-muted rounded mb-2" data-unique-id="abe43bea-d451-45c5-96ae-b1706b452ca2" data-file-name="components/dashboard.tsx"></div>
              <div className="h-8 bg-muted rounded mb-2" data-unique-id="be8b1b0a-1059-4bbb-91d7-63fc8b7b99c3" data-file-name="components/dashboard.tsx"></div>
              <div className="h-3 bg-muted rounded w-1/2" data-unique-id="657a221e-55ba-44b7-9fb6-1c0424129963" data-file-name="components/dashboard.tsx"></div>
            </div>)}
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="3449be4c-2e09-4406-bf8a-ae7d7c343588" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="683b5459-bb7f-4399-9ced-a1daf8432bf0" data-file-name="components/dashboard.tsx">
        <div className="flex items-center gap-3 mb-2" data-unique-id="93f9f175-8ac5-4d7f-a3b8-511b96714826" data-file-name="components/dashboard.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="a72f20b6-b99b-43c2-b7e9-33f221de6189" data-file-name="components/dashboard.tsx">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="9ad28764-df03-49d0-beba-d42b2826d436" data-file-name="components/dashboard.tsx">
            <h1 className="text-3xl font-bold" data-unique-id="6fc827c1-b807-41d1-8d65-d9033a958da3" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="ff2706c0-ac7b-49ea-84ff-9a992b35e4fd" data-file-name="components/dashboard.tsx">Dashboard</span></h1>
            <p className="text-muted-foreground" data-unique-id="0c499cb0-9e44-498a-92e3-2c2832abdca8" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
              {format(new Date(), 'EEEE, dd MMMM yyyy', {
              locale: id
            })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="340a7847-106f-4ec1-b6d7-8a92207860d6" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="c3d217e0-e58f-465a-9ffe-042f21fa65e5" data-file-name="components/dashboard.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="14edf96c-4353-4b13-be4c-b4a0925dfed6" data-file-name="components/dashboard.tsx">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="47f0d58d-5ae1-4f1d-b788-4955fbf0473c" data-file-name="components/dashboard.tsx">
                  <Icon className={`w-6 h-6 ${stat.color}`} data-unique-id="c4f1d0de-8ac6-4b07-9ee3-b951a2545eb8" data-file-name="components/dashboard.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg" data-unique-id="868acb58-9825-4353-a354-1cb79ad54292" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                  {stat.change}
                </span>
              </div>
              
              <div data-unique-id="979ab4c9-1649-4f4c-b439-c21a85f9ee86" data-file-name="components/dashboard.tsx">
                <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="2b58bc8c-776a-4b73-a5c8-2b9a0c4e9316" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.value}</h3>
                <p className="text-muted-foreground font-medium" data-unique-id="132e42e6-ed30-4368-b98e-3c36926543ca" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.title}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="23616a4a-132b-420d-a9f4-8ce235d86c6a" data-file-name="components/dashboard.tsx">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="b4edca72-ff77-4755-84bd-0c8653227898" data-file-name="components/dashboard.tsx">
          <Calendar className="w-5 h-5 text-primary" data-unique-id="6c5727db-5845-4085-a69e-3bdb792dd8f2" data-file-name="components/dashboard.tsx" /><span className="editable-text" data-unique-id="2bef365c-cd81-470d-9407-477643eb18c3" data-file-name="components/dashboard.tsx">
          Ringkasan Aktivitas
        </span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="c42c47ab-8d88-4ac7-9d43-c19e1df7d839" data-file-name="components/dashboard.tsx">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" data-unique-id="803855e5-3c6a-4506-8ae4-a5743ec95ea9" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3" data-unique-id="766e1fa7-b9c2-4f73-9b03-88c9183d2f82" data-file-name="components/dashboard.tsx">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-blue-700" data-unique-id="df4ecf69-4b35-47da-97fd-5ac316cc3ec8" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="6cb59083-90a1-4ad3-b010-ac23c0abf048" data-file-name="components/dashboard.tsx">Transaksi Baru</span></h3>
            <p className="text-blue-600 text-sm" data-unique-id="552b4742-7384-48e7-89d1-efb1e3df4262" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="eea6b53d-f0fc-48a4-8507-7bd82ed7d3f8" data-file-name="components/dashboard.tsx">Catat penjualan terbaru</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100" data-unique-id="709f2e09-3c4c-4c10-8d27-c7c77dcdafcf" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3" data-unique-id="1f34ed2f-0c21-4167-9401-163bd9a2f75f" data-file-name="components/dashboard.tsx">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-purple-700" data-unique-id="aa9ad878-9ded-4002-bf7a-07376aa8f226" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="f83aaab2-63af-4343-992f-68d1634c641f" data-file-name="components/dashboard.tsx">Kelola Produk</span></h3>
            <p className="text-purple-600 text-sm" data-unique-id="79610e54-641f-468d-81c0-a578d92a27d7" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="1ab75edd-6c74-40f0-bc96-3e79a360eb44" data-file-name="components/dashboard.tsx">Update stok dan harga</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100" data-unique-id="8234426b-8e26-45af-9c07-62fc4e919855" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3" data-unique-id="a65d1e0d-6a20-4d22-9487-c7a3bfc89fbb" data-file-name="components/dashboard.tsx">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-green-700" data-unique-id="2887e81a-084a-43fd-a7de-bb0f509e7462" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="24f4c37c-31af-4906-ace3-1c0ba885d3c1" data-file-name="components/dashboard.tsx">Laporan</span></h3>
            <p className="text-green-600 text-sm" data-unique-id="a5202f90-db20-44f0-a148-ebd84a553e7e" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="423ecd95-063e-4b4c-a80e-6e3c717b5b6b" data-file-name="components/dashboard.tsx">Analisis penjualan</span></p>
          </div>
        </div>
      </motion.div>
    </div>;
}