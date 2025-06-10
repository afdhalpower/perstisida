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
    return <div className="p-8" data-unique-id="29164981-3744-4683-811e-4e8a45602134" data-file-name="components/dashboard.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="62ed78b4-4dcb-4eae-aea1-2d8dea7ff26d" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse" data-unique-id="d25ae6e9-e6fa-4d13-9069-ab3c0cf2fb3d" data-file-name="components/dashboard.tsx">
              <div className="h-4 bg-muted rounded mb-2" data-unique-id="b577a42b-1288-4e76-ac35-64a890191e7e" data-file-name="components/dashboard.tsx"></div>
              <div className="h-8 bg-muted rounded mb-2" data-unique-id="9f4c5b8f-6f82-41b5-ac3e-42f9a2406d2f" data-file-name="components/dashboard.tsx"></div>
              <div className="h-3 bg-muted rounded w-1/2" data-unique-id="76074a7d-0514-4f43-878e-143d412b07e8" data-file-name="components/dashboard.tsx"></div>
            </div>)}
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="0e4e656c-f602-4cc1-8cbe-e9e6fbed377d" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="82ea72d0-eb6c-4a37-ac81-5a419934fefc" data-file-name="components/dashboard.tsx">
        <div className="flex items-center gap-3 mb-2" data-unique-id="f4087031-d54b-4d15-b698-d6bb53c3d876" data-file-name="components/dashboard.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="80aa7add-48fb-4738-8a52-c007eb2e9880" data-file-name="components/dashboard.tsx">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="881bdef4-0b1f-44a5-896b-b90c169e48bc" data-file-name="components/dashboard.tsx">
            <h1 className="text-3xl font-bold" data-unique-id="35d44cfb-a3a3-4dc3-b5d8-0a44434e51c4" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="af0074a1-01ba-4c07-b50d-6c1664ae6603" data-file-name="components/dashboard.tsx">Dashboard</span></h1>
            <p className="text-muted-foreground" data-unique-id="04be6750-2735-4596-af87-1090728e10bb" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
              {format(new Date(), 'EEEE, dd MMMM yyyy', {
              locale: id
            })}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="29320694-53bb-4fed-a753-91f2a8ba4d27" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="cfc3ba3e-0317-461c-8372-b27bf0e0c6fd" data-file-name="components/dashboard.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="7f416dc4-44fb-43e2-b3e2-017b22006597" data-file-name="components/dashboard.tsx">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="a28c178d-5ed2-45e6-8bb8-ec840cfc2695" data-file-name="components/dashboard.tsx">
                  <Icon className={`w-6 h-6 ${stat.color}`} data-unique-id="c89a4eff-7080-49f3-bdce-b87603cc94a3" data-file-name="components/dashboard.tsx" data-dynamic-text="true" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg" data-unique-id="b8f78262-df71-4aaf-b28d-ca8e23e9ce32" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                  {stat.change}
                </span>
              </div>
              
              <div data-unique-id="3d82ccbe-42c0-4474-ba04-19da0b120465" data-file-name="components/dashboard.tsx">
                <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="911f45a1-b61f-4db7-bc23-0106fdaebd91" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.value}</h3>
                <p className="text-muted-foreground font-medium" data-unique-id="4a80f6a5-d9dc-420a-9284-c5dc5eac95bc" data-file-name="components/dashboard.tsx" data-dynamic-text="true">{stat.title}</p>
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="13506b7e-208c-47d1-8ced-811413f53f42" data-file-name="components/dashboard.tsx">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" data-unique-id="6dd2af17-4d03-412b-8bc5-18cbdde3de82" data-file-name="components/dashboard.tsx">
          <Calendar className="w-5 h-5 text-primary" data-unique-id="6ab250b5-fe20-4282-89d8-7a80e9599c18" data-file-name="components/dashboard.tsx" /><span className="editable-text" data-unique-id="c6059788-39f2-4367-bbec-118a148403c7" data-file-name="components/dashboard.tsx">
          Ringkasan Aktivitas
        </span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="41285342-4d37-40b0-906f-d96fd90757bc" data-file-name="components/dashboard.tsx">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100" data-unique-id="f2903025-9412-432b-aab2-a0c68516825a" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3" data-unique-id="5be82fd0-1df9-4ac6-a928-72efe98cc8ca" data-file-name="components/dashboard.tsx">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-blue-700" data-unique-id="2aa3f622-4749-4149-8169-e6f7278fc542" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="dc6f0793-9ec4-476e-b9ff-cce7232d3638" data-file-name="components/dashboard.tsx">Transaksi Baru</span></h3>
            <p className="text-blue-600 text-sm" data-unique-id="573021cb-ab1b-4b3e-969b-f4bbef5f96f7" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="f9efab71-822e-4e51-8aca-82dfc641d1db" data-file-name="components/dashboard.tsx">Catat penjualan terbaru</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100" data-unique-id="9b937f0f-66d5-4ce0-b4cd-4d43e83680e2" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3" data-unique-id="766f8b7c-4d81-42c9-b2e1-36e5c32b7550" data-file-name="components/dashboard.tsx">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-purple-700" data-unique-id="de53a8fb-acb4-4a6e-b42f-d203207d55d7" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="6a0ad579-a13d-4b1f-aed5-f2a3b2415b2d" data-file-name="components/dashboard.tsx">Kelola Produk</span></h3>
            <p className="text-purple-600 text-sm" data-unique-id="c34e3781-ca90-4db8-9e93-0f6941c26825" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="1234e70f-4129-4142-9fa5-0e656107f800" data-file-name="components/dashboard.tsx">Update stok dan harga</span></p>
          </div>
          
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100" data-unique-id="5c58b48f-8472-4b72-9e5d-5b4e5a4f2db2" data-file-name="components/dashboard.tsx">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3" data-unique-id="e06703d6-8505-4f10-a3e9-2a67b2b47f86" data-file-name="components/dashboard.tsx">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-green-700" data-unique-id="4eff19c9-04ae-4f6f-86e5-e96f01301be6" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="97bd2737-ddf8-4180-9956-f3e2a6fe596d" data-file-name="components/dashboard.tsx">Laporan</span></h3>
            <p className="text-green-600 text-sm" data-unique-id="67900000-2445-4a85-b9f8-b585cdf5823a" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="ca9be2ea-1ea9-424b-8ad8-6080eb6131e5" data-file-name="components/dashboard.tsx">Analisis penjualan</span></p>
          </div>
        </div>
      </motion.div>
    </div>;
}