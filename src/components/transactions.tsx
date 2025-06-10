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
  return <div className="p-4 lg:p-8" data-unique-id="027520b9-ffd3-48d2-8b6c-57f88fdeff45" data-file-name="components/transactions.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="36d5b212-3fe8-452b-8d3d-b9e708b1c7af" data-file-name="components/transactions.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="fd384f17-d072-43cd-953c-20b12898004d" data-file-name="components/transactions.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="09ad6719-99cd-4a5b-b3a0-5afe4b8a469c" data-file-name="components/transactions.tsx">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="9f6a1c45-8acb-46d8-a87b-ba57ecc90a44" data-file-name="components/transactions.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="0197a47b-ef64-40d5-958f-3f63e26207d3" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="da65707d-6a31-46ad-bfd2-73ab0c999331" data-file-name="components/transactions.tsx">Transaksi Baru</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="082e22b8-b296-4568-b001-8bcfa0d06067" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="6b79a691-de8b-4091-b716-9f3c791c2331" data-file-name="components/transactions.tsx">Catat penjualan pestisida dengan mudah</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="a7103728-750b-43c7-936c-9c09f306b798" data-file-name="components/transactions.tsx" data-dynamic-text="true">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="c0a702f6-bda4-4354-9565-5f3537585ec4" data-file-name="components/transactions.tsx">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3" data-unique-id="9b120e2d-d620-4ba8-868a-8bbbfefe434d" data-file-name="components/transactions.tsx">
            <Plus className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="ac7d98dc-f49d-4151-944f-c97ce34dcd79" data-file-name="components/transactions.tsx">
            Input Transaksi
          </span></h2>
          
          <form onSubmit={handleSubmit} className="space-y-6" data-unique-id="477802d5-d9d3-4a7b-9c1c-2f4f084071ec" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            {/* Product Name with Autocomplete */}
            <div className="relative" data-unique-id="c82cb79e-d0ac-4a24-aed9-e0ce342f936f" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="4cf56ffb-71b0-49a4-bc26-7203c1fd43bf" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="300aaadb-aa7c-42c6-b2ba-5807982be485" data-file-name="components/transactions.tsx">
                Nama Barang
              </span></label>
              <div className="relative" data-unique-id="324cc722-4dac-49c8-8600-c5049f90a74f" data-file-name="components/transactions.tsx">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Ketik nama produk pestisida..." data-unique-id="cdcbc835-bfca-40eb-b39f-b0e7b1cce26d" data-file-name="components/transactions.tsx" />
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
              }} className="absolute z-20 w-full mt-2 glass-effect rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto" data-unique-id="44a5d1c8-cb57-4f32-9542-f89a64f4da9d" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-6 py-4 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-border/50 last:border-b-0" data-unique-id="ac9a2d97-aa38-4abd-beab-ba50bd0d7f38" data-file-name="components/transactions.tsx">
                        <div className="flex items-center justify-between" data-unique-id="22050169-ba96-4ff7-aa87-04e474f85ff9" data-file-name="components/transactions.tsx">
                          <div className="flex-1" data-unique-id="c04e6ae5-6735-4428-9ed3-504d2f3c7db6" data-file-name="components/transactions.tsx">
                            <p className="font-semibold text-foreground text-base" data-unique-id="9d7b4b57-7fdf-402d-8a08-6bed70cc271e" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.name}</p>
                            <div className="flex items-center gap-2 mt-1" data-unique-id="a9a55697-1bb5-473a-be07-56b879f5b1e4" data-file-name="components/transactions.tsx">
                              <Building className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground" data-unique-id="62e7cc8e-3ded-47c5-a84a-7a8c666e57ee" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.company}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4" data-unique-id="5a46d199-fc97-47ca-a69f-be3cdded112f" data-file-name="components/transactions.tsx">
                            <p className="text-sm font-medium text-green-600" data-unique-id="009c093c-6dac-435a-b8bc-0d1b5fb34a1d" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5e67f9aa-4cc8-4afe-a5fc-20be532b4d6d" data-file-name="components/transactions.tsx">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                            <p className="text-xs text-muted-foreground" data-unique-id="db64993b-28f2-4310-91f3-34a9252dae91" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="949e1b96-4bf1-41ec-baf2-ee3760187a00" data-file-name="components/transactions.tsx">
                              Modal: Rp </span>{product.costPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div data-unique-id="91ca8423-33d8-4112-b02b-9aa2fd9a259a" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="f1ab1fdd-3464-41b2-be57-d042af5142a0" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="a8f24374-2ed9-4e14-9c17-dd8903d6c136" data-file-name="components/transactions.tsx">
                Perusahaan Produsen
              </span></label>
              <div className="relative" data-unique-id="5cf61327-856c-4ea5-add2-beb883117a28" data-file-name="components/transactions.tsx">
                <Building className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.company} onChange={e => setFormData({
                ...formData,
                company: e.target.value
              })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="Masukkan nama perusahaan..." data-unique-id="67119add-bfac-4d90-8e64-e5795ec087ae" data-file-name="components/transactions.tsx" />
              </div>
            </div>

            {/* Cost and Sell Price */}
            <div className="grid grid-cols-2 gap-4" data-unique-id="24d4a8fe-18e5-444f-9236-0094dd53898c" data-file-name="components/transactions.tsx">
              <div data-unique-id="ca4b4ca0-3e66-4c12-bd2a-aadd7b126d11" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="98a7854c-c2e9-482d-9efc-b21c61ad1880" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="46bec7e6-3534-4171-abaf-b58191f6dc4a" data-file-name="components/transactions.tsx">
                  Modal Barang
                </span></label>
                <div className="relative" data-unique-id="16ff7ec7-22f0-48d2-bf7f-157536304e89" data-file-name="components/transactions.tsx">
                  <DollarSign className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="b9f2ce34-38fa-46a9-afdd-e65b8a75eb4b" data-file-name="components/transactions.tsx" />
                </div>
              </div>

              <div data-unique-id="7dfa2d8f-e3ca-4f27-ba2b-f7420b7915de" data-file-name="components/transactions.tsx">
                <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="56ed6371-0d0a-4220-91ae-eb9c8880dd5d" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="d4b15c51-0e6d-4d27-853b-2a771aff8751" data-file-name="components/transactions.tsx">
                  Harga Jual
                </span></label>
                <div className="relative" data-unique-id="346a2afb-de44-4521-9a7e-82b2b3817006" data-file-name="components/transactions.tsx">
                  <TrendingUp className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input type="number" required min="0" step="100" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="0" data-unique-id="72aca2f0-7f15-40c5-b431-c5e35a44058f" data-file-name="components/transactions.tsx" />
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div data-unique-id="9772cd80-5662-45f1-a16e-cef3943f9192" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-semibold mb-3 text-foreground" data-unique-id="c4f464a6-4b6a-4d8a-8dff-0302d9c1c95f" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="e771ab71-dcae-4ce2-8894-d6ff22583b46" data-file-name="components/transactions.tsx">
                Jumlah
              </span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-4 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 text-base font-medium" placeholder="1" data-unique-id="7aa42915-36ad-4080-912d-4704121e48d3" data-file-name="components/transactions.tsx" />
            </div>

            {/* Profit Display */}
            {formData.costPrice > 0 && formData.sellPrice > 0 && <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200" data-unique-id="d06d4222-8189-4f90-8f03-1b41ddd6897f" data-file-name="components/transactions.tsx">
                <div className="flex items-center justify-between" data-unique-id="b30ec254-828e-43d2-b869-b8905d3b7ee8" data-file-name="components/transactions.tsx">
                  <span className="text-sm font-medium text-green-700" data-unique-id="7dcbb69f-50d9-4620-981c-fbada6229e62" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="569a5cfe-21c6-4897-ac00-2d0762f1aaca" data-file-name="components/transactions.tsx">Laba per unit:</span></span>
                  <span className="text-lg font-bold text-green-600" data-unique-id="d6240d73-357d-40ef-8f93-b0685e2bbbdf" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ea994a0b-da36-4615-b7db-c99cf7325303" data-file-name="components/transactions.tsx">
                    Rp </span>{(formData.sellPrice - formData.costPrice).toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}

            {/* Submit Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" disabled={loading} className="w-full gradient-primary text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-unique-id="a53edaa1-4346-4bd3-86ec-240f6eca9162" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {loading ? <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" data-unique-id="365f78e1-4acc-412b-bdc7-6789194b0339" data-file-name="components/transactions.tsx"></div>
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
      }} className="space-y-6" data-unique-id="2a8d4384-feb3-49e7-96cb-45faf506c31e" data-file-name="components/transactions.tsx" data-dynamic-text="true">
          {/* Transaction Preview */}
          <div className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="3a6e3f43-4cd8-47cb-82b6-4adb05600726" data-file-name="components/transactions.tsx">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3" data-unique-id="016e4fdf-f13e-464b-aafa-47e60ed77e95" data-file-name="components/transactions.tsx">
              <Calculator className="w-6 h-6 text-primary" /><span className="editable-text" data-unique-id="17a85b25-b60d-4a02-91a2-f655db09b1cd" data-file-name="components/transactions.tsx">
              Ringkasan Transaksi
            </span></h3>
            
            <div className="space-y-6" data-unique-id="fe814959-51b6-4d0c-ba00-0b2c9dec0313" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {formData.productName && <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="8e66cbd8-47dc-424a-ba16-4507ad81db0b" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                  <h4 className="font-semibold text-blue-800 mb-2" data-unique-id="10c6c622-0015-456c-9322-f91775a593ce" data-file-name="components/transactions.tsx" data-dynamic-text="true">{formData.productName}</h4>
                  {formData.company && <p className="text-sm text-blue-600 flex items-center gap-2" data-unique-id="c0721ea8-d276-4363-a6ce-ef3b49648ba4" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                      <Building className="w-4 h-4" />
                      {formData.company}
                    </p>}
                </div>}

              <div className="space-y-4" data-unique-id="08afc00b-5037-4d03-b867-7a99df08958a" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                <div className="flex justify-between items-center py-2" data-unique-id="195e7b08-b0e7-45bc-ae17-97edd6594e38" data-file-name="components/transactions.tsx">
                  <span className="text-muted-foreground font-medium" data-unique-id="f75dbda1-b792-4de0-af0f-e3edd3728145" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="425c5d22-7703-4dee-9ad4-01d25a7de17b" data-file-name="components/transactions.tsx">Total Modal</span></span>
                  <span className="font-semibold text-lg" data-unique-id="f6c88b8b-b75c-403f-b522-a65b93bd122a" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5c427b65-b3e4-472f-a654-f27b04132c8c" data-file-name="components/transactions.tsx">Rp </span>{totalCost.toLocaleString('id-ID')}</span>
                </div>
                
                <div className="flex justify-between items-center py-2" data-unique-id="18076c3b-bbe9-45b1-aecb-3c198671c069" data-file-name="components/transactions.tsx">
                  <span className="text-muted-foreground font-medium" data-unique-id="a280f6a9-0c24-4296-a0e0-11df5d681f90" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="596eef45-f079-4673-bb99-f4affe185b85" data-file-name="components/transactions.tsx">Total Penjualan</span></span>
                  <span className="font-semibold text-lg" data-unique-id="01a9dd53-c47c-42f8-9c5d-394dcdef1e7f" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="002b9a56-941e-401e-99f4-37f03827593e" data-file-name="components/transactions.tsx">Rp </span>{totalSell.toLocaleString('id-ID')}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="29c1e76a-7e26-42f7-861e-3f86a323c4fc" data-file-name="components/transactions.tsx">
                  <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="4c303039-c5a9-4c64-aaa4-ab74481fe14d" data-file-name="components/transactions.tsx">
                    <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="26d9b610-0821-4f47-b161-6cbfebe33919" data-file-name="components/transactions.tsx">
                    Total Keuntungan
                  </span></span>
                  <span className="font-bold text-green-600 text-2xl" data-unique-id="094f6c62-e8fd-40c1-a0fa-c4df4013a5ff" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="45385468-ada2-4a60-a81e-b762972b290d" data-file-name="components/transactions.tsx">
                    Rp </span>{totalProfit.toLocaleString('id-ID')}
                  </span>
                </div>
                
                {formData.quantity > 1 && totalProfit > 0 && <div className="text-sm text-muted-foreground text-center pt-2" data-unique-id="83067909-6dbc-4d05-ab72-7c99b8471438" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="997e8193-11da-4c63-9d97-15e3ce7724a2" data-file-name="components/transactions.tsx">
                    Keuntungan per unit: Rp </span>{(totalProfit / formData.quantity).toLocaleString('id-ID')}
                  </div>}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="e0f547d0-01de-471a-9fc7-79316c6a6b7f" data-file-name="components/transactions.tsx">
            <h4 className="font-semibold mb-4 text-lg" data-unique-id="af9da44b-a0dd-4cf5-9c5c-13ab747639d6" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="fe97c535-c4e0-4638-acb0-356f0f1c22ed" data-file-name="components/transactions.tsx">Informasi Tambahan</span></h4>
            <div className="space-y-3 text-sm" data-unique-id="ef422565-f30b-4836-98c8-33c1958ba3c7" data-file-name="components/transactions.tsx">
              <div className="flex justify-between" data-unique-id="d6bb9927-9586-4cd2-b9da-cc4e5abb7426" data-file-name="components/transactions.tsx">
                <span className="text-muted-foreground" data-unique-id="40e9ae6c-576e-429b-a77f-94b10234304a" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="f64e4bb2-7e12-41ba-b6a0-19129ae52fdf" data-file-name="components/transactions.tsx">Margin Keuntungan:</span></span>
                <span className="font-medium" data-unique-id="37f0894f-dcaa-4090-b7f5-205afd7011f6" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                  {formData.sellPrice > 0 ? `${((formData.sellPrice - formData.costPrice) / formData.sellPrice * 100).toFixed(1)}%` : '0%'}
                </span>
              </div>
              <div className="flex justify-between" data-unique-id="040ec129-4139-4791-9e02-a1c636fbbb92" data-file-name="components/transactions.tsx">
                <span className="text-muted-foreground" data-unique-id="d48d1483-5e70-4d6d-aa40-80dda9e092b7" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="3b032301-a5d9-4fc5-b802-0272d4662c08" data-file-name="components/transactions.tsx">ROI (Return on Investment):</span></span>
                <span className="font-medium" data-unique-id="f80c47cf-4f7d-48de-9952-4831c0ef504e" data-file-name="components/transactions.tsx" data-dynamic-text="true">
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
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-6 flex items-center gap-4 shadow-2xl border border-green-200 z-50" data-unique-id="04903a09-7bf0-4755-b853-8f35d74c88ad" data-file-name="components/transactions.tsx">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div data-unique-id="a648fe81-d4d7-43cd-9ee8-4fac1b8713a9" data-file-name="components/transactions.tsx">
              <p className="font-bold text-green-800 text-lg" data-unique-id="1b91df49-05c6-4544-8fc1-b4207a4118d9" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="34aa6651-e909-489d-8ff8-ce2c6f417faf" data-file-name="components/transactions.tsx">Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600" data-unique-id="ca52aed9-7b80-4855-80a3-e097bc97001d" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="42c061e1-3494-4d0c-8fc1-2cc374bc2dc9" data-file-name="components/transactions.tsx">Data penjualan dan produk telah disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}