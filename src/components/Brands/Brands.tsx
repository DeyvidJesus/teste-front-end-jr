import Slider, { CustomArrowProps } from "react-slick";

interface CustomImageArrowProps extends CustomArrowProps {
  src: string,
}

function CustomArrow(props: CustomImageArrowProps) {
  const { className, style, onClick } = props;

  return (
    <img
      className={className}
      style={{ ...style }}
      src={props.src}
      onClick={onClick}
      alt=''
    />
  );
}

const BrandsCarousel = () => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <CustomArrow src={ "/navigationIcons/brandRightArrow.svg" } />,
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

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        <div className="brand-circle"><img src="/logos/VTEX Pink Logo.svg" alt="" /></div>
        <div className="brand-circle"><img src="/logos/VTEX Pink Logo.svg" alt="" /></div>
        <div className="brand-circle"><img src="/logos/VTEX Pink Logo.svg" alt="" /></div>
        <div className="brand-circle"><img src="/logos/VTEX Pink Logo.svg" alt="" /></div>
        <div className="brand-circle"><img src="/logos/VTEX Pink Logo.svg" alt="" /></div>
        <div className="brand-circle"><img src="/logos/VTEX Pink Logo.svg" alt="" /></div>
        <div className="brand-circle"><img src="/logos/VTEX Pink Logo.svg" alt="" /></div>
      </Slider>
    </div>
  );
};

export function Brands() {
  return (
    <section className="brands">
      <h2>Navegue por marcas</h2>
      <BrandsCarousel />
    </section>
  )
}