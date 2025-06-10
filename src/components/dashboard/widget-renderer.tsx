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
        return <div className="flex items-center justify-between" data-unique-id="ec289ae8-902a-49a8-bc4e-6a2ac5fb3a9d" data-file-name="components/dashboard/widget-renderer.tsx">
            <div data-unique-id="eb35f197-7373-497a-96d0-096f8364b8cf" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="244b7307-2b0f-4f0b-a145-17779ad82519" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">
                {formatValue(value as number)}
              </h3>
              <p className="text-muted-foreground font-medium" data-unique-id="90de7286-916f-4a27-b623-bdedd2d51728" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`} data-unique-id="c7cdbf44-df62-44bc-97b4-084f4eac22f5" data-file-name="components/dashboard/widget-renderer.tsx">
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>
          </div>;
      case 'bar':
        return <div data-unique-id="e82baebf-9301-49d4-b3f3-64badb9dc9cb" data-file-name="components/dashboard/widget-renderer.tsx">
            <div className="flex items-center justify-between mb-4" data-unique-id="82191f45-cb95-4539-8980-30b786b87deb" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="font-semibold" data-unique-id="15953d30-ad63-4b4c-a4ea-882bc0960209" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="h-32" data-unique-id="ff85b58d-4240-4cdc-a2ff-7e3d1034bf9f" data-file-name="components/dashboard/widget-renderer.tsx">
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
        return <div data-unique-id="adfba86f-f994-4a35-ab25-018469cbb248" data-file-name="components/dashboard/widget-renderer.tsx">
            <div className="flex items-center justify-between mb-4" data-unique-id="0b0448d5-b0a5-4f86-8776-3329fc78c2d9" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="font-semibold" data-unique-id="9805338d-0a86-4d6c-819b-021992c7dbe5" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="h-32" data-unique-id="b9b1942c-e56a-4aba-8ad1-85da550bac64" data-file-name="components/dashboard/widget-renderer.tsx">
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
        return <div data-unique-id="f4802f7d-78bd-4d2d-9c7c-48b9e3ea9ffd" data-file-name="components/dashboard/widget-renderer.tsx">
            <div className="flex items-center justify-between mb-4" data-unique-id="c7588f05-c9c3-4f09-80f8-daef7888a36d" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="font-semibold" data-unique-id="24db9fd0-547b-44e2-a8f9-dba2046c3a37" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="space-y-2" data-unique-id="19e97a87-e11f-4235-b3c0-bde78ebae5fb" data-file-name="components/dashboard/widget-renderer.tsx">
              <div className="flex justify-between text-sm" data-unique-id="90ac0ef6-bccc-4673-900b-8c0c122baabb" data-file-name="components/dashboard/widget-renderer.tsx">
                <span data-unique-id="82cd63e3-ace3-4165-b4bc-243836c0fa1d" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{formatValue(value as number)}</span>
                <span data-unique-id="6808ce85-babf-4960-824e-385603c5185c" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{percentage.toFixed(1)}<span className="editable-text" data-unique-id="ba41e8e4-da71-4582-91ae-c6f5d618b5cd" data-file-name="components/dashboard/widget-renderer.tsx">%</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2" data-unique-id="0fd3d26f-3a70-4d55-b96f-30b06ea38e8f" data-file-name="components/dashboard/widget-renderer.tsx">
                <div className="h-2 rounded-full transition-all duration-500" style={{
                width: `${percentage}%`,
                backgroundColor: colors.chart
              }} data-unique-id="ce67fdfa-df50-425f-a8e4-07d1a63b3856" data-file-name="components/dashboard/widget-renderer.tsx" />
              </div>
            </div>
          </div>;
      default:
        return renderVisualization();
    }
  };
  return renderVisualization();
}