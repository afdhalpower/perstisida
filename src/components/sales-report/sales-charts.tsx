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
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="ed338ce3-193e-42eb-a974-3c041d4cf496" data-file-name="components/sales-report/sales-charts.tsx" data-dynamic-text="true">
      {/* Daily Sales Trend */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="glass-effect rounded-2xl p-6" data-unique-id="ab925998-b97f-41c4-b5a9-c4fda61695a2" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="d221b639-50d5-4cf0-890a-b3910de34d85" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="51196a93-f3b9-44df-a86b-0103f590738d" data-file-name="components/sales-report/sales-charts.tsx">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="49b0748b-4ca3-4c2a-a900-b0d8f10ca327" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="5e74f1e3-025c-49c9-b925-6934d34b3f3e" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="bdd29189-b6b1-4815-9a45-33ebefc654a4" data-file-name="components/sales-report/sales-charts.tsx">Sales Trend</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="beab4c3f-2915-49de-9b21-88baf0f8023a" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="905b1a08-0d28-4043-b194-f32b48724522" data-file-name="components/sales-report/sales-charts.tsx">Daily revenue and profit</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="622d5a39-f2ce-4072-8b7a-360ea8d1b1d0" data-file-name="components/sales-report/sales-charts.tsx">
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
    }} className="glass-effect rounded-2xl p-6" data-unique-id="3bba5eab-dff2-4267-a7e9-b2dd06ec0880" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="7a01137d-9dec-4861-88ab-97711cdd049e" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="ae6427e4-eac4-48d5-bd89-291f4b3478a7" data-file-name="components/sales-report/sales-charts.tsx">
            <PieChartIcon className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="4772975b-f2c1-45b4-9ac2-4c3159178fc0" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="2a107e3c-5443-425a-98b0-cc6f345c4fde" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="4b6536d6-95b8-4a29-b1d9-21c4e5b9a234" data-file-name="components/sales-report/sales-charts.tsx">Revenue by Product</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="a833f100-b21a-4fb1-94ba-acd66a0225f0" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="67f9957b-2513-4c98-bac5-432a68d03d3d" data-file-name="components/sales-report/sales-charts.tsx">Top 6 products</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="b2050b59-c30d-4fab-815d-08dfa1bc1a84" data-file-name="components/sales-report/sales-charts.tsx">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} data-unique-id="612d228e-2ad2-4367-9ce3-8340a2273df7" data-file-name="components/sales-report/sales-charts.tsx" data-dynamic-text="true" />)}
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
    }} className="glass-effect rounded-2xl p-6 lg:col-span-2" data-unique-id="fb536349-e8e3-4f1f-8687-8ad58089e70a" data-file-name="components/sales-report/sales-charts.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="710fe54e-d67f-40ee-9f33-61c26c326c56" data-file-name="components/sales-report/sales-charts.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="2ec92154-2adf-483e-9ccd-bd9e808ecd8b" data-file-name="components/sales-report/sales-charts.tsx">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="fdf6faee-8094-40c9-a1ec-f5fa885c500f" data-file-name="components/sales-report/sales-charts.tsx">
            <h3 className="text-xl font-bold" data-unique-id="c6479835-81d2-42a6-b577-06ab22d5e2ac" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="b1c7d6d9-6bd8-4b38-8e9e-a58755f1ac56" data-file-name="components/sales-report/sales-charts.tsx">Company Performance</span></h3>
            <p className="text-sm text-muted-foreground" data-unique-id="5161952e-37ab-493d-8ad9-dbe729c1a9a6" data-file-name="components/sales-report/sales-charts.tsx"><span className="editable-text" data-unique-id="0f133f4f-324c-4d2a-ab84-4b5eb20fd9e6" data-file-name="components/sales-report/sales-charts.tsx">Revenue and profit by company</span></p>
          </div>
        </div>
        
        <div className="h-80" data-unique-id="3651fd20-df23-408a-b6ed-fd82775826b6" data-file-name="components/sales-report/sales-charts.tsx">
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