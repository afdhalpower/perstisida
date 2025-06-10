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
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="176001c3-4302-44e0-aa61-5ce6b375474f" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="9a9b730a-6fe8-439a-ae2b-2553f8f01837" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="224cecdc-cbef-496d-9dfc-dba2bbb009e7" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="05bbbe17-a823-480f-802a-d35cc5ef6e5a" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="70ff92cf-d5ac-440b-b591-298541d913f3" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="6bf0b518-3ccf-4caa-bbf9-e26bedbc145e" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="bb24a3ff-11a4-4320-a7aa-8afa5f2c31b4" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="80bbf52c-7aea-4599-93da-0161ee0e0d45" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="a8038521-6113-4d7f-ab43-1dabc013e878" data-file-name="components/cart-item.tsx">
              <div data-unique-id="6b0ec234-223d-4089-92f3-a30e093bdd8c" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="a8f00573-3545-41b3-ad5b-9d293d06f185" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="036b647f-c9fb-4576-a750-2c92275db948" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="e7ba50fe-d215-4d93-80f5-fb8a67ad295c" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b2f8b1fc-774c-41f9-8bd6-a2f1d5a5a279" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="11bbf950-1c00-4b0c-9c42-9b977c390aa1" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="cbd4f18d-4f31-489c-aa80-d1c236a0bb4d" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="4b5ed746-2663-40ef-adcf-e47dceab121b" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="055b0611-2450-412c-9b9b-5a86da4a20b3" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ac515674-754b-46e0-87f4-01572520f202" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="a174a3ef-0581-41e8-9fcd-3300fd5759e7" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="bc9591c6-aeb0-4bd4-bb92-b4f237afebeb" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="722f7a05-4e36-4500-af88-e7114d2ac768" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="6a331c93-6a0b-408e-98e8-f089f31ae705" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="437f9447-974d-46fb-9f84-a32112a2cd08" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="88c6380e-f83e-403d-9fcc-2757233a861c" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="9a6b8a07-ad4a-4b78-82cd-78bd1e33cf04" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="516bf442-280b-4a26-abe7-1e1ceaace984" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="34e9fb2d-735a-4296-979e-90e0429024bb" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="e7a05af6-7eb5-4834-a0eb-c9eca2fa28c7" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="e0bf23a7-4fbb-4e53-bb74-0e99651739a7" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c1cfc9a8-f6e3-45c2-93b6-e21e8bcffd34" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="25814202-d832-4c05-b70c-607e605de51b" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="a7081ecc-b311-4bc2-ab93-4442b33d16b6" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="d4016b3c-eb93-4b8d-82ce-54255546490c" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="869bde7e-fdcb-4bd2-ab3b-46a24504248c" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="dfd6438e-c573-4bd9-9f8d-278ab2596657" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}