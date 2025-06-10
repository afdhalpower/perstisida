'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { BarChart3, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import { format, parseISO, eachDayOfInterval, startOfDay } from 'date-fns';
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
interface SalesChartsProps {
  data: SalesData[];
}
const COLORS = ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];
export function SalesCharts({
  data
}: SalesChartsProps) {
  // Daily sales trend
  const dailySales = data.reduce((acc, item) => {
    const dateKey = format(startOfDay(item.timestamp), 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = {
        date: dateKey,
        revenue: 0,
        profit: 0,
        quantity: 0,
        transactions: 0
      };
    }
    acc[dateKey].revenue += item.sellPrice * item.quantity;
    acc[dateKey].profit += item.profit;
    acc[dateKey].quantity += item.quantity;
    acc[dateKey].transactions += 1;
    return acc;
  }, {} as Record<string, any>);
  const dailyData = Object.values(dailySales).sort((a, b) => a.date.localeCompare(b.date)).map(item => ({
    ...item,
    date: format(parseISO(item.date), 'MMM dd')
  }));

  // Top products for pie chart
  const productRevenue = data.reduce((acc, item) => {
    const key = item.productName;
    if (!acc[key]) {
      acc[key] = {
        name: key,
        value: 0,
        quantity: 0
      };
    }
    acc[key].value += item.sellPrice * item.quantity;
    acc[key].quantity += item.quantity;
    return acc;
  }, {} as Record<string, any>);
  const pieData = Object.values(productRevenue).sort((a: any, b: any) => b.value - a.value).slice(0, 6);

  // Company performance
  const companyData = data.reduce((acc, item) => {
    if (!acc[item.company]) {
      acc[item.company] = {
        company: item.company,
        revenue: 0,
        profit: 0,
        quantity: 0
      };
    }
    acc[item.company].revenue += item.sellPrice * item.quantity;
    acc[item.company].profit += item.profit;
    acc[item.company].quantity += item.quantity;
    return acc;
  }, {} as Record<string, any>);
  const companyChartData = Object.values(companyData).sort((a: any, b: any) => b.revenue - a.revenue).slice(0, 8);
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="2d65e08b-8b59-4765-b699-196f51b86e6b" data-file-name="components/sales-report/sales-charts.tsx" data-dynamic-text="true">
      {/* Daily Sales Trend */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="glass-effect rounded-2xl p-6" data-unique-id="fe2ec5a3-69eb-4229-9383-33f0eafc3608" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="284848bb-292a-4eca-b968-610aa956aefc" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="0b883b92-a163-48fe-9aba-53ac0e0d55f5" data-file-name="components/sales-report/sales-charts.tsx">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="bd314b72-703d-4156-93d2-4be0bd48eb7d" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="3a95d0dc-feac-4eb6-9401-095707140cfd" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="955e1090-321f-44fe-93d3-89e3a6cbf067" data-file-name="components/sales-report/sales-charts.tsx">Sales Trend</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="b221e784-0f80-4515-9d9c-039dd6067c17" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="1266a00c-b2c0-40a9-9dd2-8f2d4a37104a" data-file-name="components/sales-report/sales-charts.tsx">Daily revenue and profit</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="d9d64d59-47d0-4d02-a866-8ded857b4c1a" data-file-name="components/sales-report/sales-charts.tsx">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="date" fontSize={12} tick={{
              fill: '#6b7280'
            }} />
              <YAxis fontSize={12} tick={{
              fill: '#6b7280'
            }} tickFormatter={value => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value: number, name: string) => [`Rp ${value.toLocaleString('id-ID')}`, name === 'revenue' ? 'Revenue' : 'Profit']} labelStyle={{
              color: '#374151'
            }} contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e5e5',
              borderRadius: '12px'
            }} />
              <Line type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={3} dot={{
              fill: '#059669',
              strokeWidth: 2,
              r: 4
            }} activeDot={{
              r: 6,
              stroke: '#059669',
              strokeWidth: 2
            }} />
              <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} dot={{
              fill: '#10b981',
              strokeWidth: 2,
              r: 4
            }} activeDot={{
              r: 6,
              stroke: '#10b981',
              strokeWidth: 2
            }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Product Revenue Distribution */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.1
    }} className="glass-effect rounded-2xl p-6" data-unique-id="9abc7c22-44e2-4cc4-9048-cf05daf17b9f" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="b5c5ff6d-3a30-4b25-ae0e-a8e94eb2fef0" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="da001c14-7240-4f66-a237-92cd7c9301b7" data-file-name="components/sales-report/sales-charts.tsx">
            <PieChartIcon className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="669e34fb-4917-4548-b95d-21a27d9e21a9" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="0ae09ce1-fc85-44c8-9059-d6bf6ff67bdc" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="9a5e7954-e79f-4c31-848f-a4bf1a1db1eb" data-file-name="components/sales-report/sales-charts.tsx">Revenue by Product</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="5c5980a4-95d1-478e-b078-a77629571b9f" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="ad5812e5-bb76-448b-aa93-5bf5367185fa" data-file-name="components/sales-report/sales-charts.tsx">Top 6 products</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="9d46494f-288c-4e28-991a-4d7deb61d044" data-file-name="components/sales-report/sales-charts.tsx">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} data-unique-id="d53e807b-4fdf-43c7-968e-2246d0cbcc22" data-file-name="components/sales-report/sales-charts.tsx" data-dynamic-text="true" />)}
              </Pie>
              <Tooltip formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Revenue']} contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e5e5',
              borderRadius: '12px'
            }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Company Performance */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }} className="glass-effect rounded-2xl p-6 lg:col-span-2" data-unique-id="61a7a9f5-960e-4919-b624-523ecfc35224" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="48910061-ca3f-4de0-a7ee-c55ee64f37a5" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="532a7b90-7950-4682-99ce-bf4ad9fe6ceb" data-file-name="components/sales-report/sales-charts.tsx">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="138c30b3-1cb3-4fbd-8efe-92d8c411ee54" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="7caab350-a2c8-4990-ad6a-34c5aee2e961" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="b6f38cd6-8ea9-493f-804f-0f2dbcaa1305" data-file-name="components/sales-report/sales-charts.tsx">Company Performance</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="9c4fea7b-6fed-46da-a7e2-9439f748e954" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="d7480c20-1908-4e08-8375-2fd0e35d63cc" data-file-name="components/sales-report/sales-charts.tsx">Revenue and profit by company</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="349a9116-a43d-4d1f-9d13-5df6f1fdeae3" data-file-name="components/sales-report/sales-charts.tsx">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={companyChartData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="company" fontSize={12} tick={{
              fill: '#6b7280'
            }} angle={-45} textAnchor="end" height={80} />
              <YAxis fontSize={12} tick={{
              fill: '#6b7280'
            }} tickFormatter={value => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value: number, name: string) => [`Rp ${value.toLocaleString('id-ID')}`, name === 'revenue' ? 'Revenue' : 'Profit']} labelStyle={{
              color: '#374151'
            }} contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e5e5',
              borderRadius: '12px'
            }} />
              <Bar dataKey="revenue" fill="#059669" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>;
}