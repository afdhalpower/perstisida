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
  return <div className="p-4 lg:p-8" data-unique-id="450d69c3-1fd9-43ea-95f3-cfc08cbb8e61" data-file-name="components/transactions.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="eb9cf848-211b-4f74-92c8-8fd3db33f161" data-file-name="components/transactions.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="aef1eb21-1d04-47e2-9521-426ff80c9aae" data-file-name="components/transactions.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="88bf04a8-020b-4fd6-9665-aad8947aec8d" data-file-name="components/transactions.tsx">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="5fcc6f8c-a3d5-4cc9-94fc-0a08f6fdf363" data-file-name="components/transactions.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="5d6fc664-a621-4f97-8c77-068fcc3c35ea" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="297c7efd-f610-4138-a028-afbdb1c90986" data-file-name="components/transactions.tsx">Multi-Transaksi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="2fd5f4cb-cf6b-4e9d-8203-b4b390124ca8" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="bcbde9cc-8692-4c26-ba48-858a0d4f131f" data-file-name="components/transactions.tsx">Tambahkan beberapa produk dalam satu transaksi</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-unique-id="70bb9e30-2e7d-4069-85f6-f0f6d0cc40e6" data-file-name="components/transactions.tsx" data-dynamic-text="true">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="05b9adaf-e212-4fbe-93bc-6d8c05080f00" data-file-name="components/transactions.tsx">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3" data-unique-id="6aa3c1bc-a4de-4bfb-9a7c-2049b2485c10" data-file-name="components/transactions.tsx">
            <Plus className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="a5f78a4f-3d31-4e97-a805-bad48100d54e" data-file-name="components/transactions.tsx">
            Tambah Produk
          </span></h2>
          
          <form onSubmit={addToCart} className="space-y-6" data-unique-id="b3b766ae-5cd1-4d80-b2e6-41d2b9346e27" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            {/* Product Name with Autocomplete */}
            <div className="relative" data-unique-id="b4b1dd9f-bbe5-424e-bd1e-12bba1a60b86" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="71466757-4222-4347-b4d3-458afe3a3314" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="6f1528c0-2859-4609-bc22-afb154e97315" data-file-name="components/transactions.tsx">
                Nama Barang
              </span></label>
              <div className="relative" data-unique-id="545fe6cb-04f2-4e83-8928-a00328cea95a" data-file-name="components/transactions.tsx">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk..." data-unique-id="9e20acfd-d19b-49e8-a88d-714135afbfbd" data-file-name="components/transactions.tsx" />
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
              }} className="absolute z-20 w-full mt-2 glass-effect rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto" data-unique-id="3565e50e-cc6b-432a-be5e-25e50c32978e" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-6 py-4 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-border/50 last:border-b-0" data-unique-id="6fdbad54-4836-406d-97a6-e480e35a6b5a" data-file-name="components/transactions.tsx">
                        <div className="flex items-center justify-between" data-unique-id="9b1f487a-3cb7-4c9d-8ab7-d8c1a9ff7344" data-file-name="components/transactions.tsx">
                          <div className="flex-1" data-unique-id="666f15e6-72cc-4545-a577-eaee84b5d3ca" data-file-name="components/transactions.tsx">
                            <p className="font-semibold text-foreground text-base" data-unique-id="600e4fc9-7743-486c-b552-a9f5c33bf8b6" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.name}</p>
                            <div className="flex items-center gap-2 mt-1" data-unique-id="94c80388-8512-49bd-9fc9-f2f3b0a8c563" data-file-name="components/transactions.tsx">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground" data-unique-id="0ec51abe-6482-42ce-87d5-d94acb8d7e83" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.company}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4" data-unique-id="3201c7ac-fe3c-47c6-a4da-95f01ee39aff" data-file-name="components/transactions.tsx">
                            <p className="text-sm font-medium text-green-600" data-unique-id="975209c4-0543-4fed-a6d8-ebbf546234f8" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7b5543da-ef16-4e58-81ca-82e489515db4" data-file-name="components/transactions.tsx">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div data-unique-id="e1d4e78c-3ce8-45aa-8ff5-5bb7b09e44bb" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="2aefa014-9737-4b45-86f1-81b234f15e42" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="cdbe9b5b-08c3-44f6-84bf-b2894fb103c5" data-file-name="components/transactions.tsx">
                Perusahaan Produsen
              </span></label>
              <div className="relative" data-unique-id="5173b5f0-dc34-4f2d-9cdb-038c11e42766" data-file-name="components/transactions.tsx">
                <Building className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Masukkan nama perusahaan..." data-unique-id="acf3e82d-4265-4fc7-a3ad-de817c775f4e" data-file-name="components/transactions.tsx" />
              </div>
            </div>

            {/* Cost and Sell Price */}
            <div className="grid grid-cols-2 gap-4" data-unique-id="6aa0f457-36b2-4473-ad32-98cbb63373f3" data-file-name="components/transactions.tsx">
              <div data-unique-id="68b9c92b-6fa6-4e4c-965f-2cfe23fe0994" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="b808e2de-5a27-43cc-8480-68abc63117b8" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="72148d4a-a894-47b1-bae4-14817cd3fad4" data-file-name="components/transactions.tsx">
                  Modal Barang
                </span></label>
                <div className="relative" data-unique-id="959ee1d0-5e74-497e-87db-78308c806f18" data-file-name="components/transactions.tsx">
                  <DollarSign className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="54ca7b37-2efb-4b23-8317-e762919a1b74" data-file-name="components/transactions.tsx" />
                </div>
              </div>

              <div data-unique-id="7a5c500c-fc30-4413-91e4-5c8ad9d9e201" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="094b489d-6447-4ce6-b769-6c3728344280" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="651d440c-c647-4d72-9936-9ed3edc2fc50" data-file-name="components/transactions.tsx">
                  Harga Jual
                </span></label>
                <div className="relative" data-unique-id="12e50a62-5670-4c06-be6a-f468c2b96970" data-file-name="components/transactions.tsx">
                  <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="683a77bc-42a3-44b9-990a-55e1660d9276" data-file-name="components/transactions.tsx" />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div data-unique-id="1ae7f30a-228c-40b5-a1b9-117a5d5aab33" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="3187e526-8bcf-4cda-8a69-95ca6882e08f" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="41435b1e-fd4f-4509-8008-64a4fa2f3012" data-file-name="components/transactions.tsx">
                Jumlah
              </span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="1" data-unique-id="4f43f276-1fe3-4d37-a0d8-c4a1d6e02783" data-file-name="components/transactions.tsx" />
            </div>

            {/* Add to Cart Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="w-full gradient-accent text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300" data-unique-id="c4f71b66-59e3-4747-8fa5-3ba6c8c6a3b2" data-file-name="components/transactions.tsx">
              <Plus className="w-6 h-6" /><span className="editable-text" data-unique-id="76c9553c-f0bd-4808-95df-10d79fa74359" data-file-name="components/transactions.tsx">
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
      }} className="space-y-6" data-unique-id="69513710-0184-432e-adaa-8601ba250133" data-file-name="components/transactions.tsx" data-dynamic-text="true">
          <div className="flex items-center justify-between" data-unique-id="d72c4d06-aa7a-46a7-aafd-30e8165b7e31" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            <h3 className="text-2xl font-semibold flex items-center gap-3" data-unique-id="47e098ff-953a-4d00-8913-0334683f8a85" data-file-name="components/transactions.tsx">
              <Package className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="744186d6-77c7-43f5-b536-ef5fcb0a9a1a" data-file-name="components/transactions.tsx">
              Daftar Belanja
            </span></h3>
            {cartItems.length > 0 && <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium" data-unique-id="ddb0e852-fe91-49ad-82f9-ba94b78bfd0e" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                {cartItems.length}<span className="editable-text" data-unique-id="ffba78e2-a331-4080-b0a5-934fcd4e74b6" data-file-name="components/transactions.tsx"> item
              </span></span>}
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto" data-unique-id="61623c76-f894-4045-a54c-b74eb5f05fa0" data-file-name="components/transactions.tsx">
            <AnimatePresence>
              {cartItems.map(item => <CartItemComponent key={item.id} item={item} onQuantityChange={updateCartItemQuantity} onRemove={removeCartItem} />)}
            </AnimatePresence>
          </div>

          {/* Process Transaction Button */}
          {cartItems.length > 0 && <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={processTransaction} disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-unique-id="8c957875-7256-4c48-a43d-3d00417571e2" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" data-unique-id="6630296d-1036-4274-9225-e0f37a5a00cf" data-file-name="components/transactions.tsx"></div>
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
      }} data-unique-id="d771c5e5-01c1-4a3f-8652-c3aa64c5a4ef" data-file-name="components/transactions.tsx">
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
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-6 flex items-center gap-4 shadow-2xl border border-green-200 z-50" data-unique-id="ada32462-8eff-499f-ab03-d7c38e0cc4d9" data-file-name="components/transactions.tsx">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div data-unique-id="c8f489c1-3b31-4990-8547-fe6f3c79380d" data-file-name="components/transactions.tsx">
              <p className="font-bold text-green-800 text-lg" data-unique-id="b8fe80cf-0fc8-4018-aac2-4563d14df325" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="589d16c9-4e16-493b-9244-adec9b1d3185" data-file-name="components/transactions.tsx">Multi-Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600" data-unique-id="6f05a8fe-452f-43a3-8da9-31952f7503be" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="23c88c43-7f63-44d1-870d-ceaec289fd4b" data-file-name="components/transactions.tsx">Semua item telah diproses dan disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}