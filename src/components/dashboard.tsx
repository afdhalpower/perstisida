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
  
  const { widgets, isCustomizing, setCustomizing } = useWidgetStore();

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
      const todayTransactionsQuery = query(
        collection(db, 'transactions'),
        where('timestamp', '>=', Timestamp.fromDate(todayStart)),
        where('timestamp', '<=', Timestamp.fromDate(todayEnd))
      );
      const todaySnapshot = await getDocs(todayTransactionsQuery);
      
      let todayTransactions = 0;
      let todayProfit = 0;
      
      todaySnapshot.forEach(doc => {
        const data = doc.data();
        todayTransactions++;
        todayProfit += data.profit || 0;
      });

      // Get monthly revenue
      const monthlyTransactionsQuery = query(
        collection(db, 'transactions'),
        where('timestamp', '>=', Timestamp.fromDate(monthStart)),
        where('timestamp', '<=', Timestamp.fromDate(monthEnd))
      );
      const monthlySnapshot = await getDocs(monthlyTransactionsQuery);
      
      let monthlyRevenue = 0;
      monthlySnapshot.forEach(doc => {
        const data = doc.data();
        monthlyRevenue += (data.sellPrice * data.quantity) || 0;
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
    return (
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-effect rounded-2xl p-6 animate-pulse">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-8 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <p className="text-lg text-muted-foreground">
                  {format(new Date(), 'EEEE, dd MMMM yyyy', { locale: id })}
                </p>
              </div>
            </div>
            
            {/* Customization Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCustomizing(!isCustomizing)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                  isCustomizing
                    ? 'gradient-primary text-white shadow-lg'
                    : 'glass-effect border border-border hover:bg-accent/50'
                }`}
              >
                {isCustomizing ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {isCustomizing ? 'Exit Customize' : 'Customize'}
              </button>
              
              <button
                onClick={() => setShowCustomizer(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect border border-border hover:bg-accent/50 transition-all"
              >
                <Settings className="w-4 h-4" />
                Widget Settings
              </button>
            </div>
          </div>
        </motion.div>

        {/* Customization Notice */}
        {isCustomizing && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200"
          >
            <p className="text-blue-800 font-medium">
              🎨 Customization Mode Active - Drag widgets to rearrange, hover to edit or delete
            </p>
          </motion.div>
        )}

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {widgets.map((widget, index) => (
            <DraggableWidget
              key={widget.id}
              widget={widget}
              index={index}
              onEdit={setEditingWidget}
            />
          ))}
        </div>

        {/* Empty State */}
        {widgets.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 glass-effect rounded-2xl"
          >
            <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              No widgets configured
            </h3>
            <p className="text-muted-foreground mb-4">
              Add widgets to customize your dashboard experience
            </p>
            <button
              onClick={() => setShowCustomizer(true)}
              className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Add Your First Widget
            </button>
          </motion.div>
        )}

        {/* Widget Customizer */}
        <WidgetCustomizer
          isOpen={showCustomizer}
          onClose={() => setShowCustomizer(false)}
        />
      </div>
    </DndProvider>
  );
}
