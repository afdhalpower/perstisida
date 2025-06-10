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
    return <div className="p-8" data-unique-id="f399b0db-b39f-4d53-8c89-92ac29921409" data-file-name="components/dashboard.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="a1b6b605-eaaf-4ae2-8088-420cdd6ad6cb" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse" data-unique-id="2ac5cecd-a96a-43aa-833d-8a176d6ff63f" data-file-name="components/dashboard.tsx">
              <div className="h-4 bg-muted rounded mb-2" data-unique-id="e38d64b5-c032-481f-b0aa-ca3d51c0d798" data-file-name="components/dashboard.tsx"></div>
              <div className="h-8 bg-muted rounded mb-2" data-unique-id="c8977b27-6827-4022-b32a-2a6850eabaeb" data-file-name="components/dashboard.tsx"></div>
              <div className="h-3 bg-muted rounded w-1/2" data-unique-id="23450e90-2a77-427b-b7aa-3ae551f5d147" data-file-name="components/dashboard.tsx"></div>
            </div>)}
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="646360de-83f3-42a1-9fc1-0d036d04402a" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="e10a0785-9582-445c-859a-fb3a6a4828e8" data-file-name="components/dashboard.tsx">
        <div className="flex items-center gap-3 mb-2" data-unique-id="2821d5ec-dc09-4d83-a9aa-1a3b0de6b4ab" data-file-name="components/dashboard.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="f0362479-3870-4ffc-abe2-0ff6738323bb" data-file-name="components/dashboard.tsx">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="fb6961c9-a9ae-4aeb-8484-9c09ace8e3f0" data-file-name="components/dashboard.tsx">
            <h1 className="text-3xl font-bold" data-unique-id="9aec3ba5-8658-4c49-a346-a74271f0fd3b" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="3d17017a-d598-4d09-972d-108442658061" data-file-name="components/dashboard.tsx">Dashboard</span></h1>
            <p className="text-muted-foreground" data-unique-id="76f5cd2c-bf6f-4297-93a3-d7c05c5a3b76" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
              {format(new Date(), 'EEEE, dd MMMM yyyy', {
              locale: id
            })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="4fd98b72-f257-4234-8eea-44272ea88a3d" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="18ac5b64-726c-497c-8235-30bac94e3965" data-file-name="components/dashboard.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="2b198f37-8a73-41af-b6da-59360aa06989" data-file-name="components/dashboard.tsx">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="7b58544a-ba5b-449e-9cdd-fd3c6e869f4a" data-file-name="components/dashboard.tsx">
                  <Icon className={`w-6 h-6 ${stat.color}`} data-unique-id="abad4e6b-e0de-46c5-9a94-4b6484ba5c6b" data-file-name="components/dashboard.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg" data-unique-id="6855dcb4-2cc2-43f1-99ff-14364998a8ac" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                  {stat.change}
                </span>
              </div>
              
              <div data-unique-id="3dea2cb0-ac79-40ba-9e8b-ce8c70ff0926" data-file-name="components/dashboard.tsx">
                <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="75799f6b-4f2e-44ab-903b-25d7c4f7e96e" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.value}</h3>
                <p className="text-muted-foreground font-medium" data-unique-id="e9f604f0-3ae3-4600-b47f-1c352fff150d" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.title}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="bb4695f2-c55b-45d6-8dbd-8450ebffa8f7" data-file-name="components/dashboard.tsx">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="704aca19-be25-4dde-8d4d-0e7aa89150ea" data-file-name="components/dashboard.tsx">
          <Calendar className="w-5 h-5 text-primary" data-unique-id="722f9b1d-bc3b-4d24-9513-25e71d191cb1" data-file-name="components/dashboard.tsx" /><span className="editable-text" data-unique-id="6ea0e155-322f-42ba-b927-33cffdda12a3" data-file-name="components/dashboard.tsx">
          Ringkasan Aktivitas
        </span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="0c2e8dfa-302e-4cf0-afb6-74495356d846" data-file-name="components/dashboard.tsx">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" data-unique-id="be095dfc-d26f-476d-9d0b-bab5a8ffe2d4" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3" data-unique-id="de70008d-b39c-4a8f-8f09-5372c041e0e3" data-file-name="components/dashboard.tsx">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-blue-700" data-unique-id="c33102e5-3e62-4c0c-b1da-09df7c67d30a" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="4ca84bb3-1a5b-49f8-8b91-bc8abb073c95" data-file-name="components/dashboard.tsx">Transaksi Baru</span></h3>
            <p className="text-blue-600 text-sm" data-unique-id="eec59830-fa20-4ab8-a42c-b5d457fe4aaa" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="9218b9be-92b3-462f-a88c-4bfdc3612ced" data-file-name="components/dashboard.tsx">Catat penjualan terbaru</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100" data-unique-id="ea9ef276-32cd-4627-88d4-d8261e1cb73c" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3" data-unique-id="aa73ca8a-d009-4fb0-8198-b838e372f723" data-file-name="components/dashboard.tsx">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-purple-700" data-unique-id="73ded7be-7a32-4930-b0dc-8180b98b6f68" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="c716e7df-f8e9-4471-bf35-8810a04cbe16" data-file-name="components/dashboard.tsx">Kelola Produk</span></h3>
            <p className="text-purple-600 text-sm" data-unique-id="74d605dd-e3ea-418e-b3cd-ebe339550d96" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="1a162999-26b0-4c0d-b73b-08582ac42fba" data-file-name="components/dashboard.tsx">Update stok dan harga</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100" data-unique-id="9cb953e6-c43a-47cf-8902-b8c410c15562" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3" data-unique-id="40ff2a6f-c1af-40d3-9f1e-c843e9fd06b4" data-file-name="components/dashboard.tsx">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-green-700" data-unique-id="5ea9c9dc-c2ef-4d76-9ce1-ee6eebcbbc3a" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="4352783b-76bb-47c6-a8d8-8b1650601c36" data-file-name="components/dashboard.tsx">Laporan</span></h3>
            <p className="text-green-600 text-sm" data-unique-id="86df2a2e-bdd2-4862-a221-5b6495c9157b" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="e0d0b1e4-3dde-424a-a3de-af2edf52dcb5" data-file-name="components/dashboard.tsx">Analisis penjualan</span></p>
          </div>
        </div>
      </motion.div>
    </div>;
}