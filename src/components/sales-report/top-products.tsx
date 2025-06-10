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
  return <div className="space-y-6" data-unique-id="f03be5b2-cf39-4374-8587-f7a6b5becaa1" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} className="glass-effect rounded-2xl p-6" data-unique-id="28edb6c8-a996-4db8-a1e1-1786191187da" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
        <div className="flex items-center gap-3 mb-6" data-unique-id="d00d6646-a3c9-46f6-971f-acbe0ad3e5db" data-file-name="components/sales-report/top-products.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="654bc661-5ff7-4f07-aec1-14788e1e7bca" data-file-name="components/sales-report/top-products.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="621640ef-d491-4f1b-b2b0-cc40bf77224a" data-file-name="components/sales-report/top-products.tsx">
            <h2 className="text-xl font-bold" data-unique-id="cc6adda8-7b68-420a-a230-24f6e2601cc8" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="989bbc25-9c01-447d-a6b1-f14317a8583c" data-file-name="components/sales-report/top-products.tsx">Top-Selling Products</span></h2>
            <p className="text-sm text-muted-foreground" data-unique-id="8124fa1d-684a-4471-9a10-0b00b97077f8" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="2a6b4e21-7576-4af3-b36c-c3c6a5a10e9e" data-file-name="components/sales-report/top-products.tsx">Sorted by quantity sold</span></p>
          </div>
        </div>

        <div className="space-y-3" data-unique-id="f967ae4f-a65b-49de-98f3-346d505e522b" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
          {topProducts.map((product, index) => <motion.div key={`${product.productName}-${product.company}`} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.05
        }} className="flex items-center justify-between p-4 rounded-xl hover:bg-accent/30 transition-colors cursor-pointer group" onClick={() => handleProductClick(product)} data-unique-id="eb3b863d-d641-4818-8346-f81014b9cc12" data-file-name="components/sales-report/top-products.tsx">
              <div className="flex items-center gap-4" data-unique-id="d7d4bf16-cebc-449e-9afa-cd79ffd41ae5" data-file-name="components/sales-report/top-products.tsx">
                <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center" data-unique-id="38d4efbe-ddad-4ba3-a12a-7222148f81d7" data-file-name="components/sales-report/top-products.tsx">
                  <span className="text-white font-bold text-sm" data-unique-id="afa1d106-67a1-4553-8a0a-c4b5c368fa72" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e0530d11-425a-4928-8ccd-1df1dcfaa9d9" data-file-name="components/sales-report/top-products.tsx">#</span>{index + 1}</span>
                </div>
                <div data-unique-id="eabf47fd-37da-467f-a483-f094a1f911d7" data-file-name="components/sales-report/top-products.tsx">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors" data-unique-id="b2796177-7cb8-4961-a0e5-56776a82afa3" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="b84c0461-5be8-49ac-b50b-4f96e8f9d425" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{product.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-6" data-unique-id="f9f5a58e-26cc-4709-9d3b-eccfc7db0352" data-file-name="components/sales-report/top-products.tsx">
                <div className="text-right" data-unique-id="dde73c3e-2bf1-418c-99d9-e4c30dda1c0b" data-file-name="components/sales-report/top-products.tsx">
                  <p className="font-bold text-lg" data-unique-id="6b2bf2e7-95c2-46f5-9db8-49d0c3c794d4" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{product.totalQuantity}</p>
                  <p className="text-xs text-muted-foreground" data-unique-id="d878f121-e5e9-4de1-a7f1-4c724770bb29" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="354ff4ac-3277-4c6d-bee0-47fc2b1a8832" data-file-name="components/sales-report/top-products.tsx">units sold</span></p>
                </div>
                <div className="text-right" data-unique-id="7d19b563-b063-430a-84de-f6b65d8d11e2" data-file-name="components/sales-report/top-products.tsx">
                  <p className="font-semibold text-green-600" data-unique-id="3ce7bb94-5e9c-4146-bfcb-0d6234a5240d" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b9d99c2d-fae5-4048-8869-ba396a32eba0" data-file-name="components/sales-report/top-products.tsx">
                    Rp </span>{product.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground" data-unique-id="4c36ac2b-6004-4733-b0de-f836185c4dd5" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="d4d2fb78-c2a9-4c0f-a4d8-7bbebba6e351" data-file-name="components/sales-report/top-products.tsx">revenue</span></p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" data-unique-id="bafebf2e-f70d-441d-a3a8-05c7db7a8729" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true" />
              </div>
            </motion.div>)}
        </div>

        {topProducts.length === 0 && <div className="text-center py-8" data-unique-id="9cd5af97-428d-4233-abfa-80e171955999" data-file-name="components/sales-report/top-products.tsx">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground" data-unique-id="761f427a-7598-49b9-9c92-488fa71fa00e" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="aa595999-709a-4241-98f8-97106266e129" data-file-name="components/sales-report/top-products.tsx">No product data available for this date range</span></p>
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowDetails(false)} data-unique-id="64862bb4-2c23-476c-ad96-24eed456c1eb" data-file-name="components/sales-report/top-products.tsx" />
            <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.9
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={e => e.stopPropagation()} data-unique-id="b7da350f-c86a-46e2-8810-5459a48c2c4a" data-file-name="components/sales-report/top-products.tsx">
              <div className="glass-effect rounded-2xl p-6 w-full max-w-md" data-unique-id="65c704e4-e718-4420-a175-f5319f463502" data-file-name="components/sales-report/top-products.tsx">
                <div className="flex items-center justify-between mb-6" data-unique-id="c4627a8f-7951-4588-9450-d269905627a6" data-file-name="components/sales-report/top-products.tsx">
                  <div className="flex items-center gap-3" data-unique-id="2cee218d-5b2c-464d-9f45-79ebd7df0c04" data-file-name="components/sales-report/top-products.tsx">
                    <Eye className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold" data-unique-id="fa36f1e3-aaee-4117-9a55-36beb643d612" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="3fe996df-717f-4863-8166-39a9a49dbd00" data-file-name="components/sales-report/top-products.tsx">Product Details</span></h3>
                  </div>
                  <button onClick={() => setShowDetails(false)} className="w-6 h-6 rounded-full hover:bg-accent/50 flex items-center justify-center" data-unique-id="96a57ed0-12cd-4cb6-b036-1fc4f7200220" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="5b759183-a8e7-48e5-b510-828795daf196" data-file-name="components/sales-report/top-products.tsx">
                    ×
                  </span></button>
                </div>

                <div className="space-y-4" data-unique-id="6297b3a7-d67b-4d75-9ba9-90407649e3f6" data-file-name="components/sales-report/top-products.tsx">
                  <div data-unique-id="58afbce3-e00d-4b1a-92c3-1b54f424f844" data-file-name="components/sales-report/top-products.tsx">
                    <h4 className="font-semibold text-lg" data-unique-id="6c768bbd-7d7e-445e-b2f6-f8f869570494" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.productName}</h4>
                    <p className="text-muted-foreground" data-unique-id="fab61773-3977-4c4b-8f2e-e65545885314" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.company}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4" data-unique-id="e351aeb0-9885-4fae-9418-ecca53875702" data-file-name="components/sales-report/top-products.tsx">
                    <div className="p-3 rounded-lg bg-blue-50" data-unique-id="071780f5-362e-41b7-8f37-e237cd2814ca" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-blue-700" data-unique-id="1af1bd60-6c7e-4da6-95cf-667247522e8b" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="93b69e4c-bd14-41bb-ac93-edf96284fc9f" data-file-name="components/sales-report/top-products.tsx">Total Quantity</span></p>
                      <p className="text-xl font-bold text-blue-600" data-unique-id="40f43e5d-73cc-498c-b474-8da0b211d022" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
                        {selectedProduct.totalQuantity}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50" data-unique-id="fe2e5ce4-f6ed-4339-b92d-688059385ac5" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-green-700" data-unique-id="37189005-46bb-47cb-84ef-47702e093341" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="ab957f84-ca27-4a20-98a3-6c94286a29ec" data-file-name="components/sales-report/top-products.tsx">Total Revenue</span></p>
                      <p className="text-xl font-bold text-green-600" data-unique-id="592c27d3-d7b4-450b-853b-22065ee7c254" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="64d0eab9-bdae-41ad-97fe-d39b20ac4492" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.totalRevenue.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50" data-unique-id="4248beec-155f-4b15-aaee-05042c2cd37a" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-purple-700" data-unique-id="fdfeba62-27fa-4484-a251-cfb8f5a497c1" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="cbed68b9-3fc5-4e6b-b549-71d2c77cb348" data-file-name="components/sales-report/top-products.tsx">Total Profit</span></p>
                      <p className="text-xl font-bold text-purple-600" data-unique-id="dfbe76fc-0fa2-49f6-bc1c-0a9ad34853c9" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d9cc30bc-198a-4181-acaa-374339f17cc7" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.totalProfit.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-orange-50" data-unique-id="b896be30-abcd-4023-90e3-6943caefaa69" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-orange-700" data-unique-id="dd1349a8-4f3d-4be9-b52d-02eba5b4463e" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="a223eab3-7040-4e3c-97e4-53adcb60e5d7" data-file-name="components/sales-report/top-products.tsx">Avg Price</span></p>
                      <p className="text-xl font-bold text-orange-600" data-unique-id="3da161a7-fac5-4549-bd83-31fda88b6e97" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5b9d5318-b8ee-4390-b4a2-ab982a7ac84f" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.averagePrice.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gray-50" data-unique-id="0135a3ef-ae2c-4988-897a-ee673338e929" data-file-name="components/sales-report/top-products.tsx">
                    <p className="text-sm text-gray-700" data-unique-id="0f851ade-5db2-491b-85af-91ff1cf8418e" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="1c1a1c8c-dbbb-4fe9-b72c-575666deea45" data-file-name="components/sales-report/top-products.tsx">Transactions</span></p>
                    <p className="text-lg font-semibold" data-unique-id="b01680a4-46bd-4885-8f78-0759f8a0deb4" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.transactionCount}<span className="editable-text" data-unique-id="e11e6fcd-fa09-496b-9194-c01fd8df6819" data-file-name="components/sales-report/top-products.tsx"> orders</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}