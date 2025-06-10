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
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="acff60c5-21c2-4ffd-9e45-02d92f56657c" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
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
      }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="8ef31e44-086f-4ae2-b87a-49fdb1b2aa97" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
            <div className="flex items-start justify-between mb-4" data-unique-id="25acd4ba-d5df-48dc-96ac-d1d3c8e791bc" data-file-name="components/sales-report/sales-metrics.tsx">
              <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-unique-id="7b3a5c86-3823-4217-908c-0c8ae51ec9c6" data-file-name="components/sales-report/sales-metrics.tsx">
                <Icon className={`w-6 h-6 ${metric.color}`} data-unique-id="d3eea7a7-e872-49ea-a941-4a6fe9dc524d" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true" />
              </div>
              <div className={`px-2 py-1 rounded-lg text-xs font-medium ${metric.trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`} data-unique-id="ddc44e23-17a2-4f6f-a8ab-68ca4d778f27" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.change}
              </div>
            </div>
            
            <div data-unique-id="ada64c9b-5bd8-465f-99ad-b9e3a066b009" data-file-name="components/sales-report/sales-metrics.tsx">
              <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="69a7c509-6c80-4252-953e-4bf7b568da6d" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.value}
              </h3>
              <p className="text-muted-foreground font-medium" data-unique-id="41cf49ca-d24b-47d2-84b0-ee9d96e2006e" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                {metric.title}
              </p>
            </div>

            {/* Additional Info */}
            {metric.title === 'Total Revenue' && <div className="mt-3 pt-3 border-t border-border" data-unique-id="e4004435-f48d-4b16-b203-9f7a8c920a01" data-file-name="components/sales-report/sales-metrics.tsx">
                <div className="flex justify-between text-sm" data-unique-id="10c6bf0c-077a-4509-8143-9d926c787b8c" data-file-name="components/sales-report/sales-metrics.tsx">
                  <span className="text-muted-foreground" data-unique-id="893934b9-915f-40ed-8d75-b88c0013c5c4" data-file-name="components/sales-report/sales-metrics.tsx"><span className="editable-text" data-unique-id="12eeff3f-f894-490a-9abb-0f2de3b3a2e4" data-file-name="components/sales-report/sales-metrics.tsx">Profit Margin:</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="4d44c2d2-4668-41a6-bffc-3baaf4a087e2" data-file-name="components/sales-report/sales-metrics.tsx" data-dynamic-text="true">
                    {profitMargin.toFixed(1)}<span className="editable-text" data-unique-id="532de2d9-56b0-4d74-be1b-d61462460a80" data-file-name="components/sales-report/sales-metrics.tsx">%
                  </span></span>
                </div>
              </div>}
          </motion.div>;
    })}
    </div>;
}