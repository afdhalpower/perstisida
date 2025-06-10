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
  return <div className="relative" data-unique-id="717049eb-c89f-40fe-ad04-d7b7115634b3" data-file-name="components/sales-report/export-options.tsx">
      <motion.button whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} onClick={() => setIsOpen(!isOpen)} disabled={isExporting} className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50" data-unique-id="6dae1789-4446-48ea-a45f-8556ea630927" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} data-unique-id="3bbcc673-8e0e-431b-90f8-58fb0c70d4dc" data-file-name="components/sales-report/export-options.tsx" />
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
        }} className="absolute top-full mt-2 right-0 w-64 glass-effect rounded-2xl border border-border shadow-xl z-50 p-4" data-unique-id="022a3fbd-17fa-4e80-b4d9-01611a8f1889" data-file-name="components/sales-report/export-options.tsx">
              <h3 className="font-semibold mb-3" data-unique-id="5e96a7d9-8739-447f-a9a8-8e7c2ad2c3bb" data-file-name="components/sales-report/export-options.tsx"><span className="editable-text" data-unique-id="0a88e730-6a28-4d85-811f-1249e4367199" data-file-name="components/sales-report/export-options.tsx">Export Options</span></h3>
              <div className="space-y-2" data-unique-id="00b14a82-bcee-428e-a440-8209eab488c1" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">
                {exportOptions.map(option => {
              const Icon = option.icon;
              return <button key={option.label} onClick={option.action} disabled={isExporting} className="w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors disabled:opacity-50 group" data-unique-id="444931c1-bb3b-4659-a228-0f0c5804e2fd" data-file-name="components/sales-report/export-options.tsx">
                      <div className="flex items-start gap-3" data-unique-id="82332c72-fed5-4463-9061-cb654fe43c14" data-file-name="components/sales-report/export-options.tsx">
                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <div data-unique-id="1d7437b6-1e68-40f0-b0c2-0e0cce6f2be0" data-file-name="components/sales-report/export-options.tsx">
                          <p className="font-medium" data-unique-id="d14a3454-c0b8-40e8-bfdc-8a071a1d2123" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">{option.label}</p>
                          <p className="text-xs text-muted-foreground" data-unique-id="21b95948-b8cc-4f01-a582-f0a9c648d32a" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">{option.description}</p>
                        </div>
                      </div>
                    </button>;
            })}
              </div>
              
              <div className="mt-4 pt-3 border-t border-border" data-unique-id="cce63e8d-f611-4ed1-9fcd-9d7247521522" data-file-name="components/sales-report/export-options.tsx">
                <p className="text-xs text-muted-foreground" data-unique-id="caee9b73-f226-45b4-9a46-5a64bb400051" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="98564417-443d-4945-9ef4-627554f13f56" data-file-name="components/sales-report/export-options.tsx">
                  Exporting </span>{data.length}<span className="editable-text" data-unique-id="34d0d0af-7c1e-46a5-8d84-98d449ccc446" data-file-name="components/sales-report/export-options.tsx"> transactions from </span>{format(dateRange.startDate, 'MMM dd')}<span className="editable-text" data-unique-id="d656932a-b8f4-4843-8de5-df2304191927" data-file-name="components/sales-report/export-options.tsx"> to </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
                </p>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}