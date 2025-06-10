'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  Timestamp 
} from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Search, 
  Plus,
  Package,
  Calculator,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { Product, Transaction } from '@/types';

export function Transactions() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    productName: '',
    selectedProduct: null as Product | null,
    quantity: 1,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'products'));
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductNameChange = (value: string) => {
    setFormData({ ...formData, productName: value, selectedProduct: null });
    
    if (value.length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectProduct = (product: Product) => {
    setFormData({
      ...formData,
      productName: product.name,
      selectedProduct: product,
    });
    setShowSuggestions(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.selectedProduct) {
      alert('Pilih produk dari daftar');
      return;
    }

    setLoading(true);
    
    try {
      const profit = (formData.selectedProduct.sellPrice - formData.selectedProduct.costPrice) * formData.quantity;
      
      const transactionData = {
        productId: formData.selectedProduct.id,
        productName: formData.selectedProduct.name,
        quantity: formData.quantity,
        costPrice: formData.selectedProduct.costPrice,
        sellPrice: formData.selectedProduct.sellPrice,
        profit: profit,
        timestamp: Timestamp.now(),
      };

      await addDoc(collection(db, 'transactions'), transactionData);
      
      setFormData({
        productName: '',
        selectedProduct: null,
        quantity: 1,
      });
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (error) {
      console.error('Error saving transaction:', error);
      alert('Gagal menyimpan transaksi');
    } finally {
      setLoading(false);
    }
  };

  const totalCost = formData.selectedProduct ? formData.selectedProduct.costPrice * formData.quantity : 0;
  const totalSell = formData.selectedProduct ? formData.selectedProduct.sellPrice * formData.quantity : 0;
  const totalProfit = totalSell - totalCost;

  return (
    <div className="p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Transaksi Baru</h1>
            <p className="text-muted-foreground">Catat penjualan pestisida</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5 text-primary" />
            Input Transaksi
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Search */}
            <div className="relative">
              <label className="block text-sm font-medium mb-2">Nama Produk</label>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={formData.productName}
                  onChange={(e) => handleProductNameChange(e.target.value)}
                  onFocus={() => formData.productName && setShowSuggestions(true)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="Ketik nama produk..."
                />
              </div>
              
              {/* Autocomplete Suggestions */}
              <AnimatePresence>
                {showSuggestions && filteredProducts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 w-full mt-2 glass-effect rounded-xl border border-border shadow-lg max-h-60 overflow-y-auto"
                  >
                    {filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => selectProduct(product)}
                        className="w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-foreground">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.company}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-green-600">
                              Rp {product.sellPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Jumlah</label>
              <input
                type="number"
                required
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                placeholder="1"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading || !formData.selectedProduct}
              className="w-full gradient-primary text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Menyimpan...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Simpan Transaksi
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Selected Product */}
          {formData.selectedProduct && (
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Produk Terpilih
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">{formData.selectedProduct.name}</h4>
                  <p className="text-muted-foreground">{formData.selectedProduct.company}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Harga Modal</p>
                    <p className="font-semibold">Rp {formData.selectedProduct.costPrice.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Harga Jual</p>
                    <p className="font-semibold text-green-600">Rp {formData.selectedProduct.sellPrice.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calculation Summary */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Ringkasan Perhitungan
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Modal</span>
                <span className="font-semibold">Rp {totalCost.toLocaleString('id-ID')}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Penjualan</span>
                <span className="font-semibold">Rp {totalSell.toLocaleString('id-ID')}</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-border">
                <span className="font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  Keuntungan
                </span>
                <span className="font-bold text-green-600 text-lg">
                  Rp {totalProfit.toLocaleString('id-ID')}
                </span>
              </div>
              
              {formData.quantity > 1 && (
                <div className="text-sm text-muted-foreground">
                  Keuntungan per unit: Rp {((totalProfit) / formData.quantity).toLocaleString('id-ID')}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 glass-effect rounded-xl p-4 flex items-center gap-3 shadow-lg border border-green-200"
          >
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-semibold text-green-800">Transaksi Berhasil!</p>
              <p className="text-sm text-green-600">Data penjualan telah disimpan</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
