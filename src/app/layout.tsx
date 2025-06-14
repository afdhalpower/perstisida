import "@/styles/globals.css";
import React from "react";
import { type Metadata } from "next";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
export const metadata: Metadata = {
  title: {
    default: "PestisidaApp - Sistem Pencatatan Penjualan Pestisida",
    template: "%s | PestisidaApp"
  },
  description: "Sistem pencatatan penjualan pestisida yang mudah dan efisien untuk kios Anda",
  applicationName: "PestisidaApp",
  keywords: ["pestisida", "penjualan", "kios", "pertanian", "pencatatan", "stok"],
  authors: [{
    name: "PestisidaApp Team"
  }],
  creator: "PestisidaApp Team",
  publisher: "PestisidaApp Team",
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PestisidaApp"
  },
  formatDetection: {
    telephone: false
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html suppressHydrationWarning lang="id" data-unique-id="aa4baf6d-fd1f-4370-8222-c4a57edf38ab" data-file-name="app/layout.tsx">
      <body className="min-h-screen antialiased" data-unique-id="dbd40ef8-ef85-4686-9cbd-66a690c5c3e2" data-file-name="app/layout.tsx" data-dynamic-text="true">
        {children}
      </body>
    </html>;
}