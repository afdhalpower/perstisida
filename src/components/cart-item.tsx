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
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="02229e62-5b2a-4012-95d9-52c95608e38c" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="178fe500-5431-403a-9888-8598558c1277" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="3f704d27-13fd-45d7-b822-823d1be0280d" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="b946b5e7-5d60-41f6-b091-f48547391738" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="f8a775ef-5478-4f6d-94a0-4a7ba84e3072" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="9057608f-c51c-46dc-918d-40189c605407" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="eb0f4b94-60fa-40d7-896a-335070922abc" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="d0f1f423-4f8f-44e3-81d9-8c1358e82086" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="e28f349a-6c77-4eb9-a0c4-b4a4c527b3ef" data-file-name="components/cart-item.tsx">
              <div data-unique-id="35160275-19b7-4576-ae9a-4680002b10a8" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="ec732b53-de1f-418f-86dd-86707c14c084" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="911117d9-ed77-4be8-8b7c-bd06bbb24cc5" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="213cf891-3a09-4a96-8cac-2ba7f900eee8" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="56f06002-2079-4e4a-89bb-13f645a415b6" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="ef0beeac-b7ef-4922-831d-a98810eb8953" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="c0021b9b-b56d-410e-a106-650ff34a2423" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="ef10b32f-ca0d-466a-9824-6f8f77657b49" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="c525253e-8827-4a99-a77b-edcefd6355d1" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="3b2329ca-1ffa-4720-a090-65c91d624c24" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="6b8a3a4e-5d56-42c8-a210-92714ab29476" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="67412e80-7f2b-449e-a1cf-4d4f1711eba9" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="7d910adf-c9cc-4c1f-a7b4-039a96a449ef" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="b434510c-3b9a-430a-9947-2dfe46885ca1" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="491de2b0-d1be-4d1d-bd24-7aa4bd5bfdea" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="327b7681-b0b0-4110-b6d7-b73f2c0a89a5" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="00190fcf-a0eb-4a46-bc22-7d0585d8a39b" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="7cfdd298-7897-4d69-9b20-be58ac847c6a" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="7b8d2f51-bdd2-41c8-b7de-49d9348db08a" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="10d7e3ae-c175-4e83-8d48-ae8dbc19ac4c" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="fe59eff6-5a48-41eb-aef2-37111fd50a27" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="fdc0e201-ad5b-4005-a10b-472cd410b9a4" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="99923ca0-6c9d-46e9-befb-f1a327214864" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="f8e56385-80db-430a-8b77-7f9ab9c6001c" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="f30fe977-02c2-4ea5-a457-729b32fa5a5a" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="21566be9-6cf4-4352-8fcb-fdf8f6cc0f15" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="374e4c54-c12f-4b82-ace8-b919cc5fdd77" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}