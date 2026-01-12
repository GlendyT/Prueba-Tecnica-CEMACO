import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prueba Tecnica CEMACO",
  description: "Prueba Tecnica CEMACO",
  icons: {
    icon: "/logoCortoMobile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={` antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
