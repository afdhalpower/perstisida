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
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="58da23d6-18ce-46fb-8ad7-a23d6a516453" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="c9a37710-ac3c-4864-b09a-ac47a3d3f0f0" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="1894bc5d-1681-417f-a3f4-364def129562" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="a3f9fcf8-5b89-42a0-898f-874563a25fb0" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="21ecf5c1-6fe8-4da0-a68c-7dd3d715907c" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="a39a266e-1d62-41ef-bd7e-6cd027892ef4" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="a936f96f-0a1f-4e7c-be5a-7802783b5609" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="3a58de3d-d721-45e6-987e-e373b86073d2" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="5ffed3e1-94cf-464d-b734-2f3dc519f661" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="3b0dc439-3eb3-4f19-9485-b9ae7f9d3896" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="ff9b56d7-185e-40a4-abc3-055f758fa1fd" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="5d51033d-b426-4c68-96d2-b5d09ea46bee" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="9b9d52bc-f2ed-41aa-9c6a-c6ca00b9b193" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="eb81d1b0-b7d2-4f41-ad1a-305c6d7e005f" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="2344e8d9-06ad-43cd-8156-c8b38ddb05f1" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="009f92e0-de76-4515-9e5d-fb761a1bb361" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="6d371820-9ed1-4b0d-868e-af0529da25b2" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="0c051f61-a939-4b76-affc-271561dd0005" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Discount Input */}
      {cartItems.length > 0 && <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="89e56973-456f-427e-a4f9-2623e1f6e566" data-file-name="components/cart-summary.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="c5b880aa-f1c9-44e0-b4a2-abe16d22694f" data-file-name="components/cart-summary.tsx">
            <Percent className="w-5 h-5 text-primary" />
            <span className="editable-text" data-unique-id="bc54d42d-a3b0-4d88-9042-b5f0bc82102f" data-file-name="components/cart-summary.tsx">Diskon</span>
          </h3>
          
          <div className="space-y-4" data-unique-id="b315e329-a760-4058-ab1b-1a616fa14ad0" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
            <div data-unique-id="d2528123-0905-4d55-bc7f-801bee997fec" data-file-name="components/cart-summary.tsx">
              <label className="block text-sm font-semibold mb-2 text-foreground" data-unique-id="0b530f06-2d42-4e67-8be9-01ea59360a83" data-file-name="components/cart-summary.tsx">
                <span className="editable-text" data-unique-id="48a1c24d-548d-49da-a187-a07e32f555bd" data-file-name="components/cart-summary.tsx">Diskon (IDR)</span>
              </label>
              <div className="relative" data-unique-id="9dc47b5b-f234-4518-95c4-a07fa2ca2eff" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <input type="number" min="0" step="1000" value={discount || ''} onChange={e => onDiscountChange(Number(e.target.value) || 0)} className={`w-full px-4 py-3 rounded-xl glass-effect border transition-all duration-300 text-base font-medium ${discountError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border focus:ring-2 focus:ring-ring focus:border-transparent'}`} placeholder="0" data-unique-id="6df5859b-9cb5-48be-a5db-76a8971410b9" data-file-name="components/cart-summary.tsx" />
                {discount > 0 && <button onClick={onResetDiscount} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="5b041f92-50ec-4636-9336-b2652b74cbaa" data-file-name="components/cart-summary.tsx">
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
            }} className="text-sm text-red-600 mt-2 flex items-center gap-1" data-unique-id="b27d9914-4190-4a25-9a29-26798958d9b9" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="2ea438f1-2627-4188-ad26-4fb947a5637c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{discountError}</span>
                  </motion.p>}
              </AnimatePresence>
            </div>
            
            {discount > 0 && !discountError && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="128f5b61-244a-4a59-8389-b022b616d3d0" data-file-name="components/cart-summary.tsx">
                <div className="flex items-center justify-between" data-unique-id="0c4302ef-ddc8-4e1a-8525-8540bbe0d2d6" data-file-name="components/cart-summary.tsx">
                  <span className="text-sm font-medium text-blue-700" data-unique-id="6c13f283-23cc-40af-a356-083dec495a2e" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="372539fa-609b-4f04-a185-8f9f09def075" data-file-name="components/cart-summary.tsx">Diskon diterapkan:</span>
                  </span>
                  <span className="text-base font-bold text-blue-600" data-unique-id="a51669df-4984-45e3-a702-0b290d0e3864" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="4c976b25-ef3d-44f2-a30f-2ed2378459ca" data-file-name="components/cart-summary.tsx">Rp </span>{discount.toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}
          </div>
        </div>}

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="c146a966-23bc-4b96-b98a-d573056580bf" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="79f297b3-f17f-4472-978b-0887e100a708" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="4e5cf3da-f1ff-4895-9c12-c4c8126037e0" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="4dd7c3ca-8616-4d39-b797-cace328c8446" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-center py-2" data-unique-id="0aaafc61-7e8f-40d4-9b3e-313ad099fd5b" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="6371dad5-f2b5-4fe7-927f-8d0a8b6557fa" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="14f92958-8135-4cf8-a8e5-5e503ea7b8b8" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="625a2b18-5ea2-4832-ade0-4792f29036a7" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f1277517-7273-4bab-b174-97048f6f8c26" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="ee5d9a56-00c7-4608-9d7a-4f666ffe1fa3" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="84cf2089-08ae-4f0e-a9d2-728a8fc3ec0e" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="e85bce5b-731c-49b6-b6d0-f2fc2a77db8a" data-file-name="components/cart-summary.tsx">Subtotal</span></span>
            <span className="font-semibold text-lg" data-unique-id="ca7092d7-a71c-4222-9152-3dd1e482dd6e" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="819474be-0215-4628-8c83-a710133cd228" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          {discount > 0 && <div className="flex justify-between items-center py-2" data-unique-id="75520f44-7642-453d-94d2-b189ccf64ddc" data-file-name="components/cart-summary.tsx">
              <span className="text-muted-foreground font-medium" data-unique-id="a1a8713b-33c2-4ba1-a257-818142977b72" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="1662e1e6-05e0-4847-9bc7-d8205c73e596" data-file-name="components/cart-summary.tsx">Diskon</span></span>
              <span className="font-semibold text-lg text-red-600" data-unique-id="be51c506-250d-4b3a-bec9-444110c30375" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <span className="editable-text" data-unique-id="af9239eb-21a1-460a-84f2-530bcaf753d4" data-file-name="components/cart-summary.tsx">- Rp </span>{discount.toLocaleString('id-ID')}
              </span>
            </div>}
          
          <div className="flex justify-between items-center py-2 border-t border-border" data-unique-id="78fd96db-7a29-4c0e-be65-b7bcad1b9cf1" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="54c75cb6-edaa-44fc-803e-193a50ed3a21" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="8922cbe5-4d62-40f5-876a-cc772208107e" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-xl text-blue-600" data-unique-id="5552f3a9-a232-4d88-8ff3-e5e061b32beb" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="01a3af62-cf45-456c-85a6-7f320a954bf7" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalTotal.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="d8a8e032-304b-4bd5-8ea4-dd708cc06450" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="7884e750-973f-4a2d-abf7-14bf772b82eb" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="50e6787a-efdd-4103-8d3e-1b73b31106fc" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="051b9b71-cc6d-4f44-be25-5bf13abc5e9a" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="93411dcd-53a2-47fb-b2f8-f079440f5dd6" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="d554a0a6-0873-4bd2-ae06-00642e8ff153" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="e323c951-63be-4e40-af58-770788eaf0f3" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="1bacc4ad-4245-4968-9aa0-7e5f57c523db" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="f8ea8b8b-61f5-46f8-82c8-558c09294641" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="4d64937b-a38c-49b8-9533-254a5a970d9c" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="cb2e9c61-2667-4030-9f13-278373d3bdc4" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="b63ca12f-c08d-4c9a-8621-d4f5867d32b7" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="70e87fe4-d22d-4cb2-9e54-5c3796330534" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="a69812ec-679b-4593-8077-5625dbf251bc" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="ab959409-21c8-47c1-aa95-ca0ca03ca1c1" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="535cb994-4897-44e4-a612-d2e606e866f8" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="346c8678-2398-4b74-a3ae-62f29ac49a67" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="24ebe620-6b37-4caa-985b-528d33d54724" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="d90701ec-ac0e-48a7-bbcc-1c2dffadffee" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="df31e33b-cdc6-4c86-becd-3daf2ca9ae1e" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="654aeb70-7e63-4281-8fbb-5c3813d8fbc0" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f6ca1fcd-56ae-4fea-ad81-073f47672ca7" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}