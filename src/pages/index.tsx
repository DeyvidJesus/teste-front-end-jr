// pages/index.js
import React from 'react';
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Main } from "../components/Main/Main"

export interface Product {
  productName: string,
  descriptionShort: string,
  photo: string,
  price: number
}

interface DataProps {
  data: {
    products: Product[],
    success: boolean
  }
}

export default function Home(data: DataProps) {
  const products = data.data;

  return (
    <>
      <Header />
      <Main products={products}/>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // Chama a API em cada solicitação
  const res = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
  const data = await res.json();

  return {
    props: {data},
  };
}
