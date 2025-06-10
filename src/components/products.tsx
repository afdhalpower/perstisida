'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Package, Edit3, Trash2, Search, Building, DollarSign } from 'lucide-react';
import { Product } from '@/types';
export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    costPrice: 0,
    sellPrice: 0
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
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await updateDoc(doc(db, 'products', editingProduct.id), formData);
      } else {
        await addDoc(collection(db, 'products'), formData);
      }
      setFormData({
        name: '',
        company: '',
        costPrice: 0,
        sellPrice: 0
      });
      setShowForm(false);
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      company: product.company,
      costPrice: product.costPrice,
      sellPrice: product.sellPrice
    });
    setShowForm(true);
  };
  const handleDelete = async (productId: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      try {
        await deleteDoc(doc(db, 'products', productId));
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.company.toLowerCase().includes(searchTerm.toLowerCase()));
  if (loading) {
    return <div className="p-4 lg:p-8" data-unique-id="800419d6-3d99-48ad-888f-f2fe2f63554d" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="2730811e-b459-448b-a47b-3a42c2b49f7f" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="36b9ef57-354c-41e3-9e6c-dd775235f9e6" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="4de6b458-d463-421c-bb14-f28996ff07a0" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="19d5ed0b-36dd-4b7f-a56f-365e4d0ff1e0" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="6ca0359a-0c93-4a47-a53c-26821300b90f" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="cfec2a24-8e2c-43dc-8e7c-bcc08b52b068" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="8cf120b1-2644-48bd-8f0e-747290344091" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="5a74aac0-cd65-4b12-86f0-92c8b12f18a5" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="bcdd5b3f-1339-4c15-b7ec-15872f723626" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="416ece33-bc1f-4b28-9e59-15e36d8aad36" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="3b0498fc-06b8-4fec-8b5b-ba3dc520546c" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="2f654f21-8ebb-48bd-b342-a53c2c9c6d97" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="bf1a110d-ea73-40ba-ab54-1f6e859d521c" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="bc2b9ea2-5827-432c-aff5-660a2f8751cc" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="be2006ff-e551-44d2-9d56-5be5d376fc31" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="8291f9d3-c3a4-4165-aa12-16990c8308ee" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="c778541e-4c59-4f71-9ee1-aab6949074ea" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="dd3bc490-ae0f-4590-9056-2b76614f21db" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="00ee9583-78e5-44de-bf71-8d7fe714b939" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="59843c45-3a88-472b-ac6c-702cb4fe09af" data-file-name="components/products.tsx">
        <AnimatePresence>
          {filteredProducts.map((product, index) => <motion.div key={product.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          delay: index * 0.1
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="aa530a26-1fc7-40bd-a637-c893627927eb" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="885c34ad-78f2-4536-98db-0d11b8846132" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="44d00c5e-090f-42fc-ab5e-6d3985d2c2e5" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="e4a88278-283e-4cbd-a476-f1b45ac47373" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="104ee74b-3ea7-4765-acd7-2e3ae124e71b" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="269aca49-af06-4182-88dc-8bdb3222eca8" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="e38aef2f-ebcd-4048-b2a5-d67f8bc0c3c9" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="846e9cfb-d8fa-4f2f-9ad6-93cddb236bc5" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="4d592cf2-2760-47cb-bdcc-666afbb84d53" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="bd3c6932-9cc2-4a0c-b548-733a2a479e99" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="b1582d69-0e07-47d4-9394-97b74284595d" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="23d01d36-86ca-4620-9e9e-c607ae9f3743" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="6bf436f9-de84-4727-90cc-6a54cd05835f" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="91feff19-e20d-4d66-b224-4e5524f10b73" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="eeae2f8e-79f1-4dd9-8801-2f3a65ff41dd" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="a9706e15-5066-437a-9ed8-629b69c39783" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="7dc52950-36a7-478a-9fb4-5b28885dcb28" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dcae3d40-6c47-4ce2-8686-6dced3aece23" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="102d5ca2-df13-4098-861b-126b19c4fd95" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="5967a11e-e088-422b-a011-9e5baa5bb3a3" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="91177500-bbd9-4606-a9e2-160e73df3c4f" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="d43c61b6-bdcc-4754-80a7-c351764e3a19" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0c3578aa-ec9a-4c5f-9497-729ceecc89e3" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="0cef2cb5-29f6-4825-a2aa-c8d92aa97c88" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="c63a1831-f661-42db-9d3e-3601028671c9" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="5fca4f92-c4fb-49d8-852e-751dab334614" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="f9d75115-fd89-40c1-b68b-0b1d8ddf1b71" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8fdcdfa7-e192-4b0e-b6fe-a77853b29fde" data-file-name="components/products.tsx">
                    Rp </span>{(product.sellPrice - product.costPrice).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            </motion.div>)}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && !loading && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="text-center py-12" data-unique-id="7d963d1e-7bc1-4e9a-b961-eaed8ffd4504" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="c3b0b100-4a74-442f-9fa0-ba532f494b6a" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="86daa535-18dc-462e-a26f-c6fe3124a9a3" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Coba ubah kata kunci pencarian' : 'Tambahkan produk pertama Anda'}
          </p>
        </motion.div>}

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => {
          setShowForm(false);
          setEditingProduct(null);
          setFormData({
            name: '',
            company: '',
            costPrice: 0,
            sellPrice: 0
          });
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="6d2d28dc-d386-486b-80db-c2e033450eec" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="060d4c74-8d42-4a5a-99fb-34367d8d5608" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="7bcda1e5-4bb6-43b4-b0ef-2dff7aca40bb" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="f87c05c8-846e-4370-b774-7efe380596b7" data-file-name="components/products.tsx">
                  <div data-unique-id="02d17f86-a2b2-4427-9328-9c814e7ec7f3" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="0875133e-9c28-4ea8-a288-b5f62b422da9" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="b80594b3-6899-45bd-a467-fb7cc1c7e0b7" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="5b70e643-4648-4e1d-bc5b-18bea123404b" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="634f96f2-0362-404b-9697-b409d6215308" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="89cd4c3e-f8b2-4e1b-9db8-27f35842dd86" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="125fd624-667e-4891-a319-a5fbc80e7467" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="0e4e77a8-52a0-4dc9-a315-22c60fbc988d" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="1dfe413e-4816-4d75-b7d9-78b51f1443ee" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="78674406-1b14-41a6-aa0f-857590cf48d5" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="378ccd2b-ffe0-47c5-a4f9-fe91491a144d" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="ecb6c476-53fd-45b1-b3c4-261372dcab82" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="1e8aa7b4-384f-4ce0-ac62-c64b0898645b" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="3c84b863-cc96-4ee0-bc5a-a4af06113d14" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="5bf4bae1-bad0-4e8e-954c-14b81afec1dd" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="5e8cc112-f15b-45b5-a53f-4ff7b77f3b02" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="4b60e999-868b-4154-aaaf-08d587f7c9a9" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="aeb5bdcd-1ac4-4e84-8e32-831e1a6f1ee2" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="0d8c2ab0-8654-4992-a734-4340601342cc" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="c458a58e-70e6-4b17-b616-2bb789aa8b2c" data-file-name="components/products.tsx" data-dynamic-text="true">
                      {editingProduct ? 'Update' : 'Simpan'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}