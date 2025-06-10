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

export function WidgetCustomizer({ isOpen, onClose }: WidgetCustomizerProps) {
  const [activeTab, setActiveTab] = useState<'library' | 'settings'>('library');
  const [editingWidget, setEditingWidget] = useState<Widget | null>(null);
  const { widgets, resetToDefault, exportLayout, loadLayout } = useWidgetStore();

  const handleExportLayout = () => {
    const layout = exportLayout();
    const dataStr = JSON.stringify(layout, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
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
      reader.onload = (e) => {
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

  const tabs = [
    { id: 'library', label: 'Widget Library', icon: Plus },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-96 glass-effect border-l border-border shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Customize Dashboard</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-1 bg-muted/50 rounded-lg p-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-white text-primary shadow-sm'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {activeTab === 'library' && (
                <WidgetLibrary onEditWidget={setEditingWidget} />
              )}
              
              {activeTab === 'settings' && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Dashboard Actions</h3>
                    <div className="space-y-3">
                      <button
                        onClick={handleExportLayout}
                        className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                      >
                        <Download className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <p className="font-medium">Export Layout</p>
                          <p className="text-sm text-muted-foreground">Save current dashboard configuration</p>
                        </div>
                      </button>
                      
                      <label className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                        <Upload className="w-5 h-5 text-green-600" />
                        <div className="text-left">
                          <p className="font-medium">Import Layout</p>
                          <p className="text-sm text-muted-foreground">Load saved dashboard configuration</p>
                        </div>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImportLayout}
                          className="hidden"
                        />
                      </label>
                      
                      <button
                        onClick={resetToDefault}
                        className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-red-50 transition-colors text-red-600"
                      >
                        <RotateCcw className="w-5 h-5" />
                        <div className="text-left">
                          <p className="font-medium">Reset to Default</p>
                          <p className="text-sm text-red-500">Restore original dashboard layout</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Current Widgets</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {widgets.length} widgets configured
                    </p>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {widgets.map((widget) => (
                        <div
                          key={widget.id}
                          className="flex items-center justify-between p-2 rounded-lg bg-muted/30"
                        >
                          <span className="text-sm font-medium">{widget.title}</span>
                          <button
                            onClick={() => setEditingWidget(widget)}
                            className="p-1 rounded hover:bg-accent/50 transition-colors"
                          >
                            <Settings className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Widget Editor Modal */}
          {editingWidget && (
            <WidgetEditor
              widget={editingWidget}
              onClose={() => setEditingWidget(null)}
              onSave={(updatedWidget) => {
                // Handle widget update
                setEditingWidget(null);
              }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  );
}
