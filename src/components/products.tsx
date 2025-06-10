'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Package, 
  Edit3, 
  Trash2, 
  Search,
  Building,
  DollarSign
} from 'lucide-react';
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
    sellPrice: 0,
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
      
      setFormData({ name: '', company: '', costPrice: 0, sellPrice: 0 });
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
      sellPrice: product.sellPrice,
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

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-4 lg:p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-32 bg-muted rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Daftar Produk</h1>
              <p className="text-muted-foreground">Kelola produk pestisida Anda</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(true)}
            className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            Tambah Produk
          </motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari produk atau perusahaan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
          />
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnimatePresence>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{product.company}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Harga Modal</span>
                  <span className="font-semibold">Rp {product.costPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Harga Jual</span>
                  <span className="font-semibold text-green-600">Rp {product.sellPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-sm font-medium text-muted-foreground">Keuntungan</span>
                  <span className="font-bold text-emerald-600">
                    Rp {(product.sellPrice - product.costPrice).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-muted-foreground mb-2">
            {searchTerm ? 'Produk tidak ditemukan' : 'Belum ada produk'}
          </h3>
          <p className="text-muted-foreground">
            {searchTerm ? 'Coba ubah kata kunci pencarian' : 'Tambahkan produk pertama Anda'}
          </p>
        </motion.div>
      )}

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowForm(false);
                setEditingProduct(null);
                setFormData({ name: '', company: '', costPrice: 0, sellPrice: 0 });
              }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md glass-effect rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold mb-6">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Produk</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                      placeholder="Masukkan nama produk"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Perusahaan</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                      placeholder="Masukkan nama perusahaan"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Harga Modal</label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.costPrice || ''}
                      onChange={(e) => setFormData({ ...formData, costPrice: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                      placeholder="0"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Harga Jual</label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.sellPrice || ''}
                      onChange={(e) => setFormData({ ...formData, sellPrice: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl glass-effect border border-border focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                      placeholder="0"
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingProduct(null);
                        setFormData({ name: '', company: '', costPrice: 0, sellPrice: 0 });
                      }}
                      className="flex-1 px-4 py-3 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-all duration-300"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="flex-1 gradient-primary text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      {editingProduct ? 'Update' : 'Simpan'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
