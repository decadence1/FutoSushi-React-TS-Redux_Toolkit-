import React from "react";
import ProductItem from "./ProductItem.tsx";

const ProductList: React.FC = () => {
  // Предположим, что у вас есть массив продуктов products
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    // Добавьте дополнительные продукты при необходимости
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
