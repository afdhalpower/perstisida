'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Save, Trash2 } from 'lucide-react';
import { useWidgetStore } from '@/stores/widget-store';
import { Widget } from '@/types/widget';
interface WidgetEditorProps {
  widget: Widget;
  onClose: () => void;
  onSave: (widget: Widget) => void;
}
export function WidgetEditor({
  widget,
  onClose,
  onSave
}: WidgetEditorProps) {
  const [editedWidget, setEditedWidget] = useState<Widget>({
    ...widget
  });
  const {
    updateWidget,
    removeWidget
  } = useWidgetStore();
  const handleSave = () => {
    updateWidget(widget.id, editedWidget);
    onSave(editedWidget);
  };
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this widget?')) {
      removeWidget(widget.id);
      onClose();
    }
  };
  const visualizationOptions = [{
    value: 'number',
    label: 'Number'
  }, {
    value: 'bar',
    label: 'Bar Chart'
  }, {
    value: 'line',
    label: 'Line Chart'
  }, {
    value: 'pie',
    label: 'Pie Chart'
  }, {
    value: 'progress',
    label: 'Progress Bar'
  }];
  const sizeOptions = [{
    value: 'small',
    label: 'Small'
  }, {
    value: 'medium',
    label: 'Medium'
  }, {
    value: 'large',
    label: 'Large'
  }];
  const colorOptions = [{
    value: 'blue',
    label: 'Blue',
    class: 'bg-blue-500'
  }, {
    value: 'green',
    label: 'Green',
    class: 'bg-green-500'
  }, {
    value: 'purple',
    label: 'Purple',
    class: 'bg-purple-500'
  }, {
    value: 'orange',
    label: 'Orange',
    class: 'bg-orange-500'
  }, {
    value: 'red',
    label: 'Red',
    class: 'bg-red-500'
  }, {
    value: 'indigo',
    label: 'Indigo',
    class: 'bg-indigo-500'
  }, {
    value: 'pink',
    label: 'Pink',
    class: 'bg-pink-500'
  }];
  return <motion.div initial={{
    opacity: 0,
    scale: 0.9
  }} animate={{
    opacity: 1,
    scale: 1
  }} exit={{
    opacity: 0,
    scale: 0.9
  }} className="fixed inset-0 z-60 flex items-center justify-center p-4" data-unique-id="093945e9-3775-46f2-a0f2-d45cecfaa1ba" data-file-name="components/dashboard/widget-editor.tsx">
      <div className="glass-effect rounded-2xl p-6 w-full max-w-md border border-border shadow-2xl" data-unique-id="31d9ed6e-2b63-4e68-bcf5-c56079f3f171" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="97e69035-70e9-40a6-a319-9e743423d2b1" data-file-name="components/dashboard/widget-editor.tsx">
          <h3 className="text-xl font-bold" data-unique-id="40de6a69-5caf-4041-b61a-ec9f70b4cdf3" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="17ab2a04-6e5c-4f9d-b941-e05c3626cf1e" data-file-name="components/dashboard/widget-editor.tsx">Edit Widget</span></h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent/50 transition-colors" data-unique-id="cf60e28e-292e-4b38-a334-cc71af8ce350" data-file-name="components/dashboard/widget-editor.tsx">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4" data-unique-id="22cc3d17-4f1d-404c-ad10-7f292505c81f" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
          {/* Title */}
          <div data-unique-id="7655c9dd-3285-47c3-b3bb-ecb73c9890fa" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="841b24b4-8fc3-4df7-a9a2-5b06de13678f" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="54704f54-0a2e-4b14-a98c-5e30efce044f" data-file-name="components/dashboard/widget-editor.tsx">Title</span></label>
            <input type="text" value={editedWidget.title} onChange={e => setEditedWidget({
            ...editedWidget,
            title: e.target.value
          })} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="7ffa2dd3-7732-4a37-a411-81425f0393a3" data-file-name="components/dashboard/widget-editor.tsx" />
          </div>

          {/* Visualization Type */}
          <div data-unique-id="12158565-8893-4cfd-b59e-52862fe497d8" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="40c42203-db24-4f6e-a8ca-939f8a2bcc04" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="561a89f9-5d52-48de-9ac4-c63748225767" data-file-name="components/dashboard/widget-editor.tsx">Visualization</span></label>
            <select value={editedWidget.visualization} onChange={e => setEditedWidget({
            ...editedWidget,
            visualization: e.target.value as any
          })} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="0b2c86f9-f1f3-4f51-aeb5-f616ad7d1ee6" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
              {visualizationOptions.map(option => <option key={option.value} value={option.value} data-unique-id="2cd840c3-9813-4814-b63c-3ab4b0349023" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
                  {option.label}
                </option>)}
            </select>
          </div>

          {/* Size */}
          <div data-unique-id="a4e4431a-2d1a-4c82-995c-29e3019e0660" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="304c8794-0bb1-4f2c-b307-d3c5726e5925" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="9f243eab-8386-4075-9a7a-d86afd3a9991" data-file-name="components/dashboard/widget-editor.tsx">Size</span></label>
            <select value={editedWidget.size} onChange={e => setEditedWidget({
            ...editedWidget,
            size: e.target.value as any
          })} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="ead6e335-f165-47cf-aac8-aaccd098425c" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
              {sizeOptions.map(option => <option key={option.value} value={option.value} data-unique-id="18871631-69ab-4c45-855c-102bc2155282" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
                  {option.label}
                </option>)}
            </select>
          </div>

          {/* Color */}
          <div data-unique-id="112d3a99-74d9-46de-9bad-3ce48424aad0" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="190e3302-1cbf-45f4-a396-5ab446221f69" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="59c0f633-f3e8-4a2b-8de8-cf27686902ec" data-file-name="components/dashboard/widget-editor.tsx">Color</span></label>
            <div className="grid grid-cols-4 gap-2" data-unique-id="8f218c09-209c-441d-a35d-1ce3aff79add" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
              {colorOptions.map(color => <button key={color.value} onClick={() => setEditedWidget({
              ...editedWidget,
              color: color.value
            })} className={`w-full h-10 rounded-lg ${color.class} ${editedWidget.color === color.value ? 'ring-2 ring-offset-2 ring-primary' : ''} transition-all`} title={color.label} data-unique-id="89a1ddc6-38e2-4a9f-a126-de393d1665f0" data-file-name="components/dashboard/widget-editor.tsx" />)}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6" data-unique-id="20cfd00e-42cf-44f9-8742-517419f72362" data-file-name="components/dashboard/widget-editor.tsx">
          <button onClick={handleDelete} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors" data-unique-id="5e8277d8-628d-4791-a0a7-5c1adf7268dc" data-file-name="components/dashboard/widget-editor.tsx">
            <Trash2 className="w-4 h-4" /><span className="editable-text" data-unique-id="c28dfcaa-9c4e-4e4d-8451-1b21e9d6efac" data-file-name="components/dashboard/widget-editor.tsx">
            Delete
          </span></button>
          <button onClick={handleSave} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white hover:shadow-lg transition-all" data-unique-id="8a53b9e3-f13f-4077-926d-dd35856df11b" data-file-name="components/dashboard/widget-editor.tsx">
            <Save className="w-4 h-4" /><span className="editable-text" data-unique-id="88229b1e-de3e-4e71-a5f3-73ac8d56087d" data-file-name="components/dashboard/widget-editor.tsx">
            Save
          </span></button>
        </div>
      </div>
    </motion.div>;
}