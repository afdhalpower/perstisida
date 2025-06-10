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
    return <div className="p-4 lg:p-8" data-unique-id="4224e164-8ab3-4b3a-a466-5813db2a5ed4" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="f889e83d-cd32-4977-887e-15927c69638e" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="ec5a9335-750d-4aa2-88a7-5ed80ea2bc6d" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="b591b60a-8516-44dc-81d9-4e3cdfe9bc05" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="e35fb49a-d028-4374-af09-8c1ad75837e9" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="a5f7b869-9810-4032-9c0c-0b71003b8039" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="d908de6e-0532-4e25-9e05-899fe5aaf3f2" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="a2fdaf2d-d724-44e1-b80a-ea51968a662c" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="8cefe11f-caa1-4516-8528-39a36da27063" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="4e4b4472-677c-4964-9390-ed62cb011740" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="8299f74e-dca4-4521-8ac3-4b3547b972d2" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="068d8272-4aa0-4891-ae72-f9fed05bba83" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="f2f0e7e7-fc84-4d62-8b9b-e14c7f5ff464" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="1389653f-0dbc-47fc-805b-5bf3772ac3eb" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="61d86b2d-834e-4689-8add-5720dce3907a" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="0005d39d-3e81-46f3-8b6a-d39f3305fe15" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="b2635437-b3fb-4233-ab85-9946eaa28d6d" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="881f18f4-9583-482e-9e0e-c854c592f8b0" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="67a9e15e-897c-4332-b80c-4864df8ec4ad" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="fa4132e1-de6e-4887-98ba-c2f8b359df98" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="a025baaa-8002-4c02-a6f8-2741db3f3580" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="5e934d97-e682-429f-a072-107f9073b721" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="ccdfedc4-6977-4c6c-ab42-e5f613139624" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="093bb11e-fa54-4ac2-b2c4-950b7d83965f" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="feb31698-d991-46da-8a6f-10695f725668" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="56c56db0-a40d-40ec-b18d-9aa850ad49f7" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="d4d32b6a-b4d9-4ab2-abe5-e3769e3face5" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="b1113cc0-1ebd-4121-906e-f85b7e6ca974" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="7b130d13-c671-4176-aab1-7684ef0f9037" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="a6f64c83-8a52-4f7e-b04d-915003ca942f" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="700796a4-7a29-41f3-9ac3-9c7ae5ff0caa" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="c6e5517d-38e4-4655-a0b0-75ee0ae0d488" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="c65d0d46-eb78-466a-ac08-dd26d60f1822" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="44b9a535-0a8a-4f9e-9737-c1f71ca99405" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="0899d453-3cc7-495f-89ad-c65359592cd2" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="8017945a-0799-4c44-8748-d5630561b05b" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="df17f0f8-9b75-4b25-8b6d-fa4770ccd9d3" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="b2df4062-e11a-47d1-bf7f-c1c26cd859ef" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="9d0bc680-4ed4-414d-bf70-134574575115" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="a473c9c5-d17f-4b2b-96ff-ebd6882b5852" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="0316e299-feab-4da9-b536-095a010042b7" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="2ac4b4d7-9c4b-424b-9d52-b253ba71d648" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="694129ed-0f86-4f8d-88b3-d14985deec3a" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="bcc4dcea-1135-47e0-8827-335f63b4569d" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="2ccee087-7f4a-4f59-b341-ec3d58f8c31b" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="45c46d9d-2bde-402d-9f42-27ccf13f2ef6" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="b77d3c8c-806a-427e-a165-42bf267af504" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="936e1fbf-2bdb-41e5-8893-7b62efd6b161" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6c243053-d610-4310-af21-3a107264dae7" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="6aee8ae5-5cf0-4db2-90f0-696fe1dddf2c" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="f9017df7-368b-4a44-a60e-76e1ebdfbb18" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="ac59fdd1-9323-42dd-8478-278fcacc1784" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="e6bc2ccf-8582-450c-a263-2dbfe910b6c3" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="a3bca1bb-eec1-459b-9aa0-3984de076ca4" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="11cb26e5-63bd-4743-8db5-4848d4df8176" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="9f1b0c55-1e99-4d2e-8782-9bb072ca9014" data-file-name="components/products.tsx">
                  <div data-unique-id="d389e010-ff6b-4acd-8920-bd267ff51973" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="8706c58a-e4a2-470f-b978-fedb00db29ff" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="87f5285f-bdc9-4956-9ed4-609b4fa83194" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="2a02529e-315b-4186-8729-f84330e22bdf" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="2d0ad212-3e95-477f-b21e-ec320f389813" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="ebb93254-c3c4-475a-a577-46afd0470ce5" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="21a786a4-1590-4b4e-ba3e-f1798b2c33e0" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="474af409-6973-49ba-a0e3-dce25b4f8542" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="383fd6b5-52c0-490c-8ec8-e9c27478662f" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="f3921176-cc9a-4345-9a5f-a85cab907042" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="92140d1a-cdfe-4d46-8386-8d9648fb1054" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="6ce7e8b1-2e5e-4a40-979a-dcd760af5156" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="5ea651a5-b25f-4a82-b32c-7303fedda07b" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="32fcf882-2ca8-4728-ab80-c947dc4f0740" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="2eb813c7-9bf9-4ca6-a341-31766a4bf098" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="11469f8c-bfab-46b9-89fb-045fbe3a02b0" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="8bd3336b-2e9a-42e3-bcd7-3f13d0959361" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="cf111ea3-323b-40f3-b6fd-7b6ebe39f7e1" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="0513609d-6451-439f-9f2b-e6923f8c10d9" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="a86f68dd-244d-4b82-8020-63d084559b11" data-file-name="components/products.tsx" data-dynamic-text="true">
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