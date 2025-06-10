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

const presetRanges = [
  {
    label: 'Last 7 days',
    getValue: () => ({
      startDate: subDays(new Date(), 7),
      endDate: new Date()
    })
  },
  {
    label: 'Last 30 days',
    getValue: () => ({
      startDate: subDays(new Date(), 30),
      endDate: new Date()
    })
  },
  {
    label: 'This month',
    getValue: () => ({
      startDate: startOfMonth(new Date()),
      endDate: endOfMonth(new Date())
    })
  },
  {
    label: 'This year',
    getValue: () => ({
      startDate: startOfYear(new Date()),
      endDate: endOfYear(new Date())
    })
  }
];

export function DateRangeFilter({ dateRange, onDateRangeChange }: DateRangeFilterProps) {
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

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 rounded-xl glass-effect border border-border hover:bg-accent/50 transition-all duration-300"
      >
        <Calendar className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">
          {format(dateRange.startDate, 'MMM dd')} - {format(dateRange.endDate, 'MMM dd, yyyy')}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full mt-2 right-0 w-80 glass-effect rounded-2xl border border-border shadow-xl z-50 p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Select Date Range</h3>
              
              {/* Preset Ranges */}
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Quick Select</h4>
                {presetRanges.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => handlePresetSelect(preset)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-sm"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Custom Date Inputs */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">Custom Range</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Start Date</label>
                    <input
                      type="date"
                      value={format(dateRange.startDate, 'yyyy-MM-dd')}
                      onChange={(e) => handleCustomDateChange('startDate', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">End Date</label>
                    <input
                      type="date"
                      value={format(dateRange.endDate, 'yyyy-MM-dd')}
                      onChange={(e) => handleCustomDateChange('endDate', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg glass-effect border border-border text-sm focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
