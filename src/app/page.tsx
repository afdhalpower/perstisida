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
      <div className="min-h-screen" data-unique-id="749be57d-6f4c-40cf-a636-5641ed2d66a5" data-file-name="app/page.tsx">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <main className="lg:ml-72 pt-16 lg:pt-0" data-unique-id="a0ca9634-6131-46ab-a4d6-8ff63b62c754" data-file-name="app/page.tsx" data-dynamic-text="true">
          {renderPage()}
        </main>
      </div>
    </AuthGuard>;
}