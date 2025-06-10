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
  return <div className="p-6 space-y-6" data-unique-id="61a7024e-3c50-4fde-ae09-c26f73414bfb" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
      {/* Search */}
      <div className="relative" data-unique-id="4c06b12e-2e35-4035-a1a2-046188cbf247" data-file-name="components/dashboard/widget-library.tsx">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <input type="text" placeholder="Search widgets..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" data-unique-id="c1d5193e-4c40-42fd-92b2-0f85be31238b" data-file-name="components/dashboard/widget-library.tsx" />
      </div>

      {/* Widget Templates */}
      <div className="space-y-4" data-unique-id="4c441593-84fe-4108-890e-8c1e523a6185" data-file-name="components/dashboard/widget-library.tsx">
        <h3 className="text-lg font-semibold" data-unique-id="717a1010-f1ea-4294-9729-4ea0d4b408b1" data-file-name="components/dashboard/widget-library.tsx"><span className="editable-text" data-unique-id="ea78fd9d-b883-4723-aae8-7c408d82bead" data-file-name="components/dashboard/widget-library.tsx">Available Widgets</span></h3>
        <div className="space-y-3" data-unique-id="ff442752-6d2f-4cd6-8440-678a18beaaf8" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
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
          }} className="p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors group" data-unique-id="40d69e3f-e71b-40ed-99d0-5daa8163ac59" data-file-name="components/dashboard/widget-library.tsx">
                <div className="flex items-start justify-between" data-unique-id="31a72e40-1f8f-4e20-874a-7fa0f47d888a" data-file-name="components/dashboard/widget-library.tsx">
                  <div className="flex items-start gap-3" data-unique-id="b9ad5dbe-dd0a-4e8a-9251-f568c1fa3cac" data-file-name="components/dashboard/widget-library.tsx">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center" data-unique-id="15d18476-e3a9-4094-adc6-dc9329941489" data-file-name="components/dashboard/widget-library.tsx">
                      <Icon className="w-5 h-5 text-primary" data-unique-id="39d54856-4828-4c58-ae20-9cb051fb80b7" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true" />
                    </div>
                    <div data-unique-id="a1e28ef8-591d-41d5-ae74-cb3e39e645a2" data-file-name="components/dashboard/widget-library.tsx">
                      <h4 className="font-semibold" data-unique-id="e272fbe2-a8df-4f92-a182-db2d0c9559e2" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">{template.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2" data-unique-id="dee5f2ed-8c76-4705-9ee8-de61e5892907" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
                        {template.description}
                      </p>
                      <div className="flex flex-wrap gap-1" data-unique-id="883279b0-ffb2-4c7a-9fba-7f1f48f52c87" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
                        {template.availableVisualizations.map(viz => <span key={viz} className="px-2 py-1 text-xs bg-muted rounded-md" data-unique-id="f8084543-dd43-480f-9c49-e36d599c942d" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true">
                            {viz}
                          </span>)}
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={() => createWidgetFromTemplate(template)} className="p-2 rounded-lg bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90" data-unique-id="35c938c7-f3d8-43a4-8be4-c4b97b0857d3" data-file-name="components/dashboard/widget-library.tsx">
                    <Plus className="w-4 h-4" data-unique-id="0768811f-a0b2-4e2d-b6c9-83cddaf17447" data-file-name="components/dashboard/widget-library.tsx" data-dynamic-text="true" />
                  </button>
                </div>
              </motion.div>;
        })}
        </div>
      </div>

      {filteredTemplates.length === 0 && <div className="text-center py-8" data-unique-id="2afdb92e-591b-4bd9-b501-8a2fdebd5bc5" data-file-name="components/dashboard/widget-library.tsx">
          <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground" data-unique-id="6ee159bd-1e59-4030-9fe6-379285c2704e" data-file-name="components/dashboard/widget-library.tsx"><span className="editable-text" data-unique-id="b73d912f-a477-4d9a-a295-394fae0fc507" data-file-name="components/dashboard/widget-library.tsx">No widgets found matching your search</span></p>
        </div>}
    </div>;
}