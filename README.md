# PestisidaApp - Sistem Pencatatan Penjualan Pestisida

Aplikasi web modern untuk mengelola dan mencatat penjualan pestisida dengan dashboard interaktif, sistem akuntansi lengkap, dan analisis penjualan real-time.

## 🚀 Teknologi yang Digunakan

### Frontend
- **Next.js 15** - React framework dengan App Router
- **React 18** - Library UI
- **TypeScript** - Bahasa pemrograman utama
- **TailwindCSS V4** - Framework CSS untuk styling

### Backend & Database
- **Firebase** - Backend-as-a-Service
- **Firestore** - NoSQL database
- **Firebase Authentication** - Sistem autentikasi

### State Management
- **Zustand** - State management library

### Bahasa Pemrograman
- **TypeScript** - Bahasa pemrograman utama
- **JavaScript** - Runtime environment

## ✨ Fitur Utama

1. **Dashboard Interaktif**
   - Widget yang dapat dikustomisasi dengan drag-and-drop
   - Visualisasi data real-time
   - Export/import konfigurasi dashboard

2. **Manajemen Produk**
   - CRUD operations untuk produk pestisida
   - Tracking harga modal dan jual
   - Pencarian dan filter produk

3. **Sistem Transaksi**
   - Multi-item transactions
   - Sistem diskon
   - Auto-complete untuk produk
   - Keranjang belanja interaktif

4. **Laporan Penjualan Komprehensif**
   - Dashboard analisis penjualan
   - Filter berdasarkan tanggal
   - Top-selling products dan companies
   - Export ke PDF dan CSV

5. **Sistem Akuntansi Lengkap**
   - Laporan keuangan (Neraca, Laba Rugi, Arus Kas)
   - Buku besar dan jurnal transaksi
   - Analisis rasio keuangan
   - Anggaran dan realisasi

6. **Autentikasi Google**
   - Login menggunakan akun Google
   - Session management
   - Protected routes

7. **Riwayat Transaksi**
   - History semua transaksi
   - Filter berdasarkan tanggal
   - Export data transaksi

## 📁 Struktur Direktori

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── accounting/        # Komponen akuntansi
│   │   ├── budget-realization.tsx
│   │   ├── financial-analysis.tsx
│   │   ├── financial-reports.tsx
│   │   ├── general-ledger.tsx
│   │   └── transaction-journal.tsx
│   ├── dashboard/         # Komponen dashboard
│   │   ├── draggable-widget.tsx
│   │   ├── widget-customizer.tsx
│   │   ├── widget-editor.tsx
│   │   ├── widget-library.tsx
│   │   └── widget-renderer.tsx
│   ├── sales-report/      # Komponen laporan penjualan
│   │   ├── date-range-filter.tsx
│   │   ├── export-options.tsx
│   │   ├── sales-charts.tsx
│   │   ├── sales-metrics.tsx
│   │   ├── top-companies.tsx
│   │   └── top-products.tsx
│   ├── accounting.tsx     # Main accounting component
│   ├── auth-guard.tsx     # Authentication guard
│   ├── cart-item.tsx      # Cart item component
│   ├── cart-summary.tsx   # Cart summary component
│   ├── dashboard.tsx      # Main dashboard
│   ├── history.tsx        # Transaction history
│   ├── login-page.tsx     # Login page
│   ├── navigation.tsx     # Navigation component
│   ├── products.tsx       # Product management
│   ├── sales-report.tsx   # Sales report main
│   └── transactions.tsx   # Transaction management
├── lib/
│   ├── firebase.ts        # Firebase configuration
│   └── utils.ts          # Utility functions
├── stores/
│   └── widget-store.ts   # Zustand store for widgets
├── styles/
│   └── globals.css       # Global styles
└── types/
    ├── index.ts          # Main type definitions
    └── widget.ts         # Widget type definitions
```

## 🛠️ Instalasi dan Setup

### Prerequisites
- Node.js 18+ 
- Bun package manager

### Langkah Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd pestisida-app
```

2. **Install dependencies**
```bash
bun install
```

