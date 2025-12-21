import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import './styles/main.scss'
import { Inter } from 'next/font/google';
import { dmSans, spaceMono } from './fonts';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable} ${inter.className}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
