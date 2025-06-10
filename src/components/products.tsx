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
    return <div className="p-4 lg:p-8" data-unique-id="55a4844b-d3f0-42c5-b184-def2b21fe0c6" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="7f80bc98-3a01-4c92-92b6-913ac3f6935a" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="87a4e07f-5c01-4ace-af8c-f9a3dc5f989b" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="0feceff4-06fa-4c79-8e98-ea3916da849b" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="aeeefb7b-c829-4709-8768-9e5ad90cab2e" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="6fcad065-8237-4282-be63-d404253301b5" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="5af2f3ef-2cb7-4b84-bf9e-6437673c2805" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="9069c7e7-4eed-4db1-bb81-2d39d977bbf9" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="93fe476d-b623-461d-b912-58e1394a18f9" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="cdc24083-62c4-48a2-b874-04d21c531fcd" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="0381272f-ad80-4086-903d-fa8d24fce925" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="2d1d1c4a-0015-4331-8cb3-675ed7b460c4" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="ba380a8f-051c-45b8-b062-9a4e658e2ce3" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="65eb05f9-4174-4275-9f99-25adaf6cb18e" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="a6c938ce-3eb6-4b22-8ec6-e4e916915586" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="fc14e6aa-d571-4f0b-869e-03509a9e5732" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="c0056fc9-cd05-41f6-aeb6-7f98dcfa014f" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="498d25dd-ddaa-4e78-85f1-a77307375037" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="a77573c3-0dc9-4795-8a6d-2fb4e6918d56" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="1f6a551d-a29b-4113-968a-51b97d6acbcf" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="cb378115-4514-449e-9d31-41013b316ee8" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="27f91004-ff16-4096-a4ea-c04b4dc70c4c" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="22dbf091-602a-4ec9-9b83-64ac2025b7c3" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="56f54a5d-459d-4135-9461-7793d283260f" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="b638229b-3a04-4e50-8e13-6343a7514766" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="999faa8a-276a-4878-92da-7f4af9415dad" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="8ff96922-c7a9-4947-a9c6-42f968760191" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="8ab7ce71-9325-4dfb-8bc9-46c4462988f9" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="57b1d29f-bc5a-471d-99f0-f0ec543bfc5d" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="42dee19e-8b9f-4a19-b0ea-1b00832057b0" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="d3c2c900-9e63-4718-89b8-cc46e54fbe2c" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="8d63493c-f627-4383-970f-8aa3c3ef0ff1" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="5c6adaaa-8442-4d5d-9eee-6d11ecab95e7" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="03801ddf-c014-4f63-9dc7-bf85a0cb20d3" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="28ea801a-7cd5-42fe-aba6-78d60a8d1f73" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="8d74c92b-5990-46ad-b596-715a2433c7f7" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="53c7e022-a38f-4225-8fe3-1887d453bc86" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="20713864-800d-4b6b-8df6-a80b887b9db0" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="9ab53741-13a8-4488-9f38-d230d6d63ba5" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="814fafdd-1ecb-4fd7-a247-d8db4c5e2b31" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="5da8327d-6805-481c-a3bc-cf53afa70512" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="45ad3c0d-f45a-4dd3-8993-18d5ea6f3dda" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="e99f12dc-bb53-45ba-a3be-6621479cc1ec" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="db3fa37a-7541-40db-a21b-e9f811c54221" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="16b06385-462a-465e-b977-e8f2d035815e" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="313607cb-6fb2-489f-9386-e5f73312dc0c" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="c288d837-da03-4e49-971c-d7d0c8a09f02" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="df36073f-7f4b-444f-88c1-6d97997c1cad" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="31cb2309-d772-4e81-a88e-b3ed05e6a07f" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="5ab08671-03c0-47fb-9ed7-1bbeee1114f1" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="f263cfbe-67f1-4381-ac7b-9709a01236a2" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="f3a67faa-3bda-452e-a10b-837e922a36bf" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="19c0ad28-4489-42b1-adf8-b3ef71646731" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="43ab749a-db2c-4875-9e32-2a3d833e52d2" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="f0e16c5e-274c-4d03-ad1d-21876e7f60ff" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="90c2f476-522e-4376-b407-1a64351ee8e1" data-file-name="components/products.tsx">
                  <div data-unique-id="0ca727a9-6fff-46d0-94c1-8ecc76f03738" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="eef6b7fd-5db3-43e0-a8a5-af0966dc47c7" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="35d00fca-27b7-447e-a8c4-15cf1f6eba40" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="38383976-4338-4250-bd3b-058543946871" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="b0346605-94de-4f23-a920-8900d76ad788" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="de7b5952-5729-45b0-a622-3cb76dbce1ed" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="b936e6b7-6b4b-49dd-a183-545a75762bbd" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="39ef0c96-ca2d-43da-9cb5-540eb3908ce1" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="f36163fd-3abd-4de5-ac2a-3f7cef5ebbab" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="cca5cfa7-6255-4fcf-9f5d-4701dd587bd4" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="33ef75d3-fa37-4540-ad6f-56dd812e41d7" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="d46b12e7-1217-4343-91fb-2b94a7019c57" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="8359c73f-d209-43db-a611-89aeb600c2ce" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="15cec5c6-09a0-4e81-8fc2-8dc40c522595" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="9e37494d-6875-4d68-b8a0-4afbd1ad87cc" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="8ab1b79d-2259-4e9a-ad49-2de7bc238cc3" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="e2041b89-65cd-4b30-8278-f191d83995d7" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="30bd33fd-cf93-4541-8a59-2bb1804d1781" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="92b0f017-85ba-430f-92de-2e36bb7056df" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="c85b9201-d729-47b8-9fab-21e021edceee" data-file-name="components/products.tsx" data-dynamic-text="true">
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