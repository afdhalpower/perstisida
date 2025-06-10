'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { LoginPage } from './login-page';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
interface AuthGuardProps {
  children: React.ReactNode;
}
export function AuthGuard({
  children
}: AuthGuardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center" data-unique-id="38076635-f7c8-4b91-a1ec-6f6b3f0d4145" data-file-name="components/auth-guard.tsx">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="flex flex-col items-center gap-4" data-unique-id="4e939670-5f36-42f1-92fc-bac56f1ebf5c" data-file-name="components/auth-guard.tsx">
          <div className="relative" data-unique-id="785e899e-788d-4579-b6ad-7c23e5c2c2cd" data-file-name="components/auth-guard.tsx">
            <div className="w-16 h-16 rounded-full gradient-primary animate-pulse" data-unique-id="5ded5469-8aab-4ea0-8a95-6bb52aee4fff" data-file-name="components/auth-guard.tsx"></div>
            <Loader2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
          </div>
          <p className="text-muted-foreground font-medium" data-unique-id="944c8b2b-7025-466b-b3ec-25f3686c1779" data-file-name="components/auth-guard.tsx"><span className="editable-text" data-unique-id="2197c659-3fc4-43c2-9f68-118302e0f7de" data-file-name="components/auth-guard.tsx">Loading...</span></p>
        </motion.div>
      </div>;
  }
  if (!user) {
    return <LoginPage />;
  }
  return <>{children}</>;
}