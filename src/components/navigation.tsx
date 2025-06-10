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
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="10975b60-ad43-4c27-9de3-6418f404d23a" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="aa8e75f1-74cd-4693-8340-973d1852f492" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="d44ed297-f857-4bbd-b00b-91fceb505500" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="8322cd4c-6071-47ec-97be-73f776ba9c73" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="eb4ddcc9-1497-4b06-bb13-96e2bba6f0c0" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="5fdecc0f-4a40-4df5-b7c6-09d3ab1fced7" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="6ab9ca27-53b5-40f8-a06a-f31d5b11bab2" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="83f1af4f-758c-4769-b6a5-76e30b735caa" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="ee019192-09c4-473a-8e80-3031864f06ca" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="7e51fee7-a646-4642-9b78-e7f3a38ce6a8" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="7bb64f51-f13e-41d2-a3b1-3630c3024cbe" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="f6993d18-1a8e-4a31-bba1-50940b5c0ab1" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="24607ec6-dc32-4d0f-92b4-f8ce805ae7df" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="7ec5547c-964c-4c67-81b0-7e22b6230555" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="ae41c3b7-2b17-4f42-848e-f286f0f52ced" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="425357d3-3090-4d76-907d-44512c933eb1" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="fe42ae24-592c-42e2-a139-efffc162faa8" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="6826618c-768c-4008-87ff-98a4cf7afe72" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="7811b4ef-fad5-4240-acec-dafd539c8b0b" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="e6dfae02-6715-44c0-ab3a-2b40c21929bd" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="7a1693a1-09b7-49d6-8572-cfc096f6df56" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="a6f646ec-a275-4a79-84de-dfa727d3b956" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="0bfe56f7-4cbb-4747-97eb-73cca0a354f2" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
          
          <div className="mt-4 pt-4 border-t border-sidebar-border" data-unique-id="27c1834b-e582-4e7c-9557-0caf136e262b" data-file-name="components/navigation.tsx">
            <p className="text-xs text-center text-muted-foreground" data-unique-id="c8f0c4c0-aff2-4503-b987-a7ad4d2a2616" data-file-name="components/navigation.tsx">
              <span className="editable-text" data-unique-id="79b6a483-4668-4352-b85a-33b689463d60" data-file-name="components/navigation.tsx">App by </span>
              <a href="https://www.instagram.com/aaafdhal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors" data-unique-id="2935ad6b-5a7c-4a42-82bb-a86600d5ace0" data-file-name="components/navigation.tsx">
                <span className="editable-text" data-unique-id="8870d60b-49bf-4701-81a9-1c7096bf57de" data-file-name="components/navigation.tsx">Afdhal RZ</span>
              </a>
            </p>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="eb0d095a-727f-42b0-be4f-0621fd484d21" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="eeaadfde-6537-491a-8bf2-540297d4d2c3" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="1bf28c79-9a61-4e09-90e8-12a35ad61888" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="906608fa-a2a3-43b7-a0b1-81baa1f2978b" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="1e8b42e7-751b-4b7c-91db-c3c3c09c3db5" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="b1844ea1-3af1-4b0e-8c0e-978c5bd9d27a" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="1ece9c6c-7114-4f66-b091-c54e2730e635" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="f6704be0-6436-4fcd-9d90-8b11373be777" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="dbb15ffb-067b-4a58-83d8-aedb2aa8cc3c" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="df3aa96e-bfa4-493e-aca7-e098d0ff88c0" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="8a0e8d97-9357-4d6a-a4ee-cea0928df8eb" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="efcd9591-2201-4632-85b8-ed03984c9612" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="bc685c1f-a871-4a4d-b07b-683fe7a63f2d" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="78094c91-558d-4481-923c-82a082338900" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="c41c3213-ecbf-4237-a8b9-f86e00718261" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="cd6fa073-0893-4564-ba45-05d7dfa683c8" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-start gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="8ba7c07c-7fc8-4a82-b5de-c27a5862969f" data-file-name="components/navigation.tsx">
                        <Icon className="w-6 h-6 mt-0.5" />
                        <div className="flex-1 text-left" data-unique-id="1e5f1050-012e-4d3f-86a1-6673d7499a27" data-file-name="components/navigation.tsx">
                          <span className="font-semibold text-base block" data-unique-id="2f7a8040-d9fc-4085-9d06-523655133918" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                          <span className={`text-xs mt-1 block ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="b63639be-184d-45a7-96cf-1c976dba3fcb" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                            {item.description}
                          </span>
                        </div>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="95bba53f-008a-4a3f-81da-29db4bfd7546" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="0d46e6d1-d6dc-4795-8be6-5368e6ed2836" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="3b1a02c4-8b05-4643-80d5-e9f2f284e686" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="70628bc5-f3a8-4e43-a4c2-ad6ba5bd4d6c" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}