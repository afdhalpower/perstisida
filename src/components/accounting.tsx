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
  return <div className="p-4 lg:p-8" data-unique-id="34301267-aef3-4439-a0d9-dfdda2276273" data-file-name="components/accounting.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="193b972b-2217-4370-9547-9f8b582de561" data-file-name="components/accounting.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="9fe3de75-7326-45f5-977f-ab0b22805a36" data-file-name="components/accounting.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="23d5cf70-6d38-4a03-b351-fb1b1bf688ff" data-file-name="components/accounting.tsx">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="b300fe9b-c609-4889-a941-8b01ad5b68f7" data-file-name="components/accounting.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="83cb888b-483c-46a4-8e4b-674c00fdd516" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="d7a44bcf-3017-4fee-b169-0acc58256856" data-file-name="components/accounting.tsx">Sistem Akuntansi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="90a0549f-466b-4174-b80d-8bbfe1d77028" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="d73a98d4-863f-47fc-9219-a0542d62ada8" data-file-name="components/accounting.tsx">Kelola keuangan bisnis dengan sistem akuntansi lengkap</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" data-unique-id="fa2dc9d3-2c2d-43a3-b8bd-9f56b76daf18" data-file-name="components/accounting.tsx" data-dynamic-text="true">
        {/* Sidebar Menu */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="space-y-4" data-unique-id="5f293537-0309-4353-b344-7a7398427486" data-file-name="components/accounting.tsx" data-dynamic-text="true">
          <h2 className="text-xl font-semibold mb-4" data-unique-id="ccedd6cf-eadb-4ca2-8f35-71c05892d031" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="95de5d56-3918-4b17-8acb-041a3f8dcc6b" data-file-name="components/accounting.tsx">Menu Akuntansi</span></h2>
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
          }} onClick={() => setActiveSection(section.id)} className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="be44d83b-095a-4785-9a71-1bed3cc90b48" data-file-name="components/accounting.tsx">
                <div className="flex items-start gap-3" data-unique-id="61c8917d-e7ee-4025-877c-485b3d144e9d" data-file-name="components/accounting.tsx">
                  <Icon className={`w-5 h-5 mt-1 ${isActive ? 'text-white' : 'text-primary'}`} data-unique-id="0a5ebdaf-01ba-4dcb-b1de-af655289f7a3" data-file-name="components/accounting.tsx" data-dynamic-text="true" />
                  <div data-unique-id="de9b73db-f21c-4866-abf1-bc6608c0eba1" data-file-name="components/accounting.tsx">
                    <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-foreground'}`} data-unique-id="2b955efb-a5d0-484c-846a-6912023b0b10" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.label}
                    </h3>
                    <p className={`text-sm ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="22758fbc-a913-4019-b581-5d99e473fe19" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.button>;
        })}
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3" data-unique-id="cda8ae23-3200-41f7-9f6a-20743a426be5" data-file-name="components/accounting.tsx">
          <motion.div key={activeSection} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} data-unique-id="1fbe0b6c-f284-40c3-a6e7-060736a9aa8d" data-file-name="components/accounting.tsx" data-dynamic-text="true">
            {renderActiveSection()}
          </motion.div>
        </div>
      </div>
    </div>;
}