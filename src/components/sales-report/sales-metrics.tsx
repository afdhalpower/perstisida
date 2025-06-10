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
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="72bb07c0-7255-4de5-890c-fc7194b5fc75" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="54e27d5a-ec4c-4803-9c3d-44bd55f031a8" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
            <div className="flex items-start justify-between mb-4" data-unique-id="e9be54dc-1839-465f-b08a-811b21967931" data-file-name="components/sales-report/sales-metrics.tsx">
              <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="81b256d4-e233-4f67-8edb-fb87e6f1144d" data-file-name="components/sales-report/sales-metrics.tsx">
                <Icon className={`w-6 h-6 ${metric.color}`} data-unique-id="8ee754d8-7f77-4071-aaf8-13945c2a6437" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true" />
              </div>
              <div className={`px-2 py-1 rounded-lg text-xs font-medium ${metric.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="147f17c5-2032-4384-a2a7-cdb955100eb1" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.change}
              </div>
            </div>
            
            <div data-unique-id="e058244b-9d99-47ed-9692-b3b16e6f48f7" data-file-name="components/sales-report/sales-metrics.tsx">
              <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="e52ac037-49ff-4d6e-ab0c-85b202b5da52" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.value}
              </h3>
              <p className="text-muted-foreground font-medium" data-unique-id="06d75376-7438-4860-9aca-c87a1063fe42" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.title}
              </p>
            </div>

            {/* Additional Info */}
            {metric.title === 'Total Revenue' && <div className="mt-3 pt-3 border-t border-border" data-unique-id="2b133ea7-cd7b-47f9-ad88-92491e4a1640" data-file-name="components/sales-report/sales-metrics.tsx">
                <div className="flex justify-between text-sm" data-unique-id="b29fdb16-7ca9-4c4c-8b97-2fb0be6787b7" data-file-name="components/sales-report/sales-metrics.tsx">
                  <span className="text-muted-foreground" data-unique-id="da0e9085-562b-4f9e-869d-c4cdda3b19a7" data-file-name="components/sales-report/sales-metrics.tsx"><span className="editable-text" data-unique-id="cec46981-45d6-4589-8aa9-b1a4837624f9" data-file-name="components/sales-report/sales-metrics.tsx">Profit Margin:</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="6078c0e1-0e64-460c-9b46-c64aad630b96" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                    {profitMargin.toFixed(1)}<span className="editable-text" data-unique-id="042783d7-91c4-4bd8-b3fb-082df25fed47" data-file-name="components/sales-report/sales-metrics.tsx">%
                  </span></span>
                </div>
              </div>}
          </motion.div>;
    })}
    </div>;
}