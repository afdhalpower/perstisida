'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, ShoppingCart, History, Calculator, LogOut, Menu, X, Leaf, User, BarChart3 } from 'lucide-react';
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
    id: 'sales-report',
    label: 'Laporan Penjualan',
    icon: BarChart3,
    description: 'Dashboard analisis penjualan'
  }, {
    id: 'reports',
    label: 'Riwayat Transaksi',
    icon: History,
    description: 'Lihat riwayat transaksi'
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
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="640cb2b5-6190-4430-9c6a-cce8d6cf25ae" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="a0394dd6-cf7f-4223-87df-a01b67190360" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="c523c71b-dac3-41e5-9e59-9a94951799b3" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="4af17b8b-345b-481d-88ee-36546a12660b" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="84278f91-66b6-470d-9811-c49823bbe8f8" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="2dee8a2e-6218-40e1-b051-f6fc1cdc12d1" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="4d62e8a0-d6a2-4840-842c-3f21c143fda7" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="231d5ad0-0aa6-46c0-9d2f-2a67c6637efa" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="99187218-c79b-4e2d-8b79-3acb758f8745" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="529e9676-346f-45b9-9fcd-61c04628d7fc" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="605770e9-2937-4745-87d0-6af3bfbb1ca0" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="b5713227-f513-4095-9719-d4f71fddb926" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="94af6904-633b-43f8-acd9-e75509316796" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="1101baf9-a5ab-4055-b8ca-141ec0b0cd43" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="a27d6b2c-f8ea-42b3-9e01-c3c4c17a5854" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="a405d06b-4d67-4d2f-81ba-8e2fd6bab162" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="5bc9e1b0-3df2-4ee1-813a-a5a2d8bf2f23" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="20195d80-3b96-46b3-af3b-d378fc182ccb" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="c20fcff7-1b08-49d6-82aa-8c615d8b6aee" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="e4169c7a-08c7-489e-a7e0-3ed9172476f6" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="bdb45f1c-1185-4e9b-9d4a-0acfa2fd5dfe" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="694169bc-e88d-4eef-870e-a08281d5bc6a" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="3d555a2a-5f9e-43c6-bc48-2c876cd854ad" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
          
          <div className="mt-4 pt-4 border-t border-sidebar-border" data-unique-id="a1c0e5b6-673e-4e1a-a65b-b7c861cef88f" data-file-name="components/navigation.tsx">
            <p className="text-xs text-center text-muted-foreground" data-unique-id="65c0ce2f-e6f5-4544-a0fa-7404212b4a9c" data-file-name="components/navigation.tsx">
              <span className="editable-text" data-unique-id="7c48a185-d260-4579-97a6-21998f97cd95" data-file-name="components/navigation.tsx">App by </span>
              <a href="https://www.instagram.com/aaafdhal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors" data-unique-id="824d45db-8647-44bf-a025-35ce950cbaf6" data-file-name="components/navigation.tsx">
                <span className="editable-text" data-unique-id="5f134798-24b7-4f6b-a8df-3bfc2b86275e" data-file-name="components/navigation.tsx">Afdhal RZ</span>
              </a>
            </p>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="1c5ac7a6-9cf9-47bd-ac43-80a96f75fc9a" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="d175d553-6f31-4b05-8844-35ca49a8549d" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="4430f118-de90-47ab-a4e1-aa45d37cd393" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="d3561e81-4490-4814-b769-49399cdf69fe" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="95643b37-7a65-47ee-bb7d-0de028d021cb" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="dbb90bbe-0ee9-481a-94c0-0c9ad39cd3f6" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="5c3ea8e9-c0b3-4fd1-ae4f-dd48286945fa" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="28ffb456-97c7-417f-bd72-2a608033bdd7" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="e1af75ab-924c-4f9b-8cc2-facc6e3b04aa" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="ce4f4f6e-bda6-431c-9f6a-0771c7f9b717" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="dc8cefcb-06e7-422b-9334-4c3e5dc78ce6" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="0cae5ef6-ec31-4eda-a8da-b0b7ff63c08e" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="8a64eb78-079e-421b-b91a-96bab4cfea44" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="53a0960d-74b2-4528-b3bf-f958d3c1dbe2" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="43c55818-812e-4aec-b01c-c09a3fdd3c30" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="448fbc97-5e97-49e9-a8a4-9c07dcd6438d" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-start gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="826f1a15-7c1e-4099-a743-3ff122a6443f" data-file-name="components/navigation.tsx">
                        <Icon className="w-6 h-6 mt-0.5" />
                        <div className="flex-1 text-left" data-unique-id="2d077501-ed7d-41b8-a89a-dd6fcd926ed2" data-file-name="components/navigation.tsx">
                          <span className="font-semibold text-base block" data-unique-id="aa50be6e-df3f-46f2-8c7e-49679e00e5fa" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                          <span className={`text-xs mt-1 block ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="3627f22d-c017-42c7-af6a-77790426204b" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                            {item.description}
                          </span>
                        </div>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="44dc14a5-b214-4900-89bc-f85657cc20eb" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="79a407f6-9988-4e8d-97d1-dd0c405aaf79" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="6b48a068-9db9-41b3-8a9c-f086eb71254d" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="78c9d09b-03c0-4548-8ca9-a73eae02fbe4" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}