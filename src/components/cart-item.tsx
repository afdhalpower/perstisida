'use client';

import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, Package, Building } from 'lucide-react';
import { CartItem } from '@/types';
interface CartItemProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}
export function CartItemComponent({
  item,
  onQuantityChange,
  onRemove
}: CartItemProps) {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      onQuantityChange(item.id, newQuantity);
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -10
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="8ccbcbb8-2074-4e07-94cc-6a6960103e1f" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="14a27d73-87b9-4398-84c9-858cc7b6c360" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="74673325-decf-4444-88a0-68c430e99ea0" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="774ab9ab-ad2d-4d69-bdaa-10df5840f8e5" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="f919469c-0d57-40f1-8cb0-f69d042f952a" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="6279d615-9e00-4c3b-8fbc-732dc3c5f8d4" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="b42a0f35-ca0e-4638-8644-c4565b0ca7f9" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="c17a9b31-c44f-40cb-8b95-d761a5ea1d18" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="3a4f3171-974e-4bea-9916-bee4a79888a5" data-file-name="components/cart-item.tsx">
              <div data-unique-id="b465f1a4-f80b-4ad8-92d0-d2109376857f" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="b69e0b7a-fc66-4867-9f39-2fe9ec56955e" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="ce06489e-8f26-4eba-84cd-bea0220f0253" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="0f57bdd1-929b-4dac-bebe-b35a6a21adb0" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a64497e2-0284-4eb8-a4d9-12a40ecd7141" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="885c4893-e0bd-4281-bdd6-985dfbdd9a0b" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="831ac4ff-2a77-407c-b4c3-47467230be2b" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="5e416bcd-a97c-4eaa-89dc-ad619e2de40e" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="7108f888-c593-419a-ba24-bb95646254de" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="1f1441b1-4e35-463f-acf1-3f7feef44bc2" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="431bb600-e6f3-4505-aaf1-364a6c308dfe" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="295f5738-0bae-4beb-94ff-4cdd96f3cf74" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="d92b90b7-8481-4d3e-9570-8c90e616ac55" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="259a8637-1f65-42bd-9736-5d38646a6b9b" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="b2b41b6b-e53a-4274-ac30-4bb7f254c7ff" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="29104baa-41f7-47bc-8628-ea9bf291811e" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="346605a5-2bf8-4e6d-8c53-ed0a0c3f677a" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="9ea6f80c-adbc-4c5e-a6f1-df4d78ee9530" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="06b64f21-28f2-4256-bc37-b7c0e30680a0" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="961a208a-9c2b-45be-aebc-c7eb004efa97" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="81adaf6a-9276-4f5b-bcc5-5a08ba68717b" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2430be2a-43fd-4c40-a6f9-a961d93c119d" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="3f7f4916-0d03-47db-862a-59bdd9cb1fda" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="16cb33ec-8a5f-434e-a4a3-50937fbc339b" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="9947fb49-dca3-493b-baff-4f35f3d4db7c" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="d7999a5a-720b-4415-8f68-9b79491ddc19" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e7fa2543-cb1f-4b47-8378-a4e3ba79f016" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}