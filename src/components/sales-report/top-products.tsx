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
  return <div className="space-y-6" data-unique-id="b1350a4a-8d04-49cb-a2a6-02e6b9c02d65" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} className="glass-effect rounded-2xl p-6" data-unique-id="3159903b-bf67-47a3-a28d-01aa17ee713a" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
        <div className="flex items-center gap-3 mb-6" data-unique-id="c4daec0c-d39f-4731-80b1-ea91392d64cd" data-file-name="components/sales-report/top-products.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="f7a05c32-7d3d-49e9-8cd0-df5f4c458c43" data-file-name="components/sales-report/top-products.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="a9f7f4d8-f623-4e3e-826a-b9a278699c8e" data-file-name="components/sales-report/top-products.tsx">
            <h2 className="text-xl font-bold" data-unique-id="a1e518fb-ce32-4430-8bba-1089a47d7de1" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="18b69f73-3831-4644-9aca-4d2335a7af63" data-file-name="components/sales-report/top-products.tsx">Top-Selling Products</span></h2>
            <p className="text-sm text-muted-foreground" data-unique-id="6c40e119-ac70-4e59-aee5-04b7e1703999" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="8c273109-739d-4331-823d-31172bc41ce9" data-file-name="components/sales-report/top-products.tsx">Sorted by quantity sold</span></p>
          </div>
        </div>

        <div className="space-y-3" data-unique-id="2226c322-927b-4dff-987f-0afec6e19e91" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
          {topProducts.map((product, index) => <motion.div key={`${product.productName}-${product.company}`} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.05
        }} className="flex items-center justify-between p-4 rounded-xl hover:bg-accent/30 transition-colors cursor-pointer group" onClick={() => handleProductClick(product)} data-unique-id="6d63a9ac-91a5-4c8a-8da8-0362d954f3af" data-file-name="components/sales-report/top-products.tsx">
              <div className="flex items-center gap-4" data-unique-id="2dd4949f-f6d8-4766-adf8-58413ad53b27" data-file-name="components/sales-report/top-products.tsx">
                <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center" data-unique-id="4879abcc-2f7d-4d2b-8aa2-4b586d0f49e2" data-file-name="components/sales-report/top-products.tsx">
                  <span className="text-white font-bold text-sm" data-unique-id="8f5e7f26-836e-419a-9ea3-c0607b22d343" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="1aef9211-36d7-4f40-bcb2-ae009223dcb2" data-file-name="components/sales-report/top-products.tsx">#</span>{index + 1}</span>
                </div>
                <div data-unique-id="945c267e-16ef-4fc2-833c-915c877767be" data-file-name="components/sales-report/top-products.tsx">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors" data-unique-id="585ff963-68de-48f4-99c9-519fd626e2d3" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="4970b670-6641-4edc-b065-43a02024a06c" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{product.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-6" data-unique-id="e074d43a-533d-4f14-9977-50c50546bddf" data-file-name="components/sales-report/top-products.tsx">
                <div className="text-right" data-unique-id="89eb6fac-9526-495e-b014-3ad3d43f8789" data-file-name="components/sales-report/top-products.tsx">
                  <p className="font-bold text-lg" data-unique-id="176959e3-d09b-40a3-8b3a-edcab7b2b32b" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{product.totalQuantity}</p>
                  <p className="text-xs text-muted-foreground" data-unique-id="d3637ec4-0f27-4348-9b17-ea1968d1ea07" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="104e3282-cfe2-4070-9ab1-759b426b0f62" data-file-name="components/sales-report/top-products.tsx">units sold</span></p>
                </div>
                <div className="text-right" data-unique-id="c3f99daf-af79-4291-8a90-b603309c0b4c" data-file-name="components/sales-report/top-products.tsx">
                  <p className="font-semibold text-green-600" data-unique-id="ba624f00-b83c-4185-813a-9433c9836122" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8531b76f-7a2c-41d7-8070-1ced0cbdf5d0" data-file-name="components/sales-report/top-products.tsx">
                    Rp </span>{product.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground" data-unique-id="c092ae99-de4e-48e5-8681-3ee40301d197" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="c577f59d-bdea-4e5f-96b4-dc42740fa350" data-file-name="components/sales-report/top-products.tsx">revenue</span></p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" data-unique-id="29a033cd-4686-42cf-8bde-a802408f2779" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true" />
              </div>
            </motion.div>)}
        </div>

        {topProducts.length === 0 && <div className="text-center py-8" data-unique-id="a83dd2ea-43b6-40f6-81b9-963cb80ce496" data-file-name="components/sales-report/top-products.tsx">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground" data-unique-id="c08000b6-3e60-4955-9209-c0d3b41ec535" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="11ac2e3e-2c6e-44a0-8414-bb9431101f4d" data-file-name="components/sales-report/top-products.tsx">No product data available for this date range</span></p>
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowDetails(false)} data-unique-id="5c5199c7-fded-49b6-b00d-4245999237cd" data-file-name="components/sales-report/top-products.tsx" />
            <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.9
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={e => e.stopPropagation()} data-unique-id="8fe03efb-51dd-4b4e-95f5-faa40b7a806f" data-file-name="components/sales-report/top-products.tsx">
              <div className="glass-effect rounded-2xl p-6 w-full max-w-md" data-unique-id="beab683c-1ab0-44f1-924a-55e47865ce11" data-file-name="components/sales-report/top-products.tsx">
                <div className="flex items-center justify-between mb-6" data-unique-id="b26c3bc6-8992-47c1-a1d9-40b84ae60ba7" data-file-name="components/sales-report/top-products.tsx">
                  <div className="flex items-center gap-3" data-unique-id="2bc129d3-62cc-4bbc-9cd8-05da6d69b8df" data-file-name="components/sales-report/top-products.tsx">
                    <Eye className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold" data-unique-id="3145d392-94ad-4814-98f8-1d0fc9429713" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="ded13d9f-2713-4faa-8290-9885157db303" data-file-name="components/sales-report/top-products.tsx">Product Details</span></h3>
                  </div>
                  <button onClick={() => setShowDetails(false)} className="w-6 h-6 rounded-full hover:bg-accent/50 flex items-center justify-center" data-unique-id="e4e6a6a4-bd4a-42a5-8b39-8bf10e938f9e" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="9ae15db9-36ed-46d9-8e8e-e49629393c5f" data-file-name="components/sales-report/top-products.tsx">
                    ×
                  </span></button>
                </div>

                <div className="space-y-4" data-unique-id="b1f9ae26-829a-4f39-9fa8-26d4e815ecb9" data-file-name="components/sales-report/top-products.tsx">
                  <div data-unique-id="114a6345-848e-4a98-ab83-2a7531a0c338" data-file-name="components/sales-report/top-products.tsx">
                    <h4 className="font-semibold text-lg" data-unique-id="75141972-6d61-4dd6-923c-664b0d441ca5" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.productName}</h4>
                    <p className="text-muted-foreground" data-unique-id="83c412ec-7cb4-449f-a1cd-8fffcb6bbd52" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.company}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4" data-unique-id="89cb6a76-56b4-4b7b-99e7-86a269971be4" data-file-name="components/sales-report/top-products.tsx">
                    <div className="p-3 rounded-lg bg-blue-50" data-unique-id="31ef13f7-09f2-4f01-80dd-f18791719465" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-blue-700" data-unique-id="d79329a2-bebb-489e-bf5f-075f9d92bd04" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="eb2c528b-93a5-4306-83ea-3e7aa9311dda" data-file-name="components/sales-report/top-products.tsx">Total Quantity</span></p>
                      <p className="text-xl font-bold text-blue-600" data-unique-id="d33360cc-3788-42df-952d-30df5cf4e071" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">
                        {selectedProduct.totalQuantity}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50" data-unique-id="a7c73199-bd78-4543-85b0-a9fb3de3c44b" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-green-700" data-unique-id="f4daef39-80c3-42cb-9fdd-927db598b3ef" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="5bb92658-8063-42af-8730-59fb0ceff8c8" data-file-name="components/sales-report/top-products.tsx">Total Revenue</span></p>
                      <p className="text-xl font-bold text-green-600" data-unique-id="f35e2685-ef3d-4ad0-8ee6-d165f50f5a46" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5b651ecb-e155-4940-afc5-c8312d04a515" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.totalRevenue.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50" data-unique-id="ce46a39f-f1cc-46de-9cd5-59c62ad4ad86" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-purple-700" data-unique-id="8a40d039-25dd-4d56-b1d9-c50562609da8" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="0f6b6ea7-9769-4361-b5a0-5cf2c6d505b6" data-file-name="components/sales-report/top-products.tsx">Total Profit</span></p>
                      <p className="text-xl font-bold text-purple-600" data-unique-id="c2c60334-c6a3-4cc5-b9c9-3723acf67d5d" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d997d86e-9fad-4d22-9fb7-1e7abf139afd" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.totalProfit.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-orange-50" data-unique-id="1e9cf6c8-d32f-40c3-af0d-6f12bc2859dc" data-file-name="components/sales-report/top-products.tsx">
                      <p className="text-sm text-orange-700" data-unique-id="49d47211-4551-4dbe-a7da-cdd030d0e651" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="19ea73c9-9b01-4dfb-86b6-e1ea87a78f77" data-file-name="components/sales-report/top-products.tsx">Avg Price</span></p>
                      <p className="text-xl font-bold text-orange-600" data-unique-id="dba8fa7f-2e6b-45f5-b20b-e93e05f4b3cd" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2fcb4591-b2f9-48ee-9157-e8b6016926ff" data-file-name="components/sales-report/top-products.tsx">
                        Rp </span>{selectedProduct.averagePrice.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gray-50" data-unique-id="0e8c33bb-7fbb-4891-adc3-984318fcfc78" data-file-name="components/sales-report/top-products.tsx">
                    <p className="text-sm text-gray-700" data-unique-id="a45f3e92-336c-4d5a-a551-c5712ab82c50" data-file-name="components/sales-report/top-products.tsx"><span className="editable-text" data-unique-id="167528f0-27ac-4803-96eb-582a1f41f607" data-file-name="components/sales-report/top-products.tsx">Transactions</span></p>
                    <p className="text-lg font-semibold" data-unique-id="c48812af-261b-4906-add3-34f54e6b79f8" data-file-name="components/sales-report/top-products.tsx" data-dynamic-text="true">{selectedProduct.transactionCount}<span className="editable-text" data-unique-id="0e399310-dc16-4716-9f69-6250a70da519" data-file-name="components/sales-report/top-products.tsx"> orders</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}