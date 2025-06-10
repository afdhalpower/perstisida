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
    return <div className="p-4 lg:p-8" data-unique-id="6c0c882b-be7e-469b-a98c-5e72fa6b6d15" data-file-name="components/products.tsx">
        <div className="animate-pulse space-y-6" data-unique-id="9709e1a8-12f5-4d97-9f8c-3ff2e03704e0" data-file-name="components/products.tsx">
          <div className="h-8 bg-muted rounded w-1/3" data-unique-id="b4d81643-f6c0-4ebd-9fb5-230959d82dbe" data-file-name="components/products.tsx"></div>
          <div className="h-12 bg-muted rounded" data-unique-id="8eee88e3-c100-4460-9bd0-d94d4656a791" data-file-name="components/products.tsx"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="e311a8af-d3d3-4bd3-a0af-f1cd1c6fea9b" data-file-name="components/products.tsx" data-dynamic-text="true">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-32 bg-muted rounded-2xl" data-unique-id="948e002b-82ef-4db3-bdf0-303c9c01edc6" data-file-name="components/products.tsx"></div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="p-4 lg:p-8" data-unique-id="c9b97666-271c-4318-9c6f-84a159e9b923" data-file-name="components/products.tsx" data-dynamic-text="true">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="8405f8bc-723a-4421-9a63-d2aa8b9f1f0a" data-file-name="components/products.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="20ea5ac6-af9c-4602-bcf8-fa3dd7892ae5" data-file-name="components/products.tsx">
          <div className="flex items-center gap-3" data-unique-id="66edd391-609d-485d-8db1-be9eed5ceb47" data-file-name="components/products.tsx">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="ab48d117-878d-4da8-b087-7ad4f086b7d8" data-file-name="components/products.tsx">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="49fbfea9-6d46-4aee-8d10-a82320737e18" data-file-name="components/products.tsx">
              <h1 className="text-3xl font-bold" data-unique-id="f4fe0217-ffdd-4849-bd81-6980b247cdd6" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="e2d417d9-00a3-4414-a192-4701f8802364" data-file-name="components/products.tsx">Daftar Produk</span></h1>
              <p className="text-muted-foreground" data-unique-id="5af441a6-5429-4577-92d7-47609cdc0efe" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="8b6f932b-2411-4d14-8354-68ea2e653198" data-file-name="components/products.tsx">Kelola produk pestisida Anda</span></p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setShowForm(true)} className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300" data-unique-id="9c18e8ae-47d1-4af6-ab3a-e0c9818cff54" data-file-name="components/products.tsx">
            <Plus className="w-5 h-5" /><span className="editable-text" data-unique-id="2eae5237-a05d-4237-ae57-30d0d85f489e" data-file-name="components/products.tsx">
            Tambah Produk
          </span></motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6" data-unique-id="cf2f2571-f18f-4042-a8fa-55a2c3f8aeb4" data-file-name="components/products.tsx">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Cari produk atau perusahaan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" data-unique-id="0e053b74-7a90-42e8-91ab-bb46e2d6fa36" data-file-name="components/products.tsx" />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-unique-id="93ec2ce8-f036-4c17-a6b0-b4b8c22163fc" data-file-name="components/products.tsx">
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
        }} className="glass-effect rounded-2xl p-6 hover-lift group" data-unique-id="5d3bf6f9-acf6-4934-bc71-bb810cf1a0b2" data-file-name="components/products.tsx">
              <div className="flex items-start justify-between mb-4" data-unique-id="ca798c0e-8d32-4667-9ebe-8f34312f0e69" data-file-name="components/products.tsx">
                <div className="flex-1" data-unique-id="f0ef3782-9640-45ab-8c0d-291309320e25" data-file-name="components/products.tsx">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" data-unique-id="78cb5f54-f621-4c42-8466-e6f5538944b6" data-file-name="components/products.tsx" data-dynamic-text="true">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3" data-unique-id="48513e9c-7f29-4f56-a40d-6acf72533b80" data-file-name="components/products.tsx">
                    <Building className="w-4 h-4" data-unique-id="401b25d6-5a02-4eec-9461-21ab74a83d9f" data-file-name="components/products.tsx" data-dynamic-text="true" />
                    <span className="text-sm" data-unique-id="a901bb02-4175-4345-9bb8-08f2fa2005c2" data-file-name="components/products.tsx" data-dynamic-text="true">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2" data-unique-id="bbf03645-0e68-4371-b93b-9e62362daaf2" data-file-name="components/products.tsx">
                  <button onClick={() => handleEdit(product)} className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" data-unique-id="7e3e966d-59a3-4903-8343-8af91613734b" data-file-name="components/products.tsx">
                    <Edit3 className="w-4 h-4" data-unique-id="669423c4-87db-4f08-98e7-b15629114b0f" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="561ffd48-ee03-491a-9257-788308820902" data-file-name="components/products.tsx">
                    <Trash2 className="w-4 h-4" data-unique-id="0ebafd08-a3ee-4b38-b011-c81d8a236db0" data-file-name="components/products.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3" data-unique-id="ae6c7867-a39b-4ae3-bcd2-0f30ffd9dd93" data-file-name="components/products.tsx">
                <div className="flex items-center justify-between" data-unique-id="a678d9da-7510-465b-8f0b-672062ad8fda" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="8cab1f75-1775-4073-848e-ae5579ef2b67" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="448ab81c-251b-4b09-8776-f1e46906ec67" data-file-name="components/products.tsx">Harga Modal</span></span>
                  <span className="font-semibold" data-unique-id="41c69e16-62d3-4eab-9a8e-9a44f386c49c" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="bd33a8c0-959d-44c3-a362-b44064372af1" data-file-name="components/products.tsx">Rp </span>{product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between" data-unique-id="dfd91c39-a9db-4dec-8dbf-27e0c6e77dc3" data-file-name="components/products.tsx">
                  <span className="text-sm text-muted-foreground" data-unique-id="46922864-941f-427f-bc7a-3f8095b5424b" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="c051a5c8-6bfa-41ca-87d6-651cbec83898" data-file-name="components/products.tsx">Harga Jual</span></span>
                  <span className="font-semibold text-green-600" data-unique-id="9b0f2da1-35fc-4dca-a342-49063179a199" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="27374cde-1856-4180-b55d-52d5e8414b39" data-file-name="components/products.tsx">Rp </span>{product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border" data-unique-id="f4e08ed3-2bbb-418c-87ef-ec2d012156af" data-file-name="components/products.tsx">
                  <span className="text-sm font-medium text-muted-foreground" data-unique-id="366c8294-0422-41c0-92b9-ad5ca47ee3b7" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="819411de-8094-4f9e-a141-bba954d2f92f" data-file-name="components/products.tsx">Keuntungan</span></span>
                  <span className="font-bold text-emerald-600" data-unique-id="f89f80ba-9c68-4a7b-862a-a45da898bbfe" data-file-name="components/products.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e906949a-0f5c-49b1-882b-610d1f92c3c5" data-file-name="components/products.tsx">
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
    }} className="text-center py-12" data-unique-id="46ce127d-43b8-4184-880f-35f38571692c" data-file-name="components/products.tsx">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="98772559-60e8-4a82-8a6c-b4fa2e162583" data-file-name="components/products.tsx" data-dynamic-text="true">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground" data-unique-id="6cee9ac4-2c6b-41e1-bd69-6ff2cba5fc4d" data-file-name="components/products.tsx" data-dynamic-text="true">
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
        }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" data-unique-id="dd1c42c8-2d70-4ba8-aae1-02415800adb3" data-file-name="components/products.tsx">
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} onClick={e => e.stopPropagation()} className="w-full max-w-md glass-effect rounded-2xl p-6" data-unique-id="d3db6de0-b14c-44f7-8910-031b09797f60" data-file-name="components/products.tsx">
                <h2 className="text-2xl font-bold mb-6" data-unique-id="3f3a4393-ee5c-40e0-920a-dbf17895d0ff" data-file-name="components/products.tsx" data-dynamic-text="true">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4" data-unique-id="d529ab3c-d1e7-418e-ad99-a9021c7dc008" data-file-name="components/products.tsx">
                  <div data-unique-id="d95c64fe-8391-4714-9626-fa4af142d6f4" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="5cbb7c27-3478-4d57-842c-acf11320cb98" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="42fde2c8-cbda-4171-b48e-447059f119cb" data-file-name="components/products.tsx">Nama Produk</span></label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama produk" data-unique-id="14a8644a-e0e7-4e52-9752-74e130a3710d" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="35ecc854-4c01-4fb0-8e4a-b8db2b526346" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="8b4e713e-cd10-4d98-a550-6af2249b5ef0" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="b663a7d4-7552-4dbc-a18d-590d4b52a9c3" data-file-name="components/products.tsx">Perusahaan</span></label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="Masukkan nama perusahaan" data-unique-id="11cb34c6-75ba-4ba3-bf29-5244f794646b" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="14709a95-7289-4b7e-be57-9f242730ff3a" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="ea30b263-c2c0-4f35-9eb0-cacec71bb867" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="4bf18713-714f-4988-8fce-c96165a7fc13" data-file-name="components/products.tsx">Harga Modal</span></label>
                    <input type="number" required min="0" value={formData.costPrice || ''} onChange={e => setFormData({
                  ...formData,
                  costPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="6208c89a-1abe-44d3-9373-95e7140f9704" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div data-unique-id="d51cf2fc-ab8d-4ab7-bee8-7ab561828d98" data-file-name="components/products.tsx">
                    <label className="block text-sm font-medium mb-2" data-unique-id="c15b5ce1-cac9-45d6-b352-60fb4d59d1c8" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="bc74e774-98c4-44a7-a819-1bf6cb9bb72c" data-file-name="components/products.tsx">Harga Jual</span></label>
                    <input type="number" required min="0" value={formData.sellPrice || ''} onChange={e => setFormData({
                  ...formData,
                  sellPrice: Number(e.target.value)
                })} className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300" placeholder="0" data-unique-id="d57f3756-4d62-4fbc-83a1-85cdfd85b65e" data-file-name="components/products.tsx" />
                  </div>
                  
                  <div className="flex gap-3 pt-4" data-unique-id="153dff55-f5a6-490d-abd5-d9f4f78ed1d7" data-file-name="components/products.tsx">
                    <button type="button" onClick={() => {
                  setShowForm(false);
                  setEditingProduct(null);
                  setFormData({
                    name: '',
                    company: '',
                    costPrice: 0,
                    sellPrice: 0
                  });
                }} className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300" data-unique-id="701efe41-f24c-49f2-bc1b-e836be26246e" data-file-name="components/products.tsx"><span className="editable-text" data-unique-id="4929a52e-2f87-4bda-b64a-e03d9dffe643" data-file-name="components/products.tsx">
                      Batal
                    </span></button>
                    <button type="submit" className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300" data-unique-id="8f00607d-976e-4bfc-8c77-a84a920cc78a" data-file-name="components/products.tsx" data-dynamic-text="true">
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