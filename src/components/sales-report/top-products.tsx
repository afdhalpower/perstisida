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

export function TopProducts({ data }: TopProductsProps) {
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

  const topProducts = Object.values(productSummaries)
    .sort((a, b) => b.totalQuantity - a.totalQuantity)
    .slice(0, 10);

  const handleProductClick = (product: ProductSummary) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Top-Selling Products</h2>
            <p className="text-sm text-muted-foreground">Sorted by quantity sold</p>
          </div>
        </div>

        <div className="space-y-3">
          {topProducts.map((product, index) => (
            <motion.div
              key={`${product.productName}-${product.company}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-accent/30 transition-colors cursor-pointer group"
              onClick={() => handleProductClick(product)}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">#{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-bold text-lg">{product.totalQuantity}</p>
                  <p className="text-xs text-muted-foreground">units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    Rp {product.totalRevenue.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-muted-foreground">revenue</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {topProducts.length === 0 && (
          <div className="text-center py-8">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No product data available for this date range</p>
          </div>
        )}
      </motion.div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {showDetails && selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowDetails(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-effect rounded-2xl p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold">Product Details</h3>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="w-6 h-6 rounded-full hover:bg-accent/50 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">{selectedProduct.productName}</h4>
                    <p className="text-muted-foreground">{selectedProduct.company}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-blue-50">
                      <p className="text-sm text-blue-700">Total Quantity</p>
                      <p className="text-xl font-bold text-blue-600">
                        {selectedProduct.totalQuantity}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50">
                      <p className="text-sm text-green-700">Total Revenue</p>
                      <p className="text-xl font-bold text-green-600">
                        Rp {selectedProduct.totalRevenue.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50">
                      <p className="text-sm text-purple-700">Total Profit</p>
                      <p className="text-xl font-bold text-purple-600">
                        Rp {selectedProduct.totalProfit.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-orange-50">
                      <p className="text-sm text-orange-700">Avg Price</p>
                      <p className="text-xl font-bold text-orange-600">
                        Rp {selectedProduct.averagePrice.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-700">Transactions</p>
                    <p className="text-lg font-semibold">{selectedProduct.transactionCount} orders</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
