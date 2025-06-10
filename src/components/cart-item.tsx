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
  }} className="glass-effect rounded-xl p-4 border border-border" data-unique-id="1a4c2252-6acb-49e7-bb7f-45b911a44744" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
      <div className="flex items-start justify-between" data-unique-id="4123d7e3-7649-4add-b06d-eba0c1afcfaa" data-file-name="components/cart-item.tsx">
        <div className="flex items-start gap-3 flex-1" data-unique-id="233557df-1ed6-4678-afa4-2428ebc56fa1" data-file-name="components/cart-item.tsx">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="ac5fb35a-ce81-474b-afe7-d687c0116da1" data-file-name="components/cart-item.tsx">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1" data-unique-id="866fe0e9-30d9-4f99-85ac-263359768211" data-file-name="components/cart-item.tsx">
            <h4 className="font-semibold text-foreground text-base" data-unique-id="1bdf309d-2491-4692-b24c-ca1d8cfdb714" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1" data-unique-id="3eaeacb9-4c0c-4676-aeec-21b8f470bcf3" data-file-name="components/cart-item.tsx">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground" data-unique-id="5eb7b5bc-e889-40a3-ac7e-77da75dc4f9f" data-file-name="components/cart-item.tsx" data-dynamic-text="true">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm" data-unique-id="79f0d454-4651-48f8-b61a-ee0400dc0924" data-file-name="components/cart-item.tsx">
              <div data-unique-id="62f16696-306d-46d3-bda8-a9be110340a5" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="62289df6-8e30-496a-970e-075fbde664a2" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="6644c7c0-9e57-42cb-b223-0546ccd0d688" data-file-name="components/cart-item.tsx">Modal:</span></span>
                <span className="font-medium ml-2" data-unique-id="b9e248ef-d73e-4562-8b36-c02992656c8f" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="37b254ba-2a4d-4ee0-bd97-f04dbab39544" data-file-name="components/cart-item.tsx">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div data-unique-id="95e43770-a4ce-49ce-8165-b82c994cda31" data-file-name="components/cart-item.tsx">
                <span className="text-muted-foreground" data-unique-id="e4ac15aa-7425-424d-a48f-981dde4821f7" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="ddda8957-8b7e-4b52-a2ed-3295b0e10c30" data-file-name="components/cart-item.tsx">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2" data-unique-id="0a0fa5f2-9e7e-4eac-9b23-c66501f8b00b" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5ef0b2e2-2938-420d-ae20-254d7f5c459a" data-file-name="components/cart-item.tsx">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3" data-unique-id="43fe07a0-f724-4865-b949-f9c47d8ec741" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2" data-unique-id="5fc49313-8449-4936-9654-ba4aa0a2d9f3" data-file-name="components/cart-item.tsx">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="4c11f6c0-e56e-423a-961e-556bc415cec5" data-file-name="components/cart-item.tsx">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base" data-unique-id="048eb37b-7cea-4e8b-8273-1c1eb9c514c7" data-file-name="components/cart-item.tsx" data-dynamic-text="true">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors" data-unique-id="11fecef5-a013-42e0-a00e-367a93b7ff39" data-file-name="components/cart-item.tsx">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors" data-unique-id="a889214c-1111-4cd6-b631-aefa59bfbe15" data-file-name="components/cart-item.tsx">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border" data-unique-id="216db23a-7cb8-4601-9bfb-4bfb9bc86515" data-file-name="components/cart-item.tsx">
        <div className="flex items-center gap-4 text-sm" data-unique-id="edb3398c-f4d3-46bd-9d87-f392acfed37b" data-file-name="components/cart-item.tsx">
          <span className="text-muted-foreground" data-unique-id="9be77d3e-9821-41f1-bd93-cf14ebb0b9bd" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="6ecad56a-b0fb-4bb7-9cd5-3630bae7eeb3" data-file-name="components/cart-item.tsx">
            Subtotal: </span><span className="font-semibold text-foreground" data-unique-id="a30edfc0-6d91-422b-9da7-7fc1ca44f363" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="12c9301e-d899-4371-8807-cebb85467f6b" data-file-name="components/cart-item.tsx">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right" data-unique-id="b9a7c79c-808e-4f75-95b5-1e0a82adc181" data-file-name="components/cart-item.tsx">
          <span className="text-sm text-muted-foreground" data-unique-id="1376fbbf-91f9-47b9-83a2-a37dcb146b20" data-file-name="components/cart-item.tsx"><span className="editable-text" data-unique-id="a5fd3cad-b4af-4c3b-ac6f-557f162f81cb" data-file-name="components/cart-item.tsx">Laba: </span></span>
          <span className="font-semibold text-green-600" data-unique-id="6c7f1c74-934d-431c-8a88-baf9d1301936" data-file-name="components/cart-item.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="88b5d3cf-4eae-4e92-84b9-f042d8063fb7" data-file-name="components/cart-item.tsx">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}