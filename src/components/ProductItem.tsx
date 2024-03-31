import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductProps {
  product: Product;
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img src={`images/${product.id}.jpg`} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <button>Добавь в корзину</button>
    </div>
  );
};

export default ProductItem;
