'use client';

import { motion } from 'framer-motion';
import { Building, TrendingUp, Package } from 'lucide-react';
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
interface TopCompaniesProps {
  data: SalesData[];
}
interface CompanySummary {
  company: string;
  totalRevenue: number;
  totalProfit: number;
  totalQuantity: number;
  productCount: number;
  transactionCount: number;
  averageOrderValue: number;
}
export function TopCompanies({
  data
}: TopCompaniesProps) {
  // Aggregate company data with temporary type for Set
  const companySummaries = data.reduce((acc, item) => {
    if (!acc[item.company]) {
      acc[item.company] = {
        company: item.company,
        totalRevenue: 0,
        totalProfit: 0,
        totalQuantity: 0,
        productCount: new Set<string>(),
        transactionCount: 0,
        averageOrderValue: 0
      };
    }
    acc[item.company].totalRevenue += item.sellPrice * item.quantity;
    acc[item.company].totalProfit += item.profit;
    acc[item.company].totalQuantity += item.quantity;
    acc[item.company].productCount.add(item.productName);
    acc[item.company].transactionCount += 1;
    return acc;
  }, {} as Record<string, Omit<CompanySummary, 'productCount'> & {
    productCount: Set<string>;
  }>);
  const topCompanies = Object.values(companySummaries).map(company => ({
    ...company,
    productCount: company.productCount.size,
    averageOrderValue: company.transactionCount > 0 ? company.totalRevenue / company.transactionCount : 0
  })).sort((a, b) => b.totalRevenue - a.totalRevenue).slice(0, 8);
  const maxRevenue = Math.max(...topCompanies.map(c => c.totalRevenue));
  return <motion.div initial={{
    opacity: 0,
    x: 20
  }} animate={{
    opacity: 1,
    x: 0
  }} className="glass-effect rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
          <Building className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold"><span className="editable-text">Top Contributing Companies</span></h2>
          <p className="text-sm text-muted-foreground"><span className="editable-text">Ranked by total revenue</span></p>
        </div>
      </div>

      <div className="space-y-4">
        {topCompanies.map((company, index) => {
        const revenuePercentage = company.totalRevenue / maxRevenue * 100;
        return <motion.div key={company.company} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="p-4 rounded-xl border border-border hover:bg-accent/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-secondary flex items-center justify-center">
                    <span className="text-primary font-bold text-sm"><span className="editable-text">#</span>{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{company.company}</h3>
                    <p className="text-xs text-muted-foreground">
                      {company.productCount}<span className="editable-text"> products • </span>{company.transactionCount}<span className="editable-text"> orders
                    </span></p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600"><span className="editable-text">
                    Rp </span>{company.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground"><span className="editable-text">revenue</span></p>
                </div>
              </div>

              {/* Revenue Bar */}
              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${revenuePercentage}%`
              }} transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.8
              }} className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" />
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center p-2 rounded-lg bg-blue-50">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Package className="w-3 h-3 text-blue-600" />
                    <span className="text-xs text-blue-700"><span className="editable-text">Quantity</span></span>
                  </div>
                  <p className="font-semibold text-blue-600">{company.totalQuantity}</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-purple-50">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-3 h-3 text-purple-600" />
                    <span className="text-xs text-purple-700"><span className="editable-text">Profit</span></span>
                  </div>
                  <p className="font-semibold text-purple-600"><span className="editable-text">
                    Rp </span>{company.totalProfit.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="text-center p-2 rounded-lg bg-orange-50">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-xs text-orange-700"><span className="editable-text">Avg Order</span></span>
                  </div>
                  <p className="font-semibold text-orange-600"><span className="editable-text">
                    Rp </span>{company.averageOrderValue.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </motion.div>;
      })}
      </div>

      {topCompanies.length === 0 && <div className="text-center py-8">
          <Building className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground"><span className="editable-text">No company data available for this date range</span></p>
        </div>}
    </motion.div>;
}