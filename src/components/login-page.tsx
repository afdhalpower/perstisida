'use client';

import { useState } from 'react';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { motion } from 'framer-motion';
import { ShoppingCart, Leaf, ArrowRight } from 'lucide-react';
export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };
  return <div className="min-h-screen flex items-center justify-center p-8" data-unique-id="6e3ca86a-5ee8-4c0a-b882-d00a7a894655" data-file-name="components/login-page.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="max-w-md w-full" data-unique-id="ce01ee16-a37a-4608-a48a-e8d3c3d706b8" data-file-name="components/login-page.tsx">
        <div className="text-center mb-12" data-unique-id="f91d9e17-5fed-468d-a525-bc9a2b9a1357" data-file-name="components/login-page.tsx">
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 200
        }} className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center" data-unique-id="8e3d504c-7dcb-45d4-8a5e-ca9611602738" data-file-name="components/login-page.tsx">
            <div className="flex items-center gap-1" data-unique-id="7b8de9a7-20b6-4c4e-88b4-c29c7c7d423f" data-file-name="components/login-page.tsx">
              <Leaf className="w-6 h-6 text-white" />
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-3" data-unique-id="32781f28-c0ad-44f0-880d-2cd68c3cfd4f" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="4d7cfb4b-99e1-4738-bc0f-3386a65037ac" data-file-name="components/login-page.tsx">
            PestisidaApp
          </span></motion.h1>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4
        }} className="text-muted-foreground text-lg" data-unique-id="eca52e32-56a1-4bb2-ae37-900483923282" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="9256f938-606f-4836-b864-8b6bf97cf0d8" data-file-name="components/login-page.tsx">
            Sistem Pencatatan Penjualan Pestisida
          </span></motion.p>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="aa50a560-8e85-4837-93a6-c2b8c5fbb818" data-file-name="components/login-page.tsx">
          <h2 className="text-2xl font-semibold mb-6 text-center" data-unique-id="bceae712-493b-4d09-883b-5600e3294e27" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="a85c1d68-86a8-4212-8128-5677dc266d07" data-file-name="components/login-page.tsx">Masuk ke Akun Anda</span></h2>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleGoogleLogin} disabled={loading} className="w-full gradient-primary text-white rounded-xl py-4 px-6 font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 disabled:opacity-50" data-unique-id="5574a162-43e2-49e9-8b5f-62af901878a3" data-file-name="components/login-page.tsx" data-dynamic-text="true">
            <svg className="w-5 h-5" viewBox="0 0 24 24" data-unique-id="3d945f22-f782-4424-a640-6c718fa076fe" data-file-name="components/login-page.tsx">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            {loading ? 'Masuk...' : 'Masuk dengan Google'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </motion.button>
          
          <p className="text-sm text-muted-foreground text-center mt-6" data-unique-id="af3ca298-dfa2-4768-9eb3-ddb94ae3afb3" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="3b35e508-4f83-4719-9b3c-821924fc24a4" data-file-name="components/login-page.tsx">
            Masuk dengan akun Google Anda untuk mengakses sistem pencatatan penjualan pestisida
          </span></p>
        </motion.div>
      </motion.div>
    </div>;
}