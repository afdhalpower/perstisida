'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Widget, DashboardLayout, WidgetTemplate } from '@/types/widget';

interface WidgetStore {
  widgets: Widget[];
  isCustomizing: boolean;
  availableTemplates: WidgetTemplate[];
  setWidgets: (widgets: Widget[]) => void;
  addWidget: (widget: Widget) => void;
  updateWidget: (id: string, updates: Partial<Widget>) => void;
  removeWidget: (id: string) => void;
  moveWidget: (id: string, position: { x: number; y: number }) => void;
  setCustomizing: (customizing: boolean) => void;
  resetToDefault: () => void;
  loadLayout: (layout: DashboardLayout) => void;
  exportLayout: () => DashboardLayout;
}

const defaultTemplates: WidgetTemplate[] = [
  {
    id: 'revenue',
    name: 'Revenue Tracker',
    type: 'metric',
    defaultVisualization: 'number',
    availableVisualizations: ['number', 'bar', 'line'],
    metrics: ['todayRevenue', 'monthlyRevenue', 'yearlyRevenue'],
    description: 'Track revenue metrics',
    icon: 'DollarSign'
  },
  {
    id: 'transactions',
    name: 'Transaction Counter',
    type: 'counter',
    defaultVisualization: 'number',
    availableVisualizations: ['number', 'progress'],
    metrics: ['todayTransactions', 'monthlyTransactions'],
    description: 'Monitor transaction counts',
    icon: 'ShoppingCart'
  },
  {
    id: 'profit',
    name: 'Profit Analysis',
    type: 'chart',
    defaultVisualization: 'bar',
    availableVisualizations: ['bar', 'line', 'pie'],
    metrics: ['todayProfit', 'monthlyProfit', 'profitMargin'],
    description: 'Analyze profit trends',
    icon: 'TrendingUp'
  },
  {
    id: 'products',
    name: 'Product Metrics',
    type: 'metric',
    defaultVisualization: 'number',
    availableVisualizations: ['number', 'progress'],
    metrics: ['totalProducts', 'lowStock', 'topSelling'],
    description: 'Product inventory insights',
    icon: 'Package'
  }
];

const defaultWidgets: Widget[] = [
  {
    id: 'widget-1',
    type: 'metric',
    title: 'Today Transactions',
    metric: 'todayTransactions',
    visualization: 'number',
    size: 'small',
    position: { x: 0, y: 0 },
    color: 'blue'
  },
  {
    id: 'widget-2',
    type: 'metric',
    title: 'Today Profit',
    metric: 'todayProfit',
    visualization: 'number',
    size: 'small',
    position: { x: 1, y: 0 },
    color: 'green'
  },
  {
    id: 'widget-3',
    type: 'metric',
    title: 'Total Products',
    metric: 'totalProducts',
    visualization: 'number',
    size: 'small',
    position: { x: 2, y: 0 },
    color: 'purple'
  },
  {
    id: 'widget-4',
    type: 'metric',
    title: 'Monthly Revenue',
    metric: 'monthlyRevenue',
    visualization: 'number',
    size: 'small',
    position: { x: 3, y: 0 },
    color: 'orange'
  }
];

export const useWidgetStore = create<WidgetStore>()(
  persist(
    (set, get) => ({
      widgets: defaultWidgets,
      isCustomizing: false,
      availableTemplates: defaultTemplates,
      
      setWidgets: (widgets) => set({ widgets }),
      
      addWidget: (widget) => set((state) => ({
        widgets: [...state.widgets, widget]
      })),
      
      updateWidget: (id, updates) => set((state) => ({
        widgets: state.widgets.map(widget =>
          widget.id === id ? { ...widget, ...updates } : widget
        )
      })),
      
      removeWidget: (id) => set((state) => ({
        widgets: state.widgets.filter(widget => widget.id !== id)
      })),
      
      moveWidget: (id, position) => set((state) => ({
        widgets: state.widgets.map(widget =>
          widget.id === id ? { ...widget, position } : widget
        )
      })),
      
      setCustomizing: (customizing) => set({ isCustomizing: customizing }),
      
      resetToDefault: () => set({ widgets: defaultWidgets }),
      
      loadLayout: (layout) => set({ widgets: layout.widgets }),
      
      exportLayout: () => ({
        widgets: get().widgets,
        lastModified: new Date()
      })
    }),
    {
      name: 'dashboard-widgets',
      partialize: (state) => ({ widgets: state.widgets })
    }
  )
);
