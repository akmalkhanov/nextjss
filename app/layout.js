import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-[1535px] h-24 bg-white text-3xl flex items-center justify-center gap-24 font-bold text-indigo-400">
          <Link href="/home">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
        <main className="w-[1200px] m-auto mt-8">
          {children}
        </main>
      </body>
    </html>
  );
}
