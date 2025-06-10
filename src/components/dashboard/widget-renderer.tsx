'use client';

import { TrendingUp, DollarSign, Package, ShoppingCart } from 'lucide-react';
import { Widget } from '@/types/widget';
import { DashboardStats } from '@/types';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
interface WidgetRendererProps {
  widget: Widget;
  stats: DashboardStats;
  chartData?: any[];
}
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
  widget,
  stats,
  chartData = []
}: WidgetRendererProps) {
  const colors = colorMap[widget.color as keyof typeof colorMap] || colorMap.blue;
  const value = stats[widget.metric as keyof DashboardStats] || 0;
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
        return <div className="flex items-center justify-between" data-unique-id="76fbd023-3099-45bc-bb1c-f9ed0808c294" data-file-name="components/dashboard/widget-renderer.tsx">
            <div data-unique-id="7804af59-6c91-48df-af7f-a8c31011f613" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="text-2xl font-bold text-foreground mb-1" data-unique-id="53d63166-43dc-426e-a8f5-5e25546f269e" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">
                {formatValue(value as number)}
              </h3>
              <p className="text-muted-foreground font-medium" data-unique-id="5147304d-e08f-4c5f-8741-f70b2c47d94c" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`} data-unique-id="c47d6db3-316b-4731-8773-aa0001744208" data-file-name="components/dashboard/widget-renderer.tsx">
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>
          </div>;
      case 'bar':
        return <div data-unique-id="a3672f39-863c-40bd-8810-3931d1a01572" data-file-name="components/dashboard/widget-renderer.tsx">
            <div className="flex items-center justify-between mb-4" data-unique-id="f6151570-fc60-4717-9212-f5bb2e5dca06" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="font-semibold" data-unique-id="1b94032f-def4-4f4c-b232-12bb65abf446" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="h-32" data-unique-id="1e12f98b-2484-4604-b419-d34a021df090" data-file-name="components/dashboard/widget-renderer.tsx">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Bar dataKey="value" fill={colors.chart} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>;
      case 'line':
        return <div data-unique-id="efa4a4be-82dd-488a-a1c5-4d501b342892" data-file-name="components/dashboard/widget-renderer.tsx">
            <div className="flex items-center justify-between mb-4" data-unique-id="08d9f35c-3f6a-4544-a985-f248960fbfeb" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="font-semibold" data-unique-id="5c38cf0b-26eb-4632-883e-3fe5405a1d0e" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="h-32" data-unique-id="af1c559d-48d5-4b4b-9a5b-1cb5f67aa2aa" data-file-name="components/dashboard/widget-renderer.tsx">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
        return <div data-unique-id="98035221-3361-4d68-9c52-9606b108d70a" data-file-name="components/dashboard/widget-renderer.tsx">
            <div className="flex items-center justify-between mb-4" data-unique-id="914803be-a17f-434b-9026-7bd13286ab55" data-file-name="components/dashboard/widget-renderer.tsx">
              <h3 className="font-semibold" data-unique-id="327c690c-a40e-45f7-92be-b975b6a07027" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{widget.title}</h3>
              <Icon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="space-y-2" data-unique-id="7f0bff4c-fd34-494a-bc27-7a28c0dea93a" data-file-name="components/dashboard/widget-renderer.tsx">
              <div className="flex justify-between text-sm" data-unique-id="7971b81c-b282-4da7-bb03-25099fcd63c0" data-file-name="components/dashboard/widget-renderer.tsx">
                <span data-unique-id="34c3a792-a80a-439e-8703-258f7ec3a8dc" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{formatValue(value as number)}</span>
                <span data-unique-id="464a7b73-ef6f-4b39-b551-97aed13bf34b" data-file-name="components/dashboard/widget-renderer.tsx" data-dynamic-text="true">{percentage.toFixed(1)}<span className="editable-text" data-unique-id="8be1731a-aa5f-4a7f-911f-edd196e9880b" data-file-name="components/dashboard/widget-renderer.tsx">%</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2" data-unique-id="27fd5af8-2d28-45f3-82f6-d6898bcb7992" data-file-name="components/dashboard/widget-renderer.tsx">
                <div className="h-2 rounded-full transition-all duration-500" style={{
                width: `${percentage}%`,
                backgroundColor: colors.chart
              }} data-unique-id="fe0868dd-ac4b-47e9-9282-1e071fa1cded" data-file-name="components/dashboard/widget-renderer.tsx" />
              </div>
            </div>
          </div>;
      default:
        return renderVisualization();
    }
  };
  return renderVisualization();
}