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
    return <div className="p-4 lg:p-8" data-unique-id="9d8ae4c3-05b4-45f8-8175-6c3cb247774e" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="383f8977-bf6a-4872-9bb3-41bb6da61fc5" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="6f21b0ca-543c-43b4-be89-c9beeb9e9893" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="5ed12b65-fede-429f-bdbe-c99d4fe7c55b" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="620014a5-3d54-47f3-95db-d7c24927bdce" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="f76d012c-128f-4b19-888d-c753dda37afa" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="cc70afd0-b22c-4873-ad91-9fd90a693e74" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="37221fb7-2201-4c19-99f9-3175d456e9a4" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="3aa1ad22-f9d1-4d34-ab38-91db6a5ce16d" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="a04912f9-8cf7-4cbc-830d-a4d16c87f33f" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="d42fa21e-8eee-4882-9c44-9b183fbda57b" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="fa00ca6f-4d5b-4176-8898-e5aadd7731b4" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="882b5bd1-1d6e-4bc9-a6e3-213dd60b294b" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="50214043-e1a9-422e-b1ed-530baf8c94a0" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="822eee3c-d1b6-490f-a453-c7547e53e5a3" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="4919deb1-db28-43a5-af25-aab5b5d4c844" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="c4443853-dce8-465d-9f9a-1d4194d750e4" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="1815768c-e95e-4f0b-9a79-87ca61dfff2b" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="8b168ead-0386-44a3-a8a0-0ddaa16b16a9" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="1adbc624-6d32-42c7-99db-46b098a29794" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="d2b2608f-8043-45ad-8531-8d865ec5f3c6" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="2a829b39-7c12-4bb1-99ed-b06b47557337" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="fed7c956-637e-493f-95d1-3cc424ac0d5d" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="42c11b78-9fff-4f09-be5b-092ad249f661" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="02c12e37-69eb-4a04-9186-26e9992bc162" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="9773b1c9-59db-4815-996f-37bfa4ae0705" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="14e76246-a02a-4869-86cf-8522f9f5845d" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="9eefdf15-ff3d-41d7-982e-7997cb6457d8" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="2d897f9e-56d2-40aa-bf78-c001324ada78" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="eca39759-be02-49c2-83cf-228165595365" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="6d1a39d7-bd46-4ab0-a3f5-38d2afab0201" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="79792298-5748-4daf-b87a-adabf66fd898" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="7e1a07ba-abcc-4cf9-90fc-b78ce8d4d77f" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="da08cc08-238c-4573-b615-29f2ffdabab8" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="1d1e3c6e-31f3-4128-8e2c-1bd0a24e5168" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="cb1de9d3-18c2-4b42-9f16-5da4f7f9f5b8" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="680f58ed-e81b-4abe-8f5a-57a8d2781419" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="833e724e-5e4d-4793-9e89-3800fd6b0b1c" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="bb0d4a98-a3eb-4f64-9d47-bcce581dccb2" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="2ff56b5e-9ce5-4f41-abcb-8b3c70aefba7" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="3bb6b1d1-2bad-4867-aeee-1ae229fa44d1" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="794c937d-eed8-46e8-8ff4-bd60716bd244" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="37b84a92-42a8-45e2-99fa-8e2c14d67f3e" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d4c7a30b-691a-45b1-a34b-f21e95f8218b" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="da286357-d752-4263-813d-49a8d52d8407" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="dfce8738-468b-4300-a1d7-e4eebe1639cf" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="2cdf91e0-b53a-449d-b007-08374d0a556c" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="e284e9ae-813c-4e88-9475-8b363eb5a0d4" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2d7a617c-f759-40d6-af22-57eb29471b73" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="e10cace4-a71e-4782-ba93-517b92f61441" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="9e74c66f-ab30-4236-adfd-557214eb97e7" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="8584eecc-d10b-4ad7-b8eb-34d55f6f851b" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="a0c95a72-5585-44e2-b1fc-6655a55e86e8" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="b242e717-aacb-4573-ade5-9d634a5402db" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="cafe5cae-db5f-4c21-a00e-13c9dc3a33c4" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="a6ecfef1-e98b-4b4f-ae46-f4ae92b0d2ba" data-file-name="components/products.tsx">
                  <div data-unique-id="49528a18-0c85-4580-b36f-b698235b392b" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="ba53a84a-80c2-4c22-8dc6-9e2c97858618" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="788a27d7-7837-4a54-8faa-9306a6db5cf4" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="b02ce1b6-b884-453f-a961-c9d646095e77" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="a6ee68e5-0d2a-4d47-b8dd-408339a7450b" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="57bf3f11-9d18-4ea8-bd7c-a2eb3918f4d3" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="4575bf4f-b2f0-4bf5-93a5-930bb2038876" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="2d31872a-77c3-4fa6-99a5-02339d5344bd" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="1ae25f5a-b2bf-4d2d-a2e7-8c0286c9f35c" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="b41e9dfc-9313-495d-a9f9-457cb3ce44f3" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="466af194-3e92-4feb-bdb9-25d1d814555a" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="8c557dba-62d2-4b46-b875-05a94a14081e" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="596e11a1-5fc4-4e93-a93d-c200d26eeddf" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="ccc04745-c0ab-4a31-b4b2-284845ced7c0" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="6ca8cb9e-2053-490e-8d4c-9dc258054878" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="137ff2b1-b8b2-4485-b5fb-8db578750eb0" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="f9e0b38f-83e5-49a3-a154-15d09452d4fd" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="609799c8-0209-4cdc-b0c6-2e580cd35beb" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="00f671f2-34a0-421e-beff-c2de7ae6236c" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="ae23912e-d6c8-484c-840f-971caea0833a" data-file-name="components/products.tsx" data-dynamic-text="true">
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