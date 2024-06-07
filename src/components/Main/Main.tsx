import { Product } from '@/pages';
import { CategoriesMenu } from '../CategoriesMenu/CategoriesMenu';
import { ProductsList } from '../ProductsList/ProductsList';
import { Featured } from '../Featured/Featured';
import { Brands } from '../Brands/Brands';

interface MainProps {
  products: {
    products: Product[],
    success: boolean
  }
}

export function Main({products}: MainProps) {
  return (
    <main>
      <div>
        <div>
          <h1>Venha conhecer nossas <br /> promoções</h1>
          <p>50% Off nos produtos</p>
          <button>Ver produto</button>
        </div>
      </div>
      <CategoriesMenu />
      <ProductsList products={products}/>
      <Featured />
      <Brands />
    </main>
  )
}