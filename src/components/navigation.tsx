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
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="85b1ac5c-89ea-4a6e-88e4-abb343b29068" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="17716b3d-0b75-4747-b6d5-8a69364410f7" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="2f6a14df-cc45-4aea-a3ba-a519e8d877d9" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="2ad1f646-a1bc-4153-b87c-3f00f66bd87f" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="fea59a17-7056-4847-996e-b7840edd08ef" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="ce254f55-9426-471d-9504-b0e657f1c73a" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="c801698f-b0d7-4d94-8bbd-19ef9742057a" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="7d50d2bf-3123-48d8-a84d-facd7d8d578e" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="eb297e7f-ec1c-4808-a9fe-1273caae5eab" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="12bba351-dce4-4fd4-ae29-cb45fc4e71db" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="e02d7c29-d152-4d6e-b4ba-7e868343d772" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="8da9499f-8567-4266-bf72-2f4ecc58dbc9" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="45cec419-0c74-452b-b2bf-164804a48354" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="2160a57a-37b8-4529-a94e-f961e857f818" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="b904b08f-e89f-49a3-a2bb-c9e1d286e4c2" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="1bb66704-6bbd-411f-93d7-f5cbdf38ff19" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="30e1030f-d15d-4d15-811a-90abf26c61a5" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="dc6266d0-a6a2-4df6-8ea0-760485519a8c" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="c8fb79cb-ca8c-4c28-a2b5-3aaa8442c32b" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="043555ee-ae0e-4558-acf6-513e1468ab89" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="408e0edf-c871-4b04-a149-8fdc2ede3395" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="c7ad41ac-93c1-474e-9a0e-121536a2e8dd" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="3aaa954d-1cf9-4611-956f-a061a232e0c8" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
          
          <div className="mt-4 pt-4 border-t border-sidebar-border" data-unique-id="4b0de070-7913-404b-a20c-f50e7791c74e" data-file-name="components/navigation.tsx">
            <p className="text-xs text-center text-muted-foreground" data-unique-id="a09166c5-ca50-424f-bf2a-8e34763610c2" data-file-name="components/navigation.tsx">
              <span className="editable-text" data-unique-id="6be0e433-9bf6-44b4-9167-7526ffd9b18e" data-file-name="components/navigation.tsx">App by </span>
              <a href="https://www.instagram.com/aaafdhal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors" data-unique-id="8f387da9-e327-49e9-96c6-81b434fbcd85" data-file-name="components/navigation.tsx">
                <span className="editable-text" data-unique-id="ec727aa5-ce30-43dd-8684-bbd271452a3a" data-file-name="components/navigation.tsx">Afdhal RZ</span>
              </a>
            </p>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="86c4ad0d-fe69-4811-8e07-74bc0a2d114e" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="a6efc5a5-8ec1-4f90-beec-90a0f245cb6e" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="55758d2c-3cf6-45bd-b065-d2d3fe1bb9a9" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="a484627e-b5ea-44e1-bee1-d4cab49e7c43" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="a520e577-3704-44c3-a248-bf5807b60eff" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="7cf82184-2830-4f7b-a0f7-be244e522ad4" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="11ea6ead-9cf7-470c-9213-4ece8a79965f" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="219f2327-92c7-42fc-aaf5-241c31803c15" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="35d318e4-113f-4c88-931e-65c1d17d1edd" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="637aa187-3969-494d-8a83-51649b26e562" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="1ebfa7d8-4313-4ffe-811e-63ba84e3b7a8" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="7bdde5ea-aa61-444e-9ffa-84ae3ff85610" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="2f99b785-2528-497f-ad00-5156f6cccfdb" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="d9eb3fd4-ddef-4f82-94e3-1e8b3e993e40" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="8d09af61-e0db-41c5-ab17-d23fdcf936a7" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="c77f5832-0416-414e-882b-da21126b9e56" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-start gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="80fa9569-e53a-4be6-bc0b-86f4f86a9e10" data-file-name="components/navigation.tsx">
                        <Icon className="w-6 h-6 mt-0.5" />
                        <div className="flex-1 text-left" data-unique-id="78e07805-500c-4551-8e68-29956eb330ad" data-file-name="components/navigation.tsx">
                          <span className="font-semibold text-base block" data-unique-id="35813b1a-6e0a-4193-b1a5-3469d54cf2a3" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                          <span className={`text-xs mt-1 block ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="3e80a7c7-214d-45bb-9879-0fe51a0a8746" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                            {item.description}
                          </span>
                        </div>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="b3b594c1-0fce-4487-82d2-4c2236a2e89c" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="fc85ec45-58a0-42d9-bb71-10dd0f23af7e" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="3a50f5c4-4559-433e-a98a-5311670a5c06" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="076d4466-c31a-4c6d-8aa8-50b964c0c429" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}