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
  return <div className="min-h-screen flex items-center justify-center p-8" data-unique-id="42c6288d-a393-4bd6-b8ab-8264bcb520d8" data-file-name="components/login-page.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="max-w-md w-full" data-unique-id="fd80312a-7e86-48a9-b823-2149f30ad8cc" data-file-name="components/login-page.tsx">
        <div className="text-center mb-12" data-unique-id="678d3238-4dee-4975-a889-623f46aba881" data-file-name="components/login-page.tsx">
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 200
        }} className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center" data-unique-id="9e6bf678-623f-4c76-902c-221ce011ffa7" data-file-name="components/login-page.tsx">
            <div className="flex items-center gap-1" data-unique-id="4912166e-bd6e-43a9-b34d-e924d3360c4f" data-file-name="components/login-page.tsx">
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
        }} className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-3" data-unique-id="f5932e03-c01b-4dd4-a9e7-7ccdfce81dc4" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="db2c3ac2-54d2-4dda-ae9a-d89918b205eb" data-file-name="components/login-page.tsx">
            PestisidaApp
          </span></motion.h1>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4
        }} className="text-muted-foreground text-lg" data-unique-id="3b7acac8-6208-4957-8fcd-3c19dab74c69" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="50cba022-cbc6-426e-b0e1-970324bd8e63" data-file-name="components/login-page.tsx">
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
      }} className="glass-effect rounded-2xl p-8 hover-lift" data-unique-id="b62d32ae-67ad-4e7d-807c-a6a52ba27587" data-file-name="components/login-page.tsx">
          <h2 className="text-2xl font-semibold mb-6 text-center" data-unique-id="326e25fa-c480-459b-80c1-252053062905" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="5535a1a7-bf1f-4e6b-904b-2e756bfe2687" data-file-name="components/login-page.tsx">Masuk ke Akun Anda</span></h2>
          
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleGoogleLogin} disabled={loading} className="w-full gradient-primary text-white rounded-xl py-4 px-6 font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 disabled:opacity-50" data-unique-id="9650a499-8f4a-4117-baed-45d089ff55fd" data-file-name="components/login-page.tsx" data-dynamic-text="true">
            <svg className="w-5 h-5" viewBox="0 0 24 24" data-unique-id="e307bf9f-238e-426c-81ae-96592753f44c" data-file-name="components/login-page.tsx">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            {loading ? 'Masuk...' : 'Masuk dengan Google'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </motion.button>
          
          <p className="text-sm text-muted-foreground text-center mt-6" data-unique-id="5fc86c2a-9097-4b28-a861-b91b26562419" data-file-name="components/login-page.tsx"><span className="editable-text" data-unique-id="75e55b7a-bf26-49d9-96b8-3e28621c38f0" data-file-name="components/login-page.tsx">
            Masuk dengan akun Google Anda untuk mengakses sistem pencatatan penjualan pestisida
          </span></p>
        </motion.div>
      </motion.div>
    </div>;
}