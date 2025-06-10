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

export function WidgetEditor({ widget, onClose, onSave }: WidgetEditorProps) {
  const [editedWidget, setEditedWidget] = useState<Widget>({ ...widget });
  const { updateWidget, removeWidget } = useWidgetStore();

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

  const visualizationOptions = [
    { value: 'number', label: 'Number' },
    { value: 'bar', label: 'Bar Chart' },
    { value: 'line', label: 'Line Chart' },
    { value: 'pie', label: 'Pie Chart' },
    { value: 'progress', label: 'Progress Bar' }
  ];

  const sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  const colorOptions = [
    { value: 'blue', label: 'Blue', class: 'bg-blue-500' },
    { value: 'green', label: 'Green', class: 'bg-green-500' },
    { value: 'purple', label: 'Purple', class: 'bg-purple-500' },
    { value: 'orange', label: 'Orange', class: 'bg-orange-500' },
    { value: 'red', label: 'Red', class: 'bg-red-500' },
    { value: 'indigo', label: 'Indigo', class: 'bg-indigo-500' },
    { value: 'pink', label: 'Pink', class: 'bg-pink-500' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-60 flex items-center justify-center p-4"
    >
      <div className="glass-effect rounded-2xl p-6 w-full max-w-md border border-border shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Edit Widget</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={editedWidget.title}
              onChange={(e) => setEditedWidget({ ...editedWidget, title: e.target.value })}
              className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Visualization Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Visualization</label>
            <select
              value={editedWidget.visualization}
              onChange={(e) => setEditedWidget({ ...editedWidget, visualization: e.target.value as any })}
              className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring"
            >
              {visualizationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-medium mb-2">Size</label>
            <select
              value={editedWidget.size}
              onChange={(e) => setEditedWidget({ ...editedWidget, size: e.target.value as any })}
              className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring"
            >
              {sizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium mb-2">Color</label>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setEditedWidget({ ...editedWidget, color: color.value })}
                  className={`w-full h-10 rounded-lg ${color.class} ${
                    editedWidget.color === color.value
                      ? 'ring-2 ring-offset-2 ring-primary'
                      : ''
                  } transition-all`}
                  title={color.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
          <button
            onClick={handleSave}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white hover:shadow-lg transition-all"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>
    </motion.div>
  );
}
