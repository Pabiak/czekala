import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wojciech Czekała',
  description:
    'Oficjalna strona Prof. Wojciecha Czekały – naukowca, dydaktyka i pasjonata wiedzy. Informacje o działalności naukowej, publikacjach i kontakt.',
  alternates: {
    canonical: 'https://wojciechczekala.pl/',
  },
  openGraph: {
    type: 'website',
    url: 'https://wojciechczekala.pl/',
    title: 'Wojciech Czekała',
    description:
      'Oficjalna strona Prof. Wojciecha Czekały – naukowca, dydaktyka i pasjonata wiedzy. Informacje o działalności naukowej, publikacjach i kontakt.',
    images: [
      {
        url: 'https://wojciechczekala.pl/czekala1.jpg',
        height: 630,
        alt: 'Wojciech Czekała',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wojciech Czekała',
    description:
      'Oficjalna strona Prof. Wojciecha Czekały – naukowca, dydaktyka i pasjonata wiedzy. Informacje o działalności naukowej, publikacjach i kontakt.',
    images: ['https://wojciechczekala.pl/czekala1.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
