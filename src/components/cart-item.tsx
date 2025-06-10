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
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="9caae4b9-501c-40b3-9200-61eeea59f986" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="f3a44dad-5b0d-44aa-9c72-c3e1cca65c36" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="7622a62b-ad48-40fb-ae85-e9f1d34fe287" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="8a78ae49-1d67-487a-bca3-2e5a2e69ab59" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="16b73a60-a91b-4068-a8d8-4300f18e6ec6" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="e05d456b-7122-42b6-9c68-07eecc1aa1e4" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="5b1e916e-d0e3-498e-8312-33a0cdea3556" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="894ab374-0801-4c4d-a9b2-12bf30f19460" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="9a5235bf-7eb1-4b0a-aec9-8c2a67a523f3" data-file-name="components/cart-item.tsx">
              <div data-unique-id="ea9eb932-e84d-47ae-9eb2-5fda91d3eba9" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="c0324796-f84a-4d50-872c-d76dd5b186a3" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="3265f118-c64e-4845-a880-f00f77e11519" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="b3bae3cf-26ed-4198-8e56-202b1d8ab6ac" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="03bca6b5-5e55-466a-9fe6-ff985760d139" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="e7ffb9cf-d141-4290-8684-12c9a6a739fa" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="50daf150-a153-4592-9245-9fc4d7c1e783" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="c9ea5bea-83bd-439d-a23e-1e96ebd08e86" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="31f59cb9-2f94-4cc4-976d-6f904bd65868" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="abe650fa-39fb-488a-ad59-7971b9f63b2f" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="97bd1365-d8e7-40c5-84bf-5656694ac265" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="466f424f-f4cb-4bf3-a467-e957cc03d6dd" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="0fe5c6cc-10e3-48b1-b3a8-cc10e99aa9d9" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="2caaed77-7bd4-478f-80dd-0764ec248552" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="38665b6a-98d4-4955-93d8-63837bef8da4" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="f193258b-e59b-418e-abe1-6a560cb3f32e" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="0a60562a-9d7f-417c-9054-abb103bec638" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="26bf5524-8334-4d67-939b-28d35215761b" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="c889ac71-972d-4ae8-a824-2a5106b5155d" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="2c3aa6e9-61a0-4ffa-933a-b9f5c9549fe9" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="c9341f68-71f6-447e-bc15-9ae6c6cb86d8" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="8b0979a7-d598-46cd-8c6e-8289118468c5" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="bdbb1e3a-a2ee-4195-b501-46a10afccaf3" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="33a2d2f3-9ff6-4c54-9276-1eb0eee2b886" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="d0bace06-a550-4f77-be6b-6fbe279a3be0" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="4eb3b91e-bf6d-4f2d-a0c4-9824c7c53685" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="741f1f80-1ae4-40ba-a276-13eae5417f67" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}