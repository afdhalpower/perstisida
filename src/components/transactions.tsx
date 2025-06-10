'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Plus, Package, Calculator, TrendingUp, CheckCircle } from 'lucide-react';
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
    quantity: 1
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
      selectedProduct: null
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
      selectedProduct: product
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
        timestamp: Timestamp.now()
      };
      await addDoc(collection(db, 'transactions'), transactionData);
      setFormData({
        productName: '',
        selectedProduct: null,
        quantity: 1
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
  return <div className="p-4 lg:p-8" data-unique-id="bec89752-10ab-40e6-a292-8f73dd335e75" data-file-name="components/transactions.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="463ace7b-868e-4c47-adc3-7661ab98e93a" data-file-name="components/transactions.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="19f419ae-17dd-45fa-853c-28ae884fc629" data-file-name="components/transactions.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="31fb2b30-46c5-4a13-a869-c74c5171f778" data-file-name="components/transactions.tsx">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="1a4e44e6-f11d-480d-8b2b-f71ed7c97ab8" data-file-name="components/transactions.tsx">
            <h1 className="text-3xl font-bold" data-unique-id="0a7bec39-8425-491c-90b9-1826cad3a497" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="316c10e9-5b1c-417b-941a-e4b46c46557b" data-file-name="components/transactions.tsx">Transaksi Baru</span></h1>
            <p className="text-muted-foreground" data-unique-id="8feeca8f-b0fa-4f73-aa9c-3ed0b78af9bb" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="57055cef-84a4-46ef-9fa6-fb85f152cd25" data-file-name="components/transactions.tsx">Catat penjualan pestisida</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-unique-id="4af97e9f-465c-4351-abeb-d7fd5fcf542c" data-file-name="components/transactions.tsx" data-dynamic-text="true">
        {/* Form Section */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} className="glass-effect rounded-2xl p-6" data-unique-id="24303319-3321-4e80-b964-8bf2e2b28939" data-file-name="components/transactions.tsx">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2" data-unique-id="f5459305-d485-474a-a2ba-f6437599294b" data-file-name="components/transactions.tsx">
            <Plus className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="64851442-55c2-4a85-83f8-88118467b7f8" data-file-name="components/transactions.tsx">
            Input Transaksi
          </span></h2>
          
          <form onSubmit={handleSubmit} className="space-y-6" data-unique-id="9214369d-8acb-4fda-b9ad-8a03e9371434" data-file-name="components/transactions.tsx" data-dynamic-text="true">
            {/* Product Search */}
            <div className="relative" data-unique-id="3238eb43-b4db-4bf0-b1a9-7370c2859668" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <label className="block text-sm font-medium mb-2" data-unique-id="f860da51-6eda-4cea-90f4-e287cb8e0126" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="b4bd2ab3-67fd-48a9-aa60-1765c16d2ce5" data-file-name="components/transactions.tsx">Nama Produk</span></label>
              <div className="relative" data-unique-id="8db62082-8b59-4fc9-84bc-208ea36c22a4" data-file-name="components/transactions.tsx">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input type="text" required value={formData.productName} onChange={e => handleProductNameChange(e.target.value)} onFocus={() => formData.productName && setShowSuggestions(true)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Ketik nama produk..." data-unique-id="4c0c11ea-2f33-4caa-ac71-d7a533d0666e" data-file-name="components/transactions.tsx" />
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
              }} className="absolute z-10 w-full mt-2 glass-effect rounded-xl border border-border shadow-lg max-h-60 overflow-y-auto" data-unique-id="93a33614-2ea6-4d98-b619-1162d6d3fd82" data-file-name="components/transactions.tsx" data-dynamic-text="true">
                    {filteredProducts.map(product => <button key={product.id} type="button" onClick={() => selectProduct(product)} className="w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl" data-unique-id="ea63281c-fe0a-4b79-974a-cdf8f1921af6" data-file-name="components/transactions.tsx">
                        <div className="flex items-center justify-between" data-unique-id="be4c53e0-342d-4e97-a908-8a00f234e1e2" data-file-name="components/transactions.tsx">
                          <div data-unique-id="581a99f4-d2a3-46b9-9f46-2cb6864e7edd" data-file-name="components/transactions.tsx">
                            <p className="font-medium text-foreground" data-unique-id="dd9a4396-deb1-462b-b453-227b7893a690" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.name}</p>
                            <p className="text-sm text-muted-foreground" data-unique-id="fc9d8fe6-c159-45e5-8f76-157b952e9652" data-file-name="components/transactions.tsx" data-dynamic-text="true">{product.company}</p>
                          </div>
                          <div className="text-right" data-unique-id="17065d36-5006-44cb-a819-482b07ef87fc" data-file-name="components/transactions.tsx">
                            <p className="text-sm font-medium text-green-600" data-unique-id="88ba2108-26f3-478f-9a40-68952ea8943f" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8490564f-14e7-4335-ad23-c977e60aebb7" data-file-name="components/transactions.tsx">
                              Rp </span>{product.sellPrice.toLocaleString('id-ID')}
                            </p>
                          </div>
                        </div>
                      </button>)}
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Quantity */}
            <div data-unique-id="07cc7cb2-dd9f-4a1b-9267-4b5b3d7e83ca" data-file-name="components/transactions.tsx">
              <label className="block text-sm font-medium mb-2" data-unique-id="e88c7cef-1e51-46eb-afd5-80d4c1e06720" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="3d0eec84-77c6-478f-974b-cb177ef65c4f" data-file-name="components/transactions.tsx">Jumlah</span></label>
              <input type="number" required min="1" value={formData.quantity} onChange={e => setFormData({
              ...formData,
              quantity: Number(e.target.value)
            })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="1" data-unique-id="a79f4a80-683d-425a-88df-6bd64602345c" data-file-name="components/transactions.tsx" />
            </div>

            {/* Submit Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" disabled={loading || !formData.selectedProduct} className="w-full gradient-primary text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-unique-id="4709e0a3-8d44-4552-81c9-5c92aac75ce9" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              {loading ? <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" data-unique-id="4048c6f0-15f1-46f4-98e1-e3dde910fc70" data-file-name="components/transactions.tsx"></div>
                  Menyimpan...
                </> : <>
                  <CheckCircle className="w-5 h-5" />
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
      }} className="space-y-6" data-unique-id="5a48b22c-be3b-4462-b46c-49ec917417f2" data-file-name="components/transactions.tsx" data-dynamic-text="true">
          {/* Selected Product */}
          {formData.selectedProduct && <div className="glass-effect rounded-2xl p-6" data-unique-id="5aa42cff-aed7-4ee7-9645-29b2ccd72850" data-file-name="components/transactions.tsx">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" data-unique-id="785a2b19-387a-47cc-bd93-df26942ef4e4" data-file-name="components/transactions.tsx">
                <Package className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="ede1eec8-7bb6-4ad7-9a92-c154bde6c7b5" data-file-name="components/transactions.tsx">
                Produk Terpilih
              </span></h3>
              
              <div className="space-y-3" data-unique-id="1caf6710-595a-4d73-b40a-ff0ea9860fa2" data-file-name="components/transactions.tsx">
                <div data-unique-id="3529c0cb-2117-4bfd-b29c-34fc0c4cf8b0" data-file-name="components/transactions.tsx">
                  <h4 className="font-semibold text-foreground" data-unique-id="dae1bf7c-9378-4d16-99bb-f225c7c467de" data-file-name="components/transactions.tsx" data-dynamic-text="true">{formData.selectedProduct.name}</h4>
                  <p className="text-muted-foreground" data-unique-id="7e968b0d-ca70-4a87-8e31-128e865baafa" data-file-name="components/transactions.tsx" data-dynamic-text="true">{formData.selectedProduct.company}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border" data-unique-id="9ac6cb58-791a-47d4-bc48-910c72e35772" data-file-name="components/transactions.tsx">
                  <div data-unique-id="aa497a2f-2417-44da-82cf-bbf556cebd00" data-file-name="components/transactions.tsx">
                    <p className="text-sm text-muted-foreground" data-unique-id="89778510-ee97-4e38-85ec-d19377386af8" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="8e1c2745-0a4c-4b48-b3bb-1dd384181e82" data-file-name="components/transactions.tsx">Harga Modal</span></p>
                    <p className="font-semibold" data-unique-id="e86c6a1d-0f50-442c-a637-03477f5d8f9e" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="95af33ff-cb9f-4ad3-bdd7-7b06d39742de" data-file-name="components/transactions.tsx">Rp </span>{formData.selectedProduct.costPrice.toLocaleString('id-ID')}</p>
                  </div>
                  <div data-unique-id="e32ce4cd-fe54-41c7-80fb-b1747740e465" data-file-name="components/transactions.tsx">
                    <p className="text-sm text-muted-foreground" data-unique-id="ebad86cf-4bae-4644-a5a4-5bcf3b95bbfa" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="535a9e27-ce74-4fd7-875b-baf5df834beb" data-file-name="components/transactions.tsx">Harga Jual</span></p>
                    <p className="font-semibold text-green-600" data-unique-id="80fb3aae-cf7f-411d-b104-3774b8f6cf71" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="58b217ef-45fc-4a5d-aeeb-4b55a5cd7b11" data-file-name="components/transactions.tsx">Rp </span>{formData.selectedProduct.sellPrice.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
            </div>}

          {/* Calculation Summary */}
          <div className="glass-effect rounded-2xl p-6" data-unique-id="161dfc59-7a6f-485b-86ba-ef900c5e60ba" data-file-name="components/transactions.tsx">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" data-unique-id="924d9db2-c1b0-4a19-b6ee-0a50919d7870" data-file-name="components/transactions.tsx">
              <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="8622109a-2c56-4e52-8e7b-dda04435ac2c" data-file-name="components/transactions.tsx">
              Ringkasan Perhitungan
            </span></h3>
            
            <div className="space-y-4" data-unique-id="ccbc2fb8-37fa-4b38-972b-60c5db26f0e5" data-file-name="components/transactions.tsx" data-dynamic-text="true">
              <div className="flex justify-between items-center" data-unique-id="b742ab99-41d5-4bbf-b4a4-e64bb03b22f8" data-file-name="components/transactions.tsx">
                <span className="text-muted-foreground" data-unique-id="663d26b8-acff-41d9-815e-7f9ff14ae86d" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="7d005436-0b8a-402a-8132-06f818b33577" data-file-name="components/transactions.tsx">Total Modal</span></span>
                <span className="font-semibold" data-unique-id="47e7d704-35a2-43b3-9f0c-e53287d0d3f9" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="10a8e04c-d061-434a-b646-4b53aff31102" data-file-name="components/transactions.tsx">Rp </span>{totalCost.toLocaleString('id-ID')}</span>
              </div>
              
              <div className="flex justify-between items-center" data-unique-id="1edb5fa9-8f27-478f-89e8-56e5ff9d188d" data-file-name="components/transactions.tsx">
                <span className="text-muted-foreground" data-unique-id="a380f108-1619-4c07-b6a9-53657bd24035" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="e6890d24-d117-49db-b87e-7351ce4209b7" data-file-name="components/transactions.tsx">Total Penjualan</span></span>
                <span className="font-semibold" data-unique-id="7986a4a9-dbb1-4993-91b5-c81fe3432758" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="57ee8c04-841f-4862-9658-0a6318db860c" data-file-name="components/transactions.tsx">Rp </span>{totalSell.toLocaleString('id-ID')}</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-border" data-unique-id="0186f796-7dce-4d10-8802-e1096bba2033" data-file-name="components/transactions.tsx">
                <span className="font-medium flex items-center gap-2" data-unique-id="ab543770-ba26-4e76-bb80-686c8ed14cdd" data-file-name="components/transactions.tsx">
                  <TrendingUp className="w-4 h-4 text-green-600" /><span className="editable-text" data-unique-id="2e368431-daea-4503-a19b-646226ee9027" data-file-name="components/transactions.tsx">
                  Keuntungan
                </span></span>
                <span className="font-bold text-green-600 text-lg" data-unique-id="667b3f14-5ed3-49c8-90c6-6b57a3248575" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="300b3a5c-b7dd-4db5-88e7-53213230a5ed" data-file-name="components/transactions.tsx">
                  Rp </span>{totalProfit.toLocaleString('id-ID')}
                </span>
              </div>
              
              {formData.quantity > 1 && <div className="text-sm text-muted-foreground" data-unique-id="810a9c76-ca15-4968-9b39-5c18c9975e6a" data-file-name="components/transactions.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ef46fe13-8770-4989-9741-819c54454a80" data-file-name="components/transactions.tsx">
                  Keuntungan per unit: Rp </span>{(totalProfit / formData.quantity).toLocaleString('id-ID')}
                </div>}
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
      }} className="fixed bottom-8 right-8 glass-effect rounded-xl p-4 flex items-center gap-3 shadow-lg border border-green-200" data-unique-id="86ca49ef-635b-41f6-9389-a7e63b492c85" data-file-name="components/transactions.tsx">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div data-unique-id="1396086f-e950-48d4-a8c6-3823e349688b" data-file-name="components/transactions.tsx">
              <p className="font-semibold text-green-800" data-unique-id="b1862397-5cd7-4c32-aad0-992f596d60be" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="542e5c12-f0dc-443b-80e5-b64ef3373165" data-file-name="components/transactions.tsx">Transaksi Berhasil!</span></p>
              <p className="text-sm text-green-600" data-unique-id="0a8d563c-d4b7-4c14-847c-09eb3c989e3a" data-file-name="components/transactions.tsx"><span className="editable-text" data-unique-id="47367d0a-5d85-4424-acf8-34e0be3292e2" data-file-name="components/transactions.tsx">Data penjualan telah disimpan</span></p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}