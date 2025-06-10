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
  return <div className="p-4 lg:p-8" data-unique-id="fe84a3bc-5ddd-45d5-89db-65f7ed78a2af" data-file-name="components/accounting.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="b34ed6d7-1b29-4768-aaac-87369e7509a3" data-file-name="components/accounting.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="0c3c4780-0ad8-464f-9698-f083337c088d" data-file-name="components/accounting.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="4fcce29f-b7ac-4c7e-a894-cb4b40697dc1" data-file-name="components/accounting.tsx">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="0e681159-1ccc-43a4-abf8-97425685b49c" data-file-name="components/accounting.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="a6408aad-d07d-49cc-b212-a4a96809afb1" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="7dd5f8fc-149f-48f4-a032-25146833382a" data-file-name="components/accounting.tsx">Sistem Akuntansi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="1e1a96e6-92aa-4aee-b77b-a2d18cfcceb6" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="949c41f6-7a94-4bd8-9687-5f0ac945b1a0" data-file-name="components/accounting.tsx">Kelola keuangan bisnis dengan sistem akuntansi lengkap</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" data-unique-id="e3019dfb-a5de-44fe-bb39-365cebd1ca3e" data-file-name="components/accounting.tsx" data-dynamic-text="true">
        {/* Sidebar Menu */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="space-y-4" data-unique-id="ee27d787-adac-47a5-95e3-637f9ef8936c" data-file-name="components/accounting.tsx" data-dynamic-text="true">
          <h2 className="text-xl font-semibold mb-4" data-unique-id="2613df93-fac8-42bd-93a2-b2844bdca7bc" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="244ce68d-df86-4007-8942-26ef9929fa7b" data-file-name="components/accounting.tsx">Menu Akuntansi</span></h2>
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
          }} onClick={() => setActiveSection(section.id)} className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="c6cddaa7-a0cc-4aa8-a450-80738cfaa4ef" data-file-name="components/accounting.tsx">
                <div className="flex items-start gap-3" data-unique-id="62f5d6c3-2488-4f1b-9a3f-920b0667580a" data-file-name="components/accounting.tsx">
                  <Icon className={`w-5 h-5 mt-1 ${isActive ? 'text-white' : 'text-primary'}`} data-unique-id="d4b0f289-11ad-49b1-b0b2-8b5dcd990515" data-file-name="components/accounting.tsx" data-dynamic-text="true" />
                  <div data-unique-id="8c0fed8a-4976-4bd0-9f56-04b97fb5fc1c" data-file-name="components/accounting.tsx">
                    <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-foreground'}`} data-unique-id="6cb525c6-f0f0-4458-a0f2-3a14e344978b" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.label}
                    </h3>
                    <p className={`text-sm ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="8b11240f-8860-41f0-90ef-21dffda33892" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.button>;
        })}
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3" data-unique-id="1c026ab8-152a-4f30-82cd-57a58c8a8167" data-file-name="components/accounting.tsx">
          <motion.div key={activeSection} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} data-unique-id="5a09216a-f9a4-409c-a42c-8e9d160ad8b4" data-file-name="components/accounting.tsx" data-dynamic-text="true">
            {renderActiveSection()}
          </motion.div>
        </div>
      </div>
    </div>;
}