"use client";

import { useParams,useState  } from "next/navigation";
import originalProducts from "@/data/products";
import FavoriteButton from "@/components/FavoriteButton";
import "./product.css";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = originalProducts.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-container">
        <div className="product-image">
            <img src={product.image} alt={product.name} />
            <div className="btn-fav3"><FavoriteButton plantId={product.id} /></div>
        </div>
        <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">Price: <span>฿{product.price}</span></p>
            <p className="description">{product.description}</p>
            <button className="btn-add-cart3">Add to Cart</button>
        </div>

    </div>
  );
}
