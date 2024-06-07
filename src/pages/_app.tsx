import type { AppProps } from "next/app";
import '../styles/index.scss'
import '../styles/CategoriesMenu.scss';
import '../styles/Footer.scss'
import '../styles/Header.scss';
import '../styles/Main.scss';
import '../styles/Featured.scss';
import '../styles/ProductsList.scss';
import '../styles/Brands.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
