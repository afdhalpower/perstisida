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
    return <div className="p-4 lg:p-8" data-unique-id="21e19a43-9288-42b7-aea3-7733c5367aaa" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="e0a7799d-bb69-4d37-a552-f9d54250cca0" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="38df44f7-812e-4fae-9581-4d5ddab2d31a" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="e17843e8-6f1e-4187-a11f-d6e6b58149db" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="a018c77e-75ac-4e77-9c4d-9535fb979466" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="fee2ea67-23b9-436e-8531-806bfc9819b6" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="b1bb163e-8cf2-4c43-824d-f32b1f519734" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="35d08f50-1cbf-49ab-921e-cf5778d50f31" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="cf1b5f5a-a2ed-4752-b811-baacca67d2da" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="c2c2321b-0c59-4016-bd09-1e69a42d5dff" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="2cb63745-dd55-4b9d-8403-00fcf3c2dd42" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="6b05aeba-9e10-49dd-b9a6-281dfd8b1cfd" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="626f5a0e-0a7d-4255-983c-fc691bb99aa9" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="d10ac734-9ee9-42ab-ae43-197c66c6939f" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="19af6765-b7ef-4adb-b5dd-f0e42b521285" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="170cfad1-de0e-4207-a082-3458442d6ed4" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="f5088498-138c-4666-a389-82b50042d85b" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="f94cb3a5-a331-4202-9438-3981cb7cf8e6" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="074e4ce6-dc1a-4705-9fe6-426f0de0d259" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="63ce7364-a65a-4af6-93d4-9067e6fe2c1e" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="0b82b025-e9c1-4758-9e28-0e2d77c9c1e8" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="d88d9bbf-6763-41d0-886a-10f389097ba1" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="fa54228b-d28e-458a-9cfe-cf709f8c1025" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="fd3eee73-111a-44c9-85e6-57f11a8e76c6" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="bf15ecea-11f1-4707-a9f2-eca956956120" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="34cf6b55-a482-4d07-b8f2-171cb4fd2ee2" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="3090a070-3996-41d5-a2fe-73689e0e244c" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="214c83f1-1cf8-41ed-9a07-14ecaee6cc99" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="b70cbad9-8719-4f7e-8520-a0896b5e2796" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="a9c75482-53a3-4a17-a102-9369fd1f563d" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="293f9474-c95c-40e7-a33a-29a7f813e17f" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="436a2767-57d7-4372-a8ca-800f7349e340" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="a1f14466-2f09-4f1f-a29b-c5236423c364" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="6e322ebc-d753-4713-bc33-c0b326dac26f" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="59f5e7c3-9aa5-4d34-adb5-1048d6579e15" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="86d586a6-8538-40be-a787-d87f677e00e0" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="b9954d7e-419a-423c-9028-01aab4520e79" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="121d2113-49ec-436d-bd66-aa73101b41bd" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5e376d2e-0c9c-4a69-8ada-4c2c3693cba7" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="3fe82489-585a-44f2-a490-3932040df6bf" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="8375970d-9022-4878-b73a-5a2c9fae1b6e" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="d0299a10-30ee-401b-8eac-6aa1f05e7a0f" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="2d0f71d2-a74e-44a1-a10b-662f11323bb6" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="911b855e-7eaa-47dc-9896-3733d5cd8226" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="1a25a7ff-c99f-48f2-8b88-7dc8aa6fc017" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="e348eb87-35b5-4f14-ab77-967882dce338" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="ad1fd34a-8057-4581-97a4-7b059108c420" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="e4df4729-8897-4122-b503-47ac7ca8e06b" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c367a88b-9b5f-4066-ba13-8892fe28522c" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="764a094c-29c6-4fee-8caf-11a4f3f7cf19" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="d0c0093e-93b1-4558-9c01-789286ba739f" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="eef05e79-e36e-40a5-8c5f-efdeba9aeff9" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="520f652a-1171-49ce-8ee3-df185f1c8747" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="345ce64a-cbc8-451c-8e23-6490f618ca3a" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="66777fe8-9e28-4752-ae5e-e30cd53cab0a" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="bb7e1cc2-26c6-4d86-8d61-65d72105934a" data-file-name="components/products.tsx">
                  <div data-unique-id="e528ed23-3da7-4dd1-b173-03e8df991605" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="ea864d2c-577c-4240-941a-a983b0d3079d" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="36a88932-28d6-4020-8783-5a306214e522" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="bec4ecbf-7cff-4d8e-b980-27a371b593fc" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="7421084b-451c-4568-bc8d-74931b26a969" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="14b4b7ce-6fed-4838-a436-d20ece7e1c0e" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="3153cf6d-2384-4eb5-bae0-1204717cf6fa" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="e552ee3f-11b3-4fd7-b4f7-2d8c2b3daae5" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="95c9d825-7e3f-4c57-978d-82dbeadab3a7" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="1e522385-296a-4e94-a8f4-1af5ca1cc256" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="edf50adc-411c-4199-9ace-df823bf39ac2" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="ac9015ce-d6bc-4d04-90d8-12a8b922eeca" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="a633ed2f-bcb7-4b56-97fb-d83a09d5a504" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="cbd5e3d1-dd84-4f25-bf05-5150b6b989c3" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="6a062663-71b6-48d7-bbbe-c32e5c376d68" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="cd08abc6-3dad-4035-86f6-93a5cc002283" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="75dbce08-d2f4-4d65-be3a-24b0628a1d51" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="d1300e9a-f11f-4e7f-b30c-c17f3748ce2c" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="bf86bfb3-6128-4aee-a5e4-a3970b33dbfd" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="c2b69e60-b0ec-433d-ae13-8234fc3d3f89" data-file-name="components/products.tsx" data-dynamic-text="true">
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