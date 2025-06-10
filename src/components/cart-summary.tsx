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
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="3403de6f-b1df-45f0-bf9b-6c680d6fc698" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="15ecc198-16d8-472d-b03e-5ec5bf846d78" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="206b3327-692d-4bb4-9f89-166a1be750b1" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="14efd7be-8fbc-45e2-b539-f4871744a4e6" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="696515b2-2757-4569-a434-07821fc6dfcb" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="c5db350f-df80-4998-91b0-88524a7b19b3" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="79ceddd0-9aa1-41ac-a139-ffcc91a8329c" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="774ffa20-a514-480c-b92d-b0fd778f94ff" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="a153c7fe-2970-4bf0-ae98-0cfb758fbbed" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="73869ed7-773f-4afb-885c-567ee27aae58" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="d821dbc5-306e-406e-b405-96a9b6d7528c" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="04d177c4-f00b-494b-97b9-963a51759869" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="024f2070-370b-4ee6-9b03-30ccc3491a39" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="707246e5-491a-4bd6-9fc5-75d710b63e1c" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="3318df12-726a-400c-8e05-72d4e3ee5407" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="2cb71127-0a84-4505-9306-ef9203cd5946" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="8fda0d15-8ff8-4063-b4d2-57ac3bff0430" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="c7767774-3a4c-48f2-aa96-0c5956fc3267" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Discount Input */}
      {cartItems.length > 0 && <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="c175c022-ca4f-4686-8017-966a1a2082e0" data-file-name="components/cart-summary.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="558663aa-a005-4a24-afb0-445dfb3a016c" data-file-name="components/cart-summary.tsx">
            <Percent className="w-5 h-5 text-primary" />
            <span className="editable-text" data-unique-id="5e1905a7-8d04-4aef-a3ae-01b8dd930dff" data-file-name="components/cart-summary.tsx">Diskon</span>
          </h3>
          
          <div className="space-y-4" data-unique-id="90cde8d3-db87-4871-bbcf-715b06fea36e" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
            <div data-unique-id="f5e703af-14d9-42e6-bd7b-a06854d3d45a" data-file-name="components/cart-summary.tsx">
              <label className="block text-sm font-semibold mb-2 text-foreground" data-unique-id="d979c279-99af-419c-ac61-03f3626810b9" data-file-name="components/cart-summary.tsx">
                <span className="editable-text" data-unique-id="bfb78200-8741-4e12-9ec4-be08d6d5ae80" data-file-name="components/cart-summary.tsx">Diskon (IDR)</span>
              </label>
              <div className="relative" data-unique-id="1de24fd8-11ac-4e3e-8f9c-ea9c44bbd40c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <input type="number" min="0" step="1000" value={discount || ''} onChange={e => onDiscountChange(Number(e.target.value) || 0)} className={`w-full px-4 py-3 rounded-xl glass-effect border transition-all duration-300 text-base font-medium ${discountError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border focus:ring-2 focus:ring-ring focus:border-transparent'}`} placeholder="0" data-unique-id="75c00590-54f9-4925-849a-4c0c781e4378" data-file-name="components/cart-summary.tsx" />
                {discount > 0 && <button onClick={onResetDiscount} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="9f396f0e-27c8-4c07-a642-fa8a742252e1" data-file-name="components/cart-summary.tsx">
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
            }} className="text-sm text-red-600 mt-2 flex items-center gap-1" data-unique-id="6ef50781-b634-4c03-8064-2b918a852eab" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="8a7d7874-0095-488b-b2a8-e157bfc01b46" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{discountError}</span>
                  </motion.p>}
              </AnimatePresence>
            </div>
            
            {discount > 0 && !discountError && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="6cfac2fe-d755-49f9-9b70-039ae0a92ec1" data-file-name="components/cart-summary.tsx">
                <div className="flex items-center justify-between" data-unique-id="7112750e-abb3-4042-b2fc-ae000fbc5568" data-file-name="components/cart-summary.tsx">
                  <span className="text-sm font-medium text-blue-700" data-unique-id="1c4a360c-e97b-43bd-8d95-3fe5c19b0642" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="0ae92ad3-a06d-48fe-8daa-2d2c2d5b6043" data-file-name="components/cart-summary.tsx">Diskon diterapkan:</span>
                  </span>
                  <span className="text-base font-bold text-blue-600" data-unique-id="bdc2500d-89da-4bcd-b3f6-a95d79a53ca1" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="d00856fc-7391-45e0-b9d8-e5f88f3970e6" data-file-name="components/cart-summary.tsx">Rp </span>{discount.toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}
          </div>
        </div>}

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="2865feb2-667f-4074-ab31-9dbc53c4238b" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="c86457e2-8a2d-45a3-8b58-15b3029d304a" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="7a742c21-9a16-48f3-b545-3a125a24bbf5" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="b9aee7ac-5139-4afb-a9da-89c4deb2c76f" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-center py-2" data-unique-id="85f636b7-9bd7-491e-87ee-d292febbf03f" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="004be36e-806e-47b6-bab8-fa591af55291" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="c107e1c0-2994-4ddd-ac2a-ee8a16d08bfc" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="8d74afdf-8c4f-4917-8574-d02a2f1c49c8" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c2a07711-e1ec-4edd-b70f-bf98647539d6" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="2736a624-df28-4e3a-8bbc-c7f13f46edd8" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="478dc355-762c-4aba-ad69-ee72ea57632f" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="c70ea65f-d050-4bc1-8d07-a696b6e8f782" data-file-name="components/cart-summary.tsx">Subtotal</span></span>
            <span className="font-semibold text-lg" data-unique-id="44def2a9-d212-486f-a54f-5df516216a1b" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="67b6df3e-e313-4ec6-9b03-82f81c5cde5b" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          {discount > 0 && <div className="flex justify-between items-center py-2" data-unique-id="b12a10dd-f028-4e8a-b970-5c973dc90b00" data-file-name="components/cart-summary.tsx">
              <span className="text-muted-foreground font-medium" data-unique-id="30f9f151-415c-47f7-9000-bf04048d89eb" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="177ebf3f-cc66-42db-b0ef-ad6419d8b0c1" data-file-name="components/cart-summary.tsx">Diskon</span></span>
              <span className="font-semibold text-lg text-red-600" data-unique-id="fe859713-63d2-4690-bb64-f08b69412dd3" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <span className="editable-text" data-unique-id="ab0562d1-6979-43b0-80f6-f9cdd117f9a0" data-file-name="components/cart-summary.tsx">- Rp </span>{discount.toLocaleString('id-ID')}
              </span>
            </div>}
          
          <div className="flex justify-between items-center py-2 border-t border-border" data-unique-id="12481af5-bf4b-485f-bdca-eb18d7e272de" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="d2a10fcb-a319-44cb-b7a1-2a9fb03301c7" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="b6eeb361-b827-447f-a068-1b7984e67a7b" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-xl text-blue-600" data-unique-id="558d9022-2583-4713-a96b-82f9c57fb2d4" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e7be328c-2733-4859-9c74-d8ea9cbeec08" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalTotal.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="d79c5c86-d580-4e60-ad34-363e0cd1d07f" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="bd6c77aa-8ae4-4397-94c7-0d5bcf570e52" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="0aa2a752-57b5-4a17-9701-33bae2cd3bed" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="64b01415-85bf-4f04-9446-776a5cc63ffa" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="62c49668-eb39-4183-9c22-f9e29ae360e0" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="1bc07d7e-2a11-48d6-912c-a8af96d7b88b" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="ad70fb1e-6367-44ca-b4b5-2a4aae36abf1" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="101f5407-06f0-40e9-98eb-74c2e39b37be" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="27096b72-ac1d-4d95-96e9-caa08738223c" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="0a63d3d5-49c5-4457-a479-4d90610af567" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="b762feb7-bd32-4f37-95b7-3da0753e6f73" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="78fa205d-0a4a-40b5-8f63-779c263d969b" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="94cab52e-69eb-4015-80cf-866fc1a84380" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="4b0b49c2-de04-423a-8ccc-15e6cd69d510" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="93dad412-788d-4be2-b46a-6b51fe52afed" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="72bc323c-d233-41bb-86a9-74d1b6f620f5" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="82a5548f-1eb0-4c92-936e-875d8fbd6066" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="035a3b9c-b0ac-4cb7-86cf-776d1c20fd11" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="041b221c-7af3-4dd7-8dba-daf2dce10da0" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="c34a815c-140d-4ae6-b554-d74b10ae3190" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="1fd9ed14-90b7-4a0e-9b70-834dc1974336" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6d2e906d-5f31-43d4-a336-260e54392d17" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}