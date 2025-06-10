'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Package, ShoppingCart, Percent, X } from 'lucide-react';
import { CartItem } from '@/types';
interface CartSummaryProps {
  cartItems: CartItem[];
  discount: number;
  discountError: string;
  onDiscountChange: (value: number) => void;
  onResetDiscount: () => void;
}
export function CartSummary({
  cartItems,
  discount,
  discountError,
  onDiscountChange,
  onResetDiscount
}: CartSummaryProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.costPrice * item.quantity, 0);
  const totalSell = cartItems.reduce((sum, item) => sum + item.sellPrice * item.quantity, 0);
  const totalProfit = cartItems.reduce((sum, item) => sum + item.profit * item.quantity, 0);

  // Calculate totals after discount
  const finalTotal = Math.max(0, totalSell - discount);
  const finalProfit = Math.max(0, totalProfit - discount);
  if (cartItems.length === 0) {
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="6e014acf-a67a-41f4-9221-403c79b2aa5a" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="80fca489-e931-46d7-ab0a-db5539145dce" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="51483902-f60b-4341-a8c3-95167f5fccdf" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="696b1583-9518-4293-8092-745d5598207c" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="aa6c60e2-77bf-4cc2-a572-fd6c5c369a1e" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="49b21a6b-26d8-42a2-94d2-4d2173a4f051" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="032da42b-b932-44f6-9059-1bc4b4071555" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="b0d85a38-e53b-4c6c-80e6-adec35a71df0" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="4c75f5a1-f92c-48aa-b2e7-c33ba8585b74" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="d7944a04-37db-4a1d-8073-b59d2f6c6f5c" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="e5eaf8f1-32bd-454d-8ab9-4a628e86ff23" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="9041d319-8d87-4c1a-a7b1-e7a57665b74c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="2f496ecb-ba8a-4d48-9247-b99bce85778f" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="d17729ac-14eb-41ba-82d9-b4fbdadb051c" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="7130b81f-2cdf-42fc-8bdf-269e886b45cb" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="f13b557c-10fa-49d9-a7b6-794ee6e8bbb7" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="459ef5fd-9dad-4df8-87f5-38ce2d8a41e0" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="b75ba104-1acb-459f-a308-55c92dec233f" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Discount Input */}
      {cartItems.length > 0 && <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="4b29a060-1098-42b1-b5ea-fe0b61a39f39" data-file-name="components/cart-summary.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="8d7ff294-37eb-4acb-bf5b-0d5fbcd51ab6" data-file-name="components/cart-summary.tsx">
            <Percent className="w-5 h-5 text-primary" />
            <span className="editable-text" data-unique-id="222b182e-3bbf-48ad-aea9-5094d394eb3a" data-file-name="components/cart-summary.tsx">Diskon</span>
          </h3>
          
          <div className="space-y-4" data-unique-id="029d9fd3-411f-4dfb-bd5a-ec03110f742e" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
            <div data-unique-id="2636e63c-2837-41ef-9ce6-40fbf4b510fc" data-file-name="components/cart-summary.tsx">
              <label className="block text-sm font-semibold mb-2 text-foreground" data-unique-id="87822a56-a229-440d-991a-105ebf0695ef" data-file-name="components/cart-summary.tsx">
                <span className="editable-text" data-unique-id="27957d69-7e97-4b1f-8c47-a3ecba084c50" data-file-name="components/cart-summary.tsx">Diskon (IDR)</span>
              </label>
              <div className="relative" data-unique-id="a4336073-f534-4214-83de-43b6f7cdf7ab" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <input type="number" min="0" step="1000" value={discount || ''} onChange={e => onDiscountChange(Number(e.target.value) || 0)} className={`w-full px-4 py-3 rounded-xl glass-effect border transition-all duration-300 text-base font-medium ${discountError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border focus:ring-2 focus:ring-ring focus:border-transparent'}`} placeholder="0" data-unique-id="59f0aebe-051d-4473-940a-5e88a94eebbf" data-file-name="components/cart-summary.tsx" />
                {discount > 0 && <button onClick={onResetDiscount} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="428537ce-fb35-4fdb-99c2-c7d477736990" data-file-name="components/cart-summary.tsx">
                    <X className="w-4 h-4" />
                  </button>}
              </div>
              
              <AnimatePresence>
                {discountError && <motion.p initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -10
            }} className="text-sm text-red-600 mt-2 flex items-center gap-1" data-unique-id="dbd0bd70-110a-461b-8693-b05d06e6b56c" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="d93ed0b2-be98-447c-93a7-4c6c6735d63b" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{discountError}</span>
                  </motion.p>}
              </AnimatePresence>
            </div>
            
            {discount > 0 && !discountError && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="e0f54bc3-9e0f-48be-bf7a-16fe3fd70362" data-file-name="components/cart-summary.tsx">
                <div className="flex items-center justify-between" data-unique-id="a6f7591d-ad18-4f00-aec9-56afb34afbe9" data-file-name="components/cart-summary.tsx">
                  <span className="text-sm font-medium text-blue-700" data-unique-id="0209730c-42e5-4aaf-8d01-c8d4f977e72e" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="ba40f757-5ec5-448e-96ca-4455cb69667f" data-file-name="components/cart-summary.tsx">Diskon diterapkan:</span>
                  </span>
                  <span className="text-base font-bold text-blue-600" data-unique-id="c2af9744-73fe-451c-82a4-1b4759a70cb0" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="9995f19d-f1e8-4bb2-bcfa-ddf782d1f5ae" data-file-name="components/cart-summary.tsx">Rp </span>{discount.toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}
          </div>
        </div>}

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="d32f680f-1db8-4e21-bbb4-8a2e10dbf776" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="d40e34b4-d491-475d-af9d-b175cdb9b265" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="2936d23b-aaa9-4c76-90cf-ea9d6de8525d" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="9874d155-351b-4c99-bd8d-e1b577e357fc" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-center py-2" data-unique-id="5366ce8f-5509-45bf-bb1b-8a3e5dc1c749" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="8c21f5a7-8184-4f5f-b3ec-a8d47d88be36" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="40b8dba9-a6ad-4975-b62b-4b2c6cd404c8" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="63de4ea6-de21-4307-8305-9fcf913dbd37" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7dd4b619-f76e-4f0d-9332-3402d6bcc846" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="33eccd44-8a1e-4b06-8d5e-7f39bc15a71e" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="0ed91fad-3521-41c2-9ef9-d7873df19b8e" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="d7830886-e1eb-4c6d-b35a-85d862dffe85" data-file-name="components/cart-summary.tsx">Subtotal</span></span>
            <span className="font-semibold text-lg" data-unique-id="54ec4dfc-0fdb-4f50-b2a8-eb8ddb9482ea" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="3972c924-8004-4998-a14d-d90e8fce75f6" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          {discount > 0 && <div className="flex justify-between items-center py-2" data-unique-id="5303b685-72d9-4e60-9066-d4663c43f614" data-file-name="components/cart-summary.tsx">
              <span className="text-muted-foreground font-medium" data-unique-id="3aff728b-018b-464c-9544-ac2ffa5b9a12" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="7d91ec46-460e-4abd-bfd2-8495d63f16de" data-file-name="components/cart-summary.tsx">Diskon</span></span>
              <span className="font-semibold text-lg text-red-600" data-unique-id="f4e76bf0-0614-43b6-b5ca-0303d0ee7b83" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <span className="editable-text" data-unique-id="aff4945a-2eba-4e44-a94d-eac591c1156f" data-file-name="components/cart-summary.tsx">- Rp </span>{discount.toLocaleString('id-ID')}
              </span>
            </div>}
          
          <div className="flex justify-between items-center py-2 border-t border-border" data-unique-id="985f64a2-ba69-49c6-8b7b-d4110e02c0ba" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="fc18e0a8-8b36-44e7-9833-ec8b90024625" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="d371baf7-5590-49e8-84bf-baf83aab613e" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-xl text-blue-600" data-unique-id="5896ad95-4e00-48e6-999f-c06c1e5f0c2c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="47190f56-ab1a-4c15-96be-9d165d5acf9e" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalTotal.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="4900a9e7-4825-4fb9-b6a0-9e8d0eb99b7d" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="e20ba172-a340-45a0-8223-8661b1cdf11f" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="17faeb16-8c73-4c26-a369-88a702f9e34f" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="27a31e61-23a1-484f-9e6b-c9f494e41e39" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e3f5e144-0da1-4203-a0f4-8a8f38469270" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="25576b58-98f7-4848-adb3-bece1da4fdb3" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="a592d03b-e17a-4396-a7f0-b3b4d2de91b2" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="cf6375ab-c471-4cdd-a55d-3374033d4855" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="84815853-2f1a-4839-a438-3978d1575f66" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="830716c1-9415-4370-93a9-a07860c67214" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="ec8fb4b9-9dd3-4def-b86e-36d7c8fc7fdb" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="5101b5cb-76bd-4ff5-893a-c127b4057a20" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="796e0b48-4956-4285-9161-a940fb552406" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="4ed3482b-020d-4ca6-98b4-f2f224f8fc60" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="0b868c61-e6c3-40e9-9d3b-40a02d56bfff" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="94d53c96-6f64-45a6-a74e-8fc2f8251945" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="b676b883-9f8a-4731-9bf4-856dcea1e0ae" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="fb490548-5502-42c6-80d6-7248828da9d1" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="0b945ed4-15ee-4ca4-8085-b7ba1a2b7db0" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="c0b675c2-f59e-478c-b130-d61f2895555c" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="a9d4d347-93c2-4795-9ae7-d003743bc222" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="73c15c9b-8d3d-4a6c-92e9-7272f051e4ba" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}