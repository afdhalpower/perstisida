'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Calendar, Download, TrendingUp, Package, Building } from 'lucide-react';
import { DateRangeFilter } from './sales-report/date-range-filter';
import { SalesMetrics } from './sales-report/sales-metrics';
import { TopProducts } from './sales-report/top-products';
import { TopCompanies } from './sales-report/top-companies';
import { SalesCharts } from './sales-report/sales-charts';
import { ExportOptions } from './sales-report/export-options';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { startOfDay, endOfDay, subDays, format } from 'date-fns';
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
interface DateRange {
  startDate: Date;
  endDate: Date;
}
export function SalesReport() {
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [filteredData, setFilteredData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: subDays(new Date(), 30),
    endDate: new Date()
  });
  useEffect(() => {
    fetchSalesData();
  }, []);
  useEffect(() => {
    filterDataByDateRange();
  }, [salesData, dateRange]);
  const fetchSalesData = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, 'transactions'));
      const transactions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate(),
        discount: doc.data().discount || 0
      })) as SalesData[];
      setSalesData(transactions);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    } finally {
      setLoading(false);
    }
  };
  const filterDataByDateRange = () => {
    const filtered = salesData.filter(item => {
      const itemDate = item.timestamp;
      return itemDate >= startOfDay(dateRange.startDate) && itemDate <= endOfDay(dateRange.endDate);
    });
    setFilteredData(filtered);
  };
  const handleDateRangeChange = (newRange: DateRange) => {
    setDateRange(newRange);
  };
  if (loading) {
    return <div className="p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-muted rounded-2xl"></div>)}
          </div>
          <div className="h-96 bg-muted rounded-2xl"></div>
        </div>
      </div>;
  }
  return <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground"><span className="editable-text">
              Sales Report Dashboard
            </span></h1>
            <p className="text-lg text-muted-foreground"><span className="editable-text">
              Comprehensive sales analysis and insights
            </span></p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <DateRangeFilter dateRange={dateRange} onDateRangeChange={handleDateRangeChange} />
          <ExportOptions data={filteredData} dateRange={dateRange} />
        </div>
      </motion.div>

      {/* Date Range Display */}
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.1
    }} className="glass-effect rounded-2xl p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span><span className="editable-text">
            Showing data from </span>{format(dateRange.startDate, 'MMM dd, yyyy')}<span className="editable-text"> to </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
          </span>
          <span className="ml-4 font-medium text-primary">
            {filteredData.length}<span className="editable-text"> transactions
          </span></span>
        </div>
      </motion.div>

      {/* Sales Metrics */}
      <SalesMetrics data={filteredData} />

      {/* Charts Section */}
      <SalesCharts data={filteredData} />

      {/* Top Products and Companies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TopProducts data={filteredData} />
        <TopCompanies data={filteredData} />
      </div>
    </div>;
}