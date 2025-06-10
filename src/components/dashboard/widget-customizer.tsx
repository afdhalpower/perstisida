'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Settings, Download, Upload, RotateCcw } from 'lucide-react';
import { useWidgetStore } from '@/stores/widget-store';
import { WidgetLibrary } from './widget-library';
import { WidgetEditor } from './widget-editor';
import { Widget } from '@/types/widget';
interface WidgetCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}
export function WidgetCustomizer({
  isOpen,
  onClose
}: WidgetCustomizerProps) {
  const [activeTab, setActiveTab] = useState<'library' | 'settings'>('library');
  const [editingWidget, setEditingWidget] = useState<Widget | null>(null);
  const {
    widgets,
    resetToDefault,
    exportLayout,
    loadLayout
  } = useWidgetStore();
  const handleExportLayout = () => {
    const layout = exportLayout();
    const dataStr = JSON.stringify(layout, null, 2);
    const dataBlob = new Blob([dataStr], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dashboard-layout-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };
  const handleImportLayout = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        try {
          const layout = JSON.parse(e.target?.result as string);
          loadLayout(layout);
        } catch (error) {
          console.error('Failed to import layout:', error);
        }
      };
      reader.readAsText(file);
    }
  };
  const tabs = [{
    id: 'library',
    label: 'Widget Library',
    icon: Plus
  }, {
    id: 'settings',
    label: 'Settings',
    icon: Settings
  }];
  return <AnimatePresence>
      {isOpen && <>
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/50 z-50" onClick={onClose} data-unique-id="47f64a99-153d-4106-837f-950efef5df5a" data-file-name="components/dashboard/widget-customizer.tsx" />
          <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="fixed right-0 top-0 h-full w-96 glass-effect border-l border-border shadow-2xl z-50 flex flex-col" data-unique-id="47425921-0c44-4cee-b078-de0c9c76168c" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
            {/* Header */}
            <div className="p-6 border-b border-border" data-unique-id="c203c961-99c7-4879-9f3a-87a0e73b4d17" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="7383698f-7e51-4a2e-aca4-3e5a2db69856" data-file-name="components/dashboard/widget-customizer.tsx">
                <h2 className="text-2xl font-bold" data-unique-id="f51ee938-60e2-4476-8d1f-25310695a1a8" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="2df8a700-f8b4-4e9a-9100-511b2018f924" data-file-name="components/dashboard/widget-customizer.tsx">Customize Dashboard</span></h2>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent/50 transition-colors" data-unique-id="376d9a87-885c-44d0-9f2e-b2745b0a1b86" data-file-name="components/dashboard/widget-customizer.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-1 bg-muted/50 rounded-lg p-1" data-unique-id="e365ff8b-bbba-4707-bf0b-18036db40aae" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                {tabs.map(tab => {
              const Icon = tab.icon;
              return <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`} data-unique-id="0d794c74-e78f-4955-aa2d-d46c9ebd97f2" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>;
            })}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden" data-unique-id="df57997f-7071-466f-a756-d42568095b9f" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
              {activeTab === 'library' && <WidgetLibrary onEditWidget={setEditingWidget} />}
              
              {activeTab === 'settings' && <div className="p-6 space-y-6" data-unique-id="729f8780-1783-4d71-a694-848555714a0c" data-file-name="components/dashboard/widget-customizer.tsx">
                  <div data-unique-id="9a842b87-7c95-47f3-a1bd-ed5f5491d6da" data-file-name="components/dashboard/widget-customizer.tsx">
                    <h3 className="text-lg font-semibold mb-4" data-unique-id="d19d1abb-4894-4809-abf0-c1dc8b858a04" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="7662d337-4fd5-4f60-9a33-b9fb982e05ac" data-file-name="components/dashboard/widget-customizer.tsx">Dashboard Actions</span></h3>
                    <div className="space-y-3" data-unique-id="363da61c-a18e-4e6e-86d4-d5046e593c6d" data-file-name="components/dashboard/widget-customizer.tsx">
                      <button onClick={handleExportLayout} className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors" data-unique-id="2961670c-6c15-45a8-92df-01e77f9ffc30" data-file-name="components/dashboard/widget-customizer.tsx">
                        <Download className="w-5 h-5 text-blue-600" />
                        <div className="text-left" data-unique-id="5ca48d34-5da1-43b4-99c8-2958d8b9f02f" data-file-name="components/dashboard/widget-customizer.tsx">
                          <p className="font-medium" data-unique-id="590b5f1b-eabf-4c56-b06d-38c0b0813b26" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="b662f50a-dd9c-46c5-b9cd-d079dd19d0f6" data-file-name="components/dashboard/widget-customizer.tsx">Export Layout</span></p>
                          <p className="text-sm text-muted-foreground" data-unique-id="e625c42a-75d0-42da-92ce-2f9a07d21720" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="b302d488-f200-4dd2-a4fd-cef5957df268" data-file-name="components/dashboard/widget-customizer.tsx">Save current dashboard configuration</span></p>
                        </div>
                      </button>
                      
                      <label className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer" data-unique-id="1dcd83f0-80ab-4aa2-b05d-d676da466219" data-file-name="components/dashboard/widget-customizer.tsx">
                        <Upload className="w-5 h-5 text-green-600" />
                        <div className="text-left" data-unique-id="0ca85fbb-450a-45cf-bf7e-f4d97231aeef" data-file-name="components/dashboard/widget-customizer.tsx">
                          <p className="font-medium" data-unique-id="f1203496-6e22-46c5-b8ce-e559b5889b9b" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="e2025443-a9b4-42fe-9e71-362ed89180f0" data-file-name="components/dashboard/widget-customizer.tsx">Import Layout</span></p>
                          <p className="text-sm text-muted-foreground" data-unique-id="59c6f0ee-d7ad-441e-b2d6-3a95316e72c0" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="850a4009-ebf1-4904-942b-f6e1091464c3" data-file-name="components/dashboard/widget-customizer.tsx">Load saved dashboard configuration</span></p>
                        </div>
                        <input type="file" accept=".json" onChange={handleImportLayout} className="hidden" data-unique-id="3bbad372-5c6b-481c-9893-93b11d9162f4" data-file-name="components/dashboard/widget-customizer.tsx" />
                      </label>
                      
                      <button onClick={resetToDefault} className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-red-50 transition-colors text-red-600" data-unique-id="b5d92691-ae80-4cd1-8302-b65087b80dab" data-file-name="components/dashboard/widget-customizer.tsx">
                        <RotateCcw className="w-5 h-5" />
                        <div className="text-left" data-unique-id="8cd41d06-f8f2-48e0-aa05-9ea1fb9fe48f" data-file-name="components/dashboard/widget-customizer.tsx">
                          <p className="font-medium" data-unique-id="edc83fec-a59a-465a-811c-768741ecb6cd" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="7516186c-b561-4ef5-a111-70d51be9ff01" data-file-name="components/dashboard/widget-customizer.tsx">Reset to Default</span></p>
                          <p className="text-sm text-red-500" data-unique-id="8c5cfa73-f775-42d6-86d9-aa6795599063" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="8ac665bc-ad59-44fd-a5b3-eda622b0eeec" data-file-name="components/dashboard/widget-customizer.tsx">Restore original dashboard layout</span></p>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div data-unique-id="54aae13f-56f2-47dc-80c6-426c7c305925" data-file-name="components/dashboard/widget-customizer.tsx">
                    <h3 className="text-lg font-semibold mb-4" data-unique-id="137e3ee9-4dbc-4c40-8f70-7f551a39c6e0" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="a08229c0-d7c7-4ae7-88f0-5c8a8d88ef1a" data-file-name="components/dashboard/widget-customizer.tsx">Current Widgets</span></h3>
                    <p className="text-sm text-muted-foreground mb-2" data-unique-id="da565542-3bb9-4c16-ac37-ac8308fe030a" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                      {widgets.length}<span className="editable-text" data-unique-id="0cc48135-14d1-4fa8-b430-30c2cf13bfc0" data-file-name="components/dashboard/widget-customizer.tsx"> widgets configured
                    </span></p>
                    <div className="space-y-2 max-h-48 overflow-y-auto" data-unique-id="892790ad-7516-4c0c-becb-d37a40f8cd33" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                      {widgets.map(widget => <div key={widget.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/30" data-unique-id="3240ed20-2bf4-44fb-bd84-9ca9100b4ba7" data-file-name="components/dashboard/widget-customizer.tsx">
                          <span className="text-sm font-medium" data-unique-id="6f64f67f-d7c2-4218-ac4d-3f38e50e56dc" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">{widget.title}</span>
                          <button onClick={() => setEditingWidget(widget)} className="p-1 rounded hover:bg-accent/50 transition-colors" data-unique-id="ede2907b-4d88-413b-ab03-6f1bec8c8421" data-file-name="components/dashboard/widget-customizer.tsx">
                            <Settings className="w-4 h-4" />
                          </button>
                        </div>)}
                    </div>
                  </div>
                </div>}
            </div>
          </motion.div>
          
          {/* Widget Editor Modal */}
          {editingWidget && <WidgetEditor widget={editingWidget} onClose={() => setEditingWidget(null)} onSave={updatedWidget => {
        // Handle widget update
        setEditingWidget(null);
      }} />}
        </>}
    </AnimatePresence>;
}