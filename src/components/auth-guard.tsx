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
    return <div className="min-h-screen flex items-center justify-center" data-unique-id="38ddbba0-5d5b-45b8-9261-dc9ae60cf891" data-file-name="components/auth-guard.tsx">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="flex flex-col items-center gap-4" data-unique-id="313f38b3-8c67-4fb7-a0fb-232186afa76c" data-file-name="components/auth-guard.tsx">
          <div className="relative" data-unique-id="d2ceaa8a-5f44-4612-9604-a940dee28b05" data-file-name="components/auth-guard.tsx">
            <div className="w-16 h-16 rounded-full gradient-primary animate-pulse" data-unique-id="7d495e38-df48-44cd-92cf-af5173197bf2" data-file-name="components/auth-guard.tsx"></div>
            <Loader2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
          </div>
          <p className="text-muted-foreground font-medium" data-unique-id="d18bac06-c013-469a-a17c-44d9eea20450" data-file-name="components/auth-guard.tsx"><span className="editable-text" data-unique-id="d4cb2c0e-529f-4153-b07e-79c8b764a45a" data-file-name="components/auth-guard.tsx">Loading...</span></p>
        </motion.div>
      </div>;
  }
  if (!user) {
    return <LoginPage />;
  }
  return <>{children}</>;
}