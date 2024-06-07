import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '@/pages';
import { useState } from 'react';
import QuantityInput from './QuantityInput';
// import { useState } from 'react';

interface CustomImageArrowProps extends CustomArrowProps {
  src: string,
}

function CustomArrow(props: CustomImageArrowProps) {
  const { className, style, onClick } = props;

  return (
    <img
      className={className}
      style={{ ...style, height: "34px" }}
      src={props.src}
      onClick={onClick}
      alt=''
    />
  );
}

interface ProductCarouselProps {
  products: Product[];
}

interface ProductsListProps {
  products: {
    products: Product[],
    success: boolean
  }
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow src={"/navigationIcons/rightArrow.svg"} />,
    prevArrow: <CustomArrow src={"/navigationIcons/leftArrow.svg"} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="product-item" onClick={() => handleProductClick(product)}>
            <img src={product.photo} alt={product.productName} />
            <p>{product.productName}</p>
            <p>R$ {(product.price + 1000).toFixed(2).replace(".", ",")}</p>
            <p className="discount">R$ {(product.price.toFixed(2)).replace(".", ",")}</p>
            <p className='frete'>Frete grátis</p>
            <button>Comprar</button>
          </div>
        ))}
      </Slider>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <p className='close-modal' onClick={closeModal}>x</p>
            <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            <div>
              <h2>{selectedProduct.productName}</h2>
              <p className='price'>R$ {(selectedProduct.price + 1000).toFixed(2).replace(".", ",")}</p>
              <p className='description'>{selectedProduct.descriptionShort}</p>
              <p className='see-more'>Veja mais detalhes do produto &gt;</p>
              <QuantityInput initialQuantity={1} min={1} max={100} />
              <button className='buy-button'>Comprar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export function ProductsList({ products }: ProductsListProps) {
  return (
    <section className='productsList'>
      <h2>Produtos relacionados</h2>
      <nav>
        <ul>
          <li><a href='#'><strong>CELULAR</strong></a></li>
          <li><a href='#'>ACESSÓRIOS</a></li>
          <li><a href='#'>TABLETS</a></li>
          <li><a href='#'>NOTEBOOKS</a></li>
          <li><a href='#'>TVS</a></li>
          <li><a href='#'>VER TODOS</a></li>
        </ul>
      </nav>
      <ProductCarousel products={products.products} />
    </section>
  );
}
