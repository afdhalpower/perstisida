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
  }} className="glass-effect rounded-2xl p-6" data-unique-id="ca18c1c5-b9b5-4a87-9867-beedfca2a6eb" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
      <div className="flex items-center gap-3 mb-6" data-unique-id="cc85526e-175a-47dc-b6ee-bfc3f133ff3a" data-file-name="components/sales-report/top-companies.tsx">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="ba2b6311-a07c-4085-80c0-1a16ad3cf7cd" data-file-name="components/sales-report/top-companies.tsx">
          <Building className="w-5 h-5 text-white" />
        </div>
        <div data-unique-id="3dbde46b-33c0-4807-bac3-c2d60f850a66" data-file-name="components/sales-report/top-companies.tsx">
          <h2 className="text-xl font-bold" data-unique-id="8ae9383d-ab65-42c4-a0e6-885d48eb2d27" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="89537d93-7f4d-4c42-b91d-a787a2fb9b3e" data-file-name="components/sales-report/top-companies.tsx">Top Contributing Companies</span></h2>
          <p className="text-sm text-muted-foreground" data-unique-id="d2b81733-0e47-42fa-b4d2-d4ed8882bc02" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="a59ac195-89ae-4fe9-95c5-1a360a3f5a31" data-file-name="components/sales-report/top-companies.tsx">Ranked by total revenue</span></p>
        </div>
      </div>

      <div className="space-y-4" data-unique-id="331c06d4-30ea-47c6-b28a-2c73939aaa18" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
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
        }} className="p-4 rounded-xl border border-border hover:bg-accent/30 transition-colors" data-unique-id="b704e1cb-df67-473f-8654-a8ab9ca1b4ec" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-3" data-unique-id="12ba5fe0-2ba3-419a-b1c9-25427e44f2f2" data-file-name="components/sales-report/top-companies.tsx">
                <div className="flex items-center gap-3" data-unique-id="d4ffa561-f761-4637-8654-8675f9bc7f97" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-secondary flex items-center justify-center" data-unique-id="b4b81f68-bcca-42e7-b34d-778b8e3034ad" data-file-name="components/sales-report/top-companies.tsx">
                    <span className="text-primary font-bold text-sm" data-unique-id="a8da1516-d739-4a09-af73-f79d5950882f" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c3afda5f-1c61-42ef-b493-006ff1b9c2b6" data-file-name="components/sales-report/top-companies.tsx">#</span>{index + 1}</span>
                  </div>
                  <div data-unique-id="6e76b21c-4eb1-41e6-a45f-0ee581223f2b" data-file-name="components/sales-report/top-companies.tsx">
                    <h3 className="font-semibold text-foreground" data-unique-id="6bf9e9fe-a28f-41c3-b93d-ee93d6267ea9" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">{company.company}</h3>
                    <p className="text-xs text-muted-foreground" data-unique-id="3870fbd2-281b-4342-9b89-0b55b9a8bc32" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
                      {company.productCount}<span className="editable-text" data-unique-id="e1e73ea5-d1ed-4be4-a422-e5d22568d434" data-file-name="components/sales-report/top-companies.tsx"> products • </span>{company.transactionCount}<span className="editable-text" data-unique-id="9b24f2f5-e8bb-4174-a39b-cd4f39de2e0c" data-file-name="components/sales-report/top-companies.tsx"> orders
                    </span></p>
                  </div>
                </div>
                <div className="text-right" data-unique-id="526ff5c8-fdd9-498f-a7d5-eb11dd2d161e" data-file-name="components/sales-report/top-companies.tsx">
                  <p className="font-bold text-green-600" data-unique-id="c055969d-a9a1-42c5-bd9e-9ba139681197" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f65d9277-b236-4a75-aff9-570e272ed2f7" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground" data-unique-id="69d1522e-e6b9-45e1-8d41-89d15f50b88b" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="89d6607e-44b8-4d2b-830c-00ce6ac013f4" data-file-name="components/sales-report/top-companies.tsx">revenue</span></p>
                </div>
              </div>

              {/* Revenue Bar */}
              <div className="mb-3" data-unique-id="3809b407-484e-4188-8d85-c91a65799ba6" data-file-name="components/sales-report/top-companies.tsx">
                <div className="w-full bg-gray-200 rounded-full h-2" data-unique-id="a7caa341-a4e0-4d29-b0e1-2568d63f59fc" data-file-name="components/sales-report/top-companies.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${revenuePercentage}%`
              }} transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.8
              }} className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" data-unique-id="45dc45ae-f4dc-49a7-8cc8-d0f4e2271868" data-file-name="components/sales-report/top-companies.tsx" />
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="3021eb6e-c077-4ae8-ab65-96d9f2f76584" data-file-name="components/sales-report/top-companies.tsx">
                <div className="text-center p-2 rounded-lg bg-blue-50" data-unique-id="d5c2931d-2da3-44a2-8499-a766260c78bb" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="d20e7602-c54e-4c7d-8c56-ebc30ab8bd78" data-file-name="components/sales-report/top-companies.tsx">
                    <Package className="w-3 h-3 text-blue-600" data-unique-id="d2c4c098-fa73-42da-97cc-0fa86f8f3806" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true" />
                    <span className="text-xs text-blue-700" data-unique-id="e7378dc9-7172-4183-a61f-ae2847fd88c1" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="5dd1a021-78f8-4830-9506-5cf92c14162a" data-file-name="components/sales-report/top-companies.tsx">Quantity</span></span>
                  </div>
                  <p className="font-semibold text-blue-600" data-unique-id="f420aca2-8aa9-42df-be92-f051c425b099" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">{company.totalQuantity}</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-purple-50" data-unique-id="da671988-8e8a-4bd7-a5ab-be0257420096" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="f49d6a03-0eec-4a57-a666-4cafbc5d3c85" data-file-name="components/sales-report/top-companies.tsx">
                    <TrendingUp className="w-3 h-3 text-purple-600" data-unique-id="f4a2d2fc-fea9-4e41-b240-023054ab78cb" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true" />
                    <span className="text-xs text-purple-700" data-unique-id="9cf4c159-1287-48f7-80e4-79cc3cbb738c" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="d5add0bf-4faa-449a-9ef8-8b7b53e280f2" data-file-name="components/sales-report/top-companies.tsx">Profit</span></span>
                  </div>
                  <p className="font-semibold text-purple-600" data-unique-id="238023db-1713-42bf-a1e9-f001b349c501" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="48175439-8254-4977-bbe8-cadd415539b6" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.totalProfit.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="text-center p-2 rounded-lg bg-orange-50" data-unique-id="c355fdd3-6862-4b56-ab81-ee909414666c" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="2a6c0f90-86fc-4e49-b6c5-ca0904789a9f" data-file-name="components/sales-report/top-companies.tsx">
                    <span className="text-xs text-orange-700" data-unique-id="4ced48b5-714f-49ff-a78a-4549671fac17" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="f9a04ac9-544b-41b3-8f6a-4c66efbfa4b8" data-file-name="components/sales-report/top-companies.tsx">Avg Order</span></span>
                  </div>
                  <p className="font-semibold text-orange-600" data-unique-id="d5ff5142-d4c4-43e3-8311-cbd90137c5ec" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b63ad790-823f-4c72-8936-a678be2e2329" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.averageOrderValue.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </motion.div>;
      })}
      </div>

      {topCompanies.length === 0 && <div className="text-center py-8" data-unique-id="eda74507-b879-4c85-b88b-69568019662c" data-file-name="components/sales-report/top-companies.tsx">
          <Building className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground" data-unique-id="e5b58b3e-6d7c-48b2-b9e5-2f8769f81fd7" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="4f47daff-1691-4f6e-bf2d-4333c5b47bef" data-file-name="components/sales-report/top-companies.tsx">No company data available for this date range</span></p>
        </div>}
    </motion.div>;
}