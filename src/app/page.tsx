'use client';

import { useState } from 'react';
import { AuthGuard } from '@/components/auth-guard';
import { Navigation } from '@/components/navigation';
import { Dashboard } from '@/components/dashboard';
import { Products } from '@/components/products';
import { Transactions } from '@/components/transactions';
import { History } from '@/components/history';
export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <Products />;
      case 'transactions':
        return <Transactions />;
      case 'history':
        return <History />;
      default:
        return <Dashboard />;
    }
  };
  return <AuthGuard>
      <div className="min-h-screen" data-unique-id="cc46472a-4d21-41d6-8390-68be275b67c5" data-file-name="app/page.tsx">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <main className="lg:ml-72 pt-16 lg:pt-0" data-unique-id="5c29d3c6-20ff-4de3-b7c6-d3a5ac5dfa71" data-file-name="app/page.tsx" data-dynamic-text="true">
          {renderPage()}
        </main>
      </div>
    </AuthGuard>;
}