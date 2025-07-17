import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../container/header';
import Footer from '../container/footer';
import Providers from '../components/providers';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commerce',
  description: 'Creating an e-commerce application with fakeapistore.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
            style: { background: "#fff", color: "#000" },
            success: {
              duration: 3000,
              theme: { primary: "green", secondary: "black" },
            },
            error: {
              style: { background: "#fbe8e9", color: "#000" },
              duration: 2000,
              theme: { primary: "green", secondary: "black" },
            },
          }}
        />
      </body>
    </html>
  );
}
