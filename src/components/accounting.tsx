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
  return <div className="p-4 lg:p-8" data-unique-id="3ffa5ee8-249d-4073-a144-2e0834acc0cf" data-file-name="components/accounting.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="d5db9214-89ee-4e50-810b-c85ba7cb8bd8" data-file-name="components/accounting.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="89fb3044-9533-4203-a36e-86e3f891d51f" data-file-name="components/accounting.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="b27066a5-e31b-4e14-aa0e-2509a02e7dcf" data-file-name="components/accounting.tsx">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="2c5ea8ba-e28a-4d0a-a010-376ce15b8867" data-file-name="components/accounting.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="541a7179-6350-4866-85ec-0fa668b8e7bb" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="2abcd752-873c-47ac-8a6a-c54d3d4c324c" data-file-name="components/accounting.tsx">Sistem Akuntansi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="a55337b5-1eae-45c9-9fcb-e08cd93a96be" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="4180fbb4-f8b9-465a-9020-68492a55539a" data-file-name="components/accounting.tsx">Kelola keuangan bisnis dengan sistem akuntansi lengkap</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" data-unique-id="9333429e-fd99-4d1f-9922-91cdf2b7a346" data-file-name="components/accounting.tsx" data-dynamic-text="true">
        {/* Sidebar Menu */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="space-y-4" data-unique-id="71c51dc4-b79a-47ae-b11c-a515b56330d2" data-file-name="components/accounting.tsx" data-dynamic-text="true">
          <h2 className="text-xl font-semibold mb-4" data-unique-id="9b2bf679-5e5c-47f5-8e30-ac4b7dbd5f96" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="0adc4059-c30e-475f-a996-d5438c536e3b" data-file-name="components/accounting.tsx">Menu Akuntansi</span></h2>
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
          }} onClick={() => setActiveSection(section.id)} className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="3cd0bf0c-2f18-4a35-a73d-50233a777822" data-file-name="components/accounting.tsx">
                <div className="flex items-start gap-3" data-unique-id="279cf3c0-adee-40ba-a39a-3275f548b755" data-file-name="components/accounting.tsx">
                  <Icon className={`w-5 h-5 mt-1 ${isActive ? 'text-white' : 'text-primary'}`} data-unique-id="2bef64b0-7d20-4772-8e94-125afa9699b1" data-file-name="components/accounting.tsx" data-dynamic-text="true" />
                  <div data-unique-id="50f31439-0db7-4d6e-8ae3-152e35d89ba2" data-file-name="components/accounting.tsx">
                    <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-foreground'}`} data-unique-id="802ae55f-3eee-4aaa-8a39-ce0ba61bbd65" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.label}
                    </h3>
                    <p className={`text-sm ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="41c8431e-b85b-46f3-a7a9-cb027184ba92" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.button>;
        })}
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3" data-unique-id="6fbd5845-f4fc-4829-9a29-7c7ef4460493" data-file-name="components/accounting.tsx">
          <motion.div key={activeSection} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} data-unique-id="196f54a8-4257-4934-9932-61b1764254bf" data-file-name="components/accounting.tsx" data-dynamic-text="true">
            {renderActiveSection()}
          </motion.div>
        </div>
      </div>
    </div>;
}