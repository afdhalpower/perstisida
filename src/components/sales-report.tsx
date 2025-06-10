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
    return <div className="p-8" data-unique-id="638135d8-4b13-44c0-8b7d-bdabab3cf8d6" data-file-name="components/sales-report.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="94019174-df32-4b95-9991-eb775363e5b4" data-file-name="components/sales-report.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="a66ddc8b-bdaf-4ea9-ac0a-7e44ceb18877" data-file-name="components/sales-report.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-unique-id="b258424d-77a8-45ca-a5d0-557a505d0591" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="9ac99d24-976b-4e6e-a54e-622fcbab1547" data-file-name="components/sales-report.tsx"></div>)}
          </div>
          <div className="h-96 bg-muted rounded-2xl" data-unique-id="18f6db29-232d-47f8-958b-65d752a91405" data-file-name="components/sales-report.tsx"></div>
        </div>
      </div>;
  }
  return <div className="p-8 space-y-8" data-unique-id="93f738cd-e88d-42ff-931c-663c76b32e4d" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
      {/* Header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="flex items-center justify-between" data-unique-id="130c918c-7eb5-4a24-8640-747db68fc6bf" data-file-name="components/sales-report.tsx">
        <div className="flex items-center gap-4" data-unique-id="55f8b1fc-ccea-4401-8127-f9fc09f8275a" data-file-name="components/sales-report.tsx">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="1d97dd5c-223f-4d60-a60f-ef46bfcd1049" data-file-name="components/sales-report.tsx">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div data-unique-id="403d2e74-ef7a-445b-bb17-85dadda56739" data-file-name="components/sales-report.tsx">
            <h1 className="text-4xl font-bold text-foreground" data-unique-id="3036b273-ec37-4abe-bb5a-8a4e3cd2e797" data-file-name="components/sales-report.tsx"><span className="editable-text" data-unique-id="49bd36cd-c606-4dfd-ad85-ec7d35380e19" data-file-name="components/sales-report.tsx">
              Sales Report Dashboard
            </span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="68c16a89-da0f-46ae-ac06-2e7df37e1170" data-file-name="components/sales-report.tsx"><span className="editable-text" data-unique-id="6ee28afa-c344-4a48-a460-7f884b387589" data-file-name="components/sales-report.tsx">
              Comprehensive sales analysis and insights
            </span></p>
          </div>
        </div>

        <div className="flex items-center gap-4" data-unique-id="4e14bf58-66fa-4caa-92ba-0e73bf59b114" data-file-name="components/sales-report.tsx">
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
    }} className="glass-effect rounded-2xl p-4" data-unique-id="2895b1d4-d1d6-460c-9592-bd8269bddbfe" data-file-name="components/sales-report.tsx">
        <div className="flex items-center gap-2 text-sm text-muted-foreground" data-unique-id="91f701b8-5e31-4e6f-9f99-e5fdd753309d" data-file-name="components/sales-report.tsx">
          <Calendar className="w-4 h-4" data-unique-id="4f4d58fd-cd7f-498c-871a-1846201fcbb7" data-file-name="components/sales-report.tsx" />
          <span data-unique-id="ee07077c-7362-4c4e-b8ab-2bd1821bc34f" data-file-name="components/sales-report.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="761dd0c9-0880-4d43-bffa-a4e992b5ff47" data-file-name="components/sales-report.tsx">
            Showing data from </span>{format(dateRange.startDate, 'MMM dd, yyyy')}<span className="editable-text" data-unique-id="8b09c360-4f4d-418c-b7f3-ed338ee1cdc7" data-file-name="components/sales-report.tsx"> to </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
          </span>
          <span className="ml-4 font-medium text-primary" data-unique-id="85430869-2f38-4a74-9493-fb5f04b252c7" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
            {filteredData.length}<span className="editable-text" data-unique-id="aeca1f85-fa5b-40a7-966a-fe49cb3ad17f" data-file-name="components/sales-report.tsx"> transactions
          </span></span>
        </div>
      </motion.div>

      {/* Sales Metrics */}
      <SalesMetrics data={filteredData} />

      {/* Charts Section */}
      <SalesCharts data={filteredData} />

      {/* Top Products and Companies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="c68e7ef6-5d39-459e-93ba-213bdbd2fe66" data-file-name="components/sales-report.tsx">
        <TopProducts data={filteredData} />
        <TopCompanies data={filteredData} />
      </div>
    </div>;
}