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
  return <div className="p-4 lg:p-8" data-unique-id="3d4e0a7a-6fb4-4d64-9fb4-307f8a087e1c" data-file-name="components/transactions.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="11dac20c-c29f-46dd-b54f-e36aefc8886a" data-file-name="components/transactions.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="ff826d34-26c6-4f65-9079-a568cdfa8481" data-file-name="components/transactions.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="3772523c-cc49-4965-9b85-8fc51e79b042" data-file-name="components/transactions.tsx">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="e3b99588-69bb-49c2-8508-4cff7b914e91" data-file-name="components/transactions.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="2bb2bce5-b3b9-458f-9a90-9f24919ce71a" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="0216d02d-59b7-4af6-a5a4-65f732a7eae8" data-file-name="components/transactions.tsx">Multi-Transaksi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="da6c5e85-5c60-4de7-9958-f6d79d86f500" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="0df5111e-6b92-4015-b50e-0425f6ad2df0" data-file-name="components/transactions.tsx">Tambahkan beberapa produk dalam satu transaksi</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-unique-id="e18087fb-e783-406b-be20-eb8f58706eda" data-file-name="components/transactions.tsx" data-dynamic-text="true">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="ea4f947e-b0ea-4ed5-b70d-1f2f1f522392" data-file-name="components/transactions.tsx">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3" data-unique-id="45c84337-2064-404c-9c0b-6dd7eab54dbf" data-file-name="components/transactions.tsx">
            <Plus className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="f307e933-2f12-46bd-a12f-a506580e30d5" data-file-name="components/transactions.tsx">
            Tambah Produk
          </span></h2>
          
          <form onSubmit={addToCart} className="space-y-6" data-unique-id="5695ca47-271d-487f-9b55-1c9b01819ca9" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            {/* Product Name with Autocomplete */}
            <div className="relative" data-unique-id="706022aa-fea6-416a-80b0-a87d436fd8e1" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="468b7a2d-8620-4f9d-a914-e5aee117443b" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="ddc5ae72-62ac-41b6-9f18-b43a7d78a001" data-file-name="components/transactions.tsx">
                Nama Barang
              </span></label>
              <div className="relative" data-unique-id="a8a54b57-efab-4360-8d6b-04bc07b7ad48" data-file-name="components/transactions.tsx">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk..." data-unique-id="a61dc23c-cb8f-43f9-9566-06c697c6be8a" data-file-name="components/transactions.tsx" />
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
              }} className="absolute z-20 w-full mt-2 glass-effect rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto" data-unique-id="a520304a-96ea-4fc6-b1de-d44808af6646" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-6 py-4 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-border/50 last:border-b-0" data-unique-id="984ee407-a7c8-4305-ae92-04779c93297d" data-file-name="components/transactions.tsx">
                        <div className="flex items-center justify-between" data-unique-id="a600f8eb-3659-4893-ac73-5879fa1dc63d" data-file-name="components/transactions.tsx">
                          <div className="flex-1" data-unique-id="fe631ac6-91b2-4258-aa68-18d50b88b6b4" data-file-name="components/transactions.tsx">
                            <p className="font-semibold text-foreground text-base" data-unique-id="2203611b-81fc-4c58-800c-c3f55a6cf81f" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.name}</p>
                            <div className="flex items-center gap-2 mt-1" data-unique-id="067e5c46-2ab9-4ad7-b390-a410fe8abd86" data-file-name="components/transactions.tsx">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground" data-unique-id="981fc7c6-275f-4c33-a78d-15dcd2c6bc68" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.company}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4" data-unique-id="a518b908-0b29-4d14-9e76-9bf76153e832" data-file-name="components/transactions.tsx">
                            <p className="text-sm font-medium text-green-600" data-unique-id="26ca7ff8-d445-4b4e-9c72-ea1ea03d74f0" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dae55ea4-3517-4438-b884-4560835dee8e" data-file-name="components/transactions.tsx">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div data-unique-id="100d02bf-d9b8-4a1b-974b-ef9ae5024f89" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="e54c2fec-f709-4fa9-b5e6-0b36b9e603fa" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="32db3ef8-6144-4763-9618-42ab4c3698a4" data-file-name="components/transactions.tsx">
                Perusahaan Produsen
              </span></label>
              <div className="relative" data-unique-id="3968f039-f478-48d2-a179-cc9ff537b2ec" data-file-name="components/transactions.tsx">
                <Building className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Masukkan nama perusahaan..." data-unique-id="6b8a4cfc-bdfc-4e37-ada8-fed0cc281d17" data-file-name="components/transactions.tsx" />
              </div>
            </div>

            {/* Cost and Sell Price */}
            <div className="grid grid-cols-2 gap-4" data-unique-id="7926ce49-d82b-41f9-82c7-12b0cbcf4ce2" data-file-name="components/transactions.tsx">
              <div data-unique-id="634ae0b4-7180-4d6d-8e12-8a7995ad8fab" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="693c472d-7edd-4e3a-9ab5-40224e51ed67" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="e3da997a-4eec-4b0d-9168-b0a05991a66b" data-file-name="components/transactions.tsx">
                  Modal Barang
                </span></label>
                <div className="relative" data-unique-id="d8ff9fcf-224c-46d6-aa12-0845ffe44535" data-file-name="components/transactions.tsx">
                  <DollarSign className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="d2e6b583-9b91-4b5b-bb64-4eb29248f4d5" data-file-name="components/transactions.tsx" />
                </div>
              </div>

              <div data-unique-id="dce46bf0-02bb-470b-8513-dadfc021ead5" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="09698c8f-838e-47c5-8cd2-f28da8e4f129" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="003b0326-8b39-4a6f-8db2-1768b4fa925e" data-file-name="components/transactions.tsx">
                  Harga Jual
                </span></label>
                <div className="relative" data-unique-id="d5f2d560-1993-42e4-ac17-393405c89245" data-file-name="components/transactions.tsx">
                  <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="1bf7c5b2-fda4-4f4c-a879-a237539b92a5" data-file-name="components/transactions.tsx" />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div data-unique-id="35422acf-eb80-4d7e-9ccd-0db9f407ea6c" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="3dde3113-4491-4705-a900-809aca351acc" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="ec92dddb-187c-4f1b-a277-6382d08d06d7" data-file-name="components/transactions.tsx">
                Jumlah
              </span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="1" data-unique-id="f58b7e05-6f04-485f-80d9-18bdae81dd04" data-file-name="components/transactions.tsx" />
            </div>

            {/* Add to Cart Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="w-full gradient-accent text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300" data-unique-id="97971ad5-4ba1-4d68-8d96-97b7cb68fa1f" data-file-name="components/transactions.tsx">
              <Plus className="w-6 h-6" /><span className="editable-text" data-unique-id="61e0d3f2-6d5b-4411-9958-fb025b4c0b9d" data-file-name="components/transactions.tsx">
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
      }} className="space-y-6" data-unique-id="51afc441-e077-405c-bbaf-636a1847591b" data-file-name="components/transactions.tsx" data-dynamic-text="true">
          <div className="flex items-center justify-between" data-unique-id="c6ce1361-02aa-4d96-9562-5541e77108b6" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            <h3 className="text-2xl font-semibold flex items-center gap-3" data-unique-id="3c51fe98-b3af-4c74-991e-b159442670db" data-file-name="components/transactions.tsx">
              <Package className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="385a66dc-cc55-42fa-aa8a-4eb60697839a" data-file-name="components/transactions.tsx">
              Daftar Belanja
            </span></h3>
            {cartItems.length > 0 && <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium" data-unique-id="bb5f11db-5bdc-4376-a7b6-9b2cf250b6a6" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                {cartItems.length}<span className="editable-text" data-unique-id="a020876a-8d91-41a6-8b6e-76c55727d2fd" data-file-name="components/transactions.tsx"> item
              </span></span>}
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto" data-unique-id="209b458f-2374-4d57-b0b1-58c95b00e538" data-file-name="components/transactions.tsx">
            <AnimatePresence>
              {cartItems.map(item => <CartItemComponent key={item.id} item={item} onQuantityChange={updateCartItemQuantity} onRemove={removeCartItem} />)}
            </AnimatePresence>
          </div>

          {/* Process Transaction Button */}
          {cartItems.length > 0 && <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={processTransaction} disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-unique-id="3b1bef5b-c795-4fbd-8cd4-2fbf4570098c" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" data-unique-id="995133b9-661b-49c5-b3c1-18eaae164d10" data-file-name="components/transactions.tsx"></div>
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
      }} data-unique-id="4c045e98-deb1-461b-be7c-1a89343d1329" data-file-name="components/transactions.tsx">
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
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-6 flex items-center gap-4 shadow-2xl border border-green-200 z-50" data-unique-id="d2763e6b-1d6a-4f94-94eb-422770abb896" data-file-name="components/transactions.tsx">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div data-unique-id="cb8367a2-9c5c-44dc-a235-f6984fc5ab0a" data-file-name="components/transactions.tsx">
              <p className="font-bold text-green-800 text-lg" data-unique-id="2ab19c2d-457d-4833-b4a1-14e90eda12d1" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="ed7c6650-921c-47d6-a808-6ea8d156b62e" data-file-name="components/transactions.tsx">Multi-Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600" data-unique-id="6140462c-769b-4452-b318-9b6f8e875adf" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="d6e992cd-1e68-458b-8b16-c930a4c02378" data-file-name="components/transactions.tsx">Semua item telah diproses dan disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}