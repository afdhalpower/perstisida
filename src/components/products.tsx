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
    return <div className="p-4 lg:p-8" data-unique-id="b60cac73-99ab-4895-ac54-bd0af7c42df2" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="427c3188-bd6c-4779-abb4-71ff16e73380" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="207ed138-4d97-4afd-aeae-4d5954cef250" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="97bf6651-479c-4fad-b382-4ac6c9ba6898" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="78602bea-ebd3-4301-b9a2-33e25de018ec" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="d5db4159-2580-408d-beeb-f8f3c19a56d9" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="2822ac37-d93b-4fed-af07-5bce2ef56d25" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="23e465cf-6663-4adc-8721-4bb08fc5789e" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="69368833-cdc6-4487-83ea-bc5eb7e2cf15" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="04cdf66f-4958-46cc-b1ff-f300073ec86a" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="eb1fb48b-02d3-4e55-b4dd-7a0ff1fe2273" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="c9957a67-d47e-4221-924a-aa99d42bc63f" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="4df1cf88-c59c-44cf-8aac-c5e82b3a9c17" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="a8e6ec6e-e4ca-4b53-ad4d-326de47a6b4d" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="4a2bc261-10b5-41f1-bc89-fcbba7fe1c06" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="30c90917-7d08-4fd6-9916-d2b52262615a" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="db3c574e-fbb3-4f5c-add5-d0f9ea2788af" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="0a1a4d6c-88c1-496a-a285-1f8de4910d08" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="6e9df450-3be5-42fa-9b11-38f29de7c368" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="900d246c-e8c3-4ac2-a413-8f8b7bcd115a" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="5bc6a370-458c-408d-9a8a-091ffce3a28b" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="ee5ed3d3-4d7d-4b41-a3b9-f9493c287edd" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="e6673c58-8d7a-469c-aee0-49ccc534cb6a" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="8788fa2f-d0ca-482b-8427-649600d2cdfe" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="57ab17b2-0290-4d87-b569-16c56b5c117c" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="06e22dcc-a5d9-4878-853d-ac6800a12507" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="69a3ad55-d8c5-4f96-9633-673f196327a5" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="5275164a-bea5-41c0-aa1c-b6c9f6d6d97f" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="3c290528-a912-46fc-9788-73e5a43a3bd3" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="ea3cdc65-9364-47fb-b588-ec20dd12ddaa" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="97ec0b08-c611-48b5-b86c-9f019b37acf7" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="9b78fce3-f79a-4e96-9970-fc53ccae05ff" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="21434168-2cc3-4957-ba99-9b87ccfff505" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="ceb2631a-3208-4035-bb5a-ea019559db5b" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="f3ae7a10-7009-46aa-8ba2-05d5dacbd91e" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="8d96d052-7ce6-4d67-a431-50143fc4456c" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="96be085e-61c0-4720-b8be-da03b883a919" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="d5ba86eb-2de4-4c62-a4dc-965be69f7141" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="67ab3a81-ae4c-4c99-a182-f25346d93486" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="f436baf6-1c3c-4392-82c0-81045a6f6409" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="7ad46c2c-7852-4a59-88c3-66584f479326" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="c7d70fa5-d805-49d7-b4a9-3b7828c27586" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="0033e8ad-4a95-4130-87b2-7c7bd4d0c490" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="346ac623-af69-43ee-aad7-9e2ed1d25ad5" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="f97778e9-770f-43de-8cdc-c140b9c2773b" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="49d5210d-dd5d-4e0f-bbac-94e92af25edf" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="5376dfdd-8d4c-4aaa-ae86-e019e56239e9" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="17a72f5b-2f76-4f4a-8197-5af64e34a503" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="532caf47-508d-4130-95a7-0574957d1d79" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="3ada0401-eb05-4b77-8174-ab5fe344d6b0" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="d1e29a5c-587c-45cf-817d-39a171beae3c" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="29226864-4129-45a7-8d62-8a4a4bca59ea" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="21591a7b-1c7c-4d08-9359-3dd6d681b35f" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="3f8905af-3a78-4e7d-a768-e5e4b69fbc61" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="fcd7d021-1714-487d-99fe-736f184526b9" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="7887cad5-5131-449b-b2f5-b3061b22d311" data-file-name="components/products.tsx">
                  <div data-unique-id="b88c8585-02a1-4114-930f-d232103f4e01" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="9c846895-5584-4521-aa5a-8482f826101d" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="76cff38c-3f4d-4c7b-9b82-861cf7cd8fa1" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="73c1601f-b171-423b-8583-73f5c3fb75a8" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="60485e94-f178-4425-b697-cfc73db7aad8" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="6332ec5a-1841-4a99-aa71-c60873e56f91" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="06672a30-389c-4f44-a881-2166315798a3" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="4bf18ef9-dded-4831-9a6d-cb5d8b699f61" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="c19bdbaa-e948-4b30-9f9c-1e2cf74028e0" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="68d15964-9ce6-4f85-b973-88b1ac56c811" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="d4911204-27a1-46bb-9c1b-2d2beaf40c33" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="3d2341b7-61e5-4864-87c7-cc66d4968477" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="8412a50d-8b10-4ae8-9d6d-ac7b497b1877" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="d9fd01d9-5f33-43c8-b0af-627b9c17f3c0" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="1967f94a-4f8b-4cf7-99ee-a30d1bd82037" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="945cbf3c-8e29-44a7-819a-2c84bcce38b1" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="b25bf134-223f-4ff1-9562-f190275f8101" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="94484522-5285-4c95-a5ea-8e1daeda5b3b" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="8b770614-2388-4e54-8705-caff25b59465" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="28625ab8-9865-4c99-8dd1-8167cdcc3573" data-file-name="components/products.tsx" data-dynamic-text="true">
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