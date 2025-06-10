'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, ShoppingCart, History, LogOut, Menu, X, Leaf, User } from 'lucide-react';
interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}
export function Navigation({
  currentPage,
  onPageChange
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  const menuItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home
  }, {
    id: 'products',
    label: 'Produk',
    icon: Package
  }, {
    id: 'transactions',
    label: 'Transaksi',
    icon: ShoppingCart
  }, {
    id: 'history',
    label: 'Riwayat',
    icon: History
  }];
  return <>
      {/* Desktop Navigation */}
      <motion.nav initial={{
      x: -100,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="1f513673-a18b-4797-878a-044e0d43ce25" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="f5a129fd-40da-415e-a021-14b8e4d13d08" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="3f4471e3-8a53-4dc0-bb16-580f05909525" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="aaf2e1c7-e992-4238-9f21-66358ef2452f" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="45b8813a-03d5-46cb-9031-749d00b65812" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="0ab445ae-775f-4cd5-8fc3-b86a509a4f4a" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="169f459e-d5c1-4b6f-b47d-053e6dc6c7fc" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="98ec6b61-e5b0-4295-90a0-7ff27cdce7a1" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="1dbb5caf-7ede-4fe4-8039-2fe7a443e650" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="4e513591-1314-4701-92b4-cb25a702ad90" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="b7d84afb-bf6e-4b6b-8429-63a24b5d2878" data-file-name="components/navigation.tsx" data-dynamic-text="true">
            {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return <motion.button key={item.id} initial={{
              x: -50,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              delay: index * 0.1
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="aea93988-04a1-4d46-aa52-b470ca6ac5e8" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="ffdf59b1-0d87-4e63-b5dc-098e6e1be766" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="b3ea3726-9218-4a64-8618-4ccf144d013d" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="447b0de6-3327-4f99-9093-d54eae77157e" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="55f63f60-5ff7-4bdf-b90e-22d94e413ad7" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="5102d43c-0575-402c-9e02-85789313de5d" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="4d023d23-0c07-4357-805a-f52c51e6f064" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="3527702d-3517-49b3-bde6-4f416deeb96d" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="c63cad64-9cab-406e-85ef-59d52a71c158" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="9ecba8bb-87f9-4afe-bca0-cbc5d51ea0f2" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="6cd2d972-7aab-49dc-847a-2ce24ecebcfe" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="cb2d7a6d-206a-450b-9b28-3b261ecb32e1" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="774d9b82-2a4a-4c87-8dc7-e97e5a678b60" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="0ac0ff81-81fc-4ee2-abe6-2df1d0353969" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="412ec644-ca8e-4a98-a79d-3a899d88351b" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="98cbc03b-0bda-4391-8104-eba21d2b19ed" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="aafc585f-f88b-44c4-8cdb-fcdb07ea9488" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="376f7a86-5773-4fba-9544-e34a0ff323a4" data-file-name="components/navigation.tsx">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="17a7d3d1-868e-4daa-a344-ba5b9e5b66fe" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="bf4d7c7a-4abc-4398-a894-a8abaac64d83" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="41394c0d-b073-4513-a2d4-910858281d00" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="88f1daf7-5f92-4043-89c1-dfcd7425ffea" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="16a448bb-b9d0-4b76-83b5-8fd879e4ef14" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="943d0695-7aad-4dde-b5cf-27e3f541d7c3" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="36240b41-6aa0-4ba6-8699-13670cdf4969" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="da002806-2a3a-4ed7-bd73-e4c9012b6bab" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="2faf7f2a-b1a8-4ea1-ae7c-619507ee0573" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="35eb56f5-0640-4b81-95dc-22ff25cc5670" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="686fcd0d-dcb9-45fa-8c0b-9b6485aed708" data-file-name="components/navigation.tsx">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium" data-unique-id="d768310c-abe2-45e8-be42-08b58d8c6ea0" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="025327f8-2df7-4ed2-a39f-7370129e65fc" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="e8648e25-eab1-40c7-a319-d121531caf3d" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="3b0e5f63-a268-495b-a57c-b2a03a79d8e5" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="53d4094b-ffdc-4b46-ac5e-ae86e7f0508c" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}