import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'تاجر - موقع الإعلانات المبوبة في اليمن',
  description: 'موقع تاجر للإعلانات المبوبة في اليمن - سيارات، عقارات، وظائف، إلكترونيات وأكثر',
  keywords: 'تاجر، إعلانات، اليمن، سيارات، عقارات، وظائف، إلكترونيات',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoSansArabic.className}>
        {children}
      </body>
    </html>
  );
}