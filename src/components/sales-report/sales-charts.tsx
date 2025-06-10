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
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="80612536-d6b0-40c7-9d66-e183afe34f9f" data-file-name="components/sales-report/sales-charts.tsx" data-dynamic-text="true">
      {/* Daily Sales Trend */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="glass-effect rounded-2xl p-6" data-unique-id="4838c552-65ab-43da-8832-ab36141a960e" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="4314491a-599c-4635-988b-5b3f6f958d64" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="0b4ed7c6-e8f5-442f-95c4-b53e407fabe3" data-file-name="components/sales-report/sales-charts.tsx">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="1cf04026-4fb1-4dde-8fb6-10fc23b9eef1" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="21c07f04-406f-42db-bd10-1fd09907dd44" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="d3e4c397-02c1-40bf-b707-ad3b11e7fa05" data-file-name="components/sales-report/sales-charts.tsx">Sales Trend</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="7004661c-9d2b-4bb5-955b-7d40a033b185" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="146febe8-3cb9-4d43-9a68-551948ea4557" data-file-name="components/sales-report/sales-charts.tsx">Daily revenue and profit</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="3e854f30-c011-4058-85c9-cbf7d74aa729" data-file-name="components/sales-report/sales-charts.tsx">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="d218d498-214f-4c29-8ca6-11ec92d6dee2" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="d9e1d4c1-04af-40b6-b648-94f4a4aa5752" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="78c25642-6740-4f82-99a1-fe527475e4a4" data-file-name="components/sales-report/sales-charts.tsx">
            <PieChartIcon className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="925aa2c1-bee8-4bd8-b997-eb0945fd89ee" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="d81a6a94-13eb-431d-b729-c8a945d3d42d" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="d88022df-c87f-471c-b2d5-21f432a601f5" data-file-name="components/sales-report/sales-charts.tsx">Revenue by Product</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="bf043a5d-162c-42eb-ab3a-a02847e3a3c6" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="e5bbd2fc-7ad2-4802-b3f6-15aebdcdb495" data-file-name="components/sales-report/sales-charts.tsx">Top 6 products</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="0efb6fe4-32f8-4fdf-b814-12532a297b55" data-file-name="components/sales-report/sales-charts.tsx">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} data-unique-id="2ddba488-b33c-41c9-a5a6-11076a4629c9" data-file-name="components/sales-report/sales-charts.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6 lg:col-span-2" data-unique-id="0130a1d7-b70e-40b1-83b1-c208b8672f81" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="0c391f30-91d6-4322-b353-d440b3a50958" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="63b8344e-9e2f-499b-97f8-c0472015066e" data-file-name="components/sales-report/sales-charts.tsx">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="5843e67d-f388-4b43-a2df-94d4ef480659" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="3bcf21ce-3b92-46d4-80f9-45fae43adc5f" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="9aa26f8f-a37e-46cd-9133-f2e8b5ae8269" data-file-name="components/sales-report/sales-charts.tsx">Company Performance</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="793ebaad-c77a-4832-8786-764fda2d72d2" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="d42ed456-55e1-40f5-83c3-8a843f66ad4e" data-file-name="components/sales-report/sales-charts.tsx">Revenue and profit by company</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="d0dd4cb6-af78-44da-9550-80ea3943ba9d" data-file-name="components/sales-report/sales-charts.tsx">
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