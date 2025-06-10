'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, FileSpreadsheet, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
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
interface ExportOptionsProps {
  data: SalesData[];
  dateRange: DateRange;
}
export function ExportOptions({
  data,
  dateRange
}: ExportOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const generateCSV = () => {
    const headers = ['Date', 'Product Name', 'Company', 'Quantity', 'Cost Price', 'Sell Price', 'Revenue', 'Profit', 'Discount'];
    const csvData = data.map(item => [format(item.timestamp, 'yyyy-MM-dd HH:mm:ss'), item.productName, item.company, item.quantity, item.costPrice, item.sellPrice, item.sellPrice * item.quantity, item.profit, item.discount || 0]);
    const csvContent = [headers.join(','), ...csvData.map(row => row.join(','))].join('\n');
    return csvContent;
  };
  const downloadCSV = () => {
    setIsExporting(true);
    try {
      const csvContent = generateCSV();
      const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      if (typeof document !== 'undefined') {
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', `sales-report-${format(dateRange.startDate, 'yyyy-MM-dd')}-to-${format(dateRange.endDate, 'yyyy-MM-dd')}.csv`);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    } catch (error) {
      console.error('Error exporting CSV:', error);
    } finally {
      setIsExporting(false);
      setIsOpen(false);
    }
  };
  const generatePDF = async () => {
    setIsExporting(true);
    try {
      // Dynamic import to avoid SSR issues
      const {
        jsPDF
      } = await import('jspdf');
      const pdf = new jsPDF();

      // Add title
      pdf.setFontSize(20);
      pdf.text('Sales Report', 20, 20);

      // Add date range
      pdf.setFontSize(12);
      pdf.text(`Period: ${format(dateRange.startDate, 'MMM dd, yyyy')} - ${format(dateRange.endDate, 'MMM dd, yyyy')}`, 20, 35);

      // Add summary metrics
      const totalRevenue = data.reduce((sum, item) => sum + item.sellPrice * item.quantity, 0);
      const totalProfit = data.reduce((sum, item) => sum + item.profit, 0);
      const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0);
      const totalDiscounts = data.reduce((sum, item) => sum + (item.discount || 0), 0);
      pdf.text(`Total Revenue: Rp ${totalRevenue.toLocaleString('id-ID')}`, 20, 50);
      pdf.text(`Total Profit: Rp ${totalProfit.toLocaleString('id-ID')}`, 20, 60);
      pdf.text(`Items Sold: ${totalQuantity.toLocaleString('id-ID')}`, 20, 70);
      pdf.text(`Total Discounts: Rp ${totalDiscounts.toLocaleString('id-ID')}`, 20, 80);
      pdf.text(`Total Transactions: ${data.length}`, 20, 90);

      // Add top products
      const productSummaries = data.reduce((acc, item) => {
        const key = `${item.productName}-${item.company}`;
        if (!acc[key]) {
          acc[key] = {
            productName: item.productName,
            company: item.company,
            totalQuantity: 0,
            totalRevenue: 0
          };
        }
        acc[key].totalQuantity += item.quantity;
        acc[key].totalRevenue += item.sellPrice * item.quantity;
        return acc;
      }, {} as Record<string, any>);
      const topProducts = Object.values(productSummaries).sort((a: any, b: any) => b.totalQuantity - a.totalQuantity).slice(0, 5);
      pdf.text('Top 5 Products:', 20, 110);
      topProducts.forEach((product: any, index) => {
        pdf.text(`${index + 1}. ${product.productName} (${product.company}) - ${product.totalQuantity} units`, 25, 125 + index * 10);
      });
      pdf.save(`sales-report-${format(dateRange.startDate, 'yyyy-MM-dd')}-to-${format(dateRange.endDate, 'yyyy-MM-dd')}.pdf`);
    } catch (error) {
      console.error('Error exporting PDF:', error);
    } finally {
      setIsExporting(false);
      setIsOpen(false);
    }
  };
  const exportOptions = [{
    label: 'Export as CSV',
    icon: FileSpreadsheet,
    action: downloadCSV,
    description: 'Detailed data in spreadsheet format'
  }, {
    label: 'Export as PDF',
    icon: FileText,
    action: generatePDF,
    description: 'Summary report in PDF format'
  }];
  return <div className="relative">
      <motion.button whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} onClick={() => setIsOpen(!isOpen)} disabled={isExporting} className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50">
        <Download className="w-4 h-4" />
        {isExporting ? 'Exporting...' : 'Export'}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div initial={{
          opacity: 0,
          y: 10,
          scale: 0.95
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          y: 10,
          scale: 0.95
        }} className="absolute top-full mt-2 right-0 w-64 glass-effect rounded-2xl border border-border shadow-xl z-50 p-4">
              <h3 className="font-semibold mb-3"><span className="editable-text">Export Options</span></h3>
              <div className="space-y-2">
                {exportOptions.map(option => {
              const Icon = option.icon;
              return <button key={option.label} onClick={option.action} disabled={isExporting} className="w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors disabled:opacity-50 group">
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium">{option.label}</p>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                    </button>;
            })}
              </div>
              
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground"><span className="editable-text">
                  Exporting </span>{data.length}<span className="editable-text"> transactions from </span>{format(dateRange.startDate, 'MMM dd')}<span className="editable-text"> to </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
                </p>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}