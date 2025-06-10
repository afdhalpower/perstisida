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
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="5287ff49-91f8-4673-8713-c6b7e91267b2" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="fa1bfbef-59f4-4a52-9b91-3b4ad8d13858" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="b27400d4-72cb-48a4-831b-f5a411f84c25" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="58878dde-7b64-42c9-8d73-3911145d3a89" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="8d9175ca-ad4b-4427-af9a-73c4b3114969" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="7197e8b4-fe45-4cdf-a25b-7458ef000a79" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="0aa9a507-0e20-4485-a6a9-eb0b45272d74" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="71945bf7-85bd-4e76-8cfb-8c01acd241a3" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="a01ffc1c-caa6-45c3-b4fa-e32d6f45b846" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="8ad6d6ae-d342-4cfd-ae0c-a9181fd78473" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="d1d55706-5f20-4f43-87cb-1ac9123d56b3" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="0e344d2f-4286-428d-8c56-de0e025bb1ea" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="f4624d4c-68ab-4299-96ad-03e86116055f" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="e3318603-b2e1-442e-bdb3-4bfecc177876" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="b9d1dcf8-a0fb-466e-ada9-81e0ad9bb363" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="6f001d55-f4bf-47af-b93e-15bef9f0500a" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="9f962dfd-59b1-47de-a748-c73df8427649" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="30f19000-0976-41a1-85ba-b67d2705370e" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Discount Input */}
      {cartItems.length > 0 && <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="d59dbd49-6e0f-47f9-8a4d-bfad29d97ab6" data-file-name="components/cart-summary.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="95c346c1-3ded-4a65-b7a2-70065d0e2caa" data-file-name="components/cart-summary.tsx">
            <Percent className="w-5 h-5 text-primary" />
            <span className="editable-text" data-unique-id="1cd44dc3-0d8b-47be-a2e7-f916994afc99" data-file-name="components/cart-summary.tsx">Diskon</span>
          </h3>
          
          <div className="space-y-4" data-unique-id="be3b4f9a-a33d-4f5c-bcc5-7d6e77a623ae" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
            <div data-unique-id="bf222939-a4da-4aec-8afa-e25fe53f8e0a" data-file-name="components/cart-summary.tsx">
              <label className="block text-sm font-semibold mb-2 text-foreground" data-unique-id="91dc6182-ad61-4842-850a-8852ede96207" data-file-name="components/cart-summary.tsx">
                <span className="editable-text" data-unique-id="097d04c0-5383-401b-88aa-1a815077f0bc" data-file-name="components/cart-summary.tsx">Diskon (IDR)</span>
              </label>
              <div className="relative" data-unique-id="29482665-129b-47cc-be88-22120fd5e853" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <input type="number" min="0" step="1000" value={discount || ''} onChange={e => onDiscountChange(Number(e.target.value) || 0)} className={`w-full px-4 py-3 rounded-xl glass-effect border transition-all duration-300 text-base font-medium ${discountError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border focus:ring-2 focus:ring-ring focus:border-transparent'}`} placeholder="0" data-unique-id="6e57b0b4-61f9-4fae-a2ef-102c99775e6c" data-file-name="components/cart-summary.tsx" />
                {discount > 0 && <button onClick={onResetDiscount} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="afd3424e-306b-430d-bbfb-d40495bf9f3c" data-file-name="components/cart-summary.tsx">
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
            }} className="text-sm text-red-600 mt-2 flex items-center gap-1" data-unique-id="a927cab0-3378-4667-912b-4b68e8fbef15" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="f8d7f2bb-fb8a-4dd4-9843-26cd91b1783a" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{discountError}</span>
                  </motion.p>}
              </AnimatePresence>
            </div>
            
            {discount > 0 && !discountError && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="4e2dc0f7-aa2e-4e2c-a558-43a76d9716af" data-file-name="components/cart-summary.tsx">
                <div className="flex items-center justify-between" data-unique-id="84b98702-95fe-4b0d-bf27-d75baa0ca574" data-file-name="components/cart-summary.tsx">
                  <span className="text-sm font-medium text-blue-700" data-unique-id="505e8212-440e-4ef3-8b0c-230bf7c414b4" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="b7d89926-f416-4e03-a8d8-e7c30b878ceb" data-file-name="components/cart-summary.tsx">Diskon diterapkan:</span>
                  </span>
                  <span className="text-base font-bold text-blue-600" data-unique-id="fd343e88-5bab-4d95-af09-b3879486e254" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="8e6a384f-336f-4d0d-8c78-20f08f295c85" data-file-name="components/cart-summary.tsx">Rp </span>{discount.toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}
          </div>
        </div>}

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="d5c83755-0d70-4c2c-be74-37070c2d3bce" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="3c8b9f2c-7f1b-44fa-9fb5-ff879dedf493" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="0984ce93-db34-4b46-ad4e-24b771a459cd" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="3b21f3e7-f59f-4ff8-bca7-1922d883a859" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-center py-2" data-unique-id="9ecb4523-4f18-44d0-b8fc-8019c6de3dac" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="5b489c69-6cb2-4878-bd7e-6b308751a7b9" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="06f8f003-43e6-4b6a-b85e-a36124d802e3" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="25c2644a-e77b-4e81-adc1-5ff7862ac426" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a427a2cc-91c3-494d-889d-acf18a21f9cb" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="a12b1a3e-d01d-47c0-a13e-4a8242d80db9" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="41f9577a-5edb-430c-b4d2-0816711a4536" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="9973fa2c-2919-4d83-90f0-be01d5abbe45" data-file-name="components/cart-summary.tsx">Subtotal</span></span>
            <span className="font-semibold text-lg" data-unique-id="692f21d8-dc54-438e-a751-96d2ddd51aa4" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="29734a96-dcb9-4275-ae3c-dbf4d24c2fe8" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          {discount > 0 && <div className="flex justify-between items-center py-2" data-unique-id="2af76994-4611-4e76-b5c5-bf1f299d43ef" data-file-name="components/cart-summary.tsx">
              <span className="text-muted-foreground font-medium" data-unique-id="5808c8a4-f519-4269-a8bc-9a450d9f4633" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="601af7cb-6e72-4e5d-a2ee-4d0c869320bf" data-file-name="components/cart-summary.tsx">Diskon</span></span>
              <span className="font-semibold text-lg text-red-600" data-unique-id="8a533327-f7cb-460a-8e51-ec7c66828e21" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <span className="editable-text" data-unique-id="846e57d2-ee14-4278-9ab9-2893e7aa77a9" data-file-name="components/cart-summary.tsx">- Rp </span>{discount.toLocaleString('id-ID')}
              </span>
            </div>}
          
          <div className="flex justify-between items-center py-2 border-t border-border" data-unique-id="47f41224-93c3-494d-9609-b421de610069" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="443f3ee5-e0a4-4db2-90a1-760b962595a7" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="e178b269-c073-4bed-9223-ae397b32bc1c" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-xl text-blue-600" data-unique-id="5b2432a0-f772-45fb-8323-035b9ff71fa1" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="befc325a-e5ed-4386-a630-4750bbc77aa3" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalTotal.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="c13986a2-ba56-4cad-917e-89214004f85e" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="000729cb-20ec-48bc-a50d-d81e27fe72d5" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="2ad8f636-aec4-48b4-9d77-914c433bbfb4" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="d0212a17-b92e-476c-840b-d2af50dc34ca" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="168ba945-b5eb-4da1-ac56-e3e4ef3289e0" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="e9873463-598e-4ba0-aad1-c01c2d5dd09f" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="7db41add-ca96-476b-928b-4ce04090aa07" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="293baef3-99e0-4a64-8ced-dbb92d72d41f" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="cd134b41-792a-4133-ac23-1a32c3170e68" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="0fed7543-2b69-49a9-923a-cf7ce776dd60" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="c162c4e9-1c1e-49fd-b808-63c70f93bdc0" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="cb325a4f-7de6-4e49-a173-7ccad7d8f46a" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="abccb350-9892-4801-8d9f-b54f600bc7cc" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="d73100c3-b71a-4ce9-a8b4-d88b865ed9d3" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="9deae5ca-4bc0-4b2d-8e75-a68ea1e2cef2" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="6690ff56-1267-4ee6-acbe-5f5614a74e7c" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="23d3b7c8-213f-4786-949c-dca957572357" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="e003bdb7-3db9-4cac-9729-1ab0bbea246d" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="9b450b6f-c295-40d3-a4a2-7bbf8ef95a2c" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="53b08028-5f98-409a-a43d-9cbe0e9c83d4" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="a81688f9-4268-46ec-adae-c402a91f97ce" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="58b9b498-0c87-458a-9354-de778675a8a8" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}