3. **Setup Firebase**
   - Buat project baru di [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication dan Firestore
   - Setup Google Authentication provider
   - Dapatkan Firebase configuration

4. **Setup Environment Variables**
   Buat file `.env.local` di root directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

5. **Setup Firestore Collections**
   Buat collections berikut di Firestore:
   - `products` - Data produk
   - `transactions` - Data transaksi

## 🚀 Menjalankan Aplikasi

### Development Mode
```bash
bun dev
```
Aplikasi akan berjalan di `http://localhost:3000`

### Production Build
```bash
bun build
bun start
```

### Lint & Format
```bash
./lint.sh
```

## 📊 API/Database Schema

### Firestore Collections

#### Products Collection
```typescript
{
  id: string
  name: string
  company: string
  costPrice: number
  sellPrice: number
}
```

#### Transactions Collection
```typescript
{
  id: string
  productName: string
  company: string
  quantity: number
  costPrice: number
  sellPrice: number
  profit: number
  timestamp: Timestamp
  discount?: number
}
```

## 📦 Dependencies Utama

### Production Dependencies
```json
{
  "next": "^15.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "firebase": "^10.0.0",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.400.0",
  "recharts": "^2.8.0",
  "zustand": "^4.4.0",
  "date-fns": "^3.0.0",
  "react-dnd": "^16.0.0",
  "react-dnd-html5-backend": "^16.0.0",
  "jspdf": "^2.5.0",
  "html2canvas": "^1.4.0",
  "papaparse": "^5.4.0",
  "tailwindcss": "^4.0.0"
}
```

## 🔧 Environment Variables

Aplikasi membutuhkan environment variables berikut:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API Key | ✅ |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | ✅ |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID | ✅ |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | ✅ |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | ✅ |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID | ✅ |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Firebase Measurement ID | ❌ |

## 👥 Panduan Kontribusi

1. **Fork repository**
2. **Buat branch baru**
```bash
git checkout -b feature/amazing-feature
```
3. **Commit changes**
```bash
git commit -m 'Add some amazing feature'
```
4. **Push ke branch**
```bash
git push origin feature/amazing-feature
```
5. **Buka Pull Request**

### Coding Standards
- Gunakan TypeScript untuk semua file
- Follow ESLint configuration
- Gunakan Prettier untuk formatting
- Komponen maksimal 200 lines
- Gunakan "use client" directive untuk client components

## 🎨 UI Components & Styling

### CSS Framework
- **TailwindCSS V4** - Utility-first CSS framework
- **Custom CSS Variables** - Untuk theming dan konsistensi

### Icon Library
- **Lucide React** - Modern icon library
- Icons: Activity, BarChart3, Building, Calculator, Calendar, DollarSign, Download, Edit3, Eye, Home, Package, Settings, ShoppingCart, TrendingUp, User, dan lainnya

### Animations
- **Framer Motion** - Animation library untuk React
- Micro-interactions dan page transitions
- Drag and drop animations untuk widget customization

### Charts & Visualizations
- **Recharts** - Chart library untuk React
- Bar charts, Line charts, Pie charts
- Responsive dan interactive charts

## 📋 Form Structure & Validation

### Forms Implemented
1. **Product Form**
   - Name validation (required)
   - Company validation (required)
   - Price validation (number, min 0)

2. **Transaction Form**
   - Product selection with autocomplete
   - Quantity validation (number, min 1)
   - Price validation (number, min 0)

3. **Authentication**
   - Google OAuth integration
   - Session management

### Validation Rules
- Required fields marked dengan asterisk
- Real-time validation feedback
- Error messages dalam Bahasa Indonesia
- Number inputs dengan min/max constraints

## 🧪 Testing

Testing framework belum diimplementasikan. Rencana testing:
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Cypress atau Playwright
- **E2E Tests**: User workflows testing

## 📚 Dokumentasi Tambahan

- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Kredit dan Atribusi

### Third-party Assets
- **Unsplash** - Stock photos untuk placeholder images
- **Google Fonts** - Poppins font family
- **Lucide** - Icon set
- **Firebase** - Backend infrastructure

### External Libraries
- React ecosystem dan komunitas open source
- TailwindCSS team untuk CSS framework
- Recharts untuk visualization components

## 📞 Informasi Kontak

### Developer
- **Afdhal RZ** - [@aaafdhal](https://www.instagram.com/aaafdhal/)

### Support
Untuk pertanyaan, bug reports, atau feature requests:
1. Buka issue di GitHub repository
2. Contact developer melalui Instagram
3. Email: [email-placeholder]

### Project Links
- **Repository**: [GitHub Repository URL]
- **Live Demo**: [Demo URL if available]
- **Documentation**: [Documentation URL if available]

---

**PestisidaApp** - Memudahkan pencatatan dan pengelolaan penjualan pestisida untuk kios Anda.
