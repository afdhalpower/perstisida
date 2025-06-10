'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, ShoppingCart, History, Calculator, LogOut, Menu, X, Leaf, User } from 'lucide-react';
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
  }, {
    id: 'accounting',
    label: 'Akuntansi',
    icon: Calculator
  }];
  return <>
      {/* Desktop Navigation */}
      <motion.nav initial={{
      x: -100,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="972e1063-94f9-4f44-b66e-aa601ebe2a8a" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="7e2cb1d5-f688-455c-9246-ca2b71009bc7" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="f8fd3150-3d79-4d3a-bad7-d1c3b0419629" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="893b9e1d-3572-4496-a276-a6018c548a07" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="e55a0f8d-5844-4829-aead-a2c9a0fa6217" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="2796741f-685a-4400-91fd-a9b523fd80e6" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="5213d341-f566-4168-813f-aa649db39e55" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="f082246b-7b5a-48dc-86e2-a50a7c148c0e" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="29312392-41f3-48ce-bf45-ca10f7d4720f" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="6c67acd7-1419-425e-90f9-da703b973253" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="dfa62c1b-fd1f-41a9-beac-61e81d9111ca" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="08320621-c13a-46b1-bd29-06e5a2b3a466" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="9df0a755-3597-4382-9ef8-ec0e75f6568e" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="f44cb629-97cf-4652-abea-fc573acc3010" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="a9fd7749-a4ff-457a-ad4e-78622e4e6080" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="830e19dd-7f1c-4081-a6f9-2971b22ee0b1" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="e2347d70-f00b-424d-a0a7-d8496be8cfc6" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="4ead0cd4-7f17-4d46-9a96-f1f10bdd41f9" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="f4fe8507-f91f-4763-93dc-929c2f5ce811" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="12867a94-eb6f-4e63-b4fd-9ff4e727e614" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="43c1c51f-5eb9-420a-971a-77bd47711032" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="976ab34e-ed57-42c4-be17-b3097b258006" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="706c29fc-fe2d-4e20-879b-8431bca98dea" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="26b70146-2e1b-4953-bb82-ee91f8e10baa" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="2097303e-43fb-4b57-82d7-843b4da01c6d" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="e6abca13-a2cb-4bed-b250-73c54b764363" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="2c44b766-e5cb-4263-b1aa-ebc08f7aa6f1" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="863c2fd5-dd44-4016-be57-2b30d6f2682a" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="453902eb-a2e7-4df5-997f-5364f9aadc43" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="538ea943-5298-4b57-85e1-48f3d4003f84" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="20b1d301-a167-4de8-a3cd-a007b87e7046" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="9e5a26ba-a01c-4afa-8575-a7e1479f62ff" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="49c2c1df-e23a-4259-9495-6b81ba189833" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="02f123e9-cb36-4650-98bc-0ebe943e7a66" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="22ef023f-85bb-4d87-b01f-8f382f846f6d" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="9175b448-8d87-47cf-b18b-487887cac8d0" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="db32ca66-f651-41ab-9c7c-34f88a3dc17e" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="729b1157-eb4a-478d-a341-375f1004e364" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="62c006ee-0105-40e1-9cff-239e2ea2f722" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="3e25c671-d0e0-46a7-b2be-db0d52d5bdb5" data-file-name="components/navigation.tsx">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium" data-unique-id="dd6ab167-ca99-40d6-a408-7a87842fea61" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="529edb88-a799-4d13-a7a3-106ef5d97af0" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="c6cd8258-d87e-41d6-a106-4830f280f071" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="8fc5115e-9660-46bb-925c-514c853f542a" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="f5d36f82-397c-49e6-b5f4-64676bf13d7b" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}