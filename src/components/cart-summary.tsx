'use client';

import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Package, ShoppingCart } from 'lucide-react';
import { CartItem } from '@/types';
interface CartSummaryProps {
  cartItems: CartItem[];
}
export function CartSummary({
  cartItems
}: CartSummaryProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.costPrice * item.quantity, 0);
  const totalSell = cartItems.reduce((sum, item) => sum + item.sellPrice * item.quantity, 0);
  const totalProfit = cartItems.reduce((sum, item) => sum + item.profit * item.quantity, 0);
  if (cartItems.length === 0) {
    return <div className="glass-effect rounded-2xl p-8 text-center">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2"><span className="editable-text">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground"><span className="editable-text">
          Tambahkan produk untuk mulai transaksi
        </span></p>
      </div>;
  }
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="space-y-6">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">{cartItems.length}</p>
            <p className="text-sm text-blue-700"><span className="editable-text">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">{totalItems}</p>
            <p className="text-sm text-purple-700"><span className="editable-text">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground font-medium"><span className="editable-text">Total Modal</span></span>
            <span className="font-semibold text-lg"><span className="editable-text">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-muted-foreground font-medium"><span className="editable-text">Total Penjualan</span></span>
            <span className="font-semibold text-lg"><span className="editable-text">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border">
            <span className="font-semibold flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl"><span className="editable-text">
              Rp </span>{totalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6">
        <h4 className="font-semibold mb-4 text-lg"><span className="editable-text">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground"><span className="editable-text">Margin Keuntungan:</span></span>
            <span className="font-medium">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground"><span className="editable-text">ROI (Return on Investment):</span></span>
            <span className="font-medium">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground"><span className="editable-text">Rata-rata Laba per Item:</span></span>
            <span className="font-medium"><span className="editable-text">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}