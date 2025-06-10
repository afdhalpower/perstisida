'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BookOpen, TrendingUp, Target, Download } from 'lucide-react';
import { FinancialReports } from './accounting/financial-reports';
import { GeneralLedger } from './accounting/general-ledger';
import { TransactionJournal } from './accounting/transaction-journal';
import { FinancialAnalysis } from './accounting/financial-analysis';
import { BudgetRealization } from './accounting/budget-realization';
type AccountingSection = 'financial-reports' | 'general-ledger' | 'transaction-journal' | 'financial-analysis' | 'budget-realization';
export function Accounting() {
  const [activeSection, setActiveSection] = useState<AccountingSection>('financial-reports');
  const sections = [{
    id: 'financial-reports' as AccountingSection,
    label: 'Laporan Keuangan',
    icon: FileText,
    description: 'Neraca, Laba Rugi, Arus Kas'
  }, {
    id: 'general-ledger' as AccountingSection,
    label: 'Buku Besar',
    icon: BookOpen,
    description: 'Catatan transaksi per akun'
  }, {
    id: 'transaction-journal' as AccountingSection,
    label: 'Jurnal Transaksi',
    icon: Calculator,
    description: 'Pencatatan jurnal harian'
  }, {
    id: 'financial-analysis' as AccountingSection,
    label: 'Analisis Rasio',
    icon: TrendingUp,
    description: 'Analisis kinerja keuangan'
  }, {
    id: 'budget-realization' as AccountingSection,
    label: 'Anggaran & Realisasi',
    icon: Target,
    description: 'Perbandingan anggaran vs aktual'
  }];
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'financial-reports':
        return <FinancialReports />;
      case 'general-ledger':
        return <GeneralLedger />;
      case 'transaction-journal':
        return <TransactionJournal />;
      case 'financial-analysis':
        return <FinancialAnalysis />;
      case 'budget-realization':
        return <BudgetRealization />;
      default:
        return <FinancialReports />;
    }
  };
  return <div className="p-4 lg:p-8" data-unique-id="5b6c0a55-5749-4fc6-b0f4-922e277d0f82" data-file-name="components/accounting.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="a2226a26-5efe-4299-b87d-93220a6abb51" data-file-name="components/accounting.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="ef2201f3-5962-4872-a8be-19dc4faa3832" data-file-name="components/accounting.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="a2037457-e458-436c-999f-a756c722bfb3" data-file-name="components/accounting.tsx">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="2a370c01-4de8-4dfd-8c76-e849075ec1cc" data-file-name="components/accounting.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="234a4005-02ce-413a-9f23-9d6f897a20f8" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="c81d2c5f-9822-4168-9136-2835c40b48e1" data-file-name="components/accounting.tsx">Sistem Akuntansi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="3ae3fff3-0136-4523-9484-627ef397b44f" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="e6645913-813a-418d-9f36-d38fa99a104c" data-file-name="components/accounting.tsx">Kelola keuangan bisnis dengan sistem akuntansi lengkap</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" data-unique-id="3da0941f-1176-4fbe-a2d0-58e73e279326" data-file-name="components/accounting.tsx" data-dynamic-text="true">
        {/* Sidebar Menu */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="space-y-4" data-unique-id="ee2f58a7-346a-4f44-8062-c8c1718f8587" data-file-name="components/accounting.tsx" data-dynamic-text="true">
          <h2 className="text-xl font-semibold mb-4" data-unique-id="41a3c7e4-c1ae-4de3-8249-eb5d91fd5bc9" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="bac38f10-30d4-411a-b6f8-d1945bd9893b" data-file-name="components/accounting.tsx">Menu Akuntansi</span></h2>
          {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return <motion.button key={section.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }} onClick={() => setActiveSection(section.id)} className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="0d579985-552e-41f0-8aa3-4d0ca72b21ec" data-file-name="components/accounting.tsx">
                <div className="flex items-start gap-3" data-unique-id="19e81a95-1c1f-4a0e-855e-7d1594784b18" data-file-name="components/accounting.tsx">
                  <Icon className={`w-5 h-5 mt-1 ${isActive ? 'text-white' : 'text-primary'}`} data-unique-id="863b3246-2113-4889-bb63-e4cb176ee39b" data-file-name="components/accounting.tsx" data-dynamic-text="true" />
                  <div data-unique-id="f57fc477-c2d6-40fb-86d2-637b3c714cd5" data-file-name="components/accounting.tsx">
                    <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-foreground'}`} data-unique-id="1b74b74f-36b8-48bf-a769-d005699464a8" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.label}
                    </h3>
                    <p className={`text-sm ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="d04a44c0-0d1e-44b6-aa2e-8228e45c5e93" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.button>;
        })}
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3" data-unique-id="7c2ca50c-5945-4f01-b19b-e72db699d64f" data-file-name="components/accounting.tsx">
          <motion.div key={activeSection} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} data-unique-id="86aa616f-149b-4824-b991-e1754e40beef" data-file-name="components/accounting.tsx" data-dynamic-text="true">
            {renderActiveSection()}
          </motion.div>
        </div>
      </div>
    </div>;
}