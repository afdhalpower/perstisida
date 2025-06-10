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
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="731e16ba-7a4a-4344-bcb8-6d669df943b1" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="7781ea0d-928a-4245-b3cd-e8e946b0dff2" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="b4e726cd-b333-4b66-bbc3-12c0ff9ef3fd" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="7e09b440-cbde-408a-8128-11710a162cd5" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="f19692f8-4536-46ff-a77e-558d96f511cd" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="5bb84888-fd80-4274-8bb1-fba7f35f84ed" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="92d4eb09-1f18-46bb-a1c7-76fab2725e48" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="06f6d2f4-75aa-4f57-bfa6-0112accc0fad" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="4affba66-5c61-4718-99c3-6ae173e23f40" data-file-name="components/cart-item.tsx">
              <div data-unique-id="39105de2-d646-4448-8662-6e0e48c6b5ba" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="8df2dd01-8ef8-4ca8-98f0-ff5f612d3393" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="66f25243-71df-412d-ae27-c42c9bfcd2f5" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="081d1b22-3ca8-435a-a95a-09880170291a" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="cbdf0c0f-0a13-4ba0-86e3-21a5af58c1e1" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="ce2f9dc6-ae23-43b4-b503-5dd71e3a8660" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="d5f3468c-3915-411a-92c2-fa5935d93205" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="ebe740a8-fcf7-4bd9-be43-266d433e274c" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="44fcb454-96b1-437e-851d-287f13e7c9af" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="217c49a0-1e85-45de-9668-439b49ccb3fc" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="d5c109e2-88a2-4fa5-8a2f-97e24b40617c" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="bb756ac2-e5e3-4902-9c6f-28681fc7df88" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="9d147a2b-1b2f-4243-b6ea-dda16b454420" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="10901d60-6212-4ffc-8a3a-85b5334dbaf4" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="de4c9435-3724-4d33-b1d5-d73f0b8c6b7f" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="6c0fa12e-40f0-4a82-b491-7efe5e4d0f8f" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="0e06ba62-f667-4515-a5e5-732b46ac1dfb" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="0ef9163d-c69a-4070-820a-d1cab70be07b" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="9bc8edec-1cb6-43d4-9b71-09219e24a1c2" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="ae88cafc-f27d-48aa-aa2b-81acfef16605" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="4bcededb-34ef-42ea-a7b1-44dd05e766bc" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="43619581-df27-4109-b82c-30f3a0e69b1d" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="73dd66e5-2ad5-476c-a7f1-2e62c875dfec" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="ff8c76e4-caa3-4893-94d7-d479ba11e6f2" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="9360bf41-f0d1-4b40-a3c3-6bddd0796e75" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="4df33c0c-b46e-4bfb-a0af-c2a07cbcbe35" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="abf09847-3fd5-44df-95dc-fe67041a385a" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}