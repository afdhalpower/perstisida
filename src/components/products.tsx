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
    return <div className="p-4 lg:p-8" data-unique-id="4abc2424-c80d-41a1-9aa8-9fe560be579e" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="eb37a6c5-7a9c-4e13-8a80-111d118e8565" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="4afd9ca7-4929-495f-835d-23061ffb1321" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="42657f5a-1f9e-409d-8724-ce513151cc23" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="e48b87a6-fe57-42f1-a5b2-ecec4e984fd2" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="905304c0-fd34-4f98-8653-1b56b470000e" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="ad8f6afb-7764-40d3-9d67-996c93f97018" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="2a9a6d49-6a29-4054-9325-2e385a8d032a" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="2242dee0-125d-4b6d-a9be-22fa0d61872b" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="0f4c0a5a-1ebe-4aa5-99d4-f227a3809524" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="39c1e93f-ffca-49ef-b72d-7359638fa6f0" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="403788cc-8fdd-4f2b-af93-c57debf61321" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="db1c3747-6dee-49ee-b6e7-66da334e822f" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="f55855ab-8dc0-4690-8c2d-a57fb82cfdaa" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="06c1afa2-fc74-4a94-9236-b3ddeab7938d" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="3b125e2d-afc5-4360-85c9-15dea596539b" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="37d9b8e0-c895-424f-bd69-17413349e2c7" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="90394b90-ed9b-4176-9b53-bc0b5a3e9f70" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="0323656f-9050-4f74-9369-7edd86354424" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="53cc2635-929a-49e3-8b40-c267ef82c300" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="03ef6394-f0f0-48ce-8040-6e7e0a5bca15" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="4f3318cd-7bcd-4cc3-979b-313d9b7a0194" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="b03f3c6b-7f1b-4b02-89f6-df22b68dfe1d" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="d868f0bf-8b98-405e-929d-aa52d489e5ac" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="cbcd3206-8327-4374-b10f-87449c3a58d0" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="2923ca02-7100-425f-a724-1ae7cf279e99" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="d702b9b0-3ecc-4120-9356-05a28a9b3d60" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="ee29f1aa-e116-45cb-acac-f54d869ff7cf" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="a10738ab-83ae-479c-8db7-f785e3c499d3" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="07b48c33-294d-4e2f-944e-fbb02b83739b" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="9d7f2312-34bc-4bb1-9259-db9430834781" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="574446b7-21cc-459b-b5d0-4c87ec8fda09" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="b42bd90d-9c30-46e3-9a31-42969de74d77" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="6d48e4ab-d44a-4aa1-9f55-7df7622161ca" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="c11b4cc3-434a-49f9-a7ac-511f6f62ea8e" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="46d9dc94-5758-4c6d-821b-07cbbcfe037d" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="bef007d0-eba7-41fd-b02e-a92ecebe903d" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="9701232c-cbf6-4d35-a4ba-f1f1271f3677" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="edb96f4f-a77e-4a02-b465-a273e9a0ea0c" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="2ee80fae-563f-4d83-9f21-7b3ce7a9706e" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="2f7a9dd4-b086-42fe-9577-6267f9f999a6" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="7cb16e9d-3bb2-4ff7-93f6-37cfdda8c30a" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="ffc8315d-512d-4c39-86dc-8593c4482083" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="4f89c72e-3424-42ff-aea2-cd2669de46be" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="62c74040-0948-4eea-a2dc-15c73fac6d1a" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="67a0a128-41d9-4aaa-87b8-55a6d90fb7b4" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="54c29558-1fff-4f0d-b0d2-9ab6b5977529" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="a2a11227-f0d8-4d91-b48e-befdc9b50b9e" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ef1fa1e2-967c-40a6-94f9-d63cf10214f9" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="1a65ff72-3d41-4f5b-bbcb-a1f60b4b6a93" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="eab6ba68-d8c7-49c5-b085-5bdffcefd303" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="379489b6-0f4e-471e-95e8-1e2e10107271" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="9905dc07-36fd-48b4-9c03-3be786408a7b" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="cc43dcd7-0914-4cba-8fd9-e8b3987c826b" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="fdc4e2cf-0a86-425e-a936-e1a817ec59cd" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="2b00f40d-be22-446d-958b-9ea81d17345f" data-file-name="components/products.tsx">
                  <div data-unique-id="6e6a85e9-0330-487b-8cd0-b8d8f2873bb7" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="ed41772e-1381-4c51-a2ea-fe42e46b265d" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="501157e3-38be-4e14-b828-5b199e55d1f5" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="2ce93825-a0c5-4ae4-81ff-03dd294649f8" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="bd76dde8-6505-4692-ab90-ececcc989bf8" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="4fdbcac9-0354-4001-ba40-8c4d3e338b13" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="5e9b5ed5-0137-4ec9-a370-4c27395a4131" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="0023833b-90c5-4cc3-8bc5-935c872c10cc" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="ec42d5f1-2bf8-4c59-82b0-2bd087f93468" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="31d1bcd3-52b6-4e1b-8bcb-c05ce9105a82" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="42ef9177-0613-4116-ba95-1f9c67aa1281" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="7aad178e-bb0d-49b2-9ba3-02a6e76e7bff" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="0ee529c2-a330-4ce4-af9f-d9bb25b3fac3" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="acccac11-54cd-4e7b-a149-739f240289bf" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="ecc76e64-3927-4251-a4bf-30eb48087c0d" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="7fa70219-2930-40a2-85cf-295864207321" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="c1fffc17-d549-493e-b29a-85135b76a159" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="a2b997d7-71e2-4e14-acf9-4ea9477f017e" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="f62a5b68-f97f-45c9-8f62-34f0f087bff7" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="ab55d536-8c53-45ec-a3ec-e1921f2c73c5" data-file-name="components/products.tsx" data-dynamic-text="true">
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