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
    return <div className="p-8" data-unique-id="aca20d5f-2218-41b8-b85c-881dc2f3ed0c" data-file-name="components/sales-report.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="54804f9d-afe7-4ed2-bec8-679cd0f9eb15" data-file-name="components/sales-report.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="553971b6-8111-4bbb-ac3e-ac9346f0e870" data-file-name="components/sales-report.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-unique-id="0e78d005-de14-4391-b1c5-12d856fb2732" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="80c72c32-b135-449b-869e-2ee451ca0b82" data-file-name="components/sales-report.tsx"></div>)}
          </div>
          <div className="h-96 bg-muted rounded-2xl" data-unique-id="55745edc-3ab3-48fc-a31c-cb62b68c01d5" data-file-name="components/sales-report.tsx"></div>
        </div>
      </div>;
  }
  return <div className="p-8 space-y-8" data-unique-id="17819a94-7865-48df-8653-67fecf8b914d" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
      {/* Header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="flex items-center justify-between" data-unique-id="a9ee66a0-8aa0-4b58-9cd4-cf63311aa21f" data-file-name="components/sales-report.tsx">
        <div className="flex items-center gap-4" data-unique-id="595f59eb-e6dc-4d96-be56-ede7a208fed7" data-file-name="components/sales-report.tsx">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="378488ed-1a21-41c0-a4d6-1c5d9cc7775f" data-file-name="components/sales-report.tsx">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div data-unique-id="bcaf6e12-e6fb-41d6-90cb-b084b069fb77" data-file-name="components/sales-report.tsx">
            <h1 className="text-4xl font-bold text-foreground" data-unique-id="eef91aae-9cec-4151-baf8-a111b14bd80d" data-file-name="components/sales-report.tsx"><span className="editable-text" data-unique-id="a2969d7c-6834-4744-ad89-a05270cba5c1" data-file-name="components/sales-report.tsx">
              Dashboard Laporan Penjualan
            </span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="78811f49-9fea-4e7e-99a3-8319be6d3745" data-file-name="components/sales-report.tsx"><span className="editable-text" data-unique-id="e05733c5-da62-4f16-a64c-c955dd3fb806" data-file-name="components/sales-report.tsx">
              Analisis dan wawasan penjualan yang komprehensif
            </span></p>
          </div>
        </div>

        <div className="flex items-center gap-4" data-unique-id="998f4413-df67-4781-8004-cad3dc0ca0db" data-file-name="components/sales-report.tsx">
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
    }} className="glass-effect rounded-2xl p-4" data-unique-id="e8829dfe-88a6-4d48-a074-2f2da83a3f75" data-file-name="components/sales-report.tsx">
        <div className="flex items-center gap-2 text-sm text-muted-foreground" data-unique-id="f1f85103-91e0-4293-9674-09a3c953b539" data-file-name="components/sales-report.tsx">
          <Calendar className="w-4 h-4" data-unique-id="3f95a229-c99d-4339-b78b-e827483e91bb" data-file-name="components/sales-report.tsx" />
          <span data-unique-id="ce50a6a1-a200-471c-b228-51de476fcf71" data-file-name="components/sales-report.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="db8d0fa5-9deb-4fa4-8ed6-afd7a12cf128" data-file-name="components/sales-report.tsx">
            Menampilkan data dari </span>{format(dateRange.startDate, 'MMM dd, yyyy')}<span className="editable-text" data-unique-id="837e5bed-36f5-4e82-8165-983ec9d73f66" data-file-name="components/sales-report.tsx"> hingga </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
          </span>
          <span className="ml-4 font-medium text-primary" data-unique-id="a1606cf0-c2b6-4f11-b295-4f753c02b1a9" data-file-name="components/sales-report.tsx" data-dynamic-text="true">
            {filteredData.length}<span className="editable-text" data-unique-id="a2634988-4304-43b1-9824-d12b419ef07f" data-file-name="components/sales-report.tsx"> transaksi
          </span></span>
        </div>
      </motion.div>

      {/* Sales Metrics */}
      <SalesMetrics data={filteredData} />

      {/* Charts Section */}
      <SalesCharts data={filteredData} />

      {/* Top Products and Companies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="e6674144-10da-4629-92f3-a8700d17f2c3" data-file-name="components/sales-report.tsx">
        <TopProducts data={filteredData} />
        <TopCompanies data={filteredData} />
      </div>
    </div>;
}