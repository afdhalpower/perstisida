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
  }} className="glass-effect rounded-2xl p-6" data-unique-id="5a1d6307-9891-4bfd-b710-818fe87290c6" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
      <div className="flex items-center gap-3 mb-6" data-unique-id="fccc5ab5-0a98-4637-bea5-a2cf0da8484c" data-file-name="components/sales-report/top-companies.tsx">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="8f4cb4ad-7d8c-4345-8e1a-8a5223f807c7" data-file-name="components/sales-report/top-companies.tsx">
          <Building className="w-5 h-5 text-white" />
        </div>
        <div data-unique-id="1a628710-3fb0-48e6-92f6-70c56293cc14" data-file-name="components/sales-report/top-companies.tsx">
          <h2 className="text-xl font-bold" data-unique-id="1955ff7f-2448-48b5-9a41-a9607572e3d5" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="9aa2c49d-0bd6-4115-bc59-b7fa4eea4bb1" data-file-name="components/sales-report/top-companies.tsx">Top Contributing Companies</span></h2>
          <p className="text-sm text-muted-foreground" data-unique-id="b37aca4c-eddc-47df-82b0-3409e1984088" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="0d769456-e43a-4bc5-ab62-2ea6db9311c2" data-file-name="components/sales-report/top-companies.tsx">Ranked by total revenue</span></p>
        </div>
      </div>

      <div className="space-y-4" data-unique-id="dc41d611-af7d-47e4-89f4-cbbbf4d8b861" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
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
        }} className="p-4 rounded-xl border border-border hover:bg-accent/30 transition-colors" data-unique-id="07aafb9c-6bbd-4eee-9fa6-fc9984ebdb6c" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-3" data-unique-id="25dccc3f-bbd0-4c36-882f-93a7cf3beabb" data-file-name="components/sales-report/top-companies.tsx">
                <div className="flex items-center gap-3" data-unique-id="a8fd1326-50b0-4e85-a449-15a82bd6b278" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-secondary flex items-center justify-center" data-unique-id="d7b27e39-006a-45c6-bd50-bdd4cb566f03" data-file-name="components/sales-report/top-companies.tsx">
                    <span className="text-primary font-bold text-sm" data-unique-id="0b8e79a7-13d2-4c3a-902c-dc0bb05ce7ee" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ba1c27b6-c21c-4fa0-bf08-1a1475b56dc7" data-file-name="components/sales-report/top-companies.tsx">#</span>{index + 1}</span>
                  </div>
                  <div data-unique-id="54ebd3b0-ee8f-4723-8ac7-cb0fe2df2182" data-file-name="components/sales-report/top-companies.tsx">
                    <h3 className="font-semibold text-foreground" data-unique-id="3cba4606-4896-4d10-816d-ee24da23413f" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">{company.company}</h3>
                    <p className="text-xs text-muted-foreground" data-unique-id="30f71e28-a7c8-4e71-93b5-ef9cd26aaae5" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">
                      {company.productCount}<span className="editable-text" data-unique-id="da055b00-2e93-4b66-9d28-95e15a8ade4d" data-file-name="components/sales-report/top-companies.tsx"> products • </span>{company.transactionCount}<span className="editable-text" data-unique-id="a94fc5af-8b77-4a04-a9fb-47299761ab72" data-file-name="components/sales-report/top-companies.tsx"> orders
                    </span></p>
                  </div>
                </div>
                <div className="text-right" data-unique-id="5e2152bc-bf1f-4a4a-980d-b8f9ac36f296" data-file-name="components/sales-report/top-companies.tsx">
                  <p className="font-bold text-green-600" data-unique-id="6d74b89b-6c13-480a-b227-bd90e02bf3e1" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="05dfb3ea-80d1-4a7b-901a-c7e0b8093a95" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground" data-unique-id="368856f9-9054-4ac9-9452-15710ae46404" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="8570b038-be78-44eb-b1d6-e83cd0fea07f" data-file-name="components/sales-report/top-companies.tsx">revenue</span></p>
                </div>
              </div>

              {/* Revenue Bar */}
              <div className="mb-3" data-unique-id="0035efb5-d4d0-4d10-b36d-7cd0959bd276" data-file-name="components/sales-report/top-companies.tsx">
                <div className="w-full bg-gray-200 rounded-full h-2" data-unique-id="30881548-dadd-429e-9023-5d17b069e90e" data-file-name="components/sales-report/top-companies.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${revenuePercentage}%`
              }} transition={{
                delay: index * 0.1 + 0.3,
                duration: 0.8
              }} className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" data-unique-id="fc0053cd-f33b-47e6-8739-ae59f15d156b" data-file-name="components/sales-report/top-companies.tsx" />
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-3 gap-4 text-sm" data-unique-id="2db5919b-a7e2-4f66-a877-96efae9945fc" data-file-name="components/sales-report/top-companies.tsx">
                <div className="text-center p-2 rounded-lg bg-blue-50" data-unique-id="696cfdbf-a39e-4735-a9ba-9c5c6715e344" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="ea000b38-e2e7-4375-844a-3cd8e9a03d50" data-file-name="components/sales-report/top-companies.tsx">
                    <Package className="w-3 h-3 text-blue-600" data-unique-id="5e303b97-4ead-403c-81ab-4cf1772437cd" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true" />
                    <span className="text-xs text-blue-700" data-unique-id="36546d52-0169-41c9-b2a1-7f30356b2f74" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="3a233cd5-c549-498d-9a07-cce7bfde7372" data-file-name="components/sales-report/top-companies.tsx">Quantity</span></span>
                  </div>
                  <p className="font-semibold text-blue-600" data-unique-id="c1d41982-335e-4f30-975b-1b3e37f501d4" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true">{company.totalQuantity}</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-purple-50" data-unique-id="7b876665-529f-41af-95ad-0b08cbb43d5f" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="87f810b8-c1f5-4705-ab62-045e971861dc" data-file-name="components/sales-report/top-companies.tsx">
                    <TrendingUp className="w-3 h-3 text-purple-600" data-unique-id="c50e404c-ba5a-4b83-90e4-543648f7d435" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true" />
                    <span className="text-xs text-purple-700" data-unique-id="b81bab02-b476-4314-b23b-b71087922bf6" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="7942badb-94a4-4d85-8f16-9d9447dd5f6d" data-file-name="components/sales-report/top-companies.tsx">Profit</span></span>
                  </div>
                  <p className="font-semibold text-purple-600" data-unique-id="fe6fff63-0e4b-439b-9720-b42e1e3c8679" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dac7a7df-1ec9-4b99-a065-d608423a7b06" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.totalProfit.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="text-center p-2 rounded-lg bg-orange-50" data-unique-id="8e624225-365b-4285-accb-e0168ef0750d" data-file-name="components/sales-report/top-companies.tsx">
                  <div className="flex items-center justify-center gap-1 mb-1" data-unique-id="06fef866-0124-4516-8daa-f0ff7471a9e1" data-file-name="components/sales-report/top-companies.tsx">
                    <span className="text-xs text-orange-700" data-unique-id="d3ff9b0e-01c1-4d6a-97d1-165371209a43" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="f50dbad2-bd4c-4e58-8a6c-b53f472a0601" data-file-name="components/sales-report/top-companies.tsx">Avg Order</span></span>
                  </div>
                  <p className="font-semibold text-orange-600" data-unique-id="8089a19f-b1c9-4454-956e-23634a10559e" data-file-name="components/sales-report/top-companies.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0667c9cc-889d-4a8d-803f-075b8913ab27" data-file-name="components/sales-report/top-companies.tsx">
                    Rp </span>{company.averageOrderValue.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </motion.div>;
      })}
      </div>

      {topCompanies.length === 0 && <div className="text-center py-8" data-unique-id="4174a9bd-f0f6-484d-9aaa-48f8ec689e62" data-file-name="components/sales-report/top-companies.tsx">
          <Building className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground" data-unique-id="88be6c8b-ba74-4918-9196-ed4392d7cead" data-file-name="components/sales-report/top-companies.tsx"><span className="editable-text" data-unique-id="ac1ea111-1191-4a1a-895b-9835046c8e95" data-file-name="components/sales-report/top-companies.tsx">No company data available for this date range</span></p>
        </div>}
    </motion.div>;
}