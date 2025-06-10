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
    return <div className="min-h-screen flex items-center justify-center" data-unique-id="7046a879-ab54-445c-a991-9b3b72086ced" data-file-name="components/auth-guard.tsx">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="flex flex-col items-center gap-4" data-unique-id="84006493-b038-4784-a4fd-f85402257370" data-file-name="components/auth-guard.tsx">
          <div className="relative" data-unique-id="d0d0abb3-5d0e-4b74-80b9-edea25b8c08f" data-file-name="components/auth-guard.tsx">
            <div className="w-16 h-16 rounded-full gradient-primary animate-pulse" data-unique-id="7ee2bcea-8c41-40b6-b35c-de1540d87e12" data-file-name="components/auth-guard.tsx"></div>
            <Loader2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
          </div>
          <p className="text-muted-foreground font-medium" data-unique-id="97f600e7-efd3-467c-a37c-50bfef17ef52" data-file-name="components/auth-guard.tsx"><span className="editable-text" data-unique-id="5b9e1d46-37f8-48d8-8aee-b2cc28f1b493" data-file-name="components/auth-guard.tsx">Loading...</span></p>
        </motion.div>
      </div>;
  }
  if (!user) {
    return <LoginPage />;
  }
  return <>{children}</>;
}