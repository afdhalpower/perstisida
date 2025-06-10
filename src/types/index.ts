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

export interface DashboardStats {
  todayTransactions: number;
  todayProfit: number;
  totalProducts: number;
  monthlyRevenue: number;
}
