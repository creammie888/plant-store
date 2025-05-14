"use client";
import { useState } from "react";
import ProductSlider from "@/components/ProductSlider";
import originalProducts from "@/data/products";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";
import "./catalog.css";

export default function CatalogPage() {
  const [plants, setPlants] = useState(originalProducts);



  return (
    <div className="catalog-container">
        <ProductSlider />
        <div className="catalog-content">
            <h1>All Products</h1>
            <div className="products-container">
              {plants.map((plant) => (
                <Link href={`/product/${plant.id}`} key={plant.id} className="product">
                    <div className="image-box">
                      <img src={plant.image} alt={plant.name} />
                    </div>
                    <div className="card-info">
                      <p className="name">{plant.name}</p>
                      <div className="card-info-row">
                        <p className="price">฿{plant.price}</p>
                          <div className="container-btn2">
                            <button className="btn-add-cart2">+</button>
                            <FavoriteButton plantId={plant.id} />
                          </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
        </div>
    </div>
  );
}
