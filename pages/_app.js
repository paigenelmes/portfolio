import '@/styles/globals.css';
import { Merriweather_Sans } from 'next/font/google';
const merryweatherSans = Merriweather_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={merryweatherSans.className}>
      <Component {...pageProps} />
    </main>
  );
}