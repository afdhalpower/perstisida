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
  return <div className="p-4 lg:p-8" data-unique-id="274253dd-2c0e-467a-8c53-ba930bf7a3c0" data-file-name="components/transactions.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="779c744f-fdab-4942-9f90-669216ba6b74" data-file-name="components/transactions.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="9a193a6d-9d3c-460a-8463-accca84f8682" data-file-name="components/transactions.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="ddbcae4c-72b8-4ce3-a401-6b2809eeb59b" data-file-name="components/transactions.tsx">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="cba7c9ad-9427-4dd8-bc50-d1de2447a802" data-file-name="components/transactions.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="ae889964-48d7-4d9f-9aab-07e7ec097225" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="1e8f12e8-2c0a-4a57-a459-dbcfe65b8fdb" data-file-name="components/transactions.tsx">Multi-Transaksi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="14e86338-ddbd-49a7-96af-10d1849928ac" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="7b0cc0b8-003e-4c95-8beb-d79855c28b5d" data-file-name="components/transactions.tsx">Tambahkan beberapa produk dalam satu transaksi</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-unique-id="9426a8cf-e245-4325-8436-582fd303071d" data-file-name="components/transactions.tsx" data-dynamic-text="true">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="2c97c459-d342-4d15-85e8-8b532c0afae1" data-file-name="components/transactions.tsx">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3" data-unique-id="9413a3d4-b507-47b6-8e8f-476113696630" data-file-name="components/transactions.tsx">
            <Plus className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="839fb5e6-62a9-47d0-aa8e-455eac657f1b" data-file-name="components/transactions.tsx">
            Tambah Produk
          </span></h2>
          
          <form onSubmit={addToCart} className="space-y-6" data-unique-id="d6a4cc65-6981-4931-9758-8e6f70ed4cf8" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            {/* Product Name with Autocomplete */}
            <div className="relative" data-unique-id="fe4dd598-61fc-46fb-9460-90b819091773" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="37e9d52c-b86f-4733-8ca2-65d5a708ab6a" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="ac61d19a-5f33-4c37-b818-36e625fd784b" data-file-name="components/transactions.tsx">
                Nama Barang
              </span></label>
              <div className="relative" data-unique-id="48311394-5c71-4cc9-9a2c-1abb02603061" data-file-name="components/transactions.tsx">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk..." data-unique-id="d17b95e3-767b-4816-b54b-693d3e2ff40f" data-file-name="components/transactions.tsx" />
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
              }} className="absolute z-20 w-full mt-2 glass-effect rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto" data-unique-id="ee94903c-984e-4ec4-b4f4-d959d50a674a" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-6 py-4 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-border/50 last:border-b-0" data-unique-id="1ac4281a-c585-4e2b-bba6-fa4e9acd8154" data-file-name="components/transactions.tsx">
                        <div className="flex items-center justify-between" data-unique-id="1b08589c-9f21-4cfd-9310-37737c56c073" data-file-name="components/transactions.tsx">
                          <div className="flex-1" data-unique-id="8933cd5c-9c2c-474c-bcdf-90b8f2127c6c" data-file-name="components/transactions.tsx">
                            <p className="font-semibold text-foreground text-base" data-unique-id="79080d9c-eb90-4652-b9f5-844fa6ba0741" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.name}</p>
                            <div className="flex items-center gap-2 mt-1" data-unique-id="8090419d-0420-4822-9b49-6924e17cbf02" data-file-name="components/transactions.tsx">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground" data-unique-id="27284ddb-1784-4cf7-af30-36dfe0440916" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.company}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4" data-unique-id="dc923827-aaeb-4e10-8c8c-b265ccb70da0" data-file-name="components/transactions.tsx">
                            <p className="text-sm font-medium text-green-600" data-unique-id="95cad87b-1c93-4c7a-924c-ec8446b33843" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f307da0f-1d4d-49ba-99a3-ad94f4af65bf" data-file-name="components/transactions.tsx">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div data-unique-id="cc38d71c-61b0-4ab3-bcfa-4cb3c49d8594" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="b7b5fc70-faf0-4733-a615-e29d10a9ee7a" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="fa0cb3c2-52c2-429f-9968-2e6cd1a97388" data-file-name="components/transactions.tsx">
                Perusahaan Produsen
              </span></label>
              <div className="relative" data-unique-id="d592cecc-687b-4368-9a91-666f3cd3ccb9" data-file-name="components/transactions.tsx">
                <Building className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Masukkan nama perusahaan..." data-unique-id="7a35d5ae-4808-4f43-b166-261326cefb74" data-file-name="components/transactions.tsx" />
              </div>
            </div>

            {/* Cost and Sell Price */}
            <div className="grid grid-cols-2 gap-4" data-unique-id="cddd91a6-709d-43a2-8f56-143100eb1929" data-file-name="components/transactions.tsx">
              <div data-unique-id="994f0591-11a1-4969-9aec-58b33ae2ccc2" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="3fb2578d-1bf5-42cb-8c87-a8a114ac4c34" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="2cbd1ea0-81fd-40b3-b423-2fd41047bf35" data-file-name="components/transactions.tsx">
                  Modal Barang
                </span></label>
                <div className="relative" data-unique-id="62d9bab2-1d4a-4c95-851e-998f6573a33c" data-file-name="components/transactions.tsx">
                  <DollarSign className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="c8c855e4-c651-45a7-bdc7-76b88d1fbcaf" data-file-name="components/transactions.tsx" />
                </div>
              </div>

              <div data-unique-id="5f5da553-446f-413a-87f4-852948dbf322" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="6a7a3544-b8c4-4e04-93f0-7f2f7e1e453f" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="fb5247b0-4ec3-4dee-8575-b0dcca05e11f" data-file-name="components/transactions.tsx">
                  Harga Jual
                </span></label>
                <div className="relative" data-unique-id="28752be8-fac1-4155-ab5d-2e859dd20872" data-file-name="components/transactions.tsx">
                  <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="b40992db-0335-4638-a66a-b7d6e44fdf97" data-file-name="components/transactions.tsx" />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div data-unique-id="73393d88-1153-41dd-9cf7-a2961e5cbc0b" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="ee265189-d66b-4781-84fe-3bedf076f3d1" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="9a0231d5-f332-4f00-b9b3-950287aeddef" data-file-name="components/transactions.tsx">
                Jumlah
              </span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="1" data-unique-id="d9be570c-ed86-43c6-920f-28d462ded8cf" data-file-name="components/transactions.tsx" />
            </div>

            {/* Add to Cart Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="w-full gradient-accent text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300" data-unique-id="fbc7a549-106e-48fa-b154-95364c58d440" data-file-name="components/transactions.tsx">
              <Plus className="w-6 h-6" /><span className="editable-text" data-unique-id="88372093-0570-4152-8258-8c6b616e7de1" data-file-name="components/transactions.tsx">
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
      }} className="space-y-6" data-unique-id="d22c056f-2ce4-4882-8901-afd80de5b55f" data-file-name="components/transactions.tsx" data-dynamic-text="true">
          <div className="flex items-center justify-between" data-unique-id="bad80f01-bb2e-41f5-9926-f0f7d07c1ea1" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            <h3 className="text-2xl font-semibold flex items-center gap-3" data-unique-id="af581074-58c3-4318-880d-b2073f03d4cd" data-file-name="components/transactions.tsx">
              <Package className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="888cc43f-124b-465c-a13f-d28cf6038eda" data-file-name="components/transactions.tsx">
              Daftar Belanja
            </span></h3>
            {cartItems.length > 0 && <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium" data-unique-id="2dbb056d-c9da-4f95-a368-4eaaa09e27c3" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                {cartItems.length}<span className="editable-text" data-unique-id="65c2a807-015b-4336-8a68-97a57658e72e" data-file-name="components/transactions.tsx"> item
              </span></span>}
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto" data-unique-id="0173a6e7-b380-41fd-a35d-e7c6a4c94cbd" data-file-name="components/transactions.tsx">
            <AnimatePresence>
              {cartItems.map(item => <CartItemComponent key={item.id} item={item} onQuantityChange={updateCartItemQuantity} onRemove={removeCartItem} />)}
            </AnimatePresence>
          </div>

          {/* Process Transaction Button */}
          {cartItems.length > 0 && <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={processTransaction} disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-unique-id="935b9ab3-da74-4681-b068-e44be00908d9" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" data-unique-id="e9ae281c-37fc-46e9-946a-7deba3f7727a" data-file-name="components/transactions.tsx"></div>
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
      }} data-unique-id="34276808-d45f-4665-8fe8-30caf2bc8f7d" data-file-name="components/transactions.tsx">
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
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-6 flex items-center gap-4 shadow-2xl border border-green-200 z-50" data-unique-id="d14e9c16-aa26-4d89-8c14-19b4833d0c57" data-file-name="components/transactions.tsx">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div data-unique-id="fb43abfa-2ec1-47af-9cb8-10ce60219441" data-file-name="components/transactions.tsx">
              <p className="font-bold text-green-800 text-lg" data-unique-id="b9d304f0-caa2-4bb7-ba9d-31f6198b0bfa" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="e9b11241-79b5-4a3e-913f-93e9b44452c9" data-file-name="components/transactions.tsx">Multi-Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600" data-unique-id="2fd8ae7b-3a65-40eb-950e-a2fd1c65662f" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="7837f7ab-3a36-4cf2-bfd0-564e4816d0b2" data-file-name="components/transactions.tsx">Semua item telah diproses dan disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}