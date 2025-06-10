'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, TrendingUp, Eye, ChevronRight } from 'lucide-react';
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
interface TopProductsProps {
  data: SalesData[];
}
interface ProductSummary {
  productName: string;
  company: string;
  totalQuantity: number;
  totalRevenue: number;
  totalProfit: number;
  transactionCount: number;
  averagePrice: number;
}
export function TopProducts({
  data
}: TopProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductSummary | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Aggregate product data
  const productSummaries = data.reduce((acc, item) => {
    const key = `${item.productName}-${item.company}`;
    if (!acc[key]) {
      acc[key] = {
        productName: item.productName,
        company: item.company,
        totalQuantity: 0,
        totalRevenue: 0,
        totalProfit: 0,
        transactionCount: 0,
        averagePrice: 0
      };
    }
    acc[key].totalQuantity += item.quantity;
    acc[key].totalRevenue += item.sellPrice * item.quantity;
    acc[key].totalProfit += item.profit;
    acc[key].transactionCount += 1;
    acc[key].averagePrice = acc[key].totalRevenue / acc[key].totalQuantity;
    return acc;
  }, {} as Record<string, ProductSummary>);
  const topProducts = Object.values(productSummaries).sort((a, b) => b.totalQuantity - a.totalQuantity).slice(0, 10);
  const handleProductClick = (product: ProductSummary) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };
  return <div className="space-y-6" data-unique-id="af689a37-e076-47b4-a546-582223ccf0fc" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} className="glass-effect rounded-2xl p-6" data-unique-id="8f0e4bf5-596a-4bd8-b7b7-06cc5f341594" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
        <div className="flex items-center gap-3 mb-6" data-unique-id="01b7a62d-9e89-4ef7-9112-42db6664a2ac" data-file-name="components/sales-report/top-products.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="9c9665f3-9b53-47f9-a594-444b3163a066" data-file-name="components/sales-report/top-products.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="c2d99c52-242c-488f-9b2e-c31f16bfae9f" data-file-name="components/sales-report/top-products.tsx">
            <h2 className="text-xl font-bold" data-unique-id="d44788c6-b43f-4667-8c77-83c759790c04" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="5e7f128a-8768-4380-9859-302144b628d2" data-file-name="components/sales-report/top-products.tsx">Top-Selling Products</span></h2>
            <p className="text-sm text-muted-foreground" data-unique-id="140bcda1-81a9-4ad7-9c0c-257718ea931b" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="b1cb06c6-af7b-43fc-bd27-14b727fde40a" data-file-name="components/sales-report/top-products.tsx">Sorted by quantity sold</span></p>
          </div>
        </div>

        <div className="space-y-3" data-unique-id="2da6aa71-734c-44b3-86ec-fc0fbe36e46a" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
          {topProducts.map((product, index) => <motion.div key={`${product.productName}-${product.company}`} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.05
        }} className="flex items-center justify-between p-4 rounded-xl hover:bg-accent/30 transition-colors cursor-pointer group" onClick={() => handleProductClick(product)} data-unique-id="77c5931f-da67-4a8d-89ce-d7e10418d839" data-file-name="components/sales-report/top-products.tsx">
              <div className="flex items-center gap-4" data-unique-id="d709d1a9-ec61-49eb-8abf-a5ede5993c98" data-file-name="components/sales-report/top-products.tsx">
                <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center" data-unique-id="37498dee-77f5-406e-8040-a7d3d34ac3eb" data-file-name="components/sales-report/top-products.tsx">
                  <span className="text-white font-bold text-sm" data-unique-id="73493552-3db7-440f-a636-a3274b874805" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ca59fca4-00c1-4604-86ac-4108b95bb340" data-file-name="components/sales-report/top-products.tsx">#</span>{index + 1}</span>
                </div>
                <div data-unique-id="d4687232-5084-4d8d-803e-4604e321856d" data-file-name="components/sales-report/top-products.tsx">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors" data-unique-id="4834709e-6429-42fc-8082-dd1ff5b76a98" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="ed5974d3-4113-4033-b6e2-9653b995b126" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{product.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-6" data-unique-id="1ca77510-840a-4eba-be21-79b3c45b25b3" data-file-name="components/sales-report/top-products.tsx">
                <div className="text-right" data-unique-id="c0a0df77-eb1a-4e01-9fb9-bea5e3f28520" data-file-name="components/sales-report/top-products.tsx">
                  <p className="font-bold text-lg" data-unique-id="5df2dd46-f5ae-4dba-a5c6-da24a542f76e" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{product.totalQuantity}</p>
                  <p className="text-xs text-muted-foreground" data-unique-id="be82752c-c008-4369-9046-e727ff87f087" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="3edb8c36-e664-4a6d-83a1-1201983290da" data-file-name="components/sales-report/top-products.tsx">units sold</span></p>
                </div>
                <div className="text-right" data-unique-id="9f87b1f9-6cda-4c9e-810f-a41c07addeaa" data-file-name="components/sales-report/top-products.tsx">
                  <p className="font-semibold text-green-600" data-unique-id="c7429553-2040-405b-a39b-faf875b14918" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="92de1cbf-9336-4540-b5f3-48066fcf71fc" data-file-name="components/sales-report/top-products.tsx">
                    Rp </span>{product.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground" data-unique-id="5c7df498-8fad-489a-9f7b-af3dfc616b56" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="f93a11a0-9e4a-4ce5-b08f-a248a24118e5" data-file-name="components/sales-report/top-products.tsx">revenue</span></p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" data-unique-id="72e6e703-0ed6-4aa6-94ea-c3eb8ab1bd49" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true" />
              </div>
            </motion.div>)}
        </div>

        {topProducts.length === 0 && <div className="text-center py-8" data-unique-id="9b903942-c98e-4d96-a568-973a6715d400" data-file-name="components/sales-report/top-products.tsx">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground" data-unique-id="2f1c5546-429d-4b81-9a1e-d448afc5d24f" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="a1e9a17e-bd6b-4a7b-8b76-96b8870dcf5b" data-file-name="components/sales-report/top-products.tsx">No product data available for this date range</span></p>
          </div>}
      </motion.div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {showDetails && selectedProduct && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowDetails(false)} data-unique-id="c107a43f-f246-45e0-891a-4e6780a3101a" data-file-name="components/sales-report/top-products.tsx" />
            <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.9
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={e => e.stopPropagation()} data-unique-id="c4535c60-29a7-4ba1-bcd7-277db13c2bc4" data-file-name="components/sales-report/top-products.tsx">
              <div className="glass-effect rounded-2xl p-6 w-full max-w-md" data-unique-id="6653a4cb-9ccd-4b5b-8a45-74f869903990" data-file-name="components/sales-report/top-products.tsx">
                <div className="flex items-center justify-between mb-6" data-unique-id="d9d6de28-0bf2-4cbb-8166-47bff825efb4" data-file-name="components/sales-report/top-products.tsx">
                  <div className="flex items-center gap-3" data-unique-id="0e75178a-e4d6-469e-98d3-c3d922157868" data-file-name="components/sales-report/top-products.tsx">
                    <Eye className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold" data-unique-id="cf638347-a27a-44bd-9ff7-5f1069f62fb7" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="89b18951-a0ca-43a7-bc67-a13901550554" data-file-name="components/sales-report/top-products.tsx">Product Details</span></h3>
                  </div>
                  <button onClick={() => setShowDetails(false)} className="w-6 h-6 rounded-full hover:bg-accent/50 flex items-center justify-center" data-unique-id="9c5bb26a-722c-4fab-881b-b03fac27e246" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="fdce1def-d4cf-4bed-97f9-b171a6c80f4f" data-file-name="components/sales-report/top-products.tsx">
                    ×
                  </span></button>
                </div>

                <div className="space-y-4" data-unique-id="eadff476-0231-4ce3-a1c8-007196e959a7" data-file-name="components/sales-report/top-products.tsx">
                  <div data-unique-id="e31cbdae-f7e0-463b-b3e2-727d3d294628" data-file-name="components/sales-report/top-products.tsx">
                    <h4 className="font-semibold text-lg" data-unique-id="f142b65e-0b56-4393-91ff-36c05498a0af" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.productName}</h4>
                    <p className="text-muted-foreground" data-unique-id="c5509ebb-a3af-426a-bc53-ca63122dd277" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.company}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4" data-unique-id="64f81a07-19e7-4cd3-9a06-567fdf98648e" data-file-name="components/sales-report/top-products.tsx">
                    <div className="p-3 rounded-lg bg-blue-50" data-unique-id="8b23b94c-72f0-494b-b2e2-129a21af294a" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-blue-700" data-unique-id="95e64216-72f3-472d-afa0-223b33831f7c" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="446f2d7b-5724-4b39-9b6f-5721782cbbe1" data-file-name="components/sales-report/top-products.tsx">Total Quantity</span></p>
                      <p className="text-xl font-bold text-blue-600" data-unique-id="c0380e06-2080-47c7-9d2f-a17de03e397b" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
                        {selectedProduct.totalQuantity}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50" data-unique-id="7e417ed1-daef-43e0-b38a-a8c30642b643" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-green-700" data-unique-id="03e1932f-5712-481a-a80a-66d5d0a53d3b" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="f00a1c52-3b0f-4da8-b0f0-00e624b1d8e2" data-file-name="components/sales-report/top-products.tsx">Total Revenue</span></p>
                      <p className="text-xl font-bold text-green-600" data-unique-id="2d49670a-8c82-4bff-a59e-db30bf5c6413" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="efc2fda6-1646-43ac-a11f-e9f8a51714d3" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.totalRevenue.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50" data-unique-id="56b967cc-0206-4473-bc12-c003f901bb33" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-purple-700" data-unique-id="1ecb2120-b9a3-4e66-a085-1285565a302c" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="ba242723-e2f9-4f6a-837c-330b189dde78" data-file-name="components/sales-report/top-products.tsx">Total Profit</span></p>
                      <p className="text-xl font-bold text-purple-600" data-unique-id="1f07a22c-0978-4cf0-8acd-30a03bb1bac7" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d9803c8e-9e3b-4d9a-9873-1dbae3360067" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.totalProfit.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-orange-50" data-unique-id="8539bcdd-482d-43df-9cd7-0775173011f1" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-orange-700" data-unique-id="6aef1435-517b-4cbb-90ce-44bc689fc566" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="f2dbc6b7-bd94-46e7-ae36-0819001df720" data-file-name="components/sales-report/top-products.tsx">Avg Price</span></p>
                      <p className="text-xl font-bold text-orange-600" data-unique-id="2d2fbaf0-9160-4c15-863c-e1b7371b4931" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="078cbd0e-e72a-48c8-9708-892b6c6d21c9" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.averagePrice.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gray-50" data-unique-id="28709b48-d1f0-46b2-8cd8-53ea590f8577" data-file-name="components/sales-report/top-products.tsx">
                    <p className="text-sm text-gray-700" data-unique-id="9269afdd-6c23-478b-89fd-79bba9cf8a76" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="de60421a-c20f-4c16-8c76-bb4c43b9e52f" data-file-name="components/sales-report/top-products.tsx">Transactions</span></p>
                    <p className="text-lg font-semibold" data-unique-id="adfdbe2f-fbed-40a1-8073-9fe2d947dffc" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.transactionCount}<span className="editable-text" data-unique-id="837f856c-c027-4adb-8dbf-62b54e43b912" data-file-name="components/sales-report/top-products.tsx"> orders</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}