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
  return <div className="min-h-screen flex items-center justify-center p-8" data-unique-id="542272a7-8b95-46b4-9a8e-43aede5f94f9" data-file-name="components/login-page.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="max-w-md w-full" data-unique-id="1e7b9d80-ae29-47f3-83af-53e84e05f5ba" data-file-name="components/login-page.tsx">
        <div className="text-center mb-12" data-unique-id="d03b1a53-467a-458d-a01e-efd35087e685" data-file-name="components/login-page.tsx">
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 200
        }} className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center" data-unique-id="55bcc795-46a4-4beb-84a6-5e2dc5ee308f" data-file-name="components/login-page.tsx">
            <div className="flex items-center gap-1" data-unique-id="26c1c7d4-83d0-4f96-881f-1a0b1a549103" data-file-name="components/login-page.tsx">
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
        }} className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-3" data-unique-id="e3955e74-065f-4185-920c-5252b8a07514" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="625c7da7-c2ad-4bcf-bc3d-be19972b5cb3" data-file-name="components/login-page.tsx">
            PestisidaApp
          </span></motion.h1>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4
        }} className="text-muted-foreground text-lg" data-unique-id="55f35563-d195-4d8c-b23c-b07daf7c1edd" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="bf60aec5-eb87-47cf-a0ac-29c6a709793b" data-file-name="components/login-page.tsx">
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
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="ef465a22-ada2-44e9-b242-115bffcc148e" data-file-name="components/login-page.tsx">
          <h2 className="text-2xl font-semibold mb-6 text-center" data-unique-id="b86732a5-28f8-4d97-949a-9c00efc54118" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="1a21b5bd-c47c-4cba-9c48-85c7e7df8513" data-file-name="components/login-page.tsx">Masuk ke Akun Anda</span></h2>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleGoogleLogin} disabled={loading} className="w-full gradient-primary text-white rounded-xl py-4 px-6 font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 disabled:opacity-50" data-unique-id="f6160a69-e796-4748-815f-618b3c7d6642" data-file-name="components/login-page.tsx" data-dynamic-text="true">
            <svg className="w-5 h-5" viewBox="0 0 24 24" data-unique-id="a71f3996-db40-4a20-90c8-b5c9c99ca61a" data-file-name="components/login-page.tsx">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            {loading ? 'Masuk...' : 'Masuk dengan Google'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </motion.button>
          
          <p className="text-sm text-muted-foreground text-center mt-6" data-unique-id="73818544-7e91-418d-bfe8-aaa8ff38f40e" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="2bfee379-9843-4a96-9993-697efd0718be" data-file-name="components/login-page.tsx">
            Masuk dengan akun Google Anda untuk mengakses sistem pencatatan penjualan pestisida
          </span></p>
        </motion.div>
      </motion.div>
    </div>;
}