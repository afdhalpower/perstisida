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
    return <div className="p-8" data-unique-id="c6deabaf-7ff6-4237-977c-2b493cd5390c" data-file-name="components/dashboard.tsx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="42f08ec8-006a-46d9-8fd9-4992dec3291c" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {[1, 2, 3, 4].map(i => <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse" data-unique-id="3eade31c-8e08-4325-b96c-5ac21f8d8c66" data-file-name="components/dashboard.tsx">
              <div className="h-4 bg-muted rounded mb-2" data-unique-id="401daa1a-ff47-4987-81ef-d5fac204bb5d" data-file-name="components/dashboard.tsx"></div>
              <div className="h-8 bg-muted rounded mb-2" data-unique-id="5d22741d-efd9-4c7d-ad65-275e7c775fe2" data-file-name="components/dashboard.tsx"></div>
              <div className="h-3 bg-muted rounded w-1/2" data-unique-id="733e1e42-e4fc-4c89-9d97-bfd6c50931e1" data-file-name="components/dashboard.tsx"></div>
            </div>)}
        </div>
      </div>;
  }
  return <DndProvider backend={HTML5Backend}>
      <div className="p-4 lg:p-8" data-unique-id="90d34abb-1404-4bd5-ac24-956913b77236" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-8" data-unique-id="ddc68f96-a1ce-48a0-833d-8a3943a168d2" data-file-name="components/dashboard.tsx">
          <div className="flex items-center justify-between" data-unique-id="c01e5924-e474-48c1-98f8-6d404b9c2a51" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
            <div className="flex items-center gap-3" data-unique-id="304c4035-a4ef-4ae0-bde9-9dec36c0acb7" data-file-name="components/dashboard.tsx">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="d7d8e9a0-6990-4c79-acc6-98d3a36ecbe1" data-file-name="components/dashboard.tsx">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div data-unique-id="a2e95ed6-6773-4cb3-8cd6-24561b1b1ce7" data-file-name="components/dashboard.tsx">
                <h1 className="text-4xl font-bold" data-unique-id="0c041d7c-e4e5-49b0-ab3c-b80e1408a6b8" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="10cf3a5e-b40b-4b15-b947-afd36cb8332d" data-file-name="components/dashboard.tsx">Dashboard</span></h1>
                <p className="text-lg text-muted-foreground" data-unique-id="a1f0d2a2-538a-4a8a-b627-74049c083d3a" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                  {format(new Date(), 'EEEE, dd MMMM yyyy', {
                  locale: id
                })}
                </p>
              </div>
            </div>
            
            {/* Customization Controls */}
            <div className="flex items-center gap-3" data-unique-id="acab8cf1-e494-4568-9fb5-c7ede8818fb3" data-file-name="components/dashboard.tsx">
              <button onClick={() => setCustomizing(!isCustomizing)} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${isCustomizing ? 'gradient-primary text-white shadow-lg' : 'glass-effect border border-border hover:bg-accent/50'}`} data-unique-id="d6e4f0a0-7677-4b9a-b898-623eba258bc2" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
                {isCustomizing ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {isCustomizing ? 'Exit Customize' : 'Customize'}
              </button>
              
              <button onClick={() => setShowCustomizer(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect border border-border hover:bg-accent/50 transition-all" data-unique-id="09d006b7-fbbe-41cf-91b2-d0c69eb804bc" data-file-name="components/dashboard.tsx">
                <Settings className="w-4 h-4" /><span className="editable-text" data-unique-id="ba9ca199-0502-42b4-8431-6bde354461f5" data-file-name="components/dashboard.tsx">
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
      }} className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200" data-unique-id="aa322ba4-e83e-48c9-b686-8e68794c7c4a" data-file-name="components/dashboard.tsx">
            <p className="text-blue-800 font-medium" data-unique-id="0165623e-f19e-4aed-a468-8eff37ccd377" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="496d28af-1b8c-4361-90b0-37361fb5e81d" data-file-name="components/dashboard.tsx">
              🎨 Customization Mode Active - Drag widgets to rearrange, hover to edit or delete
            </span></p>
          </motion.div>}

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-unique-id="71e1aac8-b543-45c6-a264-dc4e427acb44" data-file-name="components/dashboard.tsx" data-dynamic-text="true">
          {widgets.map((widget, index) => <DraggableWidget key={widget.id} widget={widget} index={index} onEdit={setEditingWidget} data-unique-id="eec6bf24-c837-4471-beea-abcc3c7045b3" data-file-name="components/dashboard.tsx" data-dynamic-text="true" />)}
        </div>

        {/* Empty State */}
        {widgets.length === 0 && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="text-center py-12 glass-effect rounded-2xl" data-unique-id="b2068667-88ab-4c8f-9f8f-c79d4e449e4e" data-file-name="components/dashboard.tsx">
            <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="89ab3174-5d1b-4165-a0f3-b231cdcb278c" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="54c66f4d-5e64-4fe8-87a0-e9941aee426d" data-file-name="components/dashboard.tsx">
              No widgets configured
            </span></h3>
            <p className="text-muted-foreground mb-4" data-unique-id="42318e68-22ba-43da-81d8-25f8ee3bb9a6" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="e84031db-1b51-4af1-9f79-9dbc6cba76bd" data-file-name="components/dashboard.tsx">
              Add widgets to customize your dashboard experience
            </span></p>
            <button onClick={() => setShowCustomizer(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all" data-unique-id="e20b3d82-9ba3-4af2-9a46-e062c15843d1" data-file-name="components/dashboard.tsx"><span className="editable-text" data-unique-id="181a7125-8eab-4c57-90a6-a16addc25a1b" data-file-name="components/dashboard.tsx">
              Add Your First Widget
            </span></button>
          </motion.div>}

        {/* Widget Customizer */}
        <WidgetCustomizer isOpen={showCustomizer} onClose={() => setShowCustomizer(false)} />
      </div>
    </DndProvider>;
}