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
      <div className="min-h-screen" data-unique-id="55b0bd3b-5513-4e53-98a0-cf22a5ef0ec1" data-file-name="app/page.tsx">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <main className="lg:ml-72 pt-16 lg:pt-0" data-unique-id="9228fd36-b3fa-4e89-9306-380732671f02" data-file-name="app/page.tsx" data-dynamic-text="true">
          {renderPage()}
        </main>
      </div>
    </AuthGuard>;
}