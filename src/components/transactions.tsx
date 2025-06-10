'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, updateDoc, doc, query, where, Timestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Plus, Building, DollarSign, TrendingUp, CheckCircle, Package } from 'lucide-react';
import { Product, CartItem } from '@/types';
import { CartItemComponent } from './cart-item';
import { CartSummary } from './cart-summary';
export function Transactions() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [discountError, setDiscountError] = useState('');
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
  const addToCart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.productName || !formData.company || formData.costPrice <= 0 || formData.sellPrice <= 0) {
      alert('Mohon lengkapi semua field dengan benar');
      return;
    }

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.productName === formData.productName && item.company === formData.company);
    if (existingItemIndex >= 0) {
      // Update existing item quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += formData.quantity;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      const newCartItem: CartItem = {
        id: Date.now().toString(),
        productName: formData.productName,
        company: formData.company,
        costPrice: formData.costPrice,
        sellPrice: formData.sellPrice,
        quantity: formData.quantity,
        profit: formData.sellPrice - formData.costPrice
      };
      setCartItems([...cartItems, newCartItem]);
    }

    // Reset form
    setFormData({
      productName: '',
      company: '',
      costPrice: 0,
      sellPrice: 0,
      quantity: 1,
      selectedProduct: null
    });
  };
  const updateCartItemQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item => item.id === id ? {
      ...item,
      quantity
    } : item));
  };
  const removeCartItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  const handleDiscountChange = (value: number) => {
    const totalSell = cartItems.reduce((sum, item) => sum + item.sellPrice * item.quantity, 0);
    if (value < 0) {
      setDiscountError('Diskon tidak boleh negatif');
      return;
    }
    if (value > totalSell) {
      setDiscountError('Diskon tidak boleh lebih besar dari total penjualan');
      return;
    }
    setDiscountError('');
    setDiscount(value);
  };
  const resetDiscount = () => {
    setDiscount(0);
    setDiscountError('');
  };
  const updateOrCreateProduct = async (productData: {
    name: string;
    company: string;
    costPrice: number;
    sellPrice: number;
  }) => {
    try {
      const existingProductQuery = query(collection(db, 'products'), where('name', '==', productData.name), where('company', '==', productData.company));
      const existingSnapshot = await getDocs(existingProductQuery);
      if (!existingSnapshot.empty) {
        const existingDoc = existingSnapshot.docs[0];
        await updateDoc(doc(db, 'products', existingDoc.id), {
          costPrice: productData.costPrice,
          sellPrice: productData.sellPrice
        });
      } else {
        await addDoc(collection(db, 'products'), productData);
      }
      fetchProducts();
    } catch (error) {
      console.error('Error updating/creating product:', error);
    }
  };
  const processTransaction = async () => {
    if (cartItems.length === 0) {
      alert('Keranjang kosong! Tambahkan produk terlebih dahulu.');
      return;
    }
    setLoading(true);
    try {
      // Save each cart item as a separate transaction
      for (const item of cartItems) {
        const transactionData = {
          productName: item.productName,
          company: item.company,
          quantity: item.quantity,
          costPrice: item.costPrice,
          sellPrice: item.sellPrice,
          profit: item.profit * item.quantity,
          timestamp: Timestamp.now()
        };
        await addDoc(collection(db, 'transactions'), transactionData);

        // Update or create product
        await updateOrCreateProduct({
          name: item.productName,
          company: item.company,
          costPrice: item.costPrice,
          sellPrice: item.sellPrice
        });
      }

      // Clear cart after successful transaction
      setCartItems([]);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error processing transaction:', error);
      alert('Gagal memproses transaksi');
    } finally {
      setLoading(false);
    }
  };
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
            <h1 className="text-4xl font-bold"><span className="editable-text">Multi-Transaksi</span></h1>
            <p className="text-lg text-muted-foreground"><span className="editable-text">Tambahkan beberapa produk dalam satu transaksi</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            Tambah Produk
          </span></h2>
          
          <form onSubmit={addToCart} className="space-y-6">
            {/* Product Name with Autocomplete */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-3 text-foreground"><span className="editable-text">
                Nama Barang
              </span></label>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk..." />
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

            {/* Add to Cart Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="w-full gradient-accent text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300">
              <Plus className="w-6 h-6" /><span className="editable-text">
              Tambah ke Keranjang
            </span></motion.button>
          </form>
        </motion.div>

        {/* Cart Items Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <Package className="w-6 h-6 text-primary" /><span className="editable-text">
              Daftar Belanja
            </span></h3>
            {cartItems.length > 0 && <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">
                {cartItems.length}<span className="editable-text"> item
              </span></span>}
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            <AnimatePresence>
              {cartItems.map(item => <CartItemComponent key={item.id} item={item} onQuantityChange={updateCartItemQuantity} onRemove={removeCartItem} />)}
            </AnimatePresence>
          </div>

          {/* Process Transaction Button */}
          {cartItems.length > 0 && <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={processTransaction} disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Memproses Transaksi...
                </> : <>
                  <CheckCircle className="w-6 h-6" />
                  Proses Transaksi
                </>}
            </motion.button>}
        </motion.div>

        {/* Summary Section */}
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.4
      }}>
          <CartSummary cartItems={cartItems} discount={discount} discountError={discountError} onDiscountChange={handleDiscountChange} onResetDiscount={resetDiscount} />
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
              <p className="font-bold text-green-800 text-lg"><span className="editable-text">Multi-Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600"><span className="editable-text">Semua item telah diproses dan disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}