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
    return <div className="glass-effect rounded-2xl p-8 text-center" data-unique-id="a8f72c14-b1e0-4b43-894e-57ab08c9b805" data-file-name="components/cart-summary.tsx">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-muted-foreground mb-2" data-unique-id="15df1984-fcb8-49b0-a88c-573154e6af85" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="e245be93-b0d5-4c73-9379-0a955b863f52" data-file-name="components/cart-summary.tsx">
          Keranjang Kosong
        </span></h3>
        <p className="text-muted-foreground" data-unique-id="8c0db59f-1be1-4317-9a02-22d2eae2c2ac" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="4de6c59b-28c1-428d-b61d-0482c6bf6457" data-file-name="components/cart-summary.tsx">
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
  }} className="space-y-6" data-unique-id="4dc815db-7b03-4f2d-a521-cb1454a394b4" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
      {/* Cart Overview */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="33423a57-82f7-438f-9558-ce82d4a685db" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="06557799-95cf-4998-8e80-51af79397120" data-file-name="components/cart-summary.tsx">
          <ShoppingCart className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="fce59fac-de94-4dbe-b7bb-fb927f6d15a0" data-file-name="components/cart-summary.tsx">
          Keranjang Belanja
        </span></h3>
        
        <div className="grid grid-cols-2 gap-4" data-unique-id="57037509-d972-4133-a895-bfad0a83754c" data-file-name="components/cart-summary.tsx">
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50" data-unique-id="c74219b7-bba1-4b7c-8717-498406fa2159" data-file-name="components/cart-summary.tsx">
            <Package className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600" data-unique-id="62d42453-9ef6-4ed7-992c-950a980d8ed4" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{cartItems.length}</p>
            <p className="text-sm text-blue-700" data-unique-id="3387b363-261a-4686-809e-c83ad20d4805" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="c5a3833d-999f-402a-9da9-95580bdced80" data-file-name="components/cart-summary.tsx">Jenis Produk</span></p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50" data-unique-id="2ce841ce-3eb2-4912-8806-b44200ae85a5" data-file-name="components/cart-summary.tsx">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600" data-unique-id="6916e92d-51f8-42ec-aebe-476d3a075103" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{totalItems}</p>
            <p className="text-sm text-purple-700" data-unique-id="2ea8eae1-7aec-4dcb-acbb-f31d8e413199" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="9d42e610-492d-45dd-9046-0bf92e736657" data-file-name="components/cart-summary.tsx">Total Item</span></p>
          </div>
        </div>
      </div>

      {/* Discount Input */}
      {cartItems.length > 0 && <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="4d1e2cd8-091c-4a6e-9b6f-6f1d24feebca" data-file-name="components/cart-summary.tsx">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3" data-unique-id="8272c9e3-ecbb-4b6e-b37e-dd861919787f" data-file-name="components/cart-summary.tsx">
            <Percent className="w-5 h-5 text-primary" />
            <span className="editable-text" data-unique-id="c1ff7a20-b606-4683-b941-2ff3c42bbf6f" data-file-name="components/cart-summary.tsx">Diskon</span>
          </h3>
          
          <div className="space-y-4" data-unique-id="596c57f7-3843-4a54-9513-aa0bda95bd7c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
            <div data-unique-id="dfe0dccf-705d-4ef8-bb48-164c5f05f06c" data-file-name="components/cart-summary.tsx">
              <label className="block text-sm font-semibold mb-2 text-foreground" data-unique-id="b7df23a9-6023-43e6-80ff-89ac75ba0d12" data-file-name="components/cart-summary.tsx">
                <span className="editable-text" data-unique-id="4d7e57ea-bed4-4653-8bbd-d62f77c36a82" data-file-name="components/cart-summary.tsx">Diskon (IDR)</span>
              </label>
              <div className="relative" data-unique-id="e787f301-5dce-4c98-85cb-d8f9d2643741" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <input type="number" min="0" step="1000" value={discount || ''} onChange={e => onDiscountChange(Number(e.target.value) || 0)} className={`w-full px-4 py-3 rounded-xl glass-effect border transition-all duration-300 text-base font-medium ${discountError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-border focus:ring-2 focus:ring-ring focus:border-transparent'}`} placeholder="0" data-unique-id="6f522c51-debb-4957-98ab-eb6808aeedbd" data-file-name="components/cart-summary.tsx" />
                {discount > 0 && <button onClick={onResetDiscount} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors" data-unique-id="05575a7e-0921-4dc3-80a0-b54a038b860a" data-file-name="components/cart-summary.tsx">
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
            }} className="text-sm text-red-600 mt-2 flex items-center gap-1" data-unique-id="f0f3dbc2-5700-45e5-a87d-41c2aff04e4d" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="9494e8df-a358-48db-85e3-00deda4adf5e" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">{discountError}</span>
                  </motion.p>}
              </AnimatePresence>
            </div>
            
            {discount > 0 && !discountError && <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200" data-unique-id="4e6795cb-02eb-4a2c-a331-b7c86214b603" data-file-name="components/cart-summary.tsx">
                <div className="flex items-center justify-between" data-unique-id="f7177a06-00ba-426e-a23f-dd43290e3a6c" data-file-name="components/cart-summary.tsx">
                  <span className="text-sm font-medium text-blue-700" data-unique-id="97ba3eb2-02ca-4f00-8c8e-b345cc279835" data-file-name="components/cart-summary.tsx">
                    <span className="editable-text" data-unique-id="b7041f63-9680-46bf-898c-44f2005b2091" data-file-name="components/cart-summary.tsx">Diskon diterapkan:</span>
                  </span>
                  <span className="text-base font-bold text-blue-600" data-unique-id="0780e10f-02e5-4925-8ff3-ae2ef3836103" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="6d1add35-e582-40c9-b20a-8355cb235033" data-file-name="components/cart-summary.tsx">Rp </span>{discount.toLocaleString('id-ID')}
                  </span>
                </div>
              </motion.div>}
          </div>
        </div>}

      {/* Financial Summary */}
      <div className="glass-effect rounded-2xl p-6 hover-lift" data-unique-id="22c8e0b1-ed4b-469a-a98c-cc7dccad3327" data-file-name="components/cart-summary.tsx">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" data-unique-id="8c51dfbf-7b6c-4b2d-b46d-be2ca524c472" data-file-name="components/cart-summary.tsx">
          <Calculator className="w-5 h-5 text-primary" /><span className="editable-text" data-unique-id="e6067564-70cf-4203-932b-47bbd79a3c61" data-file-name="components/cart-summary.tsx">
          Ringkasan Transaksi
        </span></h3>
        
        <div className="space-y-4" data-unique-id="8a4f9a98-a242-4c9c-ba5d-0d39eb142be9" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-center py-2" data-unique-id="651d6613-aa97-48ab-a9b0-c64c613c411f" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="131a3629-0296-4556-bf07-42c072465c08" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="f7ad736a-1460-45e7-871c-3418a4358d18" data-file-name="components/cart-summary.tsx">Total Modal</span></span>
            <span className="font-semibold text-lg" data-unique-id="bb840aab-a37e-4e55-9b47-849101703986" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="402f1099-cecc-4f63-b4bd-de3198facaf7" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalCost.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-2" data-unique-id="83247777-ffd2-49f9-9bbf-dbb6e5ca544a" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="e6fca7dc-53f4-4679-a323-3c628ee622a6" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="ff94ae61-e040-40ee-89cc-bf7ea9e03c8f" data-file-name="components/cart-summary.tsx">Subtotal</span></span>
            <span className="font-semibold text-lg" data-unique-id="4d115920-8038-4ec7-ab0f-a55398c6238b" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="43784d61-7056-41a8-a199-5162f213914c" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalSell.toLocaleString('id-ID')}
            </span>
          </div>
          
          {discount > 0 && <div className="flex justify-between items-center py-2" data-unique-id="36715e42-fad1-41ac-b58f-6227fb436592" data-file-name="components/cart-summary.tsx">
              <span className="text-muted-foreground font-medium" data-unique-id="169c790d-30de-4618-8db8-d56d244774f5" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="b1c49f03-8da5-4ade-bf5a-2da513f3fce9" data-file-name="components/cart-summary.tsx">Diskon</span></span>
              <span className="font-semibold text-lg text-red-600" data-unique-id="67f7516e-f515-45d7-bfcd-804f8e0af228" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
                <span className="editable-text" data-unique-id="432d41e0-2089-44a3-8659-f7450d069a1d" data-file-name="components/cart-summary.tsx">- Rp </span>{discount.toLocaleString('id-ID')}
              </span>
            </div>}
          
          <div className="flex justify-between items-center py-2 border-t border-border" data-unique-id="1d8534c6-c811-475b-a135-7bc4a6d3c9ef" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground font-medium" data-unique-id="d597045f-5a95-4a9c-88fc-b4ab452d881b" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="45a9ad4d-7fab-400a-8104-54c277ab338a" data-file-name="components/cart-summary.tsx">Total Penjualan</span></span>
            <span className="font-semibold text-xl text-blue-600" data-unique-id="14b6e371-9c9c-4154-8a5b-193f433da557" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ce3ae875-d43b-4694-91d8-6df6e5e65fe0" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalTotal.toLocaleString('id-ID')}
            </span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-border" data-unique-id="b2030005-d8fc-4a44-a885-d0f4e9bce4de" data-file-name="components/cart-summary.tsx">
            <span className="font-semibold flex items-center gap-2 text-lg" data-unique-id="3b6eeeba-8360-4bec-bc6e-ff92e722c4e2" data-file-name="components/cart-summary.tsx">
              <TrendingUp className="w-5 h-5 text-green-600" /><span className="editable-text" data-unique-id="86fae08e-9de4-4b8b-a615-f1d7fa42929e" data-file-name="components/cart-summary.tsx">
              Total Keuntungan
            </span></span>
            <span className="font-bold text-green-600 text-2xl" data-unique-id="b3e4a68f-860e-495a-a069-c64526dde5fe" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="19d842e1-5985-4c7f-bfc5-53510c26265e" data-file-name="components/cart-summary.tsx">
              Rp </span>{finalProfit.toLocaleString('id-ID')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="glass-effect rounded-2xl p-6" data-unique-id="eaa99704-0915-4394-b4a5-5836a6475746" data-file-name="components/cart-summary.tsx">
        <h4 className="font-semibold mb-4 text-lg" data-unique-id="84070ab6-422d-4ad6-ab3d-54666135b33d" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="acdf380f-8c39-40e7-98ff-85a5e4b336fb" data-file-name="components/cart-summary.tsx">Informasi Tambahan</span></h4>
        <div className="space-y-3 text-sm" data-unique-id="079c8f98-1a69-40b6-9d80-b2f64e0e41f0" data-file-name="components/cart-summary.tsx">
          <div className="flex justify-between" data-unique-id="7fdc078a-9eab-4c23-b8c7-7eb190db493f" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="84cb03b7-58a1-464d-ac4a-781e4c0b3ccb" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="26c571bb-0483-41fe-91b5-8b90ecd39c3e" data-file-name="components/cart-summary.tsx">Margin Keuntungan:</span></span>
            <span className="font-medium" data-unique-id="b7bb581b-2061-406e-bc80-393942bf6c2f" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalSell > 0 ? `${(totalProfit / totalSell * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="d8f337b6-e592-4d46-815b-ec65b3e155cb" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="e4ed6f44-9c6f-4cb4-a6b5-f15e7f322fa7" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="66f9389f-2cfe-4f73-ad61-f52e5d232846" data-file-name="components/cart-summary.tsx">ROI (Return on Investment):</span></span>
            <span className="font-medium" data-unique-id="dc992eaf-4aaa-419c-a6d4-49b326d6b58b" data-file-name="components/cart-summary.tsx" data-dynamic-text="true">
              {totalCost > 0 ? `${(totalProfit / totalCost * 100).toFixed(1)}%` : '0%'}
            </span>
          </div>
          <div className="flex justify-between" data-unique-id="e57090b0-ee31-4dc0-b72a-2a1aaa386a6e" data-file-name="components/cart-summary.tsx">
            <span className="text-muted-foreground" data-unique-id="411c8d3c-35cb-43bd-b3e2-e5e281dfda98" data-file-name="components/cart-summary.tsx"><span className="editable-text" data-unique-id="b54b253c-9272-4803-aa79-b0a7bcc3295e" data-file-name="components/cart-summary.tsx">Rata-rata Laba per Item:</span></span>
            <span className="font-medium" data-unique-id="860df64e-1acc-416c-ba44-f42315b9350c" data-file-name="components/cart-summary.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="64845cdd-11a8-4b2d-959b-606af32da6c3" data-file-name="components/cart-summary.tsx">
              Rp </span>{totalItems > 0 ? (totalProfit / totalItems).toLocaleString('id-ID') : '0'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>;
}