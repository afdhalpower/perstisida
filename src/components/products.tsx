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
    return <div className="p-4 lg:p-8" data-unique-id="b3874d42-08cb-47fa-97c6-c6c66793d7db" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="f82e0f17-809e-405f-a152-82086feb1a27" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="df1456e3-8e9d-4499-9e4c-8bcfcc14b105" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="4e736ffb-e403-4739-9df4-3fa16914d16b" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="901f3dae-0861-4693-8ee1-0365545499e3" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="08cd65ec-8772-4338-a71d-3d1e011893f4" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="db36039e-cfe9-47bc-9e03-fe7ece5d639f" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="a484e1ec-b317-4b51-8537-5e6dc34c475d" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="26608b7f-146d-48c2-b416-80df04f16548" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="1d42b123-2ed8-4e52-a5fc-04cb362b002a" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="6b7581b3-d0e4-4890-99a6-30f226e36ed9" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="953fbcf1-2c8d-45d6-ade5-378139da9d05" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="a4b70324-a26f-421f-920e-1ca792e94755" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="7b9735e8-1acf-48ab-8eb4-9409665b5369" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="84bed395-7260-491d-b8a3-47355fc168f0" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="e9c75a1e-eb42-4d10-94bc-b248d8a59c04" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="446c224a-8127-4987-9007-b714b5b8d46c" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="3c639abf-148c-4cbb-866a-9f224917469a" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="775b23f2-4cb8-4d46-a58e-3abf59f269bd" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="76b02e50-23d6-4861-9cb4-26b69c619ac9" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="e40e12aa-62b6-4887-b3cc-312a06e54083" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="2019cf59-a6a2-4229-93ef-faa1005969be" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="337dcb4c-1f9f-4e65-ad1f-6457352061b4" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="40515001-be05-4eaa-8a1d-2fd064a5599c" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="e2aecc8c-a807-47f2-b21b-c48dd39fbba2" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="150e5c57-67a5-4735-9e67-478b8f975b47" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="b1f602b2-aaf9-441d-80d2-6294e59bc4d6" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="11af5ef2-97b6-4d78-9b2a-7e6b90fbce1b" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="13e38687-e9d1-4b27-b60e-4c242cc4a64c" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="7b71e664-fc3b-4d96-86ce-9ba9d04fdd66" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="39adac6c-ce3c-4d3e-a943-7578a4bbc209" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="e714e0cd-6d0c-462b-97fa-c9d8f9b04360" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="2a052d28-2571-487a-b55f-2c2666cf20c7" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="1b795422-26e8-4231-a2db-301021c9e955" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="1d93b7e6-4fca-457f-8517-8bad13fa1bf9" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="052613e1-064e-49d3-ba4a-63f3540872a5" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="bd90fd22-7bfb-4240-84d8-2d212f5f6236" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="59f56e03-c3cb-405a-a9b9-9127d691cc13" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5b1bd090-59d4-48b0-958a-86350f119c65" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="fea7c80b-1f2f-4e52-8c75-1e1f77850377" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="88123833-c4ef-492e-b4f1-741d8fef4ef7" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="df69591a-797e-4132-970d-dab30e89ed86" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="2c4a0916-db19-4328-b35b-bf5defdefcad" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5fae7a27-7536-4532-b273-b7c321e37162" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="4cd8a3e4-e385-43ae-9068-42f5b03ed892" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="a688831a-34c8-4b31-8dd8-29e77b5a4f12" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="05f6d2df-c52c-4a6e-9cc9-e1ea45074e7c" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="1bfd7e9b-60de-4f52-baf1-9dd031eb6a01" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="93b39c1c-48d8-4fde-a847-703dedad42dc" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="58e122a3-363a-4d90-a0eb-ac40f2586720" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="c2a88019-7e5b-4034-88b3-52766d44996f" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="04c457d4-b199-4207-a657-6d135c6428d5" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="76227296-0649-4374-8922-7733030ee5f9" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="2b9d084e-b4f7-4559-8573-31e82eb2b643" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="51c96704-799a-4ddb-baa0-51bb27f86738" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="bcef2f5a-824d-46c0-bb2d-a268dec512a9" data-file-name="components/products.tsx">
                  <div data-unique-id="a6fde638-36bf-4bdc-8bcc-7f356d371c75" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="665bf688-85ed-405d-9c4a-0663bd13848a" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="4d68849d-5b43-42ec-8951-1308158b6d1e" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="e273c716-6cff-4a0b-b761-d6375679d189" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="a21f00e1-eaff-4c53-89e8-74f5515501b0" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="e9348871-867e-4ea5-b159-40750b747f5b" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="32e3b8b3-4725-4476-91bb-d474aaac0e38" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="bcef876e-372c-457b-8df9-e2efc6885961" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="c411b343-c82f-4afb-a2f1-23d0a8784410" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="d8eca12b-c1b7-4d72-a754-7cd58c6de7f4" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="1e71af5b-c3dd-46cc-8e5d-22c59f4aadb6" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="eec37636-6c8d-411f-aa52-a20eaf2e13c1" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="84d6110b-1ffa-4f94-b8f6-534a1e3c1349" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="0c2c4dce-8cf3-46ce-ae36-c33fcf97bd8e" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="2b7215e6-703a-43b8-8aeb-ae182cbc6560" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="d64dcfc0-8636-4a01-acac-3ec6cf4a568b" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="5191981f-b439-449c-ab86-ea13d3e0c964" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="b07966a3-dbef-418c-99ed-8cd1056cc654" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="3c3c307f-ac90-4138-9aa7-0445f955672a" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="136b420b-b3b1-43c3-b38b-b63fecb4a200" data-file-name="components/products.tsx" data-dynamic-text="true">
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