'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import { format, subDays, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';
interface DateRange {
  startDate: Date;
  endDate: Date;
}
interface DateRangeFilterProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}
const presetRanges = [{
  label: 'Last 7 days',
  getValue: () => ({
    startDate: subDays(new Date(), 7),
    endDate: new Date()
  })
}, {
  label: 'Last 30 days',
  getValue: () => ({
    startDate: subDays(new Date(), 30),
    endDate: new Date()
  })
}, {
  label: 'This month',
  getValue: () => ({
    startDate: startOfMonth(new Date()),
    endDate: endOfMonth(new Date())
  })
}, {
  label: 'This year',
  getValue: () => ({
    startDate: startOfYear(new Date()),
    endDate: endOfYear(new Date())
  })
}];
export function DateRangeFilter({
  dateRange,
  onDateRangeChange
}: DateRangeFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handlePresetSelect = (preset: typeof presetRanges[0]) => {
    onDateRangeChange(preset.getValue());
    setIsOpen(false);
  };
  const handleCustomDateChange = (field: 'startDate' | 'endDate', value: string) => {
    const newDate = new Date(value);
    onDateRangeChange({
      ...dateRange,
      [field]: newDate
    });
  };
  return <div className="relative" data-unique-id="2822a39d-a330-456e-a3fe-673743ad5063" data-file-name="components/sales-report/date-range-filter.tsx">
      <motion.button whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 px-4 py-2 rounded-xl glass-effect border border-border hover:bg-accent/50 transition-all duration-300" data-unique-id="e7c0ffb2-16a4-4c68-a6a7-6a8daef44cb3" data-file-name="components/sales-report/date-range-filter.tsx">
        <Calendar className="w-4 h-4 text-primary" data-unique-id="5ba0aa87-acf8-4835-bfad-f21d5572ea6f" data-file-name="components/sales-report/date-range-filter.tsx" />
        <span className="text-sm font-medium" data-unique-id="8a7364e7-7e58-47c5-8439-e868bcf2c287" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
          {format(dateRange.startDate, 'MMM dd')}<span className="editable-text" data-unique-id="cc990826-c541-47e1-a813-880e4c7bd113" data-file-name="components/sales-report/date-range-filter.tsx"> - </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
        </span>
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
        }} className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} data-unique-id="cc5ae22b-65d0-4374-b2b3-dedc1afa5a13" data-file-name="components/sales-report/date-range-filter.tsx" />
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
        }} className="absolute top-full mt-2 right-0 w-80 glass-effect rounded-2xl border border-border shadow-xl z-50 p-6" data-unique-id="3a20b37f-b9fb-436b-9642-456f0e8cb858" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
              <h3 className="text-lg font-semibold mb-4" data-unique-id="74de0bf4-1480-4b41-880a-026e1d0ab32d" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="03d68466-8907-455d-bac8-a153cdc3a657" data-file-name="components/sales-report/date-range-filter.tsx">Select Date Range</span></h3>
              
              {/* Preset Ranges */}
              <div className="space-y-2 mb-6" data-unique-id="4f41d2e1-7686-4408-ba49-2ebd5f15ae21" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
                <h4 className="text-sm font-medium text-muted-foreground mb-2" data-unique-id="2ab38fce-3fb0-4793-a50e-4b387c911728" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="3c409021-2019-4fd2-939c-6373516dd15e" data-file-name="components/sales-report/date-range-filter.tsx">Quick Select</span></h4>
                {presetRanges.map(preset => <button key={preset.label} onClick={() => handlePresetSelect(preset)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-sm" data-unique-id="3e967301-391e-4591-bc41-8a42e88758e5" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
                    {preset.label}
                  </button>)}
              </div>

              {/* Custom Date Inputs */}
              <div className="space-y-4" data-unique-id="cb4672c6-2688-40ba-b10d-4cf3085071af" data-file-name="components/sales-report/date-range-filter.tsx">
                <h4 className="text-sm font-medium text-muted-foreground" data-unique-id="8f476cf3-beb5-4740-82b3-4f34c5d18af4" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="88015f23-06fc-45ef-9bd7-7ff095e6be5f" data-file-name="components/sales-report/date-range-filter.tsx">Custom Range</span></h4>
                <div className="grid grid-cols-2 gap-3" data-unique-id="4cbd7e47-ebf8-47d7-a512-f34e3ac7ecf8" data-file-name="components/sales-report/date-range-filter.tsx">
                  <div data-unique-id="1cb971b4-270a-4bdf-8534-761d2dcf2183" data-file-name="components/sales-report/date-range-filter.tsx">
                    <label className="block text-xs font-medium mb-1" data-unique-id="62f46904-91e5-4db5-8dc8-7359d4dee221" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="f3615787-5cae-4134-a01a-390644402b95" data-file-name="components/sales-report/date-range-filter.tsx">Start Date</span></label>
                    <input type="date" value={format(dateRange.startDate, 'yyyy-MM-dd')} onChange={e => handleCustomDateChange('startDate', e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring" data-unique-id="eb943796-354c-4ccb-850a-8f4de5a6b1b2" data-file-name="components/sales-report/date-range-filter.tsx" />
                  </div>
                  <div data-unique-id="956cda1f-a844-4cea-ae42-9c8921140a22" data-file-name="components/sales-report/date-range-filter.tsx">
                    <label className="block text-xs font-medium mb-1" data-unique-id="3ab6b84d-da4b-4ef0-9b18-dc870603d260" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="d602c89d-ee13-4132-83bd-43474d5ef70f" data-file-name="components/sales-report/date-range-filter.tsx">End Date</span></label>
                    <input type="date" value={format(dateRange.endDate, 'yyyy-MM-dd')} onChange={e => handleCustomDateChange('endDate', e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring" data-unique-id="d00573fd-bfab-4a01-8868-183dd66d7204" data-file-name="components/sales-report/date-range-filter.tsx" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}