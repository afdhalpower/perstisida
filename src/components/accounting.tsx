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
  return <div className="p-4 lg:p-8" data-unique-id="0791e581-d3b8-4601-98c1-9c36d25bbb14" data-file-name="components/accounting.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-unique-id="2a1c1d3a-360d-4cd2-bb0d-36a8dc361b55" data-file-name="components/accounting.tsx">
        <div className="flex items-center gap-3 mb-6" data-unique-id="7cea2833-e5ff-4d55-b8a9-d868d14b8073" data-file-name="components/accounting.tsx">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center" data-unique-id="accd8f8c-b23b-4058-9828-da447c4ff438" data-file-name="components/accounting.tsx">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div data-unique-id="1cb1ea38-fc2d-400c-b099-0713e86e41d0" data-file-name="components/accounting.tsx">
            <h1 className="text-4xl font-bold" data-unique-id="4de68a5c-add4-4c9e-ad60-3a6bc2c5723b" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="ecaa5e11-575c-429a-b99e-d463bf6789d5" data-file-name="components/accounting.tsx">Sistem Akuntansi</span></h1>
            <p className="text-lg text-muted-foreground" data-unique-id="5d8a716e-c763-4a4c-9b30-6dcfdd71ce04" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="1450dac6-96f6-4fc8-aea4-664ea0a4cab6" data-file-name="components/accounting.tsx">Kelola keuangan bisnis dengan sistem akuntansi lengkap</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" data-unique-id="7603f87d-a29b-4a0f-b1de-9e9a395873a1" data-file-name="components/accounting.tsx" data-dynamic-text="true">
        {/* Sidebar Menu */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="space-y-4" data-unique-id="75e1c680-a34e-473a-b08b-373accf17b73" data-file-name="components/accounting.tsx" data-dynamic-text="true">
          <h2 className="text-xl font-semibold mb-4" data-unique-id="c7fbc31c-3618-4fa6-8890-bddde50a9488" data-file-name="components/accounting.tsx"><span className="editable-text" data-unique-id="3fec707a-caf4-4bd2-b8ec-b6d0956c2e1c" data-file-name="components/accounting.tsx">Menu Akuntansi</span></h2>
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
          }} onClick={() => setActiveSection(section.id)} className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover-lift ${isActive ? 'gradient-primary text-white shadow-lg' : 'glass-effect hover:bg-accent/50'}`} data-unique-id="b3208586-96cc-413e-9ddf-ef85a41240be" data-file-name="components/accounting.tsx">
                <div className="flex items-start gap-3" data-unique-id="41f9d148-2a4c-4088-b126-1623f29b8b9e" data-file-name="components/accounting.tsx">
                  <Icon className={`w-5 h-5 mt-1 ${isActive ? 'text-white' : 'text-primary'}`} data-unique-id="04a52172-e51e-4ec9-b952-06d543c64c64" data-file-name="components/accounting.tsx" data-dynamic-text="true" />
                  <div data-unique-id="f7b33233-fa82-4bb0-92e7-496a4463f758" data-file-name="components/accounting.tsx">
                    <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-foreground'}`} data-unique-id="598bc48d-7555-46f4-88ff-157025a8051d" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.label}
                    </h3>
                    <p className={`text-sm ${isActive ? 'text-white/80' : 'text-muted-foreground'}`} data-unique-id="1d26be3e-7b30-4121-99ef-f3b921f1ffaa" data-file-name="components/accounting.tsx" data-dynamic-text="true">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.button>;
        })}
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-3" data-unique-id="290c32ca-85f1-4965-99a6-f64d9e644e53" data-file-name="components/accounting.tsx">
          <motion.div key={activeSection} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} data-unique-id="ee5bcc47-babc-48f7-889c-439269a27103" data-file-name="components/accounting.tsx" data-dynamic-text="true">
            {renderActiveSection()}
          </motion.div>
        </div>
      </div>
    </div>;
}