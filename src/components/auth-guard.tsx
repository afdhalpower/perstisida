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
    return <div className="min-h-screen flex items-center justify-center" data-unique-id="badafaea-5f9a-45f7-99d8-737682225248" data-file-name="components/auth-guard.tsx">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="flex flex-col items-center gap-4" data-unique-id="25b024e9-6cc9-485b-8aa1-67be0aa49f2e" data-file-name="components/auth-guard.tsx">
          <div className="relative" data-unique-id="30f8b39a-2ff8-44b0-93b0-44a83601a9b7" data-file-name="components/auth-guard.tsx">
            <div className="w-16 h-16 rounded-full gradient-primary animate-pulse" data-unique-id="27300dd3-7bda-4590-a6a6-72493dc6b259" data-file-name="components/auth-guard.tsx"></div>
            <Loader2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
          </div>
          <p className="text-muted-foreground font-medium" data-unique-id="7abf2073-6c9d-44b0-8530-2950a8e2e9d7" data-file-name="components/auth-guard.tsx"><span className="editable-text" data-unique-id="41be4351-8974-40b7-af14-ea5fcdf0629c" data-file-name="components/auth-guard.tsx">Loading...</span></p>
        </motion.div>
      </div>;
  }
  if (!user) {
    return <LoginPage />;
  }
  return <>{children}</>;
}