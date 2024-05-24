import { Inter } from "next/font/google";
import "./globals.css";

import 'bootstrap/dist/css/bootstrap.css';

import Menu from '@/components/client/menu';



import AuthProvider from '@/providers/authProvider';

import CartsProvider from '@/providers/cartsProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <CartsProvider>
      <AuthProvider>
        <Menu/>
        {children}
        </AuthProvider>
        </CartsProvider>
      </body>
    </html>
  );
}
