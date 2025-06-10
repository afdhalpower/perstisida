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
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="8db3b439-abcf-4615-8f2d-90a6b6ce9c7c" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="4eb9f99a-ef8b-4571-8300-b61cea512371" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="19b18bc5-700e-4bfa-ab68-682e790f9641" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="f7acbe8d-97fc-4534-bf9e-65c0866ced08" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="9196eb25-2ca7-4557-b326-bbf8020e2203" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="9d488c60-615c-4bb0-a420-792cabeedcbb" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="91a651ae-1c45-49e4-9981-01529e0a76b7" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="b26284a6-9dc2-4622-b46c-ff30ac54af3d" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="0e423e16-b31b-4b8d-8e0b-f44a3ece4efa" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="b08ae14a-3b6a-45a8-968e-03fcbc072f4e" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="5870c4af-a6de-4032-9f6c-388d231f5dce" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="c3dfcd94-3068-40db-8e5a-1de73803f028" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="d9d28bb5-a5f2-4936-8383-69c22b1c78eb" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="52c6cf6d-ff36-4416-8432-d988b9a53a6b" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="37f38766-9298-4ac9-a888-77e89736a814" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="434656ab-00c4-42f1-823d-3fa5a649fafb" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="5d652085-0cae-49e5-b8b4-56bec2ebad46" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="d1ad0971-7443-4174-9a8a-db0fa71a69df" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="14000720-6024-4bdb-9200-616177bf212c" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="37fabf07-3426-4e71-9ce9-56a3af1b79a8" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="78a66fe7-f183-49c0-873c-b686dea125ab" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="f98b19f1-065f-4c53-a52b-4c161a45e33e" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="9dcf1294-77fe-475b-a0ac-589655b9d350" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="494adaa0-8176-4d62-bf4e-350b28024801" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="e39fd184-1dc2-4811-957f-dc7985377744" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="b12ea026-1743-41f6-ae9b-8140123dc85d" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="ea628047-d82d-4cc6-96ea-2886b606af4d" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="30376764-6ebe-4cef-a688-8952d3799a37" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="0a5b844f-c097-4754-b5a5-1a6f12727007" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="4803bffb-f476-46f0-a1cb-7edce3c19693" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="d0284709-74c8-46b3-b282-6ccb93773627" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="d8eae16c-bc99-40c7-970c-343b15a71431" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="3cc8c005-a51c-44bf-8d55-65393a18256b" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="33d0f7b1-58cf-4008-9462-622b5072aa54" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="b16b8ba0-a079-451a-b4d5-c1df49590f88" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="61f3cbea-36bc-46bf-841e-54d771c442bd" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="e8ccf47c-d3da-441b-9418-4bea3dee65c0" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="11261fd7-f1ad-41b7-b534-00c21d56516d" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="63b1cad8-cade-4467-b00d-a52f0f6ba858" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="18c4a319-9a8d-4e63-b8d0-6e6f1ee492c7" data-file-name="components/navigation.tsx">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium" data-unique-id="cba36613-3607-43a6-8888-5b8b3f0b901f" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="1d10f265-c25e-4803-8676-52013686d9a1" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="ba2bb5a8-4b07-4851-8ae9-e0083645afc2" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="84c441ce-6b8c-4a07-b3a4-9e9f2ba27b7c" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="093b20aa-c071-4ed7-8b2b-7522541979a9" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}