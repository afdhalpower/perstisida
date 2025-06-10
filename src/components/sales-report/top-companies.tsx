'use client';

import { motion } from 'framer-motion';
import { Building, TrendingUp, Package } from 'lucide-react';
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
interface TopCompaniesProps {
  data: SalesData[];
}
interface CompanySummary {
  company: string;
  totalRevenue: number;
  totalProfit: number;
  totalQuantity: number;
  productCount: number;
  transactionCount: number;
  averageOrderValue: number;
}
export function TopCompanies({
  data
}: TopCompaniesProps) {
  // Aggregate company data with temporary type for Set
  const companySummaries = data.reduce((acc, item) => {
    if (!acc[item.company]) {
      acc[item.company] = {
        company: item.company,
        totalRevenue: 0,
        totalProfit: 0,
        totalQuantity: 0,
        productCount: new Set<string>(),
        transactionCount: 0,
        averageOrderValue: 0
      };
    }
    acc[item.company].totalRevenue += item.sellPrice * item.quantity;
    acc[item.company].totalProfit += item.profit;
    acc[item.company].totalQuantity += item.quantity;
    acc[item.company].productCount.add(item.productName);
    acc[item.company].transactionCount += 1;
    return acc;
  }, {} as Record<string, Omit<CompanySummary, 'productCount'> & {
    productCount: Set<string>;
  }>);
  const topCompanies = Object.values(companySummaries).map(company => ({
    ...company,
    productCount: company.productCount.size,
    averageOrderValue: company.transactionCount > 0 ? company.totalRevenue / company.transactionCount : 0
  })).sort((a, b) => b.totalRevenue - a.totalRevenue).slice(0, 8);
  const maxRevenue = Math.max(...topCompanies.map(c => c.totalRevenue));
  return <motion.div initial={{
    opacity: 0,
    x: 20
  }} animate={{
    opacity: 1,
    x: 0
  }} className="glass-effect rounded-2xl p-6" data-unique-id="3f8f8f84-51b1-433a-8217-e6452043061c" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
      <div className="flex items-center gap-3 mb-6" data-unique-id="520f7ac7-71ea-41de-bdb0-bedfa1f77a4f" data-file-name="components/sales-report/top-companies.tsx">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="e5c5255f-cdfd-449d-862e-4cf64ce5d037" data-file-name="components/sales-report/top-companies.tsx">
          <Building className="w-5 h-5 text-white" />
        </div>
        <div data-unique-id="eea0a59c-9aba-46ab-aa73-9276bd11cb9f" data-file-name="components/sales-report/top-companies.tsx">
          <h2 className="text-xl font-bold" data-unique-id="ed7cd410-5e47-41cf-bcfd-4c399f89572f" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="fe7458ac-5e2d-40b2-bc4d-8b87c7f5045a" data-file-name="components/sales-report/top-companies.tsx">Top Contributing Companies</span></h2>
          <p className="text-sm text-muted-foreground" data-unique-id="09e2e2ef-8c2c-4377-8119-32344f2abaf8" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="b8b0ed50-021e-4b12-81d2-241d93a8563f" data-file-name="components/sales-report/top-companies.tsx">Ranked by total revenue</span></p>
        </div>
      </div>

      <div className="space-y-4" data-unique-id="84529c6f-d61c-4163-972b-c78d04c0bdf8" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
        {topCompanies.map((company, index) => {
        const revenuePercentage = company.totalRevenue / maxRevenue * 100;
        return <motion.div key={company.company} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="p-4 rounded-xl border border-border hover:bg-accent/30 transition-colors" data-unique-id="5866fcae-aa43-4c3c-b63f-ae1f81666850" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-3" data-unique-id="152ea41e-e204-40c5-b42f-3891de595483" data-file-name="components/sales-report/top-companies.tsx">
                <div className="flex items-center gap-3" data-unique-id="5be4946a-7347-4777-8db0-7d8d6c2bb6e3" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-secondary flex items-center justify-center" data-unique-id="291422f8-7819-4cd1-8a68-f4d57fe6c89d" data-file-name="components/sales-report/top-companies.tsx">
                    <span className="text-primary font-bold text-sm" data-unique-id="77e82ccc-5d95-4d83-95f2-47f7b44c1fd6" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a5472578-f46c-4646-bc27-092b9075a7c1" data-file-name="components/sales-report/top-companies.tsx">#</span>{index + 1}</span>
                  </div>
                  <div data-unique-id="4ddea628-0cd5-41f1-ba2d-32072c2ef690" data-file-name="components/sales-report/top-companies.tsx">
                    <h3 className="font-semibold text-foreground" data-unique-id="bdc99cd1-c563-403c-84be-d45247b2d5a7" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">{company.company}</h3>
                    <p className="text-xs text-muted-foreground" data-unique-id="a87d528f-8b7a-4ef1-bb4f-8c1770cb8b91" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
                      {company.productCount}<span className="editable-text" data-unique-id="92f6e49e-e96b-41ce-95d6-fa6cfe3222dc" data-file-name="components/sales-report/top-companies.tsx"> products • </span>{company.transactionCount}<span className="editable-text" data-unique-id="08621b28-63e0-4169-9829-9c999fefbdd6" data-file-name="components/sales-report/top-companies.tsx"> orders
                    </span></p>
                  </div>
                </div>
                <div className="text-right" data-unique-id="47d15687-b352-4e97-9685-70b9c8a18577" data-file-name="components/sales-report/top-companies.tsx">
                  <p className="font-bold text-green-600" data-unique-id="633bd9e2-9698-4e34-81a7-775c3d018c7d" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="9baf1343-8863-47b5-8d8e-ceba2934c80c" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground" data-unique-id="44bf8873-9546-4c78-9853-5f1ee0d9dcb3" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="78f5aea2-235f-4c1d-b79d-fb9f796efa47" data-file-name="components/sales-report/top-companies.tsx">revenue</span></p>
                </div>
              </div>

              {/* Revenue Bar */}
              <div className="mb-3" data-unique-id="07b6e3c8-8774-462f-bd0f-485ad2487eac" data-file-name="components/sales-report/top-companies.tsx">
                <div className="w-full bg-gray-200 rounded-full h-2" data-unique-id="a072ca63-c122-465c-933d-b02eb7f21bcb" data-file-name="components/sales-report/top-companies.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${revenuePercentage}%`
              }} transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.8
              }} className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" data-unique-id="7cf8995a-a8a1-4e70-b13b-1024adb2779f" data-file-name="components/sales-report/top-companies.tsx" />
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="e5ce657a-98d9-4703-9b6b-cb2dab6c2104" data-file-name="components/sales-report/top-companies.tsx">
                <div className="text-center p-2 rounded-lg bg-blue-50" data-unique-id="e16ce05c-4c7a-4303-aaf5-9fe7daa1c7f0" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="7211d87b-340d-465a-a20d-913b84a64886" data-file-name="components/sales-report/top-companies.tsx">
                    <Package className="w-3 h-3 text-blue-600" data-unique-id="a10e6c38-0b6a-4f6b-a125-eca09b609a71" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true" />
                    <span className="text-xs text-blue-700" data-unique-id="6888ef1c-5de1-4e36-9509-e315f4844c5d" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="f9ef09b1-b86f-4a5e-bf31-7974f366ad25" data-file-name="components/sales-report/top-companies.tsx">Quantity</span></span>
                  </div>
                  <p className="font-semibold text-blue-600" data-unique-id="1783503b-522d-4b45-9b41-1196ab727bf8" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">{company.totalQuantity}</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-purple-50" data-unique-id="91b43b4f-cf39-44a9-9008-aadf186e7a62" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="ab9ed242-aebe-4b21-b82a-33cf9257cc58" data-file-name="components/sales-report/top-companies.tsx">
                    <TrendingUp className="w-3 h-3 text-purple-600" data-unique-id="16f3bd07-696b-47ce-a3bd-e1a5d7be6f7f" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true" />
                    <span className="text-xs text-purple-700" data-unique-id="46bf47e2-fec5-4053-aaa4-4c35b02430e9" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="168733a8-4a3c-40bc-9b6e-3470d326ddb7" data-file-name="components/sales-report/top-companies.tsx">Profit</span></span>
                  </div>
                  <p className="font-semibold text-purple-600" data-unique-id="fe4ff1a5-f240-4fd2-94f4-351bfaeafb3d" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="3d980684-c4b3-4707-b631-7595ebe0eaa0" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.totalProfit.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="text-center p-2 rounded-lg bg-orange-50" data-unique-id="a2e5bd81-64ea-4a74-9c9e-8ae97b30414b" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="dde25dc0-9437-4c94-92e6-6af02f14fe82" data-file-name="components/sales-report/top-companies.tsx">
                    <span className="text-xs text-orange-700" data-unique-id="9de133c1-b6d2-4697-8500-165dc917f77c" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="d1d8e524-bda3-4585-b1f1-f2982f869175" data-file-name="components/sales-report/top-companies.tsx">Avg Order</span></span>
                  </div>
                  <p className="font-semibold text-orange-600" data-unique-id="91824759-abad-4728-8edc-52535a5aaa8f" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="1cd67246-835b-49fc-9e0a-9b9c34d52f56" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.averageOrderValue.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </motion.div>;
      })}
      </div>

      {topCompanies.length === 0 && <div className="text-center py-8" data-unique-id="557a772e-abd4-4658-b33b-f4e6f39cdb1e" data-file-name="components/sales-report/top-companies.tsx">
          <Building className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground" data-unique-id="40bc66f9-4029-4492-83c0-5be03b1e0145" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="47f1e141-8059-4f44-85ba-232cd357cfab" data-file-name="components/sales-report/top-companies.tsx">No company data available for this date range</span></p>
        </div>}
    </motion.div>;
}