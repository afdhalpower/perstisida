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
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="d98d59ab-ea0a-4a63-ac8b-776eedc94496" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="472e7cea-d4f5-4e29-a044-7b8efc70303f" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="5029fbab-f73c-4b09-9e6f-9603a34ddab9" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="47438d97-af6f-4433-ba2f-5b956edbf243" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="110637df-abec-49c0-9604-1a2a951edc3c" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="1d778d8b-9517-4bff-815e-2cb2e4c66a05" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="81515ad7-b14a-4a29-b8a7-8c7d5c36741e" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="9512688a-66d5-4963-838f-7e3007b484ff" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="2d9fecf9-0324-452d-a1e2-eb1b59258f03" data-file-name="components/cart-item.tsx">
              <div data-unique-id="bf307bbc-a3e1-4260-bf89-569b47c5a933" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="0ee17570-c66d-4cd4-96b2-6c52a382c52f" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="eb1c0d7e-c2f4-4dc3-82b9-7510a0cc72d9" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="5505228e-e93c-405f-ad15-0016a0f14c65" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="b442f1a7-7afb-4762-a4a7-3385c45c5ce9" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="c3884f13-7ab1-4e57-b521-fc75f5b2f1b5" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="96fef509-973a-4b88-aca3-be651eaa2118" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="f59637ac-9734-4e0e-8710-62f5cadfb4e6" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="d7ee60e6-dda1-413d-91f1-9471d1671192" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a0d82548-fdb6-4c6d-a4da-139ccb984f51" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="23b6cacf-c7f0-4c85-b0d8-421f7ec6a76f" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="8e1b9afe-22d7-4bbb-84ed-c1bece60f5bd" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="c7e06e2c-5f46-4b03-9644-87f2c1cae401" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="6255c2e3-0aa3-4875-8bbe-53a94323b9a0" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="2e13e82a-3fa1-4ff5-8889-c0da1effe0b7" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="55902c50-1b69-4fe7-9bd0-d7bfab0c5fae" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="69cfaa1d-27d9-45e9-b26e-9c2849b21cf3" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="bbd8f8c1-50c6-4580-a074-1efacd534054" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="e0a5dac5-f03f-4c09-9811-9f3444d03b3d" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="c9ccba12-b125-410e-9992-0f974715437e" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="9d801d19-ef2b-4424-bc8e-c4d0f0fefdde" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="92d4f3e1-06f5-48cb-ae14-c44b2212cadc" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="06600ff4-dec9-4275-994a-5f2c6cdb1c47" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="de5a07b4-c406-49f6-ad4e-d79700abd6a5" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="703485e3-e542-4d6d-9004-31f4b1d45a2d" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="32d3e741-f0ca-4ddc-aada-80c975f223fa" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ccde9bb9-f843-4547-bc7d-bf2ff7d568a0" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}