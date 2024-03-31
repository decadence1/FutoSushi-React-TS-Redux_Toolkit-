import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ProductCarousel.scss";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Текущий слайд

  const sliderRef = useRef<Slider>(null); // Ref для доступа к компоненту Slider

  useEffect(() => {
    const interval = setInterval(() => {
      // Переключение на следующий слайд
      if (sliderRef.current) {
        const nextSlide =
          currentSlide === products.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(nextSlide);
        sliderRef.current.slickGoTo(nextSlide); // Переключение к следующему слайду
      }
    }, 5000); // Изменение слайда каждые 5 секунд

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, [currentSlide, products.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide, // Устанавливаем начальный слайд
  };

  return (
    <div className="product-carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <button className="action-button">Подробнее</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
