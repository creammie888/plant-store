"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import SunlightLevelBar from "@/components/SunlightLevelBar";
import { handleAddToCart } from "@/utils/cart";
import { LuCloud, LuSun, LuDroplet } from "react-icons/lu";
import "@/styles/globals.css";

const sunlightDescriptions = {
  1: "Very low light",
  2: "Low to medium light",
  3: "Moderate light",
  4: "Bright indirect light",
  5: "Direct sunlight"
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:8000/api/plants/${id}/`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const sunlightLevel = parseInt(product.sunlight);
  const sunlightText = sunlightDescriptions[sunlightLevel] || "Unknown light level";

  return (
    <div className="product-container-box">
      <div className="product-image">
        <img src={`/plants/${product.image_path}`} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-description" lang="th">{product.description}</p>

        <div className="detail-box">
          <div className="detail-icon"><LuCloud /></div>
          <SunlightLevelBar level={sunlightLevel} />
          <div className="detail-icon"><LuSun /></div>
          <p>{sunlightText}</p>
        </div>

        <div className="detail-box">
          <div className="detail-icon"><LuDroplet /></div>
          <p><span>{product.water} / week</span><br />Water</p>
        </div>

        <div className="detail-tips">
          <p>Care Tips</p>
          <p>{product.care_tip}</p>
        </div>

        <div className="detail-box">
          <p className="product-price">฿{product.price}<span>/ piece</span></p>
          <button className="btn-add-cart3" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
          <div className="btn-fav3"><FavoriteButton plantId={product.id} /></div>
        </div>
      </div>
    </div>
  );
}
