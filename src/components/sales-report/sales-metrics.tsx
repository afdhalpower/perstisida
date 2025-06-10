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
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="26abdb35-dab7-4dfa-a010-29adf155f2c9" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="8c34e4ca-5b29-4d64-a37b-22475c688d2e" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
            <div className="flex items-start justify-between mb-4" data-unique-id="fb46e2ce-0ca2-4744-abe6-aa84a1c9c5fc" data-file-name="components/sales-report/sales-metrics.tsx">
              <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="1a162f36-d655-4b91-8baf-ea6213999c52" data-file-name="components/sales-report/sales-metrics.tsx">
                <Icon className={`w-6 h-6 ${metric.color}`} data-unique-id="73a46df1-7677-4987-b364-59fb12a0e674" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true" />
              </div>
              <div className={`px-2 py-1 rounded-lg text-xs font-medium ${metric.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="8d80aaec-6017-44e9-8886-012718371896" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.change}
              </div>
            </div>
            
            <div data-unique-id="9e8d314a-b6cc-49a6-a5e6-cc728da8dd9e" data-file-name="components/sales-report/sales-metrics.tsx">
              <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="89410078-6078-467e-85a0-37e0c3301e3f" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.value}
              </h3>
              <p className="text-muted-foreground font-medium" data-unique-id="42655aad-a3e2-41a5-afb7-4214e17a7e0b" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.title}
              </p>
            </div>

            {/* Additional Info */}
            {metric.title === 'Total Revenue' && <div className="mt-3 pt-3 border-t border-border" data-unique-id="5beeb852-cb05-4567-8313-ac181be86aa4" data-file-name="components/sales-report/sales-metrics.tsx">
                <div className="flex justify-between text-sm" data-unique-id="cf48123d-668b-4960-8e64-41c199d45dc6" data-file-name="components/sales-report/sales-metrics.tsx">
                  <span className="text-muted-foreground" data-unique-id="4e2f3bed-fa9f-46fd-9b96-474a02d65261" data-file-name="components/sales-report/sales-metrics.tsx"><span className="editable-text" data-unique-id="615981dd-cb6f-47e7-82fd-00ae8407e942" data-file-name="components/sales-report/sales-metrics.tsx">Profit Margin:</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="8f991db2-1a28-4346-a4a8-055c61e66b3a" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                    {profitMargin.toFixed(1)}<span className="editable-text" data-unique-id="43ef2f14-9c8f-4478-8b16-25a35e07cbad" data-file-name="components/sales-report/sales-metrics.tsx">%
                  </span></span>
                </div>
              </div>}
          </motion.div>;
    })}
    </div>;
}