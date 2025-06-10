'use client';

import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Activity, Settings, Eye, EyeOff } from 'lucide-react';
import { DashboardStats } from '@/types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useWidgetStore } from '@/stores/widget-store';
import { DraggableWidget } from './dashboard/draggable-widget';
import { WidgetCustomizer } from './dashboard/widget-customizer';
import { Widget } from '@/types/widget';
export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    todayTransactions: 0,
    todayProfit: 0,
    totalProducts: 0,
    monthlyRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [editingWidget, setEditingWidget] = useState<Widget | null>(null);
  const {
    widgets,
    isCustomizing,
    setCustomizing
  } = useWidgetStore();
  useEffect(() => {
    fetchDashboardStats();
  }, []);
  const fetchDashboardStats = async () => {
    try {
      const today = new Date();
      const todayStart = new Date(today.setHours(0, 0, 0, 0));
      const todayEnd = new Date(today.setHours(23, 59, 59, 999));
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

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
  if (loading) {
    return <div className="p-8" data-unique-id="a877c8e2-c324-48e1-bf67-787a533ac128" data-file-name="components/dashboard.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="d0203716-a1f1-4e84-b211-b2ead21e3185" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse" data-unique-id="b5dc19d6-4f24-4ea9-8468-7151decb9316" data-file-name="components/dashboard.tsx">
              <div className="h-4 bg-muted rounded mb-2" data-unique-id="dab2a4b9-7472-43be-b0b7-55d1879824ff" data-file-name="components/dashboard.tsx"></div>
              <div className="h-8 bg-muted rounded mb-2" data-unique-id="5edee2c2-dc75-4350-bc80-ea47967c54e8" data-file-name="components/dashboard.tsx"></div>
              <div className="h-3 bg-muted rounded w-1/2" data-unique-id="00c6da6b-f242-4bf5-8709-66a5af7fd4e3" data-file-name="components/dashboard.tsx"></div>
            </div>)}
        </div>
      </div>;
  }
  return <DndProvider backend={HTML5Backend}>
      <div className="p-4 lg:p-8" data-unique-id="a93b247f-a96e-4d15-8484-35682d257972" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-8" data-unique-id="9083fe1b-3b27-4ee3-ae93-751cce1d0ac3" data-file-name="components/dashboard.tsx">
          <div className="flex items-center justify-between" data-unique-id="9d0e61f7-36a1-482d-ab90-bafead1a22fc" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
            <div className="flex items-center gap-3" data-unique-id="2528c87e-ed32-4d6f-a2a0-c2ac74cee2ba" data-file-name="components/dashboard.tsx">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="12ca8b74-4888-4068-b83b-85899fd3fca8" data-file-name="components/dashboard.tsx">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div data-unique-id="72c854fc-ebf8-4ebe-a130-c2adc6e65b99" data-file-name="components/dashboard.tsx">
                <h1 className="text-4xl font-bold" data-unique-id="5f1a4acf-5e05-47f3-8831-d66088d2464b" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="07009b0f-c9eb-4cfa-b9d5-f71e13196e93" data-file-name="components/dashboard.tsx">Dashboard</span></h1>
                <p className="text-lg text-muted-foreground" data-unique-id="4c6b9268-5919-4692-a857-60b7cb71635a" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                  {format(new Date(), 'EEEE, dd MMMM yyyy', {
                  locale: id
                })}
                </p>
              </div>
            </div>
            
            {/* Customization Controls */}
            <div className="flex items-center gap-3" data-unique-id="542766c2-e6bc-4367-9e4d-9a5c432339e6" data-file-name="components/dashboard.tsx">
              <button onClick={() => setCustomizing(!isCustomizing)} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${isCustomizing ? 'gradient-primary text-white shadow-lg' : 'glass-effect border border-border hover:bg-accent/50'}`} data-unique-id="982fdaed-8b08-41de-b598-52fb90f7eca8" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                {isCustomizing ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {isCustomizing ? 'Exit Customize' : 'Customize'}
              </button>
              
              <button onClick={() => setShowCustomizer(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect border border-border hover:bg-accent/50 transition-all" data-unique-id="a4aa8e86-6b9f-4da8-aec0-afb14cb77c0b" data-file-name="components/dashboard.tsx">
                <Settings className="w-4 h-4" /><span className="editable-text" data-unique-id="b0bcc9b6-7d57-482c-b6ee-63344d831d49" data-file-name="components/dashboard.tsx">
                Widget Settings
              </span></button>
            </div>
          </div>
        </motion.div>

        {/* Customization Notice */}
        {isCustomizing && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200" data-unique-id="01ff7d18-d14d-44bb-955e-0ee6c5b56975" data-file-name="components/dashboard.tsx">
            <p className="text-blue-800 font-medium" data-unique-id="0cb61314-7808-45ac-802b-18f2b53eacd8" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="355869ee-b540-46a2-8863-35664c4cdb0d" data-file-name="components/dashboard.tsx">
              🎨 Customization Mode Active - Drag widgets to rearrange, hover to edit or delete
            </span></p>
          </motion.div>}

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="389c849a-e637-4dd9-9ccc-6be3d7fe9f4f" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {widgets.map((widget, index) => <DraggableWidget key={widget.id} widget={widget} index={index} onEdit={setEditingWidget} data-unique-id="a6fb0665-7410-4eaa-8021-f19e75753dd0" data-file-name="components/dashboard.tsx" data-dynamic-text="true" />)}
        </div>

        {/* Empty State */}
        {widgets.length === 0 && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="text-center py-12 glass-effect rounded-2xl" data-unique-id="ef7fdcde-b433-4760-ab32-6659aa9d3b90" data-file-name="components/dashboard.tsx">
            <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="26bbcb04-b725-4fe8-8ebe-1ffb3c850313" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="700f198c-40a5-49ba-99da-6e82a696d846" data-file-name="components/dashboard.tsx">
              No widgets configured
            </span></h3>
            <p className="text-muted-foreground mb-4" data-unique-id="d4d225cc-86fc-4578-ac85-d6be92aaa89e" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="199795da-d1fa-4f9a-b7c3-64e5ba8ee7a2" data-file-name="components/dashboard.tsx">
              Add widgets to customize your dashboard experience
            </span></p>
            <button onClick={() => setShowCustomizer(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all" data-unique-id="9fcd0350-d6b6-4e54-ae1e-e593bf1c419d" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="1a0e4117-a7d5-4ec2-b187-f601fbd33a7b" data-file-name="components/dashboard.tsx">
              Add Your First Widget
            </span></button>
          </motion.div>}

        {/* Widget Customizer */}
        <WidgetCustomizer isOpen={showCustomizer} onClose={() => setShowCustomizer(false)} />
      </div>
    </DndProvider>;
}