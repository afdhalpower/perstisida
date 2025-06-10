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
  }} className="fixed inset-0 z-60 flex items-center justify-center p-4" data-unique-id="65a8e7e0-6a42-4711-b04a-3767fa14d318" data-file-name="components/dashboard/widget-editor.tsx">
      <div className="glass-effect rounded-2xl p-6 w-full max-w-md border border-border shadow-2xl" data-unique-id="ec4b8d92-ab69-4940-8978-db2929e09ae5" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between mb-6" data-unique-id="f98bfd55-9a0e-4aef-bb1c-920c4d997b39" data-file-name="components/dashboard/widget-editor.tsx">
          <h3 className="text-xl font-bold" data-unique-id="eeb7dd4c-b3ac-4e6c-8e3d-874b0da005ce" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="d5f29a64-7399-4a34-b466-d91bbf5e0e54" data-file-name="components/dashboard/widget-editor.tsx">Edit Widget</span></h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent/50 transition-colors" data-unique-id="2bfa80bb-7627-47bd-9630-ee2261f83f24" data-file-name="components/dashboard/widget-editor.tsx">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4" data-unique-id="21975d03-92d2-44d0-b144-2b739547dca0" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
          {/* Title */}
          <div data-unique-id="f141ff06-c4d5-4360-9a37-d0d9f620cdd9" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="318181bf-6708-4b02-9943-4e79a5b1e1ce" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="4039da27-293e-469e-aa2e-f8e4f0c18e16" data-file-name="components/dashboard/widget-editor.tsx">Title</span></label>
            <input type="text" value={editedWidget.title} onChange={e => setEditedWidget({
            ...editedWidget,
            title: e.target.value
          })} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="b4c9cff1-0309-403d-81e4-86b71208a194" data-file-name="components/dashboard/widget-editor.tsx" />
          </div>

          {/* Visualization Type */}
          <div data-unique-id="59c31d53-95b8-4c71-bee3-e84094f818e7" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="2ae92311-23f4-4152-912e-3eaed8095348" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="1f6b45f5-fbe9-450d-9063-0fa52fa60231" data-file-name="components/dashboard/widget-editor.tsx">Visualization</span></label>
            <select value={editedWidget.visualization} onChange={e => setEditedWidget({
            ...editedWidget,
            visualization: e.target.value as any
          })} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="ae8ff532-87b5-455f-ad05-562680527216" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
              {visualizationOptions.map(option => <option key={option.value} value={option.value} data-unique-id="88bf4469-dd47-430c-8873-df35990e38f0" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
                  {option.label}
                </option>)}
            </select>
          </div>

          {/* Size */}
          <div data-unique-id="283d2fec-9a6a-473d-afd9-404db2386cbd" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="f9befbb8-a8a8-48d8-b022-b47619792cc2" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="e3771eea-22e0-4981-b6b3-bd977f2f601a" data-file-name="components/dashboard/widget-editor.tsx">Size</span></label>
            <select value={editedWidget.size} onChange={e => setEditedWidget({
            ...editedWidget,
            size: e.target.value as any
          })} className="w-full px-3 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="34f9cb6a-e2f9-4d4f-9515-4f9ea69d88bc" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
              {sizeOptions.map(option => <option key={option.value} value={option.value} data-unique-id="bc3db78f-69d1-4e84-bf97-1bc0dd592982" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
                  {option.label}
                </option>)}
            </select>
          </div>

          {/* Color */}
          <div data-unique-id="68afc72d-2ab8-41cb-adf4-3a38f51080a4" data-file-name="components/dashboard/widget-editor.tsx">
            <label className="block text-sm font-medium mb-2" data-unique-id="32617295-9d39-48ed-8acb-904252e0e46e" data-file-name="components/dashboard/widget-editor.tsx"><span className="editable-text" data-unique-id="7cec13ea-c776-473e-891f-8c88cfadf7c5" data-file-name="components/dashboard/widget-editor.tsx">Color</span></label>
            <div className="grid grid-cols-4 gap-2" data-unique-id="38869cc5-c7f3-42d0-a308-539cfc92819b" data-file-name="components/dashboard/widget-editor.tsx" data-dynamic-text="true">
              {colorOptions.map(color => <button key={color.value} onClick={() => setEditedWidget({
              ...editedWidget,
              color: color.value
            })} className={`w-full h-10 rounded-lg ${color.class} ${editedWidget.color === color.value ? 'ring-2 ring-offset-2 ring-primary' : ''} transition-all`} title={color.label} data-unique-id="f37cf848-9013-461b-94ed-dfe147e937ee" data-file-name="components/dashboard/widget-editor.tsx" />)}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6" data-unique-id="77482286-d5ac-4333-a0cc-71af6a72271a" data-file-name="components/dashboard/widget-editor.tsx">
          <button onClick={handleDelete} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors" data-unique-id="425234ef-d1e6-49a0-afe0-261bad469e38" data-file-name="components/dashboard/widget-editor.tsx">
            <Trash2 className="w-4 h-4" /><span className="editable-text" data-unique-id="c6910c04-d549-4b2f-b80f-3bbf3744719e" data-file-name="components/dashboard/widget-editor.tsx">
            Delete
          </span></button>
          <button onClick={handleSave} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white hover:shadow-lg transition-all" data-unique-id="9bdb5e33-a49c-47af-9ef9-150f090addd4" data-file-name="components/dashboard/widget-editor.tsx">
            <Save className="w-4 h-4" /><span className="editable-text" data-unique-id="809494d8-9049-4ebe-bc95-526001868b87" data-file-name="components/dashboard/widget-editor.tsx">
            Save
          </span></button>
        </div>
      </div>
    </motion.div>;
}