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
    const headers = ['Tanggal', 'Nama Produk', 'Perusahaan', 'Kuantitas', 'Harga Beli', 'Harga Jual', 'Pendapatan', 'Keuntungan', 'Diskon'];
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
  return <div className="relative" data-unique-id="22ac2046-32f8-47a7-a9ae-4f0da481cb2a" data-file-name="components/sales-report/export-options.tsx">
      <motion.button whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} onClick={() => setIsOpen(!isOpen)} disabled={isExporting} className="flex items-center gap-2 px-4 py-2 rounded-xl gradient-primary text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50" data-unique-id="bedc142a-94e6-44e8-8a45-c09a54cd0069" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} data-unique-id="6748446e-776a-4572-9394-f81ab8a896b5" data-file-name="components/sales-report/export-options.tsx" />
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
        }} className="absolute top-full mt-2 right-0 w-64 glass-effect rounded-2xl border border-border shadow-xl z-50 p-4" data-unique-id="afa00128-d0e5-45d2-8f8f-74e104414b91" data-file-name="components/sales-report/export-options.tsx">
              <h3 className="font-semibold mb-3" data-unique-id="76f87756-5ddd-42bc-a57c-e00e3312e132" data-file-name="components/sales-report/export-options.tsx"><span className="editable-text" data-unique-id="60e5c034-4d4c-4252-aef7-b89073e7eae8" data-file-name="components/sales-report/export-options.tsx">Export Options</span></h3>
              <div className="space-y-2" data-unique-id="707402b2-67d9-4edf-b0dd-fe178532c4d7" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">
                {exportOptions.map(option => {
              const Icon = option.icon;
              return <button key={option.label} onClick={option.action} disabled={isExporting} className="w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors disabled:opacity-50 group" data-unique-id="7b19e8a4-6ff2-4eb4-aa03-deb75f79aabf" data-file-name="components/sales-report/export-options.tsx">
                      <div className="flex items-start gap-3" data-unique-id="559adf14-bbc0-46af-be19-ffd21e4361d8" data-file-name="components/sales-report/export-options.tsx">
                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <div data-unique-id="3e71ad57-e23e-4a34-ab35-95a0f832e728" data-file-name="components/sales-report/export-options.tsx">
                          <p className="font-medium" data-unique-id="7abcc89e-ae1d-48cd-8efc-5c0ffddf3c22" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">{option.label}</p>
                          <p className="text-xs text-muted-foreground" data-unique-id="85ebb4f6-15a2-4b6e-b014-23ccf0f67953" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true">{option.description}</p>
                        </div>
                      </div>
                    </button>;
            })}
              </div>
              
              <div className="mt-4 pt-3 border-t border-border" data-unique-id="132da70d-4320-4319-9d91-ee132490bb69" data-file-name="components/sales-report/export-options.tsx">
                <p className="text-xs text-muted-foreground" data-unique-id="8b00458a-025a-4eac-825e-057895950b7b" data-file-name="components/sales-report/export-options.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ee363d43-81d0-4416-8802-0592b0dffbd9" data-file-name="components/sales-report/export-options.tsx">
                  Exporting </span>{data.length}<span className="editable-text" data-unique-id="2349559a-eebd-49ed-b0e5-486cb4e8a885" data-file-name="components/sales-report/export-options.tsx"> transactions from </span>{format(dateRange.startDate, 'MMM dd')}<span className="editable-text" data-unique-id="b59700b2-eb96-4288-be19-9a7f7c0a4066" data-file-name="components/sales-report/export-options.tsx"> to </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
                </p>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}