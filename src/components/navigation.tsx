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
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="041a9444-a464-4644-9c72-d0bab3d02acb" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="58eaa2e2-81fe-445a-975e-63c299dcd1bd" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="6eaf51dd-88b5-4455-b8fa-86b858bcaf39" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="8133dd8f-85e6-4adb-bda0-0562029ced77" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="84660fee-5f6b-4b7f-b78e-de36f5f36f52" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="c9749eed-1139-4a3d-a1cd-594f6d06025a" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="959076c0-b289-440c-a1fb-6a158cca3363" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="73a50c7a-d934-4e15-bb00-d7020d6cfb4e" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="beb37b87-ace9-43e7-9bb0-e14cce7498a8" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="2c47cc16-5dc0-474a-a480-434348521ba6" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="6ea850f8-86a3-4b9b-ab3b-b10a376a0e33" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="b753cc64-94f7-42f9-b8a2-c051fda73ebb" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="f80a90d2-1f00-4630-9417-bd0e879db38e" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="bd728300-197b-4d34-af6c-ea8589f009c0" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="3f12c478-8a2f-4c21-a649-223500e274f1" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="d3da1fed-3efd-4dd5-8e27-a73595abd5f6" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="7f647d9a-dfcd-4a27-ae62-88c819d6993c" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="988e8e92-96bf-43b0-87c3-f5bac1ebe7a3" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="6e076fa4-ebeb-4bfc-9ee4-936c491c41f7" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="bc634330-9da9-4ce8-85a3-3466281ee02c" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="49447083-f4d9-436e-a89f-43e00cb25988" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="3f83028b-4490-4843-b6cd-fb02454aa8cd" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="db88bf5a-9641-4f56-87c6-367dbfa9de54" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="3b03c753-3907-4675-8029-bd67bc2044e9" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="1fd8576d-36d5-4d1e-98bc-17ef4744a4a9" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="1938297a-d57f-4f2e-a6ae-e958b2751ccb" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="481b268d-1e58-408a-b6f9-7631e64f9a49" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="b1b3ed14-7208-40d0-9f2c-260fbebdf93d" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="830990c7-3890-41f9-9eac-8924ab149ecb" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="59a60f8c-37e0-4d03-b649-d63634c0d0d4" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="b8f80967-a2ec-4a50-964b-26176e367667" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="cae718a2-dd22-4221-8b97-8390989a7a30" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="7388c2e7-b87f-4a1e-95dc-7dadba7b1676" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="28190060-7960-47f4-999d-3cf64882ff72" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="768412c3-4ad8-4a91-8543-905cab36a206" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="6dbf383f-966a-4c65-a112-e614fb7fe9a7" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="5a0dc8a3-a116-4276-9727-6caf2d3c9986" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="7d48de54-5a24-4bad-9d90-8aae4656aa3a" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="efec8164-a4c3-4f70-8e2d-8c3d5994bc48" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="41c9bcda-b675-47c0-9fe0-46b6aa22f2b2" data-file-name="components/navigation.tsx">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium" data-unique-id="9721f684-c5c3-4c15-b965-7fc01817713d" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="e538d37d-45ec-4472-89e8-50fe0f829ea3" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="c2d5a368-5cdd-4157-afde-6ad293fccf19" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="a4b0612c-8552-4831-8d77-171bfe54908c" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="c43c9e46-a76f-493a-a787-abaffa20c842" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}