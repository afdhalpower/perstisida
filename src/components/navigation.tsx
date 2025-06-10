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
    label: 'Ringkasan Aktivitas',
    icon: Home,
    description: 'Lihat ringkasan aktivitas bisnis'
  }, {
    id: 'transactions',
    label: 'Transaksi Baru',
    icon: ShoppingCart,
    description: 'Buat transaksi penjualan baru'
  }, {
    id: 'products',
    label: 'Kelola Produk',
    icon: Package,
    description: 'Kelola inventori dan produk'
  }, {
    id: 'reports',
    label: 'Laporan',
    icon: History,
    description: 'Lihat laporan dan riwayat'
  }, {
    id: 'accounting',
    label: 'Akuntansi',
    icon: Calculator,
    description: 'Sistem akuntansi lengkap'
  }];
  return <>
      {/* Desktop Navigation */}
      <motion.nav initial={{
      x: -100,
      opacity: 0
    }} animate={{
      x: 0,
      opacity: 1
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="16a4c34a-a941-46cb-bd3b-aca933c35465" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="c7a68734-c79e-41d9-a542-131e5a699a18" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="4d71446e-b547-4e89-b8fe-0e163767ef3a" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="f3c307c1-c29b-48e9-b144-ffb193e44f58" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="e4c80e73-6b10-4056-b25c-ec8a2623fb4d" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="bbf6b355-001e-42ab-9238-d06c8be87d5d" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="3c47fb2b-a75c-4d27-8359-3f1a27da1d7f" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="c6bec546-4aea-4508-8104-f22dd92e40bd" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="741b74a8-0512-4391-b3c6-5a0485950e93" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="c57ecc6b-b46b-40bf-b74c-8d2c4d41b766" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="b8bb4caa-19e1-44a1-a324-1d8406505d0d" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="e794859f-2058-4217-b4b0-8004da767852" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="82a026d2-6342-42c6-8040-bc6464246e45" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="f78caa29-4fee-486f-ba06-f8733e9c4e7d" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="d6bec871-8ace-4e05-8eba-2b324ce4aa3a" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="a1e18e25-0e25-4e07-9a12-800898b97a75" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="4375d316-eadd-4f14-a4d0-b5ce008389ff" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="b18ed9a2-a01b-44fa-9c21-98023d4354f0" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="50f6bd7a-f8c1-4c08-a138-2fe03581d112" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="279476eb-3b41-4cc6-946b-084959bb7809" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="825d29d1-0459-4692-8b25-000abfcf6e57" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="b515cfaa-8ed4-423d-a6cb-58e905ff424f" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="36278b23-a92f-464b-8bfb-3fb26d34982b" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="c2179ec1-5f62-40cc-b11c-33217324c7af" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="05b353dd-f3d3-4333-a03f-ffad043e9f9f" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="da243e75-4564-4b0d-9a64-cf7fd999c2b4" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="ec0c970d-5ff2-4040-8522-5ccbbe6d5ecc" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="ba0b141d-8574-41c4-b36f-77013d12795f" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="f7f5fa2f-cdc6-4916-b0b6-e5b9c7da3a94" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="95d5b234-db9f-4b8c-82b1-f3ffa7cc3f77" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="3d12786f-3d0a-4778-b751-1f8526cdd77a" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="d53ecd4b-2211-4784-b80c-3a0fa5a43860" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="a2926904-4a74-4948-9747-b1fe1edd417b" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="9dc5b4be-6a7b-478f-a761-ab137510f358" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="504c937f-4f1c-4b57-af8d-07c6eec7d582" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="44826ba7-0353-484e-8a92-1f1f1ffab3a8" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="b0c5f69f-909a-4e3b-af95-6f4182eaffb0" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="d79a12e8-a17c-400a-b662-0381b11bdade" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="a567f0d7-68a1-404f-9991-8b974ff3742d" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-start gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="0eafc237-9816-4845-be35-ae2e33bf8152" data-file-name="components/navigation.tsx">
                        <Icon className="w-6 h-6 mt-0.5" />
                        <div className="flex-1 text-left" data-unique-id="9947c31b-8dc4-4f06-9316-52dba84da19c" data-file-name="components/navigation.tsx">
                          <span className="font-semibold text-base block" data-unique-id="bd35a473-aabf-4ea9-b10c-fd0b6b3e06d7" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                          <span className={`text-xs mt-1 block ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="97bd0d97-4385-4b20-afae-af312df91274" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                            {item.description}
                          </span>
                        </div>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="8fdb2529-0a53-4b88-81b7-860233f83296" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="6a842205-f908-4df4-86cf-c9be59bbfa16" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="17ecb33e-c6be-42af-b3fa-466bef8953d5" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="0fb529c6-5982-4493-8b5f-a88cfd18fd63" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}