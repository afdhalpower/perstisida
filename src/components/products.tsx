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
    return <div className="p-4 lg:p-8" data-unique-id="1bdc5658-5a86-4171-ae97-38f75cba1f5a" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="5a87d3c2-31c4-4534-b94d-7f43d8234c7b" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="fdc2d584-1288-4d00-a522-9d7e7db4efcf" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="c9e60f1c-acca-472d-941f-1b46050384c8" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="65a1b1aa-48f5-4686-bb37-656267d4a7d5" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="d9419d8a-fa59-4a90-82f5-3eabeaf71b71" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="5682864f-22b3-4f29-9346-33c33f94e371" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="f4e7095b-dcf5-464c-b427-54abb393e36c" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="7a6dfc18-b7a7-4b0a-85fe-9bc1b20725f4" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="fdf1c133-b54b-4f25-9b74-1341b781e64f" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="4a248cce-981c-4e7d-b4f9-3fa2c533013a" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="a457b8e3-dde6-4c5c-9bb1-696620608c9f" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="36d08d90-bfd3-4b90-8668-8a9c5e41d898" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="d0744ca9-e977-4b24-be5b-567e53575785" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="b1a2a112-5364-42d5-a61d-332f29f03b1e" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="68438861-a1eb-4306-a78a-b1f91681c83e" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="f991e2b6-acd3-4947-8206-7b5d2847964b" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="9a3f7967-a24e-47c3-865b-621342a22497" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="9e7b1d8c-ae74-41c4-a5a5-e85e58b0397e" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="25a902a9-9e48-4856-8ec6-cca058d6ff7a" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="baaed2e4-53b7-4165-a186-a27a6c4ae520" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="b8f20e47-c1d1-4784-b17e-6b29cceee726" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="f197ffdf-46cc-4fd3-9a28-7775f5b4c23b" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="c0973e44-795a-4d4c-a736-16e2dcca1807" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="844e0130-ce7f-4605-9ffd-f823a511f9ab" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="6bcdbd57-2fc7-4cdd-8fa4-8de954fce0db" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="42e9f813-97da-493c-8060-3b2bcc4e72f4" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="752364fa-194b-4c4e-8faf-80dc2ac2526f" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="6b68be35-9860-4eca-b520-612fdba60cda" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="889a81b0-34d5-4fc7-ba05-7fdb3dcdba64" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="523ffaa7-9aba-4335-8877-931451501e77" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="b21c5e0f-2340-4baf-99f6-2c7638ec7488" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="2346863b-30e7-4f11-859f-900bef354b37" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="810d62b4-bb7d-44bf-9865-db466fb4d4e0" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="791c9829-2c8b-4ce1-b7b4-26cce6299ec5" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="22e7f05a-c99b-4b14-b728-8bf99d85d315" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="d577f45a-cf74-4f0e-8495-d75bff34805f" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="643a543d-0bd5-480e-a1a8-fabcfa7aba8c" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8f2987f8-0d67-4d0b-9dd7-0e72b646df4a" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="cf34cb0e-5c03-4b44-bc7f-f756fe2b99fa" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="2099341f-900a-42d6-8b90-692ec75336f7" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="1126faaf-7c3e-40ac-aa28-91448e3034db" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="7cdac209-9e03-4c74-8893-57903c73da72" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="4db165bf-b1d6-4be9-83c7-c79dea665a2c" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="894dcdbb-2b00-42df-9b1a-5855fcbfcb6e" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="718bfb89-fa7c-4258-ab0f-d11e201e2efd" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="0d5b986e-b04a-455f-b957-dc9d5c63ff12" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="d19bbc99-dca3-4c78-8037-55145a341cd2" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dd54cce2-1ed4-419a-82ac-8135c13e020b" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="5abfb9a9-0f13-402f-85ac-d71806081ead" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="6c9f9f7a-4ef5-4260-96bf-00e7fc542570" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="6e661160-302f-4a2d-a32d-8a998b1d6df6" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="57307340-ed23-4bd7-b43b-c8b2fd17b909" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="ca19a492-d225-4b7b-8ebd-23a2aa8215bd" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="2ffcdcec-e90b-4e49-96c4-9b56d9be1f77" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="a99d66b0-8851-46ae-a207-6192b689b930" data-file-name="components/products.tsx">
                  <div data-unique-id="8a346a2d-e734-4d6b-b8e9-80bc989c225e" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="88f51ea4-76dc-4804-a632-d98a2b9df636" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="32f63520-9867-45aa-af5d-223e0c060983" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="98c77e33-3ef7-44c7-bc83-e7d3e2d078c9" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="e845d9b9-fa21-446e-a2d5-b91284d5540c" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="cd1e9dd2-6892-455e-8dd7-2abd7b703f1b" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="84a6e24a-8c53-4f4f-8948-8e96fbd1d702" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="23c0aaf4-0001-4c11-ace7-3a860a45a1a4" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="1b399bf8-8637-41b0-9333-e0fe722be693" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="e5412b12-19af-4b38-a59a-1f90fc903e69" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="ce1970a4-e0a5-4b10-ae6e-712e670b05c7" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="0f44c598-2fb6-4af5-a319-f4e0a3234152" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="97e02d1b-f087-476b-9a9d-b73e36e815a6" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="21060beb-1f80-424e-ac7f-c3ea1fda57e7" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="d97bb2b7-0d7a-4d0d-817c-1bda1f272be8" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="e65bcc69-3823-4be9-9862-d6dad39b8b14" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="3484f889-47f9-44ec-8e63-65e3ce9d189f" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="48c2d7cb-99a2-4387-b276-802a3dd5b688" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="8880a7c4-e7f5-4972-b394-c79cfd056132" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="74e53e94-6001-4d6f-bd7b-bbe846bb4e8f" data-file-name="components/products.tsx" data-dynamic-text="true">
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