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
    return <div className="p-8" data-unique-id="b5806c09-9fdc-44b6-a5cb-a3a5d2613977" data-file-name="components/dashboard.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="6bd90d5c-b6a2-4528-8a1a-6a819e8e786e" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse" data-unique-id="4b9ef0e1-dede-4ad1-9a86-9f545d537bde" data-file-name="components/dashboard.tsx">
              <div className="h-4 bg-muted rounded mb-2" data-unique-id="2e6987bc-7731-4b6e-ae20-76b9d14beb75" data-file-name="components/dashboard.tsx"></div>
              <div className="h-8 bg-muted rounded mb-2" data-unique-id="ba353ebc-59f7-412d-9d30-ab73ecac5497" data-file-name="components/dashboard.tsx"></div>
              <div className="h-3 bg-muted rounded w-1/2" data-unique-id="92663b94-c432-4722-8093-2158ccd2d8e4" data-file-name="components/dashboard.tsx"></div>
            </div>)}
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="ce0f8e45-4ded-4643-9988-17a8016e5d48" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="50c23531-e736-459b-beb8-15c87008a628" data-file-name="components/dashboard.tsx">
        <div className="flex items-center gap-3 mb-2" data-unique-id="a9dfed29-27d7-437f-8bda-21928bca71fd" data-file-name="components/dashboard.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="91ee4923-43fe-49a2-a72c-18f8486f7620" data-file-name="components/dashboard.tsx">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="043d139b-e4cd-4877-a99e-779f85a6be53" data-file-name="components/dashboard.tsx">
            <h1 className="text-3xl font-bold" data-unique-id="5843696e-4b2c-415f-9159-2c27bbdbd043" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="a52f4e11-7af7-47cc-b31f-be6530fc8afa" data-file-name="components/dashboard.tsx">Dashboard</span></h1>
            <p className="text-muted-foreground" data-unique-id="684e3a0a-12e7-4b91-bb1f-101fc63ec7f6" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
              {format(new Date(), 'EEEE, dd MMMM yyyy', {
              locale: id
            })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="0f237fda-fc0f-4ca5-b614-3a31f5ab2c7e" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="b6071b1b-3f49-442d-93fb-5c27bd53ef30" data-file-name="components/dashboard.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="596fdb0c-c220-4c1a-af50-3fc9df64daca" data-file-name="components/dashboard.tsx">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="6e52bea7-1ef8-4563-9ef6-70ce0025eb03" data-file-name="components/dashboard.tsx">
                  <Icon className={`w-6 h-6 ${stat.color}`} data-unique-id="08c95b46-ad3d-4825-984d-d321f8df9213" data-file-name="components/dashboard.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg" data-unique-id="2a6ebcc9-45b3-4f21-8e65-daaddc401063" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                  {stat.change}
                </span>
              </div>
              
              <div data-unique-id="95d1f4a4-927b-46bb-9595-fa2719778d22" data-file-name="components/dashboard.tsx">
                <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="661cfb28-d2b9-4f6a-a048-8f3c1e905b8c" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.value}</h3>
                <p className="text-muted-foreground font-medium" data-unique-id="f5c9119f-851b-4c02-83b4-8d20cd90a6a7" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.title}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="de4570f6-b778-4a20-b9f3-d9498862a4a7" data-file-name="components/dashboard.tsx">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="ee7bee0c-3ff6-423f-8334-4139d3202324" data-file-name="components/dashboard.tsx">
          <Calendar className="w-5 h-5 text-primary" data-unique-id="dcf4a069-546f-4edc-8077-7cf30c0c4aa2" data-file-name="components/dashboard.tsx" /><span className="editable-text" data-unique-id="24c7da0b-fb95-45f7-bd55-e711c5958391" data-file-name="components/dashboard.tsx">
          Ringkasan Aktivitas
        </span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="3789eb05-953e-422c-aba4-7f4e145eaa75" data-file-name="components/dashboard.tsx">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" data-unique-id="e3bda645-1c50-4d97-ba43-9a1e84241d86" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3" data-unique-id="3a93e775-cb8f-4f68-939d-858d1de5b271" data-file-name="components/dashboard.tsx">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-blue-700" data-unique-id="29a84add-b518-4721-b338-0b9c90d5782f" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="2dc0940e-8967-444d-8dd8-2d39f61858c7" data-file-name="components/dashboard.tsx">Transaksi Baru</span></h3>
            <p className="text-blue-600 text-sm" data-unique-id="2637ef0f-81d3-499a-95f7-93b4e8fd7dc5" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="4f63b162-9a2b-45aa-8645-12af6bd4e0bb" data-file-name="components/dashboard.tsx">Catat penjualan terbaru</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100" data-unique-id="08e70bfd-0c8d-4f1e-a7de-22326d0068df" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3" data-unique-id="2475b48f-c59d-43ce-b9c5-21a54d175e29" data-file-name="components/dashboard.tsx">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-purple-700" data-unique-id="0b94bd2e-1bdb-457e-a2b6-2b461ac82f93" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="2ffc3609-5d93-4bbd-9f53-9c09c0884cf0" data-file-name="components/dashboard.tsx">Kelola Produk</span></h3>
            <p className="text-purple-600 text-sm" data-unique-id="78c75024-9150-433e-8240-cec0810b7c02" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="d5b40f32-916b-4b7e-be58-0465eb9020c7" data-file-name="components/dashboard.tsx">Update stok dan harga</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100" data-unique-id="306c23b2-a5a9-478d-b8d4-b586eca53d9f" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3" data-unique-id="560f249e-5830-4515-9f36-b53ae3b96a48" data-file-name="components/dashboard.tsx">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-green-700" data-unique-id="8a51716f-222f-4db4-8ffd-a0072df20df2" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="7054a404-6a44-4f0e-a405-f69e019bccfe" data-file-name="components/dashboard.tsx">Laporan</span></h3>
            <p className="text-green-600 text-sm" data-unique-id="9bf13787-3a85-4161-a5de-6c7e9c656ab3" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="895c1483-a875-4b45-9c82-2f381fa25f40" data-file-name="components/dashboard.tsx">Analisis penjualan</span></p>
          </div>
        </div>
      </motion.div>
    </div>;
}