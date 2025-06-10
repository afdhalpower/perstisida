'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, DollarSign, ShoppingCart, TrendingUp, Package, Search } from 'lucide-react';
import { useWidgetStore } from '@/stores/widget-store';
import { Widget, WidgetTemplate } from '@/types/widget';
interface WidgetLibraryProps {
  onEditWidget: (widget: Widget) => void;
}
const iconMap = {
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Package
};
export function WidgetLibrary({
  onEditWidget
}: WidgetLibraryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    availableTemplates,
    addWidget
  } = useWidgetStore();
  const filteredTemplates = availableTemplates.filter(template => template.name.toLowerCase().includes(searchTerm.toLowerCase()) || template.description.toLowerCase().includes(searchTerm.toLowerCase()));
  const createWidgetFromTemplate = (template: WidgetTemplate) => {
    const newWidget: Widget = {
      id: `widget-${Date.now()}`,
      type: template.type,
      title: template.name,
      metric: template.metrics[0],
      visualization: template.defaultVisualization,
      size: 'small',
      position: {
        x: 0,
        y: 0
      },
      color: getRandomColor()
    };
    addWidget(newWidget);
  };
  const getRandomColor = () => {
    const colors = ['blue', 'green', 'purple', 'orange', 'red', 'indigo', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return <div className="p-6 space-y-6" data-unique-id="5d274ee5-8c5d-49dc-b5c4-40b44c443f96" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
      {/* Search */}
      <div className="relative" data-unique-id="a1a9985f-346d-463b-a4be-dd4020e0eb80" data-file-name="components/dashboard/widget-library.tsx">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <input type="text" placeholder="Search widgets..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="866ab09d-b0f0-42e4-b156-b7f89a2ba026" data-file-name="components/dashboard/widget-library.tsx" />
      </div>

      {/* Widget Templates */}
      <div className="space-y-4" data-unique-id="d60f989d-0d90-4015-8915-3859212adf05" data-file-name="components/dashboard/widget-library.tsx">
        <h3 className="text-lg font-semibold" data-unique-id="99aaf51f-b304-4fad-b62f-1eb905d030b9" data-file-name="components/dashboard/widget-library.tsx"><span className="editable-text" data-unique-id="aff79512-91e3-44e3-b5fd-1e948934af4c" data-file-name="components/dashboard/widget-library.tsx">Available Widgets</span></h3>
        <div className="space-y-3" data-unique-id="3aadd0fc-ac9f-43f1-b933-221d30815973" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
          {filteredTemplates.map((template, index) => {
          const Icon = iconMap[template.icon as keyof typeof iconMap] || Package;
          return <motion.div key={template.id} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors group" data-unique-id="9625c9dc-8ee8-4cbb-ac78-954935152e70" data-file-name="components/dashboard/widget-library.tsx">
                <div className="flex items-start justify-between" data-unique-id="ff8dcb5f-d510-4dff-bb8a-51603d387d9f" data-file-name="components/dashboard/widget-library.tsx">
                  <div className="flex items-start gap-3" data-unique-id="c901a1d1-39e3-4a7e-a816-239fdde7497b" data-file-name="components/dashboard/widget-library.tsx">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center" data-unique-id="fed9da20-0865-4f7f-85e1-503d54caac23" data-file-name="components/dashboard/widget-library.tsx">
                      <Icon className="w-5 h-5 text-primary" data-unique-id="dd57eb62-6367-41d2-9bd5-ce56a8e1ca30" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true" />
                    </div>
                    <div data-unique-id="199c4e12-10c9-4527-a25f-af109a51bd83" data-file-name="components/dashboard/widget-library.tsx">
                      <h4 className="font-semibold" data-unique-id="40273a29-2b95-4aa1-bab9-071fac250f25" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">{template.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2" data-unique-id="33d3f038-811b-45d8-b151-dd30fbb65765" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
                        {template.description}
                      </p>
                      <div className="flex flex-wrap gap-1" data-unique-id="75862ed9-13f5-4a09-8057-2248a05588ad" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
                        {template.availableVisualizations.map(viz => <span key={viz} className="px-2 py-1 text-xs bg-muted rounded-md" data-unique-id="e5438370-b566-4e58-901b-7618e5482ea5" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
                            {viz}
                          </span>)}
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={() => createWidgetFromTemplate(template)} className="p-2 rounded-lg bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90" data-unique-id="c532249b-1960-431b-8f9a-65b76e23d265" data-file-name="components/dashboard/widget-library.tsx">
                    <Plus className="w-4 h-4" data-unique-id="946e7ab2-5776-477f-9031-b744bfa6075a" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </motion.div>;
        })}
        </div>
      </div>

      {filteredTemplates.length === 0 && <div className="text-center py-8" data-unique-id="2fb9ac37-edb9-4f9c-81b6-b15cf23144e3" data-file-name="components/dashboard/widget-library.tsx">
          <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground" data-unique-id="28454a5a-d295-48ee-abaf-7aa5989f9d06" data-file-name="components/dashboard/widget-library.tsx"><span className="editable-text" data-unique-id="b18451d6-bca3-403f-af51-85fc834fa212" data-file-name="components/dashboard/widget-library.tsx">No widgets found matching your search</span></p>
        </div>}
    </div>;
}