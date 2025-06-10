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
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="0d2f59d0-06ba-4e75-9b16-e46194d8f241" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="9891acaf-8bf0-44f8-b7b4-3d79a5ec07b1" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="9903354d-5d04-4f23-904b-9061ddf613ed" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="40d6fcd7-a7b7-481b-b642-7823db16abe4" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="235edb64-3134-41a6-b19c-b34e2f7fa7d6" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="1050dd49-17d1-4e36-9b58-df471c77fb35" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="97652042-d362-4d2d-a906-c4ff8116fd35" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="55683117-d4ec-4783-976b-3a58cc287da9" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="6842bcdf-9e3c-4fad-9af4-024d64d8c43a" data-file-name="components/cart-item.tsx">
              <div data-unique-id="3333848c-f259-44e6-979b-8b2da322c8c5" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="2f4a6799-8ec1-4bdc-8fd5-d834a977959c" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="bdcd5193-c95d-4cdd-a739-26c5592e29d5" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="ef038fe2-16f1-42a5-b5b0-bed4b0198935" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="41234790-a791-43e5-8583-0a42b71dbac7" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="469c12f3-82bf-48e0-a7f0-235986c2257d" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="ea3a0dce-ced7-4931-aac1-4651effacfb3" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="52156f05-e2ee-45eb-beb8-3945acc137f2" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="46d0ad08-9e73-4429-a9d1-849b676413b3" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="c85d3331-69d4-41a8-8992-27c4bd5adae7" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="c7202fe5-85de-48ed-bf21-155fa55c7c85" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="78a63fa1-ddc1-42f7-91d9-04329c034ce5" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="91442ab6-688f-4414-bc5b-80b282383be6" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="c6a6334c-e61c-4b79-bc18-b6430d6d0723" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="ca0b87ec-8113-4803-9e8f-a283f1b65923" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="3e48252e-274e-4514-96dd-aab314a26d97" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="04c04066-73bf-43d6-9f7d-d82075ddcf61" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="6b593cf6-c725-4de3-b1de-5ee8fad434c9" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="c0dc7ede-2ae7-4051-ba0f-3c0b3deafd44" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="cffa8ff1-bcf5-4d7e-a671-e93722764596" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="4ed46380-8697-4061-a4b0-aa8b0c220988" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="60a301fb-05a2-4e26-851e-016db8d2ef76" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="9012be88-6041-41fa-ad73-07d897d884a5" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="82a4bf57-6107-4401-83d9-10f8a3616e93" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="fc6fe275-032a-4a6e-8a27-bad16311f791" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="2acabafc-2ffb-446d-a872-793c8d76451b" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="1570beb0-2470-46f8-800e-26a81561af40" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}