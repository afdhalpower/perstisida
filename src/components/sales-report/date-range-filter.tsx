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
  return <div className="relative" data-unique-id="c0d2e032-b339-4627-b9fc-a5500cd37e50" data-file-name="components/sales-report/date-range-filter.tsx">
      <motion.button whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 px-4 py-2 rounded-xl glass-effect border border-border hover:bg-accent/50 transition-all duration-300" data-unique-id="ab3b90c9-43eb-44a6-ad89-2ae76c7947a2" data-file-name="components/sales-report/date-range-filter.tsx">
        <Calendar className="w-4 h-4 text-primary" data-unique-id="4d823b55-39ed-4175-8f9a-d759439b943d" data-file-name="components/sales-report/date-range-filter.tsx" />
        <span className="text-sm font-medium" data-unique-id="25ecaaec-ec03-4616-8953-5fbb0ec5c5d4" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
          {format(dateRange.startDate, 'MMM dd')}<span className="editable-text" data-unique-id="dfe60cfc-40b4-412d-9346-f061bf628328" data-file-name="components/sales-report/date-range-filter.tsx"> - </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
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
        }} className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} data-unique-id="097a8777-0451-4eff-9006-38a4b3b48982" data-file-name="components/sales-report/date-range-filter.tsx" />
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
        }} className="absolute top-full mt-2 right-0 w-80 glass-effect rounded-2xl border border-border shadow-xl z-50 p-6" data-unique-id="1e298a53-7a33-4827-9feb-1d0c686a7bc4" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
              <h3 className="text-lg font-semibold mb-4" data-unique-id="0cf55e67-dd7a-4114-9f73-c9f2f243ef4e" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="ab810902-3848-4ba2-b7b3-6d5a01dc381d" data-file-name="components/sales-report/date-range-filter.tsx">Select Date Range</span></h3>
              
              {/* Preset Ranges */}
              <div className="space-y-2 mb-6" data-unique-id="abe051b0-51a0-4c04-8118-1f2f52914928" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
                <h4 className="text-sm font-medium text-muted-foreground mb-2" data-unique-id="c3a4d4f5-f46b-4f8b-a4e5-2de16442690a" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="8347d1b8-8cff-4e4d-841e-508662dc4d03" data-file-name="components/sales-report/date-range-filter.tsx">Quick Select</span></h4>
                {presetRanges.map(preset => <button key={preset.label} onClick={() => handlePresetSelect(preset)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-sm" data-unique-id="e351cf69-0d67-47d3-976b-eba0be562f10" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
                    {preset.label}
                  </button>)}
              </div>

              {/* Custom Date Inputs */}
              <div className="space-y-4" data-unique-id="4eceb8db-3c47-4c0a-ab06-23b66b3f7965" data-file-name="components/sales-report/date-range-filter.tsx">
                <h4 className="text-sm font-medium text-muted-foreground" data-unique-id="62cbfd1d-e658-4f13-ab7a-51a0b54dea2a" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="a7ea7b98-3f5f-420b-ab4c-a74b888861b3" data-file-name="components/sales-report/date-range-filter.tsx">Custom Range</span></h4>
                <div className="grid grid-cols-2 gap-3" data-unique-id="434e084a-7957-46f3-8062-a153e2ff9d1e" data-file-name="components/sales-report/date-range-filter.tsx">
                  <div data-unique-id="f78f0fde-93bc-4430-935f-c2aa7b6fe9e5" data-file-name="components/sales-report/date-range-filter.tsx">
                    <label className="block text-xs font-medium mb-1" data-unique-id="469d2e53-536b-4924-8606-67ab6592e3bb" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="76d00562-6f91-4772-89ef-c8986cf90431" data-file-name="components/sales-report/date-range-filter.tsx">Start Date</span></label>
                    <input type="date" value={format(dateRange.startDate, 'yyyy-MM-dd')} onChange={e => handleCustomDateChange('startDate', e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring" data-unique-id="3f9cf929-153e-4466-a5e5-524f80721558" data-file-name="components/sales-report/date-range-filter.tsx" />
                  </div>
                  <div data-unique-id="cf7f50f2-e622-4f54-90ed-739bf2271953" data-file-name="components/sales-report/date-range-filter.tsx">
                    <label className="block text-xs font-medium mb-1" data-unique-id="ecdcc1f2-0974-44e5-9d1c-56ded8523f10" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="937fd365-44fe-4f1e-8b65-15d8cd4dbbc8" data-file-name="components/sales-report/date-range-filter.tsx">End Date</span></label>
                    <input type="date" value={format(dateRange.endDate, 'yyyy-MM-dd')} onChange={e => handleCustomDateChange('endDate', e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring" data-unique-id="47a4b640-449f-423d-be96-4eac8f7b9a53" data-file-name="components/sales-report/date-range-filter.tsx" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}