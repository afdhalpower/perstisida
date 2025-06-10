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
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="8017a9cb-fa39-449d-8fff-b327eb7b66a7" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="40409a9f-69fe-443f-809e-9290304235ec" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="41448645-1ff1-420e-b094-58232093a2d4" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="7ad10c89-c7c6-425b-8612-974769dbc18b" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="9f9ba89f-a9ea-46a0-9567-4817216bb70d" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="8df7c983-d769-4406-94de-be9b7eef7939" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="c9d6ee7f-943c-4c68-85fe-754c40a7c768" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="ecb46b31-13c6-450a-ad9d-f706c0754d5a" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="845681e9-ab44-4e79-85b9-67116b94eb1c" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="eb53b3fe-e3e3-4f59-a43f-bc56eff35bfa" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="9e5790f0-bd87-4bf9-b2b5-d799d46bf1e5" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="799ccf21-8a46-45b8-b500-4308fa9b333a" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="98e1f783-5a0a-4667-9e9a-6771c9fa0b34" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="ce974b38-5e07-48e8-8c07-706818ca448c" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="e5c85090-79d0-4287-88a8-437335825b5c" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="7a743211-8c9c-4ecb-b6f3-910e56f0c352" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="acf48c41-9c39-4ffa-9799-684b116f392c" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="25d4a348-f3c5-4c62-ae23-b06eb7cdc6ff" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Discount Input */}
      {cartItems.length > 0 && <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="76440107-f746-4942-9549-101aa2ab7967" data-file-name="components/cart-summary.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="a79a939a-ec12-43c1-9e3f-3fc89eb49121" data-file-name="components/cart-summary.tsx">
            <Percent className="w-5 h-5 text-primary" />
            <span className="editable-text" data-unique-id="3293e6d4-5416-4bba-a77f-1c7cd8ae0436" data-file-name="components/cart-summary.tsx">Diskon</span>
          </h3>
          
          <div className="space-y-4" data-unique-id="77cc02ce-423c-46e5-b299-cb35c83813a1" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
            <div data-unique-id="f185a635-c473-4152-ba65-30917127746e" data-file-name="components/cart-summary.tsx">
              <label className="block text-sm font-semibold mb-2 text-foreground" data-unique-id="a2d0f71b-221c-4ff1-b524-9e5e3033d644" data-file-name="components/cart-summary.tsx">
                <span className="editable-text" data-unique-id="ca75d6d5-2e0c-4852-a274-23d332005066" data-file-name="components/cart-summary.tsx">Diskon (IDR)</span>
              </label>
              <div className="relative" data-unique-id="efb1ba61-06cd-4402-956d-b13864dac936" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <input type="number" min="0" step="1000" value={discount || ''} onChange={e => onDiscountChange(Number(e.target.value) || 0)} className={`w-full px-4 py-3 rounded-xl glass-effect border transition-all duration-300 text-base font-medium ${discountError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border focus:ring-2 focus:ring-ring focus:border-transparent'}`} placeholder="0" data-unique-id="ef86b1aa-4bd7-4076-9554-8adc521882b3" data-file-name="components/cart-summary.tsx" />
                {discount > 0 && <button onClick={onResetDiscount} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="578f7dd8-e5f1-4c23-9a3f-7a311a573d3d" data-file-name="components/cart-summary.tsx">
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
            }} className="text-sm text-red-600 mt-2 flex items-center gap-1" data-unique-id="d607a12e-2c33-48c6-846d-5030a37f8245" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="42c2ea0c-a790-49e7-b5c7-b4fef908a4c1" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{discountError}</span>
                  </motion.p>}
              </AnimatePresence>
            </div>
            
            {discount > 0 && !discountError && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="0a369e1b-1f1c-4532-b1ed-e86b2a0b6b63" data-file-name="components/cart-summary.tsx">
                <div className="flex items-center justify-between" data-unique-id="2daceed9-2831-4da7-991d-4d99941fb810" data-file-name="components/cart-summary.tsx">
                  <span className="text-sm font-medium text-blue-700" data-unique-id="acbfddbb-fe4b-4823-8641-ccdad099a946" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="7f1a9245-43c8-421c-a8d0-f0c8c5be7f06" data-file-name="components/cart-summary.tsx">Diskon diterapkan:</span>
                  </span>
                  <span className="text-base font-bold text-blue-600" data-unique-id="109c9646-517b-44f8-9e81-e85d8a5c0177" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="0275bccb-8556-4cf3-a668-c7bdbd82c6e0" data-file-name="components/cart-summary.tsx">Rp </span>{discount.toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}
          </div>
        </div>}

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="01d25a45-3abe-4a2e-8712-c89f141925a9" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="e86c84c8-1f6d-4927-952a-b3a27bd3e424" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="df20b367-90f4-4893-9141-fcffd3eff0a5" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="5f059252-fb0b-42e7-a13e-c74789700d3d" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-center py-2" data-unique-id="ed3c3ba7-829c-465a-ac94-783a20fc9439" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="287af752-2e26-43db-8847-270d6b09fbb4" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="f6ca2fa4-05ea-4111-9353-f5659f892017" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="9a41a39f-e2d6-41ed-ad05-8a4ac8420fe3" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="57ea9592-6b57-40e9-98bb-f1fcd72c39a8" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="08b7d0f4-82d7-4f86-80e9-ed7ee820d0c6" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="0b44744e-8a37-4ad3-8137-93f354b017d1" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="28bbc67c-880e-4538-a812-0d62a52d77dd" data-file-name="components/cart-summary.tsx">Subtotal</span></span>
            <span className="font-semibold text-lg" data-unique-id="a3c80501-62d8-4aa6-bd3b-5e2f36e6917f" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b953e76f-b2cc-4290-ad30-5f1bbc829150" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          {discount > 0 && <div className="flex justify-between items-center py-2" data-unique-id="5cacba92-8f45-40d6-8a09-075f6ae2eb09" data-file-name="components/cart-summary.tsx">
              <span className="text-muted-foreground font-medium" data-unique-id="cd9a9fd4-92b9-467d-a525-2579415deed5" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="26f19322-6d6d-475a-b462-8fe707c57013" data-file-name="components/cart-summary.tsx">Diskon</span></span>
              <span className="font-semibold text-lg text-red-600" data-unique-id="98f8b1e7-2ce2-4d4c-85b6-457ac124aeaf" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <span className="editable-text" data-unique-id="53ac0704-65b8-489c-9560-69b0ddeff6ed" data-file-name="components/cart-summary.tsx">- Rp </span>{discount.toLocaleString('id-ID')}
              </span>
            </div>}
          
          <div className="flex justify-between items-center py-2 border-t border-border" data-unique-id="8501a549-b501-4d6d-8887-3526a6687bde" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="15aba0f2-7617-4a06-a7cf-7b5d6c32f455" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="2caba861-8253-4b46-824b-a3ffb1055581" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-xl text-blue-600" data-unique-id="1c7ff3e7-7228-4882-b094-1bfed59c3f68" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0d5576e8-973b-4dde-8374-92c0783554cf" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalTotal.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="ae9351f6-44b5-46c9-8b33-39c1ddf47807" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="ebfdae53-f155-44b9-9070-0660290f693e" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="3f40c261-dd9c-4a33-91d9-68c920391314" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="55c10f98-7e4f-48ac-b61d-f1c6a1d55841" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2e1b19c3-2492-4653-94d7-74e01dae48d8" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="3615f059-8546-438f-9027-b6f71d5ed52e" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="4aac2a87-1154-4977-bc3a-9167daffba3b" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="07bdb135-209c-4ebc-9109-fb271f799050" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="e89e7418-728a-4959-9424-0299617955b8" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="2efb21b8-3a9a-4964-848a-e708d24378ff" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="58d4c751-6e1a-44eb-b536-2af18e4f12cf" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="5005e0b1-331c-4b83-b53b-c83737875fcf" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="09e84238-5f94-424f-aed1-9f7031fbe71b" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="441d4ce2-62c3-403e-a1a5-117f78886a02" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="c46b04ef-ee12-46a2-9c19-761b0485f425" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="723f350f-4056-43d4-86d5-53ed3159e651" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="b0c7efa2-0e2e-4af6-9b0f-87e046b3ae1e" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="bc1a0ff7-449d-4cea-a632-f3b22db8e1c9" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="54e03a04-cfda-4a52-9781-75cafdc1d2a9" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="08e381c9-c933-4777-9646-7b37133c805d" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="75a26f5f-da58-449a-89eb-1950ba762d4a" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7937d390-5108-4713-8c33-53f50106a5da" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}