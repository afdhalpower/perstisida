'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Package, Percent, ShoppingCart, Target } from 'lucide-react';
interface SalesData {
  id: string;
  productName: string;
  company: string;
  quantity: number;
  costPrice: number;
  sellPrice: number;
  profit: number;
  timestamp: Date;
  discount?: number;
}
interface SalesMetricsProps {
  data: SalesData[];
}
export function SalesMetrics({
  data
}: SalesMetricsProps) {
  const totalRevenue = data.reduce((sum, item) => sum + item.sellPrice * item.quantity, 0);
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0);
  const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0);
  const totalDiscounts = data.reduce((sum, item) => sum + (item.discount || 0), 0);
  const totalTransactions = data.length;
  const averageOrderValue = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;
  const profitMargin = totalRevenue > 0 ? totalProfit / totalRevenue * 100 : 0;
  const metrics = [{
    title: 'Total Revenue',
    value: `Rp ${totalRevenue.toLocaleString('id-ID')}`,
    icon: DollarSign,
    color: 'text-green-600',
    bg: 'bg-green-50',
    change: '+12.5%',
    trend: 'up'
  }, {
    title: 'Total Profit',
    value: `Rp ${totalProfit.toLocaleString('id-ID')}`,
    icon: TrendingUp,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    change: '+8.3%',
    trend: 'up'
  }, {
    title: 'Items Sold',
    value: totalQuantity.toLocaleString('id-ID'),
    icon: Package,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    change: '+15.2%',
    trend: 'up'
  }, {
    title: 'Total Discounts',
    value: `Rp ${totalDiscounts.toLocaleString('id-ID')}`,
    icon: Percent,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    change: '-5.1%',
    trend: 'down'
  }, {
    title: 'Transactions',
    value: totalTransactions.toLocaleString('id-ID'),
    icon: ShoppingCart,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    change: '+9.8%',
    trend: 'up'
  }, {
    title: 'Avg Order Value',
    value: `Rp ${averageOrderValue.toLocaleString('id-ID')}`,
    icon: Target,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    change: '+3.2%',
    trend: 'up'
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => {
      const Icon = metric.icon;
      return <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="glass-effect rounded-2xl p-6 hover-lift group">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className={`px-2 py-1 rounded-lg text-xs font-medium ${metric.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
                {metric.change}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {metric.value}
              </h3>
              <p className="text-muted-foreground font-medium">
                {metric.title}
              </p>
            </div>

            {/* Additional Info */}
            {metric.title === 'Total Revenue' && <div className="mt-3 pt-3 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground"><span className="editable-text">Profit Margin:</span></span>
                  <span className="font-semibold text-green-600">
                    {profitMargin.toFixed(1)}<span className="editable-text">%
                  </span></span>
                </div>
              </div>}
          </motion.div>;
    })}
    </div>;
}