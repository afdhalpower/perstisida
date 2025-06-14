export interface Product {
  id: string;
  name: string;
  company: string;
  costPrice: number;
  sellPrice: number;
}

export interface Transaction {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  costPrice: number;
  sellPrice: number;
  profit: number;
  timestamp: Date;
}

export interface CartItem {
  id: string;
  productName: string;
  company: string;
  costPrice: number;
  sellPrice: number;
  quantity: number;
  profit: number;
}

export interface DashboardStats {
  todayTransactions: number;
  todayProfit: number;
  totalProducts: number;
  monthlyRevenue: number;
}

export interface Widget {
  id: string;
  type: 'metric' | 'chart' | 'progress' | 'counter';
  title: string;
  metric: string;
  visualization: 'number' | 'bar' | 'line' | 'pie' | 'progress';
  size: 'small' | 'medium' | 'large';
  position: { x: number; y: number };
  color: string;
  data?: any;
}

export interface WidgetTemplate {
  id: string;
  name: string;
  type: Widget['type'];
  defaultVisualization: Widget['visualization'];
  availableVisualizations: Widget['visualization'][];
  metrics: string[];
  description: string;
  icon: string;
}

export interface DashboardLayout {
  widgets: Widget[];
  lastModified: Date;
}
