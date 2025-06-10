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
      }} className="fixed inset-0 bg-black/50 z-50" onClick={onClose} data-unique-id="eec1bcdb-7fc2-407c-a11b-1c20a85c837e" data-file-name="components/dashboard/widget-customizer.tsx" />
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
      }} className="fixed right-0 top-0 h-full w-96 glass-effect border-l border-border shadow-2xl z-50 flex flex-col" data-unique-id="10b325e9-d522-420b-8a90-0695f2dafc5a" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
            {/* Header */}
            <div className="p-6 border-b border-border" data-unique-id="6f2b915c-8f5b-44d8-a0a1-3073aa17049e" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
              <div className="flex items-center justify-between mb-4" data-unique-id="924255af-536b-440c-bc32-1e143c9b1be3" data-file-name="components/dashboard/widget-customizer.tsx">
                <h2 className="text-2xl font-bold" data-unique-id="a09d5c42-6a92-4922-985c-251dd5fd131d" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="c60a911a-af3f-4ff8-87a9-98b998c23556" data-file-name="components/dashboard/widget-customizer.tsx">Customize Dashboard</span></h2>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent/50 transition-colors" data-unique-id="7e01384c-ac69-42ff-9c5b-a24d04954c06" data-file-name="components/dashboard/widget-customizer.tsx">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-1 bg-muted/50 rounded-lg p-1" data-unique-id="cf6846d1-448e-41b0-8c22-60ce3b3ce721" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                {tabs.map(tab => {
              const Icon = tab.icon;
              return <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`} data-unique-id="189e6a92-3965-4a96-8abe-feee157c368d" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>;
            })}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden" data-unique-id="ca95047a-b026-4521-9941-91d4a6053c0a" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
              {activeTab === 'library' && <WidgetLibrary onEditWidget={setEditingWidget} />}
              
              {activeTab === 'settings' && <div className="p-6 space-y-6" data-unique-id="93668fa9-01ec-45de-8251-8bce438969e5" data-file-name="components/dashboard/widget-customizer.tsx">
                  <div data-unique-id="65080656-86b3-4905-9d37-b4013508c94f" data-file-name="components/dashboard/widget-customizer.tsx">
                    <h3 className="text-lg font-semibold mb-4" data-unique-id="b3b75ff2-63b1-4538-ae58-ae505e1dec23" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="b6339c89-bc37-4810-9aeb-89adef6f48c2" data-file-name="components/dashboard/widget-customizer.tsx">Dashboard Actions</span></h3>
                    <div className="space-y-3" data-unique-id="28f1f29d-16e2-4253-8bf5-cda16349c6ce" data-file-name="components/dashboard/widget-customizer.tsx">
                      <button onClick={handleExportLayout} className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors" data-unique-id="3f96b6ae-b95a-419e-95ca-17ea0b441499" data-file-name="components/dashboard/widget-customizer.tsx">
                        <Download className="w-5 h-5 text-blue-600" />
                        <div className="text-left" data-unique-id="b47ddbe4-39ec-46fa-b060-35e51cd2c63c" data-file-name="components/dashboard/widget-customizer.tsx">
                          <p className="font-medium" data-unique-id="5cb85289-1c7a-4942-a11c-ab5a9fa291e4" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="9e1c51f3-4a42-46a7-8778-4cec14d9330c" data-file-name="components/dashboard/widget-customizer.tsx">Export Layout</span></p>
                          <p className="text-sm text-muted-foreground" data-unique-id="30fad484-ff1e-422f-b2b6-6562cb973fb9" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="2e7c56d8-294e-4a47-96fb-586d7903b7f0" data-file-name="components/dashboard/widget-customizer.tsx">Save current dashboard configuration</span></p>
                        </div>
                      </button>
                      
                      <label className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer" data-unique-id="5b359504-9966-4906-83b7-91f34c5537d9" data-file-name="components/dashboard/widget-customizer.tsx">
                        <Upload className="w-5 h-5 text-green-600" />
                        <div className="text-left" data-unique-id="036ac3d2-aec4-434e-9c19-7569bd894207" data-file-name="components/dashboard/widget-customizer.tsx">
                          <p className="font-medium" data-unique-id="d728ea6f-5b90-4abc-9672-b123cc3d6d6b" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="933519f3-9bdd-43ee-9c0f-8a6c165dd962" data-file-name="components/dashboard/widget-customizer.tsx">Import Layout</span></p>
                          <p className="text-sm text-muted-foreground" data-unique-id="01938a27-4275-4679-8321-59aabbcfa7e8" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="72ecd1e6-65c4-400a-b5bf-4453db583e83" data-file-name="components/dashboard/widget-customizer.tsx">Load saved dashboard configuration</span></p>
                        </div>
                        <input type="file" accept=".json" onChange={handleImportLayout} className="hidden" data-unique-id="345caf60-923f-48f5-bffe-b76c53c2d95c" data-file-name="components/dashboard/widget-customizer.tsx" />
                      </label>
                      
                      <button onClick={resetToDefault} className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-red-50 transition-colors text-red-600" data-unique-id="d0add009-a615-454b-8f27-5972a41788b3" data-file-name="components/dashboard/widget-customizer.tsx">
                        <RotateCcw className="w-5 h-5" />
                        <div className="text-left" data-unique-id="4f198f79-b74f-4b10-957d-aa6e38925d72" data-file-name="components/dashboard/widget-customizer.tsx">
                          <p className="font-medium" data-unique-id="dc835f98-5ab5-4a06-aca0-8b48b06a602d" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="917f7abe-cb53-44a9-a462-d201de50d930" data-file-name="components/dashboard/widget-customizer.tsx">Reset to Default</span></p>
                          <p className="text-sm text-red-500" data-unique-id="674e5fb8-6ff4-4e99-b3bc-d76357db3b1e" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="dcab69af-6129-4b87-8884-8b8ac57add4c" data-file-name="components/dashboard/widget-customizer.tsx">Restore original dashboard layout</span></p>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div data-unique-id="7fc598c8-f8e7-4a10-bfeb-3eb5348ab1a5" data-file-name="components/dashboard/widget-customizer.tsx">
                    <h3 className="text-lg font-semibold mb-4" data-unique-id="55e78f99-0bbd-4903-9b25-3d9b8751de41" data-file-name="components/dashboard/widget-customizer.tsx"><span className="editable-text" data-unique-id="83be9e07-d7da-4916-99ce-515e9b7c4c41" data-file-name="components/dashboard/widget-customizer.tsx">Current Widgets</span></h3>
                    <p className="text-sm text-muted-foreground mb-2" data-unique-id="66379c1b-4291-47b1-8412-c0d4b03cbd91" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                      {widgets.length}<span className="editable-text" data-unique-id="984ffc3d-999a-41e0-a736-e53b5473f52b" data-file-name="components/dashboard/widget-customizer.tsx"> widgets configured
                    </span></p>
                    <div className="space-y-2 max-h-48 overflow-y-auto" data-unique-id="bddb410f-aaab-431f-8a02-0c56b989ec08" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">
                      {widgets.map(widget => <div key={widget.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/30" data-unique-id="71de9b03-3a40-4eb7-8400-0a237acb7999" data-file-name="components/dashboard/widget-customizer.tsx">
                          <span className="text-sm font-medium" data-unique-id="e970cc05-3f95-4b51-8b17-d827dc66a5da" data-file-name="components/dashboard/widget-customizer.tsx" data-dynamic-text="true">{widget.title}</span>
                          <button onClick={() => setEditingWidget(widget)} className="p-1 rounded hover:bg-accent/50 transition-colors" data-unique-id="ab5fb289-888c-40a9-b033-e25e942bb851" data-file-name="components/dashboard/widget-customizer.tsx">
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