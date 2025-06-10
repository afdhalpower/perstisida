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
  return <div className="relative" data-unique-id="c3c903c8-c462-45ba-80bc-b72dfbaaeed8" data-file-name="components/sales-report/date-range-filter.tsx">
      <motion.button whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }} onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 px-4 py-2 rounded-xl glass-effect border border-border hover:bg-accent/50 transition-all duration-300" data-unique-id="bb827846-6278-404d-97e6-ba82612153c0" data-file-name="components/sales-report/date-range-filter.tsx">
        <Calendar className="w-4 h-4 text-primary" data-unique-id="9954b0a4-7f46-4293-82d2-1f83e414951b" data-file-name="components/sales-report/date-range-filter.tsx" />
        <span className="text-sm font-medium" data-unique-id="9bcd91f5-9988-4fa3-9e66-53899abe55b5" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
          {format(dateRange.startDate, 'MMM dd')}<span className="editable-text" data-unique-id="4f635ded-95ed-4448-a06f-be504374f0b5" data-file-name="components/sales-report/date-range-filter.tsx"> - </span>{format(dateRange.endDate, 'MMM dd, yyyy')}
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
        }} className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} data-unique-id="cf1c606b-9284-4d50-976e-40f1beff613c" data-file-name="components/sales-report/date-range-filter.tsx" />
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
        }} className="absolute top-full mt-2 right-0 w-80 glass-effect rounded-2xl border border-border shadow-xl z-50 p-6" data-unique-id="3b9abf58-9b25-405b-ba07-a01b6a4f36b2" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
              <h3 className="text-lg font-semibold mb-4" data-unique-id="89aaf2ee-a120-4b39-b32f-51814ce326a0" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="5b5e557b-286f-4769-b0e0-877f9a4d02eb" data-file-name="components/sales-report/date-range-filter.tsx">Select Date Range</span></h3>
              
              {/* Preset Ranges */}
              <div className="space-y-2 mb-6" data-unique-id="b9f2dbd2-8659-476c-9b40-c398858abdfe" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
                <h4 className="text-sm font-medium text-muted-foreground mb-2" data-unique-id="ec89f7b9-e2a9-4b7f-a376-a70e951c46ce" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="710462f2-cbe8-4fa7-a607-20af64ad15ed" data-file-name="components/sales-report/date-range-filter.tsx">Quick Select</span></h4>
                {presetRanges.map(preset => <button key={preset.label} onClick={() => handlePresetSelect(preset)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-sm" data-unique-id="f6acad06-b556-4ccd-8f9a-9c9f33f5e93d" data-file-name="components/sales-report/date-range-filter.tsx" data-dynamic-text="true">
                    {preset.label}
                  </button>)}
              </div>

              {/* Custom Date Inputs */}
              <div className="space-y-4" data-unique-id="55a57ef8-7d89-4c9e-b268-535019b28d77" data-file-name="components/sales-report/date-range-filter.tsx">
                <h4 className="text-sm font-medium text-muted-foreground" data-unique-id="8c2bb2fe-68c3-41cf-98d6-f6bac331f588" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="56889355-b73c-49ba-8f94-d59eec6c1ae0" data-file-name="components/sales-report/date-range-filter.tsx">Custom Range</span></h4>
                <div className="grid grid-cols-2 gap-3" data-unique-id="dd38258e-6820-4c3a-ab4c-e2ff24990972" data-file-name="components/sales-report/date-range-filter.tsx">
                  <div data-unique-id="b822408e-3dd4-46a7-b40c-9af18a5e172b" data-file-name="components/sales-report/date-range-filter.tsx">
                    <label className="block text-xs font-medium mb-1" data-unique-id="2ab85b49-2899-41f6-9546-b1beee00a3ee" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="43ca1d4e-01bf-4a90-9054-c73fb9268d40" data-file-name="components/sales-report/date-range-filter.tsx">Start Date</span></label>
                    <input type="date" value={format(dateRange.startDate, 'yyyy-MM-dd')} onChange={e => handleCustomDateChange('startDate', e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring" data-unique-id="92c2b484-4920-486b-a4a8-73053ad8fad2" data-file-name="components/sales-report/date-range-filter.tsx" />
                  </div>
                  <div data-unique-id="e349d646-81bf-4621-9cb7-90e4a770d917" data-file-name="components/sales-report/date-range-filter.tsx">
                    <label className="block text-xs font-medium mb-1" data-unique-id="7ea7c725-ea7e-4a41-a7d4-5de616727009" data-file-name="components/sales-report/date-range-filter.tsx"><span className="editable-text" data-unique-id="c86b889a-9cee-4e1e-b056-09ef5077e21b" data-file-name="components/sales-report/date-range-filter.tsx">End Date</span></label>
                    <input type="date" value={format(dateRange.endDate, 'yyyy-MM-dd')} onChange={e => handleCustomDateChange('endDate', e.target.value)} className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring" data-unique-id="ff096db5-93ed-4cc8-b308-726cddebebe9" data-file-name="components/sales-report/date-range-filter.tsx" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}