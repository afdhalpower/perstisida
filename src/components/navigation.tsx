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
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="6131f6d4-dbd4-4f60-b89e-32ad97c9f6dc" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="4262219e-5667-4f26-a297-2497406e1375" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="a6822e25-09ba-47a4-8e38-7894126a3e32" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="71f5dfdd-89aa-4cf9-bcfd-8ac447c7adc8" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="dcfaa8c1-9bac-4f3a-93b2-e4b8848d05a2" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="1c2e5dec-d6d5-4ecd-b623-600e295d9925" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="fb25fadb-e46b-4af0-8c5f-f93676c9c9e0" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="4c8df643-43a0-4774-8aef-3d2a46f9e8d1" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="10c491f1-fa56-46bd-9f59-586bf7bd6d69" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="b6da97f5-9b8c-4de7-a801-30826e4f078b" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="f4c0e8dc-4388-4cea-8506-be8dd3e2b39a" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="78497719-e283-452e-bbf9-c28a15447112" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="ce07ba0e-8e3e-4809-a81a-dd66a7df3e8a" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="89de8837-7031-4328-b4d5-790624a13e1b" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="e462c689-ea25-45fb-ada8-d44f1062f159" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="afa6a7e9-b7ba-4b36-9e33-ad56625dfc46" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="b873d9bc-ec7e-42e3-a771-83719108881c" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="f4497892-f5b6-4ee4-bc6b-484d46a78120" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="90359951-9162-4083-9d9f-52fa64398e67" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="4a925bcb-740a-4a9a-91aa-a2ece011fa6b" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="74574645-ca83-4001-a1f1-a4500983022b" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="1ebd2f3e-5771-4bda-bccd-97398549a58e" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="8199fd08-feba-48bb-bacc-9bb85baf45fe" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="bd042503-26d2-4ed4-8c90-c20f143739f1" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="2721b773-fa45-4da7-8d3e-f6d4c93d4615" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="2b7910b8-9e6f-4f92-a43e-5012fed251fa" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="34b81d19-61ac-4314-9c62-363df0f56644" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="d8f168f7-2456-465d-a09b-893d40428119" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="af5a5e2f-83ae-4eab-868d-2e9f8f92ddc8" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="a1e399d7-5730-4659-8291-760c8c2ab602" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="4b3a73f5-2c5a-4500-8ce5-dbfb5d831c51" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="6ad8fdb9-7f38-4669-9fdc-478a7dd798c5" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="cd3ba693-8819-4925-b6ce-3b069d9adb2b" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="fe4164b8-82ba-4063-84ff-ebce64ceaa51" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="60ce7cc8-edb6-4fe4-ab51-5db39cadac34" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="aed1adc9-ba17-4ba4-8db9-547bd37a9630" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="61566407-5633-4f94-9da9-d81ad302e5b4" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="4dcf8664-505d-413e-8a7a-5cc2468148f7" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="ad5e5e47-14a2-4f34-8a36-6368ea97fa0c" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="6dbf64d0-2de0-4f21-b5ea-e7e71f6ef7c7" data-file-name="components/navigation.tsx">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium" data-unique-id="71b2600c-283c-4447-8986-0cbc29c876cc" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="ce632cd6-b3e5-40ee-bb6a-3e4379824017" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="f9173dcd-3ead-4d3d-a483-371bc2fa0206" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="e8b98957-28db-4cd5-9a3e-15ec5004c950" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="36fd4429-b00f-4236-813b-fae0d0425be8" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}