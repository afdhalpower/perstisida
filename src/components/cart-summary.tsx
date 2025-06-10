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
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="1da1d44d-624f-4b12-8bb4-2b9e15582c4b" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="44a3bac2-9004-4f6c-9d48-329db660e00c" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="e6e4ea50-166c-4332-b77d-bafc42aaa0c8" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="004a64d2-a935-4192-854b-c792c4c5e209" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="f277f19f-2cf3-4b17-bb79-716990198194" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="93c40925-6c2f-4b81-81b7-4221f0af69d1" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="bd2eed72-daea-4167-864a-b45097019447" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="7786c0c9-4c84-4116-ba8b-573cb053c204" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="c2f4c6c0-972b-49ea-8f34-bf6488090346" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="a8fccde5-f6d1-4f3a-8cd8-87de0ab37cb7" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="f89b888a-397c-47cb-9632-90efe8ace103" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="8cfcbe50-9290-4b5c-85f4-82dd7cf318dd" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="1342b912-f52e-4aca-963e-508762d35fca" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="149efb3c-9cf7-49b5-899d-904333cba8fa" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="f0e42b08-2352-423a-bb8d-8cde61f76cd5" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="5ab38f5f-cb76-4d74-b285-3fea889d34d6" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="80012a1c-f4ca-4998-9ac8-05bd129e33ea" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="80d5c5b3-3ef0-469f-a2be-9b47f1719b24" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="2086e2f0-5b4d-4841-b991-70366bbff226" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="5e7a2ea6-8b9e-4c68-b8fa-1b76d605e2be" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="73d6d148-a24e-40eb-a107-aa6677491ece" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="1cf34799-75cf-4356-b102-4322684d88fb" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between items-center py-2" data-unique-id="899c31e5-b52e-48dd-a0c1-311c95ce2fe4" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="24e1ad79-2f95-4fe3-84e2-f9f3b170fba3" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="5bdde7c6-833b-4578-999b-e54e8ff88fc3" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="afb28b34-2ce4-4b9d-a8f8-dcb3fca14dde" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="4c418d85-8228-426d-9d64-55f40754414b" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="84a96728-596d-44dd-98a6-322d1d4f6248" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="7f202002-7b8c-4427-8824-94e0bfe8828f" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="7bae8797-9319-46d4-b719-c76eb4b2cc73" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-lg" data-unique-id="b764c238-1db7-498a-9904-d4545fd2091c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="df7858ed-ff3e-4e6b-9adf-82d9fd2f89e7" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="b8d326c2-1df2-429b-a3ef-3ef6af1e5bd8" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="fa64c671-949a-4ee2-b3de-96b7dddb72b2" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="ac2e2718-1679-40ef-9b0b-fb7b113f59ee" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="5bf8b0dd-5b56-40d6-9e8d-c53a329acc86" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="574b2f33-f856-42aa-8762-434e319b8309" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="7c6644c8-04be-49cf-aaa9-58929f4e0d91" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="7ccf22f6-ea3f-42cb-9a8c-c9679ae19d41" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="758ebe13-3530-4213-b2b6-c8e3903f16e3" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="e4b2fee9-93cc-4d19-ba7b-addcc5aa04d1" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="d5c98e5f-242b-4821-9477-d6069bb5febc" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="44aea7be-b234-4540-a38c-9e0016b92e7d" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="23bcc1c8-23fb-4ac0-841b-9bce352e624d" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="0ea00c1e-ebd5-4a20-b4bf-cbb21d3c3d64" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="bd3fb502-326f-4f86-844d-49720874f6bb" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="1c45ddfb-cf01-48d4-8940-3cbb665ddee9" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="0d82dc22-ede8-454e-b969-c9caa64e0d57" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="450c5a9b-b69b-4a7c-b237-7bc33648a256" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="b1fb2eb3-6af4-4fdd-b90d-ccd65fcf22bf" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="f84fc400-12ff-4d4b-9b7b-563b2731fb0a" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="09088363-cbc1-455b-a45f-6e87f0242eb3" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="b0838efc-def2-4698-a65c-e8e926faec48" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ccec736a-f213-4fe3-8aa9-64f1910ad3f8" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}