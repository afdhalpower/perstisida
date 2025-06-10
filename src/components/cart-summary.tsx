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
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="9bb63474-9e2b-46e7-9cde-70aa4ba5b8c0" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="12076a0f-85cb-47da-b92a-5720b44c2f32" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="2fb28e73-2407-44ed-9efd-748ae33663b7" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="d240c81b-bb5b-4624-8404-4ba193640daf" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="be56896c-8c63-412f-8987-f544aaafc647" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="97bfb13c-b446-4715-9f20-277f5c21727f" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="decd5687-c0fb-4e5d-8c26-644125e8abd1" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="33bea5d0-7e8a-40c5-83bc-76ca2542c395" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="1c5752f0-d1d5-44d6-8f36-bab676ff1537" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="f2dc0e86-7768-4b5f-be07-6394cc111724" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="48b8ef1e-1198-4444-86a5-5f8c0c26669e" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="6d993e62-3910-4f69-a371-ec009b0b09bf" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="268f60c4-0a8f-43d0-9423-e5337376d268" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="4174d39e-f58e-4130-b548-f83deb1ff046" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="4fb9c9d6-af77-4e39-9179-8318ff7df6ef" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="3d99aa30-f266-400a-86d6-f71634a2703b" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="f01ffd4e-0878-47a1-91be-29e9bcb24da6" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="83e37919-eee0-41ea-8478-e905b172b279" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Discount Input */}
      {cartItems.length > 0 && <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="b36a4081-079e-4205-b774-155388e0b1c2" data-file-name="components/cart-summary.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="6122552b-6b49-456e-ba84-0b09a310901c" data-file-name="components/cart-summary.tsx">
            <Percent className="w-5 h-5 text-primary" />
            <span className="editable-text" data-unique-id="87c3f2c6-4b78-4400-9ba9-6351e99755ab" data-file-name="components/cart-summary.tsx">Diskon</span>
          </h3>
          
          <div className="space-y-4" data-unique-id="b5ec5389-74f5-4078-bcdb-1861e45939d0" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
            <div data-unique-id="0772da83-ee1e-41b5-ad13-6ac25d70c567" data-file-name="components/cart-summary.tsx">
              <label className="block text-sm font-semibold mb-2 text-foreground" data-unique-id="ce1e0adb-0625-4a1d-a5b9-d66f78ae3e98" data-file-name="components/cart-summary.tsx">
                <span className="editable-text" data-unique-id="d97c7951-aaeb-4d3f-b53c-a3a1a6d1aa77" data-file-name="components/cart-summary.tsx">Diskon (IDR)</span>
              </label>
              <div className="relative" data-unique-id="14c94f16-2253-427c-ad1a-a0a60afdd744" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <input type="number" min="0" step="1000" value={discount || ''} onChange={e => onDiscountChange(Number(e.target.value) || 0)} className={`w-full px-4 py-3 rounded-xl glass-effect border transition-all duration-300 text-base font-medium ${discountError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border focus:ring-2 focus:ring-ring focus:border-transparent'}`} placeholder="0" data-unique-id="aa8f75ea-0cf7-4b00-bf9e-b2ead4700be8" data-file-name="components/cart-summary.tsx" />
                {discount > 0 && <button onClick={onResetDiscount} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="432571b9-8ae0-4f97-a61a-94c85adb1aa4" data-file-name="components/cart-summary.tsx">
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
            }} className="text-sm text-red-600 mt-2 flex items-center gap-1" data-unique-id="290b2ddf-4a6e-4de0-bd93-809b35763604" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="6b2b5299-a3ba-45f7-8931-21b151f55476" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{discountError}</span>
                  </motion.p>}
              </AnimatePresence>
            </div>
            
            {discount > 0 && !discountError && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="8e40eda5-7ee5-4db0-9aaa-28a4531c180b" data-file-name="components/cart-summary.tsx">
                <div className="flex items-center justify-between" data-unique-id="04f59aa6-cf90-4784-9be6-48ab1165f7ae" data-file-name="components/cart-summary.tsx">
                  <span className="text-sm font-medium text-blue-700" data-unique-id="7fd6b326-ac31-4264-bcc9-4ceb308b9d8d" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="b8fa7f49-2f59-4fc2-af46-509a22c22ce4" data-file-name="components/cart-summary.tsx">Diskon diterapkan:</span>
                  </span>
                  <span className="text-base font-bold text-blue-600" data-unique-id="d49b4b66-99ce-482d-9563-91a2d79c2887" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="ea5e101d-e1d5-452e-8863-8de64dfdebb3" data-file-name="components/cart-summary.tsx">Rp </span>{discount.toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}
          </div>
        </div>}

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="642015a7-0bf8-4535-8cab-4c390c64823a" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="e0410023-4463-4938-aaa8-281cf2937663" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="01e0ff18-8297-4981-b41b-1dc116e1127f" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="57cde188-c74a-42d0-be08-0bdab479b1b1" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-center py-2" data-unique-id="adce728c-74e9-4bce-869c-3e6f01a82e12" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="4fe3ff4c-8147-4869-a235-1507edd7899c" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="9878b715-d083-46e1-bbcd-afbd3bdbf5b7" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="a625da42-08df-48fb-a712-840efe514f23" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b1bffcb7-a051-4f05-8bea-bb702be300bf" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="1c16beb5-7ff5-4ede-846d-e44cc4714663" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="1706f99d-48bc-4f9b-8be4-f9abc7b0c1d9" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="4ae53398-3412-4a52-aa86-36f6b4825def" data-file-name="components/cart-summary.tsx">Subtotal</span></span>
            <span className="font-semibold text-lg" data-unique-id="0c137440-46a9-4587-9041-fbcb427e4abc" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a2109e79-790d-4e02-b4de-69489a6e632b" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          {discount > 0 && <div className="flex justify-between items-center py-2" data-unique-id="b9386291-25ee-4803-b6e0-ec8b4d337524" data-file-name="components/cart-summary.tsx">
              <span className="text-muted-foreground font-medium" data-unique-id="c07737d5-8d97-4c71-97c6-5844c28912ea" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="1bec9efe-e203-43ed-9288-7af5a65aec1e" data-file-name="components/cart-summary.tsx">Diskon</span></span>
              <span className="font-semibold text-lg text-red-600" data-unique-id="1e16bf04-647a-4566-8388-83e07b60c359" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <span className="editable-text" data-unique-id="3afad382-1a6e-4e40-9ee5-4f9307acecec" data-file-name="components/cart-summary.tsx">- Rp </span>{discount.toLocaleString('id-ID')}
              </span>
            </div>}
          
          <div className="flex justify-between items-center py-2 border-t border-border" data-unique-id="23599a8e-ddba-44df-a70d-f857a01d6bb7" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="ed4729a4-e50a-4247-a05f-9884b8ee1950" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="98a60ea2-3953-4075-ac6c-e70952d0793a" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-xl text-blue-600" data-unique-id="487338d5-ddc8-43ff-9923-9ef2c02a984c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="73395072-9426-4c35-a7b6-9e7edec9c29a" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalTotal.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="d60ada0f-43bc-4509-b1a4-eded769ad520" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="dcf37178-6412-4784-aeec-b9193ba7c4c0" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="89bcb136-47b6-47d5-8bd4-0d9a264b9a97" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="fa700289-1888-4775-b5fc-796a784e035e" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2e5eeea4-78ba-4eb7-908c-ddbe85f745cc" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="50216a9e-e549-4d6c-8071-14e57cd66c78" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="785559c2-c337-4ecc-a385-f145640b4fb4" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="f894b286-4a89-4d9c-967c-c8f23b868166" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="0fe1ece5-c75f-483d-8a94-eb3f77f7628e" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="17c57c39-2d54-489a-a550-a969b2d45283" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="6e6ae11f-fe79-42d6-8bae-618309760faf" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="3239bfae-8bea-4184-a847-9984c9b4eeb7" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="ed7738a7-fbd6-47a8-9df5-266646e1debb" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="6afbdbc9-8ffb-4a97-9b7a-4b33ac1194a4" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="419eb5ad-4f17-494d-a4d2-dab7a9bdb0f1" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="f2beafac-3322-4990-8afa-cb9903c17d73" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="0b969a6d-dd4d-4503-bf61-0a96b1e5b73d" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="6aca94c4-8b4e-42a0-ace8-a799e98e6ffe" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="c83ac3e2-821d-4593-a0bb-e903092ba23a" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="b963c686-f814-4bcc-b378-4e12550d53e4" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="f1ac9918-596d-4cb5-b654-ad28cc9bb33b" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="82fffd3b-b55b-417b-bdc9-96b5f386008f" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}