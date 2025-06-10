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
  }} className="glass-effect rounded-xl p-4 border border-border">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground text-base">{item.productName}</h4>
            <div className="flex items-center gap-2 mt-1">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{item.company}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
              <div>
                <span className="text-muted-foreground"><span className="editable-text">Modal:</span></span>
                <span className="font-medium ml-2"><span className="editable-text">Rp </span>{item.costPrice.toLocaleString('id-ID')}</span>
              </div>
              <div>
                <span className="text-muted-foreground"><span className="editable-text">Jual:</span></span>
                <span className="font-medium text-green-600 ml-2"><span className="editable-text">Rp </span>{item.sellPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors">
              <Minus className="w-4 h-4" />
            </motion.button>
            
            <span className="w-12 text-center font-semibold text-base">
              {item.quantity}
            </span>
            
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={() => handleQuantityChange(item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border hover:bg-accent/50 flex items-center justify-center transition-colors">
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors">
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Item Totals */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground"><span className="editable-text">
            Subtotal: </span><span className="font-semibold text-foreground"><span className="editable-text">
              Rp </span>{(item.sellPrice * item.quantity).toLocaleString('id-ID')}
            </span>
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted-foreground"><span className="editable-text">Laba: </span></span>
          <span className="font-semibold text-green-600"><span className="editable-text">
            Rp </span>{(item.profit * item.quantity).toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </motion.div>;
}