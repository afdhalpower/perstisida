'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, updateDoc, doc, query, where, Timestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Plus, Package, Calculator, TrendingUp, CheckCircle, Building, DollarSign } from 'lucide-react';
import { Product } from '@/types';
export function Transactions() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    company: '',
    costPrice: 0,
    sellPrice: 0,
    quantity: 1,
    selectedProduct: null as Product | null
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
    setFormData({
      ...formData,
      productName: value,
      selectedProduct: null,
      company: '',
      costPrice: 0,
      sellPrice: 0
    });
    if (value.length > 0) {
      const filtered = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
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
      company: product.company,
      costPrice: product.costPrice,
      sellPrice: product.sellPrice,
      selectedProduct: product
    });
    setShowSuggestions(false);
  };
  const updateOrCreateProduct = async (productData: {
    name: string;
    company: string;
    costPrice: number;
    sellPrice: number;
  }) => {
    try {
      // Check if product already exists
      const existingProductQuery = query(collection(db, 'products'), where('name', '==', productData.name), where('company', '==', productData.company));
      const existingSnapshot = await getDocs(existingProductQuery);
      if (!existingSnapshot.empty) {
        // Update existing product
        const existingDoc = existingSnapshot.docs[0];
        await updateDoc(doc(db, 'products', existingDoc.id), {
          costPrice: productData.costPrice,
          sellPrice: productData.sellPrice
        });
      } else {
        // Create new product
        await addDoc(collection(db, 'products'), productData);
      }

      // Refresh products list
      fetchProducts();
    } catch (error) {
      console.error('Error updating/creating product:', error);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.productName || !formData.company || formData.costPrice <= 0 || formData.sellPrice <= 0) {
      alert('Mohon lengkapi semua field dengan benar');
      return;
    }
    setLoading(true);
    try {
      const profit = (formData.sellPrice - formData.costPrice) * formData.quantity;

      // Save transaction
      const transactionData = {
        productName: formData.productName,
        company: formData.company,
        quantity: formData.quantity,
        costPrice: formData.costPrice,
        sellPrice: formData.sellPrice,
        profit: profit,
        timestamp: Timestamp.now()
      };
      await addDoc(collection(db, 'transactions'), transactionData);

      // Update or create product
      await updateOrCreateProduct({
        name: formData.productName,
        company: formData.company,
        costPrice: formData.costPrice,
        sellPrice: formData.sellPrice
      });

      // Reset form
      setFormData({
        productName: '',
        company: '',
        costPrice: 0,
        sellPrice: 0,
        quantity: 1,
        selectedProduct: null
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
  const totalCost = formData.costPrice * formData.quantity;
  const totalSell = formData.sellPrice * formData.quantity;
  const totalProfit = totalSell - totalCost;
  return <div className="p-4 lg:p-8">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold"><span className="editable-text">Transaksi Baru</span></h1>
            <p className="text-lg text-muted-foreground"><span className="editable-text">Catat penjualan pestisida dengan mudah</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-8 hover-lift">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Plus className="w-6 h-6 text-primary" /><span className="editable-text">
            Input Transaksi
          </span></h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name with Autocomplete */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-3 text-foreground"><span className="editable-text">
                Nama Barang
              </span></label>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk pestisida..." />
              </div>
              
              {/* Autocomplete Suggestions */}
              <AnimatePresence>
                {showSuggestions && filteredProducts.length > 0 && <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} className="absolute z-20 w-full mt-2 glass-effect rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-6 py-4 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-border/50 last:border-b-0">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-foreground text-base">{product.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{product.company}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <p className="text-sm font-medium text-green-600"><span className="editable-text">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                            <p className="text-xs text-muted-foreground"><span className="editable-text">
                              Modal: Rp </span>{product.costPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground"><span className="editable-text">
                Perusahaan Produsen
              </span></label>
              <div className="relative">
                <Building className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Masukkan nama perusahaan..." />
              </div>
            </div>

            {/* Cost and Sell Price */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground"><span className="editable-text">
                  Modal Barang
                </span></label>
                <div className="relative">
                  <DollarSign className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground"><span className="editable-text">
                  Harga Jual
                </span></label>
                <div className="relative">
                  <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground"><span className="editable-text">
                Jumlah
              </span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="1" />
            </div>

            {/* Profit Display */}
            {formData.costPrice > 0 && formData.sellPrice > 0 && <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-700"><span className="editable-text">Laba per unit:</span></span>
                  <span className="text-lg font-bold text-green-600"><span className="editable-text">
                    Rp </span>{(formData.sellPrice - formData.costPrice).toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}

            {/* Submit Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Menyimpan Transaksi...
                </> : <>
                  <CheckCircle className="w-6 h-6" />
                  Simpan Transaksi
                </>}
            </motion.button>
          </form>
        </motion.div>

        {/* Summary Section */}
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.3
      }} className="space-y-6">
          {/* Transaction Preview */}
          <div className="glass-effect rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-primary" /><span className="editable-text">
              Ringkasan Transaksi
            </span></h3>
            
            <div className="space-y-6">
              {formData.productName && <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">{formData.productName}</h4>
                  {formData.company && <p className="text-sm text-blue-600 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {formData.company}
                    </p>}
                </div>}

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground font-medium"><span className="editable-text">Total Modal</span></span>
                  <span className="font-semibold text-lg"><span className="editable-text">Rp </span>{totalCost.toLocaleString('id-ID')}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground font-medium"><span className="editable-text">Total Penjualan</span></span>
                  <span className="font-semibold text-lg"><span className="editable-text">Rp </span>{totalSell.toLocaleString('id-ID')}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-t-2 border-border">
                  <span className="font-semibold flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text">
                    Total Keuntungan
                  </span></span>
                  <span className="font-bold text-green-600 text-2xl"><span className="editable-text">
                    Rp </span>{totalProfit.toLocaleString('id-ID')}
                  </span>
                </div>
                
                {formData.quantity > 1 && totalProfit > 0 && <div className="text-sm text-muted-foreground text-center pt-2"><span className="editable-text">
                    Keuntungan per unit: Rp </span>{(totalProfit / formData.quantity).toLocaleString('id-ID')}
                  </div>}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass-effect rounded-2xl p-6">
            <h4 className="font-semibold mb-4 text-lg"><span className="editable-text">Informasi Tambahan</span></h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground"><span className="editable-text">Margin Keuntungan:</span></span>
                <span className="font-medium">
                  {formData.sellPrice > 0 ? `${((formData.sellPrice - formData.costPrice) / formData.sellPrice * 100).toFixed(1)}%` : '0%'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground"><span className="editable-text">ROI (Return on Investment):</span></span>
                <span className="font-medium">
                  {formData.costPrice > 0 ? `${((formData.sellPrice - formData.costPrice) / formData.costPrice * 100).toFixed(1)}%` : '0%'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {success && <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: 50
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-6 flex items-center gap-4 shadow-2xl border border-green-200 z-50">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <p className="font-bold text-green-800 text-lg"><span className="editable-text">Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600"><span className="editable-text">Data penjualan dan produk telah disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}