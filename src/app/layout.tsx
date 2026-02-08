import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Declutter - Home Organizing Checklist",
  description:
    "A room-by-room decluttering checklist to help you organize your home. Track what to trash, donate, keep, or decide on.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Declutter",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Inline script to set dark class before paint (avoids flash)
const darkModeScript = `
  (function(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased bg-gray-50 text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100`}>
        <main className="min-h-screen max-w-lg mx-auto bg-white dark:bg-[#111] shadow-sm dark:shadow-none">
          {children}
        </main>
      </body>
    </html>
  );
}
