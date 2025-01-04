import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/ThemeContext';
import Navbar from '@/components/Navbar';
import { CursorBadgeContainer, CursorBadgeText } from '@/app/styles';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bilal Tosun | Software Developer',
  description: 'Software Developer with expertise in React, Next.js, Angular, and modern web technologies. Experienced in front-end development, UI/UX, and building responsive web applications.',
  keywords: 'Software Developer, React Developer, Next.js, Angular, Frontend Developer, Web Development, JavaScript, TypeScript',
  manifest: '/portfolio/site.webmanifest',
  metadataBase: new URL('https://bilaltosungit.github.io/portfolio'),
  openGraph: {
    title: 'Bilal Tosun | Software Developer',
    description: 'Software Developer with expertise in React, Next.js, Angular, and modern web technologies.',
    url: 'https://bilaltosungit.github.io/portfolio',
    siteName: 'Bilal Tosun Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@bilaltosun',
    title: 'Bilal Tosun | Software Developer',
    description: 'Software Developer with expertise in React, Next.js, Angular, and modern web technologies.',
  },
  icons: {
    icon: '/portfolio/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Link href="https://cursor.sh" target="_blank" style={{ textDecoration: 'none' }}>
            <CursorBadgeContainer>
              <CursorBadgeText>⚡ Built with Cursor</CursorBadgeText>
            </CursorBadgeContainer>
          </Link>
        </ThemeProvider>
      </body>
    </html>
  );
} 