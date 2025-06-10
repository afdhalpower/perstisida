'use client';

import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { motion } from 'framer-motion';
import { GripVertical, Settings } from 'lucide-react';
import { Widget } from '@/types/widget';
import { useWidgetStore } from '@/stores/widget-store';
import { WidgetRenderer } from './widget-renderer';
interface DraggableWidgetProps {
  widget: Widget;
  index: number;
  onEdit: (widget: Widget) => void;
  stats: any;
  chartData?: any[];
}
interface DragItem {
  type: string;
  id: string;
  index: number;
}
export function DraggableWidget({
  widget,
  index,
  onEdit,
  stats,
  chartData
}: DraggableWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    moveWidget,
    isCustomizing
  } = useWidgetStore();
  const [{
    handlerId
  }, drop] = useDrop<DragItem, void, {
    handlerId: string | symbol | null;
  }>({
    accept: 'widget',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Update positions
      moveWidget(item.id, {
        x: hoverIndex % 4,
        y: Math.floor(hoverIndex / 4)
      });
      item.index = hoverIndex;
    }
  });
  const [{
    isDragging
  }, drag, preview] = useDrag<DragItem, void, {
    isDragging: boolean;
  }>({
    type: 'widget',
    item: () => {
      return {
        type: 'widget',
        id: widget.id,
        index
      };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    canDrag: isCustomizing
  });
  const opacity = isDragging ? 0.4 : 1;
  drag(drop(ref));
  const getWidgetSize = (size: Widget['size']) => {
    switch (size) {
      case 'small':
        return 'col-span-1';
      case 'medium':
        return 'col-span-2';
      case 'large':
        return 'col-span-3';
      default:
        return 'col-span-1';
    }
  };
  return <motion.div ref={ref} style={{
    opacity
  }} data-handler-id={handlerId} className={`${getWidgetSize(widget.size)} relative group`} initial={{
    opacity: 0,
    scale: 0.9
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.2
  }} data-unique-id="0d841d3b-8dd1-4f32-b6d5-3551c9336aeb" data-file-name="components/dashboard/draggable-widget.tsx">
      <div className="glass-effect rounded-2xl p-6 h-full hover-lift transition-all duration-300 relative" data-unique-id="690198b4-6887-4512-bbee-38c956f43102" data-file-name="components/dashboard/draggable-widget.tsx" data-dynamic-text="true">
        {/* Drag Handle - Only visible in customization mode */}
        {isCustomizing && <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity" data-unique-id="90d1fe3e-52a5-4087-8112-721b3964f61c" data-file-name="components/dashboard/draggable-widget.tsx">
            <div className="p-1 rounded cursor-move text-muted-foreground hover:text-foreground" data-unique-id="b6c92dc7-13ad-4c2d-ac36-25b5005c3e69" data-file-name="components/dashboard/draggable-widget.tsx">
              <GripVertical className="w-4 h-4" />
            </div>
          </div>}

        {/* Edit Button - Only visible in customization mode */}
        {isCustomizing && <button onClick={() => onEdit(widget)} className="absolute top-2 right-2 p-2 rounded-lg bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" data-unique-id="33b82ba6-cbc6-4409-93b5-ca6807ab5d98" data-file-name="components/dashboard/draggable-widget.tsx">
            <Settings className="w-4 h-4" />
          </button>}

        {/* Widget Content */}
        <WidgetRenderer widget={widget} stats={stats} chartData={chartData} />
      </div>
    </motion.div>;
}