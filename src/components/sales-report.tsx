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
    return <div className="p-8" data-unique-id="f9867d94-5a0a-4c72-a6b9-b03224fc5e2e" data-file-name="components/sales-report.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="1dbdc877-1484-4de2-b794-5ff6731f1d35" data-file-name="components/sales-report.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="1ce80623-32ca-4fe3-9bec-fa8cb3cbb1a2" data-file-name="components/sales-report.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-unique-id="7dfd6c1d-e56d-45de-ac9a-1345569422b8" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="4ae61f9e-1ea9-4098-9645-dd1bcf04237e" data-file-name="components/sales-report.tsx"></div>)}
          </div>
          <div className="h-96 bg-muted rounded-2xl" data-unique-id="5d9a8e6d-53c6-46c4-a131-751043081aaa" data-file-name="components/sales-report.tsx"></div>
        </div>
      </div>;
  }
  return <div className="p-8 space-y-8" data-unique-id="4e7addbc-f553-40f3-8ffd-26df9133f739" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
      {/* Header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="flex items-center justify-between" data-unique-id="515247b6-b9ca-4c3e-9a07-3e40cbcfa476" data-file-name="components/sales-report.tsx">
        <div className="flex items-center gap-4" data-unique-id="2a4afd82-e25f-49a2-8eb2-49b4c9a294f9" data-file-name="components/sales-report.tsx">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="77ee1760-5bac-4f8b-be38-c7e10b06fb63" data-file-name="components/sales-report.tsx">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div data-unique-id="b3a3ad03-f054-4029-97b0-9a8892ac1658" data-file-name="components/sales-report.tsx">
            <h1 className="text-4xl font-bold text-foreground" data-unique-id="4cfb2fdd-184d-4319-8360-01b20c6e17d9" data-file-name="components/sales-report.tsx"><span className="editable-text" data-unique-id="9fb1942c-2fb9-452e-95fb-e12212b5dc60" data-file-name="components/sales-report.tsx">
              Sales Report Dashboard
            </span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="7b9eb5a7-00a7-477b-bbdf-64ce753b3284" data-file-name="components/sales-report.tsx"><span className="editable-text" data-unique-id="29e448d7-cc89-4841-aa97-8a91352b6c32" data-file-name="components/sales-report.tsx">
              Comprehensive sales analysis and insights
            </span></p>
          </div>
        </div>

        <div className="flex items-center gap-4" data-unique-id="71265864-7a97-43db-8e92-76e9e4514e84" data-file-name="components/sales-report.tsx">
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
    }} className="glass-effect rounded-2xl p-4" data-unique-id="7ae288de-cfa2-424c-a8e7-fdb280ed182f" data-file-name="components/sales-report.tsx">
        <div className="flex items-center gap-2 text-sm text-muted-foreground" data-unique-id="63015a1b-04e1-465d-b231-56fd0fcbd435" data-file-name="components/sales-report.tsx">
          <Calendar className="w-4 h-4" data-unique-id="b3685075-bee5-4792-9acb-2d50a729cf97" data-file-name="components/sales-report.tsx" />
          <span data-unique-id="da30044a-6e54-4df6-9d65-ed3f9c3ed1ad" data-file-name="components/sales-report.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="fb73d7bf-320b-4105-861b-9fb69e5b89cf" data-file-name="components/sales-report.tsx">
            Showing data from </span>{format(dateRange.startDate, 'MMM dd, yyyy')}<span className="editable-text" data-unique-id="7cf6d24e-dd49-48ed-8997-089eea87a8c8" data-file-name="components/sales-report.tsx"> to </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
          </span>
          <span className="ml-4 font-medium text-primary" data-unique-id="798932af-1716-432d-abce-71b079911d5a" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
            {filteredData.length}<span className="editable-text" data-unique-id="e6e7d372-955c-4b65-8389-e6994934fb4b" data-file-name="components/sales-report.tsx"> transactions
          </span></span>
        </div>
      </motion.div>

      {/* Sales Metrics */}
      <SalesMetrics data={filteredData} />

      {/* Charts Section */}
      <SalesCharts data={filteredData} />

      {/* Top Products and Companies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="32229f7e-b26c-4e4c-bf92-eefc311b7a7e" data-file-name="components/sales-report.tsx">
        <TopProducts data={filteredData} />
        <TopCompanies data={filteredData} />
      </div>
    </div>;
}