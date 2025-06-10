'use client';

import { useState } from 'react';
import { AuthGuard } from '@/components/auth-guard';
import { Navigation } from '@/components/navigation';
import { Dashboard } from '@/components/dashboard';
import { Products } from '@/components/products';
import { Transactions } from '@/components/transactions';
import { History } from '@/components/history';
import { Accounting } from '@/components/accounting';
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
      case 'reports':
      case 'history':
        return <History />;
      case 'accounting':
        return <Accounting />;
      default:
        return <Dashboard />;
    }
  };
  return <AuthGuard>
      <div className="min-h-screen" data-unique-id="8a199b35-a896-4480-907b-e864707c2d56" data-file-name="app/page.tsx">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <main className="lg:ml-72 pt-16 lg:pt-0" data-unique-id="7a1f583f-fc45-4eb8-a387-a6411268c2cd" data-file-name="app/page.tsx" data-dynamic-text="true">
          {renderPage()}
        </main>
      </div>
    </AuthGuard>;
}