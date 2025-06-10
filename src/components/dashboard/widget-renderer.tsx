'use client';

import { TrendingUp, DollarSign, Package, ShoppingCart } from 'lucide-react';
import { Widget } from '@/types/widget';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
interface WidgetRendererProps {
  widget: Widget;
}

// Mock data for demonstration
const mockData = {
  todayTransactions: 24,
  todayProfit: 1250000,
  totalProducts: 156,
  monthlyRevenue: 45000000,
  chartData: [{
    name: 'Mon',
    value: 400
  }, {
    name: 'Tue',
    value: 300
  }, {
    name: 'Wed',
    value: 600
  }, {
    name: 'Thu',
    value: 800
  }, {
    name: 'Fri',
    value: 500
  }]
};
const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    chart: '#3b82f6'
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    chart: '#10b981'
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    chart: '#8b5cf6'
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    chart: '#f59e0b'
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    chart: '#ef4444'
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    chart: '#6366f1'
  },
  pink: {
    bg: 'bg-pink-50',
    text: 'text-pink-600',
    chart: '#ec4899'
  }
};
export function WidgetRenderer({
  widget
}: WidgetRendererProps) {
  const colors = colorMap[widget.color as keyof typeof colorMap] || colorMap.blue;
  const value = mockData[widget.metric as keyof typeof mockData] || 0;
  const getIcon = () => {
    switch (widget.metric) {
      case 'todayTransactions':
        return ShoppingCart;
      case 'todayProfit':
        return TrendingUp;
      case 'totalProducts':
        return Package;
      case 'monthlyRevenue':
        return DollarSign;
      default:
        return TrendingUp;
    }
  };
  const Icon = getIcon();
  const formatValue = (val: number) => {
    if (widget.metric.includes('Revenue') || widget.metric.includes('Profit')) {
      return `Rp ${val.toLocaleString('id-ID')}`;
    }
    return val.toLocaleString();
  };
  const renderVisualization = () => {
    switch (widget.visualization) {
      case 'number':
        return <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {formatValue(value as number)}
              </h3>
              <p className="text-muted-foreground font-medium">{widget.title}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>
          </div>;
      case 'bar':
        return <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.chartData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Bar dataKey="value" fill={colors.chart} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>;
      case 'line':
        return <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData.chartData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Line type="monotone" dataKey="value" stroke={colors.chart} strokeWidth={3} dot={{
                  fill: colors.chart,
                  strokeWidth: 2,
                  r: 4
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>;
      case 'progress':
        const percentage = Math.min((value as number) / 1000 * 100, 100);
        return <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{formatValue(value as number)}</span>
                <span>{percentage.toFixed(1)}<span className="editable-text">%</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full transition-all duration-500" style={{
                width: `${percentage}%`,
                backgroundColor: colors.chart
              }} />
              </div>
            </div>
          </div>;
      default:
        return renderVisualization();
    }
  };
  return renderVisualization();
}