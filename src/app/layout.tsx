import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { headData } from "./personal/data";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/st-logo.png" />
        <meta name="name" content="Sean Tarzy" />
        <meta name="description" content="Sean Tarzy's Portfolio" />
        <meta name="keywords" content="Sean Tarzy, Portfolio" />
        <title>{headData.title as string}</title>
      </head>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={headData.description || undefined} />
        <title>{headData.title as string}</title>
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
