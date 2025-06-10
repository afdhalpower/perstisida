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
  return <div className="p-4 lg:p-8" data-unique-id="4223d824-c41c-4e95-bbb5-39a87d0116f4" data-file-name="components/transactions.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="0d3af89a-e8f5-4579-ae87-f225716db80a" data-file-name="components/transactions.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="69bb4847-573c-4994-8ade-03dc7c17d852" data-file-name="components/transactions.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="6c7d5eb0-d27a-4dd3-9626-76143b931d11" data-file-name="components/transactions.tsx">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="75bd4d50-f185-4102-ac45-fc01dfc4e3c8" data-file-name="components/transactions.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="4bc47d35-f286-42ce-ad79-89457014dee8" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="174a2e2c-eb50-4a20-87b9-7b8c88ce973c" data-file-name="components/transactions.tsx">Multi-Transaksi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="48b58952-714f-49fa-9ee9-95e4c12ae292" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="fd971ea0-048a-4d87-a6cc-a3757e1cf846" data-file-name="components/transactions.tsx">Tambahkan beberapa produk dalam satu transaksi</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-unique-id="36bb42e0-600d-4099-bb17-01d5a5136e06" data-file-name="components/transactions.tsx" data-dynamic-text="true">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="69581490-e1c6-49ee-8607-e7ecb2f6d7ca" data-file-name="components/transactions.tsx">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3" data-unique-id="130e4aa5-8c18-434d-8a48-ccd901a22042" data-file-name="components/transactions.tsx">
            <Plus className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="5379359e-3b8e-4653-9e39-970c72f2b35e" data-file-name="components/transactions.tsx">
            Tambah Produk
          </span></h2>
          
          <form onSubmit={addToCart} className="space-y-6" data-unique-id="acb9f3d5-79c2-406a-ba78-a4218fac245d" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            {/* Product Name with Autocomplete */}
            <div className="relative" data-unique-id="415b03f0-01f8-4a02-a5b5-10960e8fea02" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="fa9419db-da89-4000-b506-c865adf5f1fb" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="606d0824-af21-4bad-b9e1-df65381df415" data-file-name="components/transactions.tsx">
                Nama Barang
              </span></label>
              <div className="relative" data-unique-id="4b278e6f-8b3c-4af0-98d8-f534744e60c1" data-file-name="components/transactions.tsx">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk..." data-unique-id="b8684729-801c-43d3-874a-bdf4dcc58ce8" data-file-name="components/transactions.tsx" />
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
              }} className="absolute z-20 w-full mt-2 glass-effect rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto" data-unique-id="ed180f4c-7770-418a-b8ae-6487f1aafa05" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-6 py-4 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-border/50 last:border-b-0" data-unique-id="f220d3d0-65e0-4498-a0e1-9e934cd06459" data-file-name="components/transactions.tsx">
                        <div className="flex items-center justify-between" data-unique-id="0ea132d3-b976-4701-880a-78f1d56b83b4" data-file-name="components/transactions.tsx">
                          <div className="flex-1" data-unique-id="f91a06b5-74e4-4cc7-aeae-8344c9ae96b3" data-file-name="components/transactions.tsx">
                            <p className="font-semibold text-foreground text-base" data-unique-id="d4303700-6115-4bc5-9222-7e9c87345888" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.name}</p>
                            <div className="flex items-center gap-2 mt-1" data-unique-id="1c491afe-751f-429e-b454-4feb894430ae" data-file-name="components/transactions.tsx">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground" data-unique-id="60db81ec-89eb-4c2c-a9aa-f7ac2e52699b" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.company}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4" data-unique-id="9f27a96e-1509-4d18-a5e7-9a39f3485da9" data-file-name="components/transactions.tsx">
                            <p className="text-sm font-medium text-green-600" data-unique-id="427965f2-19b3-4226-ad16-1450afb2f8fc" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="be2ac4fd-a37c-4241-80e8-9b9d8bc1de31" data-file-name="components/transactions.tsx">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div data-unique-id="2b03a67e-8409-4c13-be01-555303ef3720" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="1d4c73e8-27c0-4c3b-961d-29e635c27bdc" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="5c88f5de-7085-4954-8254-a0989064f98a" data-file-name="components/transactions.tsx">
                Perusahaan Produsen
              </span></label>
              <div className="relative" data-unique-id="2582ce26-e565-4157-8c06-735ea68a5f79" data-file-name="components/transactions.tsx">
                <Building className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Masukkan nama perusahaan..." data-unique-id="86656b65-5d29-4934-bb22-4c5903b1fe33" data-file-name="components/transactions.tsx" />
              </div>
            </div>

            {/* Cost and Sell Price */}
            <div className="grid grid-cols-2 gap-4" data-unique-id="4970c047-95eb-4227-90a1-fbd7cffbf1c0" data-file-name="components/transactions.tsx">
              <div data-unique-id="7db942c3-a991-4611-b276-65d302ca8b1a" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="b89501ce-414f-4ea8-829f-229571c0863f" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="8a1a6da7-bb1b-4f2b-acb5-a79199a7618c" data-file-name="components/transactions.tsx">
                  Modal Barang
                </span></label>
                <div className="relative" data-unique-id="61f97dae-559c-46e8-b595-ef9bbefc0d99" data-file-name="components/transactions.tsx">
                  <DollarSign className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="8186ece1-9fdb-4150-8297-bd276ed273c9" data-file-name="components/transactions.tsx" />
                </div>
              </div>

              <div data-unique-id="901103aa-6f31-4a1a-9a9d-6599c80c844e" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="16e1aed5-f02a-4c25-977b-b24494bebd1a" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="6c6d625e-bc32-4076-9e1f-7f37c53f60da" data-file-name="components/transactions.tsx">
                  Harga Jual
                </span></label>
                <div className="relative" data-unique-id="128a55c9-bcb4-47cf-854c-dd2facf6aad4" data-file-name="components/transactions.tsx">
                  <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="6c805adf-56fe-4d23-a6d1-130d34d1ff17" data-file-name="components/transactions.tsx" />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div data-unique-id="3e6cc8e3-2cf2-4db9-9f9e-ecc18cb0e6e2" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="af24666f-5457-4d57-8793-67394b8f017d" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="fd9cef33-8fc8-4d53-8306-3222e9276b92" data-file-name="components/transactions.tsx">
                Jumlah
              </span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="1" data-unique-id="3fc18b2c-e050-4c16-9ce9-b545c3815556" data-file-name="components/transactions.tsx" />
            </div>

            {/* Add to Cart Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="w-full gradient-accent text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300" data-unique-id="63e61141-fe03-4ee2-93b2-85fadc75f9a1" data-file-name="components/transactions.tsx">
              <Plus className="w-6 h-6" /><span className="editable-text" data-unique-id="04a5032f-c30a-4745-9e53-d080a6411e7c" data-file-name="components/transactions.tsx">
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
      }} className="space-y-6" data-unique-id="58192f25-6f65-48e2-8a14-64b99edb89f5" data-file-name="components/transactions.tsx" data-dynamic-text="true">
          <div className="flex items-center justify-between" data-unique-id="c2ce23b1-5fad-425a-88ac-f220f6476683" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            <h3 className="text-2xl font-semibold flex items-center gap-3" data-unique-id="d2f53553-8963-4260-a653-32ab64a8c00d" data-file-name="components/transactions.tsx">
              <Package className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="a66b5ecc-dcb3-4dfa-97c0-6f9a6e1717f3" data-file-name="components/transactions.tsx">
              Daftar Belanja
            </span></h3>
            {cartItems.length > 0 && <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium" data-unique-id="033ae8be-d859-4709-a5ce-6d4a3545cbd4" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                {cartItems.length}<span className="editable-text" data-unique-id="12e84dd6-9037-48b3-bbb6-7fb990c4147d" data-file-name="components/transactions.tsx"> item
              </span></span>}
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto" data-unique-id="d64347c5-b7d2-4436-b123-4e7cb907e821" data-file-name="components/transactions.tsx">
            <AnimatePresence>
              {cartItems.map(item => <CartItemComponent key={item.id} item={item} onQuantityChange={updateCartItemQuantity} onRemove={removeCartItem} />)}
            </AnimatePresence>
          </div>

          {/* Process Transaction Button */}
          {cartItems.length > 0 && <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={processTransaction} disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-unique-id="a2ae07ba-a08e-4b55-9f41-91cf62609350" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" data-unique-id="d1e9ecf0-1d49-465f-adad-494de8329304" data-file-name="components/transactions.tsx"></div>
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
      }} data-unique-id="df56881f-1c9a-472a-ab40-d37850c325d7" data-file-name="components/transactions.tsx">
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
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-6 flex items-center gap-4 shadow-2xl border border-green-200 z-50" data-unique-id="ee9f0def-918a-42f9-a1d4-4d22a17a74d4" data-file-name="components/transactions.tsx">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div data-unique-id="d9979a9d-9a4a-4308-aede-61fd19244e9c" data-file-name="components/transactions.tsx">
              <p className="font-bold text-green-800 text-lg" data-unique-id="b26be07c-5575-486e-87fd-b8a230e846a1" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="49650649-d970-4567-8089-e8884af15f64" data-file-name="components/transactions.tsx">Multi-Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600" data-unique-id="b598c004-0711-44f3-bfc4-5e609ba69f1a" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="20220e71-b56e-48bf-8c73-a0f4fcf63406" data-file-name="components/transactions.tsx">Semua item telah diproses dan disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}