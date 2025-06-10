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
  return <div className="p-4 lg:p-8" data-unique-id="7f90f366-ad35-43a6-822d-9c5c475a1248" data-file-name="components/transactions.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="5210a1d3-af14-4e88-939e-6189ac6294c1" data-file-name="components/transactions.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="1c6d5c51-91b6-421c-ae75-d2fb2ac0f0a4" data-file-name="components/transactions.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="1653ddfd-b23f-4ef4-93cd-1b542cb1ca93" data-file-name="components/transactions.tsx">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="b43d34fc-55dd-4c12-80ac-51856f3bf564" data-file-name="components/transactions.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="af720fe8-0bc9-4956-a032-b983995f19b1" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="d591e45b-8a6e-4b66-bbf7-5cbd6e5cd8c1" data-file-name="components/transactions.tsx">Multi-Transaksi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="135b1c8a-331c-4250-8afb-a01cdeb93e73" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="fd3232ee-816e-49d4-aa2d-f001d5db1435" data-file-name="components/transactions.tsx">Tambahkan beberapa produk dalam satu transaksi</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-unique-id="ab49c9f0-921c-4a5e-b8c5-4c1b9d3e4f78" data-file-name="components/transactions.tsx" data-dynamic-text="true">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="b51174d1-5a1a-45e7-bf27-54445cd6f2ed" data-file-name="components/transactions.tsx">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3" data-unique-id="bcda8b39-f204-4980-9c5b-eb19df78d9f0" data-file-name="components/transactions.tsx">
            <Plus className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="e5553e3d-f38e-4189-a916-23affa84b866" data-file-name="components/transactions.tsx">
            Tambah Produk
          </span></h2>
          
          <form onSubmit={addToCart} className="space-y-6" data-unique-id="2911b3c0-551b-4941-bbc3-8f2f7076e5b3" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            {/* Product Name with Autocomplete */}
            <div className="relative" data-unique-id="fb54e377-04b4-48e8-83a9-0c0bce8f7d70" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="46663d3e-3261-4e88-a6a9-ebc737632263" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="69f0ade1-bb52-4f6d-91dc-32893b8fff27" data-file-name="components/transactions.tsx">
                Nama Barang
              </span></label>
              <div className="relative" data-unique-id="444a7cb5-f0f8-4c63-a059-58dcd050a058" data-file-name="components/transactions.tsx">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk..." data-unique-id="3965e092-d53a-4e22-bef0-94bc0f184c5e" data-file-name="components/transactions.tsx" />
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
              }} className="absolute z-20 w-full mt-2 glass-effect rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto" data-unique-id="7f0a368f-386c-4ad1-ac65-22601011d3c2" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-6 py-4 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-border/50 last:border-b-0" data-unique-id="9ab0170e-cc10-43b7-9011-5e4bb769442b" data-file-name="components/transactions.tsx">
                        <div className="flex items-center justify-between" data-unique-id="1b3308ea-f770-459b-a521-5ab354a4c401" data-file-name="components/transactions.tsx">
                          <div className="flex-1" data-unique-id="8e9bc822-fcf1-4471-9aea-e426ec3a4ccf" data-file-name="components/transactions.tsx">
                            <p className="font-semibold text-foreground text-base" data-unique-id="98f0ae2b-20af-42f9-a19e-0ee74592a06f" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.name}</p>
                            <div className="flex items-center gap-2 mt-1" data-unique-id="9df5cd91-e86a-4827-9cd2-fd48c50ed577" data-file-name="components/transactions.tsx">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground" data-unique-id="b89eaa60-86cf-44bc-893e-bca353966274" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.company}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4" data-unique-id="55bca963-a419-47c4-9314-5fb44646cb6a" data-file-name="components/transactions.tsx">
                            <p className="text-sm font-medium text-green-600" data-unique-id="74dba645-0ea2-43bc-ac83-842d15b1ca2f" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="76d87568-eb24-4194-a4c3-cf9fa6253451" data-file-name="components/transactions.tsx">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div data-unique-id="341d9d72-9e76-432d-8dfc-139743b12c53" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="b65beac3-9d40-4eb5-aba0-47e4c80bbe74" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="5f6dfd5b-36ea-406f-a0cf-115f41474e15" data-file-name="components/transactions.tsx">
                Perusahaan Produsen
              </span></label>
              <div className="relative" data-unique-id="1aeb837b-2f94-45ce-9ba1-236eae7a962d" data-file-name="components/transactions.tsx">
                <Building className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Masukkan nama perusahaan..." data-unique-id="0d7a9007-33ec-4349-8be3-b6ccf9eeeee2" data-file-name="components/transactions.tsx" />
              </div>
            </div>

            {/* Cost and Sell Price */}
            <div className="grid grid-cols-2 gap-4" data-unique-id="a3100983-f4a3-4d71-ba81-d1a786da20e0" data-file-name="components/transactions.tsx">
              <div data-unique-id="da80ea1b-743c-4db6-8155-ef1ddd579ef1" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="9e2c004e-95c3-41da-94e6-be77ecd9539b" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="f3d002c8-c856-490f-bcd7-0929c2b8b2a8" data-file-name="components/transactions.tsx">
                  Modal Barang
                </span></label>
                <div className="relative" data-unique-id="2de20a29-5009-46cb-ac09-cb61eb30cc48" data-file-name="components/transactions.tsx">
                  <DollarSign className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="9e23cfed-3fee-48af-82eb-6d6be65f6242" data-file-name="components/transactions.tsx" />
                </div>
              </div>

              <div data-unique-id="94542e52-617c-46a6-96e6-6e7b49b9efd9" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="c72582bd-ccb0-45bf-85e5-40910566cd44" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="f42ea887-ce06-4d85-bfa9-977da9e0e868" data-file-name="components/transactions.tsx">
                  Harga Jual
                </span></label>
                <div className="relative" data-unique-id="5d38afaf-95c0-475c-90c0-10b7e3ab3871" data-file-name="components/transactions.tsx">
                  <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="1b085f2f-7c01-4cae-994c-e6910f19dc03" data-file-name="components/transactions.tsx" />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div data-unique-id="aefe169f-eb70-4bc8-adf0-15339ba18029" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="3ae23190-83bd-4871-841e-a3d2cce6a9f0" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="087a773a-f35b-492c-b1f9-c952b4af91cb" data-file-name="components/transactions.tsx">
                Jumlah
              </span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="1" data-unique-id="95697519-9da4-42b9-95c6-b995c7efa4e9" data-file-name="components/transactions.tsx" />
            </div>

            {/* Add to Cart Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="w-full gradient-accent text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300" data-unique-id="62507d85-e1fd-4908-85f1-aa6c05a38aa0" data-file-name="components/transactions.tsx">
              <Plus className="w-6 h-6" /><span className="editable-text" data-unique-id="64634416-be51-409a-b5f1-7f3e2d4e5874" data-file-name="components/transactions.tsx">
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
      }} className="space-y-6" data-unique-id="a94878d7-b16e-49ff-8f16-be6d656468e3" data-file-name="components/transactions.tsx" data-dynamic-text="true">
          <div className="flex items-center justify-between" data-unique-id="a9b6c5e2-bbfb-4f93-9fbb-b58675eb177e" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            <h3 className="text-2xl font-semibold flex items-center gap-3" data-unique-id="77127c2c-e83b-47e0-bba6-8f01f23aa630" data-file-name="components/transactions.tsx">
              <Package className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="265fb924-64d3-40a2-8fc0-a399ba6c19ae" data-file-name="components/transactions.tsx">
              Daftar Belanja
            </span></h3>
            {cartItems.length > 0 && <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium" data-unique-id="ca9204b4-5d4d-4022-859e-afc3d5cb714a" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                {cartItems.length}<span className="editable-text" data-unique-id="e5ec61f4-99a2-4990-8a6e-4183ffc5c9f3" data-file-name="components/transactions.tsx"> item
              </span></span>}
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto" data-unique-id="1b348c95-7eba-4201-899a-454167689601" data-file-name="components/transactions.tsx">
            <AnimatePresence>
              {cartItems.map(item => <CartItemComponent key={item.id} item={item} onQuantityChange={updateCartItemQuantity} onRemove={removeCartItem} />)}
            </AnimatePresence>
          </div>

          {/* Process Transaction Button */}
          {cartItems.length > 0 && <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={processTransaction} disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-unique-id="8109f442-9518-439e-823b-2baba709b7d9" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" data-unique-id="a1c4a152-fe0d-4517-b628-f2e33293882f" data-file-name="components/transactions.tsx"></div>
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
      }} data-unique-id="6b909cc7-86dc-4464-8af7-a70382e47d44" data-file-name="components/transactions.tsx">
          <CartSummary cartItems={cartItems} />
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
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-6 flex items-center gap-4 shadow-2xl border border-green-200 z-50" data-unique-id="87e56376-1db0-4918-af28-5e65173da981" data-file-name="components/transactions.tsx">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div data-unique-id="85b4ffb9-ea90-4208-8cd7-3cf45bccd538" data-file-name="components/transactions.tsx">
              <p className="font-bold text-green-800 text-lg" data-unique-id="a9cdba81-6380-4946-8e69-a87b44fc6828" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="6c5bdaf7-9e12-49c9-b8ac-edb98f136c76" data-file-name="components/transactions.tsx">Multi-Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600" data-unique-id="df70a74b-1bfa-4815-8626-1d57794ba54c" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="4bbded8a-9955-41fc-8ab4-2df03f9663d8" data-file-name="components/transactions.tsx">Semua item telah diproses dan disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}