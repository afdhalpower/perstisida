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
    return <div className="min-h-screen flex items-center justify-center" data-unique-id="c23feffb-501c-4108-9e4e-5f0d2e339fec" data-file-name="components/auth-guard.tsx">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} className="flex flex-col items-center gap-4" data-unique-id="baf8007c-fa31-4fcb-876f-b933c30d46c7" data-file-name="components/auth-guard.tsx">
          <div className="relative" data-unique-id="9053d850-3d51-435f-8377-2d68c0862b5a" data-file-name="components/auth-guard.tsx">
            <div className="w-16 h-16 rounded-full gradient-primary animate-pulse" data-unique-id="8585bd22-3e41-4081-9abb-97e88587a033" data-file-name="components/auth-guard.tsx"></div>
            <Loader2 className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
          </div>
          <p className="text-muted-foreground font-medium" data-unique-id="f8401a66-0dd7-44a8-8522-d09d7c3158cd" data-file-name="components/auth-guard.tsx"><span className="editable-text" data-unique-id="6e99747a-728a-4795-b24f-64439a7e88f3" data-file-name="components/auth-guard.tsx">Loading...</span></p>
        </motion.div>
      </div>;
  }
  if (!user) {
    return <LoginPage />;
  }
  return <>{children}</>;
}