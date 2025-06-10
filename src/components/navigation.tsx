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
    }} className="hidden lg:flex fixed left-0 top-0 h-full w-72 glass-effect border-r border-sidebar-border flex-col z-50" data-unique-id="df807e77-7794-44c0-a3a8-439a4bda7e64" data-file-name="components/navigation.tsx">
        <div className="p-6 border-b border-sidebar-border" data-unique-id="37ded44c-d970-4010-b927-ecb2c09345b2" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-2" data-unique-id="1991cc89-dd9a-4cb3-a9aa-a7c236613f49" data-file-name="components/navigation.tsx">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="a702001f-cfe3-40b4-a2f9-0ec9b5ffb143" data-file-name="components/navigation.tsx">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div data-unique-id="31dda86a-bd44-4331-8a71-2798ea2bc80d" data-file-name="components/navigation.tsx">
              <h1 className="text-xl font-bold text-sidebar-foreground" data-unique-id="75c0a0bf-d90d-40a0-a7ce-c99644d3a2d8" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="2c4eeadd-f262-4d08-83eb-3f6220bdb94e" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
              <p className="text-sm text-muted-foreground" data-unique-id="3f0964d9-b770-4b32-a833-218b608e92d6" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="194d73ba-8208-4450-be7b-80684d3b3c34" data-file-name="components/navigation.tsx">Kios Pestisida</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4" data-unique-id="e6eac7ab-e2a3-4fac-aa05-5d5717274eeb" data-file-name="components/navigation.tsx">
          <div className="space-y-2" data-unique-id="1d5b8b04-307b-44d9-8f33-7cbaf9c48659" data-file-name="components/navigation.tsx" data-dynamic-text="true">
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
            }} onClick={() => onPageChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="7c01a922-ddbf-4dbc-800a-b12209e8bb20" data-file-name="components/navigation.tsx">
                  <Icon className="w-5 h-5" data-unique-id="b69c9d6a-7b01-4144-a138-7b7c7a6e0d44" data-file-name="components/navigation.tsx" data-dynamic-text="true" />
                  <span className="font-medium" data-unique-id="ab262c0a-55e2-4ed5-a0c8-8053ee6a593f" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                </motion.button>;
          })}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border" data-unique-id="000617d4-ae98-4468-acc5-38abeb656118" data-file-name="components/navigation.tsx">
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-sidebar-accent" data-unique-id="3e142765-b0cd-4395-882f-2e4dbf71da6d" data-file-name="components/navigation.tsx">
            <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center" data-unique-id="87e34362-e49c-4c8e-9022-6bd8a0df820c" data-file-name="components/navigation.tsx">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0" data-unique-id="90655a66-b735-4a0c-aa94-964161b6fb7f" data-file-name="components/navigation.tsx">
              <p className="text-sm font-medium text-sidebar-foreground truncate" data-unique-id="eaf083f0-a3b4-468c-8f37-43ea4fac629e" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.displayName || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate" data-unique-id="a9913a49-c2a4-4576-84e7-b4f7bbed6e0d" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                {auth.currentUser?.email}
              </p>
            </div>
          </div>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="ffdda330-1e55-4be3-a0f1-003ef58ff6a4" data-file-name="components/navigation.tsx">
            <LogOut className="w-5 h-5" />
            <span className="font-medium" data-unique-id="84445d52-9194-4106-87da-dd313c103ad7" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="a2d3fd0a-4838-432d-81ee-51848d128923" data-file-name="components/navigation.tsx">Keluar</span></span>
          </motion.button>
          
          <div className="mt-4 pt-4 border-t border-sidebar-border" data-unique-id="c66bb04b-7001-4407-bcd8-306cb05e88ac" data-file-name="components/navigation.tsx">
            <p className="text-xs text-center text-muted-foreground" data-unique-id="3c270369-4eb5-4761-b9f2-ebaaa4d27f0d" data-file-name="components/navigation.tsx">
              <span className="editable-text" data-unique-id="9b013b4f-2735-4b27-8cdf-726cbd48baf4" data-file-name="components/navigation.tsx">App by </span>
              <a href="https://www.instagram.com/aaafdhal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors" data-unique-id="4e354c3b-aaf0-4178-b75b-aba4dfa2f0cd" data-file-name="components/navigation.tsx">
                <span className="editable-text" data-unique-id="f18814e7-7f1a-42ed-a9fd-05efe03dba25" data-file-name="components/navigation.tsx">Afdhal RZ</span>
              </a>
            </p>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-effect border-b border-sidebar-border flex items-center justify-between px-4 z-50" data-unique-id="cabefb4c-2461-4eb6-bb17-f108369c771e" data-file-name="components/navigation.tsx">
        <div className="flex items-center gap-3" data-unique-id="5b8f87d2-fffc-40b1-be41-11395f793ce4" data-file-name="components/navigation.tsx">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="f5df2a30-cf01-4ab7-84a2-f15007eb70e5" data-file-name="components/navigation.tsx">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold" data-unique-id="9bc372ed-10be-45f1-982c-868d6e85cd96" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="57d96d73-f82f-4c20-b293-c2cc182b0be7" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
        </div>
        
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="e6a5cac0-1792-4474-ae3f-a4bc163031e9" data-file-name="components/navigation.tsx">
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
        }} onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/50 z-50" data-unique-id="0646ae49-ddb1-4192-b243-489ead6ff966" data-file-name="components/navigation.tsx" />
            
            <motion.div initial={{
          x: '-100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '-100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="lg:hidden fixed left-0 top-0 h-full w-80 glass-effect border-r border-sidebar-border flex flex-col z-50" data-unique-id="d1f8dcf0-4317-48f7-97ac-d8d6c9ae2c2b" data-file-name="components/navigation.tsx">
              <div className="p-4 border-b border-sidebar-border flex items-center justify-between" data-unique-id="224fcf2c-5751-4084-99ed-4c0add9cc814" data-file-name="components/navigation.tsx">
                <div className="flex items-center gap-3" data-unique-id="0cc9e538-c792-4674-8f91-299fdd25d1fc" data-file-name="components/navigation.tsx">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center" data-unique-id="3566c2b1-f170-46db-b374-8e37ed7de7ba" data-file-name="components/navigation.tsx">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-lg font-bold" data-unique-id="a22b94ac-07b4-4927-9c84-2c7102153d45" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="d13ddf27-d1c3-48fa-bf27-c6bc2b7bae90" data-file-name="components/navigation.tsx">PestisidaApp</span></h1>
                </div>
                
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors" data-unique-id="69d1087c-e5eb-4a50-aae5-9eda7afc6231" data-file-name="components/navigation.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4" data-unique-id="ff3d1203-0c5e-4de3-a0a5-699e59c08b13" data-file-name="components/navigation.tsx">
                <div className="space-y-2" data-unique-id="93290ab7-c5f4-4fc9-a43a-8cd52e2f5757" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                  {menuItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return <button key={item.id} onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }} className={`w-full flex items-start gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${isActive ? 'gradient-primary text-white' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`} data-unique-id="2d82c166-0d05-4ddb-8852-90790347eb11" data-file-name="components/navigation.tsx">
                        <Icon className="w-6 h-6 mt-0.5" />
                        <div className="flex-1 text-left" data-unique-id="d31689cb-89c3-48b9-9623-7b2f7a4dd7ec" data-file-name="components/navigation.tsx">
                          <span className="font-semibold text-base block" data-unique-id="1c7c6834-6ddf-4584-ae11-803e3577d521" data-file-name="components/navigation.tsx" data-dynamic-text="true">{item.label}</span>
                          <span className={`text-xs mt-1 block ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="51d0d1a9-a161-4fe0-8431-38074529a86d" data-file-name="components/navigation.tsx" data-dynamic-text="true">
                            {item.description}
                          </span>
                        </div>
                      </button>;
              })}
                </div>
              </div>

              <div className="p-4 border-t border-sidebar-border" data-unique-id="31e2ad97-d546-462f-8309-d6dc7f7335c6" data-file-name="components/navigation.tsx">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-red-50 transition-all duration-300" data-unique-id="66d901f5-042b-4a15-8dca-f8ec36004cbb" data-file-name="components/navigation.tsx">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium" data-unique-id="a4444de3-2a8c-4c25-ba98-2a60b5cfb160" data-file-name="components/navigation.tsx"><span className="editable-text" data-unique-id="c6344178-6adb-4590-9684-84b7c6dcb974" data-file-name="components/navigation.tsx">Keluar</span></span>
                </button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
}