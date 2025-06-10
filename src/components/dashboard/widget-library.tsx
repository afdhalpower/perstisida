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
  return <div className="p-6 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <input type="text" placeholder="Search widgets..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg glass-effect border border-border focus:ring-2 focus:ring-ring" />
      </div>

      {/* Widget Templates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold"><span className="editable-text">Available Widgets</span></h3>
        <div className="space-y-3">
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
          }} className="p-4 rounded-lg border border-border hover:bg-accent/30 transition-colors group">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{template.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {template.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {template.availableVisualizations.map(viz => <span key={viz} className="px-2 py-1 text-xs bg-muted rounded-md">
                            {viz}
                          </span>)}
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={() => createWidgetFromTemplate(template)} className="p-2 rounded-lg bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>;
        })}
        </div>
      </div>

      {filteredTemplates.length === 0 && <div className="text-center py-8">
          <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground"><span className="editable-text">No widgets found matching your search</span></p>
        </div>}
    </div>;
}